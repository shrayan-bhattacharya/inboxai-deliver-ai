
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO, TechStart Inc',
      content: 'InboxAI increased our email deliverability from 60% to 94% in just 2 weeks. Our lead generation campaigns are finally working!',
      avatar: '/api/placeholder/64/64'
    },
    {
      name: 'Mike Chen',
      title: 'Marketing Director, SalesFlow',
      content: 'The AI predictions are incredibly accurate. We can now forecast which campaigns will succeed before sending them out.',
      avatar: '/api/placeholder/64/64'
    },
    {
      name: 'Emma Rodriguez',
      title: 'Founder, Digital Agency Pro',
      content: 'Finally, a platform that handles everything - domain setup, warm-up, compliance. It\'s a game-changer for agencies.',
      avatar: '/api/placeholder/64/64'
    }
  ];

  const logos = ['TechCrunch', 'ProductHunt', 'G2', 'Capterra'];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl text-gray-600">
            Join 500+ companies improving their email deliverability
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">As featured in:</p>
          <div className="flex justify-center items-center space-x-8">
            {logos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
