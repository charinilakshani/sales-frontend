import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer.service';
import { clientInfo } from '../Model/clientInfo';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client = {}
  customerId;
  // client = <clienInfo>new Object();

  constructor(private clientservice: CustomerService, private router: Router,
    private route: ActivatedRoute) {

    this.customerId = this.route.snapshot.paramMap.get('customerId');
    if (this.customerId) {

      this.clientservice.getcustomerbyId(this.customerId).pipe(take(1)).subscribe(p => this.client = p);

    }
  }

  ngOnInit() {
  }

  save(users) {

    let clienInfo = <clientInfo>new Object();

    clienInfo.customerId =users.customerId;
    clienInfo.customerName =users.customerName;
    clienInfo.tradingName =users.tradingName;
    clienInfo.mainLocation = users.mainLocation;
    clienInfo.deliveryLocation =users.deliveryLocation;
    clienInfo.collectionLocation = users.collectionLocation;
    clienInfo.telephoneNumber =users.telephoneNumber;
    clienInfo.email = users.email;

    if (this.customerId) {
      console.log("users", users)

      this.clientservice.updateClient(users).subscribe(data => {
        console.log("updated", data);
      })
    } else {
      console.log("users", users);
      this.clientservice.addNewCient(clienInfo).subscribe(data => {
        console.log("add new ", data);
      })

    }

   
  }

  addItem(customerId){

    this.clientservice.DeleteClient(customerId).subscribe(data => {
      console.log("add new ", data);
    })
    console.log("add item",customerId);
      
  }
}
