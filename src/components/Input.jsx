import { useRef, useContext, useState } from "react";
import { MortgageContext } from "../context/MortgageContext";

export default function Input() {
  const [selected, setSelected] = useState({
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
  });
  const [error, setError] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });

  const { setMortgage } = useContext(MortgageContext);
  const mortgageAmount = useRef();
  const mortgageTerm = useRef();
  const interestRate = useRef();
  const repayment = useRef();
  const interestOnly = useRef();

  function handleSelect(num) {
    if (num === 1) {
      setSelected((prevState) => {
        return {
          ...prevState,
          one: true,
          two: false,
        };
      });
      setError((prevState) => {
        return {
          ...prevState,
          four: false,
        };
      });
    } else if (num === 2) {
      setSelected((prevState) => {
        return {
          ...prevState,
          one: false,
          two: true,
        };
      });
      setError((prevState) => {
        return {
          ...prevState,
          four: false,
        };
      });
    } else if (num === 3) {
      setSelected((prevState) => {
        return {
          ...prevState,
          three: true,
        };
      });
      setError((prevState) => {
        return {
          ...prevState,
          one: false,
        };
      });
    } else if (num === 4) {
      setSelected((prevState) => {
        return {
          ...prevState,
          four: true,
        };
      });
      setError((prevState) => {
        return {
          ...prevState,
          two: false,
        };
      });
    } else if (num === 5) {
      setSelected((prevState) => {
        return {
          ...prevState,
          five: true,
        };
      });
      setError((prevState) => {
        return {
          ...prevState,
          three: false,
        };
      });
    } else if (num === 6) {
      setSelected((prevState) => {
        return {
          ...prevState,
          one: false,
          two: false,
        };
      });
    }
  }

  function handleBlur(num) {
    if (num === 3) {
      setSelected((prevState) => {
        return {
          ...prevState,
          three: false,
        };
      });
    } else if (num === 4) {
      setSelected((prevState) => {
        return {
          ...prevState,
          four: false,
        };
      });
    } else if (num === 5) {
      setSelected((prevState) => {
        return {
          ...prevState,
          five: false,
        };
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newMortgage = {
      mortgageAmount: mortgageAmount.current.value,
      mortgageTerm: mortgageTerm.current.value,
      interestRate: interestRate.current.value,
      repayment: repayment.current.checked,
      interestOnly: interestOnly.current.checked,
    };

    setMortgage(newMortgage);
    console.log(newMortgage);

    if (newMortgage.mortgageAmount === "") {
      setError((prevState) => {
        return {
          ...prevState,
          one: true,
        };
      });
    }
    if (newMortgage.mortgageTerm === "") {
      setError((prevState) => {
        return {
          ...prevState,
          two: true,
        };
      });
    }
    if (newMortgage.interestRate === "") {
      setError((prevState) => {
        return {
          ...prevState,
          three: true,
        };
      });
    }
    if (newMortgage.repayment === false && newMortgage.interestOnly === false) {
      setError((prevState) => {
        return {
          ...prevState,
          four: true,
        };
      });
    }
  }
  return (
    <form
      className={
        error.one || error.two || error.three || error.four
          ? "input-form error"
          : "input-form"
      }
      onSubmit={handleSubmit}
    >
      <header className="input-form-header">
        <h2>Mortgage Calculator</h2>
        <button type="reset" onClick={() => handleSelect(6)}>
          Clear All
        </button>
      </header>
      <article className="input-form-first">
        <label>Mortgage Amount</label>
        <div className="pound-box">
          <div
            className={
              selected.three
                ? "pound selected"
                : "pound" && error.one
                ? "pound error"
                : "pound"
            }
          >
            £
          </div>
          <input
            type="number"
            ref={mortgageAmount}
            onClick={() => handleSelect(3)}
            onBlur={() => handleBlur(3)}
            className={error.one ? "first-input error" : "first-input"}
          />
        </div>
        {error.one && (
          <div
            style={{
              color: "#d3342b",
              fontWeight: "500",
              margin: "0",
              padding: "0",
            }}
          >
            This field is required
          </div>
        )}
      </article>
      <div className="input-form-short-ones">
        <article>
          <label>Mortgage Term</label>
          <div className="years-box">
            <input
              type="number"
              ref={mortgageTerm}
              onClick={() => handleSelect(4)}
              onBlur={() => handleBlur(4)}
              className={error.two ? "second-input error" : "second-input"}
            />
            <div
              className={
                selected.four
                  ? "years selected"
                  : "years" && error.two
                  ? "years error"
                  : "years"
              }
            >
              years
            </div>
          </div>
          {error.two && (
            <div
              style={{
                color: "#d3342b",
                fontWeight: "500",
                margin: "0",
                padding: "0",
              }}
            >
              This field is required
            </div>
          )}
        </article>
        <article>
          <label>Interest Rate</label>
          <div className="years-box">
            <input
              type="number"
              ref={interestRate}
              step="0.01"
              onClick={() => handleSelect(5)}
              onBlur={() => handleBlur(5)}
              className={error.three ? "second-input error" : "second-input"}
            />
            <div
              className={
                selected.five
                  ? "years selected"
                  : "years" && error.three
                  ? "years error"
                  : "years"
              }
            >
              %
            </div>
          </div>
          {error.three && (
            <div style={{ color: "#d3342b", fontWeight: "500" }}>
              This field is required
            </div>
          )}
        </article>
      </div>
      <article className="input-form-radio">
        <label>Mortgage Type</label>
        <div className="input-form-radio-box">
          <div
            className={
              selected.one
                ? "input-form-input-radio selected"
                : "input-form-input-radio"
            }
            onClick={() => handleSelect(1)}
          >
            <input
              type="radio"
              className="custom-radio"
              value="repayment"
              ref={repayment}
              name="test"
            />
            <label>Repayment</label>
          </div>
          <div
            className={
              selected.two
                ? "input-form-input-radio selected"
                : "input-form-input-radio"
            }
            onClick={() => handleSelect(2)}
          >
            <input
              type="radio"
              className="custom-radio"
              value="interest-only"
              ref={interestOnly}
              name="test"
            />
            <label>Interest Only</label>
          </div>
        </div>
        {error.four && (
          <div style={{ color: "#d3342b", fontWeight: "500" }}>
            This field is required
          </div>
        )}
      </article>
      <button className="submit-button" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#133041"
            d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
          />
        </svg>
        <p>Calculate Repayments</p>
      </button>
    </form>
  );
}
