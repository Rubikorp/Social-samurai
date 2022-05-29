import ProfileReducer, {addPost, deletePost} from "./profile-reducer";
let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', like: 3},
        {id: 2, message: 'Its my first post', like: 4}
    ],
}


test('length of posts should be incremented',
    () => {
        // 1. test data
        let action = deletePost(1)


        // 2. action
        let newState = ProfileReducer(initialState, action)

        // 3. expectation
        // expect(newState.postData.length).toBe(3);
        // expect(newState.postData[0].message).toBe("Hello");
        expect(newState.postData.length).toBe(1)
    });
