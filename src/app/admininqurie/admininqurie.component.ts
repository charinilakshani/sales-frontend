import { Component, OnInit, OnDestroy } from '@angular/core';
import { salesEnquiryService } from '../Services/salesEnquiryService';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { SalesEnquiry } from '../Model/SalesEnquiry';
import { salesEnquiryItems } from '../Model/salesEnquiryItems';
import { ItemServiceService } from '../Services/item-service.service';
import { salesOrder } from '../Model/salesOrder';
import { SalesOrderService } from '../Services/sales-order.service';
import { clientInfo } from '../Model/clientInfo';
import { CourierInfo } from '../Model/CourierInfo';



@Component({
  selector: 'app-admininqurie',
  templateUrl: './admininqurie.component.html',
  styleUrls: ['./admininqurie.component.css']
})
export class AdmininqurieComponent implements OnInit {
  salesEnquiry = <SalesEnquiry>new Object();
  enquiries: SalesEnquiry[] = [];

  stockDetails = <SalesEnquiry>new Object();

  enquiry
  enquiryId
  salesEnquiryItems: salesEnquiryItems[] = [];

  products

  // salesenquiry = 

  constructor(private router: Router, private route: ActivatedRoute, private salesEnquiryService: salesEnquiryService, private itemServie: ItemServiceService,
    private salesorderService:SalesOrderService) {

    this.products = this.itemServie.getAllItem();

    console.log("get avaibilty for front end", this.products);

    this.enquiryId = this.route.snapshot.paramMap.get('enquiryId');
    if (this.enquiryId != null || this.enquiryId != undefined) {
      console.log("enquire Id", this.enquiryId)
      this.salesEnquiryService.getEnquirybyId(this.enquiryId).pipe(take(1)).subscribe(p =>{
        this.salesEnquiry = p
        this.stockDetails = p;
        
      });
    }
  }

  ngOnInit() {
  }

  save(enquiry) {
    console.log("sales enquires", enquiry)

    this.salesEnquiry = <SalesEnquiry>new Object();
    this.salesEnquiry.enquiryId = enquiry.enquiryId;
    this.salesEnquiry.itemAvailability = enquiry.itemAvailability;
    this.salesEnquiry.deliveryType = enquiry.deliveryType;
    this.salesEnquiry.confirmStatus = enquiry.confirmStatus;
    this.salesEnquiry.enquiryDate = enquiry.enquiryDate;


    this.salesEnquiry.stockid = this.stockDetails.stockid;
    this.salesEnquiry.stockname =this.stockDetails.stockname;
    this.salesEnquiry.stocktype =this.stockDetails.stocktype;
    this.salesEnquiry.recorderlimit =this.stockDetails.recorderlimit;
    this.salesEnquiry.ltime =this.stockDetails.ltime;
    this.salesEnquiry.stockPrice =this.stockDetails.stockPrice;
    this.salesEnquiry.quantity =this.stockDetails.quantity;
    this.salesEnquiry.description =this.stockDetails.description;
    this.salesEnquiry.status =this.stockDetails.status;

    // item.salesEnquiryItems = this.salesEnquiryItems;
    console.log("sales enquiry item obejct", this.salesEnquiry)

    if (this.enquiryId) {

      this.salesEnquiryService.updateEnquiry(this.salesEnquiry).subscribe(data => {
        console.log(" update", data);
      });

    } else {

      this.salesEnquiryService.addNewEnquiry(this.salesEnquiry).subscribe(data => {
        console.log(" add new product", data);
      });
    }

  }

  placeOrder(){
    let order = new salesOrder();

    order.date =this.salesEnquiry.enquiryDate;
    order.quantity = this.salesEnquiry.quantity;
    order.deliveryType = this.salesEnquiry.deliveryType;

    order.stockid =this.salesEnquiry.stockid;
    order.stockname =this.salesEnquiry.stockname;
    order.stocktype = this.salesEnquiry.stocktype;
    order.recorderlimit =this.salesEnquiry.recorderlimit;
    order.ltime = this.salesEnquiry.ltime;
    order.stockPrice = this.salesEnquiry.stockPrice;
    order.quantity =this.salesEnquiry.quantity;
    order.description =this.salesEnquiry.description;
    order.status =this.salesEnquiry.status;
    // order.clientInfo = this.salesEnquiry.

    order.clientInfo = new clientInfo();
    order.courierInfo = new CourierInfo();
    console.log("Convert order", order);

    this.salesorderService.addNewProduct(order).subscribe(data => {
      console.log(" add new product", data);
    });
  
    
  }
  // passToSales(salesEnquiry){
  //   // console.log("working pass to sales")
  // }

  addItem(prod) {
    console.log(prod);

     let salesEnquiry = <SalesEnquiry>new Object();
    salesEnquiry.stockid = prod.stockid;
    salesEnquiry.stockname = prod.stockname;
    salesEnquiry.stocktype = prod.stocktype;
    salesEnquiry.recorderlimit =prod.recorderlimit;
    salesEnquiry.ltime =prod.ltime;

    salesEnquiry.stockPrice = prod.stockPrice;
    salesEnquiry.quantity = prod.quantity;
    salesEnquiry.description =prod.description;
    salesEnquiry.status =prod.status;


    this.stockDetails = salesEnquiry;



  }



}





