
export type Role = 'ADMIN' | 'USER' | 'NONE';

export interface SubQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface QuizItem {
  id: string;
  title: string;
  description: string;
  mediaType: 'image' | 'pdf';
  mediaData: string; // Base64 context/source material
  subQuestions: SubQuestion[];
  createdAt: number;
  displayContextAlways: boolean;
  mainQuestionMediaType?: 'image' | 'pdf';
  mainQuestionMediaData?: string; // Optional separate visual for the main question
}

export interface UserResponse {
  quizId: string;
  subQuestionId: string;
  selectedOptionIndex: number;
}

export interface UserState {
  name: string;
  responses: UserResponse[];
}

export interface QuizReport {
  id: string;
  userName: string;
  quizTitle: string;
  score: number;
  total: number;
  timestamp: number;
  quizId: string;
}
