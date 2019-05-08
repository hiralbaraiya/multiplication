import React,{useReducer} from 'react'
import {ReactReduxContext,connect} from 'react-redux'
import {reducer} from './Reducer'


 const New =(props)=>{
    
    return(
        <div>
       <ReactReduxContext.Consumer>
    {
        (store)=>{
            return <p>{store.subscription.store.getState().key}</p>
        }
    }
        </ReactReduxContext.Consumer>
         <button onClick={()=>props.dispatch({type:'INCREMENT'})}>+</button>
         </div>
    )
}

export default connect((store)=>{return {store}})(New)