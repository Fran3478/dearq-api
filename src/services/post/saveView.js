import {PostView} from "../../models/index.js"
import { PostViewCreationError } from "../../errors/index.js"

export default async ({title, img, img_title}) => {
    try {
        const view = await PostView.create({title, img, img_title})
        return view
    } catch (error) {
        throw new PostViewCreationError("Error al almacenar la vista previa", err)
    }
}