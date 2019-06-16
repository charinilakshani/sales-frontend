import { salesEnquiryItems } from './salesEnquiryItems';

export interface SalesEnquiry {
    
    enquiryId: number;
    itemAvailability: string;
    
    deliveryType: string;
    confirmStatus: string;
    enquiryDate: string;

    stockid:number;
    stockname:string;
    stocktype:string;
    recorderlimit:number;
    ltime:string;
    stockPrice:number;
    quantity:number;
    description:string;
    status:string;
  

    // salesEnquiryItems:salesEnquiryItems[];
}