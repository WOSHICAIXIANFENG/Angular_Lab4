/**
 * Created by Samuel on 13/7/2017.
 */
import { Component } from '@angular/core';
import { MyHttpService} from './service/MyHttpService';
import { DataService } from './service/data.service';
import { Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  providers: [MyHttpService]
})

export class DataDrivenComponent {
  myForm: FormGroup;

  user = {
    id:'',
    name: 'Samuel',
    email: 'samuel.caiceo@gmail.com',
    post: 'post summary'
  };

  constructor(private formBuilder: FormBuilder, private httpService: MyHttpService, private router: Router, private dataHelper: DataService) {
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'name': [this.user.name, [Validators.required]],
        'email': [this.user.email, [
          Validators.required
          //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'post': [this.user.post, [Validators.required, this.lengthValidator]]
      })
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  lengthValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.length <= 10) {
      return {example: true};
    }
    return null;
  }

  onSubmit() {
    //console.log(this.myForm);
    //console.log(this.myForm.value);
    console.log(this.myForm.controls['userData'].value);
    // do navigation
    this.dataHelper.setData(JSON.stringify(this.myForm.controls['userData'].value));
    this.router.navigate(['/result']);
  }

  onGetData() {
    this.httpService.getUserInfo().subscribe(
      response => {
        //console.log(response);
        let jsonStr = response.json();
        //console.log(jsonStr);

        // you patchValue for outer FormGroup, it will fail
        //this.myForm.patchValue({'name': jsonStr.name});
        //this.myForm.patchValue({'email': jsonStr.email});

        // Note: you should udpate value for inner FormGroup
        this.myForm.controls['userData'].patchValue({'name': jsonStr.name});
        this.myForm.controls['userData'].patchValue({'email': jsonStr.email});

        this.httpService.getPostsInfoById(jsonStr.id).subscribe(
          data => {
            let jsons = data.json();
            this.myForm.controls['userData'].patchValue({'post': jsons[1].body});
          },
          err => {},
          () => {}
        );
      },
      error => console.error(error),
      () => console.log('operations completed!')
    );
  }
}
