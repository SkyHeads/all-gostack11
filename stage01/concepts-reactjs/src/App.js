import React, { useState, useEffect } from "react";

import api from './services/api';

import "./styles.css";

function App() {
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    const response = await api.get('/repositories');

    setProjects(response.data);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      id: "3252e824-1ef8-4ba6-8c97-923274b4b469",
      title: "Umbriel",
      url: "https://github.com/Rocketseat/umbriel",
      techs: [
        "Node",
        "Express",
        "TypeScript"
      ],
      likes: 0
    });

    setProjects([...projects, response.data]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`);

    setProjects(projects.filter(project => project.id !== id));
  }
  
  return (
    <div>
      <ul data-testid="repository-list">
        {projects.map(project => (
          <li key={project.id}>
            {project.title}
          <button onClick={() => handleRemoveRepository(project.id)}>
            Remover
          </button>
        </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
