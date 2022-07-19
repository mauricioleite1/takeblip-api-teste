import express from 'express';
import router from './routes';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

app.get("/api/", (req, res) => {
  return res.send("wow, it actually worked");
});

export default app;