import { Component } from '@angular/core';

@Component({
  selector: 'app-programacao',
  standalone: true,
  templateUrl: './programacao.component.html',
  styleUrl: './programacao.component.css'
})
export class ProgramacaoComponent {
  atividades = [
    { horario: '09:00', titulo: 'Abertura do evento' },
    { horario: '10:00', titulo: 'Desenvolvimento Front-End com Angular' },
    { horario: '11:00', titulo: 'Inteligência Artificial aplicada ao desenvolvimento de software' },
    { horario: '14:00', titulo: 'Desenvolvimento de Jogos' },
    { horario: '15:30', titulo: 'Desenvolvimento Mobile' },
    { horario: '17:00', titulo: 'Encerramento' }
  ];
}
