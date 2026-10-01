import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.css'
})
export class InscricaoComponent {

  participante = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    dataNascimento: '',

    endereco: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      cidade: '',
      estado: ''
    },

    situacaoProfissional: '',
    instituicao: '',
    curso: '',
    empresa: '',

    areaInteresse: '',
    nivelExperiencia: '',

    modalidade: '',
    tecnologia: '',
    estacionamento: false,

    workshops: {
      angular: false,
      java: false,
      jogos: false,
      ia: false,
      mobile: false
    },

    observacoes: '',
    aceitouTermos: false
  };

  inscricaoRealizada = false;

  get ehEstudante(): boolean {
    return this.participante.situacaoProfissional === 'Estudante';
  }

  get ehProfissional(): boolean {
    return ['Empregado', 'Autônomo', 'Empresário']
      .includes(this.participante.situacaoProfissional);
  }

  get ehPresencial(): boolean {
    return this.participante.modalidade === 'Presencial';
  }

  realizarInscricao(): void {
    console.log(this.participante);
    this.inscricaoRealizada = true;
  }
}
