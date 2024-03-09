import React, { useState ,useNavigate} from 'react'
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

const Login = () => {
const [mail,setMail]=useState("")
const { login} = useAuth();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const router = useRouter();

const handleLogin = async (e) => {
  e.preventDefault();
  const success = await login(email, password);
  if (success) {
    router.push('/'); 
    alert("Login successfull")
  }else{
    alert("Please give correct credential or Sign up")
  }
};

  return (
  
<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Email" value={email} onChange={((e) => setEmail(e.target.value))} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={((e) => setPassword(e.target.value))} />
            </div>
            <button type="button" className="btn btn-primary mr-2" onClick={handleLogin}>Login</button>
            <Link href="/register">
              <button className="btn btn-outline-secondary " style={{"marginLeft":"10px"}}>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login
