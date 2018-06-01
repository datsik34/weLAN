export default function log(state=null, action){
  if (action.type === 'login') {
    console.log(action.email);
    console.log(action.pwd);
    return state;
  }else if (action.type === 'signup') {
    return state;
  }else {
    return state;
  }
}
