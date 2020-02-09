import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({contact}) => {
  return (
    <div className="container-fluid box-shadow">
      <h5>Contact</h5>
      <hr/>
      <div className="row">
        <div className="col-md-3">Name</div>
        <div className="col">{contact.name}</div>
      </div>
      <div className="row">
        <div className="col-md-3">Url</div>
        <div className="col">
          <a href={contact.url}> {contact.url}</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">E-mail</div>
        <div className="col">
          <a href={'mailto:' + contact.email}> {contact.email}</a>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object
};

export default Contact;
