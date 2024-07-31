export async function GET(request: Request, { params: { id } }: { params: { id: string } }) {
  const data = [];
  for (let i = 1; i <= 100; i++) {
    data.push({
      id: i,
      name: `User${i}`,
    });
  }
  const user = data.find((user) => user.id.toString() === id);
  return Response.json(user);
}
