import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

import './ProductListings.css'

import { Link, useParams}
from 'react-router-dom';

import { useState, useEffect, } from "react";



// PAGINATION 
import Pagination from 'react-bootstrap/Pagination';

// PRODUCT LISTING
export default function ProductListings(){
  
  let page = useParams();
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    axios.get(`http://localhost:3000/products?_page=${page.page}&_limit=8&_sort=price&_order=desc`).then((response) => {
      setProducts(response.data);
    });
  }, []);
  
  function reload(page) {
    axios.get(`http://localhost:3000/products?_page=${page}&_limit=12`).then((response) => {
      setProducts(response.data);
      console.log(`${page}`)
      document.getElementById(`1`).classList.remove('active')
      document.getElementById(`2`).classList.remove('active')
      document.getElementById(`3`).classList.remove('active')
      document.getElementById(`${page}`).classList.add('active')
      
      window.scrollTo(0, 0)
    });}
    
    if (!products) return null;
    
    
    return (
      
      <>
        <Container>
            <h1 className='text-center m-5'>Products</h1>
        </Container>

      <Container>
        <Row>
        {
          
          products.map(product =>
            
            <Col sm={12} xl={3} md={6} fluid="md" className='p-4' key={`${product.id}`}>
                    <Card style={{ }} >
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer className='d-flex flex-row justify-content-between'>
                            <p className='text-secondary h5'><span className='small'>$</span>   {product.price}</p>
                            <Link to={`/details/${product.id}`}><Button>See more</Button></Link>
                        </Card.Footer>
                    </Card>
              </Col>
            )
          }
        </Row>
      </Container>

      <Container className='d-flex flex-row justify-content-center'>
        <Pagination>
          <Pagination.Item id='1'><Link to='/products/1' onClick={() => reload(1)}>{1}</Link></Pagination.Item>
          <Pagination.Item id='2'><Link to='/products/2' onClick={() => reload(2)}>{2}</Link></Pagination.Item>
          <Pagination.Item id='3'><Link to='/products/3' onClick={() => reload(3)}>{3}</Link></Pagination.Item>
        </Pagination>
      </Container>
      </>

    )
  }

