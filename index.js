const $ = require("jquery");
const mascara = require('jquery-mask-plugin');

$(function () {
    console.log("ready!");
    $('#percentual').mask('##0,00%', { reverse: true });
    $('#data').mask('00/00/0000', { placeholder: "__/__/____" });
    $('#telefone').mask('(00) 0000-0000');
    $('#dinheiro').mask('000.000.000.000.000,00', { reverse: true });
    $('#dinheiro2').mask('000.000.000.000.000,00', { reverse: false });
    $('#dinheiro3').mask("#.##0,00", { reverse: true });
    $('#dinheiro4').mask("#.##0,00", { reverse: false });
    $('#percentual').mask('##0,00%', { reverse: true });



});