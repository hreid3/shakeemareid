/**
 * Created by hreid on 5/12/17.
 */

import React from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import './styles.css'
// import apparel1 from './images/apparel-_0000s_0000_Layer-2.png'
// import apparel2 from './images/apparel-_0000s_0005_Layer-3.png'
// import apparel3 from './images/apparel-_0000s_0001_Layer-5.png'
// import apparel4 from './images/apparel-_0000s_0003_Layer-6.png'
// import apparel5 from './images/apparel-_0000s_0002_Layer-7.png'
// import apparel6 from './images/apparel-_0000s_0004_Layer-8.png'
import montage from './images/apparelpage2.jpg'

export const Apparel = props => (
    <main className="homepage">
        <Grid fluid>
            <Row className="no-gutter ">
                <Col md={12}>

                    <div className="">
                        <img src={montage} className="montage" />
                        {/*<img src={apparel1} className="apparel1" />*/}
                        {/*<img src={apparel2} className="apparel2" />*/}
                        {/*<img src={apparel3} className="apparel3" />*/}
                        {/*<img src={apparel5} className="apparel5" />*/}
                        {/*<img src={apparel4} className="apparel4" />*/}
                        {/*<img src={apparel6} className="apparel6" />*/}
                    </div>
                </Col>
            </Row>
        </Grid>
    </main>
)


