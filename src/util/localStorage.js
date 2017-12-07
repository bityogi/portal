
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      console.log('GETTING PERSISTED STATE (NOTHING FOUND)! ');
      return undefined;
    }
    console.log('GETTING PERSISTED STATE! ', JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch(err) {
    console.error('Error getting persisted state. ', err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    console.log('persisting state to localStorage: ', state);
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState);
  } catch (err) {
    // Ignore write errors.
  }
}
