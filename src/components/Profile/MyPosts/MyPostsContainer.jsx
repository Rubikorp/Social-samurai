import {addPost, onPostChange} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePages.postData,
        newPostText: state.profilePages.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: ()=>{
//             dispatch(addPostCreator())
//         },
//         onPostChange: (text)=>{
//             let action = updateNewPostTextCreator(text)
//             dispatch(action)
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    onPostChange})(MyPosts);

export default MyPostsContainer;