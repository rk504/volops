import { ReviewCard } from './ReviewCard';

const mockReviews = [
  {
    id: '1',
    user: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    opportunity: {
      title: 'Beach Cleanup Initiative',
      organization: 'Ocean Guardians'
    },
    rating: 5,
    content: 'Amazing experience! Not only did we help clean the beach, but I also met wonderful people who are passionate about environmental conservation. The organizers were well-prepared and made sure everyone was comfortable and had the necessary equipment.',
    date: '2024-03-10T09:00:00',
    likes: 12,
    images: [
      'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1591326768474-68df1a00e614?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: '2',
    user: {
      name: 'Michael Rodriguez',
      avatar: 'https://i.pravatar.cc/150?u=michael'
    },
    opportunity: {
      title: 'Food Bank Distribution',
      organization: 'City Food Bank'
    },
    rating: 4,
    content: 'Very rewarding experience helping distribute food to those in need. The organization was good, though it could have been a bit more structured. Will definitely volunteer again!',
    date: '2024-03-08T14:00:00',
    likes: 8
  }
];

export function ReviewsSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Recent Reviews from Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}