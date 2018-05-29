export default function filter(state=false, action){

  if(action.type === 'openFilter'){
    console.log('Ouvrir le filtre !');
    console.log(state);
    return true;

  } else if ( action.type === 'closeFilter' ) {
    console.log('Fermer le filtre !')
    console.log(state);
    return false;

  } else {
    return state;

  }

}
