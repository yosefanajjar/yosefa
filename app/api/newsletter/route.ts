export async function POST(request: Request) {
  const req = await request.json()

  const email = req.body.email

  try {
    Response.json({ status: 200, message: `email ${email} received` })
  } catch (e) {
    Response.json({ status: 500, message: 'internal server error' })
  }
}
