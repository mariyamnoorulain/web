import React from 'react';
import { X, MapPin, Calendar, Award, Briefcase } from 'lucide-react';

interface Story {
  id: number;
  name: string;
  batch: string;
  title: string;
  story: string;
  achievements: string[];
  image: string;
  category?: string;
  location?: string;
  fullStory?: string;
}

interface StoryModalProps {
  story: Story;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-green-800">{story.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={story.image} 
                alt={story.name} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-700 mb-2">
                  {story.category === "Technology" && <Briefcase className="w-5 h-5" />}
                  {story.category === "Entrepreneurship" && <Award className="w-5 h-5" />}
                  {story.category === "Research" && <Briefcase className="w-5 h-5" />}
                  {story.category === "Finance" && <Briefcase className="w-5 h-5" />}
                  {story.category === "Healthcare" && <Award className="w-5 h-5" />}
                  <span className="text-sm font-medium">{story.category}</span>
                </div>
                <p className="text-xl font-semibold text-green-800">{story.title}</p>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Class of {story.batch}</span>
                  {story.location && (
                    <>
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{story.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Professional Journey</h3>
              <p className="text-gray-600 mb-6">{story.fullStory || story.story}</p>

              <h3 className="text-lg font-semibold text-green-800 mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {story.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                    <span className="ml-2 text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;