import React, { useLayoutEffect, useState } from "react";
import bg from "../../assets/images/bg-image.svg";
import useAuth from "../../hooks/useAuth";
import useSetRequest from "../../hooks/useSetRequest";

const Login = () => {
  // create a state that will send the uesrname and password to the API
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  
  // custom-hooks
  const { onSubmit, loading } = useAuth(loginData);
  // setRequest coming from our useSetRequest hooks
  const { setRequest } = useSetRequest(setLoginData);

  useLayoutEffect(() => {
    document.title = "Login | BEND DOWN SELECT"
    if (sessionStorage.getItem("token")) {
      window.location.href = "/home/dashboard"
    }
  }, [])

  // create an array that holds different input information
  const data = [
    {
      label: "Username",
      type: "text",
      value: loginData.username,
      name: "username"
    },
    {
      label: "Password",
      type: "password",
      value: loginData.password,
      name: "password"
    }
  ];

  return (
    <div className="h-[100svh] grid grid-cols-2">
      <section className="flex items-center justify-center">
        <img src={bg} alt="" />
      </section>
      <section className="flex items-center justify-center">
        <form onSubmit={onSubmit} className="w-1/2 grid gap-5">
          {/* map the data array created at the top to have your jsx element inside */}
          {data.map((item, index) => (
            <div key={index} className="grid gap-2">
              <label htmlFor="" className="font-semibold">
                {item.label}
              </label>
              <input
                type={item.type}
                value={item.value}
                onChange={(e) => setRequest(e.target.value, item.name)}
                className="outline-none border-2 rounded-md px-5 border-[#380C65]"
              />
            </div>
          ))}
          <div>
            <button
              type="submit"
              className="w-full bg-[#380C65] shadow-md hover:scale-90 hover:transition-all text-white font-semibold rounded-md py-1 px-5"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
