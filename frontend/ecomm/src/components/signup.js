import React from 'react'
import {Link} from 'react-router-dom';

const SignupCom = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-3 mb-5 bg-body rounded">
                        <div className="card-header shadow-sm">
                            <h3 className='text-center'><i class="fa-regular fa-registered"></i> Registration From</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">Full Name</label>
                                    <input type="text" className="input-bg form-control" placeholder='Full Name' />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label">E-mail</label>
                                    <input type="text" className="input-bg form-control" placeholder='Email' />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="input-bg form-control" placeholder='**********' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">User Name</label>
                                    <input type="text" className="input-bg form-control" placeholder='User Name' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Address</label>
                                    <input type="text" className="input-bg form-control" placeholder='Address' />
                                </div>
                                <button type="submit" className="btn btn-primary ">submit</button>
                                <div>
                                    <hr className='text-muted' />
                                    <h5 className='text-muted text-center'> or</h5>
                                    <hr className='text-muted' />
                                </div>
                                <div className='mt-3 mb-5 d-grid'>
                                    <button className='custom-btn custom-btn-white'>
                                        <span className='text-muted fs-6'> Already have an account</span>
                                        <Link to='/login' className='ms-1 text-info fw-bold'> log-in</Link>
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

export default SignupCom;