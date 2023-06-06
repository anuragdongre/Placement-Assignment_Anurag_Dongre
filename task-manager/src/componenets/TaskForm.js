import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTask = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://reqres.in/api/tasks',
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Task created:', response.data);
      setTitle('');
      setDescription('');
    } catch (err) {
      console.log('Error creating task:', err);
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default TaskForm;

