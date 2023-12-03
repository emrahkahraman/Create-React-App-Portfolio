import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact";
import BlogLayout from "./blog";
import Blog from "./blog/Blog";
import Categories from "./blog/Categories";
import Post from "./blog/Post";
import Page404 from "./Page404";
import Portfolio from "./Portfolio";
import Applications from "./Applications";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Menu() 
{
    return (
     <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/">Emrah Kahraman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Ana Sayfa</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/applications">My Applications</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/contact">İletişim</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/applications" element={<Applications/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/blog" element={<BlogLayout/>} >
                <Route index element={<Blog/>}/>
                <Route path="categories" element={<Categories/>}/>
                <Route path="post/:url" element={<Post/>}/>
            </Route>
            <Route path="*" element={<Page404/>} />
        </Routes>
     </>
  );
}
