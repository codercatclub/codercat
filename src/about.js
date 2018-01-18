import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='view' id='about-view'>
      <div className='main-container' id='about-container'>
          <h1>About</h1>
          <p>Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.</p>
        </div>
      </div>
    );
  }
}

export default About;