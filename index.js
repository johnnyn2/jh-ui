import JHElement from './jh-ui/core/jh-element.js';
import JHButton from './jh-ui/button/index.js';
import JHMenu from './jh-ui/menu/index.js';
import JHIconButton from './jh-ui/icon-button/index.js';
import JHIconButtonMenu from './jh-ui/icon-button-menu/index.js';
import JHCheckbox from './jh-ui/checkbox/index.js';
import JHTextField from './jh-ui/textfield/index.js';
import JHTextFieldGroup from './jh-ui/textfield-group/index.js';
import JHValidation from './jh-ui/util/validation.js';

const {
    isEmail,
    notNumber,
    withinRange,
    isNumber,
} = JHValidation;

document.addEventListener("DOMContentLoaded", e => {
    const buttons = document.getElementsByClassName("jh-btn");
    for(const button of buttons) {
        const jhBtn = new JHButton(button);
        jhBtn.on('click', e => console.log('jhButton is clicked'));
    }

    const iconBtns = document.getElementsByClassName("jh-icon-btn");
    for (const iconBtn of iconBtns) {
        const jhIconBtn = new JHIconButton(iconBtn);
    }

    const iconBtnMenus = document.getElementsByClassName("jh-icon-btn-menu");
    for (const iconBtnMenu of iconBtnMenus) {
        const jhIconBtnMenu = new JHIconButtonMenu(iconBtnMenu, [
            e => console.log('first menu item: ', e),
            e => console.log('second menu item: ', e),
            e => console.log('third menu item: ', e)
        ]);
        console.log('menu items: ', jhIconBtnMenu.jhMenu.jhMenuItems);
    }

    const mockMenuOptions = [
        {
            label: 'Pause',
            clickHandler: e => console.log('Pause')
        },
        {
            label: 'Resume',
            clickHandler: e => console.log('Resume')
        },
        {
            label: 'Open',
            clickHandler: e => console.log('Open')
        },
        {
            label: 'Close',
            clickHandler: e => console.log('Close')
        }
    ]; // some data fetched from api
    const generatedIconBtnMenuHtmlEl = JHIconButtonMenu.createElement({
        iconFont: "fa fa-ellipsis-v",
        menuItems: mockMenuOptions
    });
    const generatedJHIconBtnMenu = new JHIconButtonMenu(generatedIconBtnMenuHtmlEl, mockMenuOptions.map(opt => opt.clickHandler));
    const generatedBtnHtmlEl = JHButton.createElement({ label: "1234567"});
    const generatedJHButton = new JHButton(generatedBtnHtmlEl);
    generatedJHButton.on('click', e => console.log('I am generated JHButton'));
    const generatedIconBtnHtmlEl = JHIconButton.createElement({ iconFont: "fa fa-ellipsis-v"});
    const generatedJHIconBtn = new JHIconButton(generatedIconBtnHtmlEl);
    generatedJHIconBtn.on('click', e => console.log('I am generated JHIconButton'))
    const generatedElements = document.getElementById('generated-elements');
    generatedElements.appendChild(generatedIconBtnMenuHtmlEl);
    generatedElements.appendChild(generatedBtnHtmlEl);
    generatedElements.appendChild(generatedIconBtnHtmlEl);

    const themedCheckbox = document.getElementById('themedCheckbox');
    const jhThemedCheckbox = new JHCheckbox(themedCheckbox, '#1976d2');
    const defaultCheckbox = document.getElementById('defaultCheckbox');
    const jhDefaultCheckbox = new JHCheckbox(defaultCheckbox);
    const errorCheckbox = document.getElementById('errorCheckbox');
    const jhErrorCheckbox = new JHCheckbox(errorCheckbox, '#FF6530');
    jhErrorCheckbox.on('click', () => console.log('error check is clicked'))

    const emailTextfield = document.getElementById('emailTextfield');
    const jhEmailTextfield = new JHTextField(emailTextfield);
    const validateEmailBtn = document.getElementById('validateEmailBtn');
    const jhValidateEmailBtn = new JHButton(validateEmailBtn);
    jhValidateEmailBtn.on('click', e => {
        const value = jhEmailTextfield.val();
        const isValid = jhEmailTextfield.validate(
            notNumber({value}),
            isEmail({value}),
        );
        console.log(isValid);
    })
    const rangeInputGroup = document.getElementById('rangeInputGroup');
    const jhRangeInputGroup = new JHTextFieldGroup(rangeInputGroup);
    const validateRangeBtn = document.getElementById('validateRangeBtn');
    const jhValidateRangeBtn = new JHButton(validateRangeBtn);
    jhValidateRangeBtn.on('click', e => {
        const textfield = jhRangeInputGroup.jhTextField;
        const value = textfield.val();
        const isValid = jhRangeInputGroup.validate(
            isNumber({value}),
            withinRange({min: 1, max: 2, value})
        );
        console.log(isValid);
    });

    const genTextfieldGrpHtml = JHTextFieldGroup.createElement({
        textfieldGroupId: 'gen-textfield-grp',
        label: 'Generated textfield group',
        textfieldId: 'gen-textfield-grp-textfield',
        placeholder: '123'
    });
    const genTextfieldGrp = new JHTextFieldGroup(genTextfieldGrpHtml);
    document.getElementById('textinput-container').appendChild(genTextfieldGrpHtml);
})

window.JHElement=JHElement;
window.JHButton=JHButton;
window.JHMenu=JHMenu;
window.JHIconButton=JHIconButton;
window.JHIconButtonMenu=JHIconButtonMenu;
window.JHCheckbox=JHCheckbox;
window.JHTextField=JHTextField;
window.JHTextFieldGroup=JHTextFieldGroup;
window.JHValidation=JHValidation;