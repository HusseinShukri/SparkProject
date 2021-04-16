import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
  FaLanguage,
  FaLaptopCode,
} from "react-icons/fa";
import { SiMathworks } from "react-icons/si";
import { ImCalculator } from "react-icons/im";
import { GiMaterialsScience } from "react-icons/gi";


const Services = () => {
  const [header] = React.useState({
    mainHeader: "Our SERVICES",
    subHeading: "",
    text:
      "We provide the best profissionals in all of these subjects You can ask them any qusition ",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <SiMathworks className="commonIcons" />,
      heading: "Math",
      text:
        "Algebra, Logic, Number Theory, Combinatorics and etc ",
    },
    {
      id: 2,
      icon: <ImCalculator className="commonIcons" />,
      heading: "Calculas",
      text:
        "Limits, Differential, Integral, Absolute Numerical and etc ",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Physics",
      text:
        "You can find any quistion relative to Physics",
    },
    {
      id: 4,
      icon: <GiMaterialsScience className="commonIcons" />,
      heading: "Scince",
      text:
        "Chemistry, Biology, Botany, Argiculture and etc",
    },
    {
      id: 5,
      icon: <FaLaptopCode className="commonIcons" />,
      heading: "Programmin Languages",
      text:
        "Java, Paython, JavaScript, C# and etc",
    },
    {
      id: 6,
      icon: <FaLanguage className="commonIcons" />,
      heading: "Languages",
      text:
        "Arabic, English, France, Spanish and etc",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
