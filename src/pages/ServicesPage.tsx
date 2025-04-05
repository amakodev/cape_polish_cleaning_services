import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaCar, FaCouch, FaLeaf, FaTrash, FaCheck } from 'react-icons/fa';

const ServicesPage = () => {
  const location = useLocation();
  const servicesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Check if there's a hash in the URL to scroll to a specific service
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # character
      const element = servicesRef.current[id];
      if (element) {
        // Add a small delay to ensure DOM is fully loaded
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100, // Adjust for header height
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: 'home-cleaning',
      title: 'Home Cleaning',
      icon: <FaHome className="h-16 w-16 text-primary-500" />,
      description: 'We provide comprehensive home cleaning services tailored to your specific needs and schedule.',
      features: [
        'Regular maintenance cleaning',
        'Deep cleaning services',
        'Move-in and move-out cleaning',
        'Spring cleaning packages',
        'Customized cleaning plans',
        'Eco-friendly cleaning options'
      ],
      image: '/images/home-cleaning.jpg'
    },
    {
      id: 'commercial-cleaning',
      title: 'Commercial Building Cleaning',
      icon: <FaBuilding className="h-16 w-16 text-primary-500" />,
      description: 'Keep your workplace clean, safe, and professional with our commercial cleaning services.',
      features: [
        'Office cleaning services',
        'Retail space cleaning',
        'Medical facility cleaning',
        'Educational institution cleaning',
        'Industrial cleaning services',
        'After-hours cleaning options'
      ],
      image: '/images/commercial-cleaning.jpg'
    },
    {
      id: 'car-cleaning',
      title: 'Car Cleaning',
      icon: <FaCar className="h-16 w-16 text-primary-500" />,
      description: 'Our car cleaning services will leave your vehicle looking and smelling like new.',
      features: [
        'Interior detailing',
        'Exterior washing and waxing',
        'Engine bay cleaning',
        'Headlight restoration',
        'Odor removal treatments',
        'Paint protection services'
      ],
      image: '/images/car-cleaning.jpg'
    },
    {
      id: 'carpet-cleaning',
      title: 'Carpet Cleaning',
      icon: <FaCouch className="h-16 w-16 text-primary-500" />,
      description: 'Deep clean your carpets to remove stains, odors, and allergens for a healthier home.',
      features: [
        'Hot water extraction cleaning',
        'Dry cleaning methods',
        'Stain removal treatments',
        'Allergen reduction',
        'Odor elimination',
        'Carpet protection applications'
      ],
      image: '/images/carpet-cleaning.jpg'
    },
    {
      id: 'gardening',
      title: 'Gardening Services',
      icon: <FaLeaf className="h-16 w-16 text-primary-500" />,
      description: 'We maintain and beautify your outdoor spaces with our professional gardening services.',
      features: [
        'Lawn maintenance',
        'Garden bed preparation and planting',
        'Pruning and trimming',
        'Weed control',
        'Irrigation system management',
        'Seasonal cleanup'
      ],
      image: '/images/gardening.jpg'
    },
    {
      id: 'waste-removal',
      title: 'Waste Removal',
      icon: <FaTrash className="h-16 w-16 text-primary-500" />,
      description: 'Responsible waste collection and disposal for homes and businesses.',
      features: [
        'Residential waste removal',
        'Commercial waste management',
        'Construction debris removal',
        'Garden waste disposal',
        'Electronic waste handling',
        'Recycling services'
      ],
      image: '/images/waste-removal.jpg'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Cleaning Services</h1>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            We offer a comprehensive range of professional cleaning services for homes and businesses in Cape Town.
            Our expert team uses high-quality equipment and eco-friendly products.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              ref={(el) => {
                servicesRef.current[service.id] = el;
              }}
              className={`py-12 md:py-16 ${
                index !== services.length - 1 ? 'border-b border-secondary-200' : ''
              }`}
            >
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg bg-secondary-100">
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Placeholder for actual images */}
                      <div>{service.icon}</div>
                      <p className="text-center text-secondary-500">Service Image</p>
                    </div>
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-secondary-700 mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <FaCheck className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a service or request a free quote.
            Our friendly team is ready to assist you with all your cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg bg-white text-primary-600 font-medium hover:bg-primary-50 transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+27123456789"
              className="px-6 py-3 rounded-lg bg-primary-700 text-white font-medium hover:bg-primary-800 transition-colors"
            >
              Call Us: +27 12 345 6789
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage; 