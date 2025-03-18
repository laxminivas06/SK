from flask import Flask, request
import requests

app = Flask(__name__)

# Replace with your own WhatsApp API credentials
ACCESS_TOKEN = "YOUR_META_ACCESS_TOKEN"
PHONE_NUMBER_ID = "YOUR_PHONE_NUMBER_ID"
VERIFY_TOKEN = "YOUR_VERIFY_TOKEN"

# ✅ WhatsApp Webhook Verification
@app.route("/webhook", methods=["GET"])
def verify_webhook():
    mode = request.args.get("hub.mode")
    token = request.args.get("hub.verify_token")
    challenge = request.args.get("hub.challenge")

    if mode and token:
        if mode == "subscribe" and token == VERIFY_TOKEN:
            print("Webhook Verified!")
            return challenge, 200
        else:
            return "Verification token mismatch", 403
    return "Invalid request", 400

# ✅ Handle Incoming Messages
@app.route("/webhook", methods=["POST"])
def handle_whatsapp_message():
    data = request.get_json()

    if data and "entry" in data:
        for entry in data["entry"]:
            for change in entry["changes"]:
                if "messages" in change["value"]:
                    for message in change["value"]["messages"]:
                        if message["type"] == "text":
                            sender_id = message["from"]
                            received_text = message["text"]["body"].strip().lower()
                            send_auto_reply(sender_id, received_text)
    return "OK", 200

# ✅ Function to Send WhatsApp Message
def send_whatsapp_message(to, message):
    url = f"https://graph.facebook.com/v15.0/{PHONE_NUMBER_ID}/messages"
    headers = {"Authorization": f"Bearer {ACCESS_TOKEN}", "Content-Type": "application/json"}
    data = {
        "messaging_product": "whatsapp",
        "to": to,
        "type": "text",
        "text": {"body": message},
    }
    requests.post(url, headers=headers, json=data)

# ✅ Auto-Reply Logic
def send_auto_reply(sender_id, received_text):
    if received_text == "hi":
        response = "Hello! 👋 Welcome to Sri Karimalesh Catering. How can we help you?"
    elif received_text == "cart":
        response = "🛒 Your cart is empty. Add items to your cart to see details."
    elif received_text == "meal box":
        response = "🍱 Our Meal Box includes Rice, Roti, Fry, Curry, Sambar & Sweet. Price: $14.99"
    elif received_text == "trip":
        response = "✈️ Special Trip Packages available. Reply with 'More' for details."
    else:
        response = "I'm not sure I understand. Type 'cart', 'meal box', or 'trip' for more info."

    send_whatsapp_message(sender_id, response)

if __name__ == "__main__":
    app.run(port=5000, debug=True)