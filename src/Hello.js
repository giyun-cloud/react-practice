import React from 'react'

function Hello({color1, ...rest}) {
  const color = 'red'
  return (
    <div style={{color}}>
      {rest.istrue && <b>(특별)</b>}안녕하세요 {rest.key1}
      {<div>하이</div>}
    </div>
  )
}

export default Hello;