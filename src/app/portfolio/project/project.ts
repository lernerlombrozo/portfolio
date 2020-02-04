export interface Project {
    name:string,
    backend: string,
    frontend: string,
    image: string,
    position: string,
    startDate: Date,
    endDate:Date | 'present',
    description: string,
    technologies: string[],
    platforms:{
        platform:'Ios'|'Android'|'pwa'|'spa',
        url?:string
    }[],
    noQueryShow: boolean,
    url?:string,
    location?:string,
}
