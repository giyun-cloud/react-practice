import React from 'react'

function reducer(state, action){
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function Counter() {
  const [number, dispatch] = React.useReducer(reducer, 0)
  // console.log(React.useState())

  const onIncrease = () => {
    dispatch({type : 'INCREMENT'})
  }
  const onDecrease = () => {
    dispatch({type : 'DECREMENT'})
  }

  return (
    <>
      <div style={{fontSize: 30}}>{number}</div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  )

}

export default Counter