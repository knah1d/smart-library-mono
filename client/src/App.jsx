import { useState } from 'react';
import BookSection from './components/BookSection';
import UserSection from './components/UserSection';
import LoanSection from './components/LoanSection';
import StatsSection from './components/StatsSection';

function App() {
  const [activeTab, setActiveTab] = useState('books');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Smart Library - API Testing Client</h1>
          <p className="text-sm opacity-80">A simple interface to test the Smart Library API</p>
        </div>
      </header>
      
      <main className="container mx-auto py-6 px-4">
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('books')}
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'books'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Books
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'users'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Users
              </button>
              <button
                onClick={() => setActiveTab('loans')}
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'loans'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Loans
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'stats'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Stats
              </button>
            </nav>
          </div>
        </div>
        
        <div className="mt-4">
          {activeTab === 'books' && <BookSection />}
          {activeTab === 'users' && <UserSection />}
          {activeTab === 'loans' && <LoanSection />}
          {activeTab === 'stats' && <StatsSection />}
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        <p>Smart Library System - Simple API Testing Client</p>
      </footer>
    </div>
  );
}

export default App
