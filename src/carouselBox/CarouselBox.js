import './Carousel.css';
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import freePark from "../assets/s1-freepark.jpg";
import inSur from "../assets/s2-insurance.jpg";
import fuel from "../assets/s3-fuel.jpg";
import service from "../assets/s4-service.jpg";

export default class CarouselBox extends Component{
    render(){
        return (
            <Carousel className="d-block w-47 ">
                <Carousel.Item>
                    <img
                        className="d-block w-47"
                        src={freePark}
                        alt="парковка"
                    />
                    <Carousel.Caption>
                    <h2>Бесплатная парковка</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-47 "
                        src={inSur}
                        alt="страховка"
                    />
                    <Carousel.Caption>
                    <h2>Страховка</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-47"
                        src={fuel}
                        alt="бензин"
                    />
                    <Carousel.Caption>
                    <h2>Бензин</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-47 "
                        src={service}
                        alt="обслуживание"
                    />
                    <Carousel.Caption>
                    <h2>Обслуживание</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

