import { useContext, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const emailRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathName || "/";

  // get context
  const { login, resetPassword } = useContext(AuthContext);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // reset password
  const handleResetPass = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please Enter Email");
      return;
    }
    resetPassword(email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        setError(error.message);
      });

    console.log("clicked");
  };
  return (
    <div>
      <h3 className="text-center fw-bold">Please Login</h3>
      <Container className="mx-auto  w-50">
        <form onSubmit={handleSubmitForm}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              required
              className="form-control "
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              required
              className="form-control "
            />
            <small
              onClick={() => setShow(!show)}
              className="btn btn-sm border mt-2"
            >
              {show ? <small>Hide</small> : <small>Show</small>}
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <button onClick={handleResetPass} className="btn ms-2">
            Forget password?
          </button>

          <br />
          {success && <span>{success}</span>}
          {error && <span>{error}</span>}

          <div className="mt-3">
            <p>
              new in Karnaphuli Suites? Please{" "}
              <Link to="/signUp">register</Link>
            </p>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
