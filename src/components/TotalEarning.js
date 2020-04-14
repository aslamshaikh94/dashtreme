import React from 'react'

const TotalEarning=()=>{
	return (
			<div className="col-12 col-lg-6 col-xl-4">
        <div className="card">
          <div className="card-body">
            <p>Total Earning</p>
            <h4 className="mb-0">287,493$</h4>
            <small>1.4% <i className="zmdi zmdi-long-arrow-up" /> Since Last Month</small>
            <hr />
            <p>Total Sales</p>
            <h4 className="mb-0">87,493</h4>
            <small>5.43% <i className="zmdi zmdi-long-arrow-up" /> Since Last Month</small>
            <div className="mt-5">
              <div className="chart-container-4">
                <canvas id="chart5" />
              </div>
            </div>
          </div>
        </div>
      </div>
		)
}

export default TotalEarning;