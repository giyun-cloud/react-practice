import React from 'react'

function InputSample() {
  const [texts, setTexts] = React.useState({
    name: '',
    nickname: '',
  })
  const {name, nickname} = texts
  const refInputName = React.useRef()
  const onClick = () => {
    setTexts({
      name: '',
      nickname: '',
    })
    refInputName.current.focus()
  }
  const onChange = (e) => {
    setTexts({
      ...texts,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
    <input name="name" onChange={onChange} value={name} placeholder="이름" ref={refInputName} />
    <input name="nickname" onChange={onChange} value={nickname} placeholder='별명' />
    <button onClick={onClick}>초기화</button>
    <div>
      <b>값 :</b>
      {name} ({nickname})
    </div>

    </>
  )
}

export default InputSample