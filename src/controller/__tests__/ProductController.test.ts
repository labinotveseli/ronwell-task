import { Request, Response } from 'express'
import { ProductController } from '../ProductController'
import { AppDataSource } from '../../data-source'

describe('ProductController', () => {
  let productController: ProductController
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  const mockNext = jest.fn()

  beforeAll(async () => {
    await AppDataSource.initialize()
  })

  beforeEach(() => {
    productController = new ProductController()
    mockRequest = {}
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
  })

  it('should get all products', async () => {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: 10.99,
        inventory: 100
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description 2',
        price: 19.99,
        inventory: 50
      }
    ]
    jest.spyOn(AppDataSource, 'getRepository').mockReturnValue({
      find: jest.fn().mockResolvedValue(products)
    } as any)

    await productController.all(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.json).toHaveBeenCalledWith(products)
  })

  it('should get one product by id', async () => {
    const productId = 1
    const product = {
      id: productId,
      name: 'Product 1',
      description: 'Description 1',
      price: 10.99,
      inventory: 100
    }
    jest.spyOn(AppDataSource, 'getRepository').mockReturnValue({
      findOne: jest.fn().mockResolvedValue(product)
    } as any)
    mockRequest.params = { id: productId.toString() }

    await productController.one(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.json).toHaveBeenCalledWith(product)
  })

  it('should save a new product', async () => {
    const newProduct = {
      name: 'New Product',
      description: 'New Description',
      price: 15.99,
      inventory: 75
    }
    const savedProduct = { id: 3, ...newProduct }
    jest.spyOn(AppDataSource, 'getRepository').mockReturnValue({
      save: jest.fn().mockResolvedValue(savedProduct)
    } as any)
    mockRequest.body = newProduct

    await productController.save(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.json).toHaveBeenCalledWith(savedProduct)
  })

  it('should update a product', async () => {
    const productId = 1
    const updatedProductData = {
      name: 'Updated Product',
      description: 'Updated Description',
      price: 12.99,
      inventory: 80
    }
    const updatedProduct = { id: productId, ...updatedProductData }
    jest.spyOn(AppDataSource, 'getRepository').mockReturnValue({
      findOne: jest.fn().mockResolvedValue(updatedProduct),
      save: jest.fn().mockResolvedValue(updatedProduct)
    } as any)
    mockRequest.params = { id: productId.toString() }
    mockRequest.body = updatedProductData

    await productController.update(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.json).toHaveBeenCalledWith(updatedProduct)
  })

  it('should remove a product', async () => {
    const productId = 1
    const productToRemove = {
      id: productId,
      name: 'Product 1',
      description: 'Description 1',
      price: 10.99,
      inventory: 100
    }
    jest.spyOn(AppDataSource, 'getRepository').mockReturnValue({
      findOne: jest.fn().mockResolvedValue(productToRemove),
      remove: jest.fn().mockResolvedValue(productToRemove)
    } as any)
    mockRequest.params = { id: productId.toString() }

    await productController.remove(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    )

    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Product has been removed'
    })
  })
})
