import CodeEditorProvider from './contexts/ProjectContext';
import EditCodePage from '../src/pages/EditCodePage';
// import CommunityPage from '../src/pages/CommunityPage';
import './assets/App.css';

function App() {
  return (
    <CodeEditorProvider>
      <EditCodePage/>
      {/* <CommunityPage/> */}
    </CodeEditorProvider>
  );
}

export default App;
