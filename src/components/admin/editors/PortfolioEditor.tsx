import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Project } from '../../../types/content';
import ImageUpload from '../ImageUpload';

interface PortfolioEditorProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

const PortfolioEditor: React.FC<PortfolioEditorProps> = ({ projects, onChange }) => {
  const addProject = () => {
    const newProject: Project = {
      title: '',
      description: '',
      image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: [''],
      category: 'Educational',
      githubUrl: '',
      liveUrl: '',
    };
    onChange([...projects, newProject]);
  };

  const updateProject = (index: number, field: keyof Project, value: any) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onChange(newProjects);
  };

  const removeProject = (index: number) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  const addTech = (projectIndex: number) => {
    const newProjects = [...projects];
    newProjects[projectIndex].tech.push('');
    onChange(newProjects);
  };

  const updateTech = (projectIndex: number, techIndex: number, value: string) => {
    const newProjects = [...projects];
    newProjects[projectIndex].tech[techIndex] = value;
    onChange(newProjects);
  };

  const removeTech = (projectIndex: number, techIndex: number) => {
    const newProjects = [...projects];
    newProjects[projectIndex].tech = newProjects[projectIndex].tech.filter((_, i) => i !== techIndex);
    onChange(newProjects);
  };

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Portfolio Projects</h2>
            <p className="text-gray-600">Showcase your development work and educational tools</p>
          </div>
          <button
            onClick={addProject}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="bg-gray-50 p-6 rounded-xl border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Project {projectIndex + 1}</h3>
              <button
                onClick={() => removeProject(projectIndex)}
                className="p-1 text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(projectIndex, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                    placeholder="Project name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProject(projectIndex, 'description', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm resize-none"
                    rows={3}
                    placeholder="Project description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={project.category}
                    onChange={(e) => updateProject(projectIndex, 'category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                  >
                    <option value="Educational">Educational</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Personal">Personal</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <ImageUpload
                    currentImage={project.image}
                    onImageChange={(imageUrl) => updateProject(projectIndex, 'image', imageUrl)}
                    label="Project Image"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={project.githubUrl || ''}
                    onChange={(e) => updateProject(projectIndex, 'githubUrl', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                    placeholder="https://github.com/username/repo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Live Demo URL
                  </label>
                  <input
                    type="url"
                    value={project.liveUrl || ''}
                    onChange={(e) => updateProject(projectIndex, 'liveUrl', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Technologies
                    </label>
                    <button
                      onClick={() => addTech(projectIndex)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {project.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="flex space-x-2">
                        <input
                          type="text"
                          value={tech}
                          onChange={(e) => updateTech(projectIndex, techIndex, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                          placeholder="Technology"
                        />
                        <button
                          onClick={() => removeTech(projectIndex, techIndex)}
                          className="p-2 text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioEditor;