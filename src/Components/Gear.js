import React, {Component} from "react";
import {Card, Carousel, Container, Button} from 'react-bootstrap';
import { connect } from "react-redux";
import ChooseSize from "./ChooseSize.js";
import { addToCart } from './CartActions.js';
import ChooseColour from "./ChooseColour.js"

 class Sale extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map((item, index )=>{
            var itemIndex = 8;
            if(index > itemIndex && index < 15){
            return(

                            <Card key={item.id}>
                        <div className="card-image">
					   <Carousel className="carousel">
					   <Carousel.Item className="carouselItem">
					     <img
					       className="carouselSlide"
					       src={item.img1}
					       alt={item.title}
					     />
					   </Carousel.Item>
					   <Carousel.Item className="carouselItem">
					     <img
					       className="carouselSlide"
					       src={item.img2}
					       alt={item.title}
					     />
					   </Carousel.Item>
					   <Carousel.Item className="carouselItem">
					     <img
					       className="carouselSlide"
					       src={item.img3}
					       alt={item.title}
					     />
					   </Carousel.Item>
					 </Carousel>
                            <span className="cardTitle">{item.title}</span>
                            <ChooseColour/>
                        </div>

                        <div className="carContent">
                            <p>{item.desc}</p>
                            <p>${item.price}</p>
                        <ChooseSize/>
						<Button onClick={()=>{this.handleClick(item.id)}} to="/Cart" className="cardButton" variant="primary">Add To Cart</Button>
                        </div>
                 </Card>
            )
}
        })
        return(
            <Container>

                <h3 className="center">Items On Sale</h3>
                <div className="container">
                    {itemList}
                </div>
            
            </Container>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale);
