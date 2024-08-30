import EmptyWebsite from "./Empty";
import CompleteWebsite from "./Complete";
import { useContext } from "react";
import { MortgageContext } from "../context/MortgageContext";

export default function Output() {
  const { mortgage } = useContext(MortgageContext);

  let content;

  if (
    mortgage === undefined ||
    mortgage.mortgageAmount === "" ||
    mortgage.interestRate === "" ||
    mortgage.mortgageTerm === "" ||
    mortgage.repayment === null ||
    mortgage.interestOnly === null
  ) {
    content = <EmptyWebsite />;
  } else {
    if (mortgage.repayment === true) {
      let r = mortgage.interestRate / 100 / 12;
      let n = mortgage.mortgageTerm * 12;
      let p = mortgage.mortgageAmount;

      let result = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
      let result2 = result * n;

      content = <CompleteWebsite result={result} result2={result2} />;
    } else if (mortgage.interestOnly === true) {
      let r = mortgage.interestRate / 100;
      let p = Number(mortgage.mortgageAmount);
      let n = mortgage.mortgageTerm * 12;

      let result = (p * r) / 12;
      let result2 = result * n;
      let result3 = p + result2;
      console.log(result3);

      content = <CompleteWebsite result={result} result2={result3} />;
    }
  }

  return <>{content}</>;
}
