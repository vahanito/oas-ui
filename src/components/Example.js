import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Example = (props) => {
  if (!props.examples) {
    return (<div>No examples available.</div>);
  }
  const tabTitles = Object.keys(props.examples).map(key => <Tab key={key}>{key}</Tab>);
  const tabContents = Object.keys(props.examples)
          .map(key => {
            const json = getJson(props.examples[key].value);
            return <TabPanel key={key}>
                      <div>{props.examples[key].description}</div>
                      {json && <ReactJson name={false} collapsed={true} src={json}/>}
                      {!json && <div>{props.examples[key].value}</div>}
                    </TabPanel>;
          });
  return (
          <div>
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
