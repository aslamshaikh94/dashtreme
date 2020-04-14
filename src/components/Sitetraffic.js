import React from 'react';


const Sitetraffic =()=>{
	return(
		  <div className="col-12 col-lg-8 col-xl-8">
        <div className="card">
          <div className="card-header">Site Traffic
            <div className="card-action">
              <div className="dropdown">
                <a href="#" className="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                  <i className="icon-options" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <ul className="list-inline">
              <li className="list-inline-item"><i className="fa fa-circle mr-2 text-white" />New Visitor</li>
              <li className="list-inline-item"><i className="fa fa-circle mr-2 text-light" />Old Visitor</li>
            </ul>
            <div className="chart-container-1">
              <canvas id="chart1" />
            </div>
          </div>
          <div className="row m-0 row-group text-center border-top border-light-3">
            <div className="col-12 col-lg-4">
              <div className="p-3">
                <h5 className="mb-0">45.87M</h5>
                <small className="mb-0">Overall Visitor <span> <i className="fa fa-arrow-up" /> 2.43%</span></small>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="p-3">
                <h5 className="mb-0">15:48</h5>
                <small className="mb-0">Visitor Duration <span> <i className="fa fa-arrow-up" /> 12.65%</span></small>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="p-3">
                <h5 className="mb-0">245.65</h5>
                <small className="mb-0">Pages/Visit <span> <i className="fa fa-arrow-up" /> 5.62%</span></small>
              </div>
            </div>
          </div> 
        </div>
      </div>
		)
}

export default Sitetraffic