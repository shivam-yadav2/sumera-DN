import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const SalonContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className=" bg-gradient-to-br from-[#006A4E]/30 via-orange-50 to-[#006A4E]/80 py-20 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200 rounded-full opacity-25 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-lg italic text-gray-700 poppins-regular-italic">Have Questions?</p>
                <svg width="50" height="30" viewBox="0 0 50 30" className="text-[#006A4E]">
                  <path d="M 5 15 Q 15 5, 25 15 T 45 15" stroke="currentColor" fill="none" strokeWidth="2"/>
                  <polygon points="45,15 40,12 40,18" fill="currentColor"/>
                </svg>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#006A4E] leading-tight head">
                Feel free to get in touch!<br />contact now
              </h2>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-6 bg-white border-0 shadow-md text-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-300 rounded-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                onClick={handleSubmit}
                className="bg-black hover:bg-gray-800 text-white px-10 py-6 text-base font-medium transition-all duration-300 rounded-none"
              >
                Send us a message
              </Button>
            </div>
          </div>

          {/* Right Side - Image with Border */}
          <div className="relative">
            <div className="relative">
              {/* Purple border frame */}
              <div className="absolute inset-0 border-[12px] border-[#006A4E]  pointer-events-none transform translate-x-8 translate-y-8"></div>
              
              {/* Image */}
              <div className="relative bg-white shadow-2xl overflow-hidden">
                <img 
                  src="/assets/images/contact.jpg"
                  alt="Salon service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonContact;