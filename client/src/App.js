
import './App.css';
import AppRoutes from './routes/AppRoutes'
import SearchAppBar from './components/SearchAppBar/SearchAppBar'

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <AppRoutes />

    </div>
  );
}

export default App;
