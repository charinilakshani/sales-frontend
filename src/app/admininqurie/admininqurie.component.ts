import { Component, OnInit, OnDestroy } from '@angular/core';
import { salesEnquiryService } from '../Services/salesEnquiryService';
import { Router, ActivatedRoute } from '@angular/router';
import{ take } from 'rxjs/operators';
import { salesEnquiry } from '../Model/salesEnquiry';



@Component({
  selector: 'app-admininqurie',
  templateUrl: './admininqurie.component.html',
  styleUrls: ['./admininqurie.component.css']
})
export class AdmininqurieComponent implements OnInit {
  salesEnquiry ={}
  enquiry
  enquiryId
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

  save(salesEnquiry) {
    
    console.log("pIdddddd",salesEnquiry.enquiryId);

    if (this.enquiryId) {

      this.salesEnquiryService.updateEnquiry(salesEnquiry).subscribe(data => {
        console.log(" update", data);
      });

    } else {
      this.salesEnquiryService.addNewEnquiry(salesEnquiry).subscribe(data => {
        console.log(" add new product", data);
      });
    }
  
}

// passToSales(salesEnquiry){
//   // console.log("working pass to sales")
// }
}



