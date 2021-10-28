import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List"

export default function Home() {
    return (
        <div className="home">
                <Navbar/>
                <Featured type="series"/>
                <List/>
                <List/>
                <List/>
                <List/>
         </div>
    )
}
