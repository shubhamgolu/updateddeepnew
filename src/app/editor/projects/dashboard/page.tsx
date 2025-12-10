"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserData {
  username: string;
  id?: number;
  name?: string;
  email?: string;
  [key: string]: unknown; // Allow for additional properties
}

export default function Dashboard() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = (): void => {
      try {
        const userData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
        
        if (!userData) {
          // No user data found, redirect to login
          router.push('/');
          return;
        }

        const parsedUser: UserData = JSON.parse(userData);
        setUser(parsedUser);
        setLoading(false);
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/');
      }
    };
                 
    checkAuth();
  }, [router]);
               
  const handleLogout = (): void => {
    // Clear all stored data
    localStorage.removeItem('userData');
    localStorage.removeItem('username');
    sessionStorage.removeItem('userData');
    
    // Redirect to login without page reload
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
                                                                                                           
                                                                                                                      
                                                                                                     
                                                                                                                             
                                                                                 
  return (
                                      
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.username || 'User'}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-150"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

                                                                                                                                                                                                            

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96 p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome to Your Dashboard
              </h2>
              <p className="text-gray-600 mb-8">
                You have successfully logged in without page reload!
              </p>
              
              {/* User Info Card */}
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    User Information
                  </div>
                  <p className="mt-2 text-gray-500">
                    Username: <span className="font-medium text-gray-800">{user?.username}</span>
                  </p>
                  <p className="mt-1 text-gray-500">
                    Login Time: <span className="font-medium text-gray-800">{new Date().toLocaleString()}</span>
                  </p>
                  {user?.name && (
                    <p className="mt-1 text-gray-500">
                      Name: <span className="font-medium text-gray-800">{user.name}</span>
                    </p>
                  )}
                     
                  {user?.email && (
                    <p className="mt-1 text-gray-500">
                      Email: <span className="font-medium text-gray-800">{user.email}</span>
                    </p>
                  )}
                </div>
              </div>
        

                                                                                                                                    
                                                                                                                                                                          
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
                      <p className="text-2xl font-bold text-gray-700">12</p>
                    </div>
                  </div>
                </div>
                                                                                                                                                      
                                                                                                                                                               


                                                                                                                                                                                                

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Tasks</h3>
                      <p className="text-2xl font-bold text-gray-700">24</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Team</h3>
                      <p className="text-2xl font-bold text-gray-700">8</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: 'Logged in', time: 'Just now', icon: '🔐' },
                      { action: 'Updated profile', time: '2 hours ago', icon: '👤' },
                      { action: 'Completed task', time: '4 hours ago', icon: '✅' },
                      { action: 'Created project', time: '1 day ago', icon: '📁' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <span className="text-lg mr-3">{activity.icon}</span>
                          <span className="text-gray-700">{activity.action}</span>
                        </div>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}