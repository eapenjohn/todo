export class Todo {
    id : number;
    title: string;
    complete : boolean;
    constructor(data=null)
    {
        Object.assign(this, data)
    }
}
