import { useState } from 'react';
import { Mail } from 'lucide-react';

export function Signup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('https://formspree.io/f/xbjnkzrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          _replyto: email,
          _subject: 'New Volunteer Platform Signup',
          message: `New signup email: ${email}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setError('Failed to submit. Please try again.');
      console.error('Error submitting email:', error);
    }
  };

  return (
    <div className="bg-rose-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated on Volunteer Opportunities
          </h2>
          <p className="mb-6">
            Join our community and receive notifications about new opportunities in your area.
          </p>
          
          {submitted ? (
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-lg">Thank you for signing up! We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-rose-600 font-semibold rounded-lg hover:bg-rose-50 transition-colors"
              >
                Sign Up
              </button>
            </form>
          )}
          {error && <p className="mt-2 text-sm text-rose-200">{error}</p>}
        </div>
      </div>
    </div>
  );
}