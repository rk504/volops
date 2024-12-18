import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';
import { Opportunity } from '../types';

interface Props {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: Props) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={opportunity.image}
        alt={opportunity.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
        <p className="text-gray-600 mb-4">{opportunity.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {format(new Date(opportunity.date), 'PPP')}
          </div>
          
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            {opportunity.duration} hours
          </div>
          
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            {opportunity.location.address}
          </div>
          
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-2" />
            {opportunity.participants.length}/{opportunity.maxParticipants} participants
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {opportunity.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <button className="mt-4 w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors">
          Join Opportunity
        </button>
      </div>
    </div>
  );
}