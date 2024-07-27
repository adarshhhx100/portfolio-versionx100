import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { addFormData, FormData } from './db/RealtimeDatabaseService';

interface StartConversationProps {
  onClose: () => void;
}

const StartConversation: React.FC<StartConversationProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: '',
    additionalDetails: '',
  });
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'additionalDetails') {
      setWordCount(value.split(/\s+/).filter(Boolean).length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      console.log('Attempting to save data to Firebase...');
      await addFormData(formData);
      console.log('Data successfully saved to the database.');
      setIsFormVisible(false); // Hide the form
      setIsSubmitted(true); // Show the success message
      setFormData({
        name: '',
        email: '',
        interest: '',
        additionalDetails: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
        onClose(); // Close the modal after showing the success message
      }, 3000);
    } catch (error) {
      console.error('Error saving data:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
    }
  };

  const handleClose = () => {
    setIsFormVisible(false);
    setIsSubmitted(false);
    onClose(); // Call the onClose prop function
  };

  return (
    <div className="container mx-auto">
      {isFormVisible && (
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-3xl font-bold"
          >
            &times;
          </button>
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-4">Feel free to start a conversation.</h2>
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
                maxLength={600}
                className="w-full p-3 border border-gray-300 rounded-lg h-32"
              ></textarea>
              <p className="text-gray-500 text-sm mt-1">{wordCount} / 120 words</p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-900"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {isSubmitted && (
        <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
          <h2 className="text-2xl mb-4">Thank You!</h2>
          <p>Your message has been sent successfully.</p>
        </div>
      )}
    </div>
  );
};

export default StartConversation;
