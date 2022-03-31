import React from "react";
import Category from "./Category";
import Discount from "./Discount";
import Headline from "./Headline";
import LikeList from "./LikeList";


function Home(){

    return(
        <div>
            <Category />
            <Headline />
            <Discount />
            <LikeList />
        </div>
    )
}


export default Home;