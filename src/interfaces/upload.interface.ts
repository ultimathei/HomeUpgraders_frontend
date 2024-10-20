import { IStrapiData } from "./strapi.interface"

interface IUploadDetails {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  size: number
  width: number
  height: number
}

export interface IUploadFormat extends IUploadDetails {
  path: string|null
}

export interface IUpload extends IStrapiData, IUploadDetails {
  alternativeText: string|null
  caption: string|null
  formats: {
    large: IUploadFormat
    small: IUploadFormat
    medium: IUploadFormat
    thumbnail: IUploadFormat
  }
}