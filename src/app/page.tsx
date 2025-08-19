'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Play, Star, Users, Trophy, Target, Clock, ArrowRight, Zap, Heart, Shield, Award, CheckCircle } from 'lucide-react';

export default function Page() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Personalized Training',
      description: 'AI-powered workout plans that adapt to your progress and goals in real-time',
      highlight: 'Adaptive Programs'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Elite Trainers',
      description: 'World-class certified professionals with Olympic and professional sports backgrounds',
      highlight: 'Expert Guidance'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Over 10,000 successful transformations with average 40% fitness improvement',
      highlight: '98% Success Rate'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Ultimate Flexibility',
      description: 'Premium 24/7 access with biometric entry and personal locker assignments',
      highlight: 'Always Available'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
  text: 'Incredible transformation! Lost 35 pounds, gained muscle, and completely changed my relationship with fitness. The personalized approach here is unmatched.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzIJDNaWFPDga2VWx9G4rM2IST-kPixumaw&s',
      achievement: 'Lost 35 lbs in 6 months',
      program: 'Strength & Weight Loss'
    },
    {
      name: 'Mike Rodriguez',
      rating: 5,
  text: 'From couch potato to marathon runner! The trainers here didn\'t just push my limits—they helped me discover I had none. Best investment I\'ve ever made.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHf5w3z21mZAQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691700849696?e=2147483647&v=beta&t=qBRc6DRQco5jW4sTy-NHz0lg-NMcdWgQZwkZsHp8nEE',
      achievement: 'Completed 3 marathons',
      program: 'Endurance Training'
    },
    {
      name: 'Emily Chen',
      rating: 5,
  text: 'This isn&apos;t just a gym—it&apos;s a lifestyle revolution. The community, the equipment, the expertise... everything exceeded my expectations. Life-changing experience!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZYrWBtDHzjf6aukQOiNdLgr2rT6q-UIC8g&s',
      achievement: 'Gained 15 lbs muscle',
      program: 'Body Recomposition'
    },
  ];

  const benefits = [
    'State-of-the-art equipment worth $2M+',
    'Nutritionist consultations included',
    'Recovery suite with sauna & ice baths',
    'Mobile app with AI coaching',
    'Group classes with world-class instructors',
    'Body composition tracking technology'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Enhanced Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black via-black/70 to-black/40">
            <img
              src="/hw2.jpg"
              alt="Fitness Background"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dynamic overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/20 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-red-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Enhanced Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              {/* <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 text-sm text-orange-300">
                <Zap className="w-4 h-4" />
                <span>Premium Fitness Experience</span>
              </div> */}
              
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
                Transform
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Your Life
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed">
                Join the elite fitness revolution. Where cutting-edge science meets 
                <span className="text-orange-400 font-semibold"> personalized excellence</span> 
                to unlock your ultimate potential.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/join"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 text-center flex items-center justify-center gap-3"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-orange-500 hover:bg-orange-500/10 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                Watch Success Stories
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gradient-to-r from-gray-800 via-orange-500/20 to-gray-800">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                  2,500+
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium">Active Members</div>
                <div className="text-xs text-orange-300 mt-1">Growing Daily</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                  75+
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium">Elite Trainers</div>
                <div className="text-xs text-orange-300 mt-1">Certified Experts</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium">Award Years</div>
                <div className="text-xs text-orange-300 mt-1">Industry Leader</div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced floating card */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl transform rotate-6"></div>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-orange-400">Your Journey Starts</h3>
                  <Award className="w-8 h-8 text-orange-400" />
                </div>
                <div className="space-y-4">
                  {['Free Consultation', 'Custom Meal Plan', 'Progress Tracking', '24/7 Support'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">7 Days Free</div>
                  <div className="text-orange-100 text-sm">Premium Access Trial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900/50 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-3 text-orange-300 mb-6">
              <Shield className="w-5 h-5" />
              <span>Premium Features</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Why Choose <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Bodyshape</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of fitness with our revolutionary approach to health, wellness, and peak performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-xs text-orange-400 font-semibold uppercase tracking-wide mb-2">
                      {feature.highlight}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-20 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl border border-orange-500/20 p-12">
            <h3 className="text-3xl font-bold text-center mb-12 text-orange-400">What's Included in Your Membership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-3 text-orange-300 mb-6">
              <Heart className="w-5 h-5" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              What Our <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Champions</span> Say
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Real transformations from real people who dared to challenge their limits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-10 rounded-2xl border border-gray-800/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-8 text-lg leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-orange-500/50"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xl text-orange-400">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.program}</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-4">
                    <div className="text-orange-300 font-semibold text-center">
                      🏆 {testimonial.achievement}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black/20"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
            Your Transformation
            <br />
            Starts Today
          </h2>
          <p className="text-2xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the elite community of achievers who refuse to settle for ordinary. 
            Your extraordinary life is waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/join"
              className="group bg-white text-orange-500 hover:bg-orange-50 px-12 py-6 rounded-2xl text-2xl font-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-white/20 flex items-center justify-center gap-4"
            >
              Claim Your Free Trial
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="border-3 border-white text-white hover:bg-white hover:text-orange-500 px-12 py-6 rounded-2xl text-2xl font-black transition-all duration-300 hover:shadow-2xl shadow-white/10"
            >
              Schedule a Tour
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-orange-100">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">No Contracts • Cancel Anytime</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Personal Trainer Included</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <div className="relative max-w-6xl w-full mx-4">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-16 right-0 text-white hover:text-orange-500 text-3xl font-bold transition-colors duration-300 bg-gray-900/50 w-12 h-12 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-orange-500/30 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <Play className="w-24 h-24 text-orange-500 mx-auto mb-4" />
                <p className="text-white text-2xl font-semibold mb-2">Success Stories Video</p>
                <p className="text-gray-400">Video content would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}