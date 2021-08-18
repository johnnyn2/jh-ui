export const isEmpty = v => typeof v === 'undefined' || v === '';

export const isEmail = v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);

export const isUrl = v => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(v);

export const isNumber = v => !isNaN(v);

export const withinRange = ({min, max, v}) => this.isNumber() &&  Number(v) >= min && Number(v) <= max; 