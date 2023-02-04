
// import { BaseDatabase } from "./BaseDatabase";
// import { friend, FriendshipInputDTO } from "../model/friendshipDTO";


// export class FriendshipDatabase extends BaseDatabase {
   
//     createFriendship = async(user:any): Promise<void> => {
//         try{
//             const friends: FriendshipInputDTO[] = []
//             await FriendshipDatabase.connection.insert({
//                 id: friend.id,
//                 friend_id:friend.friendId,
//                 author_id: friend.authorId

//                  }).into('labook_users_friendship')
//         }catch (error:any) {
//             throw new Error (error.message)
//         }    
//        }

// }