//// report List Js
//// 月報表 / 專案報表

//// V 0.9



function buildReportListWin(parent,x,y,w,h,scale){   
    

    parent.removeChild(parent.getChildByName("reportList_container"))
    
    var userData = JSON.parse(window.localStorage.getItem("userData"));
    

   // console.log(userNameList)

    //價目表主視窗
    var reportListWinBlock = new moveAbleWinBlockC(uiBaseContainer,x,y,w,h,'月報表',20,20,16,'0xffffff','reportList_container',1,'0x555555',5,'0x333333',1,1,0.6,'0x3670ad',daysApp,screenW,screenH,true)    

        reportListWinBlock.scale.set(scale)
   

        reportListWinBlock.mode = 'percentage'
    
    var deptSelectBtn = new inputBoxWithLabelC(reportListWinBlock,20,40,50,80,1,'部門:','GA',11,'0xffffff','0xcccccc',4,'0x6c868a',0.5,'0x6c868a','center') //工作類型選擇
        deptSelectBtn.name = 'deptSelectBtn'
        setButtonOptionSelectedAndSearch(deptSelectBtn,['GA','GAD','TA','WEB','AU','IM','ALL'],'部門選擇',300,80,'center',80)
    
    var percentage_selBtn= new buildBtnScaleF(reportListWinBlock,200,35,100,25,6,'Noto Sans TC','300','工時佔比','0xffffff',15,1,'0x333333',1,0,'0x3d71b5') //'0x67e4aa'
        percentage_selBtn.name = 'percentage_selBtn'
        percentage_selBtn.tint = '0x6666ff'
        percentage_selBtn.on('mousedown', function(){
                             
                            console.log('percentage_selBtn')
            
                            this.tint = '0x6666ff'
                            var totalTime_selBtn = this.parent.getChildByName("totalTime_selBtn")
                                totalTime_selBtn.tint = '0xffffff'
            
                            var selUserData =  userData.filter(function(item, index, array){
                                                           // return item[0] == taskTypeSortIndex
                                                            return item[38] == deptSelectBtn.text

                                                            });   

                                this.parent.mode = 'percentage'
                            var selUserList = new mergeSelElementFromList(selUserData,2)

                            var reportListWinBlock = this.parent
                            var winBlock = reportListWinBlock.getChildByName("winBlock")
                            var reportWin_Container  = winBlock.getChildByName("reportWin_Container")

                                winBlock.removeChild(winBlock.getChildByName("reportWin_Container"))
                             //  console.log(winBlock)
                             // console.log(reportWin_Container)

                            var reportWin_Container = new PIXI.Container()
                                reportWin_Container.name = 'reportWin_Container';
                                winBlock.addChild(reportWin_Container)   

                                getFullYearEveryMonthWT(selYearText.text,deptSelectBtn.text,reportWin_Container,this.parent.mode)
            
            
            
            
            
                        });
    
    var totalTime_selBtn= new buildBtnScaleF(reportListWinBlock,320,35,100,25,6,'Noto Sans TC','300','工時累計','0xffffff',15,1,'0x333333',1,0,'0x3d71b5') //'0x67e4aa'
        totalTime_selBtn.name = 'totalTime_selBtn'  
        totalTime_selBtn.on('mousedown', function(){
                             
                            console.log('totalTime_selBtn')
            
                            this.tint = '0x6666ff'
                            this.parent.mode = 'hours'
                            var percentage_selBtn = this.parent.getChildByName("percentage_selBtn")
                                percentage_selBtn.tint = '0xffffff'
            
            
                            var selUserData =  userData.filter(function(item, index, array){
                                                           // return item[0] == taskTypeSortIndex
                                                            return item[38] == deptSelectBtn.text

                                                            });   

                          
                            var selUserList = new mergeSelElementFromList(selUserData,2)

                            var reportListWinBlock = this.parent
                            var winBlock = reportListWinBlock.getChildByName("winBlock")
                            var reportWin_Container  = winBlock.getChildByName("reportWin_Container")

                                winBlock.removeChild(winBlock.getChildByName("reportWin_Container"))
                             //  console.log(winBlock)
                             // console.log(reportWin_Container)

                            var reportWin_Container = new PIXI.Container()
                                reportWin_Container.name = 'reportWin_Container';
                                winBlock.addChild(reportWin_Container)   
            
                                getFullYearEveryMonthWT(selYearText.text,deptSelectBtn.text,reportWin_Container,this.parent.mode)

            
            
            
            

                        });
    
    var today =  new Date()
    var todayMs =  new Date().valueOf();  
    

    ////上一年 btn
    var pageUpCtrBtnBox = new inputBoxWithLabelC(reportListWinBlock,510,40,50,30,1,'','<',16,'0xffffff','0xcccccc',4,'0x6c868a',0.5,'0x6c868a','center') //工作類型選擇
        pageUpCtrBtnBox.disabled = true
    
    ////下一年 btn
    var pageDownCtrBtnBox = new inputBoxWithLabelC(reportListWinBlock,550,40,50,30,1,'','>',16,'0xffffff','0xcccccc',4,'0x6c868a',0.5,'0x6c868a','center') //工作類型選擇
        pageDownCtrBtnBox.disabled = true


     
    ////顯示年度文字
 
    var selYearText = new inputBoxWithLabelC(reportListWinBlock,580,40,50,90,1,'','',18,'0xffffff','0xcccccc',4,'0x333333',0.5,'0x333333','center') //工作類型選擇
        selYearText.disabled = true
    
    var selYearTextLabel = new inputBoxWithLabelC(reportListWinBlock,660,40,50,50,1,'','年',19,'0xffffff','0xffffff',4,'0x333333',0.5,'0x333333','center') //工作類型選擇
        selYearTextLabel.disabled = true
        reportListWinBlock.addChild(selYearText)
    
        selYearText.name = 'selYearText'
   // console.log(Math.floor(1/2)) 
   // console.log(Math.floor(2/2)) 


   // var selMonthString = new Date(todayMs).getFullYear() + ' 年 ' + startMonthList[new Date(todayMs).getMonth()] + ' 月 ' + ' 1'+' 日 ' 
    

    
   // userWorkingTimeMainWin.currentStartMonth = startMonthList[new Date(todayMs).getMonth()]
   // userWorkingTimeMainWin.currentEndMonth = startMonthList[new Date(todayMs).getMonth()] +1
   // reportListWinBlock.currentYear =parseInt( new Date(todayMs).getFullYear())
        selYearText.text = parseInt( new Date(todayMs).getFullYear()) // + ' 年 ' //String(userWorkingTimeMainWin.currentYear) +  ' 年 ' +  String(userWorkingTimeMainWin.currentStartMonth) + ' 月 ' + " ~ " + String(userWorkingTimeMainWin.currentYear) +  ' 年 '+ String(userWorkingTimeMainWin.currentEndMonth)+ ' 月 ' 

    var startDayMs = getSelDayMs(String(selYearText.text) + ' 年 ' + '1' +  ' 月 ' + '1' + ' 日 ')
    var endDayMs = getSelDayMs(String(selYearText.text) + ' 年 ' + '12' +  ' 月 ' + '31' + ' 日 ') + 86400000 -1 
    pageUpCtrBtnBox.interactive = true;
    pageUpCtrBtnBox.buttonMode = true;
    pageUpCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
   
                    .on('mousedown',function(){this.alpha=0.5;
                                               
                                    //   console.log(selYearMs)
                                       selYearText.text = parseInt(selYearText.text) -1
                                               
                                       var newYearMs = getSelDayMs(String(selYearText.text) + ' 年 ' + '1' +  ' 月 ' + '1' + ' 日 ')


                                       var preStartDayMs = getSelDayMs(String(selYearText.text) + ' 年 ' + '1' +  ' 月 ' + '1' + ' 日 ')
                                       var preEndDayMs = getSelDayMs(String(selYearText.text) + ' 年 ' + '12' +  ' 月 ' + '31' + ' 日 ') + 86400000 -1 
    

                                       
                                       // console.log(newYearMs )
                                      //  getWorkingTimeDBSelMonth(preStartDayMs,preEndDayMs)

                                        var selUserData =  userData.filter(function(item, index, array){
                                                           // return item[0] == taskTypeSortIndex
                                                            return item[38] == deptSelectBtn.text

                                                            });   

                          
                                        var selUserList = new mergeSelElementFromList(selUserData,2)
                                        
                                        var reportListWinBlock = this.parent
                                        var winBlock = reportListWinBlock.getChildByName("winBlock")
                                        var reportWin_Container  = winBlock.getChildByName("reportWin_Container")
                                        
                                        winBlock.removeChild(winBlock.getChildByName("reportWin_Container"))
                                         //  console.log(winBlock)
                                         // console.log(reportWin_Container)
    
                                        var reportWin_Container = new PIXI.Container()
                                            reportWin_Container.name = 'reportWin_Container';
                                            winBlock.addChild(reportWin_Container)   

                                        console.log()       
                                        getFullYearEveryMonthWT(selYearText.text,deptSelectBtn.text,reportWin_Container,this.parent.mode)

                                            
                                      })
                    .on('pointerup', function(){this.alpha=1;})
    
    pageDownCtrBtnBox.interactive = true;
    pageDownCtrBtnBox.buttonMode = true;
    pageDownCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                     .on('pointerout', function(){this.alpha=1;})
                     .on('mousedown',function(){this.alpha=0.5;
                                        selYearText.text = parseInt(selYearText.text) + 1
                                        var newYearMs = getSelDayMs(String(selYearText.text) + ' 年 ' + '1' +  ' 月 ' + '1' + ' 日 ')
                                        var nextStartDayMs = getSelDayMs(String(selYearText.text) + ' 年 ' + '1' +  ' 月 ' + '1' + ' 日 ')
                                        var nextEndDayMs = getSelDayMs(String(selYearText.text) + ' 年 ' + '12' +  ' 月 ' + '31' + ' 日 ') + 86400000 -1 

                                       
                                      //  console.log(newYearMs )
                                      //  getWorkingTimeDBSelMonth(nextStartDayMs,nextEndDayMs)

                                        var selUserData =  userData.filter(function(item, index, array){
                                                           // return item[0] == taskTypeSortIndex
                                                            return item[38] == deptSelectBtn.text

                                                            });   

                          
                                        var selUserList = new mergeSelElementFromList(selUserData,2)
                                        var reportListWinBlock = this.parent
                                        var winBlock = reportListWinBlock.getChildByName("winBlock")
                                        var reportWin_Container  = winBlock.getChildByName("reportWin_Container")
                                        
                                        winBlock.removeChild(winBlock.getChildByName("reportWin_Container"))
                                        //   console.log(winBlock)
                                        //  console.log(reportWin_Container)
    
                                        var reportWin_Container = new PIXI.Container()
                                            reportWin_Container.name = 'reportWin_Container';
                                            winBlock.addChild(reportWin_Container)   

                                        getFullYearEveryMonthWT(selYearText.text,deptSelectBtn.text,reportWin_Container,this.parent.mode)

                                      })
                     .on('pointerup', function(){this.alpha=1;})
    
    
    
    
    
    
    
    
    
    
   // var startMonthString = new Date(todayMs).getFullYear() + ' 年 ' + String(startMonthList[new Date(todayMs).getMonth()]) + ' 月 '// + ' 1'+' 日 ' 
   // var endMonthString = new Date(todayMs).getFullYear() + ' 年 ' +  String(startMonthList[new Date(todayMs).getMonth()]+1) + ' 月 '

    
    
    
    var winBlock =  new PIXI.Graphics(); //asset 主視窗
        winBlock.lineStyle(1, '0x616385', 0.2);
        winBlock.beginFill('0x222822',1);
        winBlock.drawRoundedRect(0,0, w-20,h-80 , 2);
        winBlock.endFill();
        winBlock.name = 'winBlock'
        winBlock.x = 10
        winBlock.y =  70
        reportListWinBlock.addChild(winBlock)
    
        winBlock.removeChild(winBlock.getChildByName("reportWin_Container"))

    
    var reportWin_Container = new PIXI.Container()
        reportWin_Container.name = 'reportWin_Container';
        winBlock.addChild(reportWin_Container)   
    
   // console.log(userData)
    /*
    var selUserData =  userData.filter(function(item, index, array){
                                   // return item[0] == taskTypeSortIndex
                                    return item[38] == deptSelectBtn.text

                                    });   
     checkUser_layoff(selUserData)     
   // var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    //console.log(selUserData)mergeSelElementFromListToString(selData,index,plusSymbol)
    var selUserList = new mergeSelElementFromList(selUserData,2)
    */
   // var selUserListString = JSON.stringify(selUserList) todayMs
    
   // console.log(String(selUserList))
    //console.log(selUserList)

   // getWorkingTimeDBSelMonth(startDayMs,endDayMs,String(selUserList))
  //  var stringUserList = new checkUser_layoff(dept)

        getFullYearEveryMonthWT(selYearText.text,deptSelectBtn.text,reportWin_Container,reportListWinBlock.mode)

 
    
    return reportListWinBlock
                                                           
                                            

};


function getFullYearEveryMonthWT(year,dept,parent,mode){
    console.log(mode)
    // task_type 圖示說明
    
    //var taskType_list = ['專案管理','專案執行','創新技術研究','內部工作優化','市場需求','維運','其他']


    var taskType_list = JSON.parse(window.localStorage.getItem("taskType_list"));
   // console.log(taskType_list)
    
    
    if(mode == 'percentage' ){
        for(var i =0 ; i<taskType_list.length;i++){
        
        
                if( taskType_list[i] == '專案管理'){
                    var bk_line_color = '0xffaaaa'    
                    var bk_fill_color = '0xffaaaa'    
                }else if(taskType_list[i] == '專案執行'){
                    var bk_line_color =  '0xaaffaa'    
                    var bk_fill_color =  '0xaaffaa'    
                }else if(taskType_list[i] == '創新技術研究'){
                    var bk_line_color =  '0x55aaff'    
                    var bk_fill_color =  '0x55aaff'      
                }else if(taskType_list[i] == '內部工作優化'){
                    var bk_line_color = '0xffff55'    
                    var bk_fill_color = '0xffff55'    
                }else if(taskType_list[i] == '市場需求'){
                    var bk_line_color = '0x74f1fe'    
                    var bk_fill_color = '0x222222'    
                }else if(taskType_list[i] == '維運'){
                    var bk_line_color = '0xfe95f2'    
                    var bk_fill_color = '0x222222'    
                }else if(taskType_list[i] == '其他'){
                    var bk_line_color = '0xeeeeee'    
                    var bk_fill_color = '0xeeeeee'    
                };    


                var taskType_sample_BK = new sampleLabel(parent,80 + Math.floor(i/4)*250,720+(i%4)*22,10,80,1,'','',1,'0xffffff','0xcccccc',1,bk_line_color,3,bk_fill_color,'center',0.7,1) //工作類型選擇

                var taskType_sample_BK = new sampleLabel(parent,180 + Math.floor(i/4)*250,720+(i%4)*22,10,80,1,taskType_list[i],'',10,'0xffffff','0xcccccc',1,'0x222822',1,'0x222822','center',0.7,0) //工作類型選擇

        };
        
        var total_WT_desc_label = new sampleLabel(parent,5,590 ,10,80,1,'部門總工時:','',10,'0xaaffaa','0xaaffaa',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_WT_desc_label.disabled = true
        var total_dayOff_desc_label = new sampleLabel(parent,5,610 ,10,80,1,'總休假時數:','',10,'0xaaeeff','0xaaeeff',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_dayOff_desc_label.disabled = true

        var total_percentage_desc_label = new sampleLabel(parent,5,630 ,10,80,1,'工時百分比:','',10,'0xbbbbbb','0xbbbbbb',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_percentage_desc_label.disabled = true   
        
        var total_deptPersons_desc_label = new sampleLabel(parent,5,650 ,10,80,1,'部門總人數:','',10,'0xbbbbbb','0xbbbbbb',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_deptPersons_desc_label.disabled = true   
       
        var total_monthWT_days_desc_label = new sampleLabel(parent,5,670 ,10,80,1,'當月工作日:','',10,'0xbbbbbb','0xbbbbbb',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_monthWT_days_desc_label.disabled = true    
            
        for(var i = 0 ; i<12 ;i++){
            var selMonthFirstDayString = (String(year) + ' 年 ' + String(i+1) +  ' 月 ' + '1' + ' 日 ')
            var selMonthFirstDayMS = getSelDayMs(selMonthFirstDayString)
            var monthData = convertMS_to_monthData( selMonthFirstDayMS )
            var monthStartDay_MS = monthData[6]
            var monthEndDay_MS = monthData[7]

            
          //  console.log(dept,monthStartDay_MS,monthEndDay_MS)

            var stringUserList = new checkUser_layoff(dept,monthStartDay_MS,monthEndDay_MS)
           // console.log(stringUserList)
            getWorkingTimeDBSelMonth(monthStartDay_MS,monthEndDay_MS,String(stringUserList),parent)

        };
        
    }else{
        
        for(var i =0 ; i<taskType_list.length;i++){
        
        
                if( taskType_list[i] == '專案管理'){
                    var bk_line_color = '0xffaaaa'    
                    var bk_fill_color = '0xffaaaa' 
                    var font_color = '0x111111'
                }else if(taskType_list[i] == '專案執行'){
                    var bk_line_color =  '0xaaffaa'    
                    var bk_fill_color =  '0xaaffaa'
                    var font_color = '0x111111'
                }else if(taskType_list[i] == '創新技術研究'){
                    var bk_line_color =  '0x55aaff'    
                    var bk_fill_color =  '0x55aaff'
                    var font_color = '0x111111'
                }else if(taskType_list[i] == '內部工作優化'){
                    var bk_line_color = '0xffff55'    
                    var bk_fill_color = '0xffff55'   
                    var font_color = '0x111111'
                }else if(taskType_list[i] == '市場需求'){
                    var bk_line_color = '0x74f1fe'    
                    var bk_fill_color = '0x222222'    
                    var font_color = '0xeeeeee'
                }else if(taskType_list[i] == '維運'){
                    var bk_line_color = '0xfe95f2'    
                    var bk_fill_color = '0x222222'   
                    var font_color = '0xeeeeee'
                }else if(taskType_list[i] == '其他'){
                    var bk_line_color = '0xeeeeee'    
                    var bk_fill_color = '0xeeeeee'   
                    var font_color = '0x111111'
                };    


                var taskType_sample_BK = new sampleLabel(parent,2,550+i*25,0,110,1,'','',16,'0xffffff','0xffffff',1,bk_line_color,2,bk_fill_color,'center',0.8,1) //工作類型選擇

                var taskType_sampleText_BK = new sampleLabel(parent,5,550+i*25,0,110,1,taskType_list[i],'',9,font_color,font_color,1,'0x222822',1,'0x222822','center',0.8,0) //工作類型選擇

        };
        
        var blockHight = 400
        
        

        var maxUserNumber = 20

        var maxTotalHours = maxUserNumber * 24 * 8

       // var hourUnitHours = Math.ceil(maxTotalHours /
        var hourUnitLine_number = Math.floor(maxTotalHours / 200)
        
        var hourUnit_height = blockHight/hourUnitLine_number
        
        for(var i = 0 ; i< hourUnitLine_number ; i++){
          
                
                   
            var hoursNumb_label = new sampleLabel(parent,5,(blockHight+70 - (i)*hourUnit_height) ,0,60,1,'',200*i +' 小時',10,'0x999999','0x999999',1,'0x222822',3,'0x222822','right',1,1) //工作類型選擇
            hoursNumb_label.disabled = true    
            

        };
         
        
        var total_WT_desc_label = new sampleLabel(parent,5,500 ,10,80,1,'部門總工時:','',10,'0xaaffaa','0xaaffaa',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_WT_desc_label.disabled = true
        var total_dayOff_desc_label = new sampleLabel(parent,5,520 ,10,80,1,'總休假時數:','',10,'0xaaeeff','0xaaeeff',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_dayOff_desc_label.disabled = true

  
        var total_percentage_desc_label = new sampleLabel(parent,5,730 ,10,80,1,'工時百分比:','',10,'0xbbbbbb','0xbbbbbb',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_percentage_desc_label.disabled = true   
        
        var total_deptPersons_desc_label = new sampleLabel(parent,5,750 ,10,80,1,'部門總人數:','',10,'0xbbbbbb','0xbbbbbb',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_deptPersons_desc_label.disabled = true   
       
        var total_monthWT_days_desc_label = new sampleLabel(parent,5,770 ,10,80,1,'當月工作日:','',10,'0xbbbbbb','0xbbbbbb',1,bk_line_color,3,'0x222822','center',0.7,0) //工作類型選擇
            total_monthWT_days_desc_label.disabled = true    
             
        for(var i = 0 ; i<12 ;i++){
            var selMonthFirstDayString = (String(year) + ' 年 ' + String(i+1) +  ' 月 ' + '1' + ' 日 ')
            var selMonthFirstDayMS = getSelDayMs(selMonthFirstDayString)
            var monthData = convertMS_to_monthData( selMonthFirstDayMS )
            var monthStartDay_MS = monthData[6]
            var monthEndDay_MS = monthData[7]
            
            
          //  console.log(dept,monthStartDay_MS,monthEndDay_MS)

            var stringUserList = new checkUser_layoff(dept,monthStartDay_MS,monthEndDay_MS)
           // console.log(selMonthFirstDayString,dept,stringUserList)

            getWorkingTimeDBSelMonth_for_Total_hour(monthStartDay_MS,monthEndDay_MS,String(stringUserList),parent,blockHight)
          //  getWorkingTimeDBSelMonth(monthStartDay_MS,monthEndDay_MS,String(stringUserList),parent)


        }; 
        
        
        
        
        
        
    };


};



/*
function getFullYearEveryMonthWT_hours(year,stringUserList,parent){
    
    
    
};
*/
////取得指定區間工時
function getWorkingTimeDBSelMonth(startDayMs,endDayMs,stringUserList,parent){
       // console.log(parent)
      //  var selMonthMs = convertMSE( selDayMs )
        $.post("/getWorkingTimeInRange", {   //runAllAutoEvents
                'startDayMs':startDayMs,
                'endDayMs':endDayMs,
                'stringUserList':stringUserList//JSON.stringify(selUserList),

               // 'endMs':endMs,


        }, function(data) {
            
               // var workingDays = 
                var selDateString = data[1][3]
                var selMonth =  data[1][2]
                var selMonth_WT_data = data[6]
                  //  console.log(selDateString)

                   // console.log('工時總表',selMonth_WT_data)
    
                
               // console.log(data)
                var reportMonthBK = new drawReportData(parent,(selMonth-1)*132+90,80,130,500,selMonth,data)

       
        })
    
};


////取得指定區間工時 累計工時計算
function getWorkingTimeDBSelMonth_for_Total_hour(startDayMs,endDayMs,stringUserList,parent,blockHight){
        console.log('getWorkingTimeDBSelMonth_for_Total_hour')
    
       // console.log(startDayMs,endDayMs,stringUserList)
      //  var selMonthMs = convertMSE( selDayMs )
    
    
        $.post("/getWorkingTimeInRange", {   //runAllAutoEvents
                'startDayMs':startDayMs,
                'endDayMs':endDayMs,
                'stringUserList':stringUserList//JSON.stringify(selUserList),

               // 'endMs':endMs,


        }, function(data) {
            
               // var workingDays = 
                var selDateString = data[1][3]
                var selMonth =  data[1][2]
                var selMonth_WT_data = data[6]
                    console.log(selDateString)

                    console.log('工時總表',selMonth_WT_data)
    
                
                console.log(data)
                var reportMonthBK = new drawReportData_by_totalHours(parent,(selMonth-1)*132+90,80,130,blockHight,selMonth,data)

       
        })
    
    
};

function callMonthReportData(month,monthData,dept){
    console.log(month,monthData,dept)

    
    uiBaseContainer.removeChild(uiBaseContainer.getChildByName("monthDetail_mainWin"))

       //價目表主視窗
    
    var winW = 1600
    var winH = 800
    var monthDetail_mainWin = new moveAbleWinBlockC(uiBaseContainer,100,100,winW,winH,'月細項報表',20,20,16,'0xffffff','monthDetail_mainWin',1,'0x555555',5,'0x333333',1,1,1,'0x36706d',daysApp,screenW,screenH,true)    

    
   
    var taskTypePri_btn= new buildBtnScaleF(monthDetail_mainWin,10,50,100,25,6,'Noto Sans TC','300','工作類別','0xffffff',15,1,'0x333333',1,0,'0x3d71b5') //'0x67e4aa'
        taskTypePri_btn.name = 'taskTypePri_btn'
        taskTypePri_btn.tint = '0x6666ff' 
    
        taskTypePri_btn.on('mousedown', function(){

                        console.log('taskTypePri_btn, 工作類別')

                        this.tint = '0x6666ff'
                        var userPri_btn = this.parent.getChildByName("userPri_btn")
                            userPri_btn.tint = '0xffffff'
            
                        var projPri_btn = this.parent.getChildByName("projPri_btn")
                            projPri_btn.tint = '0xffffff'
            
                        var monthDetail_mainWin =  this.parent

                        var monthDetail_mainWin_Container = monthDetail_mainWin.getChildByName("monthDetail_mainWin_Container")

                        var monthDetail_mainBK = monthDetail_mainWin_Container.getChildByName("monthDetail_mainBK")
                        var monthDetail_SecBK = monthDetail_mainWin_Container.getChildByName("monthDetail_SecBK")
                        
                      //  console.log(monthDetail_mainBK,monthDetail_SecBK)
                            monthDetail_mainBK.removeChild(monthDetail_mainBK.getChildByName("leftWin_Container"))
                            monthDetail_SecBK.removeChild(monthDetail_SecBK.getChildByName("rightWin_Container"))
                            buildMonthReportDataWin_TaskType(monthDetail_mainBK,monthDetail_SecBK,month,monthData,dept)


                    });
    
    
    
    
    
    var userPri_btn= new buildBtnScaleF(monthDetail_mainWin,112,50,100,25,6,'Noto Sans TC','300','執行人員','0xffffff',15,1,'0x333333',1,0,'0x3d71b5') //'0x67e4aa'
        userPri_btn.name = 'userPri_btn'
    
        userPri_btn.on('mousedown', function(){

                        console.log('userPri_btn, 執行人員')

                        this.tint = '0x6666ff'
                        var taskTypePri_btn = this.parent.getChildByName("taskTypePri_btn")
                            taskTypePri_btn.tint = '0xffffff'
            
                        var projPri_btn = this.parent.getChildByName("projPri_btn")
                            projPri_btn.tint = '0xffffff'
            
       
                        var monthDetail_mainWin =  this.parent

                        var monthDetail_mainWin_Container = monthDetail_mainWin.getChildByName("monthDetail_mainWin_Container")

                        var monthDetail_mainBK = monthDetail_mainWin_Container.getChildByName("monthDetail_mainBK")
                        var monthDetail_SecBK = monthDetail_mainWin_Container.getChildByName("monthDetail_SecBK")
                        
                      //  console.log(monthDetail_mainBK,monthDetail_SecBK)
                            monthDetail_mainBK.removeChild(monthDetail_mainBK.getChildByName("leftWin_Container"))
                            monthDetail_SecBK.removeChild(monthDetail_SecBK.getChildByName("rightWin_Container"))

                            buildMonthReportDataWin_deptUser(monthDetail_mainBK,monthDetail_SecBK,month,monthData,dept)



                    });
    
    
    
    
        //taskTypePri_btn.tint = '0xffffff' 
          
    var projPri_btn= new buildBtnScaleF(monthDetail_mainWin,214,50,100,25,6,'Noto Sans TC','300','專案','0xffffff',15,1,'0x333333',1,0,'0x3d71b5') //'0x67e4aa'
        projPri_btn.name = 'projPri_btn' 
    
    
    
        projPri_btn.on('mousedown', function(){

                        console.log('projPri_btn , 專案')

                        this.tint = '0x6666ff'
                        var taskTypePri_btn = this.parent.getChildByName("taskTypePri_btn")
                            taskTypePri_btn.tint = '0xffffff'
            
                        var userPri_btn = this.parent.getChildByName("userPri_btn")
                            userPri_btn.tint = '0xffffff'
            
                        var monthDetail_mainWin =  this.parent

                        var monthDetail_mainWin_Container = monthDetail_mainWin.getChildByName("monthDetail_mainWin_Container")

                        var monthDetail_mainBK = monthDetail_mainWin_Container.getChildByName("monthDetail_mainBK")
                        var monthDetail_SecBK = monthDetail_mainWin_Container.getChildByName("monthDetail_SecBK")
                        
                      //  console.log(monthDetail_mainBK,monthDetail_SecBK)
                            monthDetail_mainBK.removeChild(monthDetail_mainBK.getChildByName("leftWin_Container"))
                            monthDetail_SecBK.removeChild(monthDetail_SecBK.getChildByName("rightWin_Container"))





                    });
    
    
       // monthDetail_mainWin.scale.set(scale)
        monthDetail_mainWin.removeChild(monthDetail_mainWin.getChildByName("monthDetail_mainWin_Container"))

    var monthDetail_mainWin_Container = new PIXI.Container()
        monthDetail_mainWin_Container.name = 'monthDetail_mainWin_Container';
        monthDetail_mainWin.addChild(monthDetail_mainWin_Container)   

      
    var monthDetail_mainBK_W = 500

    var monthDetail_mainBK_H = 700
    
    var monthDetail_mainBK =  new PIXI.Graphics(); //asset 主視窗
        monthDetail_mainBK.lineStyle(0.5, '0xaaccff', 0.5);
        monthDetail_mainBK.beginFill('0x222222',1);
        monthDetail_mainBK.drawRoundedRect(0,0, monthDetail_mainBK_W,monthDetail_mainBK_H , 2);
        monthDetail_mainBK.endFill();
        monthDetail_mainBK.name = 'monthDetail_mainBK'
        monthDetail_mainBK.x = 5
        monthDetail_mainBK.y = 90
        monthDetail_mainWin_Container.addChild(monthDetail_mainBK)
    
        
    var monthDetail_SecBK =  new PIXI.Graphics(); //asset 主視窗 taskCountType
        monthDetail_SecBK.lineStyle(0.5, '0xaaccff', 0.5);
        monthDetail_SecBK.beginFill('0x111111',0.3);
        monthDetail_SecBK.drawRoundedRect(0,0, winW - monthDetail_mainBK_W -15 ,monthDetail_mainBK_H , 2);
        monthDetail_SecBK.endFill();
        monthDetail_SecBK.name = 'monthDetail_SecBK'
        monthDetail_SecBK.x = 5 + monthDetail_mainBK_W +5
        monthDetail_SecBK.y = 90
        monthDetail_mainWin_Container.addChild(monthDetail_SecBK)
    
    //month data 
    buildMonthReportDataWin_TaskType(monthDetail_mainBK,monthDetail_SecBK,month,monthData,dept)
    
  //  var monthDetail_mainBK_rollBar = new buildRollBarVertical_signalWin(reportWin_Container,monthDetail_mainBK,daysApp,monthDetail_mainBK_W+ monthDetail_mainBK.x,60,20,300,monthDetail_mainBK_H,1)
                                                       // parent, affect block
        
   // var percentage_selBtn= new buildBtnScaleF(reportListWinBlock,200,35,100,25,6,'Noto Sans TC','300','工時佔比','0xffffff',15,1,'0x333333',1,0,'0x3d71b5') //'0x67e4aa'
   //     percentage_selBtn.name = 'percentage_selBtn'
        
    
};


function buildMonthReportDataWin_deptUser(leftWin,rightWin,month,monthData,dept){
    console.log('buildMonthReportDataWin_deptUser')   
    var taskType_list = JSON.parse(window.localStorage.getItem("taskType_list"));
    var taskTypeCountDB = JSON.parse(window.localStorage.getItem("taskTypeCountDB"));
    var taskType_countDB = monthData[7]
    var allUserTasksDB = monthData[6]
    var monthWT_days =  monthData[3].length

    var allUserList = monthData[12]
    var allUserDayOffList =  monthData[8]
    console.log(monthData,allUserList)
        leftWin.removeChild(leftWin.getChildByName("leftWin_Container"))
        rightWin.removeChild(rightWin.getChildByName("rightWin_Container"))

    var userMonthHours = monthWT_days * 8
    var leftWin_Container = new PIXI.Container()
        leftWin_Container.name = 'leftWin_Container';
        leftWin.addChild(leftWin_Container)   
        
    var rightWin_Container = new PIXI.Container()
        rightWin_Container.name = 'rightWin_Container';
        rightWin.addChild(rightWin_Container) 
    
    
    var total_percentage_desc_label = new sampleLabel(leftWin_Container,20,10 ,250,100,1,dept +'  ' +String(month) +' 月 部門人員工時資訊:','',13,'0xeeeeee','0xeeeeee',1,'0x222222',1,'0x222222','center',1,1) //工作類型選擇
        total_percentage_desc_label.disabled = true   
    
    
        
    for(var i = 0; i<allUserList.length;i++){
        var userDesc_BK =  new PIXI.Graphics(); //asset 主視窗
            userDesc_BK.lineStyle(0.5, '0xaaccff', 0);
            userDesc_BK.beginFill('0xcccccc',0.1);
            userDesc_BK.drawRoundedRect(0,0, 450,30 , 2);
            userDesc_BK.endFill();
            userDesc_BK.name = 'userDesc_BK'
            userDesc_BK.x = 10
            userDesc_BK.y = 75+i*33
            leftWin_Container.addChild(userDesc_BK)
            

            userDesc_BK.interactive = true;
            userDesc_BK.buttonMode = true;
            userDesc_BK.on('pointerover', function(){this.alpha=0.5;this.tint = '0x00ffff'})
                             .on('pointerout', function(){this.alpha=1;this.tint = '0xffffff'})
                             .on('mousedown',function(){this.alpha=0.5;
                                                     

                                                        
             
                                            rightWin.removeChild(rightWin.getChildByName("rightWin_Container"))
        
                                            var rightWin_Container = new PIXI.Container()
                                                rightWin_Container.name = 'rightWin_Container';
                                                rightWin.addChild(rightWin_Container)   

                                                        
                                                      callMonthReport_DetailByUser(rightWin_Container,monthData,this.userName)               
                                                            

                                              })
                             .on('pointerup', function(){this.alpha=1;this.tint = '0xffffff'})
        
        
            var userName = allUserList[i]
            userDesc_BK.userName = userName

            var userTaskList  =  allUserTasksDB.filter(function(item, index, array){
                                           // return item[0] == taskTypeSortIndex
                                            return item[1] == userName

                                            });   
        
            var userDayOffList  =  allUserDayOffList.filter(function(item, index, array){
                                           // return item[0] == taskTypeSortIndex
                                            return item[0] == userName

                                            });   
        
        
        
            var userTask_count =  userTaskList.length 
            
            var userTask_total_hours = 0.0
            for(var j =0 ;j <userTask_count; j++){
                
                userTask_total_hours += userTaskList[j][12]    
            };
        
            var userDayOff_total_hours = 0.0

            for(var j =0 ;j <userDayOffList.length; j++){
                
                userDayOff_total_hours += userDayOffList[j][2]    
            };
          //  percentageText.toFixed(1)
            var userWT_percentageText = (parseFloat(userTask_total_hours)/parseFloat((userMonthHours-userDayOff_total_hours)))*100.0
            
            if(userWT_percentageText >= 99.8){
                var bkFillColor = '0x2a597c'
            }else{
                var bkFillColor = '0xe65c56'
 
            }
            
            var userNamelabel = new sampleLabel(userDesc_BK,10,7,25,100,3,i+1,userName,11,'0xeeeeee','0xeeeeee',3,'0x2a597c',2,'0x2a597c','center',1,1) 
            var userTask_count_label = new sampleLabel(userDesc_BK,117,7,20,50,3,'',userTask_count,11,'0xeeeeee','0xcccccc',3,'0x2a597c',2,'0x2a597c','center',1,1) 
            var userTask_totalHoursCount_label =  new sampleLabel(userDesc_BK,169,7,20,100,3,'',userTask_total_hours + ' 小時',11,'0xeeeeee','0xcccccc',3,bkFillColor,2,bkFillColor,'center',1,1) 
            var userDayOff_totalHoursCount_label =  new sampleLabel(userDesc_BK,271,7,20,70,3,'',userDayOff_total_hours + ' 小時',11,'0xeeeeee','0xcccccc',3,'0x2a597c',2,'0x2a597c','center',1,1) 

            var userDayOff_percentage_label =  new sampleLabel(userDesc_BK,344,7,20,80,3,'',userWT_percentageText.toFixed(1) +' %',11,'0xeeeeee','0xcccccc',3,bkFillColor,2,bkFillColor,'center',1,1) 

           // var percentageText = (parseFloat(currentTaskType_totalHours_count)/parseFloat(totalWT_hours))*100.0
          //  var taskTypeCount_percentage_label = new sampleLabel(taskTypeDesc_BK,326,7,20,80,3,'', percentageText.toFixed(1) + ' %',11,'0xeeeeee',fontColor,3,lineColor,2,fillColor,'center',1,1) 
                userNamelabel.disabled = true    
                userTask_count_label.disabled = true    
                userTask_totalHoursCount_label.disabled = true    
                userDayOff_totalHoursCount_label.disabled = true    
                userDayOff_percentage_label.disabled = true    


    }
    
};

function buildMonthReportDataWin_TaskType(leftWin,rightWin,month,monthData,dept){
    console.log('buildMonthReportDataWin_TaskType')   

    var taskType_list = JSON.parse(window.localStorage.getItem("taskType_list"));
    var taskTypeCountDB = JSON.parse(window.localStorage.getItem("taskTypeCountDB"));
    var taskType_countDB = monthData[7]
   // console.log(taskType_list)
    console.log(taskTypeCountDB)

    
    var deptTotalUsers =  monthData[1][5].length
    var monthWT_days =  monthData[3].length
    var totalWT_hours = monthData[9] -monthData[10]
    var taskType_percentage = (parseFloat(monthData[11])/parseFloat(totalWT_hours))*100.0
   // console.log(monthData[12],totalWT_hours)
        leftWin.removeChild(leftWin.getChildByName("leftWin_Container"))
        rightWin.removeChild(rightWin.getChildByName("rightWin_Container"))

    
    var leftWin_Container = new PIXI.Container()
        leftWin_Container.name = 'leftWin_Container';
        leftWin.addChild(leftWin_Container)   
        
    var rightWin_Container = new PIXI.Container()
        rightWin_Container.name = 'rightWin_Container';
        rightWin.addChild(rightWin_Container)   
    
    
    var total_percentage_desc_label = new sampleLabel(leftWin_Container,20,10 ,250,100,1,dept +'  ' +String(month) +' 月 總工時資訊 :','',13,'0xeeeeee','0xeeeeee',1,'0x222222',1,'0x222222','center',1,1) //工作類型選擇
        total_percentage_desc_label.disabled = true   
    
    
    var total_WT_desc_label = new sampleLabel(leftWin_Container,80,400 + 30*1  ,100,80,1,'部門總工時 :',monthData[9]+' 小時',10,'0xaaffaa','0xaaffaa',1,'0x222222',1,'0x333333','right',1,1) //工作類型選擇
        total_WT_desc_label.disabled = true
    var total_dayOff_desc_label = new sampleLabel(leftWin_Container,80,400 + 30*2,100,80,1,'總休假時數 :',monthData[10]+' 小時',10,'0xaaeeff','0xaaeeff',1,'0x222222',1,'0x333333','right',1,1) //工作類型選擇
        total_dayOff_desc_label.disabled = true


    var total_percentage_desc_label = new sampleLabel(leftWin_Container,80,400 + 30*3 ,100,80,1,'工時百分比 :',taskType_percentage.toFixed(1) + ' %',10,'0xbbbbbb','0xbbbbbb',1,'0x222222',1,'0x333333','right',1,1) //工作類型選擇
        total_percentage_desc_label.disabled = true   
0x222222
    var total_deptPersons_desc_label = new sampleLabel(leftWin_Container,80,400 + 30*4 ,100,80,1,'部門總人數 :',deptTotalUsers +' 人',10,'0xbbbbbb','0xbbbbbb',1,'0x222222',1,'0x333333','right',1,1) //工作類型選擇
        total_deptPersons_desc_label.disabled = true   

    var total_monthWT_days_desc_label = new sampleLabel(leftWin_Container,80,400 + 30*5 ,100,80,1,'當月工作日 :',monthWT_days +' 日',10,'0xbbbbbb','0xbbbbbb',1,'0x222222',1,'0x333333','right',1,1) //工作類型選擇
        total_monthWT_days_desc_label.disabled = true    

    var percentage_descText_label = new sampleLabel(leftWin_Container,50,400 + 30*8 ,130,300,1,'工時百分比說明 :','所有類別總實際工時 / ( 部門總工時 - 總休假時數)',10,'0xbbbbbb','0xbbbbbb',1,'0x222222',1,'0x222222','left',1,1) //工作類型選擇
        percentage_descText_label.disabled = true    

    
    
    
    
    for(var i = 0; i<taskTypeCountDB.length;i++){
        var taskTypeDesc_BK =  new PIXI.Graphics(); //asset 主視窗
            taskTypeDesc_BK.lineStyle(0.5, '0xaaccff', 0);
            taskTypeDesc_BK.beginFill('0xcccccc',0.1);
            taskTypeDesc_BK.drawRoundedRect(0,0, 450,30 , 2);
            taskTypeDesc_BK.endFill();
            taskTypeDesc_BK.name = 'taskTypeDesc_BK'
            taskTypeDesc_BK.x = 10
            taskTypeDesc_BK.y = 75+i*33
            leftWin_Container.addChild(taskTypeDesc_BK)
            

            taskTypeDesc_BK.interactive = true;
            taskTypeDesc_BK.buttonMode = true;
            taskTypeDesc_BK.on('pointerover', function(){this.alpha=0.5;this.tint = '0x00ffff'})
                             .on('pointerout', function(){this.alpha=1;this.tint = '0xffffff'})
                             .on('mousedown',function(){this.alpha=0.5;
                                        console.log(this.taskType)   

                                                        
                                                        
                                                        
                                      //  var leftWin = this.parent
                                      //  var rightWin = leftWin_Container.parent
                                            rightWin.removeChild(rightWin.getChildByName("rightWin_Container"))
        
                                            var rightWin_Container = new PIXI.Container()
                                                rightWin_Container.name = 'rightWin_Container';
                                                rightWin.addChild(rightWin_Container)   

                                                        
                                        callMonthReport_DetailByMode(rightWin_Container,monthData,this.taskType)               


                                              })
                             .on('pointerup', function(){this.alpha=1;this.tint = '0xffffff'})


    
        
        var fontColor = '0x'+ String(taskTypeCountDB[i][6])
        var fillColor = '0x'+  String(taskTypeCountDB[i][4])
        var lineColor = '0x'+  String(taskTypeCountDB[i][5])
         
 
        
        
       // console.log(fontColor,fillColor,lineColor)
        var taskCountType = taskTypeCountDB[i][1]
            taskTypeDesc_BK.taskType = taskCountType

        var sel_month_taskTypeDB =  taskType_countDB.filter(function(item, index, array){
                                           // return item[0] == taskTypeSortIndex
                                            return item[0] == taskCountType

                                            });   
        
        var currentTaskType_count = sel_month_taskTypeDB[0][3]
        var currentTaskType_totalHours_count = sel_month_taskTypeDB[0][1]

       // console.log(sel_month_taskTypeDB)

        var taskTypeCount_label = new sampleLabel(taskTypeDesc_BK,10,7,20,150,3,i+1,taskCountType,11,'0xeeeeee',fontColor,3,lineColor,2,fillColor,'center',1,1) 
        var taskTypeCount_totalTaskCount_label = new sampleLabel(taskTypeDesc_BK,162,7,20,80,3,'',currentTaskType_count,11,'0xeeeeee',fontColor,3,lineColor,2,fillColor,'center',1,1) 
        var taskTypeCount_totalHoursCount_label = new sampleLabel(taskTypeDesc_BK,244,7,20,80,3,'',currentTaskType_totalHours_count + ' 小時',11,'0xeeeeee',fontColor,3,lineColor,2,fillColor,'center',1,1) 
        var percentageText = (parseFloat(currentTaskType_totalHours_count)/parseFloat(totalWT_hours))*100.0
        var taskTypeCount_percentage_label = new sampleLabel(taskTypeDesc_BK,326,7,20,80,3,'', percentageText.toFixed(1) + ' %',11,'0xeeeeee',fontColor,3,lineColor,2,fillColor,'center',1,1) 

                                    //sampleLabel(parent,x,y,boxX,inputBoxW,fontPadding,labelText,inputText,inputFontSize,labelTextColor,inputTextColor,boxRound,strokeColor,strokeWidth,fillColor,alignMode,scale,blockAlpha){ // UI 標籤 + 輸入

        
            taskTypeCount_label.disabled = true     
            taskTypeCount_totalTaskCount_label.disabled = true     
            taskTypeCount_totalHoursCount_label.disabled = true     
            taskTypeCount_percentage_label.disabled = true     

    };
        
    
};

function callMonthReport_DetailByUser(parent,monthData,user){
    console.log('callMonthReport_DetailByUser',user)
    var weekDaysList = ["日","一","二","三","四","五","六"]

       console.log(monthData) 
    var startDayMs = parseInt(monthData[1][0])
    var endDayMs = parseInt(monthData[1][1])
    var currentMonth = parseInt(monthData[1][2])
    var startDay_string = monthData[1][3]
    var endDay_string = monthData[1][4]
    var userDayOffList = monthData[8]
    var workingDayList = monthData[3]
    
    var currentMonth_daysCount = (endDayMs - startDayMs) / 86400000 +1
    
   // console.log(currentMonth_daysCount,userDayOffList,workingDayList)
    
    

    var daysWT_longBK_Container = new PIXI.Container()
        daysWT_longBK_Container.name = 'daysWT_longBK_Container';
        parent.addChild(daysWT_longBK_Container)
        daysWT_longBK_Container.x = 0
        daysWT_longBK_Container.y = 60
    
    var dayInfoBK_width = 34
    
    /*
    var daysWT_long_leftBK =  new PIXI.Graphics(); //asset 主視窗
        daysWT_long_leftBK.lineStyle(0.5, '0x333333', 0);
        daysWT_long_leftBK.beginFill('0x333333',1);
        daysWT_long_leftBK.drawRoundedRect(0,0, 280, 25*10+10 , 0);
        daysWT_long_leftBK.endFill();
        daysWT_long_leftBK.name = 'daysWT_long_leftBK'
        daysWT_long_leftBK.x = 5
        daysWT_long_leftBK.y = 10
       // daysWT_longBK_Container.addChild(daysWT_long_leftBK) 
    */  
    var dayInfo_left_BK = new sampleLabel(parent,5 , 30 ,1,dayInfoBK_width*15+10,1,'',user +' ' + currentMonth + ' 月份 任務工時清單' ,15,'0xeeeeee','0xeeeeee',3,'0x333333',1,'0x333333','left',1,1) 
    var dayInfo_right_BK = new sampleLabel(parent,5 + dayInfoBK_width*15+10, 30 ,1,dayInfoBK_width*16,1,'','',15,'0xaaaaaa','0xaaaaaa',3,'0x333333',1,'0x333333','left',1,1) 
        dayInfo_right_BK.name = 'dayInfo_right_BK'
            dayInfo_left_BK.disabled = true     
            dayInfo_right_BK.disabled = true    
        
        
    var daysWT_long_rightBK =  new PIXI.Graphics(); //asset 主視窗
        daysWT_long_rightBK.lineStyle(0.5, '0x333333', 0);
        daysWT_long_rightBK.beginFill('0x333333',1);
        daysWT_long_rightBK.drawRoundedRect(0,0, dayInfoBK_width*31+10, 600 , 0);
        daysWT_long_rightBK.endFill();
        daysWT_long_rightBK.name = 'daysWT_long_rightBK'
        daysWT_long_rightBK.x = 10
        daysWT_long_rightBK.y = 10
        daysWT_longBK_Container.addChild(daysWT_long_rightBK)
            
    /*
              if( convertWeekDay( currentDayMs ) == 0 | convertWeekDay( currentDayMs ) == 6){
                                    var dayWorkingTimeBlockAlpha = 0  
                                        
                                }else{
                                     var dayWorkingTimeBlockAlpha = 0.7
                                }
    */
    
    for(var i = 0; i<currentMonth_daysCount ; i++){
      // .includes(2)
        var currentDayMs = startDayMs + i * 86400000
        if( workingDayList.includes(currentDayMs) == true ){
            var bkFillColor = '0x555555'
        }else{
            var bkFillColor = '0xaa5555'

        };
        var currentWeekDay = convertWeekDay( currentDayMs )
        var currentWeekDayString =weekDaysList[currentWeekDay]

      //  console.log( workingDayList.includes(currentDayMs) )   
        var dayInfoBK = new sampleLabel(daysWT_long_rightBK,5 + i*dayInfoBK_width ,30 ,1,dayInfoBK_width,1,'',i+1,11,'0xeeeeee','0xeeeeee',3,'0xeeeeee',1,bkFillColor,'center',1,1) 
        var weekDayInfoBK = new sampleLabel(daysWT_long_rightBK,5 + i*dayInfoBK_width ,5 ,1,dayInfoBK_width,1,'',currentWeekDayString,9,'0xeeeeee','0xeeeeee',3,'0x333333',1,'0x333333','center',1,1) 

            dayInfoBK.disabled = true     
            weekDayInfoBK.disabled = true    
        
        
        
        
        
    }; 
    

    
   
    var monthWT_allDB = monthData[6]
    var selUserTask_DB =  monthWT_allDB.filter(function(item, index, array){
                                       // return item[0] == taskTypeSortIndex
                                        return item[1] == user

                                        });   
    
    
    var taskCount = selUserTask_DB.length

    
    
   //console.log(selUserTask_DB) 
    
    
    
    selUserTask_DB.sort(function(a, b){return a[9][0][0]-b[9][0][0]});

    //console.log(sortedSelUserTaskDB) 
    
    var perBlockHeight = 30
    var barOutlineHeight = 10 * perBlockHeight
    var bk_width = 1050
    var maxUserCount = 10 
    
    /*
    var selTypeTask_detialBK =  new PIXI.Graphics(); //asset 主視窗
        selTypeTask_detialBK.lineStyle(0.5, '0xaaccff', 0);
        selTypeTask_detialBK.beginFill('0xaaccff',0);
        selTypeTask_detialBK.drawRoundedRect(0,0, bk_width, taskCount*perBlockHeight , 1);
        selTypeTask_detialBK.endFill();
        selTypeTask_detialBK.name = 'selTypeTask_detialBK'
        selTypeTask_detialBK.x = 5
        selTypeTask_detialBK.y = 70
        parent.addChild(selTypeTask_detialBK)
            
    
    var selTypeTask_detialBK_mask =  new PIXI.Graphics(); //asset 主視窗
        selTypeTask_detialBK_mask.lineStyle(0.5, '0xaaccff', 0);
        selTypeTask_detialBK_mask.beginFill('0xaaccff',1);
        selTypeTask_detialBK_mask.drawRoundedRect(0,0, bk_width, maxUserCount*perBlockHeight , 1);
        selTypeTask_detialBK_mask.endFill();
        selTypeTask_detialBK_mask.name = 'selTypeTask_detialBK_mask'
        selTypeTask_detialBK_mask.x = 5
        selTypeTask_detialBK_mask.y = 70
        parent.addChild(selTypeTask_detialBK_mask)
        selTypeTask_detialBK.mask =  selTypeTask_detialBK_mask
        
    if(taskCount > maxUserCount){
       // var rollBarHeight =  ( parseFloat(maxViewTaskTypeCount)/taskTypeCount)  * barOutlineHeight
       // var rollBarMaxHeight = barOutlineHeight
        
        var rollBarHeight =   barOutlineHeight 
        var rollBarMaxHeight = taskCount * perBlockHeight 

    }else{
        var rollBarHeight =   barOutlineHeight 
        var rollBarMaxHeight = barOutlineHeight
    };
    
    var rollBar = new buildRollBarVertical_signalWin(parent,selTypeTask_detialBK,daysApp,bk_width +10,70,20,rollBarHeight,rollBarMaxHeight,1)
    */
    
    
    for(var i = 0 ; i<taskCount; i++){

        if(i%2 == 0){
            var  blockFillColor = '0x333333'
        }else{
            var  blockFillColor = '0x555555'

        }
        
        
        var taskUser = selUserTask_DB[i][1]  
        var taskType = selUserTask_DB[i][4]  
        var taskName = selUserTask_DB[i][3]  
        var taskHours = selUserTask_DB[i][12]  
        var taskProjName = selUserTask_DB[i][14]  
        var userDayOffList = selUserTask_DB[i][10]  
        var userDayOff_ID_List = selUserTask_DB[i][15]  
        var userDayOff_totalTime_List = selUserTask_DB[i][16]  
        var userTaskDB = selUserTask_DB[i][9]  
        //console.log(userDayOffList)
        /*
        var taskDetial_Desc_BK =  new PIXI.Graphics(); //asset 主視窗
            taskDetial_Desc_BK.lineStyle(0.5, '0xaaccff', 0);
            taskDetial_Desc_BK.beginFill(blockFillColor,1);
            taskDetial_Desc_BK.drawRoundedRect(0,0, bk_width-2,perBlockHeight-2 , 2);
            taskDetial_Desc_BK.endFill();
            taskDetial_Desc_BK.name = 'taskDetial_Desc_BK'
            taskDetial_Desc_BK.x = 1
            taskDetial_Desc_BK.y = i*perBlockHeight+1
            selTypeTask_detialBK.addChild(taskDetial_Desc_BK)


        var taskDetial_sn_label = new sampleLabel(taskDetial_Desc_BK,0,7,5,60,3,'',i+1,11,'0xcccccc','0xcccccc',3,blockFillColor,2,blockFillColor,'left',1,1) 
        var taskDetial_user_label = new sampleLabel(taskDetial_Desc_BK,30,7,5,60,3,'',taskUser,11,'0xcccccc','0xffffaa',3,blockFillColor,2,blockFillColor,'center',1,1) 
        var taskDetial_projName_label = new sampleLabel(taskDetial_Desc_BK,100,7,5,150,3,'',taskProjName,11,'0xcccccc','0x88ccff',3,blockFillColor,2,blockFillColor,'left',1,1) 

        
        var taskDetial_taskType_label = new sampleLabel(taskDetial_Desc_BK,250,7,5,120,3,'',taskType,11,'0xcccccc','0xcccccc',3,blockFillColor,2,blockFillColor,'left',1,1) 
        var taskDetial_Name_label = new sampleLabel(taskDetial_Desc_BK,380,7,5,300,3,'',taskName,11,'0xcccccc','0xcccccc',3,blockFillColor,2,blockFillColor,'left',1,1) 
        var taskDetial_Hours_label = new sampleLabel(taskDetial_Desc_BK,700,7,5,100,3,'',taskHours+' 小時',11,'0xcccccc','0xccffcc',3,blockFillColor,2,blockFillColor,'left',1,1) 

            taskDetial_sn_label.disabled = true     
            taskDetial_user_label.disabled = true     
            taskDetial_projName_label.disabled = true     
            taskDetial_taskType_label.disabled = true     
            taskDetial_Name_label.disabled = true     
            taskDetial_Hours_label.disabled = true     
       */
   //     console.log(selUserTask_DB[i])
       // console.log(userTaskDB)

      //  var taskDayOff_hours = 0

        var taskStartTime_MS = selUserTask_DB[i][9][0][0]
        var taskEndTime_MS = selUserTask_DB[i][9][selUserTask_DB[i][9].length-1][0]//[0][selUserTask_DB[i][9][0].length-1][0]
        var taskTotalTime = selUserTask_DB[i][12]
        
        taskStartDayOclock = (Math.floor(taskStartTime_MS/86400000))*86400000 - 8 * 60*60*1000 
        
        taskLastDayOclock = (Math.floor(taskEndTime_MS/86400000))*86400000 - 8 * 60*60*1000 
        
      //  console.log(convertMSB(taskStartTime_MS),convertMSB(taskEndTime_MS))
        workDayMS_count = taskStartDayOclock
        
      //  console.log(taskName,taskStartTime_MS,taskEndTime_MS,taskTotalTime,convertMSB( taskStartTime_MS ) ,convertMSB( taskEndTime_MS ) )

        var start_PosX = ((taskStartDayOclock-startDayMs)/86400000 )*dayInfoBK_width
        
        var taskInfoText = '【'+taskProjName +'】' + '  /  '+ taskName+  '  /  '+ taskTotalTime + ' 小時'
        var taskWT_Info_BK = new sampleLabel(daysWT_long_rightBK, 5  ,90+ i*(dayInfoBK_width-5) + 25*i  - dayInfoBK_width,1,dayInfoBK_width*31,1,taskInfoText,'',11,'0xeeeeee','0xeeeeee',3,'0x555555',1,'0x77aaaa','center',1,0.1)    
        
                           // new sampleLabel(taskDetial_Desc_BK,250,7,5,120,3,'',taskType,11,'0xcccccc','0xcccccc',3,blockFillColor,2,blockFillColor,'left',1,1) 
        
            taskWT_Info_BK.disabled = true     

        //console.log(start_PosX)
        for(var j = 0; j<currentMonth_daysCount ; j++){
            
            var currentSelDayOclock = j* 86400000 + taskStartDayOclock //startDayMs
           // console.log(convertMSB(currentSelDayOclock))    
            
            if( workingDayList.includes(currentSelDayOclock) == true ){
                var bkFillColor = '0x88aa88'
            }else{
                var bkFillColor = '0x333333'

            };

         //   console.log(convertMSB(currentSelDayOclock),convertMSB(taskStartDayOclock),convertMSB(taskLastDayOclock))
            
            if(   currentSelDayOclock >= taskStartDayOclock & currentSelDayOclock <= taskLastDayOclock ) {
             //  console.log(convertMSB(currentSelDayOclock),convertMSB(taskStartDayOclock),convertMSB(taskLastDayOclock))

                 var taskWT_markBK = new sampleLabel(daysWT_long_rightBK,start_PosX+ 5 + dayInfoBK_width*j  ,82+ i*(dayInfoBK_width-5) + 25*i ,1,dayInfoBK_width,1,'','',11,'0xeeeeee','0xeeeeee',3,'0x555555',1,bkFillColor,'center',1,1)    
             
            //    var taskWT_markBK = new sampleLabel(daysWT_long_rightBK,10 ,200 + 25*i ,1,dayInfoBK_width,1,'','',11,'0xeeeeee','0xeeeeee',3,'0x555555',1,bkFillColor,'center',1,1)    

                 
                 
                    taskWT_markBK.disabled = true     

                 var currentSelDay_9_clock = currentSelDayOclock + 9*60*60*1000 
                 var currentSelDay_18_clock =  currentSelDayOclock +18*60*60*1000 
                 var checkDayOffCountMS = currentSelDay_9_clock
                 var posCount = 0
                 while (checkDayOffCountMS < currentSelDay_18_clock ) {
                     
                  //   console.log(checkDayOffCountMS)
                   //  var dayMarkPosX = ((checkDayOffCountMS - currentSelDay_9_clock) / 30*60*1000) *  (dayInfoBK_width/16)
                      var dayMarkPosX = posCount  *  (dayInfoBK_width/16)
                    if( userDayOffList.includes(checkDayOffCountMS) == true ){
                      //  taskDayOff_hours += 0.5
                        if( checkDayOffCountMS == currentSelDay_9_clock + 3*60*60*1000  ){
                          //  console.log('aaaaaaaaaaaaaaaaaaaaa')
                             var dayOff_markBK = new sampleLabel(daysWT_long_rightBK,start_PosX+ 5 + dayInfoBK_width*j + dayMarkPosX  ,82+ i*(dayInfoBK_width-5) + 25*i ,1,(dayInfoBK_width/16)*4,1,'','',11,'0xeeeeee','0xeeeeee',3,'0xffaaaa',1,'0xffaaaa','center',1,1)    

                                        dayOff_markBK.disabled = true     

                        }else{
                             var dayOff_markBK = new sampleLabel(daysWT_long_rightBK,start_PosX+ 5 + dayInfoBK_width*j + dayMarkPosX  ,82+ i*(dayInfoBK_width-5) + 25*i ,1,dayInfoBK_width/16,1,'','',11,'0xeeeeee','0xeeeeee',3,'0xffaaaa',1,'0xffaaaa','center',1,1)    
                                         dayOff_markBK.disabled = true     

   
                        };
                        dayOff_markBK.currentMS = checkDayOffCountMS
                        dayOff_markBK.disabled = true    

                        dayOff_markBK.interactive = true;
                        dayOff_markBK.buttonMode = true;
                        dayOff_markBK.on('pointerover', function(){this.alpha=0.5;this.tint = '0x00ffff'})
                                         .on('pointerout', function(){this.alpha=1;this.tint = '0xffffff'})
                                         .on('mousedown',function(){this.alpha=0.5;
                                                 //  console.log(this.taskType)   
                                                         var currentMS = this.currentMS
                                                         var currentDayOffDB =  userDayOff_ID_List.filter(function(item, index, array){
                                                           // return item[0] == taskTypeSortIndex
                                                            return item[0] == currentMS

                                                            });
                                                                    
                                                            var currentDayOffID = currentDayOffDB[0][1]
                                                            console.log(userDayOff_totalTime_List)            
                                                                    
                                                            var dayOffTotalHoursDB = userDayOff_totalTime_List.filter(function(item, index, array){
                                                           // return item[0] == taskTypeSortIndex
                                                                return item[0] == currentDayOffID

                                                            });
                                                                    
                                                            var selDayOffHours = dayOffTotalHoursDB[0][1]
                                                            
                                                            var currentDayOffDB_byID =  userDayOff_ID_List.filter(function(item, index, array){
                                                           // return item[0] == taskTypeSortIndex
                                                                return item[1] == currentDayOffID

                                                            });
                                                            
                                                            var selDayOff_startMS =  currentDayOffDB_byID[0][0]
                                                            var selDayOff_string = convertMSB(selDayOff_startMS)
                                                            
                                                            console.log(selDayOff_string,selDayOffHours)            
        
                                                            // console.log(this.currentMS,currentDayOffDB,currentDayOffID,userDayOff_totalTime_List,currentDayOffTotalHours)            
       
                                                                    
                                                            var dayInfo_right_BK = parent.getChildByName("dayInfo_right_BK")
                                                            console.log(dayInfo_right_BK)
                                                                    
                                                                    dayInfo_right_BK.text = selDayOff_string +' '+' 休假 '+ selDayOffHours +' 小時'
                                           // var dayOff_InfoBK = new sampleLabel(this,300 , -30 ,1,200,1,'',' 休假時數 ' ,15,'0xeeeeee','0xeeeeee',3,'0x333333',1,'0x333333','left',1,1) 



                                                          })
                                         .on('pointerup', function(){this.alpha=1;this.tint = '0xffffff'})

                        

                    }else{
                      //  var bkFillColor = '0x333333'

                    };
                     posCount += 1
                     checkDayOffCountMS  += 30*60*1000 
                 
                };

            };  
            
        };
        

        
        /*
        while (workDayMS_count <= taskLastDayOclock ) {

            var taskWT_markBK = new sampleLabel(daysWT_long_rightBK, 5 + dayInfoBK_width ,30 i*dayInfoBK_width,1,dayInfoBK_width,1,'','',11,'0xeeeeee','0xeeeeee',3,'0xeeeeee',1,bkFillColor,'center',1,1) 

            
            
        };
        */

              //  selDay_Oclock= (math.floor(WHT/86400000))*86400000 - 8 * 60*60*1000  #工時起始當日0時

        
        //var taskName_sn_label = new sampleLabel(daysWT_long_leftBK,2,60 + i*25,1,27,1,'',i+1,10,'0xcccccc','0xcccccc',3,'0x333333',2,bkFillColor,'center',1,1) 

       // var taskName_label = new sampleLabel(daysWT_long_leftBK,30 ,60 + i*25 ,1,250,3,'',taskName,10,'0xeeeeee','0xeeeeee',3,'0xeeeeee',1,bkFillColor,'center',1,1) 



    };
    
    
    
};

function callMonthReport_DetailByMode(parent,monthData,mode){
    console.log('callMonthReport_DetailByMode',mode)

   // console.log(monthData)
    
    
    
    
    
    
      // monthDetail_mainWin.scale.set(scale)
     //   parent.removeChild(parent.getChildByName("monthWT_selType_detial_Container"))

   // var monthWT_selType_detial_Container = new PIXI.Container()
   //     monthWT_selType_detial_Container.name = 'monthWT_selType_detial_Container';
  //      parent.addChild(monthWT_selType_detial_Container)   

    
    
    
    var monthWT_allDB = monthData[6]
    var selTypeTask_DB =  monthWT_allDB.filter(function(item, index, array){
                                       // return item[0] == taskTypeSortIndex
                                        return item[5] == mode

                                        });   
   selTypeTask_DB.sort(function(a, b){return a[13]-b[13]});
       //.sort(function(a, b) {
        // //oolean false == 0; true == 1
              //              return a[13] > b[13];
            //            });
    
                             
    var taskCount = selTypeTask_DB.length
    var perBlockHeight = 30
    var barOutlineHeight = 20 * perBlockHeight
    var bk_width = 1050
    var selTypeTask_detialBK =  new PIXI.Graphics(); //asset 主視窗
        selTypeTask_detialBK.lineStyle(0.5, '0xaaccff', 0);
        selTypeTask_detialBK.beginFill('0xaaccff',0);
        selTypeTask_detialBK.drawRoundedRect(0,0, bk_width, taskCount*perBlockHeight , 1);
        selTypeTask_detialBK.endFill();
        selTypeTask_detialBK.name = 'selTypeTask_detialBK'
        selTypeTask_detialBK.x = 5
        selTypeTask_detialBK.y = 70
        parent.addChild(selTypeTask_detialBK)
            
    
    var selTypeTask_detialBK_mask =  new PIXI.Graphics(); //asset 主視窗
        selTypeTask_detialBK_mask.lineStyle(0.5, '0xaaccff', 0);
        selTypeTask_detialBK_mask.beginFill('0xaaccff',1);
        selTypeTask_detialBK_mask.drawRoundedRect(0,0, bk_width, 20*perBlockHeight , 1);
        selTypeTask_detialBK_mask.endFill();
        selTypeTask_detialBK_mask.name = 'selTypeTask_detialBK_mask'
        selTypeTask_detialBK_mask.x = 5
        selTypeTask_detialBK_mask.y = 70
        parent.addChild(selTypeTask_detialBK_mask)
        selTypeTask_detialBK.mask =  selTypeTask_detialBK_mask
    console.log(selTypeTask_DB)
    
    if(taskCount > 20){
       // var rollBarHeight =  ( parseFloat(maxViewTaskTypeCount)/taskTypeCount)  * barOutlineHeight
       // var rollBarMaxHeight = barOutlineHeight
        
        var rollBarHeight =   barOutlineHeight 
        var rollBarMaxHeight = taskCount * perBlockHeight 

    }else{
        var rollBarHeight =   barOutlineHeight 
        var rollBarMaxHeight = barOutlineHeight
    };
    
    var rollBar = new buildRollBarVertical_signalWin(parent,selTypeTask_detialBK,daysApp,bk_width +10,70,20,rollBarHeight,rollBarMaxHeight,1)
    
    
    
    
    for(var i = 0 ; i<taskCount; i++){
        
        if(i%2 == 0){
            var  blockFillColor = '0x333333'
        }else{
            var  blockFillColor = '0x555555'

        }
        
        var taskDetial_Desc_BK =  new PIXI.Graphics(); //asset 主視窗
            taskDetial_Desc_BK.lineStyle(0.5, '0xaaccff', 0);
            taskDetial_Desc_BK.beginFill(blockFillColor,1);
            taskDetial_Desc_BK.drawRoundedRect(0,0, bk_width-2,perBlockHeight-2 , 2);
            taskDetial_Desc_BK.endFill();
            taskDetial_Desc_BK.name = 'taskDetial_Desc_BK'
            taskDetial_Desc_BK.x = 1
            taskDetial_Desc_BK.y = i*perBlockHeight+1
            selTypeTask_detialBK.addChild(taskDetial_Desc_BK)
        var taskUser = selTypeTask_DB[i][1]  
        var taskType = selTypeTask_DB[i][4]  
        var taskName = selTypeTask_DB[i][3]  
        var taskHours = selTypeTask_DB[i][12]  
        var taskProjName = selTypeTask_DB[i][14]  

        var taskDetial_sn_label = new sampleLabel(taskDetial_Desc_BK,0,7,5,60,3,'',i+1,11,'0xcccccc','0xcccccc',3,blockFillColor,2,blockFillColor,'left',1,1) 
        var taskDetial_user_label = new sampleLabel(taskDetial_Desc_BK,30,7,5,60,3,'',taskUser,11,'0xcccccc','0xffffaa',3,blockFillColor,2,blockFillColor,'center',1,1) 
        var taskDetial_projName_label = new sampleLabel(taskDetial_Desc_BK,100,7,5,150,3,'',taskProjName,11,'0xcccccc','0x88ccff',3,blockFillColor,2,blockFillColor,'left',1,1) 

        
        var taskDetial_taskType_label = new sampleLabel(taskDetial_Desc_BK,250,7,5,120,3,'',taskType,11,'0xcccccc','0xcccccc',3,blockFillColor,2,blockFillColor,'left',1,1) 
        var taskDetial_Name_label = new sampleLabel(taskDetial_Desc_BK,380,7,5,300,3,'',taskName,11,'0xcccccc','0xcccccc',3,blockFillColor,2,blockFillColor,'left',1,1) 
        var taskDetial_Hours_label = new sampleLabel(taskDetial_Desc_BK,700,7,5,100,3,'',taskHours+' 小時',11,'0xcccccc','0xccffcc',3,blockFillColor,2,blockFillColor,'left',1,1) 

            taskDetial_sn_label.disabled = true     
            taskDetial_user_label.disabled = true     
            taskDetial_projName_label.disabled = true     
            taskDetial_taskType_label.disabled = true     
            taskDetial_Name_label.disabled = true     
            taskDetial_Hours_label.disabled = true     

        
    };
    
    
};







function drawReportData(parent,x,y,w,h,monthText,WT_data){
    var taskTypeWT_Data = WT_data[7]
    var totalWT_hours = WT_data[9] -WT_data[10]
    var taskType_list = JSON.parse(window.localStorage.getItem("taskType_list"));
   // console.log(taskType_list)
   // var taskType_list = ['專案管理','專案執行','創新技術研究','內部工作優化','市場需求','維運','其他']
    var deptTotalUsers =   (WT_data[1][5]).length
    var monthWT_days = (WT_data[3]).length
    
    var reportMonth_Label = new inputBoxWithLabelC(parent,x-5,55,5,130,1,'',monthText+' 月',11,'0xffffff','0xcccccc',4,'0x6c868a',0.5,'0x6c868a','center') //工作類型選擇
        reportMonth_Label.disabled = true
        reportMonth_Label.interactive = true;
        reportMonth_Label.buttonMode = true;
        reportMonth_Label.on('pointerover', function(){this.alpha=0.5;})
                         .on('pointerout', function(){this.alpha=1;})
                         .on('mousedown',function(){this.alpha=0.5;
                                    console.log(this.text)   
                                     
                                  //  var reportListWinBlock = this.parent deptSelectBtn
                                    var reportListWinBlock  = uiBaseContainer.getChildByName("reportList_container")
                                    var deptSelectBtn  = reportListWinBlock.getChildByName("deptSelectBtn")

                                    console.log(deptSelectBtn.text)
                             //  console.log(winBlock)               
                                    callMonthReportData(monthText,WT_data,deptSelectBtn.text)               
                                                    
                                                    
                                          })
                         .on('pointerup', function(){this.alpha=1;})


    
    
    
    
    
    
    
    
    
    var reportMonth_Block =  new PIXI.Graphics(); //asset 主視窗
        reportMonth_Block.lineStyle(0.5, '0xaaccff', 0.5);
        reportMonth_Block.beginFill('0x111111',0.9);
        reportMonth_Block.drawRoundedRect(0,0, w,h , 2);
        reportMonth_Block.endFill();
        reportMonth_Block.name = 'reportMonth_Block'
        reportMonth_Block.x = x
        reportMonth_Block.y = y
        parent.addChild(reportMonth_Block)
    
   // var taskType_percentage_text = String(taskType_percentage.toFixed(1)) + '%'
    var monthTotal_WT_hours_label = new sampleLabel(reportMonth_Block,10,510,5,80,1,'',WT_data[9]+'  小時',11,'0xaaffaa','0xaaffaa',1,'0xaaaaaa',1,'0x222822','right',1,1) //工作類型選擇
        monthTotal_WT_hours_label.disabled = true
    var monthTotal_dayOff_hours_label = new sampleLabel(reportMonth_Block,10,530,5,80,1,'',WT_data[10]+'  小時',11,'0xffaaaa','0xaaeeff',1,'0xaaeeff',1,'0x222822','right',1,1) //工作類型選擇
        monthTotal_dayOff_hours_label.disabled = true
    
    var total_percentage_value = 0.0
    
    for(var i =0 ; i<taskType_list.length;i++){
        
        
        var selTaskTypeData = taskTypeWT_Data.filter(function(item, index, array){
                                          return item[0] == taskType_list[i]

                                     });    
        var selTaskType_WT_hours = selTaskTypeData[0][1]
                    
       // console.log(selTaskType_WT_hours)
        if( selTaskType_WT_hours < 0.1){
            var BK_height = 1
        }else{
            var BK_height = (parseFloat(selTaskType_WT_hours)/parseFloat(totalWT_hours)) * h
  
        }
        if( taskType_list[i] == '專案管理'){
            var bk_line_color = '0xffaaaa'    
            var bk_fill_color = '0xffaaaa'    
        }else if(taskType_list[i] == '專案執行'){
            var bk_line_color =  '0xaaffaa'    
            var bk_fill_color =  '0xaaffaa'    
        }else if(taskType_list[i] == '創新技術研究'){
            var bk_line_color =  '0x55aaff'    
            var bk_fill_color =  '0x55aaff'      
        }else if(taskType_list[i] == '內部工作優化'){
            var bk_line_color = '0xffff55'    
            var bk_fill_color = '0xffff55'    
        }else if(taskType_list[i] == '市場需求'){
            var bk_line_color = '0x74f1fe'    
            var bk_fill_color = '0x222222'    
        }else if(taskType_list[i] == '維運'){
            var bk_line_color = '0xfe95f2'    
            var bk_fill_color = '0x222222'    
        }else if(taskType_list[i] == '其他'){
            var bk_line_color = '0xeeeeee'    
            var bk_fill_color = '0xeeeeee'    
        };    
        
       
        var taskTypeLength_BK =  new PIXI.Graphics(); //asset 主視窗
            taskTypeLength_BK.lineStyle(1, bk_line_color, 1);
            taskTypeLength_BK.beginFill(bk_fill_color,1);
            taskTypeLength_BK.drawRoundedRect(0,0,16,BK_height , 1);
            taskTypeLength_BK.endFill();
            taskTypeLength_BK.name = 'taskTypeLength_BK__' + taskType_list[i]
            taskTypeLength_BK.pivot.y = taskTypeLength_BK.height
            taskTypeLength_BK.x = i*18 +4//(w-5/taskType_list.length)
            taskTypeLength_BK.y = h//y
            reportMonth_Block.addChild(taskTypeLength_BK)    
       // .toFixed()
        /*
        if(taskType_list[i] == '其他'){
            var taskType_percentage =  (parseFloat(selTaskType_WT_hours)/parseFloat(totalWT_hours))*100
   
        }else{
            var taskType_percentage =  (parseFloat(selTaskType_WT_hours)/parseFloat(totalWT_hours))*100
   
        }; 
        */
        var taskType_percentage =  (parseFloat(selTaskType_WT_hours)/parseFloat(totalWT_hours))*100

            total_percentage_value = total_percentage_value + taskType_percentage
        
        if( taskType_percentage <= 0.5){
            var taskType_percentage_text = '0'
        }else{
            var taskType_percentage_text = String(taskType_percentage.toFixed(1)) + '%'
            var taskType_percentage_BK = new sampleLabel(reportMonth_Block,i*18+1 ,500-BK_height-20,5,80,1,taskType_percentage_text,'',8,'0xffffff','0xffffff',1,'0xffffff',1,bk_fill_color,'left',0.6,0) //工作類型選擇


            
        };
        

       // console.log(taskType_percentage_text)


    };
    if( total_percentage_value > 99.9){
       // total_percentage_value = 100.0
        var percentage_value_color = '0xeeeeee'
    }else{
        
        var percentage_value_color = '0xffaaaa'

    }
    var total_percentage_Label = new sampleLabel(reportMonth_Block,10,550,5,80,1,'',total_percentage_value.toFixed(1) +'  %',11,percentage_value_color,percentage_value_color,1,percentage_value_color,1,'0x222822','right',1,1) //工作類型選擇
        total_percentage_Label.disabled = true 
    
    
        
    var total_deptPersons_Label = new sampleLabel(reportMonth_Block,10,570,5,80,1,'',String(deptTotalUsers) +' 人',11,'0xcccccc','0xcccccc',1,percentage_value_color,1,'0x222822','right',1,1) //工作類型選擇
        total_deptPersons_Label.disabled = true 
    
    var total_monthWT_days_Label = new sampleLabel(reportMonth_Block,10,590,5,80,1,'',String(monthWT_days)+' 日',11,'0xcccccc','0xcccccc',1,percentage_value_color,1,'0x222822','right',1,1) //工作類型選擇
        total_monthWT_days_Label.disabled = true  
    
    
    
};



function drawReportData_by_totalHours(parent,x,y,w,h,monthText,WT_data){
    
    var taskTypeWT_Data = WT_data[7]
    var totalWT_hours = WT_data[9] -WT_data[10]
    var taskType_list = JSON.parse(window.localStorage.getItem("taskType_list"));
   // var taskTypeCountDB = JSON.parse(window.localStorage.getItem("taskTypeCountDB"));

    
   // var taskType_list = ['專案管理','專案執行','創新技術研究','內部工作優化','市場需求','維運','其他']
    var deptTotalUsers =   (WT_data[1][5]).length
    var monthWT_days = (WT_data[3]).length

    
    var reportMonth_Label = new inputBoxWithLabelC(parent,x-5,55,5,130,1,'',monthText+' 月',11,'0xffffff','0xcccccc',4,'0x6c868a',0.5,'0x6c868a','center') //工作類型選擇
        reportMonth_Label.disabled = true
    
    var reportMonth_Block =  new PIXI.Graphics(); //asset 主視窗
        reportMonth_Block.lineStyle(0.5, '0xaaccff', 0.5);
        reportMonth_Block.beginFill('0x111111',0.8);
        reportMonth_Block.drawRoundedRect(0,0, w,h , 2);
        reportMonth_Block.endFill();
        reportMonth_Block.name = 'reportMonth_Block'
        reportMonth_Block.x = x
        reportMonth_Block.y = y
        parent.addChild(reportMonth_Block)
    
   // var taskType_percentage_text = String(taskType_percentage.toFixed(1)) + '%'
    var monthTotal_WT_hours_label = new sampleLabel(reportMonth_Block,10,h+20,5,80,1,'',WT_data[9]+'  小時',11,'0xaaffaa','0xaaffaa',1,'0xaaaaaa',1,'0x222822','right',1,1) //工作類型選擇
        monthTotal_WT_hours_label.disabled = true
    var monthTotal_dayOff_hours_label = new sampleLabel(reportMonth_Block,10,h+40,5,80,1,'',WT_data[10]+'  小時',11,'0xffaaaa','0xaaeeff',1,'0xaaeeff',1,'0x222822','right',1,1) //工作類型選擇
        monthTotal_dayOff_hours_label.disabled = true
    
    
    var maxUserNumber = 20
    
    var maxTotalHours = maxUserNumber * 24 * 8
    
    var total_percentage_value = 0.0
    
           // var blockHight = 400

   // var hourUnitHours = Math.ceil(maxTotalHours /
    var hourUnitLine_number = Math.floor(maxTotalHours / 200)

    var hourUnit_height = h/hourUnitLine_number

    for(var i = 0 ; i< (hourUnitLine_number-1) ; i++){


        var unitLine = new PIXI.Graphics();
            unitLine.lineStyle(0.5, '0x999999', 1);
            unitLine.beginFill('0xffffff', 0);
            unitLine.moveTo(0,0);

            unitLine.lineTo(w,0);
            unitLine.alpha = 1;
            unitLine.y = (i+1) *hourUnit_height// + 80

            reportMonth_Block.addChild(unitLine) 

    };
    
    
    
    
    
    for(var i =0 ; i<taskType_list.length;i++){
        
        
        var selTaskTypeData = taskTypeWT_Data.filter(function(item, index, array){
                                          return item[0] == taskType_list[i]

                                     });    
        var selTaskType_WT_hours = selTaskTypeData[0][1]
                    
       // console.log(selTaskType_WT_hours)
        if( selTaskType_WT_hours < 0.1){
            var BK_height = 1
        }else{
            var BK_height = (parseFloat(selTaskType_WT_hours)/parseFloat(maxTotalHours)) * h
  
        }
        if( taskType_list[i] == '專案管理'){
            var bk_line_color = '0xffaaaa'    
            var bk_fill_color = '0xffaaaa'    
        }else if(taskType_list[i] == '專案執行'){
            var bk_line_color =  '0xaaffaa'    
            var bk_fill_color =  '0xaaffaa'    
        }else if(taskType_list[i] == '創新技術研究'){
            var bk_line_color =  '0x55aaff'    
            var bk_fill_color =  '0x55aaff'      
        }else if(taskType_list[i] == '內部工作優化'){
            var bk_line_color = '0xffff55'    
            var bk_fill_color = '0xffff55'    
        }else if(taskType_list[i] == '市場需求'){
            var bk_line_color = '0x74f1fe'    
            var bk_fill_color = '0x222222'    
        }else if(taskType_list[i] == '維運'){
            var bk_line_color = '0xfe95f2'    
            var bk_fill_color = '0x222222'    
        }else if(taskType_list[i] == '其他'){
            var bk_line_color = '0xeeeeee'    
            var bk_fill_color = '0xeeeeee'    
        };    
        
       
        var taskTypeLength_BK =  new PIXI.Graphics(); //asset 主視窗
            taskTypeLength_BK.lineStyle(1, bk_line_color, 1);
            taskTypeLength_BK.beginFill(bk_fill_color,1);
            taskTypeLength_BK.drawRoundedRect(0,0,16,BK_height , 1);
            taskTypeLength_BK.endFill();
            taskTypeLength_BK.name = 'taskTypeLength_BK__' + taskType_list[i]
            taskTypeLength_BK.pivot.y = taskTypeLength_BK.height
            taskTypeLength_BK.x = i*18 +4//(w-5/taskType_list.length)
            taskTypeLength_BK.y = h//y
            reportMonth_Block.addChild(taskTypeLength_BK)    
        
        var taskType_percentage =  (parseFloat(selTaskType_WT_hours)/parseFloat(totalWT_hours))*100

            total_percentage_value = total_percentage_value + taskType_percentage
    
        if( taskType_percentage <= 0.5){
            var taskType_percentage_text = ' 0%'
        }else{
            var taskType_percentage_text = ' '+String(taskType_percentage.toFixed(1)) + '%'


            
        };
        
        
       // console.lo(taskType_percentage_text)

        var taskType_hoursNum_text = new sampleLabel(reportMonth_Block,0,470 + i*25,5,80,1,'',selTaskType_WT_hours+' 小時',11,bk_line_color,bk_line_color,1,'0x222822',1,'0x222822','right',1,1) //工作類型選擇
        taskType_hoursNum_text.disabled = true 
        
        var taskType_percentage_text = new sampleLabel(reportMonth_Block,85,470 + i*25,1,5,1,taskType_percentage_text,taskType_percentage_text,9,'0xaaaaaa','0xaaaaaa',1,'0x222822',1,'0x222822','right',1,0) //工作類型選擇
        taskType_percentage_text.disabled = true 
        
        
    };
    
        

    if( total_percentage_value > 99.9){
       // total_percentage_value = 100.0
        var percentage_value_color = '0xeeeeee'
    }else{
        
        var percentage_value_color = '0xffaaaa'

    }
    var total_percentage_Label = new sampleLabel(reportMonth_Block,10,650,5,80,1,'',total_percentage_value.toFixed(1) +'  %',11,percentage_value_color,percentage_value_color,1,percentage_value_color,1,'0x222822','right',1,1) //工作類型選擇
        total_percentage_Label.disabled = true 
    
    
        
    var total_deptPersons_Label = new sampleLabel(reportMonth_Block,10,670,5,80,1,'',String(deptTotalUsers) +' 人',11,'0xcccccc','0xcccccc',1,percentage_value_color,1,'0x222822','right',1,1) //工作類型選擇
        total_deptPersons_Label.disabled = true 
    
    var total_monthWT_days_Label = new sampleLabel(reportMonth_Block,10,690,5,80,1,'',String(monthWT_days)+' 日',11,'0xcccccc','0xcccccc',1,percentage_value_color,1,'0x222822','right',1,1) //工作類型選擇
        total_monthWT_days_Label.disabled = true  
    
    
    
};



function setButtonOptionSelectedAndSearch(btn,optionList,winText,x,y,alignMode,inputBoxW){
    btn.disabled = true
    btn.interactive = true;
    btn.buttonMode = true;

    //btn.name = 'selProjStateOptionBtnGrp'

    btn.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                               console.log(optionList)
                                     
                                                   var winW = 180
                                                   var winH = optionList.length *25 + 70

                                                  var optionSelWin = new moveAbleWinBlockC(uiBaseContainer,x,y,winW,winH,winText,20,20,15,'0xffffff','opitionSelect_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x3e5752',daysApp,screenW,screenH,true)    
 
                                                //  var selWinH = projectTypeList.length *30
                                                 var openDaysSelWin  = new buildOptionSelectWinA(optionSelWin,0,0,winW,winH,'專案狀態',optionList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,btn,true,false) 
                                                 
                                                 
                                                console.log(this.children[3])
                                                
                                                 
                                                  if(alignMode == 'center'){
       
                                                        this.children[3].pivot.x = -(inputBoxW/2)  + this.children[3].width/2

                                                    }else if(alignMode == 'left'){

                                                        this.children[3].pivot.x =  -5  

                                                    }else if(alignMode == 'right'){

                                                        this.children[3].pivot.x = -inputBoxW + this.children[3].width +2  //inputBoxW 
                                                    };   

                                                
                                            

                                              })
    
}

