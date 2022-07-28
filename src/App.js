import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import NavbarItem from "./components/navbar/NavbarItem";
import Dropdown from "./components/dropdown/Dropdown";

const App = () => {

    return (
        <div className={"app"}>

            <Header>
                <h1>Header</h1>
                <Navbar>
                    <NavbarItem button={<span>1</span>}/>
                    <NavbarItem button={<span>2</span>}/>
                    <NavbarItem button={<span>3</span>}>
                        <Dropdown />
                    </NavbarItem>
                </Navbar>
            </Header>

            <main className={"main"}>
                main
            </main>

            <footer className={"footer"}>
                footer
            </footer>
        </div>
    )
}

export default App;
