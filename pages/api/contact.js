import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    // host: 'smtp.office365.com',  
    // port: 587,
    secure: true,
    auth: {
      user: "sudarashanlinux01@gmail.com",
      pass: "obvzbscaeifgozqi",
      // user: "marie@fusion-finance.com",
      // pass: "O$op3sqo5XUr-uM",    
    },
  });

  let mailData;
  if (req.body.type === "quotes") {
    mailData = {
      from: "allison@branue.com",
      to: "gemma@fusion-finance.com", // info@fusion-finance.com gemma@fusion-finance.com sudarashanlinux01@gmail.com
      subject: "Email From Fusion Finance",
      html: `
      <div style="width: 80%; margin: 20px auto; font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; font-size: 24px; font-weight: bold; padding: 10px; background-color: #007bff; color: white; border-radius: 5px;">Insurance Quote Summary</div>

    <div style="margin-top: 20px; padding: 15px; background-color: white; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <h3 style="border-bottom: 2px solid #007bff; padding-bottom: 5px;">Personal Details</h3>
        <p><strong>Name:</strong> <span>${req.body?.quotes?.Inputs?.Life1?.Name ?? 'N/A'}</span></p>
        <p><strong>Email:</strong> <span>${req.body?.quotes?.Inputs?.Life1?.Email ?? 'N/A'}</span></p>
        <p><strong>Phone:</strong> <span>${req.body?.quotes?.Inputs?.Life1?.Phone ?? 'N/A'}</span></p>
        <p><strong>DOB:</strong> <span>${req.body?.quotes?.Inputs?.Life1?.DOB ?? 'N/A'}</span></p>
        <p><strong>Sex:</strong> <span>${req.body?.quotes?.Inputs?.Life1?.Sex ?? 'N/A'}</span></p>
        <p><strong>Smoker:</strong> <span>${req.body?.quotes?.Inputs?.Life1?.Smoker ?? 'N/A'}</span></p>
        <p><strong>Life Cover:</strong> <span>${req.body?.quotes?.Inputs?.Life1?.LifeCover ?? 'N/A'}</span></p>
        <p><strong>Illness Cover:</strong> <span>${req.body?.quotes?.Inputs?.Life1?.IllnessCover ?? 'N/A'}</span></p>
    </div>

    <div style="margin-top: 20px; padding: 15px; background-color: white; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <h3 style="border-bottom: 2px solid #007bff; padding-bottom: 5px;">Plan Details</h3>
        <p><strong>Term:</strong> <span>${req.body?.quotes?.Inputs?.Plan?.Term ?? 'N/A'}</span></p>
        <p><strong>Indexation:</strong> <span>${req.body?.quotes?.Inputs?.Plan?.Indexation ?? 'N/A'}</span></p>
        <p><strong>Mortgage Interest:</strong> <span>${req.body?.quotes?.Inputs?.Plan?.MortgageInterest ?? 'N/A'}%</span></p>
        <p><strong>Frequency:</strong> <span>${req.body?.quotes?.Inputs?.Plan?.Frequency ?? 'N/A'}</span></p>
    </div>

    <div style="margin-top: 20px; padding: 15px; background-color: white; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <h3 style="border-bottom: 2px solid #007bff; padding-bottom: 5px;">Summary</h3>
        <p>${req.body?.quotes?.Outputs?.Summary?.Life1 ?? 'N/A'}</p>
        <p>${req.body?.quotes?.Outputs?.Summary?.Plan?.["#text"] ?? 'N/A'}</p>
        <p><strong>Input Check:</strong> <span>${req.body?.Outputs?.Summary?.InputCheck ?? 'N/A'}</span></p>
    </div>

    <div style="margin-top: 20px; padding: 15px; background-color: white; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <h3 style="border-bottom: 2px solid #007bff; padding-bottom: 5px;">Quote Type</h3>
        <p><strong>Description:</strong> ${req.body?.quotes?.Outputs?.Quotes?.Type?.Desc ?? 'N/A'}</p>
        <p><strong>Critical Warning:</strong> ${req.body?.quotes?.Outputs?.Quotes?.Type?.CriticalWarning ?? 'N/A'}</p>
    </div>

    <div style="margin-top: 20px; padding: 15px; background-color: white; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <h3 style="border-bottom: 2px solid #007bff; padding-bottom: 5px;">Company Quotes</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr style="background-color: #007bff; color: white;">
                <th style="padding: 10px; text-align: left;">Company</th>
                <th style="padding: 10px; text-align: left;">Standard Level</th>
                <th style="padding: 10px; text-align: left;">Standard Convertible</th>
            </tr>
            ${req.body?.quotes?.Outputs?.Quotes?.Type[0]?.Company?.map(company => `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;">${company?.Name ?? 'N/A'}</td>
                <td style="padding: 8px;">${company?.SLevel ?? 'N/A'}</td>
                <td style="padding: 8px;">${company?.SConvertible ?? 'N/A'}</td>
            </tr>
            `).join('') || '<tr><td colspan="3" style="padding: 8px; text-align: center;">No company quotes available</td></tr>'}
        </table>
    </div>
</div>
      `}
  } else {
    mailData = {
      from: "allison@branue.com",
      to: "gemma.maguire09@gmail.com", // info@fusion-finance.com gemma@fusion-finance.com sudarashanlinux01@gmail.com
      subject: "Email From Fusion Finance",
      html: `
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://fusion-finance.com/fusiondeepgreen.png" alt="Fusion Finance Logo" style="max-width: 120px; height: auto;">
  </div>
  <p style="font-size: 18px; color: #555; line-height: 1.6; margin-bottom: 20px;">
    Below are the details shared with us. If any information needs to be updated, feel free to reach out.
  </p>
  <table style="width: 100%; border-collapse: collapse; font-size: 16px; color: #333;">
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Full Name</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.fullName}</td>
    </tr>
    <tr>
      <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.email}</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.phone}</td>
    </tr>
    <tr>
      <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">County</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.county}</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Interests</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.interests}</td>
    </tr>
  </table>
  <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #777;">
    Thank you for reaching out! We will get back to you as soon as possible.
  </p>
  <div style="text-align: center; margin-top: 20px;">
    <a href="https://fusion-finance.com" style="text-decoration: none; background-color: #1a584f; color: #fff; padding: 10px 20px; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
  </div>
</div>
      `,
    }
  }
  try {
    const info = await transporter.sendMail(mailData);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: 'Email sent!' }))
  } catch (error) {
    console.error('Error sending email:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: 'Email not send!' }))
  }
}