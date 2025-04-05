import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  // Mock user data for demo purposes
  const mockUserData = {
    name: 'John Smith',
    email: 'john@example.com',
    orders: [
      {
        id: 'ORD-1234',
        date: '2023-10-15',
        service: 'Home Cleaning',
        status: 'Completed',
        amount: 'R 450.00'
      },
      {
        id: 'ORD-1235',
        date: '2023-11-20',
        service: 'Carpet Cleaning',
        status: 'Scheduled',
        amount: 'R 350.00'
      },
      {
        id: 'ORD-1236',
        date: '2023-12-05',
        service: 'Gardening',
        status: 'Pending',
        amount: 'R 600.00'
      }
    ],
    messages: [
      {
        id: 'MSG-1',
        date: '2023-11-25',
        subject: 'Appointment Confirmation',
        read: true
      },
      {
        id: 'MSG-2',
        date: '2023-12-01',
        subject: 'Service Follow-up',
        read: false
      }
    ]
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would be a call to your authentication service
    if (loginData.email && loginData.password) {
      // Simulate successful login
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Please enter both email and password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Client Portal</h1>
          
          {!isLoggedIn ? (
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
              
              {loginError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {loginError}
                </div>
              )}
              
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-secondary-700 font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-secondary-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-secondary-700 font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-secondary-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center"
                >
                  <FaSignInAlt className="mr-2" />
                  Login
                </button>
                
                <div className="mt-4 text-center">
                  <a href="#" className="text-primary-600 hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </form>
              
              <div className="mt-8 pt-6 border-t border-secondary-200 text-center">
                <p className="text-secondary-700">
                  Don't have an account?{' '}
                  <a href="/contact" className="text-primary-600 font-medium hover:underline">
                    Contact us
                  </a>{' '}
                  to get started.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Welcome, {mockUserData.name}</h2>
                    <p className="text-primary-100">{mockUserData.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Your Orders</h3>
                  
                  {mockUserData.orders.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-secondary-100">
                            <th className="px-4 py-2 rounded-l-lg">Order ID</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Service</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2 rounded-r-lg">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockUserData.orders.map(order => (
                            <tr key={order.id} className="border-b border-secondary-200">
                              <td className="px-4 py-3 font-medium">{order.id}</td>
                              <td className="px-4 py-3">{order.date}</td>
                              <td className="px-4 py-3">{order.service}</td>
                              <td className="px-4 py-3">
                                <span 
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    order.status === 'Completed' 
                                      ? 'bg-green-100 text-green-800' 
                                      : order.status === 'Scheduled' 
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-4 py-3">{order.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-secondary-600">You don't have any orders yet.</p>
                  )}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Messages</h3>
                  
                  {mockUserData.messages.length > 0 ? (
                    <div className="space-y-3">
                      {mockUserData.messages.map(message => (
                        <div 
                          key={message.id}
                          className={`p-4 rounded-lg border ${
                            message.read ? 'border-secondary-200' : 'border-primary-200 bg-primary-50'
                          }`}
                        >
                          <div className="flex justify-between">
                            <h4 className="font-medium">
                              {message.subject}
                              {!message.read && (
                                <span className="ml-2 bg-primary-500 text-white text-xs px-2 py-0.5 rounded-full">
                                  New
                                </span>
                              )}
                            </h4>
                            <span className="text-sm text-secondary-600">{message.date}</span>
                          </div>
                          <div className="mt-2">
                            <a href="#" className="text-primary-600 hover:underline text-sm">
                              View message
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-secondary-600">You don't have any messages.</p>
                  )}
                </div>
                
                <div className="mt-8 pt-6 border-t border-secondary-200">
                  <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                  <p className="text-secondary-700 mb-4">
                    If you have any questions or need assistance with your orders, please don't hesitate to contact us.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientPortal; 