export async function onRequest(context) {
  const a = await context.request.json()
  console.log(Boolean(''))
  console.log(Boolean('1'))
  console.log(Boolean(1))
  console.log(Boolean(0))
  console.log(Boolean(null))
  console.log(Boolean(undefined))

  if (a.user) {
    const ps = context.env.db.prepare('SELECT * from activity_record')
    const { results } = await ps.all()
    return Response.json(results)
  } else {
    return Response.json({ err: 'user no found' })
  }
}
