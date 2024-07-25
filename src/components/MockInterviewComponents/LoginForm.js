import React, { useState } from 'react';

const LoginForm = () => {
    const initialValue = {
        email: "",
        password: "",
        isLoginDisabled: true,
        error: "",
        loading: false
    }
    const [state, setState] = useState(initialValue)
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the specific attribute in the state object
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLoginClick = () => {
        try {
            await(login( ))
        } catch(error) {

        }
    }
    return (
        <div>
            <label>Email</label>
            <input
                name="email"
                type='email'
                id='email'
                value={state.email}
                onChange={handleChange}
            />

            <label>Passowrd</label>
            <input
                name="password"
                type='password'
                id='password'
                value={state.password}
                onChange={handleChange}
            />

            <button disabled={state.isLoginDisabled} onClick={handleLoginClick}>Login</button>
        </div>
    )
}

export default LoginForm;