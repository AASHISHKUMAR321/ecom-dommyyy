import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


const LoginCom = () => {
const [user, setUser]= useState({email:'', password:''})
const navigate= useNavigate();
const submithandler= async (e)=>{
  e.preventDefault();
  try {
    const resp = await axios.post("http://localhost:4000/login", user)
    if(resp.status===200){
      console.log(resp.data.result.user);
      localStorage.setItem('token',resp.data.result.token )
      localStorage.setItem('user', JSON.stringify(resp.data.result.user) ) 

      setUser({email: '', password: ''});
      navigate("/product")
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-header shadow-sm">
              <h3 className='text-center font-design'><i class="fa-solid fa-right-to-bracket"></i> Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={submithandler}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">E-mail</label>
                  <input type="text" className="input-bg form-control" placeholder='email' value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="input-bg form-control" placeholder='**********' value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}  />
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