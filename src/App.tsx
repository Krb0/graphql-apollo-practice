import Persons from "./components/Persons";
import usePersons from "./hooks/usePersons";
function App() {
  const [data, loading] = usePersons();

  return <div>{loading ? <p>Loading...</p> : <Persons data={data} />}</div>;
}

export default App;
