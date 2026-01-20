import './App.css'
import Background from "./components/Background.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

function App() {

  return (
    <div className="space-y-30">
      <Background />
      <Home />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
