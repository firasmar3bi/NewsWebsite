import React from 'react'
import LifestyleNews from './LifestyleNews'

export default function LifestyleContent({list1 , list2 , list3 , list4 , list5 , list6 , list7 , list8 ,NameOfSectionComponent }) {
  
  return (
    <>
        <div className="row w-100">
                <div className="col-md-12">
                    <div className="tab-content w-100" id="myTabContent">
                        {
                        list1 ?
                            <div className="tab-pane w-100 fade show active" id={`${list1}-tab-pane`} role="tabpanel" aria-labelledby={`${list1}-tab`} tabIndex={0}>
                            <LifestyleNews  NameOfSectionComponent = {NameOfSectionComponent}/>
                            </div>
                        :''
                        }
                        {
                        list2 ?
                            <div className="tab-pane w-100 fade " id={`${list2}-tab-pane`} role="tabpanel" aria-labelledby={`${list2}-tab`} tabIndex={0}>
                            <LifestyleNews  NameOfSectionComponent = {NameOfSectionComponent}/> =2
                            </div>
                        :''
                        }
                        {
                        list3 ?    
                            <div className="tab-pane w-100 fade " id={`${list3}-tab-pane`} role="tabpanel" aria-labelledby={`${list3}-tab`} tabIndex={0}>
                            <LifestyleNews  NameOfSectionComponent = {NameOfSectionComponent}/> =3
                            </div>
                        :''    
                        }
                        {
                        list4 ?    
                            <div className="tab-pane w-100 fade " id={`${list4}-tab-pane`} role="tabpanel" aria-labelledby={`${list4}-tab`} tabIndex={0}>
                                <LifestyleNews  NameOfSectionComponent = {NameOfSectionComponent}/> =4
                            </div>
                        :''
                        }
                        {
                        list5 ?
                            <div className="tab-pane w-100 fade " id={`${list5}-tab-pane`} role="tabpanel" aria-labelledby={`${list5}-tab`} tabIndex={0}>
                                <LifestyleNews  NameOfSectionComponent = {NameOfSectionComponent}/> =5
                            </div>
                        :''
                        }
                        {
                        list6 ?
                            <div className="tab-pane w-100 fade " id={`${list6}-tab-pane`} role="tabpanel" aria-labelledby={`${list6}-tab`} tabIndex={0}>
                                <LifestyleNews  NameOfSectionComponent = {NameOfSectionComponent}/> =6
                            </div>
                        :''
                        }
                        {
                        list7 ?
                            <div className="tab-pane w-100 fade " id={`${list7}-tab-pane`} role="tabpanel" aria-labelledby={`${list7}-tab`} tabIndex={0}>
                                <LifestyleNews  NameOfSectionComponent = {NameOfSectionComponent}/> =7
                            </div>
                        :''
                        }
                        {
                        list8?
                            <div className="tab-pane w-100 fade " id={`${list8}-tab-pane`} role="tabpanel" aria-labelledby={`${list8}-tab`} tabIndex={0}>
                                <LifestyleNews  NameOfSectionComponent = {NameOfSectionComponent}/> =8
                            </div>
                        :''
                        }
                    </div>
                </div>
            </div>
    </>
  )
}

