import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conta } from '../model/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  apiUrl = 'http://localhost:3000/contas';
  constructor(private http: HttpClient) { }

  obterTodas() {
    return this.http.get<Conta[]>(this.apiUrl);
  }

  obterPorId(id: number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  novaConta(despesa: Conta) {
    return this.http.post(this.apiUrl, despesa);
  }

  excluirConta(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
