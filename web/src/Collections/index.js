/**
 * Created by hreid on 5/12/17.
 */

import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'
import { seasons } from './seasons-data'

// import { Moment } from 'moment'

export const Collections = props => (
    <main className="collections">
        <Grid>
            <Row className="">
                <Col md={12}>
                    <div className="collection-list">
                        { Object.keys(seasons).map(key => <CollectionIndex key={key} {...seasons[key] } /> ) }
                    </div>
                </Col>
            </Row>
        </Grid>
    </main>
)

const CollectionIndex = props => {
    const {season, year, title, shortDescription} = props
    const key = `${season.code}_${year}`
    return (
        <Row className={`collection ${season.code} ${year}`}>
            <Col md={6} className="meta">
                <span className="season" dangerouslySetInnerHTML={{__html: season.title}} />
                <span className="year"><sup>{(year - 2000) + "/" + (year - 1999)}</sup></span>
                <div className="title">
                    <span className="title-label">TITLE:</span>
                    <span className="title-value" dangerouslySetInnerHTML={{__html: title}} />
                </div>
                <div className="description"  dangerouslySetInnerHTML={{__html: shortDescription}} />
                <div className="collections-cta">
                    <Link className="" to={`/collections/${key}`}>View Collection</Link>
                </div>
            </Col>
            <Col md={6} className="index-slide"><Link className="" to={`/collections/${key}`}><img src={`/images/collections/${key}/index.jpg`} /></Link></Col>
        </Row>
    )
}