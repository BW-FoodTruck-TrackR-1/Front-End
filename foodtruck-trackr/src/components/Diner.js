<<<<<<< HEAD
// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import * as yup from 'yup';
// import { axiosWithAuth } from '../utils/AxiosWithAuth'
// import { useHistory } from 'react-router-dom'

// const formSchema = yup.object().shape({
//    name: yup.string().required("Please enter your full name"), 
//    username: yup.string().required("Please enter a unique username"),
//    password: yup.string().required("Please enter password"),
//    email: yup.string().email("must be a valid email").required("Please enter a email"),
//    location:yup.string().required("Please enter your address"),
//    terms:yup.boolean().oneOf([false], "Please agree to terms"),
//    favoritetrucks:yup.array()
// })


// export default function Diner(props){

//     const history = useHistory()
// const [formTate, setFormTate]=useState({
//     // name:"",
//     username:"",
//     password:"",
//     // email:"",
//     location:"",
//     // favoritetrucks: [],
//     // terms: false
// })
// const [error, seterror] = useState({
//     name:"",
//     username:"",
//     password:"",
//     email:"",
//     location:"",
//     terms: "",
//     favoritetrucks: []
// })

// /* const [buttonDisabled, setButtonDisabled] = useState(true);
  
//   useEffect(() => {
//     formSchema.isValid(formTate).then(valid => {
//       setButtonDisabled(!valid);
//     });
//   }, [formTate]);

// */
// const validate =(e) => { 
//     yup
//       .reach(formSchema, e.target.name)
//       .validate(e.target.value)
//       .then(valid =>{
//         seterror({
//             ...error,
//             [e.target.name]: ""
//         });
//       })
//       .catch(err =>{
//           console.log(err.errors)
//           seterror({
//               ...error,
//               [e.target.name]: err.errors[0]
//           })
//       })

// }

// const inputChange = e =>{

//     e.persist()
//     console.log("Input changed!", e.target.value, e.target.checked);
//    validate(e);
//     let value=e.target.type === "checkbox" ? e.target.checked : e.target.value
//     setFormTate({...formTate, [e.target.name]:value});
// }

// const handleSubmit = (e) => {
//     e.preventDefault()
//     //axiosWithAuth call
//     axiosWithAuth()
//     //posting our register data to the register api
//       .post(`https://food-truck-back-end.herokuapp.com/diners/`, formTate)
//       .then((res) => {
//         //setting the token so were authorized to access content
//         // localStorage.setItem('token', (res.data.payload))
//         //sets the form blank again
//         setFormTate({
//             // name:"",
//             username:"",
//             password:"",
//             // email:"",
//             // terms: false,
//             location:''
//         })
//         console.log(res.data)
//         //pushes us to the /operatorDashboard
//         history.push('/diner-dashboard')

//       })
//       .catch(err => console.log(err)) 


//   }

// console.log(props)
//     return (
//             <form onSubmit={handleSubmit}> 
//             <h2>Diners registration</h2>
//             {/* <label htmlFor="name">Full Name </label>
//                 <div className="form-group">
//                     <input 
//                     type="text"
//                     name="name"
//                     value={formTate.name}
//                     onChange={inputChange}
//                     />
//                     {error.name.length > 0 ? <p className = "error">{error.name}</p> : null}
//                 </div>
//             <label htmlFor="email">Enter your Email </label>

//                 <div className="form-group">
//                     <input
//                     type="text"
//                     name="email"
//                     value={formTate.email}
//                     onChange={inputChange}
//                     />
//                     {error.email.length > 0 ? <p className = "error">{error.email}</p> : null}
//                 </div> */}
//             <label htmlFor="username">Please enter a username</label>  
//                 <div className="form-group">
//                     <input
//                     type="text"
//                     name="username"
//                     value={formTate.username}
//                     onChange={inputChange}
//                     />
//                     {error.username.length > 0 ? <p className = "error">{error.username}</p> : null}
//                 </div>              

//             <label htmlFor="password">Please enter a password </label>

//                 <div className="form-group">
//                     <input
//                     type="text"
//                     name="password"
//                     value={formTate.password}
//                     onChange={inputChange}
//                     />
//                     {error.password.length > 0 ? <p className = "error">{error.password}</p> : null}
//                 </div>
                
//             <label htmlFor="location">Enter your current address</label>
//                 <div className="form-group">
//                     <input 
//                     type="text"
//                     name="location"
//                     value={formTate.location}
//                     onChange={inputChange}/>
//                     {error.location.length > 0 ? <p className = "error">{error.location}</p> : null}
//                 </div>

//                 <div className="form-group">
//                 {/* <label htmlFor="terms">Terms & Conditions</label>
//                     <input
//                     type="checkbox"
//                     name="terms"
                    
//                     value={formTate.terms}
//                     onChange={inputChange}
//                     />
//                     {error.terms.length > 0 ? <p className = "error">{error.terms}</p> : null}
//                     <br/> */}
//                 <button type="submit" >Submit</button>
//                 </div>
                
            
//         </form>
//     )
// }
=======
>>>>>>> 9ff00cd013900d7960ad2886547c19b400ffbd5f
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import {H2, Container, Label, Form, Input, Button} from "./Styles.js";


const formSchema = yup.object().shape({
    name: yup.string().required("Please enter your full name"),
    username: yup.string().required("Please enter a unique username"),
    password: yup.string().required("Please enter password")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    email: yup.string().email("must be a valid email").required("Please enter a email"),
    location: yup.string().required("Please enter your address"),
    terms: yup.boolean().oneOf([true], "Please agree to terms"),
    favoritetrucks: yup.array()
})


export default function Diner(props) {
    const [formState, setFormTate] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        location: "",
        favoritetrucks: [],
        terms: false
    })
    const [errorState, setErrorState] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        location: "",
        terms: "",
        favoritetrucks: []
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            
            setButtonDisabled(!valid);
            
        }).catch(err => {
            console.log('err', err)
        })
    }, [formState]);


    const validate = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                console.log(err.errors)
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                })
            })

    }

    const inputChange = e => {

        e.persist()
        console.log("Input changed!", e.target.value, e.target.checked);
        validate(e);
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormTate({ ...formState, [e.target.name]: value });
        console.log(e.target.checked, 'we hit the checkbox')
    }
    const handleSubmit = (e) => {
          e.preventDefault()
          props.formSubmit(formState)
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Container>
            <H2>Diners registration</H2>
            </Container>

            <Container>
            <Label htmlFor="name">Full Name </Label>
            <div className="form-group">
                <Input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errorState.name.length > 0 ? (<p className="error">{errorState.name}</p>) : null}
            </div>
            </Container>

            <Container>
            <Label htmlFor="email">Enter your Email </Label>
            <div className="form-group">
                <Input
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={inputChange}
                />
                {errorState.email.length > 0 ? (<p className="error">{errorState.email}</p>) : null}
            </div>
            </Container>

            <Container>
            <Label htmlFor="username">Please enter a username</Label>
            <div className="form-group">
                <Input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={inputChange}
                />
                {errorState.username.length > 0 ? (<p className="error">{errorState.username}</p>) : null}
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
                {errorState.password.length > 0 ? (<p className="error">{errorState.password}</p>) : null}
            </div>
            </Container>

            <Container>
            <Label htmlFor="location">Enter your current address</Label>
            <div className="form-group">
                <Input
                    type="text"
                    name="location"
                    value={formState.location}
                    onChange={inputChange} />
                {errorState.location.length > 0 ? (<p className="error">{errorState.location}</p>) : null}
            </div>
            </Container>
            <Container>
            <div className="form-group">
                <Label htmlFor="terms">Terms & Conditions</Label>
                <Input
                    type="checkbox"
                    name="terms"

                    value={formState.terms}
                    onChange={inputChange}
                />
                {errorState.terms.length > 0 ? (<p className="error">{errorState.terms}</p>) : null}
                <br />
                <Button type="submit" disabled={buttonDisabled} >Submit</Button>
            </div>
            </Container>

        </Form>
    )
}


