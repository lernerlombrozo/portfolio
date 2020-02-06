/**
 * *** NOTE ON IMPORTING FROM ANGULAR AND NGUNIVERSAL IN THIS FILE ***
 *
 * If your application uses third-party dependencies, you'll need to
 * either use Webpack or the Angular CLI's `bundleDependencies` feature
 * in order to adequately package them for use on the server without a
 * node_modules directory.
 *
 * However, due to the nature of the CLI's `bundleDependencies`, importing
 * Angular in this file will create a different instance of Angular than
 * the version in the compiled application code. This leads to unavoidable
 * conflicts. Therefore, please do not explicitly import from @angular or
 * @nguniversal in this file. You can export any needed resources
 * from your application's main.server.ts file, as seen below with the
 * import for `ngExpressEngine`.
 */

import 'zone.js/dist/zone-node';

import * as express from 'express';
import * as nodemailer from 'nodemailer'; 
import * as hbs from 'nodemailer-express-handlebars';
import * as sendgridTransport from 'nodemailer-sendgrid-transport';
import {join} from 'path';
import { Subject } from 'rxjs';

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Setting email sender
let transporter;
if (process.env.NODE_ENV === 'production' ){
  console.log('in production')
  transporter = nodemailer.createTransport(sendgridTransport({
      auth: {
          api_key : process.env.SENDGRID_API_KEY,
      }
  }));
  console.log('running in prod sending emails with sendgrid')
} else {
const mailConfig = {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          // this data is not important. Safe to commit. Generate your own account here https://ethereal.email/create
          user: "quinton.jacobson@ethereal.email",
          pass: "cEaEMwZAAczTg9rcwM"
      }
  };
  transporter = nodemailer.createTransport(mailConfig);
  console.log('running in development sending emails with smtp')
}

const HBSOptions = {
  viewEngine : {
      extname: '.hbs', // handlebars extension
      layoutsDir: 'views/layouts', // location of handlebars templates
      partialsDir: 'views', // location of your subtemplates aka. header, footer etc
      defaultLayout: 'main', // name of main template
      // defaultLayout: false
  },
  viewPath: 'views',
  extName: '.hbs'
};

transporter.use('compile', hbs(HBSOptions));

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
app.post('/api/mail', (req, res) => {
  const name = req.body.model.name;
  const email = req.body.model.email;
  const message = req.body.model.message;
  const myEmail = "lernerlombrozo@gmail.com";
  const trackId = new Date().getTime();
  const toDavidOptions={
    from: `"${name}" <${email}>`,
    to:myEmail,
    subject:"New message from website",
    text: message,
    template: 'new-message',
    context: {
      name: "My Lord",
      dlLogo: `http://${req.headers.host}/assets/img/DL.png?trackId=${trackId}`,
      message,
      replyEmail: myEmail,
    },
  };
  const toClientOptions={
    from: '"David Lerner 👻" <lernerlombrozo@gmail.com>', // sender address
    to: "email", // list of receivers
    subject: "Thanks for reaching out!",
    template: 'new-message',
    context: {
      name,
      dlLogo: `http://${req.headers.host}/assets/img/DL.png?trackId=${trackId}`,
      message,
      replyEmail: myEmail,
    },
  };
  transporter.sendMail(toDavidOptions).then(info=>{
      if(process.env.NODE_ENV !== 'production') console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
  }).catch(err=>{
      console.log('ERROR sending email',err);
  })
  transporter.sendMail(toClientOptions).then(info=>{
      if(process.env.NODE_ENV !== 'production') console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
  }).catch(err=>{
      console.log('ERROR sending email',err);
  })
  res.status(200).json({message:"Tanks for contacting me, I'll get back to you shortly."});
});

// All regular routes use the Universal engine
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
