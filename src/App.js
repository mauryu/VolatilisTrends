import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// ...existing code...

function App() {
  return (
    <Router basename="/VolatilisTrends">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Add your other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
