import "./Signup.css";
import {Link } from 'react-router-dom'
import {useState} from "react"  
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Signup = () => {
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email:"", 
        username:"",
    password:"",})
    const change = (e)=>{
        const {name, value} = e.target;
        setInputs({...Inputs, [name]: value});
    }
    const submit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/v1/register", Inputs)
        .then((response)=>{
            console.log(response);
            if(response.data.message === "User Already Exists..!!"){
                alert(response.data.message)
            }else{
                alert(response.data.message +"\nNow login to save the Task")

            }
        })
        setInputs( {
            email:"",  
            username:"",
        password:"",} )
        history("/login")
    }
    return (
        <div className="signup">
        <h1>SignUp</h1>
        <form>
           <input type='email' name="email" placeholder={'Email'} 
        onChange={ change}  value ={Inputs.email}
           required />
           <input type='username' name='username' placeholder={'Username'} 
        onChange={ change} value ={Inputs.username}
           required />
           <input type='password' name='password' placeholder={'Password'}
        onChange={ change} value ={Inputs.password}
           required />
           
           
           
           <input type={'password'} placeholder={'Confirm Password'} 
           required />
           <button type={'submit'} onClick={submit}>SignUp</button> 
        </form>
       
       </div>
    );
}

export default Signup;