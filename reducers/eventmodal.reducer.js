export default function eventModal (state={ clickCardEvent: false } , action){

  if(action.type==='viewEvent'){

    console.log('clic détécté !!!!');
    console.log(action.titleLan);
    return state;

  } else {
    return state;
  }

}
