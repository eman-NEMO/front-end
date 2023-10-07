import {createContext, useState} from 'react'


export let CounterContext=createContext()

export default function CounterContextProvider(props){
    console.log(props.children)
    const [counter,setcount]=useState(0)
    const [user,setuser]=useState("eman")
    return <CounterContext.Provider value={ {counter,user}}>
        {props.children}
    </CounterContext.Provider>


}