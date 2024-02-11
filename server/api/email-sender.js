import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "coder.shaheer@gmail.com",
        pass: "rltu vmje kyio kedn",
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
      to: "solutions@softechops.com",
      subject: body.first_name + ", Contact Form, Softech Ops",
      text: mailContent,
    };

    const info = await transporter.sendMail(mailOptions);

    return { success: true, message: info };
  } catch (error) {
    return { success: false, message: error };
  }
});
