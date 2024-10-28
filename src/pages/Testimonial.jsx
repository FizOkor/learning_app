import React from 'react'

import BreadCrumb from '../components/BreadCrumb'
import CoursesSection from '../components/CoursesSection'

function Testimonial() {
  return (
    <>
      <BreadCrumb current="Testimonial" />

      {/* Courses Start */}
      <CoursesSection/>
      {/* Courses End */}
    </>
  )
}

export default Testimonial