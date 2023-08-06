const authService = {
    login: async (username, password) => {
    
        console.log('Logging in', username, password);
        return Promise.resolve();
    },
    register: async (name, email, password) => {
        console.log('Registering', name, email, password);
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          });
          const responseData = await response.json(); 

        if (!response.ok) {
        console.error('Server response:', responseData); 
        throw new Error('Failed to register user');
        }

        return responseData;
        },
      };

  export default authService;
  