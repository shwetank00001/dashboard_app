import React, { createContext, useContext, useState} from 'react'

const StateContext = createContext()

const initialState = {
    cart: false,
    chat: false,
    notification: false,
    userProfile: false
}

export const ContextProvider = ({children}) => {

    const [ activeMenu, setActiveMenu] = useState(true)
    return (
        <StateContext.Provider value={ {activeMenu, setActiveMenu }}>
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