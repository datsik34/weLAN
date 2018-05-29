export default function filter(state=false, action){

  if(action.type === 'openFilter'){
    return true;

  } else if ( action.type === 'closeFilter' ) {
    return false;

  } else {
    return state;

  }

}
