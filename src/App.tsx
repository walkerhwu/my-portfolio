import './App.css'
import NavBar from "./components/navbar.tsx";
import imageSrc from "./assets/react.svg";
function App() {
   const items = ["Home", "Experience", "Life", "Contact"];
    return (
        <div>
            <NavBar brandName="My Home" imageSrcPath={imageSrc} navItems={items} />
        </div>
    )
}

export default App
