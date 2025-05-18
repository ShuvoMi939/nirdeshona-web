'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { AuthUser } from 'aws-amplify/auth';

type ExtendedUser = AuthUser & {
  attributes?: {
    email?: string;
    [key: string]: any;
  };
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <Authenticator
          loginMechanisms={['email']}
          className="rounded-xl shadow-lg p-4 bg-white dark:bg-gray-800"
          components={{
            SignIn: {
              Header() {
                return (
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Sign In</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Use your email to login</p>
                  </div>
                );
              },
            },
          }}
        >
          {({ signOut, user }) => {
            const currentUser = user as ExtendedUser;
            return (
              <div className="text-center space-y-4 py-8">
                <h1 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                  Welcome, <span className="font-bold">{currentUser?.attributes?.email}</span>
                </h1>
                <button
                  onClick={signOut}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md"
                >
                  Sign Out
                </button>
              </div>
            );
          }}
        </Authenticator>
      </div>
    </div>
  );
}
