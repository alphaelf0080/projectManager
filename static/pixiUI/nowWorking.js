    if(taskTypeCount > maxViewTaskTypeCount){
       // var rollBarHeight =  ( parseFloat(maxViewTaskTypeCount)/taskTypeCount)  * barOutlineHeight
       // var rollBarMaxHeight = barOutlineHeight
        
        var rollBarHeight =   barOutlineHeight 
        var rollBarMaxHeight = taskTypeCount * inputBoxGap 

    }else{
        var rollBarHeight =   barOutlineHeight 
        var rollBarMaxHeight = barOutlineHeight
    };
    
    var rollBar = new buildRollBarVertical_signalWin(taskTypeEditWinBlock,winBlock,daysApp,w-30,60,20,rollBarHeight,rollBarMaxHeight,1)
                                                       // parent, affect block4,'0x6c868a',0.5,'0x6c868a','center') //工作類型選擇
    
    
          
        var weekDaysList = ["日","一","二","三","四","五","六"]


        for(var j = 0 ; j < taskProcessRangeDays ; j++){
            var unitDayMs = taskStartDayMs + j*86400000
            var selWeekDayString =weekDaysList[new Date(unitDayMs).getDay()]

            
            
            points.sort(function(a, b){return a-b});
