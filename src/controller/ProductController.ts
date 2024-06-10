import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from 'express'
import { Product } from '../models/Product'

export class ProductController {
  private productRepository = AppDataSource.getRepository(Product)

  async all(request: Request, response: Response, next: NextFunction) {
    try {
      const products = await this.productRepository.find()
      response.json(products)
    } catch (error) {
      response.status(500).json({ message: 'Internal server error' })
    }
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id)
    const product = await this.productRepository.findOne({ where: { id } })
    if (!product) {
      response.status(404).send('Product not found')
    } else {
      response.json(product)
    }
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const { name, description, price, inventory } = request.body
    const product = Object.assign(new Product(), {
      name,
      description,
      price,
      inventory
    })
    const savedProduct = await this.productRepository.save(product)
    response.json(savedProduct)
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id)
    const { name, description, price, inventory } = request.body
    let product = await this.productRepository.findOne({ where: { id } })
    if (!product) {
      response.status(404).send('Product not found')
    } else {
      product = Object.assign(product, { name, description, price, inventory })
      const updatedProduct = await this.productRepository.save(product)
      response.json(updatedProduct)
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id)
    const product = await this.productRepository.findOne({ where: { id } })
    if (!product) {
      response.status(404).send('Product not found')
    } else {
      await this.productRepository.remove(product)
      response.json({ message: 'Product has been removed' })
    }
  }
}
