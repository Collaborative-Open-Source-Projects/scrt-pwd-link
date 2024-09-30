"use client";
import "./toggleThemeSwitch.css";
import {useState, useEffect} from "react";

function ToggleThemeSwitch(){
	const [isDarkMode, setIsDarkMode] = useState(false);

	//set isDarkMode to true if isDarkMode is true on localStorage
	useEffect(() => {
		const darkModeSetting = localStorage.getItem("isDarkMode");

		if(darkModeSetting === "true" || darkModeSetting === true){
			setIsDarkMode(true);
		}
	}, []);

	//add or remove dark-theme class to enable or disable dark-theme
	useEffect(() => {
		if(isDarkMode){
			document.documentElement.classList.add("dark-theme");
		}
		else{
			document.documentElement.classList.remove("dark-theme");
		}
	}, [isDarkMode]);

	//enable or desable darkMode
	function toggle(){
		const newDarkmodeValue = !isDarkMode;

		setIsDarkMode(newDarkmodeValue);
		localStorage.setItem("isDarkMode", newDarkmodeValue);
	}

	return(
		<div className={`toggle-theme-switch ${isDarkMode ? 'dark-theme' : null }`} onClick={toggle}>
		</div>
	);
}


export default ToggleThemeSwitch;
