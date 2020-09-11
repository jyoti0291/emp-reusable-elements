# EmpUserInterface

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to use reusable components

<rx-form [group]="form" (submitted)="onSubmit($event)">
    <rx-checkbox [field]="fields.userRoleCheckbox" [group]="form"></rx-checkbox>

    <rx-text [field]="fields.usernameText" [group]="form" (changedValue)="textChanged($event)"></rx-text>

    <rx-email [field]="fields.email" [group]="form" (changedValue)="emailChanged($event)"></rx-email>

    <rx-radiobutton [field]="fields.genderRadio" [group]="form"></rx-radiobutton>

    <rx-textarea [field]="fields.area" [group]="form" (changedValue)="textAreaChanged($event)"></rx-textarea>

    <rx-select [field]="fields.userTeamSelect" [group]="form"></rx-select>

    <rx-date [field]="fields.userRegDate" [group]="form"></rx-date>
    
    <rx-multiselect-dropdown [field]="fields.userMultiSelect" [group]="form" (changedValue)="local($event)">
    </rx-multiselect-dropdown> 
</rx-form>

ngOnInit() {
      this.form = this.commonService.prepareForm(this.fields);
      this.fields.userTeamSelect.value = 1;
      console.log(this.form.value);
      this.form.patchValue({
          description: 'Hello World!!!'
      });

      // this.form.get('team').setValue('1', {
      //     onlySelf: true
      // });
      this.form.get('team').setValue(1, {
        onlySelf: true
      });

      console.log(this.form.get('team'));
      // console.log(this.group.get(this.field.name));
  }

  onSubmit(event: Event) {
    console.log(event);
  }
  textChanged(temp: Event) {
    this.regService.textChanged();
  }
  emailChanged(temp: Event) {
    this.regService.emailChanged();
  }
  textAreaChanged(temp: Event) {
    this.regService.textAreaChanged();
  }
