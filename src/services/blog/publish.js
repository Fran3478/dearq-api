import { PostUpdateError } from "../../errors/index.js"
import getPost from "../post/getPost.js"
import publishPost from "../post/publishPost.js"

export default async ({id}) => {
    try {
        const post = await getPost(id)
        if(post.published) throw new PostUpdateError("El post ya se encuentra publicado")
        await publishPost(post)
    } catch (error) {
        
    }
}