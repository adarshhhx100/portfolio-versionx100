import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline'; // Import the success icon

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onClose: () => void;
}

const SayHelloForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-3xl font-bold"
        >
          &times;
        </button>
        <div className="text-center">
          {isSubmitted ? (
            <div className="flex flex-col items-center">
              <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
              <h2 className="text-2xl mb-4">Thank You!</h2>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col items-start">
                  <label className="block text-gray-700 mb-1" htmlFor="name">Name:</label>
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
                <div className="flex flex-col items-start">
                  <label className="block text-gray-700 mb-1" htmlFor="email">Email:</label>
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
                <div className="flex flex-col items-start">
                  <label className="block text-gray-700 mb-1" htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg h-32"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SayHelloForm;
