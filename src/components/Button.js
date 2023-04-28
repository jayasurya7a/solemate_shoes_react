import React from 'react'

function Button({ color, size, children }) {

	const buttonStyles = {
    fontSize: `${size}px`,
    color: `${color}`,
    fontFamily: 'inherit',
    fontWeight: 600,
    cursor: 'pointer',
    position: 'relative',
    border: 'none',
    background: 'none',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
    transitionDuration: '400ms',
    transitionProperty: 'color',
    marginTop:'10px'
  	};

  	const hoverStyles = {
    color: '#fff',
  	};

  	const afterStyles = {
    	content: "''",
    	pointerEvents: 'none',
    	bottom: '-2px',
	    left: '50%',
	    position: 'absolute',
	    width: '0%',
	    height: '2px',
	    backgroundColor: '#fff',
	    transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
	    transitionDuration: '400ms',
	    transitionProperty: 'width, left',
  	};

  	return (
    <button style={buttonStyles}>
      {children}
      <span style={{ ...afterStyles, ...hoverStyles }}></span>
    </button>
  	);
}

export default Button;