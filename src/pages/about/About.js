import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  console.log(props.match.path);
  return (
    <>
      <Link to="/">HOME</Link>

      <h2>About Us</h2>
      <p>lorem ipsum amet sur ipur amet bla bla bla</p>
    </>
  );
};

export default About;
