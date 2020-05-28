import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

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
    //console.log(props)
    return (
        <form onSubmit={handleSubmit}>
            <h2>Diners registration</h2>
            <label htmlFor="name">Full Name </label>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errorState.name.length > 0 ? (<p className="error">{errorState.name}</p>) : null}
            </div>
            <label htmlFor="email">Enter your Email </label>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={inputChange}
                />
                {errorState.email.length > 0 ? (<p className="error">{errorState.email}</p>) : null}
            </div>
            <label htmlFor="username">Please enter a username</label>
            <div className="form-group">
                <input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={inputChange}
                />
                {errorState.username.length > 0 ? (<p className="error">{errorState.username}</p>) : null}
            </div>

            <label htmlFor="password">Please enter a password </label>

            <div className="form-group">
                <input
                    type="text"
                    name="password"
                    value={formState.password}
                    onChange={inputChange}
                />
                {errorState.password.length > 0 ? (<p className="error">{errorState.password}</p>) : null}
            </div>

            <label htmlFor="location">Enter your current address</label>
            <div className="form-group">
                <input
                    type="text"
                    name="location"
                    value={formState.location}
                    onChange={inputChange} />
                {errorState.location.length > 0 ? (<p className="error">{errorState.location}</p>) : null}
            </div>

            <div className="form-group">
                <label htmlFor="terms">Terms & Conditions</label>
                <input
                    type="checkbox"
                    name="terms"

                    value={formState.terms}
                    onChange={inputChange}
                />
                {errorState.terms.length > 0 ? (<p className="error">{errorState.terms}</p>) : null}
                <br />
                <button type="submit" disabled={buttonDisabled} >Submit</button>
            </div>


        </form>
    )
}


