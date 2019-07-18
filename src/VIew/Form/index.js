import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';


export class Forms extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        locked: PropTypes.bool,
        focussed: PropTypes.bool,
        value: PropTypes.string,
        error: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
     };
     static defaultProps = {
        locked: false,
        focussed: false,
        value: '',
        error: '',
        label: '',
        onChange: () => '',
     };
     
     constructor(props) {
        super(props);
        this.state = {
          focussed: (props.locked && props.focussed) || false,
          value: props.value || '',
          error: props.error || '',
          label: props.label || '',
        };
      }
      onChange = event => {
        const { id } = this.props;
        const value = event.target.value;
        this.setState({ value, error: '' });
        return this.props.onChange(id, value);
      }
    render() {
        const { focussed, value, error, label } = this.state;
        const { id, type, locked } = this.props;
        const fieldClassName = `field ${(locked ? focussed : focussed || value) && 'focussed'} ${locked && !focussed && 'locked'}`;
        return (
            <div className={fieldClassName}>
                <input
                    id={id}
                    type="text"
                    value={value}
                    placeholder={label}
                    onChange={this.onChange}
                    onFocus={() => !locked && this.setState({ focussed: true })}
                    onBlur={() => !locked && this.setState({ focussed: false })}
                />
                 <label htmlFor={id} className={error && 'error'}>
                    {error || label}
                </label>
            </div>
        )
    }
}

export default Forms;
