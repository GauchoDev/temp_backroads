import React from 'react'

const Title = ({ title, subtitle }) => {
  //    const  { title, subtitle}=props
  return (
    <div className="section-title">
      <h2>
        {title}
        <span>{subtitle}</span>
      </h2>
    </div>
  )
}

export default Title
