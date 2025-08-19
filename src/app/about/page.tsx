import React from 'react';
import { Users, Target, Award, Heart, Dumbbell, Trophy, Clock, MapPin } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Active Members', icon: Users },
    { number: '15+', label: 'Expert Trainers', icon: Dumbbell },
    { number: '98%', label: 'Success Rate', icon: Target },
    { number: '5', label: 'Years Strong', icon: Trophy }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe fitness is a journey best shared. Our inclusive community supports every member regardless of their starting point.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Every program is designed with measurable outcomes in mind. We track progress and celebrate victories, big and small.'
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'From our cutting-edge equipment to our certified trainers, we maintain the highest standards in everything we do.'
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Head Trainer & Founder',
      specialty: 'Strength Training, Nutrition',
      experience: '12+ years'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CrossFit Coach',
      specialty: 'HIIT, Functional Fitness',
      experience: '8+ years'
    },
    {
      name: 'Emma Chen',
      role: 'Yoga & Wellness',
      specialty: 'Mindfulness, Flexibility',
      experience: '10+ years'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Where Transformation Begins
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            At Bodyshape Gym, we don't just build bodies – we forge champions, 
            create communities, and transform lives through the power of fitness.
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Downtown Fitness District</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Open 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-400">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Born from a vision in 2020, Bodyshape Gym emerged during challenging times when the world needed hope, 
              health, and human connection more than ever. Our founder, Sarah Mitchell, a certified trainer with over 
              a decade of experience, saw an opportunity to create something different – a fitness sanctuary that 
              prioritizes people over profits.
            </p>
            <p>
              What started as a modest 3,000 sq ft space has evolved into a 15,000 sq ft state-of-the-art facility. 
              But our growth isn't measured just in square footage – it's in the lives we've transformed, the confidence 
              we've built, and the community we've fostered. From helping new mothers regain their strength to training 
              athletes for competition, every success story fuels our passion.
            </p>
            <p>
              Today, we stand proud as more than just a gym. We're a movement, a family, and a testament to what's 
              possible when dedication meets opportunity. Our members don't just work out here – they belong here.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-orange-400">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:bg-gray-900/30 p-6 rounded-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-orange-400">Meet Our Experts</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Our certified trainers bring decades of combined experience and genuine passion for helping you succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-xl hover:bg-black/70 transition-all duration-300 border border-gray-800 hover:border-orange-500/30">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-400">{member.name}</h3>
                <p className="text-white font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-2">{member.specialty}</p>
                <p className="text-orange-400 text-sm font-medium">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-orange-400">Ready to Transform Your Life?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of members who've already started their journey. Your future self will thank you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
              Start Your Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              Schedule a Tour
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            No commitment required • Personal consultation included • Community-focused approach
          </p>
        </div>
      </section>
    </div>
  );
}