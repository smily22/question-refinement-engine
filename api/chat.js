// /api/chat.js - Secured Backend Proxy for Claude API

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the API key from environment variables (stored in Vercel)
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // Check if API key exists
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set in environment variables');
    return res.status(500).json({ 
      error: 'API key not configured. Please contact the administrator.' 
    });
  }

  try {
    // FIXED: Get the correct parameter names from frontend
    const { messages, systemPrompt } = req.body;

    // Validate the request
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array required' });
    }

    if (!systemPrompt) {
      return res.status(400).json({ error: 'Invalid request: systemPrompt required' });
    }

    // Make the request to Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,  // Use the secure API key from environment
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: systemPrompt,  // FIXED: Use systemPrompt from frontend
        messages: messages
      })
    });

    // Check if the API request was successful
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Anthropic API error:', errorData);
      return res.status(response.status).json({ 
        error: errorData.error?.message || 'Failed to get response from Claude' 
      });
    }

    // Parse and return the successful response
    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error in chat handler:', error);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again.' 
    });
  }
}
