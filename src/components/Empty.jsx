import IllustrationSVG from "../assets/illustration-empty.svg";


export default function EmptyWebsite(){
    return (
    <div className="output-box">
        <img src={IllustrationSVG} alt="My Happy SVG" />
        <h2>Results shown here</h2>
        <p>
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be
        </p>
    </div>)
}