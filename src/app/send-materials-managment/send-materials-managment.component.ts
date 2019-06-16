import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SalesOrderService } from '../Services/sales-order.service';
import { take } from 'rxjs/operators';
import { salesOrder } from '../Model/salesOrder';
import { clientInfo } from '../Model/clientInfo';
import { salesEnquiryItems } from '../Model/salesEnquiryItems';
import { salesOrderItems } from '../Model/salesOrderItems';
import { CustomerService } from '../Services/customer.service';
import { CourierInfo } from '../Model/CourierInfo';
import { CourierInfoServiceService } from '../Services/courier-info-service.service';
import { ItemServiceService } from '../Services/item-service.service';

@Component({
  selector: 'app-send-materials-managment',
  templateUrl: './send-materials-managment.component.html',
  styleUrls: ['./send-materials-managment.component.css']
})
export class SendMaterialsManagmentComponent implements OnInit {
  salesOrder: salesOrder = <salesOrder>new Object();
  enquiry
  orderId

  orderItems: salesOrderItems[] = [];
  client = <clientInfo> new Object();
  curier = <CourierInfo>new Object();
  order = <salesOrder>new Object();
  stockDetails = <salesOrder>new Object();
  
  products;
  err: boolean = false;

  // products = [{prodId:1, prodName:"A", qty:10, prodPrice:300},{prodId:2, prodName:"B", qty:10, prodPrice:300},{prodId:3, prodName:"C", qty:10, prodPrice:300},{prodId:4, prodName:"D", qty:10, prodPrice:300}]
  constructor(private router: Router,
    private route: ActivatedRoute,
    private salesOrderService: SalesOrderService, private customerServ: CustomerService, private courierservice: CourierInfoServiceService, private itemService: ItemServiceService) {

    this.products = this.itemService.getAllItem();

    this.orderId = this.route.snapshot.paramMap.get('orderId');
    if (this.orderId) {

      this.salesOrderService.getOrderbyId(this.orderId).pipe(take(1)).subscribe(p => {
        this.salesOrder = p
        this.client = p.clientInfo;
        this.curier = p.courierInfo;
        this.stockDetails = p;
      });
    }
  }

  getCustomer(email) {
    this.customerServ.getCustomerByEmail(email).subscribe(client => {
      this.client = client;
      this.err = false;
    }, err => {
      this.err = true;
    })
  }

  getCurier(email) {
    this.courierservice.getByCourierEmail(email).subscribe(curier => {
      this.curier = curier;
      this.err=false;
    },err=>this.err = true)
  }

  save(salesOrder: salesOrder) {

    this.order = <salesOrder>new Object();
    this.order.orderId = salesOrder.orderId;
    this.order.businessId = salesOrder.businessId;
    this.order.date = salesOrder.date;
    this.order.deliveryType = salesOrder.deliveryType;
    this.order.orderStatus = salesOrder.orderStatus;
    this.order.orderType = salesOrder.orderType;
    this.order.returnDescription = salesOrder.returnDescription;


    this.order.stockid = this.stockDetails.stockid;
    this.order.stockname =this.stockDetails.stockname;
    this.order.stocktype =this.stockDetails.stocktype;
    this.order.recorderlimit =this.stockDetails.recorderlimit;
    this.order.ltime =this.stockDetails.ltime;
    this.order.stockPrice =this.stockDetails.stockPrice;
    this.order.quantity =this.stockDetails.quantity;
    this.order.description =this.stockDetails.description;
    this.order.status =this.stockDetails.status;

    this.order.clientInfo = this.client;
    this.order.courierInfo = this.curier;


    if (this.orderId) {
      this.salesOrderService.getOrderbyId(this.orderId).subscribe(order => {
        let salesOrder1 = <salesOrder>new Object();
        salesOrder1.orderId = salesOrder.orderId

        this.salesOrderService.updateProduct(this.order).subscribe(res => {
        })

      }, err => {
        console.log(err);
      });

    } else {
      this.salesOrderService.addNewProduct(this.order).subscribe(data => {
        console.log(" add new product", data);
      });
    }
  }
  sendT() {
    console.log("send")

  }

  addItem(prod: salesOrder) {
    console.log("get itemsss", prod)

    let order = <salesOrder>new Object();
    order.stockid = prod.stockid;
    order.stockname = prod.stockname;
    order.stocktype = prod.stocktype;
    
    order.stockPrice = prod.stockPrice;
    order.quantity = prod.quantity;
    order.recorderlimit =prod.recorderlimit;
    order.ltime =prod.ltime;

    order.stockPrice = prod.stockPrice;
    order.quantity = prod.quantity;
    order.description =prod.description;
    order.status =prod.status;


    this.stockDetails = order;
  }
  ngOnInit() {
  }

}
