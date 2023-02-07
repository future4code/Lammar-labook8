import { postIdDTO, PostInputDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";



export class PostDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_posts";

    createPost = async(post:PostInputDTO): Promise<void> => {
        try{
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                createdAt: post.createdAt,
                authorId: post.authorId

            }).into('labook_posts')
        }catch (error:any) {
            throw new Error (error.message)
        }    
       }

       findPostById = async(postId:string): Promise<any> => {
        try{
           const posts: postIdDTO[] = [];
           const result = await PostDatabase.connection
           .select("*")
           .from(PostDatabase.TABLE_NAME)
           .where({id:postId});

        }catch (error:any) {
            throw new Error (error.message)
        }    
       }
    static findPostById: any;
}
