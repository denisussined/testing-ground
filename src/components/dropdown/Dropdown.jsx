import s from './Dropdown.module.sass'
import {Context} from "../navbar/NavbarItem";
import {CSSTransition} from "react-transition-group";
import DropdownItem from "./DropdownItem";
import {useState} from "react";

const Dropdown = () => {

    let [activeMenu, setActiveMenu] = useState("main")
    let [menuHeight, setMenuHeight] = useState(132)

    function calcHeight(el) {
        setMenuHeight(el.offsetHeight)
    }

    return (
        <Context.Consumer>
            {dropMode => (

                <CSSTransition
                    in={dropMode}
                    timeout={250}
                    unmountOnExit
                    classNames={{
                        enterDone: s.dropdownEnterDone,
                        enter: s.dropdownEnter,

                        exitActive: s.dropdownExitActive,
                        exit: s.dropdownExit,
                    }}>

                    <div className={s.dropdown}
                         style={{height: menuHeight}}>

                        <CSSTransition
                            in={activeMenu === "main"}
                            timeout={250}
                            unmountOnExit
                            classNames={{
                                enterActive: s.mainEnterActive,
                                enter: s.mainEnter,
                                exitActive: s.mainExitActive,
                                exit: s.mainExit,
                            }}
                            onEntering={calcHeight}>

                            <div className={s.dropdown__menu}>
                                <DropdownItem>plug</DropdownItem>
                                <DropdownItem>plug</DropdownItem>
                                <DropdownItem>plug</DropdownItem>
                                <DropdownItem menuDirection={"settings"}
                                              setMenu={setActiveMenu}
                                              button={">>"}/>
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            in={activeMenu === "settings"}
                            timeout={250}
                            unmountOnExit
                            classNames={{
                                enterActive: s.settingsEnterActive,
                                enter: s.settingsEnter,
                                exitActive: s.settingsExitActive,
                                exit: s.settingsExit,
                            }}
                            onEntering={calcHeight}>

                            <div className={s.dropdown__menu}>
                                <DropdownItem menuDirection={"main"}
                                              setMenu={setActiveMenu}
                                              button={"<<"}/>
                                <DropdownItem>plug</DropdownItem>

                            </div>
                        </CSSTransition>

                    </div>
                </CSSTransition>

            )}
        </Context.Consumer>
    )
}

export default Dropdown