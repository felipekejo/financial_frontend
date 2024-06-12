'use server'

export async function sigInWithEmailAndPassword(data: FormData) {
  console.log(Object.fromEntries(data))
}
