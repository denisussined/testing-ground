import s from './Navbar.module.sass'

const Navbar = ({children}) => {
    return (
        <ul className={s.navbar}>
            {children}
        </ul>
    )
}

export default Navbar