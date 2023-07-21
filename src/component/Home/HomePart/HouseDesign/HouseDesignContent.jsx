import React from 'react'
import HouseDesignNews from './HouseDesignNews'

export default function HouseDesignContent({NameOfSectionComponent}) {
  
  return (
    <>
        <div className="row w-100">
            <div className="col-md-12">
                <HouseDesignNews NameOfSectionComponent={NameOfSectionComponent}/>
            </div>
        </div>
    </>
  )
}

