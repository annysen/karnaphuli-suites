import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, googleLogin } = useContext(AuthContext);

  // google provider
  const googleProvider = new GoogleAuthProvider();

  // registration with form
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.user.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      setError("Please Enter 8 char");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please Enter a capital char");
      return;
    }
    setError("");
    setSuccess("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Congratulation! You create a account");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // reg with google
  const handleGoogle = () => {
    googleLogin(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div>
        <h3 className="text-center fw-bold">Please Register!!!</h3>
        <Container className="mx-auto  w-50">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                type="text"
                name="user"
                required
                className="form-control "
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                required
                className="form-control "
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                required
                className="form-control "
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>

            <br />
            {error && <small className="text-danger">{error}</small>}
            {success && <small className="text-success">{success}</small>}

            <div className="mt-3 mx-auto">
              <button
                onClick={handleGoogle}
                type="button"
                className="btn btn-outline-primary w-100"
              >
                Register with Google
              </button>
            </div>
            <div className="mt-3">
              <p>
                already have account? Please <Link to="/login">login</Link>
              </p>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Register;
