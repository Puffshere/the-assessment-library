// store/index.js

export const state = () => ({
    phoneNumber: '1 (206) 400-6647'
  });
  
  export const getters = {
    formattedPhoneNumber: (state) => {
      return state.phoneNumber;
    }
  };
  