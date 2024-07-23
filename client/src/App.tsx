import CmsContainer from './components/CmsContainer';
import LogInForm from './components/LogInForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
      <Router>
        <Routes>
            <Route path="/" element={<LogInForm />} />
            <Route path="/" element={<CmsContainer />} />
        </Routes>
      </Router>
  );
}

export default App;
