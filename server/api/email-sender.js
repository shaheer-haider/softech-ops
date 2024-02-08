import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "coder.shaheer@gmail.com",
        pass: "password here",
      },
    });

    const mailContent = `
        First Name: ${body.first_name}
        Last Name: ${body.last_name}
        Email: ${body.email}
        Phone: ${body.phone}

        Message: ${body.message}
        `;

    const mailOptions = {
      from: "coder.shaheer@gmail.com",
      to: body.email,
      subject: body.first_name + ", Contact Form, Vanguard Ops",
      text: mailContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    return { success: true, message: info };
  } catch (error) {
    console.log("Error sending", error);
    return { success: false, message: error };
  }
});
