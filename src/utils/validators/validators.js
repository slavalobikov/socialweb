export const required = value => {
    if (value) return undefined;
    return "Поле обязательное для ввода!"
}

export const maxLengthCreator = (maxaValue) => (value) => {
    if ( value.length > maxaValue) return `Максимальное значение ${maxaValue} символов!`;
    return undefined;
};