import React from 'react';

const StatusChart=()=>{
	return(
			<div className="card mt-3">
        <div className="card-content">
          <div className="row row-group m-0">
            <div className="col-12 col-lg-6 col-xl-3 border-light">
              <div className="card-body">
                <h5 className="text-white mb-0">9526 <span className="float-right"><i className="fa fa-shopping-cart" /></span></h5>
                <div className="progress my-3" style={{height: '3px'}}>
                  <div className="progress-bar" style={{width: '55%'}} />
                </div>
                <p className="mb-0 text-white small-font">Total Orders <span className="float-right">+4.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-light">
              <div className="card-body">
                <h5 className="text-white mb-0">8323 <span className="float-right"><i className="fa fa-usd" /></span></h5>
                <div className="progress my-3" style={{height: '3px'}}>
                  <div className="progress-bar" style={{width: '55%'}} />
                </div>
                <p className="mb-0 text-white small-font">Total Revenue <span className="float-right">+1.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-light">
              <div className="card-body">
                <h5 className="text-white mb-0">6200 <span className="float-right"><i className="fa fa-eye" /></span></h5>
                <div className="progress my-3" style={{height: '3px'}}>
                  <div className="progress-bar" style={{width: '55%'}} />
                </div>
                <p className="mb-0 text-white small-font">Visitors <span className="float-right">+5.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-3 border-light">
              <div className="card-body">
                <h5 className="text-white mb-0">5630 <span className="float-right"><i className="fa fa-envira" /></span></h5>
                <div className="progress my-3" style={{height: '3px'}}>
                  <div className="progress-bar" style={{width: '55%'}} />
                </div>
                <p className="mb-0 text-white small-font">Messages <span className="float-right">+2.2% <i className="zmdi zmdi-long-arrow-up" /></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
}

export default StatusChart