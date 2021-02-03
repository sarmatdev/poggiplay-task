import httpClient from './httpClient'

export const searchPackages = (query) => {
  return httpClient.get(`/search?text=${query}&size=250`)
}
