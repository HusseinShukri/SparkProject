import React from "react";
import phot from "../../../images/wal2.PNG"
const Pol = () => {
        const [state] = React.useState({
          title: "Congratulations Teacher you now one of us",
          text:
            "All that we want you to do is to help our students in any way, any kind of cheating or scaming will cause of a heavy punishment. For your payment you have to sell your points to be paid, every one dollar is equal to 3 points and every one point is equal to 5 minutes",
        });
        return (
          <header className="header2">
            <div className="container2">
              <div className="row">
                <div className="col-6">
                  <div className="header__content">
                    <div className="header__section">
                      <h1>{state.title}</h1>
                      <p>{state.text}</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                </div>
              </div>
            </div>
          </header>
        );
      };

export default Pol;
