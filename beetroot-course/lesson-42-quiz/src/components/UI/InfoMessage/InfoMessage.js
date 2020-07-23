import React from 'react'

const InfoMessage = props => {
  return (
    <div className="row">
      <div className="card col-11 col-lg-7 col-md-10 col-sm-12 col-xs-12 mx-auto pl-2 pr-2 mb-5" style={{width: '18rem', marginTop: '60px'}}>
          <div className="card-body">
            <h4 className="card-title mt-2">{props.message}{props.error ? props.error : ''}</h4>
          </div>
      </div>
    </div>
  )
}

export default InfoMessage