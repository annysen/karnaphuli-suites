import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div>
        <h3 className="text-center fw-bold">Please Register!!!</h3>
        <Container className="mx-auto  w-50">
          <form>
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
            <div className="mt-3 mx-auto">
              <button type="button" className="btn btn-outline-primary w-100">
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
