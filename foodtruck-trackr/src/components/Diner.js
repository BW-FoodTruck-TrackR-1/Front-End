import React, {useState} from 'react';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
   name: yup.string().required("Please enter your full name"), 
   username: yup.string().required("Please enter a unique username"),
   password: yup.string().required("Please enter password"),
   email: yup.string().email("must be a valid email").required("Please enter a email"),
   location:yup.string().required("Please enter your address"),
   terms:yup.boolean().oneOf([false], "Please agree to terms"),
   favoritetrucks:yup.array()
})


export default function Diner(props){
const [formTate, setFormTate]=useState({
    name:"",
    username:"",
    password:"",
    email:"",
    location:"",
    favoritetrucks: [],
    terms: false
})
const [error, seterror] = useState({
    name:"",
    username:"",
    password:"",
    email:"",
    location:"",
    terms: "",
    favoritetrucks: []
})
const validate =(e) => { 
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid =>{
        seterror({
            ...error,
            [e.target.name]: ""
        });
      })
      .catch(err =>{
          console.log(err.errors)
          seterror({
              ...error,
              [e.target.name]: err.errors[0]
          })
      })

}

const inputChange = e =>{

    e.persist()
    console.log("Input changed!", e.target.value, e.target.checked);
   validate(e);
    let value=e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormTate({...formTate, [e.target.name]:value});
}
console.log(props)
    return (
            <form onSubmit={props.formSubmit}> 
            <h2>Diners registration</h2>
            <label htmlFor="name">Full Name </label>
                <div className="form-group">
                    <input 
                    type="text"
                    name="name"
                    value={formTate.name}
                    onChange={inputChange}
                    />
                    {error.name.length > 0 ? <p className = "error">{error.name}</p> : null}
                </div>
            <label htmlFor="email">Enter your Email </label>

                <div className="form-group">
                    <input
                    type="text"
                    name="email"
                    value={formTate.email}
                    onChange={inputChange}
                    />
                    {error.email.length > 0 ? <p className = "error">{error.email}</p> : null}
                </div>
            <label htmlFor="username">Please enter a username</label>  
                <div className="form-group">
                    <input
                    type="text"
                    name="username"
                    value={formTate.username}
                    onChange={inputChange}
                    />
                    {error.username.length > 0 ? <p className = "error">{error.username}</p> : null}
                </div>              

            <label htmlFor="password">Please enter a password </label>

                <div className="form-group">
                    <input
                    type="text"
                    name="password"
                    value={formTate.password}
                    onChange={inputChange}
                    />
                    {error.password.length > 0 ? <p className = "error">{error.password}</p> : null}
                </div>
                
            <label htmlFor="location">Enter your current address</label>
                <div className="form-group">
                    <input 
                    type="text"
                    name="location"
                    value={formTate.location}
                    onChange={inputChange}/>
                    {error.location.length > 0 ? <p className = "error">{error.location}</p> : null}
                </div>

                <div className="form-group">
                <label htmlFor="terms">Terms & Conditions</label>
                    <input
                    type="checkbox"
                    name="terms"
                    
                    value={formTate.terms}
                    onChange={inputChange}
                    />
                    {error.terms.length > 0 ? <p className = "error">{error.terms}</p> : null}
                    <br/>
                <button type="submit">Submit</button>
                </div>
                
            
        </form>
    )
}