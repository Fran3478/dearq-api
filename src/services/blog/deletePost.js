import { PostError, PostNotFoundError } from "../../errors/index.js"
import {softDelete} from "../post/index.js"

export default async (id) => {
    try {
        await softDelete(id)
    } catch (err) {
        if(err instanceof PostNotFoundError) throw new PostNotFoundError(err.message, err.orig_error)
        throw new PostError(err.message, err.orig_error)
    }
}