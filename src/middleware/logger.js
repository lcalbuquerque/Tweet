const logger = store => next => action => {
  console.log('Action: ', action);
  console.log('Next: ',  next(action));
  console.log('New state: ', store.getState());
};

export default logger;