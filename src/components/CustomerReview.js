import React from 'react'

const CustomerReview=()=>{
	return (
			<div className="col-12 col-lg-6 col-xl-8">
        <div className="card">
          <div className="card-header">Customer Review
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
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent">
              <div className="media align-items-center">
                <img src="https://via.placeholder.com/110x110" alt="user avatar" className="customer-img rounded-circle" />
                <div className="media-body ml-3">
                  <h6 className="mb-0">iPhone X <small className="ml-4">08.34 AM</small></h6>
                  <p className="mb-0 small-font">Sara Jhon : This i svery Nice phone in low budget.</p>
                </div>
                <div className="star">
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star text-light" />
                  <i className="zmdi zmdi-star text-light" />
                </div>
              </div>
            </li>
            <li className="list-group-item bg-transparent">
              <div className="media align-items-center">
                <img src="https://via.placeholder.com/110x110" alt="user avatar" className="customer-img rounded-circle" />
                <div className="media-body ml-3">
                  <h6 className="mb-0">Air Pod <small className="ml-4">05.26 PM</small></h6>
                  <p className="mb-0 small-font">Danish Josh : The brand apple is original !</p>
                </div>
                <div className="star">
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star text-light" />
                  <i className="zmdi zmdi-star text-light" />
                </div>
              </div>
            </li>
            <li className="list-group-item bg-transparent">
              <div className="media align-items-center">
                <img src="https://via.placeholder.com/110x110" alt="user avatar" className="customer-img rounded-circle" />
                <div className="media-body ml-3">
                  <h6 className="mb-0">Mackbook Pro <small className="ml-4">06.45 AM</small></h6>
                  <p className="mb-0 small-font">Jhon Doe : Excllent product and awsome quality</p>
                </div>
                <div className="star">
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star text-light" />
                  <i className="zmdi zmdi-star text-light" />
                </div>
              </div>
            </li>
            <li className="list-group-item bg-transparent">
              <div className="media align-items-center">
                <img src="https://via.placeholder.com/110x110" alt="user avatar" className="customer-img rounded-circle" />
                <div className="media-body ml-3">
                  <h6 className="mb-0">Air Pod <small className="ml-4">08.34 AM</small></h6>
                  <p className="mb-0 small-font">Christine : The brand apple is original !</p>
                </div>
                <div className="star">
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star text-light" />
                </div>
              </div>
            </li>
            <li className="list-group-item bg-transparent">
              <div className="media align-items-center">
                <img src="https://via.placeholder.com/110x110" alt="user avatar" className="customer-img rounded-circle" />
                <div className="media-body ml-3">
                  <h6 className="mb-0">Mackbook <small className="ml-4">08.34 AM</small></h6>
                  <p className="mb-0 small-font">Michle : The brand apple is original !</p>
                </div>
                <div className="star">
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star" />
                  <i className="zmdi zmdi-star text-light" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
		)
}

export default CustomerReview;