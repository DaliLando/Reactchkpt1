import Carte from "./components/Card";

function App() {
  let nom ="Dali"
  return (
    <div className="App">
      <Carte/>
      {nom ? <><h1>{
      `Hello ${nom}`}</h1> <img src="https://science.nasa.gov/wp-content/uploads/2023/05/sun-cartoon-crop.png?w=4096&format=png&crop=1"/> </>: <h1>hello there</h1>}
      
    </div>
  );
}
export default App;
