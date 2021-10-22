<script type="text/javascript">
// -----------------------------------------------------------------
// Digital Clock vol.1 デジタル時計
// CopyRight(C) 2014 Simple Style, All rights reserved.
// -----------------------------------------------------------------
( function(){ //IIFE start
// Output of the elements.
document.addEventListener('DOMContentLoaded',outputClock,false);
function outputClock(){
  var img_src;
  const DIG_OBJ = document.getElementById('digits');
  for( var i=0; i<8; i++ ){
    const ADD_DIV = document.createElement('span');
    ADD_DIV.setAttribute('id','Nums'+i);
    DIG_OBJ.appendChild(ADD_DIV);
    if( i==2 || i==5 ){ img_src = 'img/colon.png'; }
    else{ img_src = 'img/0.png'; }
    ADD_DIV.innerHTML = '<img id="dig'+i+'" src="'+img_src+'">';
  }
  moveDigital();
}

// Move the numbers.
function moveDigital(){
  var now   = new Date();
  var hour   = now.getHours();
  var hour2  = hour % 10;
  var hour1  = (hour-hour2) / 10 ;
  var mine   = now.getMinutes();
  var mine2  = mine % 10;
  var mine1  = (mine - mine2) / 10; 
  var sec    = now.getSeconds();
  var sec2   = sec % 10;
  var sec1   = (sec - sec2) / 10;
  document.getElementById('dig0').src = 'img/'+hour1+'.png';
  document.getElementById('dig1').src = 'img/'+hour2+'.png';
  document.getElementById('dig3').src = 'img/'+mine1+'.png';
  document.getElementById('dig4').src = 'img/'+mine2+'.png';
  document.getElementById('dig6').src = 'img/'+sec1+'.png';
  document.getElementById('dig7').src = 'img/'+sec2+'.png';
  DispWeekDays();
  Blinks();
}

// Brink a colon.
function Blinks(){
  const COL_OBJ = document.getElementById('dig5').style;
  if ( COL_OBJ.visibility=='hidden' )
       COL_OBJ.visibility = 'visible';
  else COL_OBJ.visibility = 'hidden';
}
setInterval( moveDigital,500 );

// -----------------------------------------------------------------
// Display date and day of the week.
// -----------------------------------------------------------------
function DispWeekDays(){
  const monthEn = new Array(12);
  monthEn[0]  = 'January';
  monthEn[1]  = 'February';
  monthEn[2]  = 'March';
  monthEn[3]  = 'April';
  monthEn[4]  = 'May';
  monthEn[5]  = 'June';
  monthEn[6]  = 'July';
  monthEn[7]  = 'August';
  monthEn[8]  = 'September';
  monthEn[9]  = 'October';
  monthEn[10] = 'November';
  monthEn[11] = 'December';
  const WeekEn = new Array(7);
  WeekEn[0] = 'Sunday';
  WeekEn[1] = 'Monday';
  WeekEn[2] = 'Tuesday';
  WeekEn[3] = 'Wednesday';
  WeekEn[4] = 'Thursday';
  WeekEn[5] = 'Friday';
  WeekEn[6] = 'Saturday';
  const WeekJn = new Array('日','月','火','水','木','金','土');

  // Display of date.
  var today  = new Date();
  var Year = today.getFullYear();      //year
  var Mon = monthEn[today.getMonth()]; //month
  var Day = today.getDate();           //date
  var Week = WeekEn[today.getDay()];   //day of the week
  var nowdate = Year+' '+Mon+'-'+Day+' '+Week;
  //日本語表記の場合は下記を使用
  //var nowdate = Year+'年 ' +(today.getMonth()+1)+'月 '
  //+Day+'日 ('+WeekJn[today.getDay()]+')';
  document.getElementById('weekdays').innerHTML = nowdate;
}
}() ); //IIFE end
</script>
