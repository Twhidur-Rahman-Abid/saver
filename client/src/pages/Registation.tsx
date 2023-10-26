import { useEffect, useState } from "react";
import Form from "../components/form/Form";
import Input from "../components/form/Input";

import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../features/auth/authApi";
import Button from "../components/button/Button";
import Error from "../components/ui/Error";

const Registation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [registerUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUser({
      name,
      email,
      password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");

      setName("");
      setEmail("");
      setPassword("");
    }
    if (isError) {
      setError(true);
    }
  }, [isSuccess, isError, navigate]);

  return (
    <>
      <Form title="Create a new account" handleSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          name="email"
          value={name}
          handleChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
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
          buttontext={isLoading ? "Registering..." : "Register"}
          classes=" w-full"
          isLoading={isLoading}
        />

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Have you an account?
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login
          </Link>
        </p>

        {error && <Error onClick={() => setError(false)} />}
      </Form>
    </>
  );
};

export default Registation;
