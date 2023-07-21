import React, { useState }  from "react";
import StayConnected from "../../Home/HomePart/DontMissPart/StayConnected";
import NavBarLatestArticles from "../../Home/HomePart/LatestArticles/NavBarLatestArticles";
import LatestArticlesContent from "../../Home/HomePart/LatestArticles/LatestArticlesContent";
import Add from "../../Add/Add";
export default function NewsApi() {
    const [ categoryFiveComponent , setCategoryFiveComponent] = useState('LATEST')
    function changeCategoryLife(ele) {
      setCategoryFiveComponent(ele);
    }

    return (
        <>
            <div className="row my-5">
                <div className="col-9">
                    <NavBarLatestArticles
                        navBarTitel={`LATEST ARTICLES`}
                        changeCategoryLife={setCategoryFiveComponent}
                    />

                    <LatestArticlesContent
                        NameOfSectionComponent={categoryFiveComponent}
                    />
                </div>
                <div className="col-md-3">
                    <Add />
                    <p></p>
                    <NavBarLatestArticles
                        navBarTitel={`MUST READ`}
                    />
                    <StayConnected />
                </div>
            </div>    
        </>
    )
}
