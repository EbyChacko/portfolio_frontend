import 'react-multi-carousel/lib/styles.css';
import python_logo from "../assets/img/logos/python_logo.webp"
import django_logo from "../assets/img/logos/django_logo.webp"
import javaSript_logo from "../assets/img/logos/JavaScript_logo.webp"
import bootstrap_logo from "../assets/img/logos/bootstrap_logo.webp"
import sql_logo from "../assets/img/logos/sql_logo.webp"
import html_logo from "../assets/img/logos/html_logo.webp"
import css_logo from "../assets/img/logos/css_logo.webp"
import react_logo from "../assets/img/logos/react_logo.webp"
import photoshop_logo from "../assets/img/logos/photoshop_logo.webp"
import flask_logo from "../assets/img/logos/flask_logo.webp"

import color_sharp from "../assets/img/color-sharp.png"



export const Tech = () => {
  
    const logos = [python_logo, django_logo, javaSript_logo, bootstrap_logo, flask_logo, sql_logo, html_logo, css_logo, react_logo, photoshop_logo];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>TECH STACK</h2>
                        <p className="text-start">My technical skills include proficiency in <span className="fw-bold" style={{ color: "#b675e8" }}>Python, Django, JavaScript, React, SQL, Bootstrap and HTML/CSS. </span>
                        Currently I am expanding my knowledge in <span className="fw-bold" style={{ color: "#b675e8" }}>Machine Learning and Artificial Intelligence.</span></p>
                         <div className="container">
                            <div className="row justify-content-center">
                            {logos.map((logo, index) => (
                                <div key={index} className="col-6 col-md-3 col-lg-2 my-3">
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    style={{ maxWidth: "70%", height: "auto" }}
                                    className="img-fluid logo-img"
                                />
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={color_sharp} alt="" />
    </section>
  )
}