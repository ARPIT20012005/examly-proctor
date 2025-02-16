
import React from 'react';
import { PlusCircle, List, Users } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { useToast } from "@/components/ui/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();

  const handleCreateExam = () => {
    toast({
      title: "Coming Soon",
      description: "Exam creation feature will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <PlusCircle className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Create Exam</h2>
              <p className="text-gray-600 mb-4">
                Create a new exam with custom questions
              </p>
              <Button
                variant="primary"
                onClick={handleCreateExam}
                className="w-full"
              >
                Create New Exam
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <List className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Manage Exams</h2>
              <p className="text-gray-600 mb-4">
                View and manage existing exams
              </p>
              <Button
                variant="secondary"
                onClick={() => toast({ title: "Coming Soon" })}
                className="w-full"
              >
                View Exams
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Student Management</h2>
              <p className="text-gray-600 mb-4">
                Manage student access and results
              </p>
              <Button
                variant="secondary"
                onClick={() => toast({ title: "Coming Soon" })}
                className="w-full"
              >
                Manage Students
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="text-gray-600">
              No recent activity to display.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
