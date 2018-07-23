import React from 'react';
import { socialIconsUsers } from '../constants';


export default function SocialViewPanel() {
  return (
    <div id="social-media-panel">
      {socialIconsUsers.map(user => (
        <div className="social-media-links" key={user.name}>
          <span className="social-media-item">
            {user.name}
          </span>
          <a href={user.github}>
            <i className="fa fa-github social-media-item" />
          </a>
          <a href={user.instagram}>
            <i className="fa fa-instagram social-media-item" />
          </a>
          <a href={user.twitter}>
            <i className="fa fa-twitter social-media-item" />
          </a>
        </div>
      ))}
    </div>
  );
}