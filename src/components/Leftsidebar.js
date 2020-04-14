import React from 'react';


const Leftsidebar =()=>{
	return(
		  <div id="sidebar-wrapper" data-simplebar data-simplebar-auto-hide="true">
		    <div className="brand-logo">
		      <a href="/">
		        <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
		        <h5 className="logo-text">Dashtreme Admin</h5>
		      </a>
		    </div>
		    <div className="user-details">
		      <div className="media align-items-center user-pointer collapsed" data-toggle="collapse" data-target="#user-dropdown">
		        <div className="avatar">
		          <img className="mr-3 side-user-img" src="https://via.placeholder.com/110x110" alt="user avatar" />
		        </div>
		        <div className="media-body">
		          <h6 className="side-user-name">Mark Johnson</h6>
		        </div>
		      </div>
		      <div id="user-dropdown" className="collapse">
		        <ul className="user-setting-menu">
		          <li><a href="#"><i className="icon-user" />  My Profile</a></li>
		          <li><a href="#"><i className="icon-settings" /> Setting</a></li>
		          <li><a href="#"><i className="icon-power" /> Logout</a></li>
		        </ul>
		      </div>
		    </div>
		    <ul className="sidebar-menu">
		      <li className="sidebar-header">MAIN NAVIGATION</li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-view-dashboard" /> <span>Dashboard</span><i className="fa fa-angle-left pull-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="index.html"><i className="zmdi zmdi-dot-circle-alt" /> eCommerce</a></li>
		          <li><a href="dashboard-human-resources.html"><i className="zmdi zmdi-dot-circle-alt" /> Human Resources</a></li>
		          <li><a href="dashboard-digital-marketing.html"><i className="zmdi zmdi-dot-circle-alt" /> Digital Marketing</a></li>
		          <li><a href="dashboard-property-listing.html"><i className="zmdi zmdi-dot-circle-alt" /> Property Listings</a></li>
		          <li><a href="dashboard-service-support.html"><i className="zmdi zmdi-dot-circle-alt" /> Services &amp; Support</a></li>
		          <li><a href="dashboard-logistics.html"><i className="zmdi zmdi-dot-circle-alt" /> Logistics</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-layers" />
		          <span>UI Elements</span> <i className="fa fa-angle-left pull-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="ui-typography.html"><i className="zmdi zmdi-dot-circle-alt" /> Typography</a></li>
		          <li><a href="ui-cards.html"><i className="zmdi zmdi-dot-circle-alt" /> Cards</a></li>
		          <li><a href="ui-buttons.html"><i className="zmdi zmdi-dot-circle-alt" /> Buttons</a></li>
		          <li><a href="ui-nav-tabs.html"><i className="zmdi zmdi-dot-circle-alt" /> Nav Tabs</a></li>
		          <li><a href="ui-accordions.html"><i className="zmdi zmdi-dot-circle-alt" /> Accordions</a></li>
		          <li><a href="ui-modals.html"><i className="zmdi zmdi-dot-circle-alt" /> Modals</a></li>
		          <li><a href="ui-list-groups.html"><i className="zmdi zmdi-dot-circle-alt" /> List Groups</a></li>
		          <li><a href="ui-bootstrap-elements.html"><i className="zmdi zmdi-dot-circle-alt" /> BS Elements</a></li>
		          <li><a href="ui-pagination.html"><i className="zmdi zmdi-dot-circle-alt" /> Pagination</a></li>
		          <li><a href="ui-alerts.html"><i className="zmdi zmdi-dot-circle-alt" /> Alerts</a></li>
		          <li><a href="ui-progressbars.html"><i className="zmdi zmdi-dot-circle-alt" /> Progress Bars</a></li>
		          <li><a href="ui-checkbox-radio.html"><i className="zmdi zmdi-dot-circle-alt" /> Checkboxes &amp; Radios</a></li>
		          <li><a href="ui-notification.html"><i className="zmdi zmdi-dot-circle-alt" /> Notifications</a></li>
		          <li><a href="ui-sweet-alert.html"><i className="zmdi zmdi-dot-circle-alt" /> Sweet Alerts</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-card-travel" />
		          <span>Components</span>
		          <i className="fa fa-angle-left pull-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="components-range-slider.html"><i className="zmdi zmdi-dot-circle-alt" /> Range Sliders</a></li>
		          <li><a href="components-image-carousel.html"><i className="zmdi zmdi-dot-circle-alt" /> Image Carousels</a></li>
		          <li><a href="components-grid-layouts.html"><i className="zmdi zmdi-dot-circle-alt" /> Grid Layouts</a></li>
		          <li><a href="components-switcher-buttons.html"><i className="zmdi zmdi-dot-circle-alt" /> Switcher Buttons</a></li>
		          <li><a href="components-pricing-table.html"><i className="zmdi zmdi-dot-circle-alt" /> Pricing Tables</a></li>
		          <li><a href="components-vertical-timeline.html"><i className="zmdi zmdi-dot-circle-alt" /> Vertical Timeline</a></li>
		          <li><a href="components-horizontal-timeline.html"><i className="zmdi zmdi-dot-circle-alt" /> Horizontal Timeline</a></li>
		          <li><a href="components-fancy-lightbox.html"><i className="zmdi zmdi-dot-circle-alt" /> Fancy Lightbox</a></li>
		          <li><a href="components-color-palette.html"><i className="zmdi zmdi-dot-circle-alt" /> Color Palette</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-chart" /> <span>Charts</span>
		          <i className="fa fa-angle-left float-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="charts-chartjs.html"><i className="zmdi zmdi-dot-circle-alt" /> Chart JS</a></li>
		          <li><a href="charts-apex.html"><i className="zmdi zmdi-dot-circle-alt" /> Apex Charts</a></li>
		          <li><a href="charts-sparkline.html"><i className="zmdi zmdi-dot-circle-alt" /> Sparkline Charts</a></li>
		          <li><a href="charts-peity.html"><i className="zmdi zmdi-dot-circle-alt" /> Peity Charts</a></li>
		          <li><a href="charts-other.html"><i className="zmdi zmdi-dot-circle-alt" /> Other Charts</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-widgets" /> <span>Widgets</span>
		          <i className="fa fa-angle-left float-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="widgets-static.html"><i className="zmdi zmdi-dot-circle-alt" /> Static Widgets</a></li>
		          <li><a href="widgets-data.html"><i className="zmdi zmdi-dot-circle-alt" /> Data Widgets</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-email" />
		          <span>Mailbox</span>
		          <small className="badge float-right badge-warning">12</small>
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="mail-inbox.html"><i className="zmdi zmdi-dot-circle-alt" /> Inbox</a></li>
		          <li><a href="mail-compose.html"><i className="zmdi zmdi-dot-circle-alt" /> Compose</a></li>
		          <li><a href="mail-read.html"><i className="zmdi zmdi-dot-circle-alt" /> Read Mail</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-format-list-bulleted" /> <span>Forms</span>
		          <i className="fa fa-angle-left pull-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="form-inputs.html"><i className="zmdi zmdi-dot-circle-alt" /> Basic Inputs</a></li>
		          <li><a href="form-input-group.html"><i className="zmdi zmdi-dot-circle-alt" /> Input Groups</a></li>
		          <li><a href="form-layouts.html"><i className="zmdi zmdi-dot-circle-alt" /> Form Layouts</a></li>
		          <li><a href="form-advanced.html"><i className="zmdi zmdi-dot-circle-alt" /> Form Advanced</a></li>
		          <li><a href="form-uploads.html"><i className="zmdi zmdi-dot-circle-alt" /> Form Uploads</a></li>
		          <li><a href="form-validation.html"><i className="zmdi zmdi-dot-circle-alt" /> Form Validation</a></li>
		          <li><a href="form-step-wizard.html"><i className="zmdi zmdi-dot-circle-alt" /> Form Wizard</a></li>
		          <li><a href="form-text-editor.html"><i className="zmdi zmdi-dot-circle-alt" /> Form Editor</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-lock" /> <span>Authentication</span>
		          <i className="fa fa-angle-left float-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="authentication-signin.html" target="_blank"><i className="zmdi zmdi-dot-circle-alt" /> SignIn 1</a></li>
		          <li><a href="authentication-signup.html" target="_blank"><i className="zmdi zmdi-dot-circle-alt" /> SignUp 1</a></li>
		          <li><a href="authentication-signin2.html" target="_blank"><i className="zmdi zmdi-dot-circle-alt" /> SignIn 2</a></li>
		          <li><a href="authentication-signup2.html" target="_blank"><i className="zmdi zmdi-dot-circle-alt" /> SignUp 2</a></li>
		          <li><a href="authentication-lock-screen.html" target="_blank"><i className="zmdi zmdi-dot-circle-alt" /> Lock Screen</a></li>
		          <li><a href="authentication-reset-password.html" target="_blank"><i className="zmdi zmdi-dot-circle-alt" /> Reset Password 1</a></li>
		          <li><a href="authentication-reset-password2.html" target="_blank"><i className="zmdi zmdi-dot-circle-alt" /> Reset Password 2</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="calendar.html" className="waves-effect">
		          <i className="zmdi zmdi-calendar-check" /> <span>Calendar</span>
		          <small className="badge float-right badge-light">New</small>
		        </a>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-invert-colors" /> <span>UI Icons</span>
		          <i className="fa fa-angle-left float-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="icons-font-awesome.html"><i className="zmdi zmdi-dot-circle-alt" /> Font Awesome</a></li>
		          <li><a href="icons-material-designs.html"><i className="zmdi zmdi-dot-circle-alt" /> Material Design</a></li>
		          <li><a href="icons-themify.html"><i className="zmdi zmdi-dot-circle-alt" /> Themify Icons</a></li>
		          <li><a href="icons-simple-line-icons.html"><i className="zmdi zmdi-dot-circle-alt" /> Line Icons</a></li>
		          <li><a href="icons-flags.html"><i className="zmdi zmdi-dot-circle-alt" /> Flag Icons</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-grid" /> <span>Tables</span>
		          <i className="fa fa-angle-left float-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="table-simple-tables.html"><i className="zmdi zmdi-dot-circle-alt" /> Simple Tables</a></li>
		          <li><a href="table-data-tables.html"><i className="zmdi zmdi-dot-circle-alt" /> Data Tables</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-map" /> <span>Maps</span>
		          <i className="fa fa-angle-left float-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="maps-google.html"><i className="zmdi zmdi-dot-circle-alt" /> Google Maps</a></li>
		          <li><a href="maps-vector.html"><i className="zmdi zmdi-dot-circle-alt" /> Vector Maps</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="zmdi zmdi-collection-folder-image" /> <span>Sample Pages</span>
		          <i className="fa fa-angle-left float-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="pages-invoice.html"><i className="zmdi zmdi-dot-circle-alt" /> Invoice</a></li>
		          <li><a href="pages-user-profile.html"><i className="zmdi zmdi-dot-circle-alt" /> User Profile</a></li>
		          <li><a href="pages-blank-page.html"><i className="zmdi zmdi-dot-circle-alt" /> Blank Page</a></li>
		          <li><a href="pages-coming-soon.html"><i className="zmdi zmdi-dot-circle-alt" /> Coming Soon</a></li>
		          <li><a href="pages-403.html"><i className="zmdi zmdi-dot-circle-alt" /> 403 Error</a></li>
		          <li><a href="pages-404.html"><i className="zmdi zmdi-dot-circle-alt" /> 404 Error</a></li>
		          <li><a href="pages-500.html"><i className="zmdi zmdi-dot-circle-alt" /> 500 Error</a></li>
		        </ul>
		      </li>
		      <li>
		        <a href="#" className="waves-effect">
		          <i className="fa fa-share" /> <span>Multilevel</span>
		          <i className="fa fa-angle-left pull-right" />
		        </a>
		        <ul className="sidebar-submenu">
		          <li><a href="#"><i className="zmdi zmdi-dot-circle-alt" /> Level One</a></li>
		          <li>
		            <a href="#"><i className="zmdi zmdi-dot-circle-alt" /> Level One <i className="fa fa-angle-left pull-right" /></a>
		            <ul className="sidebar-submenu">
		              <li><a href="#"><i className="zmdi zmdi-dot-circle-alt" /> Level Two</a></li>
		              <li>
		                <a href="#"><i className="zmdi zmdi-dot-circle-alt" /> Level Two <i className="fa fa-angle-left pull-right" /></a>
		                <ul className="sidebar-submenu">
		                  <li><a href="#"><i className="zmdi zmdi-dot-circle-alt" /> Level Three</a></li>
		                  <li><a href="#"><i className="zmdi zmdi-dot-circle-alt" /> Level Three</a></li>
		                </ul>
		              </li>
		            </ul>
		          </li>
		          <li><a href="#" className="waves-effect"><i className="zmdi zmdi-dot-circle-alt" /> Level One</a></li>
		        </ul>
		      </li>
		      <li className="sidebar-header">LABELS</li>
		      <li><a href="#" className="waves-effect"><i className="zmdi zmdi-coffee text-danger" /> <span>Important</span></a></li>
		      <li><a href="#" className="waves-effect"><i className="zmdi zmdi-chart-donut text-success" /> <span>Warning</span></a></li>
		      <li><a href="#" className="waves-effect"><i className="zmdi zmdi-share text-info" /> <span>Information</span></a></li>
		    </ul> 
		  </div>
		)
}

export default Leftsidebar