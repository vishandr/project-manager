import {useState} from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

export default function App() {
  const [isAddingNewProject, setIsAddingNewProject] = useState(false)

  const handleAddNewProject = () => {
    setIsAddingNewProject(true)
  };

  const handleCancelNewProject = () => {
    setIsAddingNewProject(false)
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar onAddNewProject={handleAddNewProject}/>
      {isAddingNewProject && <NewProject onCancel={handleCancelNewProject}  />}
      {!isAddingNewProject && <NoProjectSelected onAddNewProject={handleAddNewProject}/>}
    </main>
  );
}
