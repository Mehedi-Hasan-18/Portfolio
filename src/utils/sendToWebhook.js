// src/utils/sendToWebhook.js

export async function sendToWebhook(message) {
  const webhookUrl = "https://n8n.srv1106977.hstgr.cloud/webhook/eed647aa-7781-473c-bd6c-c250adc1a6c5";
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) {
      throw new Error("Failed to send message");
    }
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}
