import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Building Management System</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Announcements */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Latest Announcements</h2>
              <ul className="space-y-4">
                <li className="text-gray-600">
                  <span className="text-sm text-gray-500">2024-04-12</span>
                  <p>Annual Elevator Maintenance Notice</p>
                </li>
                <li className="text-gray-600">
                  <span className="text-sm text-gray-500">2024-04-10</span>
                  <p>Building Committee Meeting Minutes</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
              <div className="space-y-3">
                <Link href="/maintenance" className="block text-blue-600 hover:text-blue-800">
                  Maintenance Request
                </Link>
                <Link href="/payments" className="block text-blue-600 hover:text-blue-800">
                  Pay Utilities (Water/Electricity)
                </Link>
                <Link href="/documents" className="block text-blue-600 hover:text-blue-800">
                  Download Documents
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <div className="space-y-2 text-gray-600">
                <p>Emergency Contact: 000-000-000</p>
                <p>Building Manager Office: Room 101</p>
                <p>Office Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Building Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
