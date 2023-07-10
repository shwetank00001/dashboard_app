import React, { createContext, useContext, useEffect, useState} from 'react'

const StateContext = createContext()

const initialState = {
    cart: false,
    chat: false,
    notification: false,
    userProfile: false
}

export const ContextProvider = ({children}) => {

    const [ activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] =   useState(initialState)
    // we are providing this value 

    const [screenSize, setScreenSize] = useState(undefined)

    function handleClick(clicked){
        setIsClicked({...initialState, [clicked]:true})
    }



    return (
        <StateContext.Provider value={ {activeMenu, setActiveMenu, isClicked, setIsClicked,handleClick, screenSize, setScreenSize}}> 
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

// function ContextConsumer(){
//     return(
//         <StateContext.Consumer>

//         </StateContext.Consumer>
//     )
// }