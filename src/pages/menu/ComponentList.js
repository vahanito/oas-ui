import React from 'react';
import { Link } from 'react-router-dom';
import OasService from '../../services/OasService';

class ComponentList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    return (
      <div className="dropdown w-100">
        <input
          className="dropdown-toggle form-control form-control-dark"
          data-toggle="dropdown"
          aria-haspopup="true"
          placeholder="Search component"
          value={this.state.search}
          onChange={this.handleChange}
          onMouseDown={() => this.handleItemClick('')}
        />
        <div className="dropdown-menu items-dropdown ml-2" aria-labelledby="navbarDropdown">
          {this.createListItems()}
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({search: event.target.value});
  };

  handleItemClick = (item) => {
    this.setState({search: item});
  };

  createListItems = () => {
    return OasService.getComponents()
                     .sort((a, b) => a.localeCompare(b))
                     .map(
      item =>
        item.toLowerCase().includes(this.state.search.toLowerCase()) &&
        <Link key={item} to={'/oas-ui/components/' + item}>
          <button type="button" className="dropdown-item break-line" key={item}
                  onClick={() => this.handleItemClick(item)}>
            {item}
          </button>
        </Link>
    );
  };
}

export default ComponentList;
