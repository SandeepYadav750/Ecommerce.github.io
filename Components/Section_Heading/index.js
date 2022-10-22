import React from 'react'

const SextionHeading = (props) => {
  return (
    <>
      <div className='SectionHeading text-center mt-5 mb-3 mx-3'>
        <div className='container'>
            <h1>{props.heading}</h1>
        </div>
      </div>
    </>
  )
}

export default SextionHeading
