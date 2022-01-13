import CodeEditorProvider from './contexts/ProjectContext';
import CommentProvider from './contexts/CommentContext';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import EditCodePage from '../src/pages/EditCodePage';
import CommunityPage from '../src/pages/CommunityPage';
import CommentPage from '../src/pages/CommentPage';
import NotFoundPage from '../src/pages/NotFoundPage';
import './assets/App.css';

function App() {
  return (
    <CodeEditorProvider>
      <CommentProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditCodePage/>} />
        <Route path="/:id" element={<EditCodePage/>} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/comment/:id" element={<CommentPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path='*' exact={true} element={<NotFoundPage />} />
      </Routes>
      </BrowserRouter>
      </CommentProvider>
    </CodeEditorProvider>
  );
}

export default App;
