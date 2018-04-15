window.onload = function() {
	alert("GDg");
 document.getElementById('print').style.display = "none";
 getTodaysDate();
};
/*--This JavaScript method for Print command--*/
    function PrintDoc() {
        var toPrint = document.getElementById('printarea');
        var popupWin = window.open('', '_blank', 'width=1960,height=800,location=no,left=200px');
        popupWin.document.open();
        popupWin.document.write('<html><title>::Preview::</title><link rel="stylesheet" type="text/css" href="print.css" /></head><body onload="window.print()">')
        popupWin.document.write(toPrint.innerHTML);
        popupWin.document.write('</html>');
        popupWin.document.close();
    }
/*--This JavaScript method for Print Preview command--*/
    function PrintPreview() {
        var toPrint = document.getElementById('printarea');
        var popupWin = window.open('', '_blank', 'width=350,height=150,location=no,left=200px');
        popupWin.document.open();
        popupWin.document.write('<html><title>::Print Preview::</title><link rel="stylesheet" type="text/css" href="print.css" media="screen"/></head><body>')
        popupWin.document.write(toPrint.innerHTML);
        popupWin.document.write('</html>');
        popupWin.document.close();
    }
	function getdata(){
		document.getElementById('noprint').style.display = "none";
		document.getElementById('print').style.display = "block";
		getTotal();
alert("no"+ document.getElementById('no').value);
	document.getElementById('no1').innerHTML= document.getElementById('no').value;
document.getElementById('date1').innerHTML= document.getElementById('date').value;
document.getElementById('name1').innerHTML= document.getElementById('name').value;
document.getElementById('class1').innerHTML= document.getElementById('class').value;	
document.getElementById('acno1').innerHTML= document.getElementById('acno').value;
document.getElementById('tafr').innerHTML= document.getElementById('afr').value;
document.getElementById('tafp').innerHTML= document.getElementById('afp').value;
document.getElementById('tefr').innerHTML= document.getElementById('efr').value;
document.getElementById('tefp').innerHTML= document.getElementById('efp').value;
document.getElementById('ttfr').innerHTML= document.getElementById('tfr').value;
document.getElementById('ttfp').innerHTML= document.getElementById('tfp').value;
document.getElementById('tvfr').innerHTML= document.getElementById('vfr').value;
document.getElementById('tvfp').innerHTML= document.getElementById('vfp').value;
document.getElementById('tpfr').innerHTML= document.getElementById('pfr').value;
document.getElementById('tpfp').innerHTML= document.getElementById('pfp').value;	
document.getElementById('tllfr').innerHTML= document.getElementById('llfr').value;
document.getElementById('tllfp').innerHTML= document.getElementById('llfp').value;	
document.getElementById('tsfr').innerHTML= document.getElementById('sfr').value;
document.getElementById('tsfp').innerHTML= document.getElementById('sfp').value;	
document.getElementById('tsbfr').innerHTML= document.getElementById('sbfr').value;
document.getElementById('tsbfp').innerHTML= document.getElementById('sbfp').value;	
document.getElementById('tor').innerHTML= document.getElementById('othersr').value;
document.getElementById('top').innerHTML= document.getElementById('othersp').value;

document.getElementById('ttr').innerHTML= document.getElementById('totalr').value;
document.getElementById('ttp').innerHTML= document.getElementById('totalp').value;			

document.getElementById('container').innerHTML = testSkill("totalr")+' Rupees '+testSkill("totalp")+' paise Only';
	}
	function getTodaysDate(){
		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = dd+'/'+mm+'/'+yyyy;
document.getElementById("date").value = today;

}
function getTotal(){
	
	af=document.getElementById('afr').value+'.' +document.getElementById('afp').value;
	ef=document.getElementById('efr').value+'.' +document.getElementById('efp').value;
	tf=document.getElementById('tfr').value+'.' +document.getElementById('tfp').value;
	vf=document.getElementById('vfr').value+'.' +document.getElementById('vfp').value;
	pf=document.getElementById('pfr').value+'.' +document.getElementById('pfp').value;
	llf=document.getElementById('llfr').value+'.' +document.getElementById('llfp').value;
	sf=document.getElementById('sfr').value+'.' +document.getElementById('sfp').value;
	sbf=document.getElementById('sbfr').value+'.' +document.getElementById('sbfp').value;
	othersf=document.getElementById('othersr').value+'.' +document.getElementById('othersp').value;
	number=parseFloat(af)+parseFloat(ef)+parseFloat(tf)+parseFloat(vf)+parseFloat(pf)+parseFloat(llf)+parseFloat(sf)+parseFloat(sbf)+parseFloat(othersf);
	
	var paise = (number.toString()+"").split(".")[1];
	var rupees = (number.toString()+"").split(".")[0];
	alert("decPart"+rupees);
	document.getElementById('totalr').value=rupees;
	document.getElementById('totalp').value=paise;
	document.getElementById('rupees').value=rupees;
	document.getElementById('paise').value=paise;
	
}


var iWords = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
var ePlace = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
var tensPlace = ['', ' Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];
var inWords = [];
 
var numReversed, inWords, actnumber, i, j;
 
function tensComplication() {
    'use strict';
    if (actnumber[i] === 0) {
        inWords[j] = '';
    } else if (actnumber[i] === 1) {
        inWords[j] = ePlace[actnumber[i - 1]];
    } else {
        inWords[j] = tensPlace[actnumber[i]];
    }
}
 
function testSkill(x) {
    'use strict';
    var junkVal = document.getElementById(x).value;
	    alert(totalr);
    junkVal = Math.floor(junkVal);
    var obStr = junkVal.toString();
    numReversed = obStr.split('');
    actnumber = numReversed.reverse();
 
    if (Number(junkVal) >= 0) {
        //do nothing
    } else {
        window.alert('wrong Number cannot be converted');
        return false;
    }
    if (Number(junkVal) === 0) {
        document.getElementById('container').innerHTML = obStr + '' + 'Rupees Zero Only';
        return false;
    }
    if (actnumber.length > 9) {
        window.alert('Oops!!!! the Number is too big to covertes');
        return false;
    }
 
 
 
    var iWordsLength = numReversed.length;
    var finalWord = '';
    j = 0;
    for (i = 0; i < iWordsLength; i++) {
        switch (i) {
            case 0:
                if (actnumber[i] === '0' || actnumber[i + 1] === '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                inWords[j] = inWords[j];
                break;
            case 1:
                tensComplication();
                break;
            case 2:
                if (actnumber[i] === '0') {
                    inWords[j] = '';
                } else if (actnumber[i - 1] !== '0' && actnumber[i - 2] !== '0') {
                    inWords[j] = iWords[actnumber[i]] + ' Hundred and';
                } else {
                    inWords[j] = iWords[actnumber[i]] + ' Hundred';
                }
                break;
            case 3:
                if (actnumber[i] === '0' || actnumber[i + 1] === '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                    inWords[j] = inWords[j] + ' Thousand';
                }
                break;
            case 4:
                tensComplication();
                break;
            case 5:
                if (actnumber[i] === '0' || actnumber[i + 1] === '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                    inWords[j] = inWords[j] + ' Lakh';
                }
                break;
            case 6:
                tensComplication();
                break;
            case 7:
                if (actnumber[i] === '0' || actnumber[i + 1] === '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                inWords[j] = inWords[j] + ' Crore';
                break;
            case 8:
                tensComplication();
                break;
            default:
                break;
        }
        j++;
    }
 
 
    inWords.reverse();
    for (i = 0; i < inWords.length; i++) {
        finalWord += inWords[i];
    }
	return finalWord;
   // document.getElementById('container').innerHTML = obStr + '  ' + finalWord;
}
 
