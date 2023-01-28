import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="ress2.jfif"
          alt="First slide"
        />
        <Carousel.Caption style={{backgroundColor:"rgba(1, 0, 0, 0.4)"}}>
          <h2>UEMF Resources</h2>
          <p style={{fontSize:"15px"}}>Est un système de réservation des ressources d'université</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="gym.jpg"
          alt="Second slide"
        />
        
        <Carousel.Caption style={{backgroundColor:"rgba(1, 0, 0, 0.4)"}}>
          <h2>UEMF Resources</h2>
          <p style={{fontSize:"15px"}}>Est un système de réservation des ressources d'université</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="terr.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{backgroundColor:"rgba(1, 0, 0, 0.4)"}}>
        <h2>UEMF Resources</h2>
          <p style={{fontSize:"15px"}}>Est un système de réservation des ressources d'université</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="salle.jpg"
          alt="fourist slide"
        />
        <Carousel.Caption style={{backgroundColor:"rgba(1, 0, 0, 0.4)"}}>
        <h2>UEMF Resources</h2>
          <p style={{fontSize:"15px"}}>Est un système de réservation des ressources d'université</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="biblio.jpg"
          alt="Five slide"
        />
        <Carousel.Caption style={{backgroundColor:"rgba(1, 0, 0, 0.4)"}}>
        <h2>UEMF Resources</h2>
          <p style={{fontSize:"15px"}}>Est un système de réservation des ressources d'université</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;