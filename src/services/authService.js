const authService = {
    login: async (username, password) => {
    
        console.log('Logging in', username, password);
        return Promise.resolve();
    },
    register: async(username, password) => {
        console.log('Registering', username, password);
    
    return Promise.resolve();
    }
};

  export default authService;
  