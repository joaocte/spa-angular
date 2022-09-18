import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Produto } from "./produto";
import { Observable } from "rxjs";
@Injectable()
export class ProdutoService{

    constructor(private http: HttpClient){}

    protected urlService : string = "http://localhost:3000";

    obterProdutos() : Observable<Produto[]>{
        var urlProdutos  = this.urlService + "/produtos";
        return this.http.get<Produto[]>(urlProdutos);
    }

}