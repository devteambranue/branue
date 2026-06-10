import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const authUser = "sudarashanlinux01@gmail.com";
  const authPass = "lvkvspaxjkdqeduo";

  // Gmail SMTP configuration using 'service' property for better compatibility
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: authUser,
      pass: authPass,
    },
  });

  try {
    const { type, quotes, fullName, email, phone, county, interests } = req.body;

    let mailData;

    if (type === "quotes") {
      const inputs = quotes?.Inputs || {};
      const outputs = quotes?.Outputs || {};
      const typeData = outputs?.Quotes?.Type;
      
      const normalizedType = Array.isArray(typeData) ? typeData[0] : typeData;
      const companies = normalizedType?.Company || [];
      const companyList = Array.isArray(companies) ? companies : [companies];

      mailData = {
        from: authUser, // Gmail often requires 'from' to match the auth user
        replyTo: inputs?.Life1?.Email || email,
        to: "info@fusion-finance.com",
        subject: "New Quote Request - Fusion Finance",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
            <h2 style="color: #007bff;">Insurance Quote Summary</h2>
            <h3>Personal Details</h3>
            <p><strong>Name:</strong> ${inputs?.Life1?.Name || 'N/A'}</p>
            <p><strong>Email:</strong> ${inputs?.Life1?.Email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${inputs?.Life1?.Phone || 'N/A'}</p>
            <p><strong>DOB:</strong> ${inputs?.Life1?.DOB || 'N/A'}</p>
            <h3>Plan Details</h3>
            <p><strong>Term:</strong> ${inputs?.Plan?.Term || 'N/A'} years</p>
            <p><strong>Life Cover:</strong> ${inputs?.Life1?.LifeCover || 'N/A'}</p>
            <h3>Quotes</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background: #f8f9fa;">
                <th style="padding: 8px; border: 1px solid #ddd;">Company</th>
                <th style="padding: 8px; border: 1px solid #ddd;">Level</th>
                <th style="padding: 8px; border: 1px solid #ddd;">Convertible</th>
              </tr>
              ${companyList.map(c => `
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd;">${c?.Name || 'N/A'}</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${c?.SLevel || 'N/A'}</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${c?.SConvertible || 'N/A'}</td>
                </tr>
              `).join('')}
            </table>
          </div>
        `,
      };
    } else {
      mailData = {
        from: authUser,
        replyTo: email,
        to: "info@fusion-finance.com",
        subject: "New Contact Request - Fusion Finance",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
            <h2 style="color: #1a584f;">Contact Form Submission</h2>
            <p><strong>Full Name:</strong> ${fullName || 'N/A'}</p>
            <p><strong>Email:</strong> ${email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>County:</strong> ${county || 'N/A'}</p>
            <p><strong>Interests:</strong> ${Array.isArray(interests) ? interests.join(", ") : (interests || 'N/A')}</p>
          </div>
        `,
      };
    }

    // Send email
    const info = await transporter.sendMail(mailData);
    console.log("Email sent: " + info.messageId);

    return res.status(200).json({ 
      message: "Email sent successfully!", 
      messageId: info.messageId 
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return res.status(500).json({ 
      message: "Failed to send email", 
      error: error.message,
      code: error.code
    });
  }
}
