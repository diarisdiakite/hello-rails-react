// app/javascript/features/greetings/redux/actions.js
export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  payload: greeting,
});

export const fetchRandomGreeting = () => {
  // Implement logic to fetch data from your Rails API endpoint
  return async (dispatch) => {
    try {
      const response = await fetch('/random_greeting');
      const data = await response.json();
      dispatch(setGreeting(data.greeting));
    } catch (error) {
      console.error('Error fetching random greeting:', error);
    }
  };
};
