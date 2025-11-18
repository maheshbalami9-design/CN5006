import './App.css';

function GreetingElementwithProp({ msg }) {
  console.log("prop is", msg);
  return (
    <div className="App">
      <h1>{msg}</h1>
    </div>
  );
}

export default GreetingElementwithProp;
