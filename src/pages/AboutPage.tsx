import { motion } from 'framer-motion';
import { FaStar, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'David Johnson',
      role: 'Founder & CEO',
      bio: 'David founded CapePolish in 2015 with a vision to transform the cleaning industry in Cape Town. With over 15 years of experience in hospitality and cleaning services.',
      image: '/images/team/david.jpg'
    },
    {
      name: 'Sarah Ndlovu',
      role: 'Operations Manager',
      bio: 'Sarah oversees all cleaning operations and ensures our high standards are maintained. She has a background in hotel management and is passionate about service excellence.',
      image: '/images/team/sarah.jpg'
    },
    {
      name: 'Michael Adebayo',
      role: 'Client Relations',
      bio: 'Michael is responsible for building and maintaining client relationships. His friendly approach and attention to detail make him a favorite among our regular customers.',
      image: '/images/team/michael.jpg'
    }
  ];

  const achievements = [
    {
      icon: <FaStar className="text-yellow-400 w-10 h-10" />,
      title: '4.9/5 Average Rating',
      description: 'Our commitment to excellence has earned us a stellar reputation with consistent 5-star reviews from satisfied clients.'
    },
    {
      icon: <FaUsers className="text-primary-500 w-10 h-10" />,
      title: '1000+ Happy Clients',
      description: 'We have served over a thousand residential and commercial clients throughout Cape Town and surrounding areas.'
    },
    {
      icon: <FaAward className="text-blue-500 w-10 h-10" />,
      title: 'Award-Winning Service',
      description: 'Named "Best Cleaning Service" in Cape Town by the Local Business Excellence Awards in 2022 and 2023.'
    },
    {
      icon: <FaHandshake className="text-green-500 w-10 h-10" />,
      title: 'Community Partners',
      description: 'We actively participate in community initiatives, providing free cleaning services to local non-profit organizations.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About CapePolish
            </motion.h1>
            <motion.p 
              className="text-lg text-secondary-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              CapePolish is a leading cleaning service provider in Cape Town. We're committed to delivering exceptional cleaning solutions for homes and businesses with a focus on quality, reliability, and customer satisfaction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-secondary-700">
                <p>
                  CapePolish was founded in 2015 with a simple mission: to provide exceptional cleaning services that transform spaces and exceed client expectations. What started as a small team of dedicated cleaners has grown into one of Cape Town's most trusted cleaning companies.
                </p>
                <p>
                  Our journey began when our founder, David Johnson, noticed a gap in the market for reliable, high-quality cleaning services that consistently delivered excellent results. With his background in hospitality and a passion for service excellence, David assembled a team of skilled professionals who shared his vision.
                </p>
                <p>
                  Today, CapePolish serves hundreds of residential and commercial clients throughout Cape Town. While we've grown in size, we've maintained our commitment to personalized service, attention to detail, and environmental responsibility.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl bg-secondary-100 aspect-w-4 aspect-h-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-center text-secondary-500">Company Image</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-secondary-700 max-w-2xl mx-auto">
              Over the years, we've built a reputation for excellence in the cleaning industry. 
              Here are some of our proudest achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{achievement.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-secondary-700">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-secondary-700 max-w-2xl mx-auto">
              The people behind CapePolish are passionate professionals dedicated to delivering exceptional cleaning services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-secondary-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 mx-auto w-32 h-32 bg-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-600">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-secondary-700">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              These core values guide everything we do at CapePolish. They're the foundation of our service and our commitment to you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="p-6 rounded-xl bg-primary-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-primary-100">
                We strive for excellence in everything we do, from the quality of our cleaning to our customer service.
              </p>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl bg-primary-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-primary-100">
                We operate with honesty, transparency, and a strong ethical foundation in all our business practices.
              </p>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl bg-primary-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-primary-100">
                We deliver on our promises, showing up on time and providing consistent, dependable service.
              </p>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl bg-primary-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-primary-100">
                We're committed to environmentally friendly practices and using eco-friendly cleaning products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 