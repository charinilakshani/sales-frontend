import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import{HttpClientModule} from'@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewOrderHistoryComponent } from './view-order-history/view-order-history.component';
import { ViewLeadsInquriesComponent } from './view-leads-inquries/view-leads-inquries.component';
import { ViewSalesOrdersComponent } from './view-sales-orders/view-sales-orders.component';
import { SendMaterialsManagmentComponent } from './send-materials-managment/send-materials-managment.component';
import { ViewConfirmationfromProductionComponent } from './view-confirmationfrom-production/view-confirmationfrom-production.component';
import { IssueNoteWareHouseComponent } from './issue-note-ware-house/issue-note-ware-house.component';
import { ViewCustomerInformationComponent } from './view-customer-information/view-customer-information.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import{CustomerService} from './Services/customer.service';
import{salesEnquiryService} from './Services/salesEnquiryService';
import { AdmininqurieComponent } from './admininqurie/admininqurie.component';
import { Reserve24Component } from './reserve24/reserve24.component';

import { VieworderCompletionComponent } from './vieworder-completion/vieworder-completion.component';
import { ViewReturnOrderComponent } from './view-return-order/view-return-order.component';
import { ViewOrderCancellationComponent } from './view-order-cancellation/view-order-cancellation.component';
import { OrderCancellationComponent } from './order-cancellation/order-cancellation.component';




@NgModule({
  declarations: [
    AppComponent,
    ViewCustomerInformationComponent,
    ViewOrderHistoryComponent,
    ViewLeadsInquriesComponent,
    ViewSalesOrdersComponent,
    SendMaterialsManagmentComponent,
    ViewConfirmationfromProductionComponent,
    IssueNoteWareHouseComponent,
    NavBarComponent,
    AdmininqurieComponent,
    Reserve24Component,
   
    VieworderCompletionComponent,
   
    ViewReturnOrderComponent,
   
    ViewOrderCancellationComponent,
   
    OrderCancellationComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
    FormsModule,
    CommonModule,

    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'view-customer-information', component: ViewCustomerInformationComponent },
      { path: 'view-order-history', component: ViewOrderHistoryComponent },
      { path: 'view-leads-inquries', component: ViewLeadsInquriesComponent },
     
      { path: 'send-materials-managment', component: SendMaterialsManagmentComponent },
      {path: 'view-return-order',component:ViewReturnOrderComponent},
      { path: 'view-confirmationfrom-production', component: ViewConfirmationfromProductionComponent },
      { path: 'issue-note-ware-house', component: IssueNoteWareHouseComponent },
      { path: 'view-order-cancellation', component:  ViewOrderCancellationComponent},
      { path: 'order-cancellation', component:   OrderCancellationComponent},

      // { path: 'view-return-order', component: IssueNoteWareHouseComponent },
      { path: 'view-sales-orders', component: ViewSalesOrdersComponent },
      { path: 'view-sales-orders/:orderId', component: ViewSalesOrdersComponent },

      {path: 'admininqurie/new', component: AdmininqurieComponent},
      {path: 'admininqurie/:enquiryId', component: AdmininqurieComponent},

      {path: 'send-materials-managment/new', component: SendMaterialsManagmentComponent},
      {path: 'send-materials-managment/:orderId', component: SendMaterialsManagmentComponent},
      {path: 'reserve24/:customerId', component: Reserve24Component},
      { path: 'order-cancellation/:customerId', component:   OrderCancellationComponent},

     
    ])
  ],
  providers: [CustomerService,
    salesEnquiryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
