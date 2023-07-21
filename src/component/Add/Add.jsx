import React from 'react'
import ADDIMGE from './newspaper-rec300c.jpg'
import Style from "../Navbar/Navbar.module.css";

export default function Add() {
  return (
    <div className='m-0 p-0 w-100 text-center'>
        <span className={Style.addTitel}>- Advertisement -</span>
        <img src={ADDIMGE} alt="ADD" />
    </div>
  )
}
