import React, { useState } from "react";
import customAxios from "../services/axiosCall";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSubmit = (e) => {
  try {
    e.preventDefault();
    const api = customAxios();
    api
      .post('/user/user-login', {
        userName,
        password
      },{withCredentials: true})
      .then((response) => {
        if (response.data.success) {
          navigate("/home");
        }
    })
  } catch(error){
    console.log(error.message);
  }
}

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>    
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="userName"
                      name="userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Login
                    </button>
                  </div>
                  <div className="relative text-center">
                    <p>New user ? </p>
                    <Link to='/register'
                      type="submit"
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >                  
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


