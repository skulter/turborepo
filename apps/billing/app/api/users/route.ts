export async function GET(request: Request) {
  const data = [];
  for (let i = 1; i <= 100; i++) {
    data.push({
      id: i,
      name: `User${i}`,
    });
  }

  return Response.json(data);
}
