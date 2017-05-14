/**
 * Created by hreid on 5/14/17.
 */

import React from 'react'
import { Grid, Row, Col, Carousel, CarouselItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'
import { seasons } from './seasons-data'
import { ScrollIntoView } from 'rrc'

export const Collection = props => {
    const season = seasons[props.match.params.season]
    const key = props.match.params.season
    return (
        <ScrollIntoView id="main">
            <main className="single-collection">
                <div className="left hidden-sm hidden-xs">
                    <img className='carousel-slide'  src={`/images/collections/${key}/index.jpg`} />
                </div>
                <div className="right">
                    <Carousel>
                        {season.slides.map(val => <CarouselItem ><img className='carousel-slide' src={`/images/collections/${key}/${val}`} /></CarouselItem>)}
                    </Carousel>
                </div>
            </main>
        </ScrollIntoView>
    )
}