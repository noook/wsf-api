export default eventHandler(async (event) => {
  const db = useDrizzle()

  const results = await db.query.links.findMany()

  return results
});
