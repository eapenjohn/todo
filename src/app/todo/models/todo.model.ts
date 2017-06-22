export class Todo {
    id : number;
    title: string;
    complete : boolean;
    constructor(data={})
    {
        Object.assign(this, data)
    }
}
