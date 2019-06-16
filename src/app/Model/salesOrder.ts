import { clientInfo } from './clientInfo';
import { salesOrderItems } from './salesOrderItems';
import { CourierInfo } from './CourierInfo';

export class salesOrder {

    orderId: number;
    businessId: number;
    orderName:string;
    date: string;
    deliveryType: string;
    orderStatus:  string;
    orderType:string;
    returnDescription:string;
    

    stockid:number;
    stockname:string;
    stocktype:string;
    recorderlimit:number;
    ltime:string;
    stockPrice:number;
    quantity:number;
    description:string;
    status:string;
  

    clientInfo:clientInfo;
    courierInfo:CourierInfo;
   
}