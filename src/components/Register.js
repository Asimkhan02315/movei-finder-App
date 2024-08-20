import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

 const Register = () => {

   const Navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
axios.post('http://localhost:5000/users', {
    "email": data.email,
    "password": data.password,
}).then((res) => {
    console.log(res);
    Navigate('/Login')
})
  };
  
  return (
<div className="container">
<h1>Register Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <label>Email:</label>
    <div className="form-group">
      <input type='email' placeholder="Enter the email..."
        {...register("email", { required: "Email is required" })} 
        aria-invalid={errors.email ? "true" : "false"} 
      />
      {errors.email && <p role="alert">{errors.email?.message}</p>}
      </div><br />

<label>Password:</label>
<div className="form-group">
      <input type='password' placeholder="Enter the password..."
        {...register("password", { required: true })} 
        aria-invalid={errors.password ? "true" : "false"} 
      />
      {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
</div><br />

      <input type="submit" value='Register' className="btn btn-dark"/>
    </form>
    </div>
  );
}
export default Register