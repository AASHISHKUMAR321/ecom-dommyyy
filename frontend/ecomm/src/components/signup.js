import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const SignupCom = () => {
    const [user, setUser]= useState({name: '', username: '', email: '', password: '', address:''});
    const submithandler= async(e)=>{
        e.preventDefault();
        try {
            const resp = await axios.post("http://localhost:4000/register", user)
            if (resp.status === 201) {
               console.log(resp.data);
                setUser({ name: '', username: '', email: '', password: '', address:'' });
            }
        } catch (error) {
            console.log("error");
            console.log(error);

            
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-3 mb-5 bg-body rounded">
                        <div className="card-header shadow-sm">
                            <h3 className='text-center font-design'><i class="fa-regular fa-registered"></i> Registration Form</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submithandler}>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">Full Name</label>
                                    <input type="text" className="input-bg form-control" placeholder='Full Name'value={user.name} onChange={(e)=>setUser({...user, name:e.target.value})} />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label">E-mail</label>
                                    <input type="text" className="input-bg form-control" placeholder='Email' value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="input-bg form-control" placeholder='**********'value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">User Name</label>
                                    <input type="text" className="input-bg form-control" placeholder='User Name'value={user.username} onChange={(e)=>setUser({...user, username:e.target.value})} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Address</label>
                                    <input type="text" className="input-bg form-control" placeholder='Address'value={user.address} onChange={(e)=>setUser({...user, address:e.target.value})} />
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