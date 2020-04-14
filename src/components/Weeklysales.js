import React from 'react';


const Weeklysales =()=>{
	return(
		  <div className="col-12 col-lg-4 col-xl-4">
        <div className="card">
          <div className="card-header">Weekly sales
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
            <div className="chart-container-2">
              <canvas id="chart2" />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table align-items-center">
              <tbody>
                <tr>
                  <td><i className="fa fa-circle text-white mr-2" /> Direct</td>
                  <td>$5856</td>
                  <td>+55%</td>
                </tr>
                <tr>
                  <td><i className="fa fa-circle text-light-1 mr-2" />Affiliate</td>
                  <td>$2602</td>
                  <td>+25%</td>
                </tr>
                <tr>
                  <td><i className="fa fa-circle text-light-2 mr-2" />E-mail</td>
                  <td>$1802</td>
                  <td>+15%</td>
                </tr>
                <tr>
                  <td><i className="fa fa-circle text-light-3 mr-2" />Other</td>
                  <td>$1105</td>
                  <td>+5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
		)
}

export default Weeklysales