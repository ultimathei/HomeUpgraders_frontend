import { IUpload } from "@/interfaces/upload.interface"
import { apiUrl } from "@/services/projects.service"

export const getImageUrl = (upload: IUpload, format?: 'large'|'medium'|'small'|'thumbnail') => {
  const url = upload.formats[format||'large']?.url || ''
  if(!url) return ''
  return `${apiUrl}${url}`
}