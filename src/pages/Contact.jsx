import React from 'react';

const Contact = () => (
  <div className="max-w-lg mx-auto p-8">
    <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Name:</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="text" name="name" />
      </div>
      <div>
        <label className="block text-gray-700">Email:</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="email" name="email" />
      </div>
      <div>
        <label className="block text-gray-700">Message:</label>
        <textarea className="w-full p-2 border border-gray-300 rounded" name="message"></textarea>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">
        Send
      </button>
    </form>
  </div>
);

export default Contact;
