
import React from 'react';
import { Search, Calendar, Clock, BookOpen } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { useToast } from "@/components/ui/use-toast";

const StudentDashboard = () => {
  const { toast } = useToast();
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

  const handleStartExam = (examId: string) => {
    toast({
      title: "Coming Soon",
      description: "Exam taking feature will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, Student</h1>
            <p className="text-gray-600 mt-2">Your upcoming exams are listed below</p>
          </div>
          <div className="w-12 h-12 bg-gray-200 rounded-full">
            {/* Profile picture placeholder */}
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Search Exams</h2>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search exams..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button
                variant="secondary"
                onClick={() => toast({ title: "Filter coming soon" })}
              >
                Filter
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Upcoming Exams</h2>
            <div className="space-y-4">
              {mockExams.map((exam) => (
                <div
                  key={exam.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{exam.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-gray-600">
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
      </div>
    </div>
  );
};

export default StudentDashboard;
