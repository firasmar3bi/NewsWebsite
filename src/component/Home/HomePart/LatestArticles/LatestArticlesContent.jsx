import React from 'react'
import LatestArticlesNews from './LatestArticlesNews'

export default function LatestArticlesContent({NameOfSectionComponent}) {
  
  return (
    <>
        <div className="row w-100">
            <div className="col-md-12">
                <LatestArticlesNews NameOfSectionComponent={NameOfSectionComponent}/>
            </div>
        </div>
    </>
  )
}


