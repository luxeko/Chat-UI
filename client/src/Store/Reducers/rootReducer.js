const initState = {
    users: [],
    rooms: [
        {id: 'room1', name: "Room 1", createrName: "Duc Anh", createdDate: "06/09/2022"},
        {id: 'room2', name: "Room 2", createrName: "Nam", createdDate: "16/09/2022"},
        {id: 'room3', name: "Room 3", createrName: "Quang", createdDate: "02/09/2022"},
    ],
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_ROOM":
            return {
                ...state,
                rooms: [...state.rooms, action.payload]
            };

        case "CREATE_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case "DELETE_ROOM":
            // let user = state.users
            return state;
        case "READ_USER":
            return state;
        default:
            return state;
    }
}
export default rootReducer;