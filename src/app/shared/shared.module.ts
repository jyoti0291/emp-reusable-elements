import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { PipesModule } from './pipes/index';
import { CommonLayoutService } from './services';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TextComponent } from './components/text/text.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { DateComponent } from './components/date/date.component';
@NgModule({
    declarations: [
        CheckboxComponent,
        TextComponent,
        RadiobuttonComponent,
        ButtonComponent,
        SelectComponent,
        TextareaComponent,
        DateComponent
    ],
    imports: [CommonModule, FormsModule, PipesModule, ReactiveFormsModule, NgbModule],
    exports: [
        TranslateModule,
        PipesModule,
        CheckboxComponent,
        TextComponent,
        RadiobuttonComponent,
        ButtonComponent,
        ReactiveFormsModule,
        FormsModule,
        SelectComponent,
        TextareaComponent,
        DateComponent
    ],
    providers: [CommonLayoutService]
})
export class SharedModule {}
