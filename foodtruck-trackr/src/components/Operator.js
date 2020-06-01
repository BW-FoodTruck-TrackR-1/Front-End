import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import {H2, Container, Label, Form, Input, Button} from "./Styles.js";
const formSchema = yup.object().shape({
    name: yup.string().required("Please enter your full name"), 
    username: yup.string().required("Please enter a unique username"),
    password: yup.string().required("Please enter password")
                          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    email: yup.string().email("must be a valid email").required("Please enter a email"),
    terms:yup.boolean().oneOf([true], "Please agree to terms"),
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
const [errorState, setErrorState] = useState({
    name:"",
    username:"",
    password:"",
    email:"",
    terms: "",
    trucksOwned: []
})

const [buttonDisabled, setButtonDisabled] = useState(true);


  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

const validate =(e) => { 
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid =>{
        setErrorState({
            ...errorState,
            [e.target.name]: ""
        });
      })
      .catch(err =>{
          console.log(err.errors)
          setErrorState({
              ...errorState,
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
      .post(`operators/auth/register`, formState)
      .then((res) => {
        //setting the token so were authorized to access content
        localStorage.setItem('token', (res.data.payload))
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
        <Form onSubmit={handleSubmit}> 
            <Container>
            <H2>Operator registration</H2>
            </Container>
            {/*
            <Container>
            <Label htmlFor="name">Full Name </Label>
                <div className="form-group">
                    <Input 
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                    />
                    {errorState.name.length > 0 ? (<p className = "error">{errorState.name}</p>) : null}
                </div>
                </Container> */}
            {/* 
                <Container>
                <Label htmlFor="email">Enter your Email </Label>
                <div className="form-group">
                    <Input
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={inputChange}
                    />
                    {errorState.email.length > 0 ? (<p className = "error">{errorState.email}</p>) : null}
                </div> 
                </Container>
                */}
                <Container>
            <Label htmlFor="username">Please enter a username</Label>  
                <div className="form-group">
                    <Input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={inputChange}
                    />
                     {errorState.username.length > 0 ? (<p className = "error">{errorState.username}</p>) : null}
                </div>  
                </Container>            
                <Container>
                <Label htmlFor="password">Please enter a password </Label>
                <div className="form-group">
                    <Input
                    type="text"
                    name="password"
                    value={formState.password}
                    onChange={inputChange}
                    />
                    {errorState.password.length > 0 ? (<p className = "error">{errorState.password}</p>) : null}
                </div>
                </Container>
                {/*
                <Container>
                <Label htmlFor="location">Please enter a location </Label>
                <div className="form-group">
                <Input
                    type="text"
                    name="location"
                    value={formState.location}
                    onChange={inputChange}
                    />
                </div> 
                </Container */}

                {/*
                <Container> 
                <Label htmlFor="terms">Terms & Conditions</Label>
                    <Input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value={formState.terms}
                    onChange={inputChange}
                    />
                    {errorState.terms.length > 0 ? (<p className = "error">{errorState.terms}</p>) : null}
                    <br/> 
                    </Container>
                    */}
                   {/* <Button type="submit" disabled={buttonDisabled}>Submit</Button> */}
                    <Button type="submit">Submit</Button>
                
            
        </Form>
    )
}