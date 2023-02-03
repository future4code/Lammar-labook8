import { app } from "./app";

import { UserController } from "./controller/UserController";
import { PostController } from "./controller/PostController";

// User
const userController = new UserController
app.post('/create', userController.createUser)


// Post
const postController = new PostController
app.post('/post', postController.createPost)
app.get('/find', postController.findPostById)


// Friendship
// const friendshipController = new FriendshipController()
// friendshipRouter.post("/post", friendshipController.createFriendship)
// friendshipRouter.get("/posts/getAll", friendshipController.getAll)