import { NextRequest, NextResponse } from "next/server";
import * as nodemailer from "nodemailer";
import hbs from 'nodemailer-express-handlebars'
import { resolve } from 'path'

export async function POST(req: NextRequest) {
    let res = NextResponse;
    let data = await req.json()
    let token = data['g-recaptcha-response'];
    let secretKey = process.env.RECAPTCHA_SECRET_KEY
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    const response = await fetch(verifyUrl, {
        method: 'POST'
    });
    const dataResponse = await response.json();
    for (const dataKey in data) {
        if (!data["already_logo"]) {
            data["already_logo"] = 'Non'
        }
        if (!data["using_socialmedia"]) {
            data["using_socialmedia"] = 'Non'
        }
        if (!data["already_website"]) {
            data["already_website"] = 'Non'
        }
        if (!data["due_date"]) {
            data["due_date"] = 'Non'
        }
        if (data[dataKey].length == 0) {
            data[dataKey] = "Non déféni par le client"
        }
        if (data[dataKey] === "on") {
            data[dataKey] = "Oui"
        }
    }
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAIL_EMAIL,
                pass: process.env.NODEMAIL_PASS
            }
        })
        await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
                if (error) {
                    console.error(error)
                    reject(error)
                    return res.json({ success: false, error: error }, {
                        status: 404
                    })
                } else {
                    resolve(success)
                }
            })
        })
        const templateDir = resolve(process.cwd(), 'src/views')
        // @ts-ignore
        transporter.use('compile', hbs({
            viewEngine: {
                extname: '.handlebars',
                layoutsDir: templateDir,
                defaultLayout: 'template',
                partialsDir: templateDir
            },
            viewPath: templateDir,
            extName: '.handlebars'
        }))
        let mailOptions = {
            to: "baptiste.petit@psdoweb.com",
            // to: "gabin.buignet@gmail.com",
            subject: "Un client viens de vous contactez ! ✔", // Subject line
            template: 'template',
            context: data
        }
        if (dataResponse.success) {
            await new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.error("Erreur lors de l'envoie du mail :", error);
                        reject(error)
                        return res.json({
                            success: false,
                            type: 'warning',
                            message: "Erreur lors de l'envoie du mail."
                        }, {
                            status: 500
                        })
                    }
                    else {
                        resolve(info)
                    }
                })
            })
            return res.json({ success: true, message: "Votre formulaire a bien été envoyé." }, {
                status: 200
            })
        } else {
            return res.json({ success: false, message: "Votre formulaire n'a pas pu être envoyé." }, {
                status: 401
            })
        }
    }
    catch (err) {
        console.error(err)
        return res.json({ sucess: false, error: err }, {
            status: 404
        })
    }
}