import { Card } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  console.log(error);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{error.message}</Card.Title>
          <Card.Text>Error Type: {status}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Error;
