import {useState} from "react";

const Home= () => {
    const [count, setCount] = useState(0    );
    return(
        <div id="home">
            <h1>Home</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>

    )
}
export default Home;