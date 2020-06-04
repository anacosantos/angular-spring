export interface DaoInterface {
    tableName: string;

    insert(object:any):boolean;
    update(objetc:any):boolean;
    delete(id:number):boolean;
    find(id:number):any;
    findAll():[any];
}