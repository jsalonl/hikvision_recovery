$(document).ready(function() {

	var date = new Date();
	var month = date.getMonth();
	if(month<10) {
    	month='0'+month
	} 
	var day = date.getDate();
	if(day<10) {
    	day='0'+day
	} 
	$('#year').val(date.getFullYear());
	$('#month').val(month);
	$('#day').val(day);
	new Clipboard('.btn');
	$('#recovery_code').val('123');
	//Funcion Genera Código
	function GeneraCodigoSerial(){
		var serialNumber = $('#serial').val();
		var year = $('#year').val();
		var month = $('#month').val();
		var day = $('#day').val();
		var plainText = serialNumber + year + month + day;
		var magicNumber = 0;
		for(var i = 0; i < plainText.length; i++){
			magicNumber += (plainText.charCodeAt(i) * (i + 1)) ^ (i + 1);
			magicNumber *= 1751873395; //Valor Constante, no cambiar
			magicNumber = magicNumber >>> 0; // convert to 32 bit integer
			var magicWord = magicNumber + "";
			var serialCode = "";
		}
		for(var i = 0; i < magicWord.length; i++){
		var c = magicWord.charCodeAt(i);
			if (c < 51){
				serialCode += String.fromCharCode(c + 33);
			}else if (c < 53){
				serialCode += String.fromCharCode(c + 62);
			}else if (c < 55){
				serialCode += String.fromCharCode(c + 47);
			}else if (c < 57){
				serialCode += String.fromCharCode(c + 66);
			}else{
				serialCode += String.fromCharCode(c);
			}
		}
		$('#recovery_code').val(serialCode);
	}
	$('input').blur(function(){
		GeneraCodigoSerial();
	});
});