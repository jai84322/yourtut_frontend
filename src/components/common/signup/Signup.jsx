// import React from "react";
// import { useNavigate } from "react-router-dom"

// function Login() {
//     let navigate = useNavigate();


//     return (

//         <div>
//             <input type="text" placeholder="fname" />
//             <input type="text" placeholder="lname" />
//             <input type="text" placeholder="gender" />
//             <input type="text" placeholder="email" />
//             <input type="text" placeholder="phone" />
//             <input type="text" placeholder="password" />
//             <button onClick={() => {navigate('/login')}}> Signup = go to login again and login there </button>
//         </div>
//     )
// }


// export default Login;


// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

// const Signup = () => {
// 	const [data, setData] = useState({
// 		fname: "",
// 		lname: "",
// 		gender: "",
// 		phone: "",
// 		email: "",
// 		password: "",
// 	});
	
// 	const [error, setError] = useState("");
// 	const navigate = useNavigate();

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:5000/createUser";
// 			const { data: res } = await axios.post(url, data);
// 			navigate("/login");
// 			console.log(res.message);
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<div className={styles.signup_container}>
// 			<div className={styles.signup_form_container}>
// 				<div className={styles.left}>
// 					<h1>Welcome Back</h1>
// 					<Link to="/login">
// 						<button type="button" className={styles.white_btn}>
// 							Sign in
// 						</button>
// 					</Link>
// 				</div>
// 				<div className={styles.right}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Create Account</h1>
// 						<input
// 							type="text"
// 							placeholder="First Name"
// 							name="fname"
// 							onChange={handleChange}
// 							value={data.fname}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Last Name"
// 							name="lname"
// 							onChange={handleChange}
// 							value={data.lname}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Gender"
// 							name="gender"
// 							onChange={handleChange}
// 							value={data.gender}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="phone"
// 							placeholder="Phone"
// 							name="phone"
// 							onChange={handleChange}
// 							value={data.phone}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sign Up
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };




import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
	const [data, setData] = useState({
		fname: "",
		lname: "",
		gender: "",
		phone: "",
		email: "",
		password: "",
	});
	
	const [error, setError] = useState("");
	// const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://tourists-solutions-backend.up.railway.app/createUser";
			const { data: res } = await axios.post(url, data);
			// navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
		window.location.href = "/login";
	};

	return (
		<div className= "signup_container" >
			<div className="signup_form_container">
				<div className={"left"}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={"white_btn"} style={{ color: 'black' }}>
							Login
						</button>
					</Link>
				</div>
				<div className={  "right"}>
					<form className={  "form_container"} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="fname"
							onChange={handleChange}
							value={data.fname}
							required
							className={  "input"}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lname"
							onChange={handleChange}
							value={data.lname}
							required
							className={  "input"}
						/>
						<input
							type="text"
							placeholder="Gender"
							name="gender"
							onChange={handleChange}
							value={data.gender}
							required
							className={  "input"}
						/>
						<input
							type="phone"
							placeholder="Phone"
							name="phone"
							onChange={handleChange}
							value={data.phone}
							required
							className={  "input"}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={  "input"}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={  "input"}
						/>
						{error && <div className={  "error_msg"}>{error}</div>}
						<button type="submit" className={  "green_btn"} >
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};








export default Signup;
