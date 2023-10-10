import { Component } from '@angular/core';
import { ServiceOrderService } from 'src/app/Service/ServiceOrder/service-order.service';
import { ServiceOrder } from 'src/app/Service/ServiceOrder/service-order.model';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent {
  orders: Array<ServiceOrder> = new Array();
  constructor (private ordersService: ServiceOrderService){

  }
  ngOnInit(){
    this.getAllOrders();
  }
  excluirOrdem(id: number){
    this.ordersService.deleteOrder(id).subscribe(group => {
      const index = this.orders.findIndex(order => order.id === id);
      if (index !== -1) {
        this.orders.splice(index, 1);
      }
      console.log("EXCLUÌDO");
      
    }, err =>{
      console.log("deu ruim apagar", err);
    });
  }
  getAllOrders(){
    this.ordersService.getOrder().subscribe(orders => {
      console.log("Resu:", orders);
      orders.map((ordem, i)=>{
        if(ordem.status == "0"){
          orders[i].status = "Aberto";
        }else{
          orders[i].status = "Fechado";
        }
        
      });
      this.orders = orders;
    }, err =>{
      console.log("deu ruim ", err);
    });
  }
}
