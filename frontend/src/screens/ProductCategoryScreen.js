import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import styled from 'styled-components';
//import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { filteredProducts } from '../actions/productActions' //replace with filtered products action

const ProductCategoryScreen = () => {
//  const {keyword} = useParams()


const [products, setProducts] = useState([])

const [sortedProducts, setSortedProducts] = useState([])

const [sortBy, setSortBy] = useState("")

const {category} = useParams() 

  const dispatch = useDispatch()

  const productFiltered = useSelector((state) => state.productFiltered)
  const { loading, error, filterproducts } = productFiltered  // filtered product reducer , loading, error, products

  useEffect(() => {
    setProducts([])
   
    dispatch(filteredProducts(category))             // dispatch the action
  }, [dispatch, category])



const  brandFilterAction = ((brand)=>{
    if(brand.length) {
const brandFilterProducts = filterproducts.filter(product=>product.brand===brand)

      if (!brandFilterProducts.length ) {
    //    <Message variant='danger'>No Products Found</Message>
        setProducts(['empty'])
      }
      
      else {
        setProducts(brandFilterProducts)
      }
        
  }
  else {
    setProducts([])
    dispatch(filteredProducts(category))
  }
})

useEffect(() => {
  setSortBy('')
    setSortedProducts([])
 
  if (sortBy.length &&  products.length){
 setSortedProducts(
    sortBy === "Ascending" ? 
 
    products.sort((a,b) =>  (a.price > b.price ? 1 : -1))

    : 
    products.sort((a,b) =>  (a.price > b.price ? -1 : 1))
 )
   }

   else if (sortBy.length){
setSortedProducts(
    sortBy === "Ascending" ? 
    filterproducts.sort((a,b) =>  (a.price > b.price ? 1 : -1))

    : 
    filterproducts.sort((a,b) =>  (a.price > b.price ? -1 : 1))
)
   }
   else if (!sortBy.length){
    
    setSortedProducts([])
    
   

   }
  
  }
, [sortBy])




  // 1. change Product Category to appropriate name on line 37

  return (
    <>
      <Meta />
      <Container>
      <Row>
      
        
        <Col xs={3}>
        
          
        <Form.Select label="Brand" onChange={(e) => brandFilterAction(e.target.value)}> 
        <option value="">Brand</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Google">Google</option>
        <option value="Oneplus">Oneplus</option>
        </Form.Select> 
       
       
        </Col>
        <Col xs={3}>
        <Form.Select  label="Price" onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Price</option>
        <option value="Descending">Highest to Lowest</option>
        <option value="Ascending">Lowest to Highest</option>
        </Form.Select>
        
        </Col>
        
        <Col className="d-flex justify-content-end">
        
        <Link to='/' className='btn btn-light '>
          Go Back
        </Link>
        
        </Col>
        
        </Row>
        </Container>
      <h1>Product Category</h1>
      <Row>
     
      <Col>         
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        { products[0]==="empty"  ?
        <Message variant='danger'>Product not found</Message>

        : sortedProducts.length?
        <Row>
          {sortedProducts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={6} xl={4} >
              <Product product={product} />
            </Col>
          ))}
        </Row>

: products.length ?
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={6} xl={4} >
                <Product product={product} />
              </Col>
            ))}
          </Row>

          : 
          <Row>
            {filterproducts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={6} xl={4} >
                <Product product={product} />
              </Col>
            ))}
          </Row>
}


        </>
      )}
      </Col>    
      </Row>
    </>
  )
            }

export default ProductCategoryScreen