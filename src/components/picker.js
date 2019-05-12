import React from "react";
import PropTypes from "prop-types";

export const Picker = ({ options, value, onChange }) => (
  <select onChange={e => onChange(e.target.value)} value={value}>
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
