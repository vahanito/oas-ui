import React from 'react';
import OasService from '../../services/OasService';
import Contact from './Contact';
import License from './License';

class Home extends React.Component {

  render() {
    const info = OasService.oas.info;
    if (info) {
      return (
        <>
          {}
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
    }
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }
}

export default Home;
