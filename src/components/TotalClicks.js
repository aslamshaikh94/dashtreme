import React from 'react'

const TotalClicks=()=>{
	return (
			<div className="col-12 col-lg-6">
        <div className="card">
          <div className="card-body">
            <p>Total Clicks</p>
            <h4 className="mb-0">7,493 <small className="small-font">1.4% <i className="zmdi zmdi-long-arrow-up" /></small></h4>
          </div>
          <div className="chart-container-3">
            <canvas id="chart4" />
          </div>
        </div>
      </div>
		)
}

export default TotalClicks;