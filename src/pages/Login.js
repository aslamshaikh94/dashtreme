import React from 'react';
import Formgroup from '../components/Formgroup';
import {useHistory } from "react-router-dom";

const Login=()=>{
	const history = useHistory()	

	function loginbtn(){
		localStorage.setItem('auth', true)
		history.push('/')
	}
	return (
		<div>
		  
		  {/* Start wrapper*/}		  
		    <div className="card-authentication2 mx-auto my-5">
		      <div className="card-group">
		        <div className="card mb-0">
		          <div className="bg-signin2" />
		          <div className="card-img-overlay rounded-left my-5">
		            <h2 className="text-white">Lorem</h2>
		            <h1 className="text-white">Ipsum Dolor</h1>
		            <p className="card-text text-white pt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
		          </div>
		        </div>
		        <div className="card mb-0 ">
		          <div className="card-body">
		            <div className="card-content p-3">
		              <div className="text-center">
		                <img src="assets/images/logo-icon.png" alt="logo icon" />
		              </div>
		              <div className="card-title text-uppercase text-center py-3">Sign In</div>
		              <form>
		                <Formgroup label="Username" icon="icon-user" placeholder="Username"/>
		                <Formgroup label="Password" icon="icon-lock" placeholder="Password"/>	
		                <div className="form-row mr-0 ml-0">
		                  <div className="form-group col-6">
		                    <div className="icheck-material-white">
		                      <input type="checkbox" id="user-checkbox" defaultChecked />
		                      <label htmlFor="user-checkbox">Remember me</label>
		                    </div>
		                  </div>
		                  <div className="form-group col-6 text-right">
		                    <a href="authentication-reset-password2.html">Reset Password</a>
		                  </div>
		                </div>
		                <button type="button" className="btn btn-light btn-block waves-effect waves-light" onClick={e=>loginbtn()}>Sign In</button>
		                <div className="text-center pt-3">
		                  <p>or Sign in with</p>
		                  <div className="form-row mt-4">
		                    <div className="form-group mb-0 col-6">
		                      <button type="button" className="btn btn-light btn-block"><i className="fa fa-facebook-square" /> Facebook</button>
		                    </div>
		                    <div className="form-group mb-0 col-6 text-right">
		                      <button type="button" className="btn btn-light btn-block"><i className="fa fa-twitter-square" /> Twitter</button>
		                    </div>
		                  </div>
		                  <hr />
		                  <p className="text-warning">Do not have an account? <a href="authentication-signup2.html"> Sign Up here</a></p>
		                </div>
		              </form>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>		    
		</div>
	)
}

export default Login