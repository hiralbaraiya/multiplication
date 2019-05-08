import React, {  useState } from 'react';
import './App.css';
//import {ReactReduxContext} from 'react-redux'
import {connect} from 'react-redux';
 import New from './New'


 const App = (props) => {
   console.log(props)
return(
  <div>hello
    <b>{props.store.key}</b>
    <button onClick={()=>props.dispatch({type:'INCREMENT'})}>+</button>
    <New/>
  </div>
)  

}
export default connect((store)=>{return {store}})(App)
  



