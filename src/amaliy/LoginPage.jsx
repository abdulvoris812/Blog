import React from "react";
import LoginPageImg from "./img/Side-Background-Outer.png";
import DL from "./img/dark-light.png"
import "./style/style.css";
import { useState, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

const LoginPage = () => {
  const [btn, setBtn] = useState(true)
	let handleDl = () => {
		setBtn(!btn)
	}

	let navigate = useNavigate();
	const heandleGo = () => {
		navigate("/homepage/all");
	};

	let login = "admin";
	let password = 1234;
	let inputElement = useRef();
	let inputElement2 = useRef();

	const [value, setValue] = useState("");
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const [value2, setValue2] = useState("");
	const handleChange2 = (e) => {
		setValue2(e.target.value);
	};

	const inputFocus = () => {
		console.log(inputElement.current.value);
		if (login == value && password == value2) {
			heandleGo();
		} else if (value == login) {
			inputElement2.current.focus();
			alert("Parol noto'g'ri❌");
		} else if (value2 == password) {
			inputElement.current.focus();
			alert("Login noto'g'ri❌");
		} else {
			inputElement.current.focus();
			alert("Login ham parol ham noto'g'ri❌");
		}
	};
	return (
		<React.Fragment>
			<div className={btn ? "hero" : "hero dark-light-active"}>
				<div className='container'>
					<div className='hero-inner'>
						<img src={LoginPageImg} className='img' />
						<div className='hero-box'>
							<button className={btn ? "dark-light-btn" : "dark-light-btn dark-light-active"} onClick={handleDl}>
								<img src={DL} alt="Dark light" />
							</button>
							<h1 className={btn ? "title" : "title dark-light-active"}>Hush Kelibsiz</h1>
							<p className='text'>Tezroq tizimga kiramiz</p>
							<input
								type='text'
								ref={inputElement}
								onChange={handleChange}
								placeholder='Login: admin'
								className={btn ? "input" : "input dark-light-active"} 
							/>{" "}
							<br />
							<br />
							<input
								type='password'
								ref={inputElement2}
								onChange={handleChange2}
								placeholder='Parol: 1234'
								className={btn ? "input" : "input dark-light-active"} 
							/>{" "}
							<br />
							<br />
							<button className='btn' onClick={inputFocus}>
								LOGIN
							</button>
						</div>
					</div>
				</div>
			</div>

			<Routes>
				<Route path='/homepage' element={<HomePage />} />
			</Routes>
		</React.Fragment>
	);
};

export default LoginPage;
