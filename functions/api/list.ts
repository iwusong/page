import { D1Database } from '@cloudflare/workers-types'

interface Env {
  db: D1Database
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const a = await context.request.json<any>()

  if (a.user) {
    const ps = context.env.db.prepare('SELECT * from activity_record')
    const { results } = await ps.all()
    return Response.json(results)
  } else {
    return Response.json({ err: 'user no found' })
  }
}
