import { Component } from '@angular/core';
import { ServiceOrderForm } from 'src/app/Service/ServiceOrder/service-order.model';
import { ServiceOrderService } from 'src/app/Service/ServiceOrder/service-order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css']
})
export class FormOrderComponent {
  order: any = {};
  constructor(private orderService: ServiceOrderService, private route: ActivatedRoute) { };
  ngOnInit() {
    const orderId = this.route.snapshot.params['id'];
    if (orderId) {
      this.orderService.getOrderById(orderId).subscribe(order => {
        console.log('order', order);
        this.order = order;
      });
    }
  }
  onSubmit(formData: ServiceOrderForm) {
    console.log("FORM AQUI", formData);
    if(formData.id != undefined){
      this.orderService.updateOrder(formData.id, formData).subscribe(
        (response) => {
          console.log('Ordem atualizada com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao criar ordem:', error);
        }
      );
    }else{
      formData.status = 0;
      formData.user_id = 1;
      this.orderService.createOrder(formData).subscribe(
        (response) => {
          console.log('Ordem criada com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao criar ordem:', error);
        }
      );
    }
    
  }
}
