// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const TaskDashboard = ({ token }) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('https://reqres.in/api/register', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//           console.log(response.data.task)
//         setTasks(response.data.tasks);
//         setLoading(false);
//       } catch (err) {
//         console.log('Error fetching tasks:', err);
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [token]);

//   return (
//     <div>
//       <h2>Task Dashboard</h2>
//       {loading ? (
//         <p>Loading tasks...</p>
//       ) : (
//         <ul>
//           {tasks && tasks.length > 0 ? (
//             tasks.map((task) => <li key={task.id}>{task.title}</li>)
//           ) : (
//             <div>

//                 <p>No tasks found.</p>
            
                
//                 <button>Create Task</button>
                
//             </div>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskDashboard = ({ token }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/tasks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTasks(response.data.data);
        setLoading(false);
      } catch (err) {
        console.log('Error fetching tasks:', err);
        setLoading(false);
      }
    };

    fetchTasks();
  }, [token]);

  return (
    <div>
        {console.log(tasks)}
      <h2>Task Dashboard</h2>
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <div>
          {tasks.length > 0 ? (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          ) : (
            <div>
              <p>No tasks found.</p>
              <Link to="/create-task">
                <button>Create Task</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskDashboard;



