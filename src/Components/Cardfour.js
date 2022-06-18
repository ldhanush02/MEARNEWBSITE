import React from "react";
import { Carousel } from "react-bootstrap";
function Cardfour(props){
    return(
        <div>
                <Carousel variant="dark">
  <Carousel.Item>
    <img className="w-100 h-100"
      
      src={props.item.pic1}
      alt="First slide"
    />
    </Carousel.Item>
  <Carousel.Item>
    <img className="w-100"
      src={props.item.pic2}
      alt="Second slide"
    />
    </Carousel.Item>
  <Carousel.Item>
    <img className="w-100"
      src={props.item.pic3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img className="w-100"
      src={props.item.pic4}
      alt="Forth slide"
    />
    </Carousel.Item>
</Carousel>
        </div>

    )
};

export default Cardfour