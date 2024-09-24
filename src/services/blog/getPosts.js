import { PostSearchError } from "../../errors/index.js"
import {findAll} from "../../repositories/post/index.js"

export default async ({page, category = ""}) => {
    try {
        const pageSize = 5
        const searchParameters = {
            pageSize,
            page,
            published: true
        }
 
        if(category) {
            searchParameters.category = category
        }
        
        let results = await findAll({searchParameters})
        const totalPages = Math.ceil(results.totalPosts / pageSize)

        if(totalPages < page){
            searchParameters.offset = 0
            results = await findAll({searchParameters})
            results.currentPage = 1
        } else results.currentPage = page
        
        results.totalPages = totalPages
        return results
    } catch (err) {
        throw new PostSearchError("Error al recuperar las publicaciones", err)
    }
}