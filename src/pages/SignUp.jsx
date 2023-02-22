import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  const { user, signUp } = UserAuth();

  const handleSubmit = async (e) => {
e.preventDefault()
try {
await signUp(email, password)
navigate('/')
}
catch(error){
    //console.log(error)
    alert(error)
}
  }
 const [loading, setLoading] = useState(false);

 useEffect(() => {
   setLoading(true);
   setTimeout(() => {
     setLoading(false);
   }, 400);
 }, []);
  
  return (
    <>
      {loading ? (
        <ClipLoader
          color={"#DC2626"}
          loading={loading}
          size={30}
          className="my-[25vh] mx-[50vw]"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="w-full h-screen">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/2a5c0b10-bcff-4555-8c6b-f4b46657636c/NG-en-20230213-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="backdrop"
            className="hidden sm:block absolute w-full object-cover"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-4"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rounded"
                  />
                  <input
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button className="bg-red-600 py-3 my-6 rounded font-bold">
                    Sign Up
                  </button>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <p>
                      <input className="mr-2" type="checkbox" />
                      Remember me
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <p className="py-8">
                    <span className="text-gray-600 mr-2">
                      Already subscribed to Netflix?
                    </span>
                    <Link to="/signin">Sign In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
