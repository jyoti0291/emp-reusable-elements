export const fieldConfig = {
           registration: {
               usernameText: {
                   customCssClass: {
                       container: "width-70",
                       label: "width-30"
                   },
                   infoTooltip: {
                       placement: "right",
                       title: "This is user name, enter text"
                   },
                   inputType: "text",
                   label: "Username1",
                   name: "name1",
                   validationConfig: {
                       minlength: 5,
                       pattern: "alpha",
                       required: true
                   },
                   validationMessages: [],
                   value: "abc"
               },
               email: {
                   customCssClass: {
                       container: "width-70",
                       label: "width-30"
                   },
                   infoTooltip: {
                       placement: "right",
                       title: "This is Email"
                   },
                   inputType: "email",
                   label: "email",
                   name: "email",
                   validationConfig: {
                       minlength: 10,
                       pattern: "email",
                       required: true
                   },
                   validationMessages: [],
                   value: "abc@ex.be"
               },
               genderRadio: {
                   customCssClass: {
                       container: "",
                       label: ""
                   },
                   inputType: "radio",
                   label: "Select Gender",
                   name: "gender",
                   validationConfig: { required: true },
                   validationMessages: [],
                   options: ["Male", "Female"],
                   value: "Male"
               },
               userRoleCheckbox: {
                   customCssClass: {
                       container: "",
                       label: ""
                   },
                   infoTooltip: {
                       placement: "right",
                       title: "This is Checkbox"
                   },
                   inputType: "checkbox",
                   label: "Select Role",
                   name: "role",
                   validationConfig: { required: true },
                   validationMessages: [],
                   mincheck: 2,
                   options: [
                       { key: 1, text: "Admin" },
                       { key: 2, text: "Director" },
                       { key: 3, text: "Professor" },
                       { key: 4, text: "Student" }
                   ]
               },
               area: {
                   customCssClass: {
                       container: "",
                       label: ""
                   },
                   label: "description",
                   name: "description",
                   validationConfig: {
                       minlength: 5,
                       pattern: "alpha",
                       required: true
                   },
                   validationMessages: []
               },
               userTeamSelect: {
                   customCssClass: {
                       container: "",
                       label: ""
                   },
                   label: "Select Team",
                   name: "team",
                   validationConfig: { required: true },
                   validationMessages: [],
                   options: [
                       { key: 1, value: "EC Startup Group" },
                       { key: 2, value: "Rakuten Ichiba" },
                       { key: 3, value: "Rakuten Marketing" }
                   ],
                   value: null
               },
               userRegDate: {
                   customCssClass: {
                       container: "",
                       label: ""
                   },
                   inputType: "date",
                   label: "User Reg date",
                   name: "regDate",
                   placeholder: "yyyy-mm-dd",
                   validationConfig: { required: true },
                   validationMessages: [],
                   datePickerSettings: {
                       displayMonths: 2,
                       outsideDays: "hidden",
                       navigation: "select",
                       showWeekNumbers: false
                   }
               },
               userMultiSelect: {
                   customCssClass: {
                       container: "",
                       label: ""
                   },
                   label: "Select City",
                   name: "team",
                   options: [
                       { id: 1, itemName: "India" },
                       { id: 2, itemName: "Singapore" },
                       { id: 3, itemName: "Australia" },
                       { id: 4, itemName: "Canada" },
                       { id: 5, itemName: "South Korea" },
                       { id: 6, itemName: "Germany" },
                       { id: 7, itemName: "France" },
                       { id: 8, itemName: "Russia" },
                       { id: 9, itemName: "Italy" },
                       { id: 10, itemName: "Sweden" }
                   ],
                   settings: {
                       singleSelection: false,
                       text: "Select Countries",
                       selectAllText: "Select All",
                       unSelectAllText: "UnSelect All",
                       enableSearchFilter: true,
                       classes: "myclass custom-class",
                       enableFilterSelectAll: true,
                       showCheckbox: true
                   },
                   validationConfig: { required: true },
                   validationMessages: [],
                   value: [
                       { id: 2, itemName: "Singapore" },
                       { id: 3, itemName: "Australia" },
                       { id: 4, itemName: "Canada" },
                       { id: 5, itemName: "South Korea" }
                   ]
               },
               cancelButton: {
                   label: "Cancel",
                   inputType: "button"
               },
               submitButton: {
                   label: "Submit",
                   inputType: "submit"
               }
           }
       };
