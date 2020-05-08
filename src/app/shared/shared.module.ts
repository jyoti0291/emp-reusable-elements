import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { FormioModule } from 'angular-formio';

import { PipesModule } from './pipes/index';
import { CommonLayoutService } from './services';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TextComponent } from './components/text/text.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { DateComponent } from './components/date/date.component';
import { EmailComponent } from './components/email/email.component';
import { FormComponent } from './components/form/form.component';
import { ErrorContainerComponent } from './components/error-container/error-container.component';
import { InfoComponent } from './components/info/info.component';
import { MultiselectDropdownComponent } from './components/multiselect-dropdown/multiselect-dropdown.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';

@NgModule({
    declarations: [
        CheckboxComponent,
        TextComponent,
        RadiobuttonComponent,
        ButtonComponent,
        SelectComponent,
        TextareaComponent,
        DateComponent,
        EmailComponent,
        FormComponent,
        ErrorContainerComponent,
        InfoComponent,
        MultiselectDropdownComponent,
        FormBuilderComponent,
        FormRendererComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        ReactiveFormsModule,
        NgbModule,
        AngularMultiSelectModule,
        FormioModule
    ],
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
        DateComponent,
        EmailComponent,
        FormComponent,
        MultiselectDropdownComponent,
        FormBuilderComponent,
        FormRendererComponent
    ],
    providers: [CommonLayoutService]
})
export class SharedModule {}
