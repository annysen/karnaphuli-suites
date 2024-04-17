import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h3 className="text-center fw-bold">Please Login</h3>
      <Container className="mx-auto  w-50">
        <form>
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
            Login
          </button>
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
