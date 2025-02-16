
import React, { useState } from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { LockIcon, BookOpen } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Examly Proctor
          </h1>
          <p className="text-lg text-gray-600">
            Secure Online Examination Platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 px-4">
          <Card className="hover-lift">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Take Exam</h2>
              <p className="text-gray-600 mb-4">
                Start your examination in a secure environment
              </p>
              <Button
                variant="primary"
                onClick={() => setIsLoading(true)}
                disabled={isLoading}
              >
                Start Exam
              </Button>
            </div>
          </Card>

          <Card className="hover-lift">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <LockIcon className="w-6 h-6 text-gray-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Admin Portal</h2>
              <p className="text-gray-600 mb-4">
                Manage exams and monitor students
              </p>
              <Button
                variant="secondary"
                onClick={() => setIsLoading(true)}
                disabled={isLoading}
              >
                Login as Admin
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
