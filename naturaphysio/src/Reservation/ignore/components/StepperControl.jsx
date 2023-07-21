import React from 'react'

const StepperControl = () => {
  return (
    <div className='container flex-row justify-content-around mt-4 mb-8 '>
        {/* back button */}
        <button className='btn'>Retour</button>

        {/* next button */}
        <button className='btn bg-blue'>Prochain</button>
    </div>
  )
}

export default StepperControl;