import image1 from '../../Assets/Image/User/avatar1.jpg'
import image2 from '../../Assets/Image/User/avatar2.jpg'
import image3 from '../../Assets/Image/User/avatar3.jpg'
import image4 from '../../Assets/Image/User/avatar4.jpg'

const initState = {
    users: [
        { id: 1, imageSrc: image1, name: "test1", password: "123456"},
        { id: 2, imageSrc: image2, name: "test2", password: "123456"},
        { id: 3, imageSrc: image3, name: "test3", password: "123456"},
        { id: 4, imageSrc: image4, name: "test4", password: "123456"},
        
    ],
    messages: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state, users: [...state.users]
            };
        case "UPDATE_USER":
            return state;
        case "DELETE_USER":
            // let user = state.users
            return state;
        default:
            return state;
    }
}
export default rootReducer;