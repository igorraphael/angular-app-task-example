import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { NovatarefaComponent } from './novatarefa/novatarefa.component';
import { ListartarefaComponent } from './listartarefa/listartarefa.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';




const APP_ROUTES : Routes = [
    {path: '', component: PaginainicialComponent },
    {path: 'novatarefa', component: NovatarefaComponent },
    {path: 'listar', component: ListartarefaComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
