import nodemailer from 'nodemailer';
export default async (req, res) => {
  const  { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'onestacompliance@gmail.com',
      pass: 'ahtldqqxgvqkspxa'
    }
  })

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'onestacompliance@gmail.com',
      subject: 'Nuevo subscriptor desde la web de ONESTÁ',
      html: `<p>Tienes un nuevo subscriptor desde la web de ONESTÁ  <br/> Su email es: ${email} <br/> Ponte en contacto ! </p>`
    });
    console.log('Email enviado exitosamente!');
  } catch (err) {
    console.error(err);
  }

  res.status(200).json(req.body);
}