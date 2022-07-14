import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./product-item/model/Book";
import { Observable, throwError } from "rxjs";
import { catchError, map, retry } from "rxjs";


export const books: Book[] = [
// se quiser adicionar mais livros só colocar novos dados
    { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Entretenimento", img:"img1"},
    { id: '2', name: 'Book2' , price: 15, quantity: 1, category: "Entretenimento", img:"img2"},
    { id: '3', name: 'Book3' , price: 19, quantity: 1, category: "Entretenimento", img:"img3"},
];

@Injectable()

export class BooksService
{
    private url = 'https://sheet.best/api/sheets/cd8c885a-0e0d-41e2-bf84-695f080b3fe4';  //url api criada no sheet.best(inativa)
    httpOptions ={
        Book,
        Headers: new HttpHeaders({'content-type': 'aplication/json'})
    }

    constructor(private http:HttpClient){}

    getBooks(){  // ficar comentado
     return books;// ficar comentado
    }

    /*getBooks(){
        return this.http.get(this.url)
    }*/
}