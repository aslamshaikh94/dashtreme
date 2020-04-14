import React from 'react';



const Formgroup=(props)=>{
	const {label, icon, ...all} = props
	return (
			<div className="form-group">
        <div className="position-relative has-icon-left">
          <label htmlFor={label} className="sr-only">{label}</label>
          <input type="text" id={label} {...all} className="form-control"  />
          <div className="form-control-position">
            <i className={icon} />
          </div>
        </div>
      </div>
		)
}

export default Formgroup