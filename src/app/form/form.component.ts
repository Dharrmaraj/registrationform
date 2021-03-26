import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from '@angular-material-extensions/select-country';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


//declare var $:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  imageSrc:string | ArrayBuffer='../../assets/Image-01-512.png';
  
  callingCode:string = '+91';

  countryInfo:any[]=[];
  stateInfo:any[]=[];
  codeInput:string='';
  codeVaild:boolean=false;

  constructor(private _formBuilder: FormBuilder,private country:CommonService,public route:Router) {
    
   }

  
  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      fullname: ['', Validators.required],
      gender: [1, Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      upload: ['', Validators.required],
      comapny_name: ['', Validators.required],
      emailid: ['', [Validators.required,Validators.email]],
      job_title: ['', Validators.required],
      years_of_experience: ['', Validators.required],
      termsconditions: [false, Validators.requiredTrue]
    });

    this.thirdFormGroup = this._formBuilder.group({
      enteryourcode: ['', Validators.required]
    });


    // this.firstFormGroup.get('country').valueChanges
    // .subscribe(country => console
    // .log('this.countryFormGroup.get("country").valueChanges', country));
    
    
    this.getCountries();

    // $("input[type='image']").click(function() {
    //   $("input[id='my_file']").click();
    // });
  }

  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries || [];
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  async onCountrySelected(countryValue:any) {
    
    this.callingCode=countryValue.callingCode;
    var countryname= (countryValue.name).toLowerCase();
    
    let index = await this.countryInfo.findIndex(res=>(res.CountryName).toLowerCase()==countryname);
    if(index>-1){
      this.stateInfo=this.countryInfo[index]['States'];
    }
  }


  // this called every time when user changed the code
  onCodeChanged(code: string) {
   
    if(code!='' && code.length==5){
      this.codeInput=code;
     this.codeVaild=true;
    }else{
      this.codeVaild=false;
    }
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
   
    if(code!='' && code.length==5){
      this.codeInput=code;
      this.codeVaild=true;
    }else{
      this.codeVaild=false;
    }
  }


  onSelectFile(event:any) { 
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.imageSrc = event.target.result;
      }
    }
}

keyPress(evt:any){
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}

submitAll(){
  var form1 = this.firstFormGroup.value;
  var form2 = this.secondFormGroup.value;

  let data = { firstFormGroup:form1, secondFormGroup:form2,resetcode:this.codeInput};

  let getData:any = JSON.parse(localStorage.getItem('allvalues') || '[]');
  
  var array = getData || [];
  array.push(data)

  if(array.length<=10){
    localStorage.setItem("allvalues",JSON.stringify(array));
  }else{
    array.shift();
    localStorage.setItem("allvalues",JSON.stringify(array));
  }

  this.route.navigate(['success'], { });
  
}


}
