import { UserDatabase } from "../data/UserDatabase"
import { generatedId } from "../services/idGenerator"


export class UserBusiness {
       
    createtUser = async(input:any): Promise<void> => {
        try{
            const { name, email, password } = input

            if (
                !name || !email || !password ){
                    throw new Error ('Preencha os campos "nome", "email", e "senha".')
                }
            
            if (password.lenght<6){
                throw new Error ("Senha muito curta.")
            }

            const id: string = generatedId()

            const userDatabase = new UserDatabase

            await userDatabase.createUser({
                id,
                name,
                email,
                password
            })

        }catch (error:any) {
            throw new Error (error.message)
        }    
       }
}