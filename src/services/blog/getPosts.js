import { PostFindError } from "../../errors/index.js"
import findAll from "../post/findAll.js"

export default async ({page, category = ""}) => {
    try {
        const pageSize = 5
        const options = {
            limit: pageSize,
            offset: (page - 1) * pageSize,
            where: {
                deleted: false,
                published: true
            }
        }
 
        if(category) {
            options.where = {...options.where, category: category}
        }
        
        let results = await findAll(options)
        const totalPages = Math.ceil(results.totalPosts / pageSize)

        if(totalPages < page){
            options.offset = 0
            results = await findAll(options)
            results.currentPage = 1
        } else results.currentPage = page
        
        results.totalPages = totalPages
        return results
    } catch (err) {
        throw new PostFindError("Error al recuperar las publicaciones", err)
    }
}