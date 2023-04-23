import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

function App() {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      <A />
      <B />
      <C />
    </div>
  );
}

export default App;
