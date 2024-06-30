import { api } from './api-client'

interface sigUpWithPasswordRequest {
  name: string
  email: string
  password: string
}

interface sigUpWithPasswordResponse {
  token: string
}

export async function sigUpWithPassword({
  name,
  email,
  password,
}: sigUpWithPasswordRequest) {
  await api
    .post('register', {
      json: {
        name,
        email,
        password,
      },
    })
    .json<sigUpWithPasswordResponse>()
}
