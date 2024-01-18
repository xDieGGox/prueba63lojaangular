import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from '../enviroments/enviroments';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private htttp: HttpClient) { }

  getClientes(){
    let url = enviroments.WS_PATH+"/clientes/list";
    return this.htttp.get<any>(url);
  }

  saveCliente(cliente: Cliente){
    let url = enviroments.WS_PATH+"/clientes";
    return this.htttp.post<any>(url, cliente);
  }

  updateCliente(cliente: Cliente){
    let url = enviroments.WS_PATH+"/clientes";
    return this.htttp.put<any>(url,cliente);

  }

  deleteCliente(codigo: number){
    let url = enviroments.WS_PATH+"/clientes?id="+codigo;
    return this.htttp.delete<any>(url); 
  }

  buscarCliente(termino: string) {
    let url = `${enviroments.WS_PATH}/clientes/buscar?termino=${termino}`;
    return this.htttp.get<any>(url);
  }
}
