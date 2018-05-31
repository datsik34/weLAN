export default function eventModal (state={ eventIsSelected: false, titleLan: null, author: null, description: null, maxPeople : null, startDate: null, endDate: null , address: null, minAge: null, maxAge: null, smoker: null} , action){

  if(action.type==='openEventPopup'){
    return { eventIsSelected: true,
      titleLan: action.titleLan,
      author: action.author,
      description: action.description,
      maxPeople: action.maxPeople,
      startDate: action.startDate,
      endDate: action.endDate,
      address: action.address,
      minAge: action.minAge,
      maxAge: action.maxAge,
      smoker: action.smoker
    };

  } else if (action.type==='closeEventPopup'){
    return { eventIsSelected: false,
      titleLan: null,
      author: null,
      description: null,
      maxPeople: null,
      startDate: null,
      endDate: null,
      address: null,
      minAge: null,
      maxAge: null,
      smoker: null
    };

  } else {
    return state;
  }

}
