export const fieldConfig = {
    registration : {
        usernameText : {
            customClassName: {
                container: 'width-70',
                label: 'width-30'
            },
            inputType: 'text',
            label: 'Username1',
            name: 'name1',
            type: 'input',
            validationConfig: {minlength: 5 , pattern: 'alpha', required : true},
            validationMessages: [],
            value: 'abc'
        },
        email : {
            customClassName: {
                container: '',
                label: ''
            },
            inputType: 'email',
            label: 'email',
            name: 'email',
            type: 'email',
            validationConfig: {minlength: 10 , pattern: 'email', required : true},
            validationMessages: [],
            value: 'abc@ex.be'
        },
        genderRadio :  {
            customClassName: {
                container: '',
                label: ''
            },
            inputType: 'radio',
            label: 'Select Gender',
            name: 'gender',
            options: ['Male', 'Female'],
            validationConfig: {required : true},
            validationMessages: [],
            value: 'Male'
        },
        userRoleCheckbox: {
            customClassName: {
                container: '',
                label: ''
            },
            inputType: 'checkbox',
            label: 'Select Role',
            mincheck: 2,
            name: 'role',
            options: [
                { key: 1, text: 'Admin' },
                { key: 2, text: 'Director' },
                { key: 3, text: 'Professor' },
                { key: 4, text: 'Student' }
            ],
            validationConfig: {required : true},
            validationMessages: []
        },
        area: {
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
            label: 'Select Team',
            name: 'team',
            value: null,
            options: [
                { key: 1, value: 'EC Startup Group' },
                { key: 2, value: 'Rakuten Ichiba' },
                { key: 3, value: 'Rakuten Marketing' }
            ],
            validationConfig: { required: true },
            validationMessages: []
        },
        userRegDate : {
            label: 'User Reg date',
            placeholder:'yyyy-mm-dd',
            inputType: 'date',
            name: 'regDate',
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
            label: "Select City",
            name: "team",
            value: [
                { item_id: 3, item_text: "Pune" },
                { item_id: 4, item_text: "Navsari" }
            ],
            options: [
                { item_id: 1, item_text: "Mumbai" },
                { item_id: 2, item_text: "Bangaluru" },
                { item_id: 3, item_text: "Pune" },
                { item_id: 4, item_text: "Navsari" },
                { item_id: 5, item_text: "New Delhi" }
            ],
            settings: {
                singleSelection: false,
                idField: "item_id",
                textField: "item_text",
                selectAllText: "Select All",
                unSelectAllText: "UnSelect All",
                itemsShowLimit: 3,
                allowSearchFilter: true
            },
            validationConfig: { required: true },
            validationMessages: []
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
