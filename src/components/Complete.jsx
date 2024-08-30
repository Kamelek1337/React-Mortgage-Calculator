
export default function CompleteWebsite({ result , result2}){

    const resultFixed = result.toFixed(2)
    const result2Fixed = result2.toFixed(2)


    const formatter = new Intl.NumberFormat('en-US');

    const formattedNumber2 = formatter.format(result2Fixed);
    const formattedNumber1 = formatter.format(resultFixed);
  
    return <div className="complete-box">
            <div className="complete-small-box">
                <h2>Your Results</h2>
                <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
                <div className="complete-summary-box">
                    <div className="complete-value">
                        <p>Your monthly repayments</p>
                        <p id="repayments-value">£{formattedNumber1}</p>
                    </div>
                    <div className="complete-summary-end">
                        <p>Total you'll repay over the term</p>
                        <p id="sum-value">£{formattedNumber2}</p>
                    </div>
                </div>
            </div>
    </div>
}