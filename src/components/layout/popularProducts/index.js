import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

import { Link}
    from 'react-router-dom';

export default class PopularProducts extends React.Component {
  state = {
    products: []
  }


  componentDidMount() {
    axios.get(`http://localhost:3000/products?_page=1&_limit=8`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
        <>
        <Container>
            <p className='h1 text-capitalized text-center'>Our Most Popular Products</p>
            <p className='text-secondary text-capitalized text-center'>All-time Best Sellers</p>

        </Container>

      <Container>
        <Row>
        {
          this.state.products
            .map(product =>

              <Col sm={12} xl={3} md={6} fluid="md" className='p-4' key={`${product.id}`}>
                    <Card style={{ }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer className='d-flex flex-row justify-content-between'>
                            <p className='text-secondary h5'><span className='small'>$</span>   {product.price}</p>
                            <Link to={`details/${product.id}`}><Button>See more</Button></Link>
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
}