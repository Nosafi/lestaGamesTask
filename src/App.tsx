import TechTable from "./TechTable/TechTable";
import css from "./App.module.scss";

function App() {
  return (
    <div className={css.App}>
      {/* Component for displaying information of tanks. */}
      <TechTable />
    </div>
  );
}

export default App;
