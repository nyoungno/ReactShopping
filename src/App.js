// import logo from "./logo.svg";
import logo from "./img/ABC.png";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  NavDropdown,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "./App.css";
import data from "./Data.js";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<div>상세페이지</div>} />
      </Routes>

      <Navbar bg="light" data-bs-theme="light" style={{ height: "97px" }}>
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <img
              src={logo} // 로고 이미지 파일 경로
              alt="ABC MART Logo"
              style={{ width: "100px", height: "auto" }} // 로고 크기 조절
            />
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="역대급 할인!"
              className="me-2"
              aria-label="Search"
              style={{ minWidth: "400px" }}
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
          <div
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: "bolder",

              gap: "20px",
            }}
          >
            <Nav.Link href="#pricing">LOGIN</Nav.Link>
            <Nav.Link href="#pricing">JOIN</Nav.Link>
            <Nav.Link href="#pricing">CART</Nav.Link>
            <Nav.Link href="#pricing">SHOP</Nav.Link>
          </div>
        </Container>
      </Navbar>
      <Navbar
        style={{
          backgroundColor: "red",
          color: "white",
          fontWeight: "bolder",
          textAlign: "center",
          height: "48px",
        }}
      >
        <Container>
          <div style={{ display: "flex", gap: "50px" }}>
            <NavDropdown title="BRAND" id="navbarScrollingDropdown">
              <NavDropdown.Item style={{ hover: "red" }} href="#action3">
                NIKE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">ADIDAS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MEN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">신발</NavDropdown.Item>
              <NavDropdown.Item href="#action4">의류</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="WOMEN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">신발</NavDropdown.Item>
              <NavDropdown.Item href="#action4">의류</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="KIDS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">신발</NavDropdown.Item>
              <NavDropdown.Item href="#action4">의류</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div style={{ display: "flex", gap: "50px" }}>
            <Nav.Link href="#pricing">기획전</Nav.Link>
            <Nav.Link href="#pricing">이벤트/쿠폰</Nav.Link>
            <Nav.Link href="#pricing">ONLY ABC</Nav.Link>
            <Nav.Link href="#pricing">KIDS마트</Nav.Link>
            <Nav.Link href="#pricing">0월 쇼핑 혜택</Nav.Link>
          </div>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <h2 style={{ fontWeight: "bolder", padding: "30px" }}>
        당신을 위한 맞춤 신상품
      </h2>
      <Container>
        <Row>
          {/* <Col>
            <Card1 shoes={shoes[0]}></Card1>
          </Col>
          <Col>
            <Card1 shoes={shoes[1]}></Card1>
          </Col>
          <Col>
            <Card1 shoes={shoes[2]}></Card1>
          </Col>
          <Col>
            <Card1 shoes={shoes[3]}></Card1>
          </Col>
          <Col>
            <Card1 shoes={shoes[4]}></Card1>
          </Col> */}
          {shoes.map((a, i) => {
            return (
              <Col>
                <Card1 shoes={shoes[i]}></Card1>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;

function Card1(props) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={props.shoes.image} />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bolder" }}>
          {props.shoes.title}
        </Card.Title>
        <Card.Text style={{ fontSize: "12px", height: "36px" }}>
          {props.shoes.content}
        </Card.Text>
        <p style={{ color: "red", fontWeight: "bolder" }}>
          {props.shoes.price}원
        </p>
        <Button variant="primary">주문하기</Button>
      </Card.Body>
    </Card>
  );
}
