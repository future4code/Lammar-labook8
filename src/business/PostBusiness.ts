import { PostDatabase } from "../data/PostDatabase"
import { postIdDTO } from "../model/postDTO"
import { generatedId } from "../services/idGenerator"


export class PostBusiness {
       
    createPost = async(input:any): Promise<void> => {
        try{
            const { photo, description, type, createdAt, authorId } = input

            if (
                !photo || !description || !type || !createdAt || !authorId ){
                    throw new Error ('Preencha os campos "foto", "descrição", "tipo", "data de criação" e "Identificação do autor".')
                }
            
            const postId: string = generatedId()

            const postDatabase = new PostDatabase

            await postDatabase.createPost({
                id:postId,
                photo, 
                description, 
                type, 
                createdAt, 
                authorId
            })

        }catch (error:any) {
            throw new Error (error.message)
        }    
       }

       findPostById = async(input:any): Promise<any> => {
        try{

            const { postId } = input
            
                        if (
                            !postId ){
                                throw new Error ("Necessário passar o id")
                            }
                        
            const result:postIdDTO[] = await PostDatabase.findPostById(postId)     
                    if (!result[0]) {
                        throw new Error("Post não encontrado");
                    }
                    return result;
                } catch (error:any) {
                    throw new Error (error.message);
                }
            
            }       
}

// const postDatabase = new PostDatabase
            
//                         await postDatabase.findPostById(postId)
            
//                     }catch (error:any) {
//                         throw new Error (error.message)
//                     }    
//                    }