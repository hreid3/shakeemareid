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
            <Navbar.Collapse>
                <Nav pullRight className="moved-nav-header">
                    {/*<NavItem eventKey={1}><Link to="/">Home</Link></NavItem>*/}
                    <NavItem eventKey={2}><Link to="/collections">Collections</Link></NavItem>
                    <NavItem eventKey={3}><Link to="/apparel">Apparel</Link></NavItem>
                    <NavItem eventKey={4}><Link to="/contact-shakeema-reid">Contact</Link></NavItem>
                    <NavItem href="https://www.instagram.com/shakeemareiddesigns/?hl=en" target="_blank">Instagram</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)
