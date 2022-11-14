
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerUrl = 'http://localhost:8080/api/customers'

  addUserForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    address: '',
    postal_code: '',
    phone: ''
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let customerObjFromForm = this.addUserForm.value;
    let customer = {
      firstName: customerObjFromForm.firstName,
      lastName: customerObjFromForm.lastName,
      address: customerObjFromForm.address,
      postal_code: customerObjFromForm.postal_code,
      phone: customerObjFromForm.phone,
      division: "http://localhost:8080/api/divisions/1"
    }

    this.http.post(this.customerUrl, customer).subscribe();

    this.router.navigate(["/customer"])
  }

}
