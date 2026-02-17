import React, { useState, useEffect } from 'react';
import { Role, QuizItem } from './types';
import { AdminDashboard } from './components/AdminDashboard.tsx';
import { UserPortal } from './components/UserPortal.tsx';
import { Button } from './components/Button.tsx';

const App: React.FC = () => {
  const [role, setRole] = useState<Role>('NONE');

  // Seed a robust sample quiz for immediate testing
  useEffect(() => {
    const saved = localStorage.getItem('intelli_quizzes');
    if (!saved || JSON.parse(saved).length === 0) {
      const sampleQuiz: QuizItem = {
        id: 'sample-quiz-1',
        title: 'General Science & Space',
        description: 'A comprehensive assessment to test your knowledge of astronomy and earth sciences.',
        mediaType: 'image',
        mediaData: '', 
        createdAt: Date.now(),
        displayContextAlways: true,
        mainQuestionMediaType: 'image',
        mainQuestionMediaData: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200',
        subQuestions: [
          {
            id: 'sq-1',
            questionText: 'Which planet is the third from the Sun?',
            options: ['Venus', 'Earth', 'Mars', 'Jupiter'],
            correctAnswerIndex: 1
          },
          {
            id: 'sq-2',
            questionText: 'What is the closest star to Earth?',
            options: ['Alpha Centauri', 'Sirius', 'The Sun', 'Proxima Centauri'],
            correctAnswerIndex: 2
          },
          {
            id: 'sq-3',
            questionText: 'Which gas makes up the majority of Earth\'s atmosphere?',
            options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
            correctAnswerIndex: 2
          },
          {
            id: 'sq-4',
            questionText: 'Which planet is known as the Gas Giant?',
            options: ['Mars', 'Jupiter', 'Mercury', 'Venus'],
            correctAnswerIndex: 1
          }
        ]
      };
      localStorage.setItem('intelli_quizzes', JSON.stringify([sampleQuiz]));
      console.log("Sample quiz seeded successfully.");
    }
  }, []);

  if (role === 'ADMIN') {
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminDashboard onBack={() => setRole('NONE')} />
      </div>
    );
  }

  if (role === 'USER') {
    return (
      <div className="min-h-screen bg-[#FDFDFD]">
        <UserPortal onBack={() => setRole('NONE')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white p-6 overflow-hidden relative">
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>

      <div className="max-w-4xl w-full text-center z-10">
        <div className="inline-block p-4 rounded-3xl bg-white/10 backdrop-blur-md mb-8 border border-white/20">
           <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-7.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 12a3 3 0 100-6 3 3 0 000 6z"></path>
          </svg>
        </div>
        
        <h1 className="text-7xl font-black tracking-tighter mb-4 leading-none">
          IntelliQuiz <span className="text-indigo-400">Pro</span>
        </h1>
        <p className="text-2xl text-indigo-200/80 mb-12 max-w-2xl mx-auto font-medium">
          Professional assessment engine. Login to start testing!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Admin Block */}
          <div 
            className="group p-10 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer text-center"
            onClick={() => setRole('ADMIN')}
          >
            <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <h3 className="text-2xl font-black mb-2">Admin</h3>
            <p className="text-indigo-200/60 text-sm">Create and manage your contextual assessments.</p>
          </div>

          {/* Student Block */}
          <div 
            className="group p-10 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer text-center"
            onClick={() => setRole('USER')}
          >
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:-rotate-12 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            </div>
            <h3 className="text-2xl font-black mb-2">Student</h3>
            <p className="text-indigo-200/60 text-sm">View available quizzes and attempt exams.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;