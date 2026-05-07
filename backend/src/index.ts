import cors from "cors";
import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "excel-copilot-backend",
    message: "Backend stub is running"
  });
});

app.post("/auth/login", (_request, response) => {
  response.json({
    success: true,
    user: {
      name: "Prototype User",
      role: "stakeholder"
    }
  });
});

app.post("/chat/preview", (request, response) => {
  response.json({
    approved: false,
    preview: {
      title: "Suggested workbook action",
      summary:
        "This is a placeholder preview endpoint for the prototype backend.",
      input: request.body ?? null
    }
  });
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
