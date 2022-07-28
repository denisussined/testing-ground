import s from './Navbar.module.sass'
import {useState, createContext} from "react"

export const Context = createContext(false);

const NavbarItem = ({button, children}) => {

    const [dropMode, setDropMode] = useState(false)

    return (
        <li className={s.navbar__item}>
            {button &&
                <span className={s.navbar__button}
                      onClick={() => setDropMode(prevState => !prevState)}>
                    {button}
                </span>
            }

            <Context.Provider value={dropMode}>
                {children && children}
            </Context.Provider>
        </li>
    )
}

export default NavbarItem