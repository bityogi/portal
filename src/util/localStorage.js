
export const loadState = () => {
  try {
    console.log('getting persisted state!');
    const serializedState = localStorage.setItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err) {
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
