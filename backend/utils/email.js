const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async sendEmail(options) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      return info;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  }

  async sendWelcomeEmail(user) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #166534;">Welcome to Namal Alumni Network!</h2>
        <p>Dear ${user.firstName} ${user.lastName},</p>
        <p>Welcome to the Namal Alumni Network! We're excited to have you as part of our growing community.</p>
        <p>Your membership type: <strong>${user.membershipType}</strong></p>
        <p>You can now:</p>
        <ul>
          <li>Connect with fellow alumni</li>
          <li>Access exclusive events and opportunities</li>
          <li>Participate in mentorship programs</li>
          <li>Explore job opportunities</li>
        </ul>
        <p>Best regards,<br>The Namal Alumni Network Team</p>
      </div>
    `;

    return this.sendEmail({
      to: user.email,
      subject: 'Welcome to Namal Alumni Network',
      html
    });
  }

  async sendPasswordResetEmail(user, resetToken) {
    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #166534;">Password Reset Request</h2>
        <p>Dear ${user.firstName},</p>
        <p>You requested a password reset for your Namal Alumni Network account.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${resetUrl}" style="background-color: #166534; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
        <p>This link will expire in 10 minutes.</p>
        <p>If you didn't request this, please ignore this email.</p>
        <p>Best regards,<br>The Namal Alumni Network Team</p>
      </div>
    `;

    return this.sendEmail({
      to: user.email,
      subject: 'Password Reset - Namal Alumni Network',
      html
    });
  }
}

module.exports = new EmailService();