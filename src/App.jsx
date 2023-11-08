import {useState} from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

export default function App() {
  const [isAddingNewProject, setIsAddingNewProject] = useState(false)

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
  // const handleAddNewProject = () => {
  //   setIsAddingNewProject(true)
  // };

  const handleCancelNewProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  };
  

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar onAddNewProject={handleAddNewProject}/>
      {projectState.selectedProjectId === null && <NewProject onCancel={handleCancelNewProject}  />}
      {projectState.selectedProjectId === undefined && <NoProjectSelected onAddNewProject={handleAddNewProject}/>}
    </main>
  );
}
