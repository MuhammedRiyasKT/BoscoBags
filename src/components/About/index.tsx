"use client";

import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Breadcrumb title={"About Bosco Bags"} pages={["About"]} />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-100">
              <span className="w-2 h-2 bg-blue rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-blue">Since 1995</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Quality
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue-600">
                Since 1995
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
  With over 30 years of excellence, we&apos;ve evolved from humble beginnings into India&apos;s trusted name for premium, durable bags that stand the test of time.
</p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Est. 1995", icon: "📅" },
                { label: "Made in India", icon: "🇮🇳" },
                { label: "Nationwide Supply", icon: "🚚" }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <span className="font-semibold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Our Story Image</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 text-blue font-semibold text-sm uppercase tracking-wider mb-4">
                <div className="w-4 h-0.5 bg-blue"></div>
                Our Journey
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                From Humble Beginnings to National Recognition
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 1995, Bosco Bags has over 30 years of rich experience in the bag manufacturing industry. What started as a small workshop has blossomed into a trusted national brand.
                </p>
                <p>
                  Today, we proudly supply our premium products across India, serving both retail and wholesale markets with unwavering commitment to quality and customer satisfaction.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-2xl font-bold text-blue mb-1">500+</div>
                  <div className="text-sm text-gray-600">Products Designed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-2xl font-bold text-blue mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-4 h-0.5 bg-blue"></div>
              Our Expertise
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized Bag Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our diverse range of high-quality bags designed for every purpose and lifestyle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: "🎒", title: "School Bags", desc: "Durable and ergonomic designs for students' daily comfort" },
              { icon: "⚽", title: "Sports Bags", desc: "Spacious compartments for athletes and sports equipment" },
              { icon: "👛", title: "Ladies' Bags", desc: "Elegant designs blending fashion with functionality" },
              { icon: "🛍️", title: "Tote Bags", desc: "Eco-friendly totes perfect for shopping and daily use" },
              { icon: "🏷️", title: "Custom Bags", desc: "Branded promotional solutions for businesses" },
              { icon: "📦", title: "Wholesale Supply", desc: "Reliable nationwide distribution network" }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-4 h-0.5 bg-blue"></div>
              Our Journey
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Three Decades of Excellence
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue to-blue-200 transform lg:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                { year: "1995", title: "Foundation", desc: "Bosco Bags established with vision for quality manufacturing" },
                { year: "2005", title: "Expansion", desc: "Added school and sports bags to our product portfolio" },
                { year: "2015", title: "National Reach", desc: "Began nationwide supply to retail and wholesale markets" },
                { year: "2020", title: "Innovation", desc: "Introduced eco-friendly materials and sustainable practices" },
                { year: "2024", title: "30 Years Celebration", desc: "Three decades of quality craftsmanship and trust" }
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Year Circle */}
                  <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-blue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-black">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-200 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-4 h-0.5 bg-blue-200"></div>
              Our Philosophy
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Core Values That Drive Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: "⭐", title: "Quality First", desc: "Strong, tested materials ensuring durability and longevity" },
              { icon: "💝", title: "Customer Commitment", desc: "Designs prioritizing comfort and functionality" },
              { icon: "🚀", title: "Innovation", desc: "Blending functionality with modern trends" },
              { icon: "🌱", title: "Sustainability", desc: "Eco-friendly materials minimizing environmental impact" },
              { icon: "🤝", title: "Trust & Reliability", desc: "Building long-term relationships through consistency" }
            ].map((value, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-4 h-0.5 bg-blue"></div>
              Craftsmanship
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Production Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Premium Materials",
                desc: "Sourcing finest durable fabrics, reliable zippers, and quality hardware",
                features: ["Durable fabrics", "Reliable zippers", "Quality hardware"]
              },
              {
                step: "02",
                title: "Expert Craftsmanship",
                desc: "Meticulous attention to detail with precision cutting and reinforced stitching",
                features: ["Precision cutting", "Reinforced stitching", "Careful finishing"]
              },
              {
                step: "03",
                title: "Quality Control",
                desc: "Rigorous testing and sustainable packaging for guaranteed durability",
                features: ["Quality checks", "Durability tests", "Sustainable packaging"]
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{process.desc}</p>
                <ul className="space-y-2">
                  {process.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-4 h-0.5 bg-blue"></div>
              Our Team
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet The Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to delivering excellence in every bag we create.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Aboobacker",
                role: "Founder & Owner",
                desc: "Rashid Master",
                expertise: "30+ Years Experience"
              },
              {
                name: "Rahool",
                role: "Quality Manager",
                expertise: "Quality Assurance Expert"
              },
              {
                name: "Kannan",
                role: "Finishing Specialist",
                expertise: "Craftsmanship Perfectionist"
              }
            ].map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <span className="text-sm">Photo</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {member.expertise}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue font-semibold mb-3">{member.role}</p>
                {member.desc && (
                  <p className="text-gray-600 text-sm">{member.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Quality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Bosco Bags for their quality and durability needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link href={"/shop-with-sidebar"}>
             <button className="bg-white text-blue font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              View Our Products
            </button>
           </Link>
            <Link href={"/contact"}>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white hover:text-blue transition-all duration-300">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;