export const fieldConfig = {
    registration : {
        usernameText : {

                customCssClass: {
                    container: 'width-70',
                    label: 'width-30'
                },
                infoTooltip: {
                    placement: 'right',
                    title: 'This is user name, enter text'
                },
                inputType: 'text',
                label: 'Username1',
                name: 'name1',
                validationConfig: { minlength: 5, pattern: 'alpha', required : true},
                validationMessages: [],
            value: 'abc'
        },
        email : {

                customCssClass: {
                    container: 'width-70',
                    label: 'width-30'
                },
                infoTooltip: {
                    placement: 'right',
                    title: 'This is Email'
                },
                inputType: 'email',
                label: 'email',
                name: 'email',
                validationConfig: { minlength: 10, pattern: 'email', required : true},
                validationMessages: [],
            value: 'abc@ex.be'
        },
        genderRadio :  {

                customCssClass: {
                    container: '',
                    label: ''
                },
                inputType: 'radio',
                label: 'Select Gender',
                name: 'gender',
                validationConfig: { required : true},
                validationMessages: [],
            options: ['Male', 'Female'],
            value: 'Male'
        },
        userRoleCheckbox: {
                customCssClass: {
                    container: '',
                    label: ''
                },
                infoTooltip: {
                    placement: 'right',
                    title: 'This is Checkbox'
                },
                inputType: 'checkbox',
                label: 'Select Role',
                name: 'role',
                validationConfig: { required : true},
                validationMessages: [],
            mincheck: 2,
            options: [
                { key: 1, text: 'Admin' },
                { key: 2, text: 'Director' },
                { key: 3, text: 'Professor' },
                { key: 4, text: 'Student' }
            ]
        },
        area: {
                customCssClass: {
                    container: '',
                    label: ''
                },
                label: 'description',
                name: 'description',
                validationConfig: {
                    minlength: 5,
                    pattern: 'alpha',
                    required: true
                },
                validationMessages: []
        },
        userTeamSelect: {

                customCssClass: {
                    container: '',
                    label: ''
                },
                label: 'Select Team',
                name: 'team',
                validationConfig: { required: true },
                validationMessages: [],
            options: [
                { key: 1, value: 'EC Startup Group' },
                { key: 2, value: 'Rakuten Ichiba' },
                { key: 3, value: 'Rakuten Marketing' }
            ],
            value: null
        },
        userRegDate : {

                customCssClass: {
                    container: '',
                    label: ''
                },
                inputType: 'date',
                label: 'User Reg date',
                name: 'regDate',
                placeholder: 'yyyy-mm-dd',
                validationConfig: {required : true},
                validationMessages: [],
            datePickerSettings: {
                displayMonths: 2,
                outsideDays: 'hidden',
                navigation: 'select',
                showWeekNumbers: false
            }
        },
        userMultiSelect: {

                customCssClass: {
                    container: '',
                    label: ''
                },
                label: 'Select City',
                name: 'team',
                validationConfig: { required: true },
                validationMessages: [],
            options: [
                { item_id: 1, item_text: 'Mumbai' },
                { item_id: 2, item_text: 'Bangaluru' },
                { item_id: 3, item_text: 'Pune' },
                { item_id: 4, item_text: 'Navsari' },
                { item_id: 5, item_text: 'New Delhi' }
            ],
            settings: {
                singleSelection: false,
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 3,
                allowSearchFilter: true
            },
            value: [
                { item_id: 3, item_text: 'Pune' },
                { item_id: 4, item_text: 'Navsari' }
            ]
        },
        cancelButton: {
            label: 'Cancel',
            inputType: 'button'
        },
        submitButton: {
            label: 'Submit',
            inputType: 'submit'
        }
    }
};
