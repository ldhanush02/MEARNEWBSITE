import React from "react";
import { Carousel } from "react-bootstrap";
function Cardthree(props){
    return(
        <div>
          <h5 className="bg-black text-center text-info">Up to 50% off on electronic products | Small businesses</h5>
                <Carousel variant="dark">
  <Carousel.Item>
    <img
      
      src={props.item.pic1}
      alt="First slide"
    />
    <img  src={props.item.pic2} ></img>
    <img  src={props.item.pic3} ></img>
    <img  src={props.item.pic4} ></img>
    <img  src={props.item.pic12} ></img>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={props.item.pic5}
      alt="Second slide"
    />
        <img  src={props.item.pic6} ></img>
    <img  src={props.item.pic7} ></img>
    <img  src={props.item.pic8} ></img>
    <img  src={props.item.pic9} ></img>
    <img  src={props.item.pic10} ></img>
    <img  src={props.item.pic11} ></img>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={props.item.pic9}
      alt="Third slide"
    />
        <img  src={props.item.pic13} ></img>
    <img  src={props.item.pic14} ></img>
    <img  src={props.item.pic15} ></img>
    <img  src={props.item.pic16} ></img>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={props.item.pic17}
      alt="Forth slide"
    />
        <img  src={props.item.pic18} ></img>
    <img  src={props.item.pic19} ></img>
    <img  src={props.item.pic20} ></img>
    <img  src={props.item.pic24} ></img>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={props.item.pic21}
      alt="Forth slide"
    />
        <img  src={props.item.pic22} ></img>
    <img  src={props.item.pic23} ></img>
    <img  src={props.item.pic24} ></img>
    <img  src={props.item.pic2} ></img>
    <img  src={props.item.pic3} ></img>
  </Carousel.Item>
</Carousel>
        </div>

    )
};

export default Cardthree