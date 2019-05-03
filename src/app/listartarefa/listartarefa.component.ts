import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-listartarefa',
  templateUrl: './listartarefa.component.html',
  styleUrls: ['./listartarefa.component.css']
})
export class ListartarefaComponent implements OnInit {
  
  deleteMsg: boolean = false;
  isHidden: boolean = false;
  tasks : Array<any>;

  constructor(private tarefaService: TarefasService) { }

  ngOnInit() {
    this.isHidden = true;
    this.list();
    this.isHidden = false;
  }

  list(){
    this.tarefaService.listar().subscribe( dados => this.tasks = dados);
  }

  onDelete(tarefa){
    const id = tarefa.id;
    const conf = confirm("Deseja excluir essa tarefa?");
   
    if (conf == true){
       this.tarefaService.del(id).subscribe( dados => {
        if( dados.indexOf("deletada") ){
          this.deleteMsg = true;
          const index = this.tasks.indexOf(tarefa);
          if( index > -1){
            this.tasks.splice(index, 1);
          }
        }
       });
      
    }
    
  }
}
