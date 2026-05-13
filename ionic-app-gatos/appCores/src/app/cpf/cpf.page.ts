import { Component, OnInit } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';

@Component({
  selector: 'app-cpf',
  standalone: false,
  //imports: [IonicModule, CommonModule, FormsModule],

  templateUrl: './cpf.page.html',
  styleUrls: ['./cpf.page.scss'],
})
export class CpfPage {

  cpf: string = '';
  resultado: string = '';
  validarCPF() {
  if (!this.cpf) {
    this.resultado = 'Digite um CPF';
    return;
  }
  const valido = cpf.isValid(this.cpf);

  if (valido) {
      this.resultado = 'CPF válido';
    } else {
      this.resultado = ' CPF inválido';
    }
  }

  //constructor() { }

  ngOnInit() {
  }

}
