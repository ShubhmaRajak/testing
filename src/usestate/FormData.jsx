import React from "react";

const FormData = () => {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  // const handleName = (e) => {
  //     console.log("value", e.target.value);
  //     setName(e.target.value);
  // };
  // const handleEmail = (e) =>{
  //     console.log("value", e.target.value);
  //     setEmail(e.target.value);
  // }

  // const handlePassword = (e) => {
  //     console.log("value", e.target.value);
  //     setPassword(e.target.value);
  // }

  const handleFormData = (e) => {
    const { name, value } = e.target;
    console.log("value", value);
    setFormData({...formData, [name]: value});
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    };
  
  return (
    <div>
      <h1>Form Data Example</h1>
      <div>
        <label>
          Name :
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleFormData}
          />
        </label>

        <label>
          email:
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleFormData}
          />
        </label>
        <label>
          Password :
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleFormData}
          />
        </label>

        <hr/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FormData;
