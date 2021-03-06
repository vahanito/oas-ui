import React from 'react';
import { Link } from 'react-router-dom';
import PathComponent from '../../components/PathComponent';
import OasService from '../../services/OasService';

const methodsOrder = {
  'HEAD': 1,
  'OPTIONS': 2,
  'POST': 3,
  'GET': 4,
  'PUT': 5,
  'PATCH': 6,
  'DELETE': 7
};

class ResourceList extends React.Component {

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
          placeholder="Search resource"
          value={this.state.search}
          onChange={this.handleChange}
          onMouseDown={() => this.handleItemClick('')}
        />
        <div className="dropdown-menu items-dropdown ml-2" aria-labelledby="navbarDropdown">
          {this.createTaggedListItems()}
          {this.createListItemsWithoutTag()}
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({search: event.target.value.toLowerCase()});
  };

  handleItemClick = (item) => {
    this.setState({search: item});
  };

  createListItemsWithoutTag = () => {
    return OasService.getResourcesWithoutTag()
                     .map(resource =>
                       (this.showResource(resource)) &&
                       <Link key={resource.operationId} to={'/resources/' + resource.operationId}>
                         <button type='button'
                                 data-toggle="tooltip" data-placement="bottom" title={resource.operationId}
                                 className='dropdown-item break-line'
                                 onClick={() => this.handleItemClick('')
                                 }>
                           <PathComponent method={resource.method} path={resource.path} deprecated={resource.deprecated}/>
                         </button>
                       </Link>
                     );
  };

  createTagResourcesList = (tag) => {
    return OasService.getResourcesByTag(tag)
                     .sort((a, b) => this.sortResources(a, b))
                     .map(resource =>
                       (this.showTag(tag) || this.showResource(resource)) &&
                       <Link key={resource.operationId} to={'/resources/' + resource.operationId}>
                         <button type='button'
                                 data-toggle="tooltip" data-placement="bottom" title={resource.operationId}
                                 className='dropdown-item break-line'
                                 onClick={() => this.handleItemClick('')
                                 }>
                           <PathComponent method={resource.method} path={resource.path} deprecated={resource.deprecated}/>
                         </button>
                       </Link>
                     );
  };

  createTaggedListItems = () => {
    return OasService.getUniqueTags().map(
      tag => {
        return (
          this.showTag(tag) &&
          <div key={tag}>
            <h6 className="dropdown-header">{tag}</h6>
            {this.createTagResourcesList(tag)}
          </div>
        );
      });
  };

  showResource = (resource) => {
    return resource.path.toLowerCase().includes(this.state.search)
           || resource.operationId.toLowerCase().includes(this.state.search);
  };

  showTag = (tag) => {
    return (tag && tag.toLowerCase().includes(this.state.search))
           || OasService.getResourcesByTag(tag).some(resource => this.showResource(resource));
  };

  sortResources(a, b) {
    const aDeepLevel = a.path.split('/').length;
    const bDeepLevel = b.path.split('/').length;
    if (aDeepLevel !== bDeepLevel) {
      return aDeepLevel - bDeepLevel;
    }
    const aMethodValue = methodsOrder[a.method];
    const bMethodValue = methodsOrder[b.method];
    if (aMethodValue !== bMethodValue) {
      return aMethodValue - bMethodValue;
    }
    return a.path.localeCompare(b.path);
  }
}

export default ResourceList;
