import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies } from "actions/moviesList";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const genre = [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }, { "id": 10770, "name": "TV Movie" }, { "id": 53, "name": "Thriller" }, { "id": 10752, "name": "War" }, { "id": 37, "name": "Western" }]
const Menu = ({searchShow}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const updateInputValue = (evt) => {
    const val = evt.target.value;
    setSearch(val);
    dispatch(searchMovies(val))
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Carma</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={`/`} class="nav-item active">

              <a class="nav-link">Home</a>
            </Link>
            <Link to={`/chart`} class="nav-item active">

              <a class="nav-link">Top 10 Movies</a>
            </Link>
            <NavDropdown title="Sort by type" id="basic-nav-dropdown">
              {genre.map((item) =>
                <Link to={`/sort/${item.id}`} class="nav-item active">
                  <NavDropdown.Item href="#action/3.1">{item.name}</NavDropdown.Item>
                </Link>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {searchShow && <Navbar.Collapse className="justify-content-end">
          <NavDropdown.Item className="w-22">
          </NavDropdown.Item>
         <NavDropdown.Item className="w-22">
            <input value={search} class="form-control mr-sm-2 w-" placeholder="search movie" onChange={evt => updateInputValue(evt)} />
          </NavDropdown.Item>
        </Navbar.Collapse>}
      </Container>
    </Navbar>
  );
};

export default Menu;
