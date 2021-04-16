import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Pricing Plan",
    subHeading: "",
    text:
      "Here you can find your best PLAN, where each one dollar is equal to 3 points and each point is equal to 4 minutes of talking to an expert",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Basic",
      price: 5,
      msg2: "15 points",
      msg3: "60 minutes",
    },
    {
      id: 2,
      heading: "Standard",
      price: 10,
      msg2: "30 points",
      msg3: "120 minutes",
    },
    {
      id: 3,
      heading: "Premium",
      price: 15,
      msg2: "45 points",
      msg3: "180 minutes",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">${prices.heading}</div>
                <div className="price__rs">
                  <span>$</span>
                  {prices.price}
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
 
                </ul>
                <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
