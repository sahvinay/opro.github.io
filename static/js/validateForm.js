/*------------------------------------------------------------------
* Template Name    : Kaylee | Responsive Personal Template
* Author           : CasanovasThemes
* Version          : 1.0
* Created          : April 2020
* File Description : Validate Name and TextArea in the Contact Form 
*-------------------------------------------------------------------
*/
"use strict";

$('#comments').keyup(validateTextarea);
$('#name').keyup(validateName);

function validateTextarea() {
    var errorMsg = "We do not allow URLs and emails in your message. Please match the format requested.";
    var textarea = this;
    var pattern = new RegExp('^' + $(textarea).attr('pattern') + '$');
    // check each line of text
    $.each($(this).val().split("\n"), function () {
        // check if the line matches the pattern
        var hasError = !this.match(pattern);
        if (typeof textarea.setCustomValidity === 'function') {
            textarea.setCustomValidity(hasError ? errorMsg : '');
        } else {
            // Not supported by the browser, fallback to manual error display...
            if (hasError) {
                $(textarea).attr('title', errorMsg);
            } else {
                $(textarea).removeAttr('title');
            }
        }
        return !hasError;
    });
}
function validateName() {
    var errorMsg = "We do not allow URLs and emails in this field. Please match the format requested.";
    var textName = this;
    var pattern = new RegExp('^' + $('#name').attr('pattern') + '$');
    // check each line of text
    $.each($(this).val().split("\n"), function () {
        // check if the line matches the pattern
        var hasError = !this.match(pattern);
        if (typeof textName.setCustomValidity === 'function') {
            textName.setCustomValidity(hasError ? errorMsg : '');
        } else {
            if (hasError) {
                $('#name').attr('title', errorMsg);
            } else {
                $('#name').removeAttr('title');
            }
        }
        return !hasError;
    });
}

