import "../styles/style.css";
function Number(prop) {
  return (
    <button
      key={prop.pname}
      name={prop.pname}
      value={prop.pname}
      onClick={prop.action}
    >
      {prop.pname}
    </button>
  );
}

export default Number;
