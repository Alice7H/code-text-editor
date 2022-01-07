import CodeEditorProvider from './contexts/ProjectContext';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import EditCodePage from '../src/pages/EditCodePage';
import CommunityPage from '../src/pages/CommunityPage';
import './assets/App.css';

function App() {
  return (
    <CodeEditorProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditCodePage/>} />
        <Route path="/:id" element={<EditCodePage/>} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
      </BrowserRouter>
    </CodeEditorProvider>
  );
}

export default App;
