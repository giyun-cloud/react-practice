import React from 'react'

function Wrapper({children, children1, ...rest}) {
  const style = {
    border: '5px solid orange',
    padding: 30
  }
  return <div style={style}>{children} {rest.children2}</div>
}

Wrapper.defaultProps = {
  children2: "abc"
}

export default Wrapper