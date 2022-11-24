import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState, useEffect, useRef} from "react";

// Change variable names. or make sign up a function component
const Manager_pages = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [userFname, setUserFname] = useState('');
    const [userLname, setUserLname] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPN, setUserPN] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userST, setUserST] = useState('');
    const [userHome, setUserHome] = useState('');
    const [userZip, setuserZip] = useState('');


    const [userdata, setUserdata] = useState({
        "data": "NONE"})

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(username);
    }, [username])

    useEffect(() => {
        setValidPwd(pwd);
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [username, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        const signUpData = {"data":formData};
        console.log(signUpData)

        try {
            const response = await axios.request({
                data:signUpData,
                headers: {
                'Content-Type': 'application/json',
                },
                method: 'POST',
                url:"http://127.0.0.1:5000/sign_up",

            })
            .then((response) => {
                setUserdata(response.data)
                console.log(userdata.data)
                if (userdata.status_code === 200) {
                    setSuccess(true);
                }

            }).catch((error) => {
                if (error.response) {
                alert(error.response)
                }
            })
            
        } catch (err) {
            console.log(err)
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        add redirect
                    </p>
                </section>
            ) : (
                <section>
            
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-400">
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <div>
                        <h3 className="text-center  font-medium p-2 md:p-4 text-black">
                            Sign Up
                        </h3>
                    </div>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 undefined">
                            First Name: 
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="firstname"
                                name='First_Name'
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setUserFname(e.target.value)}
                                value={userFname}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 undefined">
                            Last Name: 
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="lastname"
                                name="Last_Name"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setUserLname(e.target.value)}
                                value={userLname}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="email"
                                name="Email"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setUserEmail(e.target.value)}
                                value={userEmail}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="pnum" className="block text-sm font-medium text-gray-700 undefined">
                            Phone Number
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="pnum"
                                name="Phone_Number"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setUserPN(e.target.value)}
                                value={userPN}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="sex" className="block text-sm font-medium text-gray-700 undefined">
                            Sex
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="sex"
                                name="Sex"
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="City" className="block text-sm font-medium text-gray-700 undefined">
                            City
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="City"
                                name="City"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setUserCity(e.target.value)}
                                value={userCity}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="State" className="block text-sm font-medium text-gray-700 undefined">
                            State
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="State"
                                name="State"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setUserST(e.target.value)}
                                value={userST}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="home" className="block text-sm font-medium text-gray-700 undefined">
                            Home Address
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="home"
                                autoComplete = "off"
                                name="Street_Address"
                                ref={userRef}
                                onChange={(e) => setUserHome(e.target.value)}
                                value={userHome}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 undefined">
                            Zipcode
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="Zipcode"
                                name="Zipcode"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setuserZip(e.target.value)}
                                value={userZip}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 undefined">
                        Username:
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            id="username"
                            name="Username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 undefined">
                        Password:
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="password"
                            id="password"
                            name="Password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <label htmlFor="confirm_pwd" className="block text-sm font-medium text-gray-700 undefined">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />

                        <button
                            disabled={!validMatch ? true : false}
                            type="submit"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                        >
                            Register Employee
                        </button>
                </form>
                </div>
                </div>
                </section>
            )}
        </>
    )
}
export default Manager_pages;