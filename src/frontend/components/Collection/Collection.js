import React, { propType as pt } from 'react';
import { connect } from 'react-redux';

class Collection extends React.Component {
  propTypes: {
    schema: pt.object
  }

  constructor(props) {
    super(props);
  }

  renderField(type, limits) {
    type = type || 'string';

    const typeOfField = {
      string: 'text',
      text: { tag: 'textarea' },
      number: 'number',
      date: 'date'
    };

    const field = typeOfField[type];
    let tag = '<input type={field} />';
    if (typeof field === 'object' && field.tag) {
      tag = '<'+field.tag + '/>';
    }

    return (
      {
        tag
      }
    );
  }

  renderForm(schema) {
    return Object.keys(schema).map((name, key) => {
      const field = schema[name];

      let type = !field.type ? field : field.type;
      Array.isArray(field) && field.map(key => {
        if (!Array.isArray(type)) {
          type = [];
        }

        type.push(key.type || key);
      });

      const limits = typeof(field) === 'string' ? null : { ...field };
      return this.renderField(type, limits);
    });
  }

  render() {
    const { schema } = this.props;
    this.renderForm(schema);

    return (
      <div>
        loool
      </div>
    );
  }
}

export default Collection;