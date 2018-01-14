import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [{
        "name": "360 PHOTO TO VIDEO",
        "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
        "img": "img/360photo-to-video.png",
        "link": "360-photo-to-video"
      }, {
        "name": "GENDERGRAPH",
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
        "img": "img/gendergraph.png",
        "link": "gendergraph"
      }, {
        "name": "STREET SOUNDS",
        "description": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "img": "img/street-sonds.png",
        "link": "street-sounds.html"
      }, {
        "name": "SUBCITY",
        "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "img": "img/subcity.png",
        "link": "http://subcity.tk"
      }, {
        "name": "TERMINAL PRINTS",
        "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "img": "img/terminal-prints.png",
        "link": "terminal-prints.html"
      }, {
        "name": "VERTEX CACHE",
        "description": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "img": "img/vertex-cache.png",
        "link": "vertex-cache"
      }, {
        "name": "WHIRPOOLS",
        "description": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "img": "img/whirpools.png ",
        "link": "whirlpools.html"
      }, {
        "name": "PHOTOSPHERES",
        "description": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "img": "img/photospheres.png ",
        "link": "photospheres.html"
      }]
    };
  }

  render() {
    return (
      <div id='app-view'>
        <div className='view' id='projects-view'>
          <h1 id='main-title'>codercat.</h1>
          <div className='main-container' id='project-container'>
            { this.state.projects.map((i, index) => {
              return (
                <a id='project-box' href={i.link} key={index}>
                  <img src={i.img} alt={i.name} />
                  <h1 id='box-title'>{i.name}</h1>
                </a>
              );
            }) }
          </div>
          <div id='scroll-down-btn-container'>
            <div id='scroll-down-btn'></div>
          </div>
        </div>
        <hr />
        <div className='view' id='about-view'>
          <div className='main-container' id='about-container'>
            <h1>About</h1>
            <p>Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.</p>
          </div>
        </div>
      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
