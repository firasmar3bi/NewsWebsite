import React from 'react'
import PerformanceTrainingNews from './PerformanceTrainingNews'

export default function PerformanceTrainingContent({NameOfSectionComponent}) {
  
  return (
    <>
        <div className="row w-100">
            <div className="col-md-12">
                <PerformanceTrainingNews NameOfSectionComponent={NameOfSectionComponent}/>
            </div>
        </div>
    </>
  )
}


