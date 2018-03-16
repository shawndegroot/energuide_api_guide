import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { colours, fontSizes, spacing, roundedEdges } from '../styles'

const button = css`
  font-size: ${fontSizes.md};
  font-weight: 700;
  color: ${colours.white};
  background-color: ${colours.blue};
  border: 5px solid transparent;
  outline: 0;
  padding: ${spacing.sm}px ${spacing.xl}px;
  cursor: pointer;
  ${roundedEdges};

  &:focus {
    outline: 4px solid ${colours.focus};
    outline-offset: -1px;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${colours.blueDark};
  }

  &:active,
  &:disabled {
    filter: alpha(opacity=60);
    opacity: 0.6;
  }

  &:disabled {
    &:hover {
      cursor: not-allowed;
      background-color: ${colours.blue};
    }
  }
`

const Button = ({ disabled = false, children }) => (
  <button className={button} type="submit" disabled={disabled}>
    {children}
  </button>
)

/* validation to make sure only one child is passed in */
Button.propTypes = {
  children: PropTypes.element.isRequired,
  disabled: PropTypes.any,
}

export default Button
