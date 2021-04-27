import React from 'react'


const Array = React.memo(function Array({array, onRemove, onToggle}) {
  return (
    <>
      <div>
        <b style={{
          cursor: 'pointer',
          color: array.active ? 'greenyellow' : 'black'
        }}
        onClick={() => onToggle(array.id)}
         >{array.name}</b> <span>{array.email}</span>
        <button onClick={() => onRemove(array.id)}>삭제</button>
      </div>
    </>
  )
})

function ObjectArray({arrays, onRemove, onToggle}) {
  return (
    <>
      {arrays.map(array => (
        <Array array={array} key={array.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </>
  )
}

export default React.memo(ObjectArray)