import { Component, OnInit } from '@angular/core';
import { OrderCompletionService } from '../Services/order-completion.service';
import { OrderCompletionNote } from '../Model/OrderCompletionNote';

@Component({
  selector: 'app-vieworder-completion',
  templateUrl: './vieworder-completion.component.html',
  styleUrls: ['./vieworder-completion.component.css']
})
export class VieworderCompletionComponent implements OnInit {
note
events: OrderCompletionNote[] = [];
  constructor(private orderCompletionService: OrderCompletionService) { 
 
    

    // this.note = this.orderCompletionService.getALlNote();
    // console.log("Get Notice ", this.note);
  }

  ngOnInit() {
    this.note = this.orderCompletionService.getALlNote().
    subscribe(events => this.events =events
      
      
    )
  
  }

}
