import { Routes } from '@angular/router';
import { EventoComponent } from './evento/evento.component';
import { InscricaoComponent } from './evento/inscricao/inscricao.component';
import { ProgramacaoComponent } from './evento/programacao/programacao.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'evento',
    pathMatch: 'full'
  },
  {
    path: 'evento',
    component: EventoComponent,
    children: [
      {
        path: '',
        redirectTo: 'inscricao',
        pathMatch: 'full'
      },
      {
        path: 'inscricao',
        component: InscricaoComponent
      },
      {
        path: 'programacao',
        component: ProgramacaoComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'evento'
  }
];
