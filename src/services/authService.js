const authService = {
    login: async (username, password) => {
    
        console.log('Logging in', username, password);
        return Promise.resolve();
    },
    register: async (username, password) => {
        console.log('Registering', username, password);
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
      
          if (!response.ok) {
            throw new Error('Failed to register user');
          }
      
          return response.json();
        },
      };

  export default authService;
  