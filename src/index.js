import React, { Component } from 'react';
import { render } from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './style.css';

import About from './about';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      items: [
        {id: 'about', name: 'About'},
        {id: 'contact', name: 'Contact'},
        {id: 'home', name: 'Codercat'}
      ],
      selectedItemId: 'home'
    }
  }
  handleMenuItemClick(event) {
    if (this.props.onMenuItemClick) {
      this.props.onMenuItemClick(event.target.id);
    }
    this.setState({
      selectedItemId: event.target.id
    })
  }
  render() {
    
    
    return (
      <div id='menu'>
        <h1 id='menu-title'>{this.state.title}</h1>
        <ul id='menu-list'>
          { this.state.items.map((i, index) => {
            return <li
              className='menu-list-item' 
              id={i.id} 
              key={index}
              style={this.state.selectedItemId === i.id ? {textDecoration: 'underline'} : {textDecoration: 'none'}}
              onClick={this.handleMenuItemClick.bind(this)}> {i.name} </li>
          }, this) }
        </ul>
      </div>
    )
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {name: 'Sneha', email: 'sbelkhale@gmail.com '},
        {name: 'Kirill', email: 'kovalewskiy@gmail.com'}
      ],
      copiedValue: 'blaa',
      copied: false
    }
  }
  render() {
    return (
      <div id='contact'>
        <h1>Contact</h1>
        { this.state.contacts.map(i => {
          return <div>
            <h2>{i.name}</h2>
            <p className='contact-entry'> Email: {i.email}</p>
            <CopyToClipboard className='contact-entry' text={i.email}>
              <button>copy</button>
            </CopyToClipboard>
          </div>
        }) }
        
      </div>
    )
  }
}

class ProjectsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          "name": "AURACARIA DREAMS",
          "description": "",
          "img": "img/auracaria-dreams.png",
          "link": "auracaria-dreams"
        },
        {
          "name": "STREET SOUNDS",
          "description": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
          "img": "img/street-sonds.jpg",
          "link": "https://streetsounds.tk"
        },
        {
          "name": "THREEJS CURVATURE",
          "description": "we're famous now i<3 mr.doob",
          "img": "img/curvatureExample.jpg",
          "link": "https://threejs.org/examples/#webgl_materials_curvature"
        },
        {
          "name": "3D TSP HEART",
          "description": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          "img": "img/tsp-3d-art.jpg ",
          "link": "tsp-3d-art"
        },
        {
          "name": "360 PHOTO TO VIDEO",
          "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
          "img": "img/360photo-to-video.jpg",
          "link": "360-photo-to-video"
        },
        {
          "name": "VERTEX CACHE",
          "description": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
          "img": "img/vertex-cache.jpg",
          "link": "vertex-cache"
        },
        {
          "name": "WHIRPOOLS",
          "description": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          "img": "img/whirpools.jpg ",
          "link": "whirlpools.html"
        },
        {
          "name": "GENDERGRAPH",
          "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
          "img": "img/gendergraph.jpg",
          "link": "gendergraph"
        },
        {
          "name": "PHOTOSPHERES",
          "description": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
          "img": "img/photospheres.jpg ",
          "link": "photospheres.html"
        },
        {
          "name": "TERMINAL PRINTS",
          "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          "img": "img/terminal-prints.jpg",
          "link": "terminal-prints.html"
        },
        {
          "name": "SUBCITY",
          "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          "img": "img/subcity.jpg",
          "link": "http://subcity.tk"
        }
      ]
    }
  }
  render() {
    return (
      <div className='view' id='projects-view'>
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
      </div>
    )
  }
}

class SocialViewPanel extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: 'kirill', 
          github: 'https://github.com/kif11', 
          instagram: 'https://instagram.com/kif11', 
          twitter: 'https://twitter.com/kovalewskiy'
        },
        {
          name: 'sneha', 
          github: 'https://github.com/sneha-belkhale', 
          instagram: 'https://www.instagram.com/snayss/',
          twitter: 'https://twitter.com/snayyss'
        }
      ]
    };
  }
  render() {
    return (
      <div id='social-media-panel'>
        { this.state.data.map((i, index) => {
          return (
            <div className='social-media-links' key={index}>
              <span className='social-media-item'>{i.name}</span>
              <a href={i.github}>
                <i className='fa fa-github social-media-item' />
              </a>
              <a href={i.instagram}>
                <i className='fa fa-instagram social-media-item' />
              </a>
              <a href={i.twitter}>
                <i className='fa fa-twitter social-media-item'></i>
              </a>
            </div>
          )
        }) }
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  handleMenuItemClick (itemId) {    
    window.location.hash = itemId;
    this.setState({route: itemId});
  }

  render() {
    let View = null;
      switch (this.state.route) {
        case 'home': View = <ProjectsView />; break;
        case 'contact': View = <Contact />; break;
        case 'about': View = <About />; break;
        default: View = <ProjectsView />;
      }
    return (
      <div id='app-view'>
        <div id='center-container'>
          <Menu onMenuItemClick={this.handleMenuItemClick.bind(this)}/>
          {View}
          <SocialViewPanel />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
