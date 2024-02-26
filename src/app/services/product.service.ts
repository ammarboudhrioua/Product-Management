
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product/product';
import { CreateProductDto } from '../models/product/create-product-dto';
import { Message } from '../models/message/Message';
import { UpdateProductDto } from '../models/product/update-product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private _baseUrl='hhtp://localhost:3000'
  constructor(private _http: HttpClient) { }


public getAllProducts():Observable<Product[]>{
  // Déclare explicitement le type de retour Observable<Product[]>
  // TypeScript peut ainsi effectuer une vérification de type statique.
  return this._http.get<Product[]>(`${this._baseUrl}/products`);
  // Utilisation de <Product[]> pour spécifier le type lors de l'appel à la méthode get.
  // Évite la nécessité de cast explicite dans le reste du code.
}

public addNewProduct(product : CreateProductDto):Observable<Message>{
return this._http.post<Message>(`${this._baseUrl}/products`,product);
}

public UpdateProductById(id :number,product : UpdateProductDto){
  return this._http.put(`${this._baseUrl}/contacts/${id}`,product);
}
}
