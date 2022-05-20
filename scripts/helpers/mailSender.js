import nodemailer from "nodemailer";

const sendEmail = async (mailOptions) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "587",
    auth: {
      user: "comptonstore2022@gmail.com",
      pass: "Twinkle8644",
    },
  });

  let info = await transporter.sendMail(mailOptions);
};

export default sendEmail;
