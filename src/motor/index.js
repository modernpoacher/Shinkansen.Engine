import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-jsonschema-form'

export default class Motor extends React.Component {
  shouldComponentUpdate = (props) => props.definition.schema !== this.props.definition.schema

  handleChange = (parameters) => this.props.onChange(parameters)
  handleSubmit = ({ formData = null } = {}) => this.props.onSubmit(formData)
  handleError = (parameters) => this.props.onError(parameters)

  render () {
    const {
      definition
    } = this.props

    if ('schema' in definition) {
      const {
        schema,
        formData,
        uiSchema
      } = definition

      return (
        <div className='shinkansen-motor'>
          <Form
            schema={schema}
            formData={formData}
            uiSchema={uiSchema}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            onError={this.handleError} />
        </div>
      )
    }

    return null
  }
}

Motor.propTypes = {
  definition: PropTypes.shape({
    schema: PropTypes.object,
    formData: PropTypes.object,
    uiSchema: PropTypes.object
  }).isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onError: PropTypes.func
}

Motor.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  onError: () => {}
}
