import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ toggleModal }) => (
  <div className="fixed inset-0 text-black flex items-center justify-center bg-black bg-opacity-50 z-50">
    <motion.div 
      className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl w-full max-w-lg mx-auto font-sans relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <button 
        onClick={toggleModal} 
        className="absolute top-4 right-4 bg-custom-teal text-custom-green-dark font-bold py-2 px-4 rounded-full shadow-md transition duration-300"
      >
        X
      </button>

      <h3 className="text-3xl font-bold mb-6 text-custom-teal text-center">Get in Touch</h3>
      
      {/* Form with Formspree */}
      <form 
        action="https://formspree.io/f/mrbgbgan" 
        method="POST" 
        className="space-y-6"
      >
        <div className="relative">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-custom-teal transition duration-300"
            required 
          />
        </div>

        <div className="relative">
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-custom-teal transition duration-300"
            required 
          />
        </div>

        <div className="relative">
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="4" 
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-custom-teal transition duration-300"
            required 
          ></textarea>
        </div>

        <motion.button 
          type="submit" 
          className="w-full bg-custom-teal text-custom-green-dark font-bold py-3 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </div>
);

export default Contact;
