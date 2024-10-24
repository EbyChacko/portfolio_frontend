import { Col } from "react-bootstrap";

export const EducationCard = ({ cource, duration, institute, grade }) => {
  return (
    <Col size={12} xl={5} className="Education-card m-4 mx-auto">
        <div className="">
          <h4>{cource}</h4>
          <span>{duration}</span>
          <h5>{institute}</h5>
          <p>Grade : {grade}</p>
        </div>
    </Col>
  )
}