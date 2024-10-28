import React from 'react'

import BreadCrumb from '../components/BreadCrumb'
import Instructors from '../components/Instructors'


function Team() {
  return (
    <>
      <BreadCrumb current="Team" />

      {/* Team Start */}
      <Instructors /> 
      {/* Team End */} 
    </>
  )
}

export default Team