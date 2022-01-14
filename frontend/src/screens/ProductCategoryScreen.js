import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
//import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { filteredProducts } from '../actions/productActions' //replace with filtered products action

const ProductCategoryScreen = () => {
//  const {keyword} = useParams()

const {category} = useParams() 

  const dispatch = useDispatch()

  const productFiltered = useSelector((state) => state.productFiltered)
  const { loading, error, products } = productFiltered  // filtered product reducer , loading, error, products

  useEffect(() => {
    dispatch(filteredProducts(category))             // dispatch the action
  }, [dispatch, category])


  // 1. change Product Category to appropriate name on line 37

  return (
    <>
      <Meta />
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      
      <h1>Product Category</h1>             
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6}  xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default ProductCategoryScreen