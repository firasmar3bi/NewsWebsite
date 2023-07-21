import React, { useState }  from "react";
import DontMissContent from "./DontMissContent";
import StayConnected from "./StayConnected";
import LifestyleContent from "../LifestyleNews/LifestyleContent";
import NavbarDontMiss from "./NavbarDontMiss";
import NavbarLife from "../LifestyleNews/NavbarLife";
import NavBarHouse from "../HouseDesign/NavBarHouse";
import HouseDesignContent from "../HouseDesign/HouseDesignContent";
import NavBarPerformance from "../PerformanceTraining/NavBarPerformance";
import PerformanceTrainingContent from'../PerformanceTraining/PerformanceTrainingContent'
import addImg from '../../../Navbar/newspaper-rec728.jpg'
import Style from "../../../Navbar/Navbar.module.css";
import NavBarLatestArticles from "../LatestArticles/NavBarLatestArticles";
import LatestArticlesContent from "../LatestArticles/LatestArticlesContent";


export default function HomeDontMiss() {
  const [ categoryFirstComponent , setFirstComponent] = useState('general')
  function changeCategory(ele) {
    setFirstComponent(ele);
  }
  const [ categorySecendComponent , setSecendComponent] = useState('general')
  function changeCategoryLife(ele) {
    setSecendComponent(ele);
  }
  const [ categoryTherrComponent , setCategoryTherrComponent] = useState('HOUSE DESIGN')
  function changeCategoryLife(ele) {
    setCategoryTherrComponent(ele);
  }
  const [ categoryForeComponent , setCategoryForeComponent] = useState('PERFORMANCE TRAINING')
  function changeCategoryLife(ele) {
    setCategoryForeComponent(ele);
  }
  const [ categoryFiveComponent , setCategoryFiveComponent] = useState('LATEST')
  function changeCategoryLife(ele) {
    setCategoryFiveComponent(ele);
  }
  
  return (
    <>
      <section className="mt-5">
        <div className="row">
          <div className="col-9">
            <NavbarDontMiss 
              navBarTitel = {`DON'T MISS`}
              list1 = 'general'
              list2 = 'business'
              list3 = 'entertainment'
              list4 = 'bitcoin'
              list5 = 'health'
              list6 = 'science'
              list7 = 'sports'
              list8 = 'technology'
              changeCategory = {changeCategory}
            />

            <DontMissContent 
             list1 = 'general'
             list2 = 'business'
             list3 = 'entertainment'
             list4 = 'bitcoin'
             list5 = 'health'
             list6 = 'science'
             list7 = 'sports'
             list8 = 'technology'
             NameOfSectionComponent1 = {categoryFirstComponent}
            />
          </div>
          <div className="col-md-3">
            <NavbarDontMiss
            navBarTitel = {`STAY CONNECTED`}
            />
            <StayConnected />
          </div>
        </div>     

        <div className="row my-5">
        <div className="col-9">
            <NavbarLife
              navBarTitel = {`LIFESTYLE NEWS`}
              list1 = 'General'
              list2 = 'Travel'
              list3 = 'Recipes'
              list4 = 'Health'
              list5 = 'Music'
              changeCategoryLife = {changeCategoryLife}
            />

            <LifestyleContent 
              list1 = 'General'
              list2 = 'Travel'
              list3 = 'Recipes'
              list4 = 'Health'
              list5 = 'Music'
              NameOfSectionComponent = {categorySecendComponent}
            />

          </div>
          <div className="col-md-3">
            <NavbarLife
            navBarTitel = {`STAY CONNECTED`}
            />
            <StayConnected />
          </div>
        </div>     

        <div className="row my-5">
        <div className="col-9">
            <NavBarHouse
              navBarTitel = {`HOUSE DESIGN`}
              changeCategoryLife = {setCategoryTherrComponent}
            />

            <HouseDesignContent 
              NameOfSectionComponent = {categoryTherrComponent}
            />

          </div>
          <div className="col-md-3">
            <NavbarLife
            navBarTitel = {`STAY CONNECTED`}
            />
            <StayConnected />
          </div>
        </div>   

        <div className="row my-5">
          <div className="col-9">
            <NavBarPerformance
              navBarTitel = {`PERFORMANCE TRAINING`}
              changeCategoryLife = {setCategoryForeComponent}
            />
            
            <PerformanceTrainingContent
              NameOfSectionComponent = {categoryForeComponent}
            />
          </div>
          <div className="col-md-3">
            <NavbarLife
            navBarTitel = {`STAY CONNECTED`}
            />
            <StayConnected />
          </div>

        </div>

        <div className="w-75 m-auto text-center"> 
            <span className={Style.addTitel}>- Advertisement -</span>            
            <img src={addImg} alt="Adds" className="w-100"/>
        </div>

        <div className="row my-5">
          <div className="col-9">
            <NavBarLatestArticles
              navBarTitel = {`LATEST ARTICLES`}
              changeCategoryLife = {setCategoryFiveComponent}
            />
            
            <LatestArticlesContent
              NameOfSectionComponent = {categoryFiveComponent}
            />
          </div>
          <div className="col-md-3">
            <NavBarLatestArticles
            navBarTitel = {`STAY CONNECTED`}
            />
            <StayConnected />
          </div>

        </div>
      </section>
    </>
  );
}
