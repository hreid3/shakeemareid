/**
 * Created by hreid on 5/12/17.
 */

import React from 'react'
import { Grid, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const PageFooter = props => (
    <footer>
        <Grid>
            <Row>
                <div className="footer-content">
                    <div className="instagram-header">We're on INSTAGRAM</div>
                    <div>#SHAKEEMAREIDDESIGNS</div>
                    <div className="instagram-images">
                        <a href="http://zh.ink361.com/app/users/3125848461/shakeemareiddesigns/photos">
                            <img src="/images/footer_images_0000s_0023_Layer-2.png"/>
                            <img src="/images/footer_images_0000s_0022_Layer-3.png"/>
                            <img src="/images/footer_images_0000s_0021_Layer-4.png"/>
                            <img src="/images/footer_images_0000s_0020_Layer-5.png"/>
                        </a>
                    </div>
                </div>
            </Row>
        </Grid>
    </footer>
)