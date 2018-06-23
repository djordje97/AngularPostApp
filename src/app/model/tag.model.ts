export class Tag{
    public id: number;
    public name: string;

    
    
    public get idT() : number {
        return  this.id;
    }

    
    public set value(v : number) {
        this.id = v;
    }
    
    
    public get nameT() : string {
        return this.name;
    }
    
    
    public set nameT(v : string) {
        this.name = v;
    }
    
}