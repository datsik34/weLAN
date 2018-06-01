export default function log(state=null, action){
  if (action.type === 'login') {
    console.log(action);
    return state;
  }else if (action.type === 'signup') {
    return state;
  }else {
    return state;
  }
}
