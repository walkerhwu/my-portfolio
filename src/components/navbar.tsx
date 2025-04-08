import {useState} from "react";

interface NavBarProps {
    brandName: string;
    imageSrcPath: string;
    navItems: string[];
}

function NavBar({brandName, imageSrcPath, navItems}: NavBarProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src={imageSrcPath}
                        width={60}
                        height={60}
                        className="d-inline-block align-center"
                        alt=""
                    />
                    <span className="fw-bolder fs-4">
                       {brandName}
                    </span>
                </a>
                <button
                    className="navbar-toggle"
                    type="button"
                    aria-label="toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div
                    className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        {navItems.map((items, index) => (
                            <li
                                key={items}
                                className="nav-item"
                                onClick={() => setSelectedIndex(index)}>
                                <a
                                    className={
                                        selectedIndex == index
                                            ? "nav-link active fw-bold"
                                            : "nav-link"
                                    }
                                    href="#"
                                >
                                    {items}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <form className="test2">
                        <input
                            className="test3"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="test4"
                            type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;