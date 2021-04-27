import { act } from "@testing-library/react";
import React, {useCallback, useReducer, useRef} from "react";
import ObjectArray from "./ObjectArray";
import ObjectArrayAdd from "./ObjectArrayAdd";


function countActiveUsers(arrays) {
  return arrays.filter(array => array.active).length
}

const initialState = {
  inputs: {
    name: '',
    email: ''
  },
  users: [
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
  ]
}

function reducer(state, action) {
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      }
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => user.active === action.id 
          ? {...user, active: !user.active}
          : {...user})
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {users} = state
  const nextId = useRef(4)
  const {name, email} = state.inputs

  const onChange = useCallback(e => {
    const {name, value} = e.target
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, [])

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        name,
        email
      }

    })
    nextId.current += 1
  },[name, email])

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, [])

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  })
  return (
    <>
      <ObjectArrayAdd 
        name={name} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <ObjectArray 
      arrays={users}
      />
      <div>활성 사용자 수 : 0</div>
    </>
  );
}

export default App;
