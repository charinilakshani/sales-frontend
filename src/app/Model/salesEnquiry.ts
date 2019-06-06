import { salesEnquiryItem } from './salesEnquiryItem';

export interface salesEnquiry {
    
    enquiryId: number;
    itemAvailability: String;
    deliveryType: String;
    creditStatus: String;
    enquiryDate: Date;
    salesEnquiryItem:salesEnquiryItem[];
}