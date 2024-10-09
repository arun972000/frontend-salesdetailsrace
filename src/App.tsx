import { Routes, Route } from "react-router-dom";
import "./App.css";
import FormComponent from "./Form";
import SubscriberList from "./SUbscriberList";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/sub-list" element={<SubscriberList/>} />
      </Routes>
    </>
  );
}

export default App;
