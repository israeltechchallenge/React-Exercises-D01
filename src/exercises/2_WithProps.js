import React from 'react'

/**
 * Implement a simple function component that accepts one props "name"
 * and renders an h1 element with the text "Hi {name}" where {name} is 
 * the value in the prop "name"
 * if name is empty (empty string, undefined or null), render "Hi "
 */
export default function WithProps(props) {
  // Your code
  const { name } = props;
  return (
    <h1>Hi {name}</h1>
  );
}
