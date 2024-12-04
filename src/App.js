
import './App.css';

function Header () {
  return (
      <h1>
          <Title/>
      </h1>
  )
}
function Content () {
  return(
      <button>
          <Title/>
      </button>
  )
}
function Footer () {
    return (
     <h2>
         <Title/>
     </h2>
    )
}
function Title () {
    return(
        <span>
            Diyes Alibet
        </span>
    )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
        <Footer/>
    </div>
  );
}

export default App;
