import {Component, useEffect, useReducer, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {getFireStoreData, onMessageListener, requestForToken} from "./util/firebase/firebase";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./util/redux/store";
import Sample from "./screen/Sample";
import {Route, Routes} from "react-router-dom";

const App = () => {

    const routes = [
        {path: "/Test",component : <Sample/>},
        {path: "/sample",component : <Sample/>},
    ]

    return(
        <Routes>
            {routes.map((route : {component : JSX.Element, path : string}, index : number) => (
                <Route path={route.path} element={route.component} />
            ))}
        </Routes>
  )
}

export default App
