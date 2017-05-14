import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col} from 'react-bootstrap'
import  hpImage from './images/homepage_0000s.png'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <main className="homepage">
                <Grid fluid>
                    <Row className="no-gutter ">
                        <Col md={6}>
                           <img src={hpImage} className="hp-image"/>
                        </Col>
                        <Col md={6}>
                            <div className="hp-backdrop">
                                <div className="topbox"></div>
                                <div className="bottombox"></div>
                                <div className="collection-title">
                                    <div className="spring-text">Spring</div>
                                    <div className="summer-text">Summer <sup className="collection-season">17-18</sup></div>
                                </div>
                            </div>
                            <div className="collections-cta"><Link to="/collections/SPRING_RTW_2017">View Collection</Link></div>
                        </Col>
                    </Row>
                </Grid>
            </main>
        )
    }
}

export default Home
