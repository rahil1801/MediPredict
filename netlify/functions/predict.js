const axios = require('axios');

const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: HEADERS, body: '' };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    const HF_URL = process.env.REACT_APP_HF_SPACE_URL;

    const hfRes = await axios.post(HF_URL, body, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 30000
    });

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify(hfRes.data)
    };
  } catch (err) {
    console.error("Netlify function error:", err);
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: err.message })
    };
  }
};
