import React from "react";
import { UserContext } from "../context/UserContext.jsx";

const Login = () => {

    const { setUser } = React.useContext(UserContext);
  const [formData, setFormData] = React.useState({
    name: "",
    password: "",
  });
  
  const handleFormData = (e) => {
    const {name,value} = e.target;
    console.log("value", value);
    setFormData({...formData, [name]: value});
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    console.log("Login submitted", formData);
  };
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" name= "name" value={formData.name} onChange={handleFormData} placeholder="Username" />
      <input type="password" name= "password" value={formData.password} onChange={handleFormData} placeholder="Password" />
      <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
