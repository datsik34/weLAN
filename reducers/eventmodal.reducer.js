export default function eventModal (state={ eventIsSelected: false, titleLan: null, author: null, description: null, maxPeople : null, date: null } , action){

  if(action.type==='viewEvent'){
    return { eventIsSelected: true,
      titleLan: action.titleLan,
      author: action.author,
      description: action.description,
      maxPeople: action.maxPeople,
      date: action.date
    };

  } else if (action.type==='closeEventPopup'){
    return { eventIsSelected: false,
      titleLan: null,
      author: null,
      description: null,
      maxPeople: null,
      date: null
    };

  } else {
    return state;
  }

}
