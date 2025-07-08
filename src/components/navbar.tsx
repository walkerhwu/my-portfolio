import {useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

interface NavBarProps {
    brandName: string;
    navItems: string[];
}

function NavBar({brandName, navItems}: NavBarProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <nav className="vertical-navbar">
            <div className="navbar-brand">
                <span className="brand-title">
                    {brandName}
                </span>
            </div>
            <ul className="vertical-nav-list">
                {navItems.map((item, index) => (
                    <li
                        key={item}
                        className={selectedIndex === index ? "vertical-nav-item active" : "vertical-nav-item"}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;