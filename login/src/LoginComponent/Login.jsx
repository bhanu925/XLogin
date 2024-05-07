import './Login.css';
import { useState } from 'react';
const Login = ()=>{
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ welcomeOn , setWelcomeOn ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('');

    const handleSubmit =(event) =>{
        event.preventDefault();
        if(username==='user' && password==='password'){            
            setWelcomeOn(true);
        }
        else{
            setErrorMessage('Invalid username or password');
        }
    }

    return (
        
        <div className="login">
            <h1>Login Page</h1>
            {!welcomeOn?
            (
            
            <form onSubmit={handleSubmit}>
                { errorMessage && <p>{errorMessage}</p> }
                <div>
                   <label htmlFor="username">Username:</label>
                    <input onChange={(e)=>setUsername(e.target.value)}
                     type="text" id="username" name="username" 
                     placeholder="username" required/>
                </div>
                <div>
                   <label htmlFor="password">Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)} 
                    type="text" name="password" id="password" 
                    placeholder="password" required/>
                </div>
                <input type="submit" />
            </form>):(
                <p>Welcome, {username}!</p>
            )
            }       
        </div>
    )
}
export default Login;