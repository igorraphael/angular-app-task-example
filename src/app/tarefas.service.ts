import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  listTasksUrl = 'http://192.168.100.147/webservice/todo/listar';
  addTasksUrl = 'http://192.168.100.147/webservice/todo/add';
  deleteTasksUrl = 'http://192.168.100.147/webservice/todo/delete';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.listTasksUrl}`);
  }

  add(tarefa, importancia, dt_hora){
    const parametros = `nome_tarefa=${tarefa}&importancia=${importancia}&data_hora=${dt_hora}`;
    return this.http.post<any[]>(`${this.addTasksUrl}`, parametros, {headers: {'Content-type': 'application/x-www-form-urlencoded'} } );
  }

  del(id){
    const parametros = `id_tarefa=${id}`;
    return this.http.post<any[]>(`${this.deleteTasksUrl}`, parametros, {headers: {'Content-type': 'application/x-www-form-urlencoded'} });
  }


}
