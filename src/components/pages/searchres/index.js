import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

import { Link, useParams}
from 'react-router-dom';

import { useState, useEffect, } from "react";


// PRODUCT LISTING
export default function SearchRes(){
  
  let search = useParams();
  const [products, setProducts] = useState(null);
  
    useEffect((result) => {

    result = search.searchterm

    // eslint-disable-next-line react-hooks/exhaustive-deps
    axios.get(`http://localhost:3000/products?q=${result}`).then((response) => {
      setProducts(response.data);
    });
  }, [search.searchterm]);
  
    if (!products) return null;
    
    
    return (
      
      <>
        <Container>
            <h1 className='text-center m-5 text-capitalize'>Items with the result: {search.searchterm}</h1>
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
      
      </>

    )
  }

