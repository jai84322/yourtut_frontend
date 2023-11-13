// import React from "react";
// import { Link, useNavigate } from "react-router-dom"
// import { useState } from "react";
// import axios from "axios";
// import styles from "./styles.module.css";

// function Login() {

//     let navigate = useNavigate();



import { React, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
        // let navigate = useNavigate();

        const handleChange = function (event) {
        let fieldValue = event.target.value
        let fieldName = event.target.name
        setData({
            ...data, 
            [fieldName] : fieldValue
        })
    }


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://tourists-solutions-backend.up.railway.app/loginUser";
			await axios.post(url, data);
			window.alert("you are logged in")
			// navigate('/main')

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
		window.location.href = "/main";
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Login
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn} style={{ color: 'black' }}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
