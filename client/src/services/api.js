// API service for the Smart Library
const API_BASE_URL = 'http://localhost:5000/api';

// User API calls
export const userAPI = {
  createUser: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },
  
  getUser: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
};

// Book API calls
export const bookAPI = {
  getBooks: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/books`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  },
  
  getBookById: async (bookId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/books/${bookId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching book:', error);
      throw error;
    }
  },
  
  createBook: async (bookData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating book:', error);
      throw error;
    }
  }
};

// Loan API calls
export const loanAPI = {
  createLoan: async (loanData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/loans`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loanData)
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating loan:', error);
      throw error;
    }
  },
  
  getUserLoans: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/loans/${userId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching user loans:', error);
      throw error;
    }
  },
  
  returnBook: async (loanId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/loans/returns`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loan_id: loanId })
      });
      return await response.json();
    } catch (error) {
      console.error('Error returning book:', error);
      throw error;
    }
  }
};

// Stats API calls
export const statsAPI = {
  getSystemOverview: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/stats/overview`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching system overview:', error);
      throw error;
    }
  },
  
  getPopularBooks: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/stats/books/popular`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching popular books:', error);
      throw error;
    }
  }
};
