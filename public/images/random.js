var data = 'https://api-ninjas.com';
var category = 'nature'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
    headers: { 'X-Api-Key': 'YOURAhDgNJ0pdpRxEyJsC2EL5A==QfPGygoFpIeRdXOH', 'Accept': 'image/jpg'},
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});