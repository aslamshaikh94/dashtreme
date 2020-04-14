import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Leftsidebar from '../components/Leftsidebar';
import Sitetraffic from '../components/Sitetraffic';
import Weeklysales from '../components/Weeklysales';
import WorldSelling from '../components/WorldSelling';
import PageViews from '../components/PageViews';
import TotalClicks from '../components/TotalClicks';
import TotalDownloads from '../components/TotalDownloads';
import DeviceStorage from '../components/DeviceStorage';
import TotalEarning from '../components/TotalEarning';
import CustomerReview from '../components/CustomerReview';
import RecentOrder from '../components/RecentOrder';
import SocialChart from '../components/SocialChart';
import StatusChart from '../components/StatusChart';


const Home = ()=>{
	return (
			<div id="wrapper">
			  {/*Start sidebar-wrapper*/}
			  <Leftsidebar/>
			  {/*End sidebar-wrapper*/}
			  {/*Start topbar header*/}
			  <Header/>
			  {/*End topbar header*/}
			  <div className="clearfix" />
			  <div className="content-wrapper">
			    <div className="container-fluid">
			      {/*Start Dashboard Content*/}
			      <StatusChart/>  
			      <div className="row">
			        <Sitetraffic/>
			        <Weeklysales/>
			      </div>{/*End Row*/}
			      <SocialChart/>
			      <div className="row">
			        <WorldSelling/>
			        <div className="col-12 col-lg-12 col-xl-6">
			          <div className="row">
			            <PageViews/>
			            <TotalClicks/>
			            <TotalDownloads/>			            
			            <DeviceStorage/>	
			          </div>
			        </div> 
			      </div>{/*End Row*/}
			      <div className="row">
			        <TotalEarning/>
			        <CustomerReview/>
			      </div>{/*End Row*/}

			      <RecentOrder/>
			      {/*End Dashboard Content*/}
			      {/*start overlay*/}
			      <div className="overlay toggle-menu" />
			      {/*end overlay*/}
			    </div>
			    {/* End container-fluid*/}
			  </div>{/*End content-wrapper*/}
			  
			  {/*Start footer*/}
			  <Footer/>
			  {/*End footer*/}
			  {/*start color switcher*/}

			  {/*end color switcher*/}
			</div>
		)
}

export default Home