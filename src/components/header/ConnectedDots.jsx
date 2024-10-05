import React, { useRef, useEffect, useState } from 'react';

const Contact = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const botToken = 'YOUR_BOT_TOKEN'; 
    const chatId = '998904471907'; 
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    try {
      await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div
      ref={contactRef}
      className={`container mx-auto text-center px-2 py-2 mt-[140px] bg-gray-950 border-2 border-[#cd5ff8] w-[900px] rounded lg:rounded-lg h-[520px] mb-16 p-[50px] pb-8 transform transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <p className="text-lg text-white mt-[50px]">How can you communicate?</p>
      <h6 className="text-2xl font-semibold mb-5 text-[#cd5ff8]">Contact Me</h6>
      <form className="contact-form mx-auto max-w-2xl mb-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group mt-6">
            <input
              type="text"
              name="name"
              className="form-control w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group mt-6">
            <input
              type="email"
              name="email"
              className="form-control w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group mt-6">
          <textarea
            name="message"
            id="comment"
            rows="6"
            className="form-control w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write Something"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group mt-6">
          <input
            type="submit"
            value="Send Message"
            className="btn w-full bg-[#cd5ff8] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-[#cd5ff8] hover:text-white cursor-pointer transition-colors"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
