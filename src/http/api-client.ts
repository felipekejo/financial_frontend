import { env } from '@/lib/env'
import ky from 'ky'

export const api = ky.create({
  prefixUrl: env.API_URL,
})
