'use client';
import withAuth from '../lib/withAuth';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Dashboard</h1>
        <p className="text-gray-700">Welcome to your dashboard! Here's what you can do:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg">
            <h2 className="font-semibold text-lg mb-2">Profile</h2>
            <p className="text-sm text-gray-600">View and edit your personal info.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow hover:shadow-lg">
            <h2 className="font-semibold text-lg mb-2">Settings</h2>
            <p className="text-sm text-gray-600">Manage your preferences.</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg shadow hover:shadow-lg">
            <h2 className="font-semibold text-lg mb-2">Messages</h2>
            <p className="text-sm text-gray-600">Check your recent messages.</p>
          </div>
          <div className="p-6 bg-red-50 rounded-lg shadow hover:shadow-lg">
            <h2 className="font-semibold text-lg mb-2">Logout</h2>
            <p className="text-sm text-gray-600">Sign out of your account.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
