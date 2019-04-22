import React from 'react'

const  ProjectDetails = (props) =>  {
  // console.log(props)
  const id = props.match.params.id
  return (
    <div>
      <div className="conatainer section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Summary {id}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat eaque alias et unde nisi tempora dolor, dolorum excepturi cumque quas officia ipsam voluptatum labore nihil dicta, sequi, dolres voluptate.</p>
          </div>
          <div className="card-action grey-lighten grey-text">
            <div>Posted by Steven</div>
            <div>By 20 March</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
