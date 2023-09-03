import "../styles/style.css";

function Screen({answer}) {
  console.log(answer)
  return (
    <div className="result" >
        <p>{answer}</p>
    </div>
  );
}
export default Screen;
