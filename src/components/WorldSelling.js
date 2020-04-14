import React from 'react';


const WorldSelling =()=>{
	return(
		  <div className="col-12 col-lg-12 col-xl-6">
        <div className="card">
          <div className="card-header">World Selling Region
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
            <div id="dashboard-map" style={{height: '275px'}} />
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-items-center">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Income</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><i className="flag-icon flag-icon-ca mr-2" /> USA</td>
                  <td>4,586$</td>
                  <td><span id="trendchart1" /></td>
                </tr>
                <tr>
                  <td><i className="flag-icon flag-icon-us mr-2" />Canada</td>
                  <td>2,089$</td>
                  <td><span id="trendchart2" /></td>
                </tr>
                <tr>
                  <td><i className="flag-icon flag-icon-in mr-2" />India</td>
                  <td>3,039$</td>
                  <td><span id="trendchart3" /></td>
                </tr>
                <tr>
                  <td><i className="flag-icon flag-icon-gb mr-2" />UK</td>
                  <td>2,309$</td>
                  <td><span id="trendchart4" /></td>
                </tr>
                <tr>
                  <td><i className="flag-icon flag-icon-de mr-2" />Germany</td>
                  <td>7,209$</td>
                  <td><span id="trendchart5" /></td>
                </tr>         
              </tbody>
            </table>
          </div>
        </div>
      </div>
		)
}

export default WorldSelling