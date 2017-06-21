import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-jsonschema-form'

export class Motor extends React.Component {
  shouldComponentUpdate = ({ definition: { schema } }) => schema !== this.props.definition.schema

  handleChange = (parameters) => this.props.onChange(parameters)
  handleSubmit = ({ formData }) => this.props.onSubmit(formData)
  handleError = (parameters) => this.props.onError(parameters)

  render () { // // console.log('(Motor)render()')
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
        <div className='shinkansen-motor' key='shinkansen-motor'>
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

    return false
  }
}

Motor.propTypes = {
  definition: PropTypes.shape({
    schema: PropTypes.object
  }).isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onError: PropTypes.func
}

Motor.defaultProps = {
  definition: {},
  onChange: () => {}, /* no op */
  onSubmit: () => {}, /* no op */
  onError: () => {} /* no op */
}
