

export interface PostInputDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 };

 export interface postIdDTO {
    id: string
 };