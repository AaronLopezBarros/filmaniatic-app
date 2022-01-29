
import './App.css';
import AppRoutes from './routes/AppRoutes'
import SearchAppBar from './components/SearchAppBar/SearchAppBar'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className="App">
    <CssBaseline>
      <SearchAppBar />
      <AppRoutes />
    </CssBaseline>
    </div>
  );
}

export default App;
