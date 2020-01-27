export const fieldConfig = {
    registration: {
        usernameText: {
            type: "input",
            label: "Username1",
            inputType: "text",
            name: "name1",
            validationConfig: {
                minlength: 5,
                pattern: "alpha",
                required: true
            },
            validationMessages: []
        },
        genderRadio: {
            label: "Select Gender",
            name: "gender",
            inputType: "radio",
            options: ["Male", "Female"],
            validationConfig: { required: true },
            validationMessages: []
        },
        userRoleCheckbox: {
            label: "Select Role",
            name: "role",
            inputType: "checkbox",
            options: [
                { key: 1, text: "Admin" },
                { key: 2, text: "Director" },
                { key: 3, text: "Professor" },
                { key: 4, text: "Student" }
            ],
            validationConfig: { required: true },
            validationMessages: []
        },
        area: {
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
            label: "Select Team",
            name: "team",
            value: null,
            options: [
                { key: 1, value: "EC Startup Group" },
                { key: 2, value: "Rakuten Ichiba" },
                { key: 3, value: "Rakuten Marketing" }
            ],
            validationConfig: { required: true },
            validationMessages: []
        },
        submitButton: {
            label: "Submit",
            inputType: "submit"
        }
    }
};
