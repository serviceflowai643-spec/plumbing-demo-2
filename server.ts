import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for AI assistant (Super-fast multi-turn Gemini Chat)
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      // Check for gas safety trigger immediately on backend
      const lower = message.toLowerCase();
      if (lower.includes('gas') && (lower.includes('smell') || lower.includes('leak') || lower.includes('hiss') || lower.includes('fume'))) {
        return res.json({
          reply: "⚠️ IMMEDIATE GAS SAFETY WARNING: If you suspect a gas leak or smell gas, please leave the building immediately, avoid turning light switches on or off, and call the UK's National Gas Emergency Service straight away on 0800 111 999 (available 24 hours, free). Do not delay.",
          isSafetyAlert: true,
          isConfigured: true
        });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.json({
          reply: null,
          isConfigured: false,
          note: 'AI API not configured, using built-in London Plumbers assistant.'
        });
      }

      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are the official customer support AI assistant for "London Plumbers", an established plumbing and heating company based at 43 Sunnyside Road, London, W5 5HT (Telephone: 07796 345453).
Your role: Provide prompt, clear, polite, and reassuring customer support for domestic and commercial plumbing, heating, boiler, and drainage issues across London.

CRITICAL RULES:
1. Clarify that you are an AI support assistant, not an on-site engineer.
2. Gas Safety: If the user mentions smelling gas or a suspected gas leak, IMMEDIATELY instruct them to leave the building and phone the National Gas Emergency Service on 0800 111 999.
3. NEVER claim to diagnose a boiler fault conclusively, and NEVER instruct users to dismantle or tamper with gas appliances.
4. Do NOT promise specific pricing, exact arrival times, or guaranteed appointment slots.
5. For emergencies (burst pipes, major leaks, flooding, heating failure in freezing weather), recommend phoning 07796 345453 directly for 24/7 service.
6. Services: Plumbing, heating, boiler repairs, boiler installation, drain unblocking, leak repairs, bathroom plumbing, central heating and radiator repairs.
7. Coverage: Greater London, with fast mobile van dispatch in Ealing, West Ealing, Northfields, Hanwell, Acton, Greenford, Brentford, Chiswick, Hounslow, and Twickenham.
8. Keep answers concise, actionable, and rapid (under 2 short paragraphs).`;

      // Build multi-turn contents array
      const rawHistory = Array.isArray(history) ? history : [];
      const contents: Array<{ role: 'user' | 'model'; parts: [{ text: string }] }> = [];

      // Include valid previous turns
      for (const turn of rawHistory) {
        if (turn.text && typeof turn.text === 'string' && turn.id !== 'welcome') {
          contents.push({
            role: turn.sender === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }]
          });
        }
      }

      // Append current user message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      // Use gemini-3.1-flash-lite with minimal thinking for ultra-fast latency
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents,
        config: {
          systemInstruction,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.MINIMAL
          }
        }
      });

      const replyText = response.text || "For immediate assistance with plumbing or boiler issues across London, please call our 24/7 team directly on 07796 345453.";

      return res.json({
        reply: replyText,
        isConfigured: true
      });
    } catch (err: any) {
      console.error('Gemini API chat error:', err?.message || err);
      return res.json({
        reply: null,
        isConfigured: false,
        error: err?.message
      });
    }
  });

  // API endpoint for enquiry submissions
  app.post('/api/enquiry', (req, res) => {
    const { name, phone, email, service, postcode, description, preferredDate, preferredTime } = req.body;

    if (!name || !phone || !email || !service || !postcode) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    // In demo environment, confirm receipt and log
    console.log('Enquiry received for London Plumbers:', {
      name,
      phone,
      email,
      service,
      postcode,
      preferredDate,
      preferredTime,
      timestamp: new Date().toISOString()
    });

    return res.json({
      success: true,
      message: `Thank you ${name}. Your quote enquiry for ${service} in ${postcode} has been registered. For immediate urgent assistance, please call 07796 345453 directly.`
    });
  });

  // In development, hook up Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`London Plumbers server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
