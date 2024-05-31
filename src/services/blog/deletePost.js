import { PostError } from "../../errors/index.js"
import {softDelete} from "../post/index.js"


export default async (id) => {
    try {
        await softDelete(id)
    } catch (err) {
        throw new PostError(err.message, err.orig_error)
    }
}