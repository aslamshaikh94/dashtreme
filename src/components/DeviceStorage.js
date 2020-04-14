import React from 'react'

const DeviceStorage=()=>{
	return (
			<div className="col-12 col-lg-6">
        <div className="card">
          <div className="card-body text-center">
            <p className="mb-4">Total Downloads</p>
            <input className="knob" data-width={175} data-height={175} data-readonly="true" data-thickness=".2" data-angleoffset={90} data-linecap="round" data-bgcolor="rgba(255, 255, 255, 0.14)" data-fgcolor="#fff" data-max={15000} defaultValue={8550} />
            <hr />
            <p className="mb-0 small-font text-center">3.4% <i className="zmdi zmdi-long-arrow-up" /> since yesterday</p>
          </div>
        </div>
      </div>
		)
}

export default DeviceStorage;