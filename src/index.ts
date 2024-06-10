import express from 'express'
import * as bodyParser from 'body-parser'
import { Request, Response } from 'express'
import { AppDataSource } from './data-source'
import { Routes } from './routes'
import { Product } from './models/Product'

AppDataSource.initialize()
  .then(async () => {
    const app = express()
    app.use(bodyParser.json())

    Routes.forEach(route => {
      ;(app as any)[route.method](
        route.route,
        async (req: Request, res: Response, next: Function) => {
          try {
            const result = await new (route.controller as any)()[route.action](
              req,
              res,
              next
            )
            if (result !== null && result !== undefined) {
              res.json(result)
            }
          } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
          }
        }
      )
    })

    app.listen(3000)

    const productRepository = AppDataSource.getRepository(Product)

    await productRepository.clear()

    await productRepository.save(
      productRepository.create({
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 10.99,
        inventory: 100
      })
    )

    await productRepository.save(
      productRepository.create({
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 19.99,
        inventory: 50
      })
    )

    console.log(
      'Express server has started on port 3000. Open http://localhost:3000/products to see results'
    )
  })
  .catch(error => console.log(error))
