import React from "react";
import MyNav from "./MyNav";
import NewCatsSlider from "./NewCatsSlider";
import './Home.css';
import Ranking from "./Ranking";

const Home = () => {
    return(
        <div style={{width:'100%', textAlign:'center'}}>
            <NewCatsSlider />
            <Ranking />
        </div>
    );
};

export default Home;