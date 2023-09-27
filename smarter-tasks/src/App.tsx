import './App.css';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import { ThemeContext } from './context/theme';
import { useContext } from 'react';
import { ProjectsProvider } from './context/projects/context';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
        <ProjectsProvider>
          <RouterProvider router={router} />
        </ProjectsProvider>
      </div>
    </>
  );
}

export default App;
