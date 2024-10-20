import { ITag } from "@/interfaces/tags.interface"
import { IStrapiData } from "./strapi.interface"
import { IUpload } from "./upload.interface"

export interface IProject extends IStrapiData {
  coverImage: IUpload
  media: IUpload[]
  tags: ITag[]
  title: string
}