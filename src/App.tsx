import React from 'react';
import { 
  Heart, 
  ArrowRight, 
  Dumbbell, 
  Clock3,
  Calendar,
  Target,
  Menu,
  X,
  Play
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Minimalist with hamburger menu */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-600 animate-pulse" />
              <span className="text-2xl font-black tracking-tight">Eazzy</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">Programs</a>
              <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">Community</a>
              <a href="#" className="text-sm font-medium hover:text-red-600 transition-colors">About</a>
              <button className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-gray-100`}>
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-sm font-medium hover:text-red-600">Programs</a>
            <a href="#" className="block text-sm font-medium hover:text-red-600">Community</a>
            <a href="#" className="block text-sm font-medium hover:text-red-600">About</a>
            <button className="w-full bg-black text-white px-6 py-2.5 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dynamic Split Design */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <span className="inline-block bg-red-600/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Transform Your Life
                </span>
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
                  Fitness for the
                  <span className="block text-red-600">Modern Life</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8 max-w-md">
                  Expert-crafted workouts that adapt to your schedule. Transform your health without disrupting your life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-black hover:bg-red-600 text-white px-8 py-4 rounded-xl transition-colors flex items-center">
                    Begin Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="border-2 border-black hover:bg-black hover:text-white px-8 py-4 rounded-xl transition-colors flex items-center">
                    Watch Video
                    <Play className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Woman doing yoga"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-black text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-red-600 p-3 rounded-xl">
                    <Dumbbell className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold">Active Users</div>
                    <div className="text-sm text-gray-400">Growing Community</div>
                  </div>
                </div>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-black"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-red-600 flex items-center justify-center text-sm font-bold">
                    +5k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose EazzyFitness?</h2>
            <p className="text-gray-600">
              We've reimagined fitness to fit seamlessly into your busy lifestyle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock3 className="h-8 w-8" />,
                title: "Flexible Scheduling",
                description: "Workouts that adapt to your calendar, not the other way around."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Personalized Goals",
                description: "Custom fitness plans that evolve with your progress."
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Daily Guidance",
                description: "Expert coaching and support every step of the way."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
                <div className="relative">
                  <div className="bg-red-600/10 text-red-600 p-3 rounded-xl inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-black rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    "EazzyFitness transformed how I approach health and fitness."
                  </h2>
                  <p className="text-gray-400 mb-8">
                    As a busy executive, I never thought I'd find time for consistent exercise. EazzyFitness changed that with their flexible, effective programs.
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.pravatar.cc/100?img=32"
                      alt="Sarah Johnson"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="text-white font-medium">Sarah Johnson</div>
                      <div className="text-gray-400 text-sm">Tech CEO</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { number: "80%", text: "Time Saved" },
                      { number: "95%", text: "Success Rate" },
                      { number: "30+", text: "Workout Types" },
                      { number: "24/7", text: "Support" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/10 p-6 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-gray-400 text-sm">{stat.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of professionals who've transformed their lives with EazzyFitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-red-600 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-black px-8 py-4 rounded-xl hover:bg-black hover:text-white transition-colors">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-6 w-6 text-red-600" />
                <span className="text-xl font-bold">EazzyFitness</span>
              </div>
              <p className="text-gray-600 mb-6">
                Making fitness accessible and sustainable for busy professionals.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="bg-black text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5"></div>
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Programs", "Pricing", "FAQ"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Blog", "Contact"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-bold mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} EazzyFitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;