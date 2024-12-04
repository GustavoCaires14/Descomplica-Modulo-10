import { Rating, Table } from "@mui/material";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import BasicTable from "./pages/tarefa/Table";
import InteractiveList from "./pages/tarefa/Rating";


function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <InteractiveList/>
      <BasicTable/>
    </div>
  );
}

export default App;
