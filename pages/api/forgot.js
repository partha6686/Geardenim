import connectDb from "../../middleware/db";
import User from "../../models/User";
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      if (req.body.sendMail) {
        //check if user exists in the db
        let user = await User.findOne({ email: req.body.email }).select(
          "-password"
        );
        if (!user) {
          return res
            .status(400)
            .json({ error: "Account with the provided email does not exist" });
        }

        //Send mail to the user
        const data = {
          user: {
            id: user._id,
            email: user.email,
          },
        };
        const token = jwt.sign(data, process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 30,
        });

        let emailBody = `<html>
        <body>
        <div>We have sent you this email in response to your request to reset your password on Geardenim.com.
        <br/><br/>
        To reset your password please follow the link below:
        <a href="${process.env.NEXT_PUBLIC_SITE}forgot?token=${token}">Click here to reset your password</a>
        <br/><br/>
        We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to My Account Page.
        <br/><br/>
        If you need help, or you have any other questions, feel free to email geardenimbbsr@gmail.com.
        <br/><br/>
        Geardenim.com Customer Service
        </div>
        </body>
        </html>`;

        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GEARDENIM_EMAIL,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        let mailOptions = {
          from: process.env.GEARDENIM_EMAIL,
          to: req.body.email,
          subject: "Resetting your password on Geardenim.com",
          html: emailBody,
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ error: "Some error occured! Please try again" });
          } else {
            console.log("Email sent: " + info);
            return res.status(200).json({
              msg: "Password reset email have been sent to your email",
              info: info,
            });
          }
        });
        // mail.send();
      } else {
        //check token and change password
        const token = req.body.token;
        if (!token) {
          return res
            .status(400)
            .json({ error: "Token not available! Please try again" });
        }
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(
            req.body.password
          )
        ) {
          return res.status(400).json({
            error:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
          if (err) {
            return (
              res.status(400),
              json({
                error: "Invalid token! Please try again",
              })
            );
          } else {
            bcrypt.hash(req.body.password, 10, async (err, hash) => {
              if (!err) {
                let item = await User.findByIdAndUpdate(data.user.id, {
                  password: hash,
                });
                return res
                  .status(200)
                  .json({ msg: "Success! Your password has been updated." });
              }
            });
          }
        });
      }
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(handler);
