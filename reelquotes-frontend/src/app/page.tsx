import React from 'react';
import Image from "next/image";

export default function Home() {
  const testApiConnection = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        console.error('NEXT_PUBLIC_API_URL is not configured');
        return;
      }
      
      const response = await fetch(`${apiUrl}/health`);
      if (response.ok) {
        console.log('✅ Successfully connected to backend API');
      } else {
        console.log('❌ Backend API responded with error:', response.status);
      }
    } catch (error) {
      console.error('❌ Failed to connect to backend API:', error);
    }
  };

  React.useEffect(() => {
    testApiConnection();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ReelQuotes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover memorable quotes from your favorite movies
          </p>
        </div>
        
        <div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg max-w-md">
          <p className="text-sm">
            🎉 <strong>Frontend Successfully Deployed!</strong><br/>
            Check the browser console to see API connection test results.
          </p>
        </div>

        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-md">
          <li className="mb-2 tracking-[-.01em]">
            ✅ AWS Amplify hosting configured
          </li>
          <li className="mb-2 tracking-[-.01em]">
            ✅ CI/CD pipeline activated  
          </li>
          <li className="mb-2 tracking-[-.01em]">
            🔄 Backend API connection testing
          </li>
          <li className="tracking-[-.01em]">
            🚀 Ready for development!
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="rounded-full border border-solid border-green-500 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 px-6 py-3 font-medium text-sm">
            Environment: Staging
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
            API: {process.env.NEXT_PUBLIC_API_URL || 'Not configured'}
          </div>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ReelQuotes • Staging Environment • Story 1.8 Implementation
        </p>
      </footer>
    </div>
  );
}
