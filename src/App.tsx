import {useEffect, useReducer, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {getFireStoreData, onMessageListener, requestForToken} from "./util/firebase/firebase";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./util/redux/store";

function App() {
  const dispatch = useDispatch()
  const {token} = useSelector((state : RootState) => state.token)

  const requestToken = async () =>{
    const currentToken : string = await requestForToken() as string
    dispatch({type:"changeToken", token : currentToken})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{token}</p>
        <p>
          <button type="button" onClick={() => requestToken()}>
            토큰 호출
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
