export const apiUrl = 'http://localhost:1337'

export const getProjects = async (id?: string) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  const filterById = id ? `/${id}` : ''
  const populate = `?populate[tags]=*&populate[coverImage]=*&populate[media]=*`
  try {
    const response = await fetch(`${apiUrl}/api/projects${filterById}${populate}`, requestOptions)
    if(!response.ok) throw new Error('Could not fetch project(s)')
    const projects = await response.json()
    return projects
  } catch (error) {
    console.error(error)
  }
}

export const getTags = async (id?: string) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  const filterById = id ? `/${id}` : ''
  try {
    const response = await fetch(`${apiUrl}/api/tags${filterById}`, requestOptions)
    if(!response.ok) throw new Error('Could not fetch tag(s)')
    const tags = await response.json()
    return tags.data
  } catch (error) {
    console.error(error)
    return []
  }
}
