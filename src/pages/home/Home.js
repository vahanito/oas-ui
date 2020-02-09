import React from 'react';
import OasService from '../../services/OasService';
import Contact from './Contact';
import License from './License';

const Home = () => {
  const info = OasService.oas.info;
  return (
    <>
      <h2>{info.title}</h2>
      {info.version && <h5>Version: {info.version}</h5>}
      {
        info.description && <div className="row">
          <div className="col">
            <p>{info.description}</p>
          </div>
        </div>
      }
      {info.contact && <Contact contact={info.contact}/>}
      {info.license && <License license={info.license}/>}
    </>
  );
};

export default Home;
