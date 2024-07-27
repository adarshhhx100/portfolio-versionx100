import { database } from './Firebase'; // Adjust the import path as needed
import { ref, set } from 'firebase/database';

// Define interfaces for form data
export interface FormData {
  name: string;
  email: string;
  interest: string;
  additionalDetails: string;
}

export interface SayHelloFormData {
  name: string;
  email: string;
  message: string;
}

// Function to save data to the "conversation" collection
export const addFormData = async (formData: FormData) => {
  try {
    const key = Date.now().toString(); // Generate a unique key as a string
    const formDataRef = ref(database, `conversation/${key}`);
    await set(formDataRef, formData);
    console.log('Document written with ID:', key);
  } catch (e) {
    console.error('Error adding document:', e);
    if (e instanceof Error) {
      console.error('Error message:', e.message);
    }
  }
};

// Function to save data to the "sayHelloForm" collection
export const addSayHelloFormData = async (formData: SayHelloFormData) => {
  try {
    const key = Date.now().toString(); // Generate a unique key as a string
    const formDataRef = ref(database, `sayHelloForm/${key}`);
    await set(formDataRef, formData);
    console.log('Document written with ID:', key);
  } catch (e) {
    console.error('Error adding document:', e);
    if (e instanceof Error) {
      console.error('Error message:', e.message);
    }
  }
};
