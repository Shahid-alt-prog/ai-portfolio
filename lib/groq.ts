import Groq from "groq-sdk";

let groq: Groq | null = null;

function getGroqClient(): Groq {
  if (!groq) {
    const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("NEXT_PUBLIC_GROQ_API_KEY is not set");
    }
    groq = new Groq({ apiKey, dangerouslyAllowBrowser: true });
  }
  return groq;
}

export async function streamChat(
  messages: { role: "system" | "user" | "assistant"; content: string }[]
) {
  const stream = await getGroqClient().chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages,
    temperature: 0.7,
    max_tokens: 1024,
    stream: true,
  });

  return stream;
}
