import React from 'react';

const SocialChart=()=>{
	return(
			<div className="row">
        <div className="col-12 col-lg-6 col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="media align-items-center">
                <div className="w_chart easy-dash-chart" data-percent={60}>
                  <span className="w_percent" />
                </div>
                <div className="media-body ml-3">
                  <h6 className="mb-0">Facebook Followers</h6>
                  <small className="mb-0">22.14% <i className="fa fa-arrow-up" /> Since Last Week</small>
                </div>
                <i className="fa fa-facebook text-white text-right fa-2x" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="media align-items-center">
                <div className="w_chart easy-dash-chart" data-percent={65}>
                  <span className="w_percent" />
                </div>
                <div className="media-body ml-3">
                  <h6 className="mb-0">Twitter Tweets</h6>
                  <small className="mb-0">32.15% <i className="fa fa-arrow-up" /> Since Last Week</small>
                </div>
                <i className="fa fa-twitter text-white text-right fa-2x" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-12 col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="media align-items-center">
                <div className="w_chart easy-dash-chart" data-percent={75}>
                  <span className="w_percent" />
                </div>
                <div className="media-body ml-3">
                  <h6 className="mb-0">Youtube Subscribers</h6>
                  <small className="mb-0">58.24% <i className="fa fa-arrow-up" /> Since Last Week</small>
                </div>
                <i className="fa fa-youtube text-white fa-2x" />
              </div>
            </div>
          </div>
        </div>
      </div>
		)
}

export default SocialChart