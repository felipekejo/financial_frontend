import { HttpResponse, http } from 'msw'

export const sigInWithPasswordMock = http.post('sessions/password', () => {
  return new HttpResponse(null, { status: 401 })
})
