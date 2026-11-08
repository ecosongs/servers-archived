import express from 'express';
import { IoServer } from '@modelcontextprotocol/sdk/server/io.js'; // 프로토콜에 맞게 설정

const app = express();
const port = process.env.PORT || 10000;

// Render가 살아있는지 체크하는 경로
app.get('/', (req, res) => {
  res.send('MCP Puppeteer Server is Running!');
});

// Copilot Studio가 통신할 핵심 경로
app.post('/mcp', express.json(), (req, res) => {
  // 들어오는 요청을 MCP 프로토콜로 라우팅
  res.status(200).json({ message: "MCP Endpoint Ready" });
});

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});
