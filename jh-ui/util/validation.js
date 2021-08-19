const JHValidation = {
    isEmpty: ({value, errTxt}) => ({
        type: 'isEmpty',
        result: typeof value === 'undefined' || value === '',
        errTxt: errTxt || 'This field should not be empty'
    }),
    isEmail: ({value, errTxt}) => ({
        type: 'isEmail',
        result: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value),
        errTxt: errTxt || 'Invalid email format'
    }),
    isUrl: ({value, errTxt}) => ({
        type: 'isUrl',
        result: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(value),
        errTxt: errTxt || 'Invalid URL format'
    }),
    isNumber: ({value, errTxt}) => ({
        type: 'isNumber',
        result: !isNaN(value),
        errTxt: errTxt || 'This field should be number'
    }),
    notNumber: (value, errTxt) => ({
        type: 'notNumber',
        result: isNaN(value),
        errTxt: errTxt || 'This field should not be a number'
    }),
    withinRange: ({min, max, value, errTxt}) => ({
        type: 'withinRange',
        result: !isNaN(value) &&  Number(value) >= min && Number(value) <= max,
        errTxt: errTxt || `This value should be between ${min} and ${max}`
    })
};

export default JHValidation;