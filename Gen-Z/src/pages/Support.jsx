import React from 'react'
import Footer from '../components/Footer'
import { FaHeadset, FaBook, FaTriangleExclamation, FaCreditCard, FaUserGear, FaCircleQuestion } from 'react-icons/fa6'

const categories = [
  {
    icon: <FaBook className="text-3xl text-amber-500" />,
    title: 'General Guide',
    desc: 'Everything you need to know about getting started with Gen-Z.',
  },
  {
    icon: <FaTriangleExclamation className="text-3xl text-amber-500" />,
    title: 'Technical Support',
    desc: 'Having trouble with our tools? Our team is here to help you fix it.',
  },
  {
    icon: <FaCreditCard className="text-3xl text-amber-500" />,
    title: 'Billing & Payments',
    desc: 'Manage your subscriptions, invoices, and payment methods.',
  },
  {
    icon: <FaUserGear className="text-3xl text-amber-500" />,
    title: 'Account Settings',
    desc: 'Update your profile, security settings, and preferences.',
  },
]

const faqs = [
  {
    question: "How can I start a project with Gen-Z?",
    answer: "You can start by clicking the 'Contact Us' button in the navbar or at the bottom of the support page. We'll set up a discovery call to discuss your goals."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work with forward-thinking brands across fintech, e-commerce, SaaS, and lifestyle sectors that want to reach the next generation."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We provide various maintenance and support packages to ensure your digital products stay updated and perform at their best."
  },
  {
    question: "How long does a typical design project take?",
    answer: "Timelines vary depending on scope, but a standard branding or web project typically takes 4-8 weeks from kickoff to delivery."
  }
]

export default function Support() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 sm:px-12 md:px-24 lg:px-40 text-center bg-amber-50">
        <span className="inline-block bg-amber-100 text-amber-500 text-sm font-semibold px-4 py-1 rounded-full mb-6 tracking-wide uppercase">
          Help Center
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          How can we <span className="text-amber-500">support you?</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Search our knowledge base or get in touch with our team. We're here 
          to help you build experiences that matter.
        </p>
        
        {/* Simple Search Bar Mockup */}
        <div className="mt-10 max-w-lg mx-auto relative">
          <input 
            type="text" 
            placeholder="Search for help..." 
            className="w-full px-6 py-4 rounded-full border-2 border-amber-100 focus:border-amber-400 outline-none transition-all shadow-sm pr-16"
          />
          <button className="absolute right-2 top-2 bg-amber-400 p-2.5 rounded-full hover:bg-amber-500 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6 sm:px-12 md:px-24 lg:px-40 bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <div
              key={i}
              className="bg-amber-50 border border-amber-100 rounded-2xl p-8 hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 shadow-sm group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">{c.icon}</div>
              <h3 className="text-gray-900 font-bold text-xl mb-3">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              <button className="mt-6 text-amber-600 font-semibold text-sm hover:underline">Learn more →</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 sm:px-12 md:px-24 lg:px-40 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-100 text-amber-500 text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-wide uppercase">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm hover:border-amber-300 transition-colors">
                <h3 className="text-gray-900 font-bold text-lg mb-3 flex items-start gap-3">
                  <FaCircleQuestion className="text-amber-500 mt-1 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-500 leading-relaxed md:ml-9 text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 sm:px-12 md:px-24 lg:px-40 text-center bg-white">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl py-16 px-6 shadow-md max-w-5xl mx-auto flex flex-col items-center">
          <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center text-3xl mb-8 shadow-inner shadow-black/10">
            <FaHeadset className="text-black" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
            Still Have Questions?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our support team is available Monday through Friday, 9am — 6pm. 
            We usually respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-500 transition-all duration-300 shadow">
              Contact Support
            </button>
            <button className="px-8 py-3 bg-white text-gray-800 font-bold rounded-full border border-amber-200 hover:border-amber-400 transition-all duration-300 shadow-sm">
              Live Chat
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
