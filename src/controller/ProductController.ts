import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from 'express'
import { Product } from '../models/Product'

export class ProductController {
  private productRepository = AppDataSource.getRepository(Product)
  update: any

  async all(request: Request, response: Response, next: NextFunction) {
    return await this.productRepository.find() // Await the result
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id)

    const product = await this.productRepository.findOne({
      where: { id }
    })

    if (!product) {
      return 'Product not found'
    }
    return product
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const { name, description, price, inventory } = request.body

    const product = Object.assign(new Product(), {
      name,
      description,
      price,
      inventory
    })

    return await this.productRepository.save(product) // Await the result
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id)

    let productToRemove = await this.productRepository.findOne({
      where: { id }
    })

    if (!productToRemove) {
      return 'Product does not exist'
    }

    await this.productRepository.remove(productToRemove)

    return 'Product has been removed'
  }
}
