import React, { useRef, useEffect, useState } from 'react';

const Contact = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div
      ref={contactRef}
      className={`container mx-auto text-center px-2 py-2 mt-[140px] bg-gray-950 border-2 border-[#cd5ff8] w-[900px] rounded lg:rounded-lg h-[520px] shadow-[#cd5ff8] p-[50px]  transform transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <p className="text-lg text-white mt-[50px]">How can you communicate?</p>
      <h6 className="text-2xl font-semibold mb-5 text-[#cd5ff8]">Contact Me</h6>
      <form className="contact-form mx-auto max-w-2xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group mt-6">
            <input
              type="text"
              className="form-control w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group mt-6">
            <input
              type="email"
              className="form-control w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div className="form-group mt-6">
          <textarea
            name="comment"
            id="comment"
            rows="6"
            className="form-control w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write Something"
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
