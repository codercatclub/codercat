import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { contacts } from './constants';


export default function Contacts() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      {contacts.map(i => (
        <div>
          <h2>{i.name}</h2>
          <p className="contact-entry">{' Email: '}{i.email}</p>
          <CopyToClipboard className="contact-entry" text={i.email}>
            <button type="button">copy</button>
          </CopyToClipboard>
        </div>
      ))}
    </div>
  );
}
