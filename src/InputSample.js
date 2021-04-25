import React from 'react'

function InputSample() {
  const [text, setText] = React.useState('')
  const onClick = () => {
    setText('')
  }
  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
    <input onChange={onChange} value={text} />
    <button onClick={onClick}>초기화</button>
    <div>
      <b>값 :</b>
      {text}
    </div>

    </>
  )
}

export default InputSample