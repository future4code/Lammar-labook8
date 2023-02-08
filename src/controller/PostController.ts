import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness" 
import { PostInputDTO } from "../model/postDTO"


export class PostController {
    
    public createPost = async(req: Request, res: Response): Promise<void> => {
        try {
            
            const input: PostInputDTO = {
                id: req.body.id,
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                createdAt: req.body.createdAt,
                authorId: req.body.authorId
            };

            const postBusiness = new PostBusiness()

            await postBusiness.createPost(input)

            res.status(201).send({message: "Post criado!"}); 
        }catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    public findPostById = async(req: Request, res: Response): Promise<any> => {
        try {
            
            const input: any = {
                postId: req.body.postId,
               
            };

            const postBusiness = new PostBusiness()

            await postBusiness.findPostById(input)

            res.status(201).send({message:input}); 
        }catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}
