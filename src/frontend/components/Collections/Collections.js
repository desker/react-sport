import React, { propType as pt } from 'react';
import { getAll } from '../../actions/collections';
import { connect } from 'react-redux';

import Collection from '../Collection';

class Collections extends React.Component {
  propTypes: {
    collections: pt.object
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(getAll());
  }

  render() {
    const { collections } = this.props;
    return (
      <div>
        {
          Object.keys(collections).map((key) => {
            const collection = collections[key].value;
            return (
              <Collection
                key={key}
                schema={collection.schema}
              />
            );
          })
        }
      </div>
    );
  }
}

export default connect(state => ({ collections: state.collections }))(Collections);