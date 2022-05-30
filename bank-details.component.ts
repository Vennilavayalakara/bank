import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  BANK = [];

  URL = "https://indianbankfinder.herokuapp.com/api/bank-branch/"
  // ?city=Mumbai&bank=state%20bank%20of%20india

  CITY = [
    { name: 'Mumbai', value: 1 }, { name: 'Pune', value: 2 }, { name: 'Chennai', value: 3 },
    { name: 'New Delhi', value: 4 }, { name: 'Kochi', value: 5 }];


  slct_color = "rgb(255 180 180);"

  Mumbai_Bnk: any = [
    {
      "ifsc": "SBIN0008780",
      "bank": "STATE BANK OF INDIA",
      "branch": "GATEWAY OF INDIA",
      "address": "RAM NIMI, 8 MANDALIK ROAD, COLABA, MUMBAI",
      "city": "MUMBAI",
      "district": "HYDERABAD URBAN",
      "state": "ANDHRA PRADESH"
    },
    {
      "ifsc": "SBIN0010295",
      "bank": "STATE BANK OF INDIA",
      "branch": "CURRENCY ADMIN CELL S. MUMBAI",
      "address": "MUMBAI",
      "city": "MUMBAI",
      "district": "NORTH GOA",
      "state": "GOA"
    },
    {
      "ifsc": "SBIN0008783",
      "bank": "STATE BANK OF INDIA",
      "branch": "WORLI SEA FACE",
      "address": "SAGAR TARANG CO-OP. HOUSING ,SOCIETY LTD.,KHAN ABDULGAFFARKHAN ROAD, MUMBAI , PIN - 400025",
      "city": "MUMBAI",
      "district": "VADODARA",
      "state": "GUJARAT"
    },
  ]

  Pune_Bnk: any = [
    {
      "ifsc": "SBIN0010151",
      "bank": "STATE BANK OF INDIA",
      "branch": "STRESSED ASSETS RESOLUTION CENTRE  PUNE",
      "address": "PUNE MAHARSHTRA",
      "city": "PUNE",
      "district": "RAIPUR",
      "state": "CHANDIGARH"
  },
  {
      "ifsc": "SBIN0010287",
      "bank": "STATE BANK OF INDIA",
      "branch": "RACPC  PUNE",
      "address": "DIST PUNESTATE MAHARASHTRA",
      "city": "PUNE",
      "district": "AHMEDABAD",
      "state": "GUJARAT"
  },
  {
      "ifsc": "SBIN0008752",
      "bank": "STATE BANK OF INDIA",
      "branch": "KATRAJ",
      "address": "PUNE,SATARA RD., NR. BHARATI VIDYAPITH, PIN - 411046",
      "city": "PUNE",
      "district": "DHANBAD",
      "state": "JHARKHAND"
  },
  ]

  Chennai_Bnk: any = [
    {
      "ifsc": "SBIN0012747",
      "bank": "STATE BANK OF INDIA",
      "branch": "18TH MAIN ROAD  ANNA NAGAR WEST",
      "address": "PLOT NO 1236,NEW NO 41,18TH MAIN ROAD,ANNA NAGAR WEST,CHENNAI 600040",
      "city": "CHENNAI",
      "district": "CHENNAI",
      "state": "TAMIL NADU",
      "fav": false
    },
    {
      "ifsc": "SBIN0016284",
      "bank": "STATE BANK OF INDIA",
      "branch": "6TH AVENUE  ANNA NAGAR",
      "address": "PLOT NO. 1157, DOOR NO. 137, 6TH AVENUE, ANNA NAGAR WEST , M CHENNAI. TAMIL NADU 600040",
      "city": "CHENNAI",
      "district": "CHENNAI",
      "state": "TAMIL NADU",
      "fav": false
    },
    {
      "ifsc": "SBIN0012749",
      "bank": "STATE BANK OF INDIA",
      "branch": "ABHIRAMAPURAM",
      "address": "OLD NO.28 BY NEW NO.4 FIRST STREET,ABHIRAMAPURAM,CHENNAI 600018",
      "city": "CHENNAI",
      "district": "CHENNAI",
      "state": "TAMIL NADU",
      "fav": false
    },
  ]

  Delhi_Bnk: any = [
    {
      "ifsc": "SBIN0030296",
      "bank": "STATE BANK OF INDIA",
      "branch": "AHILYA BUILDING GREATER KAILASH-II N .DELHI",
      "address": "10,M BLOCK MARKET,GREATER KAILASH II",
      "city": "NEW DELHI",
      "district": "DELHI",
      "state": "DELHI"
  },
  {
      "ifsc": "SBIN0016411",
      "bank": "STATE BANK OF INDIA",
      "branch": "BASANT LOK",
      "address": "32 PRIYA COMPLEX,VASANT VIHAR, DISTT. DELHI. NEW DELHI110057",
      "city": "NEW DELHI",
      "district": "DELHI",
      "state": "DELHI"
  },
  {
      "ifsc": "SBIN0014585",
      "bank": "STATE BANK OF INDIA",
      "branch": "BIJWASAN",
      "address": "KHASRA NO 350,BIJWASAN MAIN ROAD,NEAR GOLOKDHAM MANDIR,NEW DELHI,DIST DELHI 110061",
      "city": "NEW DELHI",
      "district": "DELHI",
      "state": "DELHI"
  },
  ]

  Kochi_Bnk: any = [
    {
      "ifsc": "SBIN0060181",
      "bank": "STATE BANK OF INDIA",
      "branch": "BANERJI ROAD BRANCH  ERNAKULAM",
      "address": "NEAR HIGH COURT JUNCTION,CRYSTAL COMPLEX,BENARJEE ROAD ERNAKULAM 682031 KERALA",
      "city": "KOCHI",
      "district": "ERNAKULAM",
      "state": "KERALA"
  },
  {
      "ifsc": "SBIN0010559",
      "bank": "STATE BANK OF INDIA",
      "branch": "CENTRE OF ENGG STUDIES  CUSAT",
      "address": "SCHOOL OF ENGG MAIN CAMPUS, CUSAT,KALAMASSERI, ERNAKULAM DISTRICT 682022",
      "city": "KOCHI",
      "district": "ERNAKULAM",
      "state": "KERALA"
  },
  {
      "ifsc": "SBIN0011917",
      "bank": "STATE BANK OF INDIA",
      "branch": "CHOTTANIKARA",
      "address": "KRISHNANS BUILDING,CHOTTANIKARAA BYE PASS JUNCTION,DISTERNAKULAM 682312",
      "city": "KOCHI",
      "district": "ERNAKULAM",
      "state": "KERALA"
  },
  ]




  constructor(private myForms: FormBuilder, private http: HttpClient, private toastr: ToastrService,) { }

  ngOnInit(): void {

  }


  BankForms: FormGroup = this.myForms.group({
    id: [null],
    city: [null],

  });



  Get_Details() {
    this.BANK = []
    let FRM = this.BankForms.value.city;
    console.log(FRM);

    if (FRM.value == 1) { this.BANK.push(this.Mumbai_Bnk) }
    if (FRM.value == 2) { this.BANK.push(this.Pune_Bnk) }
    if (FRM.value == 3) { this.BANK.push(this.Chennai_Bnk)}
    if (FRM.value == 4) { this.BANK.push(this.Delhi_Bnk) }
    if (FRM.value == 5) { this.BANK.push(this.Kochi_Bnk) }

    // this.http.get(this.URL + '?city=' + FRM.name + '&bank=state%20bank%20of%20india')
    //   .subscribe(res => {
    //     console.log(res);
    //     this.BANK = res;
    //   });
  }

  Refresh() {
    this.Get_Details();

  }


  Set_fav(ROW) {
    this.BANK.map(ele => {
      ele.fav = false;
    });
    ROW.fav = true;

  }


  ClearFn(){
    this.BankForms.reset();
    this.BANK = []
  }

  //----------sorting--Filtering--pagination---------------
  order: string = 'dptCode';
  reverse: boolean = false;
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  userFilter: any = {};

  // page = 1; //pagination
  // pageSize = environment.Pagination; //pagination

  //----------sorting---Filtering--pagination--------------

}


