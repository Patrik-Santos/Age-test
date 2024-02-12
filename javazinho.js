const Nmonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//------INPUTS-------------------------------------------------
    const form = document.getElementById('form');
    const inputday = document.getElementById('day');
    const inputmonth = document.getElementById('month');
    const inputyear = document.getElementById('year');

//-------OUTPUTS-------------------------------------------------
    const yearout = document.getElementById('outputyear');
    const monthout = document.getElementById('outputmonth');
    const dayout = document.getElementById('outputday');


//------Validation-elements------------------------------------
    const spanD = document.getElementById('requiredD');
    const spanM = document.getElementById('requiredM');
    const spanY = document.getElementById('requiredY');


//-------Current-dates------------------------------------------
    const yeardate = new Date();
    const yearnow = yeardate.getFullYear();





//-------Validation-fuctions--------------------------------------
     function setError() {
        inputday.style.outlineStyle = 'none';
        inputday.style.border = '1px solid #FF124F';
        spanD.style.display = 'flex';
    }
    function RemoveError() {
        inputday.style.outlineStyle = '';
        inputday.style.border = '';
        spanD.style.display = 'none';
    }

    function DValid() {
        if(inputday.value > Nmonths[inputmonth.value-1] || inputday.value <= 0 || inputday.value >=32) {
            setError()
            
        }

        else {
            RemoveError()
        }
    }
//================================================================================

    function setError2() {
        inputmonth.style.outlineStyle = 'none';
        inputmonth.style.border = '1px solid #FF124F';
        spanM.style.display = 'flex';
    }
    function RemoveError2() {
        inputmonth.style.outlineStyle = '';
        inputmonth.style.border = '';
        spanM.style.display = 'none';
    }
    
    function MValid() {
        if(inputmonth.value > 12 || inputmonth.value <= 0) {
            setError2()
        }
        else {
            RemoveError2()
        }
    
    }
//================================================================================
    function setError3() {
        inputyear.style.outlineStyle = 'none';
        inputyear.style.border = '1px solid #FF124F';
        spanY.style.display = 'flex';
    }
    function RemoveError3() {
        inputyear.style.outlineStyle = '';
        inputyear.style.border = '';
        spanY.style.display = 'none';
    }

    function YValid() {
        if(inputyear.value.length >= 5 || inputyear.value > yearnow ){
            setError3();
            
        }
        else {
            RemoveError3();
        }
    }
//================================================================================
//================================================================================

//-----------AGE-CALCULATION-FUNCTION-------------------------------------------


function Agecalc() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    var Birthdate = new Date(year, month - 1, day);
    var DateNow = new Date();

    var Resul = DateNow.getTime() - Birthdate.getTime();

    var Age = Math.floor(Resul / (1000 * 60 * 60 * 24 * 365.25));
    var months = DateNow.getMonth() - Birthdate.getMonth();
    var days = DateNow.getDate() - Birthdate.getDate();

    if (months < 0 || (months === 0 && DateNow.getDate() < Birthdate.getDate())) {
        months += 12;
    }

    if (days < 0) {
        var lastbefore = new Date(DateNow.getFullYear(), DateNow.getMonth(), 0).getDate();
        days += lastbefore;
        months--;
    }

    document.getElementById('outputyear').textContent = Age;
    document.getElementById('outputmonth').textContent = months;
    document.getElementById('outputday').textContent = days;


}