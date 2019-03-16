import {MatButtonModule, MatCheckboxModule ,MatCardModule ,MatDividerModule , MatStepperModule , MatIconModule, MatDatepickerModule, MatNativeDateModule,MatFormFieldModule , MatInputModule , MatSelectModule, MatGridListModule, MatRadioModule } from '@angular/material';

import {NgModule} from '@angular/core';



@NgModule({

    imports :[MatButtonModule, MatCheckboxModule, MatCardModule , MatDividerModule , MatStepperModule , MatIconModule, MatDatepickerModule, MatNativeDateModule,MatFormFieldModule , MatInputModule , MatSelectModule, MatGridListModule, MatRadioModule],

    exports :[MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule , MatStepperModule , MatIconModule, MatDatepickerModule, MatNativeDateModule,MatFormFieldModule , MatInputModule , MatSelectModule, MatGridListModule, MatRadioModule],


})
export class MaterialModule {

}
