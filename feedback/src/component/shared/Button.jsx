import React from 'react'
import PropTypes from 'prop-types'


function Button({ children, type, version, isDisabled }) {
  return (
    <div>
      <button 
        type={type} 
        disabled={isDisabled} 
        className={`btn btn-${version} ${isDisabled ? 'btn-disabled' : ''}`}
      >
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  version: PropTypes.string,
  isDisabled: PropTypes.bool
}

Button.defaultProps = {
  type: 'button',
  version: 'primary',
  isDisabled: true
}

export default Button
