import React from 'react'
import {Link} from 'react-router-dom';

const LoginCom = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-header shadow-sm">
              <h3 className='text-center'><i class="fa-solid fa-right-to-bracket"></i> Login</h3>
            </div>
            <div className="card-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="input-bg form-control" placeholder='email' />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="input-bg form-control" placeholder='**********' />
                </div>
                <button type="submit" className="btn btn-primary ">submit</button>
                <div>
                    <hr className='text-muted' />
                    <h5 className='text-muted text-center'> or</h5>
                    <hr className='text-muted' />
                  </div>
                  <div className='mt-3 mb-5 d-grid'>
                    <button className='custom-btn custom-btn-white'>
                      <span className='text-muted fs-6'>Don't have an account</span>
                      <Link to='/signup' className='ms-1 text-info fw-bold'> Sign-up</Link>
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default LoginCom;