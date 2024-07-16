import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskList from './TaskList';

export default function Dashboard(){
    const { username } = useParams();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
          const response = await fetch(`http://localhost:5000/milestones?AssignedTo=${username}`);
          const data = await response.json();
          setTasks(data);
          console.log(data);
        };
     
        fetchTasks();
      }, []);

    return(<>
    <h1>Dashboard</h1>
<h2>Welcome: {username}</h2>
<div>
      <div className="header">Leading Board</div>
      <div className="project-name">Project Name: Library Management</div>
      <div className="task-board">
        <div className="column">
          <h3>Started</h3>
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
    </>)
}