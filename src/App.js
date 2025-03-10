import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// ...existing code...

function App() {
  return (
    <Router basename="/VolatilisTrends">
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* Add your other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
