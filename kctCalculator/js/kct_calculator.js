/*
  KCT Calculator
  www.kctrud.ru
*/
var kctcalcinput; //Input
jQuery.fn.extend({
  kctcalculator: function()
  {
    //Clear vars
    kctcal_firstnum = '';
    kctcal_Action = '';
    kctcal_newAction = false;

    kctcalcinput = $(this);
    $(this).after('<div class="kct_calc_frame" id="kct_calc_frame"><table margin="0" padding="0"><tr><td onClick="kctcal_7();">7</td><td onClick="kctcal_8();">8</td><td onClick="kctcal_9();">9</td><td onClick="kctcal_minus();">-</td></tr><tr><td onClick="kctcal_4();">4</td><td onClick="kctcal_5();">5</td><td onClick="kctcal_6();">6</td><td onClick="kctcal_plus();">+</td></tr><tr><td onClick="kctcal_1();">1</td><td onClick="kctcal_2();">2</td><td onClick="kctcal_3();">3</td><td onClick="kctcal_multiply();">*</td></tr><tr><td onClick="kctcal_dot();">.</td><td onClick="kctcal_0();">0</td><td onClick="kctcal_eqal();">=</td><td onClick="kctcal_delimeter();">/</td></tr></table></div>');

    //Hide & Show mechanics
    $(window).click(function() {
      $('.kct_calc_frame').hide();
    });

    $(this).click(function(event){
    event.stopPropagation();
    });

    $('#kct_calc_frame').click(function(event){
    event.stopPropagation();
    });

    $(this).focus(function() {$('.kct_calc_frame').show();});
  }
});

var kctcal_newAction = true;
var kctcal_firstnum = '';
var kctcal_Action = '';
function kctcal_action(inVal)
{
    switch(inVal)
    {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        if(kctcal_newAction)
        {
          $(kctcalcinput).val(inVal.toString());
          kctcal_newAction = false;
        }
        else {
          $(kctcalcinput).val($(kctcalcinput).val().toString()+inVal.toString());
        }
      break;
      case '+':
      case '-':
      case '/':
      case '*':
      case '=':
        if(kctcal_Action === inVal)
        {

        }
        else
        {
          kctcal_getResult();
          kctcal_firstnum = $(kctcalcinput).val();
          kctcal_Action = inVal;
          kctcal_newAction = true;
        }
      break;
    }
}

function kctcal_getResult()
{
  if($.isNumeric(kctcal_firstnum) && $.isNumeric($(kctcalcinput).val()) && kctcal_Action.length>0)
  {
    switch (kctcal_Action) {
      case '+':
        $(kctcalcinput).val(parseFloat(kctcal_firstnum) + parseFloat($(kctcalcinput).val()));
      break;
      case '-':
        $(kctcalcinput).val(parseFloat(kctcal_firstnum) - parseFloat($(kctcalcinput).val()));
      break;
      case '*':
        $(kctcalcinput).val(parseFloat(kctcal_firstnum) * parseFloat($(kctcalcinput).val()));
      break;
      case '/':
        $(kctcalcinput).val(parseFloat(kctcal_firstnum) / parseFloat($(kctcalcinput).val()));
      break;
    }
  }
}

function kctcal_0(){kctcal_action('0');}
function kctcal_1(){kctcal_action('1');}
function kctcal_2(){kctcal_action('2');}
function kctcal_3(){kctcal_action('3');}
function kctcal_4(){kctcal_action('4');}
function kctcal_5(){kctcal_action('5');}
function kctcal_6(){kctcal_action('6');}
function kctcal_7(){kctcal_action('7');}
function kctcal_8(){kctcal_action('8');}
function kctcal_9(){kctcal_action('9');}
function kctcal_minus(){kctcal_action('-');}
function kctcal_plus(){kctcal_action('+');}
function kctcal_multiply(){kctcal_action('*');}
function kctcal_delimeter(){kctcal_action('/');}
function kctcal_eqal(){kctcal_action('=');}
function kctcal_dot(){kctcal_action('.');}
