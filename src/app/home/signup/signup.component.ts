import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: [''],
            fullName: [''],
            userName: [''],
            password: ['']
        })
    }


}