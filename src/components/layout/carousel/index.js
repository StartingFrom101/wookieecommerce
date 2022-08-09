import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import "./HomeCarousel.css"

function HomeCarousel() {
  return (
    <Carousel fade={true} variant="dark" pause='hover' touch={true} className='carousel-height'>
      <Carousel.Item>
        <img className="d-block carousel-height" src="slide-01.jpg" alt="First slide"/>
        <Carousel.Caption className='h-100 d-flex align-items-center justify-content-center flex-column '>
          <span className='white-overlay'>
          <p className='titleDisplay display-1 text-uppercase'>Summer is here!</p>
          <p className='display-4 subtitleDisplay'>Up to <span className='mark'>50% off</span> new markdowns</p>
          </span>          
          <Link to={'/products/1'}>
          <Button className='px-5 py-3 m-3'><span className='h5'>Shop Now!</span></Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carousel-height" src="slide-02.jpg" alt="Second slide"/>
        <Carousel.Caption className='h-100 d-flex align-items-center justify-content-center flex-column'>
          <span className='white-overlay'>
        <p className='display-1 titleDisplay text-uppercase'>Sale up to 50%!</p>
          <p className='display-4 subtitleDisplay'>All Things Essential</p>
          </span>
          <Link to={'/products/1'}>
          <Button className='px-5 py-3 m-3'><span className='h5'>Shop Now!</span></Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;