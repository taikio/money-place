import { Categoria } from './../../model/categoria.model';
import { Despesa } from './../../model/despesa.model';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DespesasService } from '../despesas.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-despesas-new',
  templateUrl: './despesas-new.component.html',
  styleUrls: ['./despesas-new.component.scss']
})
export class DespesasNewComponent implements OnInit {

  isModalConfirmed = new Subject<boolean>();
  novaDespesa = new Despesa();
  categoriaSelecionada = new Categoria();
  listCategorias: Array<Categoria>;
  constructor(public bsModalRef: BsModalRef, private despesasService: DespesasService) { }

  ngOnInit() {
    this.despesasService.obterCategorias()
    .pipe(take(1))
    .subscribe(categorias => {
      this.listCategorias = categorias;
    });
  }

  selecionaCategoria(categoria: Categoria) {
    this.novaDespesa.categoria = categoria;
    this.categoriaSelecionada = categoria;
  }

  confirm(): void {
    if (this.novaDespesa.descricao == null || this.novaDespesa.descricao === undefined) {
      alert("Preencha o campo de descrição");
      return;
    }
    if (this.novaDespesa.valor == null || this.novaDespesa.valor === undefined) {
      alert("Preencha o campo de valor");
      return;
    }
    if (this.novaDespesa.categoria == null || this.novaDespesa.categoria === undefined) {
      alert("Selecione uma categoria");
      return;
    }

    this.novaDespesa.conta = this.bsModalRef.content.conta;
    this.novaDespesa.valor = parseFloat(this.novaDespesa.valor.toString());

    this.despesasService.novaDespesa(this.novaDespesa)
    .subscribe(() => {
      this.bsModalRef.hide();
      this.isModalConfirmed.next(true);
    });
    
  }

  decline(): void {
    this.bsModalRef.hide();
    this.isModalConfirmed.next(false);
  }

}
