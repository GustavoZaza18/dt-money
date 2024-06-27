import { Header } from "./components/header";
import { Summary } from "./components/summary";
import { Table } from "./components/table";

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Summary />
      <Table />
    </>
  );
}
