import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'offers',
    url: '/offers',
  }
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const categories = [
  {id: 1, title: 'pharmacy' },
  {id: 2, title: 'lab tests' },
  {id: 3, title: 'baby needs' },
  {id: 4, title: 'personal care' },
  {id: 5, title: 'health & neutrients' },
  {id: 6, title: 'vitamins & supplements'}
]

export const products_url = 'https://products-api-visudh.herokuapp.com/products/get_products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

// baseURl for API: https://products-api-visudh.herokuapp.com/

// https://course-api.com/react-store-products
