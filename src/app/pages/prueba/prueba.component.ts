import { Component } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { PruebasService } from 'src/app/services/pruebas.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {

  clientes: any;

    client: Cliente = new Cliente();
    isUpdating: boolean = false;

    constructor(private clientesService: PruebasService){

    }

    ngOnInit(): void {
      this.clientes = this.clientesService.getClientes();
    }

    guardar(){
      console.log('nnnnn')
      this.clientesService.saveCliente(this.client).subscribe(data => {
        console.log(data);
        if(data.codigo == 1)
          alert("Error al insertar "+ data.mensaje);
        else
          this.ngOnInit();
      })
    }

    /** 
    actualizar(){
      this.clientesService.updateCliente(this.client).subscribe(data => {
        if(data.codigo == 1)
          alert("Error al insertar "+ data.mensaje);
        else
          this.ngOnInit();
      })
    }
    */

    mostrarFormularioActualizar(cliente: Cliente) {
      this.isUpdating = true;
      this.client = { ...cliente }; // Copia los datos del cliente seleccionado al formulario de actualización

      if (this.client.deudas === null) {
        this.client.deudas = [];
      }
    }
    
    actualizar() {
      this.clientesService.updateCliente(this.client).subscribe(data => {
        console.log(data)
        if (data.codigo == 1){
          alert("Error al actualizar " + data.mensaje);
          
        }else {
          this.client = new Cliente(); // Reinicia el formulario de actualización
          this.ngOnInit();
        }
      });
    }

    borrarCliente(codigo: number) {
      if (confirm("¿Estás seguro de borrar este cliente?")) {
        this.clientesService.deleteCliente(codigo).subscribe(data => {
          if (data.codigo == 1)
            alert("Error al borrar " + data.mensaje);
          else
            this.ngOnInit();
        });
      }
    }


}
