import React from 'react';
import { 
  Group, Clock, Award, Medal, BookOpen, Star, Phone, Mail, MapPin, 
  Facebook, Twitter, Instagram 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-blue-500 text-white py-12 px-4"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Bantu Belajar<br />Bantu Bersosial
            </h1>
            <p className="text-lg mb-6">Hello, Ready to Learn and earn more points today?</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-blue-500 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Pelajari Lebih Lanjut
              </button>
              <button className="bg-blue-400 text-white px-4 py-2 rounded font-medium hover:bg-blue-300 transition-colors">
                Mulai Belajar
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-300 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-300 rounded-full opacity-50"></div>
              <img 
                src="https://placehold.co/600x400/white/blue?text=Graduation+Girl" 
                alt="Graduation Girl" 
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4"
      >
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Belajar Jadi Lebih Seru dan Terarah!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Semua yang kamu butuhkan untuk belajar ada di BANBAN
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-100 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Group className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Belajar Berkelompok</h3>
            </div>
            <div className="p-6 bg-blue-100 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Fokus Timer</h3>
            </div>
            <div className="md:col-span-2 p-6 bg-blue-100 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Prestasi</h3>
            </div>
            <div className="p-6 bg-blue-100 rounded-xl text-center hover:shadow-lg transition-shadow">
              <Medal className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Peringkat</h3>
            </div>
            <div className="p-6 bg-blue-100 rounded-xl text-center hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Materi</h3>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trophies Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-orange-400 py-12 px-4"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Get Quality Education</h2>
          <p className="text-white text-center mb-8 max-w-2xl mx-auto">
            Problem trying to resolve the conflict between the two major realms of classical physics.
          </p>
          
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="bg-yellow-300 w-16 h-24 rounded-t-xl flex items-end justify-center pb-2 mx-auto">
                  <div className="w-12 h-12 bg-white rounded-full mb-1"></div>
                </div>
                <p className="text-white font-medium mt-2">1st Place</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-300 w-16 h-20 rounded-t-xl flex items-end justify-center pb-2 mx-auto">
                  <div className="w-12 h-12 bg-white rounded-full mb-1"></div>
                </div>
                <p className="text-white font-medium mt-2">2nd Place</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-700 w-16 h-16 rounded-t-xl flex items-end justify-center pb-2 mx-auto">
                  <div className="w-12 h-12 bg-white rounded-full mb-1"></div>
                </div>
                <p className="text-white font-medium mt-2">3rd Place</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4).fill().map((_, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Some people say you need to work hard to reach your financial goals for the month and year.
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://placehold.co/40x40/gray/white?text=User" 
                    alt="User" 
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">Hendry Wijaya</h4>
                    <p className="text-xs text-gray-500">Manager</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Navigate</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 text-sm">Dashboard</a></li>
                <li><a href="#" className="hover:text-blue-300 text-sm">Features</a></li>
                <li><a href="#" className="hover:text-blue-300 text-sm">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-300 text-sm">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 text-sm">Business Marketing</a></li>
                <li><a href="#" className="hover:text-blue-300 text-sm">User Analytics</a></li>
                <li><a href="#" className="hover:text-blue-300 text-sm">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-300 text-sm">Unlimited Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 text-sm">AI & Learning</a></li>
                <li><a href="#" className="hover:text-blue-300 text-sm">Web & Mobile</a></li>
                <li><a href="#" className="hover:text-blue-300 text-sm">Customers</a></li>
                <li><a href="#" className="hover:text-blue-300 text-sm">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Get in Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+62 123 1234 5678</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">info@baban.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Jl. Study Way 123</span>
                </li>
              </ul>
              <div className="mt-4 flex space-x-2">
                <a href="#" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            <p>All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
