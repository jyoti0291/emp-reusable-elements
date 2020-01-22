export const fieldConfig = {
    registration : {
        usernameText : {
            type: 'input',
            label: 'Username1',
            inputType: 'text',
            name: 'name1',
            validations: {minlength: 5 , pattern: 'alpha'}
          },
          genderRadio :  {
            label: 'Select Gender',
            name: 'gender',
            inputType: 'radio',
            options: ['Male', 'Female'],
            validations: {required : true}
          },
          userRoleCheckbox :  {
            label: 'Select Role',
            name: 'role',
            inputType: 'checkbox',
            options: [{ key: 1, text: 'Admin'},
            { key: 2, text: 'Director'},
            { key: 3, text: 'Professor'},
            { key: 4, text: 'Student'}],
            validations: {required : true}
          }
    }
};
