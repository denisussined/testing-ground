import s from './Dropdown.module.sass'

const DropdownItem = ({children, button, menuDirection, setMenu}) => {
    return (
        <div className={s.dropdown__item} onClick={() => menuDirection && setMenu(menuDirection)}>
            <span className={s.dropdown__button}>
                {button}
            </span>
            <span className={s.dropdown__button}>
                {children && children}
            </span>
        </div>
    )
}

export default DropdownItem