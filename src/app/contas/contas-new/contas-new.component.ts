import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject, Subscription } from 'rxjs';
import { Conta } from 'src/app/model/conta.model';
import { ContasService } from '../contas.service';

@Component({
  selector: 'app-contas-new',
  templateUrl: './contas-new.component.html',
  styleUrls: ['./contas-new.component.scss']
})
export class ContasNewComponent implements OnInit, OnDestroy {

  isModalConfirmed = new Subject<boolean>();
  novaConta: Conta;
  subscription: Subscription;
  constructor(public bsModalRef: BsModalRef, private contasService: ContasService) { }

  ngOnInit() {
    this.novaConta = new Conta();
  }

  selecionaIcone(icone: string): void {
    this.novaConta.icone = icone;
  }

  validacoes(): boolean {
    if (this.novaConta.nome === undefined || this.novaConta.nome === '') {
      alert('Informe um nome válido para a conta.');
      return false;
    }

    if (this.novaConta.saldo === undefined || this.novaConta.saldo <= 0) {
      alert('Informe um saldo positivo para a conta.');
      return false;
    }

    if (this.novaConta.icone === undefined || this.novaConta.icone === '') {
      alert('Selecione um icone.');
      return false;
    }

    return true;
  }

  confirm(): void {

    console.log(this.novaConta);
    if (!this.validacoes()){
      return;
    }

    // converte o saldo para number
    this.novaConta.saldo = parseFloat(this.novaConta.saldo.toString());

    this.subscription = this.contasService.novaConta(this.novaConta)
    .subscribe(() => {
      this.bsModalRef.hide();
      this.isModalConfirmed.next(true);
    },
    err => {
      alert('erro ao adicionar nova conta: ' + err);
    }
    );

  }

  decline(): void {
    this.bsModalRef.hide();
    // this.isModalConfirmed.next(false);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
