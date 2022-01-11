import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const SearchBox = () => {
    const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} >
      <Container>
      <Form.Control 
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search for Product'
        className='mr-sm-2 py-2  '
      ></Form.Control>
      <Button type="submit"  className="py-2" >
        Search
      </Button>
      </Container>
    </Form>
  )
}

export default SearchBox