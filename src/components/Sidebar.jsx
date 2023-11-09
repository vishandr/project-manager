import Button from './Button';
const Sidebar = ({
  onAddNewProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className='w-1/3  px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your projects
      </h2>
      <div>
        <Button onClick={onAddNewProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => 
        {
          let cssClass = 'w-full px-2 py-1 text-left my-1 md:text-base rounded-sm hover:text-stone-100 hover:bg-stone-800'
          if (project.id === selectedProjectId) {
            cssClass += ' bg-stone-800 text-stone-200'
          } else{ 
            cssClass += ' text-stone-400'
          }

          return(
          <li key={project.id}>{
            <button
              onClick={() => onSelectProject(project.id)}
              className={cssClass}
            >
              {project.title}
            </button>
          }
          </li>
        )}
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
