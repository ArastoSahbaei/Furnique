import React, {createContext, useState} from 'react'

export const CartMenuContext = createContext();

export const CartMenuProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false)
    
    return (
     
        <CartMenuContext.Provider value={{isMenuOpen: menuOpenState, 
                            toggleMenu: () => setMenuOpenState(!menuOpenState),
                            stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
                            }}>
        {props.children}
        </CartMenuContext.Provider>

    )
  }