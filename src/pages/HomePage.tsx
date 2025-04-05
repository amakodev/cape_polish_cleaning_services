import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHome, FaBuilding, FaCar, FaCouch, FaLeaf, FaTrash } from 'react-icons/fa';

const HomePage = () => {
  const services = [
    { 
      id: 'home-cleaning',
      name: 'Home Cleaning', 
      description: 'Professional home cleaning tailored to your needs, from regular maintenance to deep cleaning.',
      icon: <FaHome className="h-8 w-8 text-primary-500" />
    },
    { 
      id: 'commercial-cleaning',
      name: 'Commercial Buildings', 
      description: 'Keep your workplace clean, safe and professional with our commercial cleaning solutions.',
      icon: <FaBuilding className="h-8 w-8 text-primary-500" />
    },
    { 
      id: 'car-cleaning',
      name: 'Car Cleaning', 
      description: 'Interior and exterior car cleaning services that leave your vehicle looking brand new.',
      icon: <FaCar className="h-8 w-8 text-primary-500" />
    },
    { 
      id: 'carpet-cleaning',
      name: 'Carpet Cleaning', 
      description: 'Deep carpet cleaning that removes stains, odors, and allergens for a healthier home.',
      icon: <FaCouch className="h-8 w-8 text-primary-500" />
    },
    { 
      id: 'gardening',
      name: 'Gardening', 
      description: 'Professional garden maintenance and landscaping to keep your outdoor spaces beautiful.',
      icon: <FaLeaf className="h-8 w-8 text-primary-500" />
    },
    { 
      id: 'waste-removal',
      name: 'Waste Removal', 
      description: 'Responsible waste collection and disposal for homes and businesses.',
      icon: <FaTrash className="h-8 w-8 text-primary-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      comment: 'CapePolish has transformed our home. Their attention to detail is amazing, and the cleaning team is always professional and friendly.',
      avatar: '/avatars/avatar-1.jpg'
    },
    {
      name: 'Mark Williams',
      role: 'Business Owner',
      comment: 'As a business owner, I need reliable cleaning services. CapePolish delivers every time, keeping our office spaces immaculate.',
      avatar: '/avatars/avatar-2.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Property Manager',
      comment: "We manage several properties and rely on CapePolish for our cleaning needs. They're consistently excellent and great to work with.",
      avatar: '/avatars/avatar-3.jpg'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Professional Cleaning</span>
                <span className="text-primary-600">Services in Cape Town</span>
              </h1>
              <p className="text-lg text-secondary-700 mb-8 max-w-xl">
                Transform your home or business with our professional cleaning services. 
                We deliver exceptional results, so you can enjoy a cleaner, healthier environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium inline-flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  Get a Free Quote
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3 rounded-lg bg-white border border-primary-500 text-primary-600 font-medium inline-flex items-center justify-center hover:bg-primary-50 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 mt-10 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/images/hero-cleaning.jpg"
                alt="Professional Cleaning Services"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cleaning Services</h2>
            <p className="text-secondary-700">
              We offer a wide range of professional cleaning services to meet all your needs.
              Our expert team is equipped to handle any cleaning challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-secondary-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-secondary-700 mb-4">{service.description}</p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Learn more <FaArrowRight className="ml-2" size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium inline-flex items-center justify-center hover:bg-primary-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CapePolish</h2>
            <p className="text-secondary-700">
              We're committed to delivering exceptional cleaning services that meet your specific needs.
              Here's what sets us apart from other cleaning companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">Experienced Professionals</h3>
              <p className="text-secondary-700">
                Our team consists of trained and experienced cleaning professionals who deliver excellent results every time.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3">Eco-Friendly Products</h3>
              <p className="text-secondary-700">
                We use environmentally friendly cleaning products that are safe for your family, pets, and the environment.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3">Customized Services</h3>
              <p className="text-secondary-700">
                We tailor our cleaning services to meet your specific needs, ensuring you get exactly what you want.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3">Reliable & Consistent</h3>
              <p className="text-secondary-700">
                Count on us to show up on time, every time, and deliver consistent high-quality service.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3">Affordable Pricing</h3>
              <p className="text-secondary-700">
                We offer competitive prices for our professional cleaning services, with transparent pricing and no hidden fees.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">100% Satisfaction</h3>
              <p className="text-secondary-700">
                We're not satisfied until you are. If you're not happy with our service, we'll make it right.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-secondary-700">
              We take pride in providing exceptional service to our clients. 
              Here's what they have to say about our cleaning services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-secondary-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <div className="flex mb-4 items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-secondary-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-secondary-700 italic">"{testimonial.comment}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium inline-flex items-center justify-center hover:bg-primary-700 transition-colors"
            >
              Get Started Today
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Cleaner Space?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us today to schedule a cleaning service or get a free quote.
              Experience the CapePolish difference!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-white text-primary-600 font-medium inline-flex items-center justify-center hover:bg-primary-50 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+27123456789"
                className="px-6 py-3 rounded-lg bg-primary-700 text-white font-medium inline-flex items-center justify-center hover:bg-primary-800 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage; 