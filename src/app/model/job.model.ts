export interface Job {
    id?: string | number;
    title: string,
    type: string,
    description: string,
}

export enum JobType {
    FRONTEND = 'Front End',
    BACKEND = 'Back End',
    FULLSTACK = 'Full Stack'
}