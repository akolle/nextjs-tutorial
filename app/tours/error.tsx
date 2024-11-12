'use client'

function error({ error }: { error: Error }) {
  return <div>there was an error...{error.message}</div>
}
export default error
