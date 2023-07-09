//importing its css
import "./Login.css";
import {useState} from "react"  
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import {authActions} from "../../store"
const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email:"", 
    password:"",})
    const change = (e)=> {
        const {name, value} = e.target; 
        setInputs({...Inputs, [name]: value});
    }
    const submit = async (e)=>{
        e.preventDefault();
        await axios
         .post("http://localhost:8000/api/v1/sigin", Inputs)
        .then((response)=>{
       
               sessionStorage.setItem("id",response.data.others._id)
               dispatch(authActions.login())
            history("/task")
        })
       
    }
    return( 
        <div className="Login">
         <h1>Login</h1>
         <form>
         <input type='email' name="email" placeholder={'Email'} 
        onChange={ change}  value ={Inputs.email}
           required />
           
           <input type='password' name='password' placeholder={'Password'}
        onChange={ change} value ={Inputs.password}
           required />
              <button type={'submit'} onClick={submit}>Login</button>
         </form>
        
        </div>
    );
}

export default Login;