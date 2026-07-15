const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health-check / wake-up ping — called by the frontend on load
app.get("/api/ping", (req, res) => {
  res.status(200).json({ status: "ok", message: "Dexsol backend is alive!" });
});

// Main Brevo Email route
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, service, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // To setup Brevo, create a .env file with BREVO_API_KEY
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("Missing BREVO_API_KEY in .env");
    return res.status(500).json({ error: "Internal server configuration error." });
  }

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Dexsol Website",
          email: "contactdexsol@gmail.com", // Must match the verified sender in your Brevo account
        },
        to: [
          {
            email: "contactdexsol@gmail.com", // Replace with desired destination email
            name: "Dexsol Team",
          },
        ],
        subject: `New Lead: ${service} Inquiry from ${firstName} ${lastName}`,
        htmlContent: `
          <h3>New Website Form Submission</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Interested In:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        replyTo: {
          email: email,
          name: `${firstName} ${lastName}`,
        },
      },
      {
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          "accept": "application/json",
        },
      }
    );

    res.status(200).json({ message: "Email sent successfully", data: response.data });
  } catch (err) {
    console.error("Brevo API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is successfully running on port ${PORT}`);
});
