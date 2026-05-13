import { Component, OnInit } from '@angular/core';

// IMPORTS NECESSÁRIOS
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,

})
export class LoginPage implements OnInit {

  email: string = '';
  senha: string = '';

  constructor() {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  login() {
  if (!this.email || !this.senha) {
    alert('Preencha todos os campos!');
  return;
  }

  if (this.email === 'admin@email.com' && this.senha === '123456') {
    alert('Login realizado com sucesso!');
  } else {
    alert('Email ou senha inválidos!');
  }
  }
  }

