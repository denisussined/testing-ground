import s from './Header.module.sass'

const Header = ({children}) => {
    return (
        <div className={s.header}>
            {children}
        </div>
    )
}

export default Header