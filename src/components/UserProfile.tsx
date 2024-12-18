import { Award, Clock, Users } from 'lucide-react';
import { User } from '../types';

interface Props {
  user: User;
}

export function UserProfile({ user }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            {user.volunteeredHours} hours volunteered
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Badges</h3>
        <div className="flex flex-wrap gap-4">
          {user.badges.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-center p-2 bg-gray-50 rounded-lg"
              title={badge.description}
            >
              <Award className="w-8 h-8 text-emerald-600" />
              <span className="text-sm mt-1">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">
          <Users className="w-5 h-5 inline mr-2" />
          Friends ({user.friends.length})
        </h3>
        <div className="flex -space-x-2">
          {user.friends.map((friend, index) => (
            <img
              key={index}
              className="w-8 h-8 rounded-full border-2 border-white"
              src={`https://i.pravatar.cc/150?u=${friend}`}
              alt="Friend avatar"
            />
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Points</span>
          <span className="text-2xl font-bold text-emerald-600">{user.points}</span>
        </div>
        <div className="mt-2 bg-emerald-200 rounded-full h-2">
          <div
            className="bg-emerald-600 h-2 rounded-full"
            style={{ width: `${(user.points % 100)}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {100 - (user.points % 100)} points until next level
        </p>
      </div>
    </div>
  );
}