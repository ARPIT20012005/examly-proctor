
import React from 'react';
import { Search, Calendar, Clock, BookOpen, Moon, Sun, BarChart, MessageCircle } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { useToast } from "@/components/ui/use-toast";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const StudentDashboard = () => {
  const { toast } = useToast();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  
  const mockExams = [
    {
      id: '1',
      title: 'Mathematics Final',
      subject: 'Mathematics',
      startTime: '2024-02-20T10:00:00',
      duration: '180',
      status: 'not_started'
    },
    {
      id: '2',
      title: 'Physics Mid-term',
      subject: 'Physics',
      startTime: '2024-02-22T14:00:00',
      duration: '120',
      status: 'not_started'
    }
  ];

  const mockPerformanceData = [
    { subject: 'Mathematics', score: 85 },
    { subject: 'Physics', score: 78 },
    { subject: 'Chemistry', score: 92 },
    { subject: 'Biology', score: 88 },
  ];

  const handleStartExam = (examId: string) => {
    toast({
      title: "Coming Soon",
      description: "Exam taking feature will be available soon.",
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Welcome, Student
              </h1>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Your upcoming exams are listed below
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={toggleDarkMode}
                className="p-2 rounded-full"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <div className="w-12 h-12 bg-gray-200 rounded-full">
                {/* Profile picture placeholder */}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : ''}`}>
                    Search Exams
                  </h2>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search exams..."
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                        ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
                    />
                  </div>
                  <Button variant="secondary">
                    Filter
                  </Button>
                </div>
              </Card>

              <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : ''}`}>
                  Upcoming Exams
                </h2>
                <div className="space-y-4">
                  {mockExams.map((exam) => (
                    <div
                      key={exam.id}
                      className={`border rounded-lg p-4 hover:shadow-md transition-shadow
                        ${isDarkMode ? 'border-gray-700 bg-gray-700/50' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : ''}`}>
                            {exam.title}
                          </h3>
                          <div className={`flex items-center gap-4 mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              <span>{exam.subject}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(exam.startTime).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{exam.duration} minutes</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() => handleStartExam(exam.id)}
                        >
                          Start Exam
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                <h2 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : ''}`}>
                  <BarChart className="w-5 h-5" />
                  Performance Analytics
                </h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={mockPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="subject" 
                        stroke={isDarkMode ? '#9CA3AF' : '#4B5563'}
                      />
                      <YAxis 
                        stroke={isDarkMode ? '#9CA3AF' : '#4B5563'}
                      />
                      <Tooltip />
                      <Bar dataKey="score" fill="#3B82F6" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                <h2 className={`text-xl font-semibold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : ''}`}>
                  <MessageCircle className="w-5 h-5" />
                  Support Chat
                </h2>
                <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>Chat support will be available during exams</p>
                  <Button
                    variant="secondary"
                    className="mt-4"
                    onClick={() => toast({ title: "Chat support coming soon" })}
                  >
                    Contact Support
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
