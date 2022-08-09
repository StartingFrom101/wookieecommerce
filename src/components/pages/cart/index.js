import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './cart.css'
function Cart() {
    let cartItems = JSON.parse(localStorage.getItem('cart'))
    
    return ( 
        <>
        <Container>
                <Col className='p-4' key={`${cartItems.id}`} >
                    <Card style={{}} >
                    <Card.Img variant="" src={cartItems.image} style={{}} />
                    <Card.Body>
                        <Card.Title>{cartItems.name}</Card.Title>
                        <Card.Text>
                            {cartItems.description}
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer className='d-flex flex-row justify-content-between'>
                            <p className='text-secondary h5'><span className='small'>$</span>   {cartItems.price}</p>
                        </Card.Footer>
                    </Card>

                    <Card style={{}} >
                    <Card.Img variant="" src={cartItems.image} style={{}} />
                    <Card.Body>
                        <Card.Title>{cartItems.name}</Card.Title>
                        <Card.Text>
                            {cartItems.description}
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer className='d-flex flex-row justify-content-between'>
                            <p className='text-secondary h5'><span className='small'>$</span>   {cartItems.price}</p>
                        </Card.Footer>
                    </Card>
              </Col>
              </Container>
        </>
     );
}

export default Cart;