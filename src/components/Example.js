import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Example = ({examples}) => {
  if (!examples) {
    return (<div>No examples available.</div>);
  }
  const tabTitles = Object.keys(examples).map(key => <Tab key={key}>{key}</Tab>);
  const tabContents = Object.keys(examples)
          .map(key => {
            const json = getJson(examples[key].value);
            return <TabPanel key={key}>
              <div>{examples[key].description}</div>
                      {json && <ReactJson name={false} collapsed={1} src={json}/>}
              {!json && <div>{examples[key].value}</div>}
                    </TabPanel>;
          });
  return (
          <div className="container-fluid box-shadow">
            <h5>Examples</h5>
            <Tabs>
              <TabList>
                {tabTitles}
              </TabList>
              {tabContents}
            </Tabs>
          </div>
  );
};

function getJson(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}

Example.propTypes = {
  examples: PropTypes.any
};

export default Example;
