import Fastify from "fastify";

const app = Fastify();

app.get("/", async (request, reply) => {
  return { msg: "Hello! from Fastify!" };
});

app.post("/", async (request, reply) => {
  const body = request.body;
  return { msg: "Fastify received your post request!", body };
});

export default app;
