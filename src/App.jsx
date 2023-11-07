import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
// import MainSection from './MainSection';

export default function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar />
      <NewProject />
      {/* <MainSection /> */}
    </main>
  );
}
