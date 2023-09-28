import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="innerWidth paddings g-container">
            <div className="inner-container flexColCenter">
                <span className='primaryText'>Get Started With <span className='orangeText'>``Dream Homes``</span></span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotas from us.
                    <br />
                    Find your residence soon.
                </span>
                <button className="button">
                    <a href="mailto:sathvik5883@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted