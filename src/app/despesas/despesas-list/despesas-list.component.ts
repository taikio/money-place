import { Conta } from './../../model/conta.model';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { DespesasNewComponent } from '../despesas-new/despesas-new.component';
import { DespesasService } from '../despesas.service';
import { Subscription, forkJoin } from 'rxjs';
import { Despesa } from 'src/app/model/despesa.model';
import { CurrencyPipe } from '@angular/common';
import { ContasService } from 'src/app/contas/contas.service';

@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  styleUrls: ['./despesas-list.component.scss']
})
export class DespesasListComponent implements OnInit {

  monetaryValue = 'R$ 2400,00';
  bsModalRef: BsModalRef;
  contaSelecionada: Conta;
  listaDespesas: Array<Despesa>;
  saldoAtual: string;
  subscription: Subscription;
  
  constructor(
    private modalService: BsModalService,
    private despesasService: DespesasService,
    private currencyPype: CurrencyPipe,
    private contasService: ContasService
    ) { }

  ngOnInit() {
    // this.contaSelecionada = new Conta();
    // this.contaSelecionada.id = 1;
    // this.contaSelecionada.nome = 'Carteira',
    // this.contaSelecionada.saldo = 2400.00;
    // this.contaSelecionada.icone = 'fa fa-wallet';

    const contaRequest = this.contasService.obterPorId(1);
    const despesasRequest = this.despesasService.obterTodas();

    this.subscription = forkJoin([contaRequest, despesasRequest])
    .subscribe(results => {
      this.contaSelecionada = results[0] as Conta;
      this.listaDespesas = results[1] as Array<Despesa>;

      this.calculaSaldoAtual(this.contaSelecionada, this.listaDespesas);
    });


    // this.subscription = this.despesasService.obterTodas()
    //   .subscribe(result => {
    //     this.listaDespesas = result;
    //     console.log(this.listaDespesas);

    //     this.calculaSaldoAtual(this.contaSelecionada, this.listaDespesas);


    //   });
  }

  calculaSaldoAtual(conta: Conta, despesas: Despesa[]) {
    let totalDespesas = 0;
    despesas.forEach(function (element:Despesa) {
      totalDespesas += element.valor;
    });

    const saldo = conta.saldo - totalDespesas;
    this.saldoAtual = this.currencyPype.transform(saldo, 'R$ ', true);
    // `R$ ${ saldo.toString() }`;
  }

  addDespesa() {

    this.bsModalRef = this.modalService.show(DespesasNewComponent);
    this.bsModalRef.content.conta = this.contaSelecionada;

    this.bsModalRef.content.isModalConfirmed
    .pipe(take(1))
    .subscribe(() => {
      console.log('atualiza informações');

      this.despesasService.obterTodas()
      .pipe(take(1))
      .subscribe(result => {
        this.listaDespesas = result;
        this.calculaSaldoAtual(this.contaSelecionada, this.listaDespesas);
      });
    });
  }

  excluirDespesa(despesa: Despesa) {
    this.despesasService.excluirDespesa(despesa.id)
    .pipe(take(1))
    .subscribe(() => {

      this.despesasService.obterTodas()
      .pipe(take(1))
      .subscribe(result => {
        this.listaDespesas = result;
        this.calculaSaldoAtual(this.contaSelecionada, this.listaDespesas);
      });
    });
  }

}
