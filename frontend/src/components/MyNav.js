import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';
import './MyNav.css'
import NavDropdown from "react-bootstrap/NavDropdown";

const MyNav = () => {

    return (
        <>
            <Navbar className="shadow-sm" bg="white">
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
                    <Nav.Link as={Link} to="/info_modify"><span className="menufont">정보 수정</span></Nav.Link>
                    <Nav.Link as={Link} to="/mypost"><span className="menufont">나의 게시글</span></Nav.Link>
                    {/*<Nav className="ml-auto">*/}
                    {/*    <Nav.Link href="#login">*/}
                    {/*        <img*/}
                    {/*            src={require("../images/login.png")}*/}
                    {/*            width="100"*/}
                    {/*            height="60"*/}
                    {/*        />*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav>*/}
                    <NavDropdown drop='left' className="myinfo_dropdown ml-auto" title="닉네임" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <div></div>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyNav;