import React from "react";
import phot from "../../../images/wal2.PNG"
const About = () => {
  const [header] = React.useState({
    subHeader: "About Us",
    text:
      "With the help of some profissionals, our website goal is (Student First)",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Spark" },
    { id: 2, title: "Email:", text: "spark@gmail.com" },
 
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={phot} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              Spark is a leading student-first connected learning platform. The main idea
               is to help the student to understand anything in a short time.
              </div>
              <div className="about__info-p2">
              We select our profissionals with the help of experts to provide for you the best help.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
