import Tasks from "./Tasks";

export default function SelectedProject({ project, onDeleteProject, onAddTask }) {
  const formattedData = new Date(project.dueDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className='w-[35rem] mt-16'>
      <header className='mb-4 pb-4 border-b-2 border-stone-300 '>
        <div className='flex item-center justify-between'>
          <h1 className='text-3xl font-bold text-stone-600 mb-2'>
            {project.title}
          </h1>
          <button onClick={onDeleteProject} className="text-stone-600 hover:text-stone-950">DELETE</button>
        </div>
        <p className="mb-4 text-stone-400">{formattedData}</p>
        <p className='whitespace-pre-wrap text-stone-600'>{project.description}</p>
      </header>
      <Tasks onAddTask={onAddTask} taskList={project.tasks}/>
    </div>
  );
}
