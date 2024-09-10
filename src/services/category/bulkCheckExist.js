import { CategoryError, CategoryNotFoundError } from "../../errors/index.js"
import {Category} from "../../models/index.js"

export default async ({values, type}) => {
    const categoriesChecks = values.map(value => 
        Category.findOne({where: {[type]: value}})
        .then(category => {
            if(!category) throw new CategoryNotFoundError("Al menos una de las categorias no existen o fueron eliminadas")
        })
        .catch(err => {
            if(err instanceof CategoryNotFoundError) throw err
            throw new CategoryError("Hubo un error" , err)
        })
    )
    await Promise.all(categoriesChecks)
    return true    
}