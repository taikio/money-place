import { Categoria } from './../model/categoria.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Despesa } from '../model/despesa.model';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  apiUrl = 'http://localhost:3000/despesas';
  constructor(private http: HttpClient) { }

  obterTodas() {
    return this.http.get<Despesa[]>(this.apiUrl);
  }

  obterPorId(id: number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  novaDespesa(despesa: Despesa) {
    return this.http.post(this.apiUrl, despesa);
  }

  excluirDespesa(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  obterCategorias() {
    return this.http.get<Categoria[]>('http://localhost:3000/categorias');
  }
}
