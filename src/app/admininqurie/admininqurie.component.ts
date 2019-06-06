import { Component, OnInit, OnDestroy } from '@angular/core';
import { salesEnquiryService } from '../Services/salesEnquiryService';
import { Router, ActivatedRoute } from '@angular/router';
import{ take } from 'rxjs/operators';
import { salesEnquiry } from '../Model/salesEnquiry';
import { salesEnquiryItem } from '../Model/salesEnquiryItem';



@Component({
  selector: 'app-admininqurie',
  templateUrl: './admininqurie.component.html',
  styleUrls: ['./admininqurie.component.css']
})
export class AdmininqurieComponent implements OnInit {
  salesEnquiry ={}
  enquiries:salesEnquiry[] = [];

  enquiry
  enquiryId
  orderItems: salesEnquiryItem[]= [];
  
  products = [{prodId:1, prodName:"A", qty:10, prodPrice:300},{prodId:2, prodName:"B", qty:10, prodPrice:300},{prodId:3, prodName:"C", qty:10, prodPrice:300},{prodId:4, prodName:"D", qty:10, prodPrice:300}]
  
  constructor(private router:Router,
     private route:ActivatedRoute,
     private salesEnquiryService:salesEnquiryService) {


      this.enquiryId =this.route.snapshot.paramMap.get('enquiryId');
      if(this.enquiryId){
        console.log("enquire Id",this.enquiryId)
        this.salesEnquiryService.getEnquirybyId( this.enquiryId).pipe(take(1)).subscribe(p =>this.salesEnquiry = p);
      }
      }

  ngOnInit() {
  }

  save(enquiry) {
    console.log("sales enquires",enquiry)
 
    let item =<salesEnquiry> new Object();

    item.enquiryId =enquiry.enquiryId;
   item.itemAvailability =enquiry.itemAvailability;
   item.deliveryType = enquiry.deliveryType;
   item.creditStatus = enquiry.creditStatus;
   item.enquiryDate =enquiry.enquiryDate;

    item.salesEnquiryItem = this.orderItems;

   
 
    
  console.log("sales enquiry item obejct",item)

    if (this.enquiryId) {

      this.salesEnquiryService.updateEnquiry(enquiry).subscribe(data => {
        console.log(" update", data);
      });

    } else {

      this.salesEnquiryService.addNewEnquiry(enquiry).subscribe(data => {
        console.log(" add new product", data);
      });
    }
  
}

// passToSales(salesEnquiry){
//   // console.log("working pass to sales")
// }

  addItem(prod){
    console.log(prod);
    let item : salesEnquiryItem = <salesEnquiryItem> new Object();
    item.enquiryProductName = prod.prodName;
    item.enquiryProductPrice = prod.prodPrice;
    item.quantity = 1;
    this.orderItems.push(item);
  }
}
// removeFromCart(products:Products){
    
//   console.log("products",products);
//     let cart =<Cart> new Object();
//     cart.pId = products.pId;
//     cart.userId =  1;
//     cart.quantity = -1;
//     cart.productName = products.productName;
//     cart.price = products.price;
  
//     this.cartservice.addToCart(cart);

// }




