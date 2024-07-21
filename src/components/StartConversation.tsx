import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface ContactModalProps {
  onClose: () => void;
}

const StartConversation: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    additionalDetails: '',
  });
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'additionalDetails') {
      setWordCount(value.split(/\s+/).filter(Boolean).length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative"
      >
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center">
            <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-2xl mb-4">Thank You!</h2>
            <p>Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-3xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4">Start a Conversation</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-left mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-left mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="interest" className="block text-gray-700 text-left mb-1">Your Interest:</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select...</option>
                <option value="design">Software Development</option>
                <option value="development">Frontend Development</option>
                <option value="ai">AI/ML</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="additionalDetails" className="block text-gray-700 text-left mb-1">Additional Details:</label>
              <textarea
                id="additionalDetails"
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                maxLength={600} // Approx 120 words assuming 5 characters per word
                className="w-full p-3 border border-gray-300 rounded-lg h-32"
              ></textarea>
              <p className="text-gray-500 text-sm mt-1">{wordCount} / 120 words</p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default StartConversation;
