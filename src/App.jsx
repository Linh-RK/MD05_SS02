import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import ListUser from "./components/ListUser";
import ListProduct from "./components/ListProduct";
import Task04 from "./task/task04";
import Task05 from "./task/task05";
import Task06 from "./task/task06";
import Task07 from "./task/task07";
import Task08 from "./task/task08";
import Task09 from "./task/task09";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header></Header>
      <Task04></Task04>
      <Task05></Task05>
      <Task06></Task06>
      <Task07></Task07>
      <Task08></Task08>
      <Task09></Task09>
      <Footer></Footer>
    </>
  );
}

export default App;
