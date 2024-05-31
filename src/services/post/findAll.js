import { PostFindError } from "../../errors/index.js"
import {Post} from "../../models/index.js"

export default async (options) => {
    try {
        const {count, rows} = await Post.findAndCountAll(options)
        return {
            totalPosts: count,
            rows
        }
    } catch (err) {
        throw new PostFindError("Error al recuperar las publicaciones", err)
    }
    
}