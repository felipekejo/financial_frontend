import { api } from './api-client'

interface sigInWithPasswordRequest {
  email: string
  password: string
}

interface sigInWithPasswordResponse {
  token: string
}

export async function sigInWithPassword({
  email,
  password,
}: sigInWithPasswordRequest) {
  const result = await api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<sigInWithPasswordResponse>()

  return result
}
