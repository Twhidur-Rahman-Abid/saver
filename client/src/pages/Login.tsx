import { useEffect, useState } from "react";
import Form from "../components/form/Form";
import Input from "../components/form/Input";

import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../features/auth/authApi";
import Button from "../components/button/Button";
import Error from "../components/ui/Error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser({
      email,
      password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");

      setEmail("");
      setPassword("");
    }
    if (isError) {
      setError(true);
    }
  }, [isSuccess, isError, navigate]);

  return (
    <>
      <Form title="Login into your account" handleSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          placeholder="******"
        />

        <Button
          type="submit"
          buttontext={isLoading ? "login..." : "login"}
          classes=" w-full"
          isLoading={isLoading}
        />

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Are you new user?
          <Link
            to="/registation"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Register
          </Link>
        </p>

        {error && <Error onClick={() => setError(false)} />}
      </Form>
    </>
  );
};

export default Login;
