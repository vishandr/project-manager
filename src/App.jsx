import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const addNewTask = (task) => {
    setProjectState((prevState) => {
      
      return {
        ...prevState,
        projects: prevState.projects.map((item) => {
          if (item.id === projectState.selectedProjectId) {
            return {
              ...item,
              tasks: [task, ...item.tasks],
            };
          } else {
            return item;
          }
        }),
      };
    });
  };

  const handleAddNewProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelNewProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const id =
        prevState.projects.length === 0
          ? 1
          : prevState.projects[prevState.projects.length - 1].id + 1;

      const newProject = {
        ...projectData,
        id: id,
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onSave={handleAddProject} onCancel={handleCancelNewProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddNewProject={handleAddNewProject} />;
  } else {
    const selectedProject = projectState.projects.find(
      (item) => item.id === projectState.selectedProjectId
    );
    content = (
      <SelectedProject
        project={selectedProject}
        onDeleteProject={handleDeleteProject}
        onAddTask={addNewTask}
      />
    );
  }
  // console.log(projectState);
  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar
        onSelectProject={handleSelectProject}
        onAddNewProject={handleAddNewProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}
