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
                                <div>About</div>
                                <div className="about-designer-indent">The</div>
                                <div>Designer</div>
                                <div className="coming-soon">...Coming Soon</div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </main>
        )
    }
}

