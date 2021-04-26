import React from "react";
import ObjectArray from "./ObjectArray";
import ObjectArrayAdd from "./ObjectArrayAdd";



function App() {
  const [user, setuser] = React.useState({
    name: '',
    email: ''
  })
  const onChange = (e) => {
    setuser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const [arrays, setarrays] = React.useState([
    { 
      id:1,
      name:'bom',
      email:'bom@naver.com',
      active: true,
    },
    {
      id:2,
      name:'com',
      email:'com@daum.nnnnet',
      active: false,
    },
    {
      id:3,
      name: "dom",
      email:'dom@google.com',
      active: false,
    }
  ])
  const nextId = React.useRef(4)
  const onCreate = () => {
    setuser({
      name:'',
      email:'',
    })
    setarrays([
      ...arrays,
      {
        id: nextId.current,
        name: user.name,
        email: user.email
      }
    ])
    nextId.current += 1
  }
  const onRemove = id => {
    setarrays(arrays.filter(array => array.id !== id))
  }
  const onToggle = id => {
    setarrays(arrays.map(array => array.id === id ? {...array, active: !array.active} : array))
  }
  return (
    <>
      <ObjectArrayAdd username={user.name} useremail={user.email} onChange={onChange} onCreate={onCreate} />
      <ObjectArray arrays={arrays} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
