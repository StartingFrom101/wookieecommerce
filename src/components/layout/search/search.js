import { waitFor } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Search() {

    let navigate = useNavigate();

    return ( 
        <>
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" id='search'/>
                <Button variant="outline-success" onClick={async () => 
                    {
                        const searchTerm = document.getElementById('search').value 
                        console.log(searchTerm)
                        navigate(`/search/${searchTerm}`)
                        
                    }
                     }>Search</Button>
            </Form>
        </>
     );
}

export default Search;