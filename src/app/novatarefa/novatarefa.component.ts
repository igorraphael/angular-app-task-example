import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TarefasService } from '../tarefas.service';


@Component({
  selector: 'app-novatarefa',
  templateUrl: './novatarefa.component.html',
  styleUrls: ['./novatarefa.component.css']
})
export class NovatarefaComponent implements OnInit {

  msgTask: boolean = false;
  tarefa: any = {
    nome_tarefa: null,
    importancia: null,
    data: null
  }

  constructor(private tarefaService: TarefasService) { }

  ngOnInit() {
  }

  onSubmit(form){
    //let nome_task = form.value.nome_tarefa;
    //let impor = form.value.importancia;
    let dt = form.value.data.toISOString().split('T')[0];
    this.tarefaService.add(form.value.nome_tarefa, form.value.importancia, dt)
    .subscribe(dados => {
      if(dados.indexOf("success")){
        this.msgTask = true;
      }
    });
  }
}
