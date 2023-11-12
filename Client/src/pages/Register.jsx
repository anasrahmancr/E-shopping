import React, { useEffect, useState } from "react";
import customAxios from "../services/axiosCall";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [categories, setCategories] = useState([]);
  const [preferredCategory, setPreferredCategory] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const api = customAxios();
    api.get("/products/distinctCategories").then((response) => {
      if (Array.isArray(response.data.categories)) {
        setCategories(response.data.categories);
        console.log("respnse=>", response.data.categories);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const api = customAxios();
      api
        .post("/user/user-register", {
          userName,
          password,
          customerName,
          preferredCategory,
          gender,
        },{withCredentials: true})
        .then((response) => {
          if (response.data.success) {
            navigate("/home");
          }
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Register</h1>
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
                      required
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
                      id="customerName"
                      name="customerName"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      type="text"
                      required
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="customerName"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Customer Name
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
                      required
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

                  <div className="relative">
                    <select
                      id="preferredCategory"
                      name="preferredCategory"
                      value={preferredCategory}
                      onChange={(e) => setPreferredCategory(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 text-sm focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select Preferred Category</option>
                      {categories.length > 0 &&
                        categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="relative">
                    <select
                      id="gender"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-600 text-sm focus:outline-none focus:border-rose-600"
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="relative text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Register
                    </button>
                  </div>
                  <div className="relative text-center">
                    <p>Already Registered ? </p>
                    <Link
                      to="/"
                      type="submit"
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Login
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

export default Register;
