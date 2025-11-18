export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;
    if (!payload?.messages || !payload?.model) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const upstream = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY ?? ""}`,
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const errorText = await upstream.text();
      return res.status(upstream.status).json({ error: errorText });
    }

    const data = await upstream.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("DeepSeek proxy error", error);
    return res.status(500).json({ error: "Internal proxy error" });
  }
}

