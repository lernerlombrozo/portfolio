import { Component, OnInit } from '@angular/core';
import { Project } from './project/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  frontend = [{name:'Angular',iconClass:'fab fa-angular w3-margin-right'},{name:'Bootstrap',iconClass:'fab fa-bootstrap w3-margin-right'},{name:'CSS',iconClass:'fab fa-css3 w3-margin-right'},{name:'HTML',iconClass:'fab fa-html5 w3-margin-right'},{name:'Ionic',iconClass:'fa fa-atom w3-margin-right'},{name:'SCSS',iconClass:'fab fa-css3-alt w3-margin-right'},{name:'Vue.js',iconClass:'fab fa-vuejs w3-margin-right'}];
  backend = [{name:'Express.js',iconClass:'fab fa-node w3-margin-right'},{name:'Firebase',iconClass:'fa fa-fire w3-margin-right'}, {name:'Node.js',iconClass:'fab fa-node-js w3-margin-right'}];
  database = ['MongoDB', 'Cloud Firestore', 'Realtime Database'];
  hosting = ['Elastic Beanstalk', 'Firebase', 'S3'];
  technologies=[...this.frontend,...this.backend,...this.database,...this.hosting];
  apps=[{name:'Android',iconClass:'fab fa-android w3-margin-right'}, {name:'Ios',iconClass:'fab fa-app-store-ios w3-margin-right'}, {name:'SPA',iconClass:'fas fa-globe w3-margin-right'}, {name:'PWA',iconClass:'fas fa-globe w3-margin-right'}];

  selected=0;

  fitpass:Project = {
    name:'Fitpass',
    backend: 'Rails',
    frontend: 'Ionic 3',
    image:'https://fitpass.com/assets/FitpassGradiente-440a9da32de31ffc9b478cff79b712254a032a43c26f28dc84a960921c0a5d53.png',
    // image:'https://fitpass.com/assets/landing/Landing_img_7-b9a10d6ebfc63fa4d4f2fddd5a62b5154af9b6b61aae6ccb1d31bc8d0cfa6e5e.jpg',
    position: 'Frontend developer',
    startDate: new Date('april 2018'),
    endDate:'present',
    description: 'Fitpass is an app with over 10,000 active users which allows them to book fitness classes in over 2000 studios in Mexico, Chile and Peru. I redesigned and programmed the second version of the Android and IOS app (Ionic 3). Currently I make occasional changes and updates.',
    technologies: ['firebase', 'push notifications', 'ionic', 'ionic native', 'cordova'],
    platforms:[{
      platform:'Ios',
      url:'https://apps.apple.com/us/app/fitpass-mexico/id1125584170'
    },
    {
      platform:'Android',
      url:'https://play.google.com/store/apps/details?id=com.fitpass.fitpassapp&hl=es_419'
    },
    {
      platform:'pwa',
      url:'https://fitpass.app'
    }
    ],
    url:'https://fitpass.com',
    location:'Mexico City, Mexico',
    noQueryShow:true
  };

  mariappchi:Project = {
    name:'Mariappchi',
    backend: 'Firebase',
    frontend: 'Ionic 3',
    image:'https://mariappchi.mx/assets/mariappchi_icon_withTitle.png',
    position: 'Cofounder and frontend developer',
    startDate: new Date('june 2017'),
    endDate:new Date('january 2019'),
    description: 'Mariappchi is an app that connects users with mariachi bands in Mexico City. I programmed the front end for both the bands and the users (Ionic 3) as well as the website (Angular 4). I also programmed the firebase cloud functions and designed the firebase realtime database structure and rules.',
    technologies: ['firebase', 'push notifications', 'ionic', 'ionic native', 'cordova'],
    platforms:[{
      platform:'Ios',
      url:'https://apps.apple.com/us/app/mariappchi/id1135749867'
    },
    {
      platform:'Android',
      url:'https://play.google.com/store/apps/details?id=io.mariappchi.client'
    },
    {
      platform:'Android',
      url:'https://play.google.com/store/apps/details?id=io.mariappchi.mariachi'
    },
    {
      platform:'spa',
      url:'https://mariappchi.mx'
    }
    ],
    url:'https://mariappchi.mx',
    location:'Mexico City, Mexico',
    noQueryShow:true
  }

  pongline:Project = {
    name:'Pongline',
    backend: 'Firebase',
    frontend: 'Ionic 4',
    image:'https://lh3.googleusercontent.com/cvEyF7LogEiqyT4fBqWbF5Q3du6tEGjGmdWZUjYAPVv3Zl1yjF-7Art8KRT0ToQa0Fbt=s180-rw',
    position: 'Programmer',
    startDate: new Date('january 2019'),
    endDate:'present',
    description: 'My first videogame had to be made with Ionic with a firebase cloud firestore database. It allows two users on two different devices to play the classic game "Pong" online.',
    technologies: ['firebase', 'ionic', 'canvas', 'ionic native', 'cordova'],
    platforms:[{
      platform:'Android',
      url:'https://play.google.com/store/apps/details?id=free.pong.line'
    }
    ],
    location:'Edmonton, Alberta, Canada',
    url:'https://play.google.com/store/apps/details?id=free.pong.line',
    noQueryShow:true
  };

  petBell:Project = {
    name:'Petbell',
    backend: 'Firebase',
    frontend: 'Ionic 3',
    image:'https://lh3.googleusercontent.com/tYXbz2QQLScxQsAyhg3Xv4PoH0YrntsvdrMgkB6opo7JgGaXhs3QJnTgukgE505ac2vo=s180-rw',
    position: 'Freelance',
    startDate: new Date('june 2018'),
    endDate:new Date('august 2018'),
    description: 'Petbell is an app I did for a friend, it works as a social network for pets and connects pet owners to vets across Mexico.',
    technologies: ['firebase', 'push notifications', 'ionic', 'ionic native', 'cordova'],
    platforms:[{
      platform:'Android',
      url:'https://play.google.com/store/apps/details?id=io.pet.bell'
    }
    ],
    url:'https://play.google.com/store/apps/details?id=io.pet.bell',
    location:'Mexico City, Mexico',
    noQueryShow:false
  };

  secretHitman:Project = {
    name:'Secret Hitman',
    backend: 'Node.jss',
    frontend: 'Angular 7',
    image:'https://cdn.vapid.site/sites/a67e0c72-4902-4365-a899-3386df73c2c4/uploads/social-86ac14f48287602cb33b756d4f8fcfaa.jpg',
    position: 'Hobbyist',
    startDate: new Date('march 2019'),
    endDate:'present',
    description: 'Secret Hitman is an online version of the popular game "Secret hitler". It offers a multiplayer experience for 10 simultaneous users.',
    technologies: ['node.js','express', 'MongoDB', 'Angular 7', 'socket.io', 'Heroku'],
    platforms:[{
      platform:'spa',
      url:'https://sec-hit.web.app/'
    }
    ],
    url:'https://sec-hit.web.app/',
    location:'Edmonton, Alberta, Canada',
    noQueryShow:true
  };

  townDoll:Project = {
    name:'Towndoll',
    backend: 'Node.jss',
    frontend: 'Angular 7',
    image:'https://towndoll.s3.us-east-2.amazonaws.com/media/logos/TD+logo+squared-01.png',
    position: 'Hobbyist',
    startDate: new Date('march 2019'),
    endDate:'present',
    description: 'Towndoll is set to be a platform for businesses to give and manage loyalty points, communicate with their clients through push notifications and emails and for statistical analysis.',
    technologies: ['node.js','express', 'MongoDB', 'Angular 7','Ionic 4', 'Cordova', 'socket.io', 'Heroku', 'handlebars.js', 'S3'],
    platforms:[{
      platform:'spa',
      url:'https://towndoll.com'
    },
    {
      platform:'pwa',
      url:'https://towndoll-app.web.app/signin'
    }
    ],
    url:'https://towndoll.com',
    location:'Edmonton, Alberta, Canada',
    noQueryShow:true
  };

  myApps: Project[] =[
    this.mariappchi, this.fitpass, this.pongline, this.townDoll, this.secretHitman, this.petBell
  ]

}
