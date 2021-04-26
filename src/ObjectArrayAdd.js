import React from 'react'

function ObjectArrayAdd({username, useremail, onCreate, onChange}) {
  return (
    <>
      <input name="name" placeholder="이름" onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={useremail} />
      <button onClick={onCreate}>생성</button>
    </>
  )

}

export default ObjectArrayAdd