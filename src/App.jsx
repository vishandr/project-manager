import {useState} from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

export default function App() {
    const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })  

  const handleAddNewProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  };

  const handleCancelNewProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  };
  
  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const id = prevState.projects.length === 0 ? 1 : prevState.projects[0].id + 1;

      const newProject = {
        ...projectData,
        id: id
      }
      
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        // selectedProjectId: project.id
      }
    })
  }
  console.log(projectState)

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar onAddNewProject={handleAddNewProject}/>
      {projectState.selectedProjectId === null && <NewProject onSave={handleAddProject} onCancel={handleCancelNewProject}  />}
      {projectState.selectedProjectId === undefined && <NoProjectSelected onAddNewProject={handleAddNewProject}/>}
    </main>
  );
}
