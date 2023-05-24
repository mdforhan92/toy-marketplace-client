import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Description:', description);

    // Reset form fields
    setName('');
    setEmail('');
    setDescription('');
  };

  return (
    <div className='bg-slate-100'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
        <h1 className='mb-4 text-xl text-center text-red-500 tracking-tight font-extrabold'>Contact Us</h1> 
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
