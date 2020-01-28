export const fieldConfig = {
    registration : {
        usernameText : {
            type: 'input',
            label: 'Username1',
            inputType: 'text',
            name: 'name1',
            validationConfig: {minlength: 5 , pattern: 'alpha', required : true},
            validationMessages: []
        },
        genderRadio :  {
            label: 'Select Gender',
            name: 'gender',
            inputType: 'radio',
            options: ['Male', 'Female'],
            validationConfig: {required : true},
            validationMessages: []
        },
        userRoleCheckbox :  {
            label: 'Select Role',
            name: 'role',
            inputType: 'checkbox',
            options: [
              { key: 1, text: 'Admin'},
              { key: 2, text: 'Director'},
              { key: 3, text: 'Professor'},
              { key: 4, text: 'Student'}
            ],
            validationConfig: {required : true},
            validationMessages: []
        },
        area : {
            label: 'description',
            name: 'description',
            validationConfig: {minlength: 5 , pattern: 'alpha', required : true},
            validationMessages: []
        },
        userTeamSelect : {
            label: 'Team',
            name: 'team',
            validationConfig: {required : true},
            validationMessages: []
        },
        submitButton: {
          label: 'Submit',
          inputType: 'submit'
        },
        userRegDate : {
          label: 'User Reg date',
          placeholder:'yyyy-mm-dd',
          inputType: 'date',
          name: 'regDate',
          validationConfig: {required : true},
          validationMessages: [],
          datePickerSettings:{
            displayMonths:2,
            outsideDays:'hidden',
            navigation:'select',
            showWeekNumbers: false
          }
        }
    }
};
