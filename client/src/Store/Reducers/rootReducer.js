const initState = {
    users: [
        {id: '1', 
        name: "Duc Anh", 
        room: [
            {idRoom: "room1", nameRoom: "Room 1",createdDate: "06/09/2022" },
            {idRoom: "room2", nameRoom: "Room 2",createdDate: "02/09/2022" },
            ]
        }
    ],
    messages: [],
    rooms: [
        {id: 'room1', name: "Room 1", createrId: "1", createdDate: "06/09/2022"},
        {id: 'room2', name: "Room 2", createrId: "1", createdDate: "16/09/2022"},
        {id: 'room3', name: "Room 3", createrId: "1", createdDate: "02/09/2022"},
    ],
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_ROOM":
            const getNewRoom = action.payload;
            console.log(getNewRoom);
            state = {
                ...state,
                rooms: [...state.rooms, action.payload]
            }
            console.log(state);
            // const [test, setTest] = usingLocalStorage("data")
            localStorage.setItem('data', JSON.stringify(state))
            // return {
            //     ...state, rooms: [...state.rooms, action.payload]
            // };
            return state;

        case "UPDATE_ROOM":
            return state;
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