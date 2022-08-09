import { Container, } from "react-bootstrap";
import './categorySections.css'
import { Link } from "react-router-dom";

function CategorySections() {
    return ( 
        <>
        <Container>
            <p className='h1 text-capitalized text-center'>Items By Category</p>
            <p className='text-secondary text-capitalized text-center'>Know What You're Looking For?</p>
        </Container>
        <Container className="d-flex flex-row">
            <Link to={'/category/women'} className="women-cat p-5 m-1 d-flex justify-content-center align-items-center w-50">
            <div >
                <p className="display-1 cat">Women</p>
            </div>
            </Link>
            
            <div className="w-50 m-1">
            <Link to={'/category/men'}>
            <div className="men-cat d-flex justify-content-center align-items-center w-100 h-50 border-1">
                <p className="display-1 cat">Men</p>
            </div>
            </Link>
            <Link to={'/category/accessories'}>
            <div className="acc-cat d-flex justify-content-center align-items-center w-100 h-50">
                <p className="display-1 cat">Accessories</p>
            </div>
            </Link>
            </div>
            
        </Container>
        </>
     );
}

export default CategorySections;