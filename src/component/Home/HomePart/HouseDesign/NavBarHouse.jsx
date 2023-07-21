import Style from "../../home.module.css";
import React from 'react'

export default function NavBarHouse({ navBarTitel, list1, list2, list3, list4, list5, list6, list7, list8 ,changeCategoryLife}) {

    return (
        <>
            <ul className={`nav nav-tabs mb-5 w-100 ms-auto ${Style.customNav}`} id="myTab" role="tablist">
                <li className="nav-item text-black">
                    <h2 className={`m-0 px-3 py-2 bg-warning ${Style.titelNavbar}`}>{navBarTitel}</h2>
                </li>
                {
                    list1 ?
                    <li className="nav-item ms-auto" role="presentation">
                        <button
                            className={`${Style.navButton} m-0 nav-link text-black active`} id={`${list1}-tab`} data-bs-toggle="tab" data-bs-target={`#${list1}-tab-pane`}
                            type="button" role="tab" aria-controls={`${list1}-tab-pane`} aria-selected="true" onClick={(e)=>changeCategoryLife(e.target.innerHTML)}
                        >
                        {list1}
                    </button>
                    </li> 
                    : ""
                }
                
                {
                    list2 ?
                    <li className="nav-item" role="presentation">
                        <button
                            className={`${Style.navButton} m-0 nav-link text-black`} id={`${list2}-tab`} data-bs-toggle="tab" data-bs-target={`#${list2}-tab-pane`}
                            type="button" role="tab" aria-controls={`${list2}-tab-pane`} aria-selected="true" onClick={(e)=>changeCategoryLife(e.target.innerHTML)}
                        >
                        {list2}
                    </button>
                    </li> 
                    : ""
                }

                {
                    list3 ?
                    <li className="nav-item" role="presentation">
                        <button
                            className={`${Style.navButton} m-0 nav-link text-black`} id={`${list3}-tab`} data-bs-toggle="tab" data-bs-target={`#${list3}-tab-pane`}
                            type="button" role="tab" aria-controls={`${list3}-tab-pane`} aria-selected="true" onClick={(e)=>changeCategoryLife(e.target.innerHTML)}
                        >
                        {list3}
                    </button>
                    </li> 
                    : ""
                }

                {
                    list4 ?
                    <li className="nav-item" role="presentation">
                        <button
                            className={`${Style.navButton} m-0 nav-link text-black`} id={`${list4}-tab`} data-bs-toggle="tab" data-bs-target={`#${list4}-tab-pane`}
                            type="button" role="tab" aria-controls={`${list4}-tab-pane`} aria-selected="true" onClick={(e)=>changeCategoryLife(e.target.innerHTML)}
                        >
                        {list4}
                    </button>
                    </li> 
                    : ""
                }

                {
                    list5 ?
                    <li className="nav-item" role="presentation">
                        <button
                            className={`${Style.navButton} m-0 nav-link text-black`} id={`${list5}-tab`} data-bs-toggle="tab" data-bs-target={`#${list5}-tab-pane`}
                            type="button" role="tab" aria-controls={`${list5}-tab-pane`} aria-selected="true" onClick={(e)=>changeCategoryLife(e.target.innerHTML)}
                        >
                        {list5}
                    </button>
                    </li> 
                    : ""
                }

                {
                    list6 ?
                    <li className="nav-item" role="presentation">
                        <button
                            className={`${Style.navButton} m-0 nav-link text-black`} id={`${list6}-tab`} data-bs-toggle="tab" data-bs-target={`#${list6}-tab-pane`}
                            type="button" role="tab" aria-controls={`${list6}-tab-pane`} aria-selected="true" onClick={(e)=>changeCategoryLife(e.target.innerHTML)}
                        >
                        {list6}
                    </button>
                    </li> 
                    : ""
                }
                {
                    list7 ?
                    <li className="nav-item" role="presentation">
                        <button
                            className={`${Style.navButton} m-0 nav-link text-black`} id={`${list7}-tab`} data-bs-toggle="tab" data-bs-target={`#${list7}-tab-pane`}
                            type="button" role="tab" aria-controls={`${list7}-tab-pane`} aria-selected="true" onClick={(e)=>changeCategoryLife(e.target.innerHTML)}
                        >
                        {list7}
                    </button>
                    </li> 
                    : ""
                }
                {
                    list8 ?
                    <li className="nav-item" role="presentation">
                        <button
                            className={`${Style.navButton} m-0 nav-link text-black`} id={`${list8}-tab`} data-bs-toggle="tab" data-bs-target={`#${list6}-tab-pane`}
                            type="button" role="tab" aria-controls={`${list8}-tab-pane`} aria-selected="true" onClick={(e)=>changeCategoryLife(e.target.innerHTML)}
                        >
                        {list8}
                    </button>
                    </li> 
                    : ""
                }
            </ul>
        </>
    )
}

