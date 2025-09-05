import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Service } from '../../../types/content';

interface ServicesEditorProps {
  services: Service[];
  onChange: (services: Service[]) => void;
}

const ServicesEditor: React.FC<ServicesEditorProps> = ({ services, onChange }) => {
  const addService = () => {
    const newService: Service = {
      name: '',
      topics: [''],
      price: '$45/hour',
      discount: 'First session 50% off',
      color: 'blue',
    };
    onChange([...services, newService]);
  };

  const updateService = (index: number, field: keyof Service, value: any) => {
    const newServices = [...services];
    newServices[index] = { ...newServices[index], [field]: value };
    onChange(newServices);
  };

  const removeService = (index: number) => {
    onChange(services.filter((_, i) => i !== index));
  };

  const addTopic = (serviceIndex: number) => {
    const newServices = [...services];
    newServices[serviceIndex].topics.push('');
    onChange(newServices);
  };

  const updateTopic = (serviceIndex: number, topicIndex: number, value: string) => {
    const newServices = [...services];
    newServices[serviceIndex].topics[topicIndex] = value;
    onChange(newServices);
  };

  const removeTopic = (serviceIndex: number, topicIndex: number) => {
    const newServices = [...services];
    newServices[serviceIndex].topics = newServices[serviceIndex].topics.filter((_, i) => i !== topicIndex);
    onChange(newServices);
  };

  const colorOptions = [
    { value: 'blue', label: 'Blue' },
    { value: 'emerald', label: 'Emerald' },
    { value: 'orange', label: 'Orange' },
    { value: 'purple', label: 'Purple' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Tutoring Services</h2>
            <p className="text-gray-600">Manage your tutoring subjects and pricing</p>
          </div>
          <button
            onClick={addService}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Service</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service, serviceIndex) => (
          <div key={serviceIndex} className="bg-gray-50 p-6 rounded-xl border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Service {serviceIndex + 1}</h3>
              <button
                onClick={() => removeService(serviceIndex)}
                className="p-1 text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Name
                </label>
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => updateService(serviceIndex, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                  placeholder="Mathematics"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Color Theme
                </label>
                <select
                  value={service.color}
                  onChange={(e) => updateService(serviceIndex, 'color', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                >
                  {colorOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Topics
                  </label>
                  <button
                    onClick={() => addTopic(serviceIndex)}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  {service.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex space-x-2">
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => updateTopic(serviceIndex, topicIndex, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                        placeholder="Topic"
                      />
                      <button
                        onClick={() => removeTopic(serviceIndex, topicIndex)}
                        className="p-2 text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="text"
                  value={service.price}
                  onChange={(e) => updateService(serviceIndex, 'price', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                  placeholder="$45/hour"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Discount/Offer
                </label>
                <input
                  type="text"
                  value={service.discount}
                  onChange={(e) => updateService(serviceIndex, 'discount', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                  placeholder="First session 50% off"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesEditor;