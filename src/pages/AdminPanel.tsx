import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaSignInAlt, FaClipboardList, FaUsers, FaEnvelope, FaCheck, FaClock, FaTimes, FaEye } from 'react-icons/fa';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for admin panel
  const mockOrdersData = [
    {
      id: 'ORD-1234',
      customer: 'John Smith',
      email: 'john@example.com',
      date: '2023-10-15',
      service: 'Home Cleaning',
      status: 'Completed',
      amount: 'R 450.00'
    },
    {
      id: 'ORD-1235',
      customer: 'Sarah Johnson',
      email: 'sarah@example.com',
      date: '2023-11-20',
      service: 'Carpet Cleaning',
      status: 'Scheduled',
      amount: 'R 350.00'
    },
    {
      id: 'ORD-1236',
      customer: 'Michael Wong',
      email: 'michael@example.com',
      date: '2023-12-05',
      service: 'Gardening',
      status: 'Pending',
      amount: 'R 600.00'
    },
    {
      id: 'ORD-1237',
      customer: 'Emma Davis',
      email: 'emma@example.com',
      date: '2023-12-10',
      service: 'Commercial Cleaning',
      status: 'Pending',
      amount: 'R 1200.00'
    }
  ];

  const mockLeadsData = [
    {
      id: 'LEAD-123',
      name: 'Lisa Thompson',
      email: 'lisa@example.com',
      phone: '+27 31 456 7890',
      date: '2023-12-01',
      service: 'Carpet Cleaning',
      status: 'New'
    },
    {
      id: 'LEAD-124',
      name: 'Robert Brown',
      email: 'robert@example.com',
      phone: '+27 82 345 6789',
      date: '2023-12-03',
      service: 'Home Cleaning',
      status: 'Contacted'
    },
    {
      id: 'LEAD-125',
      name: 'Jennifer Adams',
      email: 'jennifer@example.com',
      phone: '+27 71 234 5678',
      date: '2023-12-05',
      service: 'Car Cleaning',
      status: 'New'
    }
  ];

  const mockCustomersData = [
    {
      id: 'CUST-123',
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+27 82 123 4567',
      orders: 3,
      totalSpent: 'R 1,350.00',
      lastOrder: '2023-12-05'
    },
    {
      id: 'CUST-124',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+27 71 234 5678',
      orders: 1,
      totalSpent: 'R 350.00',
      lastOrder: '2023-11-20'
    },
    {
      id: 'CUST-125',
      name: 'Michael Wong',
      email: 'michael@example.com',
      phone: '+27 63 345 6789',
      orders: 1,
      totalSpent: 'R 600.00',
      lastOrder: '2023-12-05'
    }
  ];

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would validate against secure credentials
    if (loginData.username === 'admin' && loginData.password === 'password') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: '', password: '' });
  };

  // Dashboard summary data
  const dashboardSummary = {
    totalOrders: mockOrdersData.length,
    completedOrders: mockOrdersData.filter(order => order.status === 'Completed').length,
    pendingOrders: mockOrdersData.filter(order => order.status === 'Pending').length,
    totalCustomers: mockCustomersData.length,
    newLeads: mockLeadsData.filter(lead => lead.status === 'New').length,
    revenue: 'R 2,600.00'
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        {!isLoggedIn ? (
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
              
              {loginError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {loginError}
                </div>
              )}
              
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-secondary-700 font-medium mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-secondary-400" />
                    </div>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={loginData.username}
                      onChange={handleLoginChange}
                      className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Enter your username"
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
              </form>
              
              <div className="mt-6 text-center text-sm text-secondary-600">
                <p>For demo purposes, use:</p>
                <p>Username: <span className="font-mono">admin</span></p>
                <p>Password: <span className="font-mono">password</span></p>
              </div>
            </div>
          </motion.div>
        ) : (
          <div>
            {/* Admin Header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="bg-primary-700 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">CapePolish Admin</h1>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              </div>
              
              {/* Navigation Tabs */}
              <div className="bg-white border-b border-secondary-200">
                <div className="flex overflow-x-auto">
                  <button
                    className={`px-4 py-3 font-medium text-sm ${
                      activeTab === 'dashboard' 
                        ? 'text-primary-600 border-b-2 border-primary-600' 
                        : 'text-secondary-600 hover:text-primary-600'
                    }`}
                    onClick={() => setActiveTab('dashboard')}
                  >
                    Dashboard
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-sm ${
                      activeTab === 'orders' 
                        ? 'text-primary-600 border-b-2 border-primary-600' 
                        : 'text-secondary-600 hover:text-primary-600'
                    }`}
                    onClick={() => setActiveTab('orders')}
                  >
                    Orders
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-sm ${
                      activeTab === 'leads' 
                        ? 'text-primary-600 border-b-2 border-primary-600' 
                        : 'text-secondary-600 hover:text-primary-600'
                    }`}
                    onClick={() => setActiveTab('leads')}
                  >
                    Leads
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-sm ${
                      activeTab === 'customers' 
                        ? 'text-primary-600 border-b-2 border-primary-600' 
                        : 'text-secondary-600 hover:text-primary-600'
                    }`}
                    onClick={() => setActiveTab('customers')}
                  >
                    Customers
                  </button>
                </div>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Dashboard */}
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          <FaClipboardList className="text-blue-600 w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-blue-800 text-sm font-medium">Total Orders</p>
                          <h3 className="text-3xl font-bold text-blue-900">{dashboardSummary.totalOrders}</h3>
                          <div className="mt-2 flex items-center">
                            <span className="text-sm text-blue-800">
                              <span className="font-medium">{dashboardSummary.completedOrders}</span> completed, 
                              <span className="font-medium"> {dashboardSummary.pendingOrders}</span> pending
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-green-100 p-3 rounded-full mr-4">
                          <FaUsers className="text-green-600 w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-green-800 text-sm font-medium">Customers</p>
                          <h3 className="text-3xl font-bold text-green-900">{dashboardSummary.totalCustomers}</h3>
                          <div className="mt-2 flex items-center">
                            <span className="text-sm text-green-800">
                              <span className="font-medium">{dashboardSummary.newLeads}</span> new leads
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-yellow-100 p-3 rounded-full mr-4">
                          <FaEnvelope className="text-yellow-600 w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-yellow-800 text-sm font-medium">Total Revenue</p>
                          <h3 className="text-3xl font-bold text-yellow-900">{dashboardSummary.revenue}</h3>
                          <div className="mt-2 flex items-center">
                            <span className="text-sm text-yellow-800">
                              From <span className="font-medium">{dashboardSummary.totalOrders}</span> orders
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-secondary-100">
                            <th className="px-4 py-2 rounded-l-lg">ID</th>
                            <th className="px-4 py-2">Customer</th>
                            <th className="px-4 py-2">Service</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2 rounded-r-lg">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockOrdersData.slice(0, 3).map(order => (
                            <tr key={order.id} className="border-b border-secondary-200">
                              <td className="px-4 py-3 font-medium">{order.id}</td>
                              <td className="px-4 py-3">{order.customer}</td>
                              <td className="px-4 py-3">{order.service}</td>
                              <td className="px-4 py-3">{order.date}</td>
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
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">New Leads</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-secondary-100">
                            <th className="px-4 py-2 rounded-l-lg">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Service</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2 rounded-r-lg">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockLeadsData.filter(lead => lead.status === 'New').map(lead => (
                            <tr key={lead.id} className="border-b border-secondary-200">
                              <td className="px-4 py-3 font-medium">{lead.name}</td>
                              <td className="px-4 py-3">{lead.email}</td>
                              <td className="px-4 py-3">{lead.phone}</td>
                              <td className="px-4 py-3">{lead.service}</td>
                              <td className="px-4 py-3">{lead.date}</td>
                              <td className="px-4 py-3">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {lead.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Orders */}
              {activeTab === 'orders' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Orders</h2>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                      Create Order
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-secondary-100">
                          <th className="px-4 py-2 rounded-l-lg">ID</th>
                          <th className="px-4 py-2">Customer</th>
                          <th className="px-4 py-2">Email</th>
                          <th className="px-4 py-2">Service</th>
                          <th className="px-4 py-2">Date</th>
                          <th className="px-4 py-2">Status</th>
                          <th className="px-4 py-2">Amount</th>
                          <th className="px-4 py-2 rounded-r-lg">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockOrdersData.map(order => (
                          <tr key={order.id} className="border-b border-secondary-200">
                            <td className="px-4 py-3 font-medium">{order.id}</td>
                            <td className="px-4 py-3">{order.customer}</td>
                            <td className="px-4 py-3">{order.email}</td>
                            <td className="px-4 py-3">{order.service}</td>
                            <td className="px-4 py-3">{order.date}</td>
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
                            <td className="px-4 py-3">
                              <div className="flex space-x-2">
                                <button className="p-1 text-blue-600 hover:text-blue-800" title="View">
                                  <FaEye />
                                </button>
                                {order.status === 'Pending' && (
                                  <button className="p-1 text-green-600 hover:text-green-800" title="Mark as Scheduled">
                                    <FaClock />
                                  </button>
                                )}
                                {order.status === 'Scheduled' && (
                                  <button className="p-1 text-green-600 hover:text-green-800" title="Mark as Completed">
                                    <FaCheck />
                                  </button>
                                )}
                                <button className="p-1 text-red-600 hover:text-red-800" title="Cancel">
                                  <FaTimes />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Leads */}
              {activeTab === 'leads' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Leads</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-secondary-100">
                          <th className="px-4 py-2 rounded-l-lg">ID</th>
                          <th className="px-4 py-2">Name</th>
                          <th className="px-4 py-2">Email</th>
                          <th className="px-4 py-2">Phone</th>
                          <th className="px-4 py-2">Service</th>
                          <th className="px-4 py-2">Date</th>
                          <th className="px-4 py-2">Status</th>
                          <th className="px-4 py-2 rounded-r-lg">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockLeadsData.map(lead => (
                          <tr key={lead.id} className="border-b border-secondary-200">
                            <td className="px-4 py-3 font-medium">{lead.id}</td>
                            <td className="px-4 py-3">{lead.name}</td>
                            <td className="px-4 py-3">{lead.email}</td>
                            <td className="px-4 py-3">{lead.phone}</td>
                            <td className="px-4 py-3">{lead.service}</td>
                            <td className="px-4 py-3">{lead.date}</td>
                            <td className="px-4 py-3">
                              <span 
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  lead.status === 'New' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {lead.status}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex space-x-2">
                                <button className="p-1 text-blue-600 hover:text-blue-800" title="View">
                                  <FaEye />
                                </button>
                                {lead.status === 'New' && (
                                  <button className="p-1 text-green-600 hover:text-green-800" title="Mark as Contacted">
                                    <FaCheck />
                                  </button>
                                )}
                                <button className="p-1 text-green-600 hover:text-green-800" title="Convert to Order">
                                  <FaClipboardList />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Customers */}
              {activeTab === 'customers' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Customers</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-secondary-100">
                          <th className="px-4 py-2 rounded-l-lg">ID</th>
                          <th className="px-4 py-2">Name</th>
                          <th className="px-4 py-2">Email</th>
                          <th className="px-4 py-2">Phone</th>
                          <th className="px-4 py-2">Orders</th>
                          <th className="px-4 py-2">Total Spent</th>
                          <th className="px-4 py-2">Last Order</th>
                          <th className="px-4 py-2 rounded-r-lg">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockCustomersData.map(customer => (
                          <tr key={customer.id} className="border-b border-secondary-200">
                            <td className="px-4 py-3 font-medium">{customer.id}</td>
                            <td className="px-4 py-3">{customer.name}</td>
                            <td className="px-4 py-3">{customer.email}</td>
                            <td className="px-4 py-3">{customer.phone}</td>
                            <td className="px-4 py-3">{customer.orders}</td>
                            <td className="px-4 py-3">{customer.totalSpent}</td>
                            <td className="px-4 py-3">{customer.lastOrder}</td>
                            <td className="px-4 py-3">
                              <div className="flex space-x-2">
                                <button className="p-1 text-blue-600 hover:text-blue-800" title="View">
                                  <FaEye />
                                </button>
                                <button className="p-1 text-green-600 hover:text-green-800" title="Create Order">
                                  <FaClipboardList />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 