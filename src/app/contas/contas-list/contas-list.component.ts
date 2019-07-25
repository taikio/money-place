import { ContasService } from './../contas.service';
import { ContasNewComponent } from './../contas-new/contas-new.component';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { Conta } from 'src/app/model/conta.model';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.scss']
})
export class ContasListComponent implements OnInit {

  bsModalRef: BsModalRef;
  listaContas: Array<Conta>;
  constructor(private modalService: BsModalService, private contasService: ContasService) { }

  ngOnInit() {
    this.contasService.obterTodas()
    .pipe(take(1))
    .subscribe(result => {
      this.listaContas = result;
      console.log('lista de contas', this.listaContas);
    });
  }

  addConta() {
    this.bsModalRef = this.modalService.show(ContasNewComponent);

    this.bsModalRef.content.isModalConfirmed
    .pipe(take(1))
    .subscribe(() => {
      
      this.contasService.obterTodas()
      .pipe(take(1))
      .subscribe(result => {
        this.listaContas = result;
      });

    });
  }

}
