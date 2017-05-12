/**
 * Created by hreid on 5/12/17.
 */
import React from 'react'
import { Grid, Navbar, Nav, NavItem, Row} from 'react-bootstrap';
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

export const PageHeader = props => (
    <header>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"><img src={logo}/></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Nav pullRight className="moved-nav-header">
                <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
                <NavItem eventKey={2}><Link to="/">Collections</Link></NavItem>
                <NavItem eventKey={3}><Link to="/apparel">Apparel</Link></NavItem>
                <NavItem eventKey={4}><Link to="/about-shakeema-reid">About</Link></NavItem>
                <NavItem eventKey={5}><Link to="/">Instagram</Link></NavItem>
            </Nav>
        </Navbar>
    </header>
)
