import { Col } from "react-bootstrap";

export const EducationCard = ({ cource, duration, institute, grade }) => {
  return (
    <Col size={12} md={6} className="Education-card">
        <div className="">
            <div className="">
            <h4>{cource}</h4>
            <span>{duration}</span>
            <h4>{institute}</h4>
            <h5>{grade}</h5>
            </div>
        </div>

    </Col>
  )
}