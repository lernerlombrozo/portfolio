import { Component, OnInit } from '@angular/core';
import { Project } from './project/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fitpass:Project = {
    name:'Fitpass',
    backend: 'Rails',
    frontend: 'Ionic 3',
    image:'https://fitpass.com/assets/landing/Landing_img_7-b9a10d6ebfc63fa4d4f2fddd5a62b5154af9b6b61aae6ccb1d31bc8d0cfa6e5e.jpg',
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
  }

  pongline:Project = {
    name:'Pongline',
    backend: 'Firebase',
    frontend: 'Ionic 4',
    image:'https://lh3.googleusercontent.com/cvEyF7LogEiqyT4fBqWbF5Q3du6tEGjGmdWZUjYAPVv3Zl1yjF-7Art8KRT0ToQa0Fbt=s180-rw',
    position: 'Programmer',
    startDate: new Date('january 2019'),
    endDate:'present',
    description: 'My first videogame had to be made with Ionic with a firebase cloud firestore database. It allows two users, on two different devices to play the clasic game "Pong" online.',
    technologies: ['firebase', 'ionic', 'canvas', 'ionic native', 'cordova'],
    platforms:[{
      platform:'Android',
      url:'https://play.google.com/store/apps/details?id=free.pong.line'
    }
    ],
    location:'Edmonton, Alberta, Canada',
    url:'https://play.google.com/store/apps/details?id=free.pong.line'
  }

  myApps: Project[] =[
    this.fitpass, this.mariappchi, this.pongline, this.fitpass, this.fitpass, this.fitpass
  ]

}
