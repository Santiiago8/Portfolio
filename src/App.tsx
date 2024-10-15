import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoverPage from './components/cover-page';
import ProjectPage from './pages/project/[id]';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
