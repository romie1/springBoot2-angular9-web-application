export class Book{
    public id:number;
    public author:string;
    public title:string;
    public genre:string;
    public pages:number;
    public price:number;

    constructor()
    constructor(id?: number, author?:string, title?: string, genre?:string, pages?:number, price?:number){
        this.id = id;
        this.author=author;
        this.title = title;
        this.genre=genre;
        this.pages=pages;
        this.price=price;
    }

    

}