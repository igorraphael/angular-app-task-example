import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TarefasService } from './tarefas.service';
import { BsDatepickerModule, AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NovatarefaComponent } from './novatarefa/novatarefa.component';
import { ListartarefaComponent } from './listartarefa/listartarefa.component';
import { routing } from './app.rout';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({ 
  declarations: [ //todos os componentes, diretivas.
    AppComponent, NavmenuComponent, NovatarefaComponent, ListartarefaComponent, PaginainicialComponent,
    
  ],
  imports: [ //outros modulos q quer utilizar dentro do componentes
    BrowserModule, routing, BsDatepickerModule.forRoot(), HttpClientModule, FormsModule, AlertModule.forRoot() 
  ],
  providers: [ TarefasService ], //todos os serviços disponiveis para todos os componentes
  bootstrap: [AppComponent]
})
export class AppModule { }
