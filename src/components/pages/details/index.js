import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./details.css"

export default function App() {
    let itemID = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line
        axios.get(`http://localhost:3000/products?id=${itemID.id}`).then((response) => {
        setPost(response.data);
    });
    }, []);
    
    // INPUT
    const [value, setValue] = useState(1);

    if (!post) return null;
    
    function handleAddToCart(item, quantity){
        console.log(item, quantity)
        localStorage.setItem('cart', JSON.stringify(item))
    }

    return (
        <>
        <Container>
            <Row>
                <Col sm={12} lg={6}>
                        <Image src={post[0].image} className="w-100"/>
                </Col>
                <Col sm={12} lg={6}>
                    <Container flex>
                        <p className="display-1">{post[0].name}</p>
                        <span className="m-1">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        </span>
                        <p className="py-3 h5">{post[0].description}</p>
                    </Container>
                    <Container flex>
                        <form>
                            <ButtonGroup aria-label="amount">
                                <Button variant="primary" onClick={() => setValue(value + 1)}>+</Button>
                                <input id='amount' type={'text'} placeholder={value} className="w-50 text-center" readOnly></input>
                                <Button variant="primary" onClick={() => {if(value>=2){ setValue(value - 1)}}}>-</Button>
                            </ButtonGroup>
                            <br/>
                            <Button variant="outline-primary" className="px-5 my-3" onClick={() => {handleAddToCart(post[0], value)}}>Add to Cart</Button>
                        </form>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
  );
}