const authService = {
    login: async (username, password) => {
    
        console.log('Logging in', username, password);
        return Promise.resolve();
    },
};
  
  export default authService;
  