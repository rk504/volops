import { Star, ThumbsUp } from 'lucide-react';
import { format } from 'date-fns';

interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  opportunity: {
    title: string;
    organization: string;
  };
  rating: number;
  content: string;
  date: string;
  likes: number;
  images?: string[];
}

interface Props {
  review: Review;
}

export function ReviewCard({ review }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={review.user.avatar}
            alt={review.user.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{review.user.name}</h3>
            <p className="text-sm text-gray-500">
              {format(new Date(review.date), 'MMM d, yyyy')}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-rose-600">{review.opportunity.title}</h4>
        <p className="text-sm text-gray-600">{review.opportunity.organization}</p>
      </div>

      <p className="mt-4 text-gray-700">{review.content}</p>

      {review.images && review.images.length > 0 && (
        <div className="mt-4 flex space-x-2 overflow-x-auto">
          {review.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Review image ${index + 1}`}
              className="w-24 h-24 rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-rose-600">
          <ThumbsUp className="w-4 h-4" />
          <span>{review.likes} helpful</span>
        </button>
      </div>
    </div>
  );
}