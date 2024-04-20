import "./App.css";
import CustomCanvas from "./shared/components/CustomCanvas";

function App() {
  return <div className={`App border-2 border-amber-400 bg-slate-700 absolute inset-0 h-full`}>
    <CustomCanvas />
  </div>;
}

export default App;
