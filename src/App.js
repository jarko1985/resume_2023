import "./App.css";
import { Header } from "./components/Header";
import { Objective } from "./components/Objective";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { References } from "./components/References";
import { Languages } from "./components/Languages";

function App() {
  return (
    <div
      className="container-fluid"
    >
      <Header />
      <Objective />
      <Education />
      <Skills />
      <Work />
      <Projects />
      <References />
      <Languages />
    </div>
  );
}

export default App;
