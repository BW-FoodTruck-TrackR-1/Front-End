import React, {useState} from 'react';
import axios from 'axios';
import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup.string().required("Please enter your full name"), 
    username: yup.string().required("Please enter a unique username"),
    password: yup.string().required("Please enter password"),
    email: yup.string().email("must be a valid email").required("Please enter a email"),
    terms:yup.boolean().oneOf([false],"Please agree to terms"),
    trucksOwned:yup.array()
 })


export default function Operator(props){
const [formState, setFormState]=useState({
    name:"",
    username:"",
    password:"",
    email:"",
    terms:"",
    trucksOwned:[]
})
const [error, seterror] = useState({
    name:"",
    username:"",
    password:"",
    email:"",
    terms: "",
    trucksOwned: []
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
    setFormState({...formState, [e.target.name]:value});
}
    return (
        <form onSubmit={props.formSubmit}> 
            <h2>Operator registration</h2>
            <label htmlFor="name">Full Name </label>
                <div className="form-group">
                    <input 
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                    />
                    {error.name.length > 0 ? <p className = "error">{error.name}</p> : null}
                </div>
            <label htmlFor="email">Enter your Email </label>

                <div className="form-group">
                    <input
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={inputChange}
                    />
                    {error.email.length > 0 ? <p className = "error">{error.email}</p> : null}
                </div>
            <label htmlFor="username">Please enter a username</label>  
                <div className="form-group">
                    <input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={inputChange}
                    />
                    {error.username.length > 0 ? <p className = "error">{error.username}</p> : null}
                </div>              

            <label htmlFor="password">Please enter a password </label>

                <div className="form-group">
                    <input
                    type="text"
                    name="password"
                    value={formState.password}
                    onChange={inputChange}
                    />
                    {error.password.length > 0 ? <p className = "error">{error.password}</p> : null}
                </div>
                <div className="form-group">
          

                <label htmlFor="terms">Terms & Conditions</label>
                    <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formState.terms}
                    onChange={inputChange}
                    />
                    {error.terms.length > 0 ? <p className = "error">{error.terms}</p> : null}
                    <br/>
                    <button type="submit">Submit</button>
                </div>
                
            
        </form>
    )
}