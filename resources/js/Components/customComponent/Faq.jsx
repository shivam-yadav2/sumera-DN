import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What are the prerequisites for joining the academy?',
      answer: 'There are no specific prerequisites required. We welcome students from all backgrounds. Basic interest in beauty and passion for learning are the only requirements. However, for advanced courses, prior experience in basic makeup or hair styling is beneficial.'
    },
    {
      question: 'How long does each course take to complete?',
      answer: 'Our courses range from 4 to 8 weeks depending on the program level. We offer flexible scheduling with batch sessions starting monthly. Most courses include both theoretical and practical training sessions.'
    },
    {
      question: 'Will I receive a certification after completing the course?',
      answer: 'Yes, upon successful completion of any course, you will receive an industry-recognized certification. This certification is valid across India and can help you establish your career as a professional makeup artist or hairstylist.'
    },
    {
      question: 'What is the batch size for each class?',
      answer: 'We maintain small batch sizes of 15-20 students per class to ensure personalized attention and hands-on training. This allows our instructors to provide individual feedback and guidance to each student.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes, we provide comprehensive job placement assistance to all our graduates. We have partnerships with leading salons and beauty brands. Additionally, we help students set up their own freelance beauty business.'
    },
    {
      question: 'Can I attend classes if I have a full-time job?',
      answer: 'Absolutely! We offer flexible class timings including weekday evenings, weekends, and customized batches. You can choose the schedule that best fits your professional and personal commitments.'
    },
    {
      question: 'What materials and tools are provided during training?',
      answer: 'All professional-grade makeup products, brushes, and tools are provided during the course. You will have access to our complete beauty studio equipment and can practice with real clients under professional supervision.'
    },
    {
      question: 'Is there any age limit to join the academy?',
      answer: 'There is no upper age limit. We welcome aspiring beauty professionals of all ages. The minimum age requirement is 18 years old. We believe beauty education is for anyone passionate about the industry.'
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg italic mb-2" style={{ color: '#5c7650' }}>
            Common Questions
          </p>
          <h2 className="text-5xl head font-bold mb-4" style={{ color: '#5c7650' }}>
            Frequently Asked
          </h2>
          <h3 className="text-5xl head font-bold" style={{ color: '#5c7650' }}>
            Questions
          </h3>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Find answers to the most common questions about our academy programs, courses, and training opportunities.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-lg overflow-hidden transition-all duration-300"
              style={{
                borderColor: activeIndex === index ? '#5c7650' : '#e5e7eb',
                backgroundColor: activeIndex === index ? '#f8f9f7' : '#ffffff',
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-start justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left  font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className="w-6 h-6 flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: '#5c7650',
                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 border-t" style={{ borderColor: '#5c7650' }}>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-12 rounded-2xl text-center" style={{ backgroundColor: '#f8f9f7' }}>
          <h3 className="text-3xl head font-bold mb-4 text-gray-900">Still have questions?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us directly and our team will be happy to help you find the perfect course for your beauty career goals.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="px-8 py-4 rounded-lg head font-semibold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#5c7650' }}
            >
              Get In Touch
            </button>
            <button
              className="px-8 py-4 rounded-lg head font-semibold transition-all duration-300 border-2"
              style={{ borderColor: '#5c7650', color: '#5c7650' }}
            >
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}