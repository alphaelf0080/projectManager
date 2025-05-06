function checkDetaTime(stTime,edTime){
    console.log('checkDetaTime',stTime,edTime)
    

    var startDay = new Date(String(stTime.split(" ")[2])+',' +String( stTime.split(" ")[4])+','+ String(stTime.split(" ")[0]));
    var endDay = new Date(String(edTime.split(" ")[2])+',' +String( edTime.split(" ")[4])+','+ String(edTime.split(" ")[0]));


    var deltaMillionSecTime = endDay.valueOf() - startDay.valueOf()
    
    
    
    
    return deltaMillionSecTime
    
};



function getDaysList(stTime,duration){
    // '月 , 日 ，年'
    
    var getDay = new Date(stTime)
   // console.log('getDay',getDay,duration)
    var dayList = []
    
    for(var i =0 ;i<duration; i++){
        var selDay = new Date(getDay.valueOf() + 86400000 *i)
        dayList.push(String(selDay))
       // console.log(selDay,typeof(selDay))
       // console.log(String(selDay).split(' '))
        
    }
    
   // console.log(dayList)
    return dayList
    
};

//new Date() 僅可用於將符合 ISO 8601 格式 YYYY-MM-DD hh:mm:ss 的字串轉換為日期。
function getSelDayMs(selDayString){
    // '月 , 日 ，年'
    
    //console.log(selDayString,selDayString.split(" "))
    var SelDay =  new Date(String(selDayString.split(" ")[2])+',' +String( selDayString.split(" ")[4])+','+ String(selDayString.split(" ")[0]));
    var SelDayMs = SelDay.valueOf()
   // console.log(SelDayMs.valueOf())

    return SelDayMs
    
};


function getSelDayMsB(selDayString){
    // '月 , 日 ，年'
    //new Date() 僅可用於將符合 ISO 8601 格式 YYYY-MM-DD hh:mm:ss 的字串轉換為日期。
    //(String(year) + ' 年 ' + String(i+1) +  ' 月 ' + '1' + ' 日 ')
    //console.log(selDayString,selDayString.split(" "))
    var SelDay =  new Date(String(selDayString.split(" ")[2])+',' +String( selDayString.split(" ")[4])+','+ String(selDayString.split(" ")[0]));
    var SelDayMs = SelDay.valueOf()
   // console.log(SelDayMs.valueOf())

    return SelDayMs
    
};

function getTodayMs(){
    // '月 , 日 ，年'
    var todayMs =  new Date().valueOf();
    
  //  var SelDayMs = SelDay.valueOf()
   // console.log(todayMs)

    return todayMs
    
};

function getTodayStringMDY(){
    // '月 , 日 ，年'
    var d = new Date()
   // var todayString =  String(new Date())
    var toDayMDY = String(d.getMonth()+1) +','+ String(d.getDate()) +','+ String(d.getFullYear())

    return toDayMDY
    
};


function convertMS( milliseconds ) {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
};


function convertMSA( milliseconds ) {
   // var day, hour, minute, seconds;
    var d = new Date(milliseconds)
    var toDayMDHM = String(d.getMonth()+1) +' 月 '+ String(d.getDate()) +' 日 '//+ String(d.getHours()) +' 時 '// + String(d.getMinutes()) +' 分 '

    //var Month = (new Date(milliseconds)).getMonth()	+1//.format('YYYY-MM-DD HH:m:s')
    
   // var day =  (new Date(milliseconds)).getDate()
 
    //var returnText = String(Month) + '月' + String(day)  '日'
    return toDayMDHM// + '月' + day '日'
    
    
};

function convertMSB( milliseconds ) {
   // var day, hour, minute, seconds;
    var d = new Date(milliseconds)
    var toDayMDHM = String(d.getMonth()+1) +' 月 '+ String(d.getDate()) +' 日 '+ String(d.getHours()) +' 時 ' + String(d.getMinutes()) +' 分 '

    //var Month = (new Date(milliseconds)).getMonth()	+1//.format('YYYY-MM-DD HH:m:s')
    
   // var day =  (new Date(milliseconds)).getDate()
 
    //var returnText = String(Month) + '月' + String(day)  '日'
    return toDayMDHM// + '月' + day '日'
    
    
};

function convertMSC( milliseconds ) {
   // var day, hour, minute, seconds;
    var d = new Date(milliseconds)
    var toDayMDHM = String(d.getMonth()+1) +' 月 '+ String(d.getDate()) +' 日 '+ String(d.getHours()) +' 時 '// + String(d.getMinutes()) +' 分 '

    //var Month = (new Date(milliseconds)).getMonth()	+1//.format('YYYY-MM-DD HH:m:s')
    
   // var day =  (new Date(milliseconds)).getDate()
 
    //var returnText = String(Month) + '月' + String(day)  '日'
    return toDayMDHM// + '月' + day '日'
    
    
};

function convertMSD( milliseconds ) {
   // var day, hour, minute, seconds;
    var d = new Date(milliseconds)
    var toDayD = String(d.getDate()) //+' 日 '// + String(d.getMinutes()) +' 分 '

    //var Month = (new Date(milliseconds)).getMonth()	+1//.format('YYYY-MM-DD HH:m:s')
    
   // var day =  (new Date(milliseconds)).getDate()
 
    //var returnText = String(Month) + '月' + String(day)  '日'
    return toDayD// + '月' + day '日'
    
    
};


function convertMSE( milliseconds ) {
   // var day, hour, minute, seconds;
    var d = new Date(milliseconds)
    var toDayM = String(d.getMonth()+1) +' 月 '

    //var Month = (new Date(milliseconds)).getMonth()	+1//.format('YYYY-MM-DD HH:m:s')
    
   // var day =  (new Date(milliseconds)).getDate()
 
    //var returnText = String(Month) + '月' + String(day)  '日'
    return toDayM// + '月' + day '日'
    
    
};


function convertMS_ToYMD_String( milliseconds ) {
   // var day, hour, minute, seconds;
    var d = new Date(milliseconds)
    var toYMD =  (String(d.getFullYear()) + ' 年 ' + String( d.getMonth() + 1) +  ' 月 ' +  String(d.getDate()) + ' 日 ')

    //var Month = (new Date(milliseconds)).getMonth()	+1//.format('YYYY-MM-DD HH:m:s')
    
   // var day =  (new Date(milliseconds)).getDate()
 
    //var returnText = String(Month) + '月' + String(day)  '日'
    return toYMD// + '月' + day '日'
    
    
};


function convertMS_to_monthData( milliseconds ) {
   // var day, hour, minute, seconds;
    var d = new Date(milliseconds)
   // var toDayM = String(d.getMonth()+1) +' 月 '
  //  var toDayMDHM = String(d.getMonth()+1) +' 月 '+ String(d.getDate()) +' 日 '+ String(d.getHours()) +' 時 '// + String(d.getMinutes()) +' 分 '

    //var Month = (new Date(milliseconds)).getMonth()	+1//.format('YYYY-MM-DD HH:m:s')
    
   // var day =  (new Date(milliseconds)).getDate()
 
    //var returnText = String(Month) + '月' + String(day)  '日'
    //var yearSrting = d.getFullYear()
    
    var year = d.getFullYear()
    var month = d.getMonth() +1
    var firstDay = d.getDate()
    var lastDay_ofMonth = (String(new Date(d.getFullYear(), d.getMonth() + 1, 0))).split(' ');
   // console.log(lastDay_ofMonth)

    var lastDay = parseInt(lastDay_ofMonth[2])
    
   // console.log(lastDay)

    
    var monthStartDayString = (String(year) + ' 年 ' + String(month) +  ' 月 ' +  String(firstDay) + ' 日 ')
    var selMonthFirstDayMS = getSelDayMs(monthStartDayString)
    var monthLastDayString = (String(year) + ' 年 ' + String(month) +  ' 月 ' +  String(lastDay) + ' 日 ')
    var selMonthLastDayMS = getSelDayMs(monthLastDayString)
   // console.log(monthLastDayString)

    
    
    
    var dayList = [year,month,firstDay,lastDay,monthStartDayString,monthLastDayString,selMonthFirstDayMS,selMonthLastDayMS]
    
    
    
    
    return dayList// + '月' + day '日'
    
    
};



function convertWeekDay( milliseconds ) {
   // var day, hour, minute, seconds;
    var d = new Date(milliseconds)
   // var toDayMDHM = String(d.getMonth()+1) +' 月 '+ String(d.getDate()) +' 日 '+ String(d.getHours()) +' 時 ' + String(d.getMinutes()) +' 分 '
    var weekDay = d.getDay()
    //var Month = (new Date(milliseconds)).getMonth()	+1//.format('YYYY-MM-DD HH:m:s')
    
   // var day =  (new Date(milliseconds)).getDate()
 
    //var returnText = String(Month) + '月' + String(day)  '日'
    return weekDay// + '月' + day '日'
    
    
};




function endOfMonth(date) {
     
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
 
};

//dt = new Date(); 

//console.log(endOfMonth(dt).toString());