import {useState} from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

export default function App() {
  const [addingNewProject, setAddingNewProject] = useState(false)

  const handleAddNewProject = () => {
    setAddingNewProject(true)
  };
  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar onAddNewProject={handleAddNewProject}/>
      {addingNewProject && <NewProject />}
      {!addingNewProject && <NoProjectSelected />}
      {/* <MainSection /> */}
    </main>
  );
}
