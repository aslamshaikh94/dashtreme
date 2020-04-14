import React from 'react'

const PageViews=()=>{
	return (
			<div className="col-12 col-lg-6">
        <div className="card">
          <div className="card-body">
            <p>Page Views</p>
            <h4 className="mb-0">8,293 <small className="small-font">5.2% <i className="zmdi zmdi-long-arrow-up" /></small></h4>
          </div>
          <div className="chart-container-3">
            <canvas id="chart3" />
          </div>
        </div>
      </div>
		)
}

export default PageViews;