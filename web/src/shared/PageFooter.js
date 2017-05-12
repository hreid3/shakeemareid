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
                    <div className="instagram-images">Images</div>
                </div>
            </Row>
        </Grid>
    </footer>
)