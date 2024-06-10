import { ProductController } from './controller/ProductController'

export const Routes = [
  {
    method: 'get',
    route: '/products',
    controller: ProductController,
    action: 'all'
  },
  {
    method: 'get',
    route: '/products/:id',
    controller: ProductController,
    action: 'one'
  },
  {
    method: 'post',
    route: '/products',
    controller: ProductController,
    action: 'save'
  },
  {
    method: 'put',
    route: '/products/:id',
    controller: ProductController,
    action: 'update'
  },
  {
    method: 'delete',
    route: '/products/:id',
    controller: ProductController,
    action: 'remove'
  }
]
