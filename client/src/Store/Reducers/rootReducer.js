import image1 from '../../Assets/Image/User/avatar1.jpg'
import image2 from '../../Assets/Image/User/avatar2.jpg'
import image3 from '../../Assets/Image/User/avatar3.jpg'
import image4 from '../../Assets/Image/User/avatar4.jpg'
const initState = {
    users: [],
    messages: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            const random = Math.floor(Math.random() * 4);
            switch (random) {
                case 0:
                    action.payload.imageSrc = image1
                    break;
                case 1:
                    action.payload.imageSrc = image2
                    break;
                case 2:
                    action.payload.imageSrc = image3
                    break;
                case 3:
                    action.payload.imageSrc = image4
                    break;
                default:
                    break;
            }
            const getCurrentUser = JSON.parse(localStorage.getItem("users"));
            const getNewUser = action.payload;
            console.log(getCurrentUser);
            if(getCurrentUser !== null){
                if(getCurrentUser.length > 1) {
                    const user = [...getCurrentUser, getNewUser]
                    localStorage.setItem("users", JSON.stringify(user))
                    console.log(user);
                } else {
                    const user = [getCurrentUser,getNewUser]
                    localStorage.setItem("users", JSON.stringify(user))
                }
                
                // console.log(user);
            } else {
                const user = getNewUser
                localStorage.setItem("users", JSON.stringify(user))
            }
            return {
                ...state, users: [...state.users, action.payload]
            };
        case "UPDATE_USER":
            return state;
        case "DELETE_USER":
            // let user = state.users
            return state;
        case "READ_USER":
            return state;
        default:
            return state;
    }
}
export default rootReducer;