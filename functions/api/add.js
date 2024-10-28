export async function onRequestPost(context) {
  const a = await context.request.json()
  const a1 = a.desc
  const a2 = a.user
  // Create a prepared statement with our query
  const ps = context.env.db
    .prepare(' INSERT INTO activity_record (time, activity, user ) VALUES (?, ?, ? )')
    .bind(Date.now(), a1, a2)
  const data = await ps.run()
  console.log(data)

  return Response.json(data)
}
