
import Timeline from '../components/Timeline1.jsx';
import Sidebar from '../components/Sidebar.jsx';


function Home() {
  return (
    <>
    <main className="timeline">
      <Timeline/>
    </main>
    <aside className="sidebar">
      <Sidebar />
    </aside>
    
    </>
   
  );
}

export default Home;
