const authService = {
    login: async (username, password) => {
    
        console.log('Logging in', username, password);
        return Promise.resolve();
    },
    register: async (name, email, password) => {
        console.log('Registering', name, email, password);
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          });
      
          if (!response.ok) {
            throw new Error('Failed to register user');
          }
      
          return response.json();
        },
      };

  export default authService;
  