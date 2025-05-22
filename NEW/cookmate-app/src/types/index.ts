// 레시피 관련 타입 정의
export interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  createdAt: string;
  userId: number;
  userName: string;
}

export interface Ingredient {
  name: string;
  amount: string;
}

export interface RecipeStep {
  stepNumber: number;
  description: string;
  imageUrl?: string;
}

// 사용자 관련 타입 정의
export interface User {
  id: number;
  name: string;
  email: string;
  profileImageUrl?: string;
}

// 응답 관련 타입 정의
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
} 