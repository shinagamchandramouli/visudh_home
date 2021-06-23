import React from 'react'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import ProductSlider from './ProductSlider'

const PharmacyProducts = ({title}) => {
  const {
    products_loading: loading,
    products_error: error,
    products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='slider'>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div className='featured'>
        <ProductSlider productsToShow = {featured} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* background: var(--clr-primary-10); */

  padding: 2rem 0;
  margin: 3rem 4rem;
  .featured {
    /* background-color: var(--clr-grey-9); */
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default PharmacyProducts
