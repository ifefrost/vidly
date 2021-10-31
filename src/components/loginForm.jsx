import { useState } from "react/cjs/react.development";
import Input from "./common/input";

const LoginForm = () => {
  const [account, setAccount] = useState({ username: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    const acc = { ...account };
    acc[input.name] = input.value;
    setAccount(acc);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //action for the submit button to do
    console.log("Submitted");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='username'
          value={account.username}
          label='Username'
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          value={account.password}
          label='Password'
          onChange={handleChange}
        />
        
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
