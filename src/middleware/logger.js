const logger = store => next => action => {
  console.log("the action: ", action);
  console.log( next(action));
  console.log("the new state: ", store.getState());
};

export default logger;
