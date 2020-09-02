import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import './MyNav.css'

function MyNav() {
    return (
        <>
            <Navbar bg="black">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={require("../images/logo.png")}
                        width="200"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav.Link as={Link} to="/about"><span className="menufont">소개</span></Nav.Link>
                    <Nav.Link as={Link} to="/guide"><span className="menufont">가이드라인</span></Nav.Link>
                    <Nav className="ml-auto">
                        <Nav.Link href="#login">
                            <img
                                src={require("../images/login.png")}
                                width="100"
                                height="60"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyNav;