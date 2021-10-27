import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import Netflix from "../images/netflix.jpg";

export default function Home() {
    return (
        <div className="home">
                <Navbar/>
                <img src={Netflix} width="100%"/>
         </div>
    )
}
