export interface salesOrder {

    orderId: number;
    businessId: number;
    enquiryId: number;
    itemId: number;
    itemName: String;
    qty:number;
    deliveryType: String;
    mainLocation: String;
    deliveryLocation: String;
    collectionLocation: String;
    telphoneNumber:String;
    orderDate: Date;
    courierEmployeeId: String;
    courierName: String;
    curierMobileNumber: String;
    curierEmail: String;

     materialManagementStatus: String;
     productionStatus: String;
     wareHouseStatus: String;
     cancellationStatus: String;
     returnType:String;
   
}