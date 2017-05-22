import React, { Component } from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import  designerImage from './images/designer-sreid.png'
import './About.css'

export class About extends Component {
    render() {
        return (
            <main className="about">
                <Grid>
                    <Row className="">
                        <Col md={6}>
                            <img src={designerImage} className="designer-image"/>
                        </Col>
                        <Col md={6}>
                            <div className="about-content">
                                <div>Contact</div>
                                <div className="about-designer-indent">The</div>
                                <div>Designer</div>
                                <div className="coming-soon contact-designer">Email: <a href="mailto:Shakeema_reid@fitnyc.edu">Shakeema_reid@fitnyc.edu</a></div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </main>
        )
    }
}

