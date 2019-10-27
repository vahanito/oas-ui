import React from 'react';
import PropTypes from 'prop-types';

Contact.propTypes = {
  contact: PropTypes.object
};

export default function Contact(props) {
  return (
    <div className="container-fluid box-shadow">
      <h5>Contact</h5>
      <hr/>
      <div className="row">
        <div className="col-md-3">Name</div>
        <div className="col">{props.contact.name}</div>
      </div>
      <div className="row">
        <div className="col-md-3">Url</div>
        <div className="col">
          <a href={props.contact.url}> {props.contact.url}</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">E-mail</div>
        <div className="col">
          <a href={'mailto:' + props.contact.email}> {props.contact.email}</a>
        </div>
      </div>
    </div>
  );
}
