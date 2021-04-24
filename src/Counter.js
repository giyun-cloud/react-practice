import React from 'react'

function Counter() {
  const [number, setNumber] = React.useState(0)
  // console.log(React.useState())

  const onPlus = () => {
    setNumber(n => {
      if(n < 10) return n+1
      else return '완성'
    })
  }
  const onMinus = () => {
    setNumber(n => {
      if(n === '완성') return 10
      else if (n < - 9) return -10
      else return n -1
    })
  }

  return (
    <>
      <div style={{fontSize: 30}}>{number}</div>
      <button onClick={onPlus}>+1</button>
      <button onClick={onMinus}>-1</button>
    </>
  )

}

export default Counter