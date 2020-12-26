import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

import { SigninComponent } from './signin/signin.component';

@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class HomeModule {}