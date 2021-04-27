import React from 'react'

function ObjectArrayAdd({name, email, onCreate, onChange}) {
  return (
    <>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>생성</button>
    </>
  )

}

export default React.memo(ObjectArrayAdd)