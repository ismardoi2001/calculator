/**
 * @param {number} a
 * @param {number} b
 */
function sum(a, b){
    return a+b;
}

//sample usage
console.log(sum(1, 3));
console.log(sum(2, 5));
// JQuery Calculator  Code here 
function insert(num){
    $('.calc-display').val($('.calc-display').val() + num)

}
function eql(){
    $('.calc-display').val(eval($('.calc-display').val()));
}
function c(){
    $('.calc-display').val('');
}
function del(){
    value = $('.calc-display').val();
    $('.calc-display').val(value.substring(0,value.length  -1));
}
