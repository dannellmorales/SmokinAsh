import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from './Components/Navigation';
import Home from './Pages/Home';
import List from './Pages/List';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import New from './Pages/New';
import FOF from './Pages/FOF';


function App() {
  return (
    <div className="grid">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stogs" element={<List />} />
          <Route path="/stogs/new" element={<New />} />
          <Route path="/stogs/:id" element={<Show />} />
          <Route path="/stogs/:id/edit" element={<Edit />} />
          <Route path="*" element={<FOF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
