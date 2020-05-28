import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import * as yup from 'yup';
import { useHistory } from 'react-router-dom'

const formSchema = yup.object().shape({
    location: yup.string().required("Please enter your location"), 
    name: yup.string().required("Please enter your full name"), 
    username: yup.string().required("Please enter a unique username"),
    password: yup.string().required("Please enter password"),
    email: yup.string().email("must be a valid email").required("Please enter a email"),
    terms:yup.boolean().oneOf([false], "Please agree to terms"),
    trucksOwned:yup.array()
 })


export default function Operator(props){
    const history =  useHistory()
const [formState, setFormState]=useState({
    // name:"",
    username:"",
    password:"",
    // email:"",
    // trucksOwned:[],
    // terms:false,
    // location:'',
    // id:Date.now()

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

const handleSubmit = (e) => {
    e.preventDefault()
    //axiosWithAuth call
    axiosWithAuth()
    //posting our register data to the register api
      .post(`https://food-truck-back-end.herokuapp.com/operators/`, formState)
      .then((res) => {
        //setting the token so were authorized to access content
        // localStorage.setItem('token', (res.data.payload))
        //sets the form blank again
        setFormState({
            // name:"",
            username:"",
            password:"",
            // email:"",
            // terms: false,
            // location:''
        })
        console.log(res.data)
        //pushes us to the /operatorDashboard
        history.push('/operator-dashboard')

      })
      .catch(err => console.log(err)) 


  }

//   const handleSubmitTest = (e) => {
//     e.preventDefault()

//     axiosWithAuth()

//       .get(`https://food-truck-back-end.herokuapp.com/operators/1`)
//       .then((res) => console.log(res))
//       .catch(err => console.log(err)) 


//   }

  

    return (
        <form onSubmit={handleSubmit}> 
            <h2>Operator registration</h2>
            {/* <label htmlFor="name">Full Name </label>
                <div className="form-group">
                    <input 
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                    />
                    {error.name.length > 0 ? <p className = "error">{error.name}</p> : null}
                </div> */}
            {/* <label htmlFor="email">Enter your Email </label>

                <div className="form-group">
                    <input
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={inputChange}
                    />
                    {error.email.length > 0 ? <p className = "error">{error.email}</p> : null}
                </div> */}
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

                {/* <label htmlFor="location">Please enter a location </label>
                <div className="form-group">
                <input
                    type="text"
                    name="location"
                    value={formState.location}
                    onChange={inputChange}
                    />
                </div> */}

                {/* <label htmlFor="terms">Terms & Conditions</label>
                    <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value={formState.terms}
                    onChange={inputChange}
                    />
                    {error.terms.length > 0 ? <p className = "error">{error.terms}</p> : null}
                    <br/> */}
                    <button type="submit">Submit</button>

                
            
        </form>
    )
}