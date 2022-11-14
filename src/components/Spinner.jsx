import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className='spinner'>
        <ClipLoader
            color="#009346"
            loading={true}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
  )
}

export default Spinner
