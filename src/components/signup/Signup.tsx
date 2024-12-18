import { useState } from 'react';
import './signup.css'; // Import the CSS file for styles

export function Signup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // Replace with your email service API endpoint (like EmailJS, Formspree, etc.)
    const res = await fetch('/api/submit-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSuccess(true);
      setEmail('');
    } else {
      // Handle error
      alert('There was an error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center mt-8">
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Sign Up for Updates</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          required
        />
        <button
          type="submit"
          className={`w-full py-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Sign Up'}
        </button>

        {success && <p className="text-green-500 mt-2">Thank you for signing up!</p>}
      </form>
    </div>
  );
}

