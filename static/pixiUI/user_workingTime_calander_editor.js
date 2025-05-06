//
//
//
// 實際工時編輯
//
//
//




//編輯實際工時

function buildRealWorkingTimeWin(x,y,scale,autoClose,defaultUser,taskID,taskName,projID,startDayMs){
    
    console.log(defaultUser,taskID,startDayMs)

    // 設定初始化user 休假日

    if(defaultUser == "未登入"){
        var selUserDayOffDB = []
        
        window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));

    }else{
        
        var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));

    }
 
    
    // 清除 workingTimeSelectWin_container 視窗
    uiBaseContainer.removeChild(uiBaseContainer.getChildByName("workingTimeSelectWin_container"))

    
    
    
    
    
    var daysSelectWin = new moveAbleUserWorkingTimeWin(uiBaseContainer,x,y,900,820,'',20,20,14,'0xffffff','workingTimeSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
                                 // moveAbleWinBlockC(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn
        daysSelectWin.name = 'workingTimeSelectWin_container'
        daysSelectWin.scale.set(scale)
    //var daysSelectWinBlock = 

  //  console.log( new Date(2021, 2, 0).getDate())
   
    // buildDaysWinBlock(parent,x,y,w,h,selYear,selMonth,selDay,selWeekDay,blockScale){
    //var dayDate = new Date()

    var dayDate = new Date(startDayMs)
  //  console.log('111111111111111111111',new Date(startDayMs))
    
    
    
    var selYear = dayDate.getFullYear()
    var selMonth = dayDate.getMonth()
    var selDay = dayDate.getDate()

    daysSelectWin.selYear = selYear
    daysSelectWin.selMonth = selMonth
    daysSelectWin.selDay = selDay

    
   // console.log(selYear,selMonth,selDay)
    var openDaysSelectBlock = new buildRealWorkingDayCalander(daysSelectWin,20,100,selYear,selMonth+1,selDay,4,1,autoClose,defaultUser,taskID,taskName,projID)
    
    var pageUpCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 25,
        padding:'2px',
        width: '25px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x333333', rounded: 5, stroke: {color: '0x333333', width: 1}},
            focused: {fill: '0x333333', rounded: 5, stroke: {color: '0x333333', width: 1}},
            disabled: {fill: '0x333333', rounded: 5}
        }
    })
    
    pageUpCtrBtnBox.text = '＜'
    pageUpCtrBtnBox.x = 260
    
    pageUpCtrBtnBox.children[3].pivot.x = 3
    pageUpCtrBtnBox.children[3].pivot.y = 2

    pageUpCtrBtnBox.y = 30
    pageUpCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageUpCtrBtnBox)   
    
    var pageDownCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 25,
        padding:'2px',
        width: '25px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x333333', rounded: 5, stroke: {color: '0x333333', width: 1}},
            focused: {fill: '0x333333', rounded: 5, stroke: {color: '0x333333', width: 1}},
            disabled: {fill: '0x333333', rounded: 5}
        }
    })
    
    pageDownCtrBtnBox.text = '＞'
    pageDownCtrBtnBox.x = 300
    
    pageDownCtrBtnBox.children[3].pivot.x = 1
    pageDownCtrBtnBox.children[3].pivot.y = 2

    pageDownCtrBtnBox.y = 30
    pageDownCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageDownCtrBtnBox)   
    
    
    pageUpCtrBtnBox.interactive = true;
    pageUpCtrBtnBox.buttonMode = true;
    pageUpCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
   
            .on('mousedown',function(){this.alpha=0.5;
                                   //     selectDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                   //     parent.selYear = selYear;
                                   //     parent.selMonth = selMonth;
                                   //     parent.selDay = this.dayText
                                            //var newSelYear =  daysSelectWin.selYear -1
                                         //   daysSelectWin.selYear = newSelYear
                                            if(daysSelectWin.selMonth == 0){
                                                var newSelMonth =  11
                                                daysSelectWin.selMonth = 11
                                                var newSelYear =  daysSelectWin.selYear -1
                                                daysSelectWin.selYear = newSelYear
                                            }else{
                                                var newSelMonth =  daysSelectWin.selMonth -1
                                                daysSelectWin.selMonth = newSelMonth
                                            }
                                            var openDaysSelectBlock = new buildRealWorkingDayCalander(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,autoClose,defaultUser,taskID,taskName,projID)
                                            
                                      })
                    .on('pointerup', function(){this.alpha=1;})
    
    pageDownCtrBtnBox.interactive = true;
    pageDownCtrBtnBox.buttonMode = true;
    pageDownCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                     .on('pointerout', function(){this.alpha=1;})
                     .on('mousedown',function(){this.alpha=0.5;
                                            if(daysSelectWin.selMonth == 11){
                                                var newSelMonth =  0
                                                daysSelectWin.selMonth = 0
                                                var newSelYear =  daysSelectWin.selYear + 1
                                                daysSelectWin.selYear = newSelYear
                                            }else{
                                                var newSelMonth =  daysSelectWin.selMonth +1
                                                daysSelectWin.selMonth = newSelMonth
                                            }
                                            var openDaysSelectBlock = new buildRealWorkingDayCalander(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,autoClose,defaultUser,taskID,taskName,projID)

                                      })
                     .on('pointerup', function(){this.alpha=1;})
    
    
   


    //console.log(openDaysSelectBlock) 
    openDaysSelectBlock.interactive = true;

      //{請假資訊欄位
    
   
    var fontStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xaaaaaa', // gradient
       // stroke: '0xffffff',
       // strokeThickness: 0,
        //dropShadow: false,
       // dropShadowColor: '#333333',
       // dropShadowBlur: 6,
      //  dropShadowAngle: Math.PI / 6,
       // dropShadowDistance: 3,
       // wordWrap: true,
      //  wordWrapWidth: 440,
        });
    
    
 
    var workingDayInfoWinBG =  new PIXI.Graphics();
        workingDayInfoWinBG.lineStyle(1, '0xffffff', 1);
        workingDayInfoWinBG.beginFill('0x222222',0.5);
        workingDayInfoWinBG.drawRoundedRect(0,0, 220,490, 2);
        workingDayInfoWinBG.endFill();
        workingDayInfoWinBG.name = 'workingDayInfoWinBG'
        workingDayInfoWinBG.x = 670
        workingDayInfoWinBG.y = 60
        workingDayInfoWinBG.alpha = 1
        daysSelectWin.addChild(workingDayInfoWinBG)
    
    //task ID
    var showTaskID = new PIXI.Text('Task ID :', fontStyle);
        showTaskID.x = 10
        showTaskID.y = 60
        showTaskID.name = 'showTaskID'
        workingDayInfoWinBG.addChild(showTaskID)
   
    //task Name
    var showTaskName = new PIXI.Text('任務名稱 :', fontStyle);
        showTaskName.x = 10
        showTaskName.y = 90
        showTaskName.name = 'showTaskName'
        workingDayInfoWinBG.addChild(showTaskName)
    
    var showWokingTimeID = new PIXI.Text('工時 ID :', fontStyle);
        showWokingTimeID.x = 10
        showWokingTimeID.y = 160
        showWokingTimeID.name = 'showWokingTimeID'
        workingDayInfoWinBG.addChild(showWokingTimeID)
    
    /*
    var showWorkingTimeDesc = new PIXI.Text('休假原因', fontStyle);
        showWorkingTimeDesc.x = 10
        showWorkingTimeDesc.y = 190
        showWorkingTimeDesc.name = 'showWorkingTimeDesc'

        workingDayInfoWinBG.addChild(showWorkingTimeDesc)
    */
    
    var showWorkingTimeStart = new PIXI.Text('起始時間 :', fontStyle);
        showWorkingTimeStart.x = 10
        showWorkingTimeStart.y = 220
        showWorkingTimeStart.name = 'showWorkingTimeStart'

        workingDayInfoWinBG.addChild(showWorkingTimeStart)

    var showWorkingTimeEnd = new PIXI.Text('結束時間 :', fontStyle);
        showWorkingTimeEnd.x = 10
        showWorkingTimeEnd.y = 250
        showWorkingTimeEnd.name = 'showWorkingTimeEnd'

        workingDayInfoWinBG.addChild(showWorkingTimeEnd)
  
    var showTotalWorkingTime = new PIXI.Text('總工作時數 :', fontStyle);
        showTotalWorkingTime.x = 10
        showTotalWorkingTime.y = 280
        showTotalWorkingTime.name = 'showTotalWorkingTime'
        workingDayInfoWinBG.addChild(showTotalWorkingTime) 
    
    var delWorkingTimeBtn = new buildBtnScaleG(workingDayInfoWinBG,90,420,110,25,6,'Noto Sans TC','300','刪除工時','0xffffff',16,1,'0x333333',1,0,'danger') //'0x67e4aa'

        delWorkingTimeBtn.name = 'delWorkingTimeBtn'
        delWorkingTimeBtn.alpha = 0
    
        delWorkingTimeBtn.interactive = true;   
        delWorkingTimeBtn.buttonMode = true;
    
        

        
        
        delWorkingTimeBtn.on('mousedown',function(){//delWorkingTimeBtn.alpha = 0;
                                                 // workingDayInfoWinBG.alpha = 0
                                                 
            


                                                    var daysSelectWin = uiBaseContainer.getChildByName("workingTimeSelectWin_container")

                                                    var workingDayInfoWinBG = daysSelectWin.getChildByName("workingDayInfoWinBG")

                                                    var delWorkingTimeBtn = workingDayInfoWinBG.getChildByName("delWorkingTimeBtn")

                                                    var showTaskID = workingDayInfoWinBG.getChildByName("showTaskID")

                                                    var showTaskName = workingDayInfoWinBG.getChildByName("showTaskName")

                                                    var showWokingTimeID = workingDayInfoWinBG.getChildByName("showWokingTimeID")

                                                    //var showWorkingTimeStart = workingDayInfoWinBG.getChildByName("showWorkingTimeStart")

                                                   // var showWorkingTimeEnd = workingDayInfoWinBG.getChildByName("showWorkingTimeEnd")

                                                   // var showTotalWorkingTime = workingDayInfoWinBG.getChildByName("showTotalWorkingTime")

                                                   // console.log(showTaskID.text,showWokingTimeID.text)
                                                    console.log(this.taskID,this.workingTimeID)

   
                                                    
                                                    
                                                    $.post("/delUserWorkingTime", {  
                                                            'taskID':this.taskID,
                                                            'workingTimeID':this.workingTimeID,
                                                            'projID':this.projID,
                                                            'taskName':this.taskName,
                                                            'user':this.user,





                                                            }, function(data) {
                                                                console.log(data)

                                                                var daysSelectWin = uiBaseContainer.getChildByName('workingTimeSelectWin_container')
                                                                var selUserName = data[1][3]
                                                                var selTaskID = data[1][0]
                                                                var selTaskName =  data[1][4]
                                                                var selProjID = data[1][1]
                                                       // console.log(daysSelectWin)
                                                       // console.log(daysSelectWin.selYear)
                                                       // console.log(daysSelectWin.selMonth)
                                                       // console.log(daysSelectWin.selDay)
                                                        
                                                       // var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));

                                                                 var openDaysSelectBlock = new buildRealWorkingDayCalander(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose,selUserName,selTaskID,selTaskName,selProjID)
                                                        
                                                        
                                                               // var errMsg = data[0]

                                                         //   var selUserData = data[2]

                                                               // errorMsgInputBox.text = "刪除休假完成"

                                                                //重置休假表
                                                          //  console.log(defaultUser)
                                                        
                                                                /*
                                                                setTimeout(function(){
                                                                    getSelUserData(defaultUser)
                                                                }, 500);     



                                                               // console.log('刪除休假完成',defaultUser)


                                                                setTimeout(function(){
                                                                       var daysSelectWin = uiBaseContainer.getChildByName('workingTimeSelectWin_container')
                                                                        var openDaysSelectBlock = new buildRealWorkingDayCalander(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose,defaultUser)


                                                                }, 1000);       

                                                                */
                                                           // window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));


                                                    });    

                                                            
                                                      
                                                 
                                                 
                                                 
                                                 
                                             })
    
    
        
    
    
    
    
    
        //清除選擇按鈕
    
    var  clearWorkingDayBookingBtn= new buildBtnScaleF(daysSelectWin,550,30,110,25,6,'Noto Sans TC','300','清除選擇','0xffffff',16,1,'0x333333',1,0,'secondary outline') //'0x67e4aa'

    
        clearWorkingDayBookingBtn.on('mousedown',function(){
                                                       console.log('清除選擇')
                                                        var daysSelectWin = uiBaseContainer.getChildByName('workingTimeSelectWin_container')
                                                       // console.log(daysSelectWin)
                                                       // console.log(daysSelectWin.selYear)
                                                       // console.log(daysSelectWin.selMonth)
                                                       // console.log(daysSelectWin.selDay)
                                                        
                                                       // var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));

                                                        var openDaysSelectBlock = new buildRealWorkingDayCalander(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose,defaultUser,taskID,taskName,projID)
   // var openDaysSelectBlock = new buildRealWorkingDayCalander(daysSelectWin,20,100,daysSelectWin.selYear,selMonth+1,daysSelectWin.selDay,4,1,autoClose,defaultUser,taskID,taskName,projID)

                                                      // var openDaysSelWin = new buildSelVacDayTimeWinA(550, 150,1,false)    
                                                        //var openDaysSelectBlock = new buildRealWorkingDayCalander(daysSelectWin,20,100,selYear,selMonth+1,selDay,4,1,autoClose,defaultUser,taskID,taskName,projID)

                                           
                                                        })
   
    

    return openDaysSelectBlock
    
    
    
    
    
};





//讀取任務資料、人員排程資料建立任務實際工時
function buildRealWorkingDayCalander(parent,x,y,selYear,selMonth,selDay,selWeekDay,blockScale,autoClose,defaultUser,taskID,taskName,projID){
   // console.log(selUserDayOffDB)
    // get task data
    // get task real working data
    // get user working data
    
    
    $.post("/getSelUserData", {  
                    'userName':defaultUser,

    }, function(data) {

                    var errMsg = data[0]

                    var selUserData = data[2]


                    var allReadyRangeDays = data[4]
                    var allWorkingRangeDays = data[5]
                    var allFinishRangeDays = data[6]
                    var allSubmitRangeDays = data[7]
                    var selUserDayOffDB =  data[8]



                    window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));

                    $.post("/getUserTaskWorkTime", {  
                                    'username':defaultUser,

                    }, function(data) {
                                    console.log(data)

                                    var errMsg = data[0]
                                    var userName = data[1]
                                    var selUserWrokingTime = data[2]

                                   // var userName = data[2]



                                    window.localStorage.setItem("selUserWrokingTime", JSON.stringify(selUserWrokingTime));

                                    var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));
                                    var selUserWrokingTime = JSON.parse(window.localStorage.getItem("selUserWrokingTime"));  
                                    //console.log(selUserWrokingTime)
                                    buildWorkingCalanderTable(parent,x,y,selYear,selMonth,selDay,selWeekDay,blockScale,autoClose,defaultUser,taskID,taskName,selUserDayOffDB,projID,selUserWrokingTime)

                    }); 



    });  

    
    /*
    getSelUserData(defaultUser)// get user dayoff data
    getUserTaskWorkTime(defaultUser)  // get user working time data
    

    setTimeout(function(){

        var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));
        var selUserWrokingTime = JSON.parse(window.localStorage.getItem("selUserWrokingTime"));  
        console.log(selUserWrokingTime)
        buildWorkingCalanderTable(parent,x,y,selYear,selMonth,selDay,selWeekDay,blockScale,autoClose,defaultUser,taskID,taskName,selUserDayOffDB,projID,selUserWrokingTime)


    }, 1000); 
        */
   // console.log('buildRealWorkingDayCalander',defaultUser,taskID)

};


//建立任務實際工時

function buildWorkingCalanderTable(parent,x,y,selYear,selMonth,selDay,selWeekDay,blockScale,autoClose,defaultUser,taskID,taskName,selUserDayOffDB,projID,selUserWrokingTime){
        
    
    var holidaysMsList = JSON.parse(window.localStorage.getItem("holidaysMsList"));



    parent.removeChild(parent.getChildByName("leftDaysCalanderWin"))
    
    
   // var userData = JSON.parse(window.localStorage.getItem("userData"));

  //  var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));

   // var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));

    var fontStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xffffff', // gradient

        });
    
    var bigFontStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xffffff', // gradient
        stroke: '0xffffff',
        strokeThickness: 0,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
    var bigFontDarkStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0x888888', // gradient
        stroke: '0x888888',
        strokeThickness: 0,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        }); 
    
    
    
    var month = new Array();
          month[0] = "January";
          month[1] = "February";
          month[2] = "March";
          month[3] = "April";
          month[4] = "May";
          month[5] = "June";
          month[6] = "July";
          month[7] = "August";
          month[8] = "September";
          month[9] = "October";
          month[10] = "November";
          month[11] = "December";
    
    var currentMonthString = month[selMonth-1];

    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    
    

    var currentWeekDayString = weekday[selWeekDay];
  
    var dayBlockWH = 40
    
        //console.log(currentMonthString,currentWeekDayString)
  
    
    //左邊月曆視窗
    var leftDaysCalanderWin =  new PIXI.Graphics();
        leftDaysCalanderWin.lineStyle(1, '0xffffff', 1);
        leftDaysCalanderWin.beginFill('0x222222',1);
        leftDaysCalanderWin.drawRoundedRect(0,0, 320,330, 2);
        leftDaysCalanderWin.endFill();
        leftDaysCalanderWin.name = 'leftDaysCalanderWin'
        leftDaysCalanderWin.x = 10
        leftDaysCalanderWin.y = 60
        leftDaysCalanderWin.alpha = 1
        parent.addChild(leftDaysCalanderWin)
        leftDaysCalanderWin.scale.set(blockScale)
    
     
    var rightDaysCalanderWin =  new PIXI.Graphics();
        rightDaysCalanderWin.lineStyle(1, '0xffffff', 1);
        rightDaysCalanderWin.beginFill('0x222222',1);
        rightDaysCalanderWin.drawRoundedRect(0,0, 320,330, 2);
        rightDaysCalanderWin.endFill();
        rightDaysCalanderWin.name = 'rightDaysCalanderWin'
        rightDaysCalanderWin.x = 340
        rightDaysCalanderWin.y = 60
        rightDaysCalanderWin.alpha = 1
        parent.addChild(rightDaysCalanderWin)
        rightDaysCalanderWin.scale.set(blockScale)
    
       
    
    //右邊月曆視窗

    var leftDaysBlock = new PIXI.Graphics(); 
        leftDaysBlock.lineStyle(1, '0x444444', 1);
        leftDaysBlock.beginFill('0x4444aa',1);
        leftDaysBlock.drawRoundedRect(0,0, dayBlockWH*7,dayBlockWH*6, 1);
        leftDaysBlock.endFill();
        leftDaysBlock.name = 'leftDaysBlock'
        leftDaysBlock.x = 20
        leftDaysBlock.y =60
        leftDaysBlock.alpha = 1
        leftDaysCalanderWin.addChild(leftDaysBlock)

    
    
        
    var rightDaysBlock = new PIXI.Graphics(); 
        rightDaysBlock.lineStyle(1, '0x444444', 1);
        rightDaysBlock.beginFill('0x4444aa',1);
        rightDaysBlock.drawRoundedRect(0,0, dayBlockWH*7,dayBlockWH*6, 1);
        rightDaysBlock.endFill();
        rightDaysBlock.name = 'rightDaysBlock'
        rightDaysBlock.x = 20
        rightDaysBlock.y =60
        rightDaysBlock.alpha = 1
        rightDaysCalanderWin.addChild(rightDaysBlock)
 
    
   
    
    
    
    
    //var todayTextLabel = new PIXI.Text((selYear + " 年 " + selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
    
    //左邊月份標籤
    var leftMonthLabel = new PIXI.Text((selYear + " 年 " + selMonth + " 月 " ), bigFontStyle);

        leftMonthLabel.x = 20
        leftMonthLabel.y = 10
        leftDaysCalanderWin.addChild(leftMonthLabel)
    
        leftDaysBlock.monthInfo = selYear + " 年 " + selMonth + " 月 "
    
    if(selMonth == 12){var toSelYear = selYear +1 }else{
        var toSelYear = selYear  
    }
   // console.log(toSelYear)
    
    
    if(selMonth == 11){
        var toSelMonth = 12
        
    }else{
        
       var toSelMonth = (selMonth+1)%12
 
    }
    
    //右邊月份標籤

    var rightMonthLabel = new PIXI.Text((toSelYear + " 年 " + toSelMonth + " 月 " ), bigFontStyle);

        rightMonthLabel.x = 20
        rightMonthLabel.y = 10
        rightDaysCalanderWin.addChild(rightMonthLabel)
    
        rightDaysBlock.monthInfo = toSelYear + " 年 " + toSelMonth + " 月 "

        // 今天選擇月日

    
    
    
        //左邊月曆周一至周日標籤
    var leftWeekDaysLabel = new PIXI.Text("日        一        二         三        四         五        六", bigFontStyle);
        leftWeekDaysLabel.x = 35
        leftWeekDaysLabel.y = 40
        leftDaysCalanderWin.addChild(leftWeekDaysLabel)
        //右邊月曆周一至周日標籤
    var rightWeekDaysLabel = new PIXI.Text("日        一        二         三        四         五        六", bigFontStyle);
        rightWeekDaysLabel.x = 35
        rightWeekDaysLabel.y = 40
        rightDaysCalanderWin.addChild(rightWeekDaysLabel)

    
    
        

       // daysSelectWin.selYear = selYear
   // daysSelectWin.selMonth = selMonth
   // daysSelectWin.selDay = selDay

    
    
    
    //當月資訊
    var currentMonthDaysCount = new Date(selYear, selMonth, 0).getDate()
    var getSelectFirstDay = new Date(selYear,selMonth -1, 1).getDay() 
    
    //下月資訊
    var nextMonthDaysCount = new Date(toSelYear, toSelMonth, 0).getDate()
    var getNextMonthFirstDay = new Date(toSelYear,toSelMonth -1, 1).getDay() 
    
    
    
    
    
    
    
    
    
    
    
    
    
    //任務ID 任務名稱 人員ID
    

    
    
    var taskName_inputBox = new inputBoxWithLabelB(parent,30,610,150,250,3,'任務名稱 :',taskName,12,'0x111111','0xaaaaaa',2,'0x111111',0.1,'0x555555','center')
      //  taskID_inputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        taskName_inputBox.disabled = true
        taskName_inputBox.name = 'taskName_inputBox' 
    
      
    
    
    
    var taskID_inputBox = new inputBoxWithLabelB(parent,470,610,80,90,3,'任務ID :',taskID,12,'0x111111','0xaaaaaa',2,'0x111111',0.1,'0x555555','center')
      //  taskID_inputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        taskID_inputBox.disabled = true
        taskID_inputBox.name = 'taskID_inputBox' 
      
    
    
    
    
    
    
    
    
    
    //起始日期標籤

    
    var selectFromDayLabel = new PIXI.TextInput({
    input: {
        fontSize: 15,
        fontFamily: 'Noto Sans TC',
        padding:'2px',
        width: '630px',
        color:'0x222222',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    }) 
    selectFromDayLabel.text = '任務起始日期時間:                                                                                           點                        分 '
    selectFromDayLabel.x = 30
   // selectFromDayLabel.children[3].pivot.x = -selectFromDayLabel.children[3].width/2 + 100

   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectFromDayLabel.y = 635
    selectFromDayLabel.disabled = true
    
    
    parent.addChild(selectFromDayLabel)  
    
       //結束日期標籤
    var selectEndDayLabel = new PIXI.TextInput({
    input: {
        fontSize: 15,
        fontFamily: 'Noto Sans TC',

        padding:'2px',
        width: '630px',
        color:'0x222222',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
    selectEndDayLabel.text = '任務結束日期時間:                                                                                           點                        分 '
    selectEndDayLabel.x = 30
   // selectFromDayLabel.children[3].pivot.x = -selectFromDayLabel.children[3].width/2 + 100

   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectEndDayLabel.y = 670
    selectEndDayLabel.disabled = true
    
    
    parent.addChild(selectEndDayLabel)   

    //起始日期輸入
    var selectFromDayInputBox = new PIXI.TextInput({
    input: {
        fontSize: 15,
        fontFamily: 'Noto Sans TC',

        padding:'2px',
        width: '200px',
        color:'0xaaaaaa',
    }, 
     box: {
            default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
            focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
            disabled: {fill: '0x555555', rounded: 5}
        }
    })
    selectFromDayInputBox.text = '起始日期'
    selectFromDayInputBox.x = 180
    selectFromDayInputBox.children[3].pivot.x = -selectFromDayInputBox.children[3].width/2

   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectFromDayInputBox.y = 635
    selectFromDayInputBox.disabled = true
    //結束日期標籤

    var selectEndDayInputBox = new PIXI.TextInput({
        input: {
            fontSize: 15,
            fontFamily: 'Noto Sans TC',

            padding:'2px',
            width: '200px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        selectEndDayInputBox.text = '結束日期'
        selectEndDayInputBox.x = 180
        selectEndDayInputBox.children[3].pivot.x = -selectEndDayInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectEndDayInputBox.y = 670
        selectEndDayInputBox.disabled = true

    
    var selectStartTimeInputBox = new PIXI.TextInput({
        input: {
            fontSize: 15,
            fontFamily: 'Noto Sans TC',

            padding:'2px',
            width: '50px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        selectStartTimeInputBox.text = 9  // 內定為09:00
        selectStartTimeInputBox.x = 400
        selectStartTimeInputBox.children[3].pivot.x = -selectStartTimeInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectStartTimeInputBox.y = 635
        selectStartTimeInputBox.disabled = true

    var selectEndTimeInputBox = new PIXI.TextInput({
        input: {
            fontSize: 15,
            fontFamily: 'Noto Sans TC',

            padding:'2px',
            width: '50px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        selectEndTimeInputBox.text = 18 // 內定為18:00
        selectEndTimeInputBox.x = 400
        selectEndTimeInputBox.children[3].pivot.x = -selectEndTimeInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectEndTimeInputBox.y = 670
        selectEndTimeInputBox.disabled = true
    
    var taskWorkinDescInputBox = new PIXI.TextInput({
        input: {
            fontSize: 15,
            fontFamily: 'Noto Sans TC',

            padding:'2px',
            width: '630px',
            color:'0xcccccc',
        }, 
         box: {
                default: {fill: '0x333333', rounded: 5, stroke: {color: '0x333333', width: 1}},
                focused: {fill: '0xaaaaaa', rounded: 5, stroke: {color: '0x333333', width: 1}},
                disabled: {fill: '0x333333', rounded: 5}
            }
        })
        taskWorkinDescInputBox.text = '任務執行情況說明'
        taskWorkinDescInputBox.x = 30
        taskWorkinDescInputBox.children[3].pivot.x = -taskWorkinDescInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        taskWorkinDescInputBox.y = 710

    
    
    
    
   var taskDaysStartMinInputBox = new PIXI.TextInput({
        input: {
            fontSize: 15,
            fontFamily: 'Noto Sans TC',

            padding:'2px',
            width: '50px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0xffffff', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        taskDaysStartMinInputBox.text = 0 // 內定為 00 分
        taskDaysStartMinInputBox.x = 490
        taskDaysStartMinInputBox.children[3].pivot.x = -taskDaysStartMinInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        taskDaysStartMinInputBox.y = 635
        taskDaysStartMinInputBox.disabled = true 
        parent.addChild(taskDaysStartMinInputBox)   

    
    var taskDaysEndMinsInputBox = new PIXI.TextInput({
        input: {
            fontSize: 15,
            fontFamily: 'Noto Sans TC',

            padding:'2px',
            width: '50px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0xffffff', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        taskDaysEndMinsInputBox.text = 0// 內定為 00 分
        taskDaysEndMinsInputBox.x = 490
        taskDaysEndMinsInputBox.children[3].pivot.x = -taskDaysEndMinsInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        taskDaysEndMinsInputBox.y = 670
        taskDaysEndMinsInputBox.disabled = true 
        parent.addChild(taskDaysEndMinsInputBox)    
    
    
    
    

   
   
   
   
   
   

    parent.addChild(selectFromDayInputBox)   

    parent.addChild(selectEndDayInputBox)   
    parent.addChild(selectStartTimeInputBox)   
    parent.addChild(selectEndTimeInputBox)   

    parent.addChild(taskWorkinDescInputBox)   


    
    
    
    //editBtnInputBox.children[3].pivot.x = editBtnInputBox.children[3].width/2 - editBtnWidth/2 -15

    
    
    
    
    if( selMonth == 1){
            var lastMonth = 12 ; var lastMonthDaysCount =  new Date(selYear, 12, 0).getDate() 
        }else{
            var lastMonth = selMonth -1;
            var lastMonthDaysCount =  new Date(selYear, lastMonth, 0).getDate() 
    };
    
    
    
    if( toSelMonth == 1){
            var lastNextMonth = 12 ; var lastNextMonthDaysCount =  new Date(selYear, 12, 0).getDate() 
        }else{
            var lastNextMonth = toSelMonth -1;
            var lastNextMonthDaysCount =  new Date(toSelYear, lastNextMonth, 0).getDate() 
    };
    
    
    
   // console.log(currentMonthDaysCount,lastMonth,lastMonthDaysCount,getSelectFirstDay)
   // var selVarDaysCount = 0
   // var selFirstDayMS = 0
   //填入所選月份日期  
    parent.selVarDaysCount = 0
    parent.selFirstDayMS = 0
    
    //console.log(parent)
    
    //左邊欄位月份日期方塊
    
    for(var i =0; i<42;i++){
        

        if(i%7 == 0 | i%7 == 6){
            
            var dayBlockColor = '0x666666'
        }else{
            
            var dayBlockColor = '0x444444'
        }
        
        var blockPosX = (i%7)*dayBlockWH
        var blockPosY =  Math.floor(i/7)*dayBlockWH
        
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            dayBlock.beginFill(dayBlockColor,1);
            dayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
            dayBlock.endFill();
           // dayBlock.name = "dayBlock"
            dayBlock.x = blockPosX
            dayBlock.y = blockPosY

       
        
            leftDaysBlock.addChild(dayBlock)
        
        

        
         
        
        if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(i-getSelectFirstDay+1, bigFontStyle);
            monthDayLabel.x = 20
            monthDayLabel.y =20
            dayBlock.dayText = i-getSelectFirstDay+1
            dayBlock.name = "dayBlockDay_" + String(i-getSelectFirstDay+1) 

            dayBlock.addChild(monthDayLabel)  
            if(i%7 == 0 | i%7 == 6){

               // var dayBlockColor = '0x888888'
            }else{


                dayBlock.interactive = true;
                dayBlock.buttonMode = true;

            }
            
        }else if(i<getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(lastMonthDaysCount-(getSelectFirstDay-i)+1, bigFontDarkStyle);
                dayBlock.dayText = lastMonthDaysCount-(getSelectFirstDay-i)+1
            //    console.log('aaaaaaaaaaaaaa',lastMonthDaysCount-(getSelectFirstDay-i)+1)
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.name = "dayBlock_outRange"

                dayBlock.addChild(monthDayLabel)  
            
        }else{
            var monthDayLabel = new PIXI.Text(i - getSelectFirstDay -currentMonthDaysCount+1, bigFontDarkStyle);
               // console.log('bbbbbbbbbbbbbbb',i - getSelectFirstDay -currentMonthDaysCount+1)

                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.dayText = i - getSelectFirstDay -currentMonthDaysCount+1
                dayBlock.name = "dayBlock_outRange"

                dayBlock.addChild(monthDayLabel)   
            
            
        }
         
        dayBlock.ms = getSelDayMs(selYear + " 年 "+ selMonth + ' 月 ' + dayBlock.dayText + ' 日 ')
        dayBlock.currentDayStr = selYear + " 年 "+ selMonth + ' 月 ' + dayBlock.dayText + ' 日 '

        
        
        if( holidaysMsList.includes(dayBlock.ms) ){
            console.log(convertMSB( dayBlock.ms )) 
            dayBlock.tint =  '0xffaaaa'
            dayBlock.interactive = false;
            dayBlock.buttonMode = false;
        
            
        };
        
        
        
        
        if(selUserDayOffDB == null){
           // console.log('無個人休假紀錄')
        }else{
            if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
               // console.log('leftDaysBlock',leftDaysBlock)
                defineSelUserDayOffBlock(leftDaysBlock,dayBlock.ms,selUserDayOffDB,getSelectFirstDay,monthDayLabel,i-getSelectFirstDay+1,blockPosX,blockPosY)
                defineSelUserWorkingTimeBlock(leftDaysBlock,dayBlock.ms,selUserWrokingTime,blockPosX,blockPosY)
            }
           // console.log('定義個人休假區塊',selUserDayOffDB)

        };
         
        //dayBlock.addChild(monthDayLabel)   
        
        dayBlock.on('pointerover', function(){})
                .on('pointerout', function(){})
                .on('mousedown',function(){//this.alpha=0.5;
                                            console.log(this.ms,this.currentDayStr)
                                            var leftDaysBlock = this.parent
                                            var workingTimeSelectWin_container = leftDaysBlock.parent.parent

                                            var rightDaysCalanderWin   = workingTimeSelectWin_container.getChildByName('rightDaysCalanderWin')      
                                            var rightDaysBlock   = rightDaysCalanderWin.getChildByName('rightDaysBlock')     
                                            
                                           /* 
                                            var fromDayBlockInMonthDB2 = leftDaysBlock.children
                                            console.log(fromDayBlockInMonthDB2)  
                                            for(var i = 0; i<fromDayBlockInMonthDB2.length;i++){
                                                
                                                    console.log(fromDayBlockInMonthDB2[i].name.slice(0,12))
                                            }
                                            */
                                           // console.log(workingTimeSelectWin_container.selVarDaysCount)
            
                                            var fromDayBlockInMonthDB = leftDaysBlock.children.filter(function(item, index, array){
                                                          return item.name.slice(0,11) == 'dayBlockDay'
                                                                                           
                                                     }); 
                                            var toDayBlockInMonthDB = rightDaysBlock.children.filter(function(item, index, array){
                                                          return item.name.slice(0,11) == 'dayBlockDay'

                                                     }); 
                                          
                     
            
                                           /* 
                                            var leftWorkingDaysBlockInMonthDB = leftDaysBlock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'workingDaysBlk_'
                                                                                                                   //  dayBlockDay_aaa
                                                     }); 
            
                                            var rightWorkingDaysBlockInMonthDB = rightDaysBlock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'workingDaysBlk_'

                                                     }); 
                                             

                                           // console.log(dayBlockInMonthDB)
            
                                            for(var j = 0; j < leftWorkingDaysBlockInMonthDB.length ; j++){
                                                                            
                                                leftWorkingDaysBlockInMonthDB[j].tint = '0xffffff'

                                            };  
            
                                            for(var j = 0; j < rightWorkingDaysBlockInMonthDB.length ; j++){
                                                                            
                                                rightWorkingDaysBlockInMonthDB[j].tint = '0xffffff'

                                            };     
                       
                                            */      
            
                                           
                                            if( workingTimeSelectWin_container.selVarDaysCount == 0){
                                              
                                                
                                                if(i%7 == 0 | i%7 == 6){
                                                    //假日
                                                    this.alpha = 1  
                                                }else{

                                                    this.alpha = 0.5      
                                                    workingTimeSelectWin_container.selVarDaysCount = 1
                                                    workingTimeSelectWin_container.selFirstDayMS = this.ms 
                                                    selectFromDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                                    selectEndDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                                }
                                                
                                                

                                            }else if(workingTimeSelectWin_container.selVarDaysCount > 0){
                                                console.log(this.ms,workingTimeSelectWin_container.selFirstDayMS)

                                               
                                                

                                                if( this.ms > workingTimeSelectWin_container.selFirstDayMS ){
                                                    
                                                    console.log('aaaaaaaaaaaaa')
                                                    
                                                    
                                                    this.alpha = 0.5      
                                                     selectEndDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                                //   var vacDays = ( this.ms -  workingTimeSelectWin_container.selFirstDayMS) /86400000
                                                        console.log(fromDayBlockInMonthDB)

                                                        for(var k = 0; k < fromDayBlockInMonthDB.length ; k++){
                                                            
                                                            
                                                            var selDayString = convertWeekDay( fromDayBlockInMonthDB[k].ms )
                                                          //  console.log(selDayString)
                                                            
                                                            if(fromDayBlockInMonthDB[k].ms > workingTimeSelectWin_container.selFirstDayMS & fromDayBlockInMonthDB[k].ms < this.ms){
                                                                
                                                                  if(selDayString == 0 | selDayString == 6){

                                                                  }else{
                                                                        fromDayBlockInMonthDB[k].alpha = 0.5  
                                                                  };  
                                                                
                                                            }else if(fromDayBlockInMonthDB[k].ms >  this.ms)  {

                                                                 fromDayBlockInMonthDB[k].alpha = 1
                                                            }

                                                            
                                                            

                                                        };


                                                       for(var k = 0; k < toDayBlockInMonthDB.length ; k++){
                                                           
                                                            var selDayString = convertWeekDay( toDayBlockInMonthDB[k].ms )
 
                                                           
                                                            //var selDayString = convertWeekDay( toDayBlockInMonthDB[k].ms )
                                                           // console.log(selDayString)
                                                            
                                                            if(toDayBlockInMonthDB[k].ms > workingTimeSelectWin_container.selFirstDayMS & toDayBlockInMonthDB[k].ms < this.ms){
                                                                  if(selDayString == 0 | selDayString == 6){

                                                                  }else{
                                                                       toDayBlockInMonthDB[k].alpha = 0.5 
                                                                  };  
                                                                

                                                               
                                                            }else if(toDayBlockInMonthDB[k].ms >  this.ms)  {

                                                                 toDayBlockInMonthDB[k].alpha = 1
                                                            }

                                                   
                                                       
                                                       
                                                       
                                                       };     

                                                    
                                                    
                                                    
                                                }else{
                                                    
                                                };
                                                   
                                                
      
                                                     
                                            };
            
                                            //console.log(workingTimeSelectWin_container.selVarDaysCount)
                                            

                                           
                                          })
                .on('pointerup', function(){})

        
        
        
    };


    
   //右邊欄位月份日期方塊
   // console.log(nextMonthDaysCount,getNextMonthFirstDay,toSelYear,toSelMonth)
    
    for(var i =0; i<42;i++){
        
        var blockPosX = (i%7)*dayBlockWH
        var blockPosY =  Math.floor(i/7)*dayBlockWH
        if(i%7 == 0 | i%7 == 6){
            
            var dayBlockColor = '0x666666'
        }else{
            
            var dayBlockColor = '0x444444'
        }
        
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            dayBlock.beginFill(dayBlockColor,1);
            dayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
            dayBlock.endFill();
           // dayBlock.name = "dayBlock"
            dayBlock.x = blockPosX
            dayBlock.y =blockPosY

        
        
            rightDaysBlock.addChild(dayBlock)
        
        //getSelectFirstDay currentMonthDaysCount selectFirstDay
        
        if(i>=getNextMonthFirstDay && i<nextMonthDaysCount+getNextMonthFirstDay){
            var monthDayLabel = new PIXI.Text(i-getNextMonthFirstDay+1, bigFontStyle);
            monthDayLabel.x = 20
            monthDayLabel.y =20
            dayBlock.dayText = i-getNextMonthFirstDay+1
            dayBlock.name = "dayBlockDay_"  + String(i-getNextMonthFirstDay+1) 

            dayBlock.addChild(monthDayLabel)  
            
            
        if(i%7 == 0 | i%7 == 6){
            
           // var dayBlockColor = '0x888888'
        }else{
            
               
            dayBlock.interactive = true;
            dayBlock.buttonMode = true;
            
        }
            
         
            
        }else if(i<getNextMonthFirstDay){
            var monthDayLabel = new PIXI.Text(lastMonthDaysCount-(getNextMonthFirstDay-i)+1, bigFontDarkStyle);
                dayBlock.dayText = lastMonthDaysCount-(getNextMonthFirstDay-i)+1
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.name = "dayBlock_outRange"

                dayBlock.addChild(monthDayLabel)  
            
        }else{
            var monthDayLabel = new PIXI.Text(i - getNextMonthFirstDay -nextMonthDaysCount+1, bigFontDarkStyle);
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.dayText = i - getNextMonthFirstDay -nextMonthDaysCount+1
                dayBlock.name = "dayBlock_outRange"

                dayBlock.addChild(monthDayLabel)   
            
            
        }

        dayBlock.ms = getSelDayMs(toSelYear + " 年 "+ toSelMonth + ' 月 ' + dayBlock.dayText + ' 日 ')
        dayBlock.currentDayStr = toSelYear + " 年 "+ toSelMonth + ' 月 ' + dayBlock.dayText + ' 日 '
        
        if(selUserDayOffDB == null){
           // console.log('無個人休假紀錄')
        }else{
            if(i>=getNextMonthFirstDay && i<nextMonthDaysCount+getNextMonthFirstDay){
               
                defineSelUserDayOffBlock(rightDaysBlock,dayBlock.ms,selUserDayOffDB,getNextMonthFirstDay,monthDayLabel,i-getNextMonthFirstDay+1,blockPosX,blockPosY)
                
                defineSelUserWorkingTimeBlock(rightDaysBlock,dayBlock.ms,selUserWrokingTime,blockPosX,blockPosY)
            }
           // console.log('定義個人休假區塊',selUserDayOffDB)

        };
        
        

    
        
            
        dayBlock.on('pointerover', function(){})
                .on('pointerout', function(){})
                .on('mousedown',function(){
                                        
                                            console.log(this.ms,this.currentDayStr)
                                            var rightDaysBlock = this.parent
                                            var workingTimeSelectWin_container = rightDaysBlock.parent.parent
                                            
                                            var leftDaysCalanderWin   = workingTimeSelectWin_container.getChildByName('leftDaysCalanderWin')      
                                            var leftDaysBlock   = leftDaysCalanderWin.getChildByName('leftDaysBlock')                                      

                                
                                     

                                            var formdaysWinBlockInMonthDB = leftDaysBlock.children.filter(function(item, index, array){
                                                          return item.name.slice(0,11) == 'dayBlockDay'

                                                     }); 
                                             
            
                                            var dayBlockInMonthDB = rightDaysBlock.children.filter(function(item, index, array){
                                                          return item.name.slice(0,11) == 'dayBlockDay'

                                                     }); 
                                            /*
                                            var leftWorkingDaysBlockInMonthDB = leftDaysBlock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'workingDaysBlk_'
                                                                                                                   //  dayBlockDay_
                                                     }); 
            
                                            var rightWorkingDaysBlockInMonthDB = rightDaysBlock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'workingDaysBlk_'

                                                     }); 

                                            
            
            
            
                                            for(var j = 0; j < leftWorkingDaysBlockInMonthDB.length ; j++){
                                                                            
                                                leftWorkingDaysBlockInMonthDB[j].tint = '0xffffff'

                                            };  
            
                                            for(var j = 0; j < rightWorkingDaysBlockInMonthDB.length ; j++){
                                                                            
                                                rightWorkingDaysBlockInMonthDB[j].tint = '0xffffff'

                                            };     
            
                                            */
            
                                             //   console.log(workingTimeSelectWin_container)
            
            
            
 
                                          //  console.log(dayBlockInMonthDB)
                                            
                                            if( workingTimeSelectWin_container.selVarDaysCount == 0){
                                                
                                               // console.log('bbbbbbbb')
                                                this.alpha = 0.5      
                                                workingTimeSelectWin_container.selVarDaysCount = 1
                                                workingTimeSelectWin_container.selFirstDayMS = this.ms 
                                                selectFromDayInputBox.text = this.currentDayStr// selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                                selectEndDayInputBox.text = this.currentDayStr//selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '

                                            }else if(workingTimeSelectWin_container.selVarDaysCount > 0){
                                               // console.log('cccccccc')

                                                console.log(this.ms,workingTimeSelectWin_container.selFirstDayMS)

                                                selectEndDayInputBox.text = this.currentDayStr//toSelYear + " 年 "+ toSelMonth + ' 月 ' + this.dayText + ' 日 '
                                                this.alpha = 0.5      

                                                    if( this.ms > workingTimeSelectWin_container.selFirstDayMS ){
                                                        var vacDays = ( this.ms -  workingTimeSelectWin_container.selFirstDayMS) /86400000
                                                            for(var k = 0; k < dayBlockInMonthDB.length ; k++){
                                                                var selDayString = convertWeekDay( dayBlockInMonthDB[k].ms )

                                                                if(dayBlockInMonthDB[k].ms > workingTimeSelectWin_container.selFirstDayMS & dayBlockInMonthDB[k].ms < this.ms){

                                                                    
                                                                    if(selDayString == 0 | selDayString == 6){

                                                                    }else{
                                                                        dayBlockInMonthDB[k].alpha = 0.5  
                                                                    };    
                                                                    

                                                                 //  dayBlockInMonthDB[k].alpha = 0.5 
                                                                }else if(dayBlockInMonthDB[k].ms >  this.ms)  {

                                                                     dayBlockInMonthDB[k].alpha = 1
                                                                }

                                                            };
                                                    
                                                           for(var k = 0; k < formdaysWinBlockInMonthDB.length ; k++){
                                                                var selDayString = convertWeekDay( formdaysWinBlockInMonthDB[k].ms )

                                                                if(formdaysWinBlockInMonthDB[k].ms > workingTimeSelectWin_container.selFirstDayMS & formdaysWinBlockInMonthDB[k].ms < this.ms){

                  
                                                                    if(selDayString == 0 | selDayString == 6){

                                                                    }else{
                                                                        formdaysWinBlockInMonthDB[k].alpha = 0.5  
                                                                    };    
                                                                    
                                                                    
                                                                    
                                                                  // formdaysWinBlockInMonthDB[k].alpha = 0.5 
                                                                }else if(formdaysWinBlockInMonthDB[k].ms >  this.ms)  {

                                                                     formdaysWinBlockInMonthDB[k].alpha = 1
                                                                };
                                                                

                                                            }
                                                    
                                                    }else{

                                                    };

            
                                            };
                                            
                                           
                                          })
                .on('pointerup', function(){})

        
        
        
    };
    
    var timeSelStartWin =  new PIXI.Graphics();
        timeSelStartWin.lineStyle(1, '0xffffff', 1);
        timeSelStartWin.beginFill('0x222222',1);
        timeSelStartWin.drawRoundedRect(0,0, 320,150, 2);
        timeSelStartWin.endFill();
        timeSelStartWin.name = 'daysWinBG'
        timeSelStartWin.x = 10
        timeSelStartWin.y = 400
        timeSelStartWin.alpha = 1
        parent.addChild(timeSelStartWin)
      //  daysWinBG.scale.set(timeSelStartWin)

    
    var timeSelEndWin =  new PIXI.Graphics();
        timeSelEndWin.lineStyle(1, '0xffffff', 1);
        timeSelEndWin.beginFill('0x222222',1);
        timeSelEndWin.drawRoundedRect(0,0, 320,150, 2);
        timeSelEndWin.endFill();
        timeSelEndWin.name = 'timeSelEndWin'
        timeSelEndWin.x = 340
        timeSelEndWin.y = 400
        timeSelEndWin.alpha = 1
        parent.addChild(timeSelEndWin)
      //  daysWinBG.scale.set(timeSelStartWin)

    
    
    
    //定義工作日方塊
    
    function defineSelUserWorkingTimeBlock(parent,selDayMs,SelUserWorkingTimeDB,dayBlockPosX,dayBlockPosY){
            var holidaysMsList = JSON.parse(window.localStorage.getItem("holidaysMsList"));

      //  console.log('defineSelUserWorkingTimeBlock',parent,selDayMs,SelUserWorkingTimeDB,dayBlockPosX,dayBlockPosY)
      //   console.log('parent',parent)

        for(var j = 0 ; j < SelUserWorkingTimeDB.length ; j++){
            
            var startTimeMs = parseInt(SelUserWorkingTimeDB[j][4])
            var startTimsDayMs = (Math.floor(startTimeMs/86400000))*86400000 - 8 * 60*60*1000
            var EndTimeMs = parseInt(SelUserWorkingTimeDB[j][5])
            var EndTimeDayOclockMs = (Math.floor(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000
            var EndTimsDayMs = (Math.ceil(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000 -1
            var crossDays = Math.ceil((EndTimsDayMs -startTimsDayMs) / 86400000)    
            var selWorkingTimeData = SelUserWorkingTimeDB[j]
            
           // console.log(crossDays, convertMSB( selDayMs ),convertMSB( startTimsDayMs )) 
           // console.log(parent)
            //定義不同天數的工時區塊
                if( crossDays == 1 & selDayMs == startTimsDayMs){
                    console.log('工時低於等於9小時',selWorkingTimeData) 

                    var dayWorkingTimeHours = (EndTimeMs - startTimeMs) / (60*60*1000)
                    var totalWorkingTime = dayWorkingTimeHours
                   // console.log(dayWorkingTimeHours,dayBlockPosX,dayBlockPosY)
                    //console.log(crossDays, convertMSB( selDayMs ),convertMSB( startTimsDayMs ),convertMSB( startTimeMs ),convertMSB( EndTimeMs ),EndTimsDayMs,dayBlockPosX,dayBlockPosY,dayWorkingTimeHours,totalWorkingTime,dayBlockWH) 
                    defineSelDayWorkingTimeBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,dayBlockPosX,dayBlockPosY,EndTimsDayMs,dayWorkingTimeHours,totalWorkingTime,dayBlockWH,selWorkingTimeData,taskID,projID)


                }else if(crossDays == 2 ){

                if( selDayMs >= startTimsDayMs & selDayMs <= EndTimsDayMs ){
                        //  console.log(crossDays,new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))

                        // console.log('請假天數二日')  
                        var totalWorkingTime =((((startTimsDayMs +  1 * 60*60*1000)  + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)) + (( EndTimeMs - ((startTimsDayMs +  1 * 60*60*1000)+(86400000) + 9 * 60*60*1000) ) / (60*60*1000))



                        if( selDayMs == startTimsDayMs ) {
                            //    console.log('請假天數二日 起始')  
                                var dayWorkingTimeHours = (  (selDayMs + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)

                              //  console.log(dayWorkingTimeHours,blockPosX,blockPosY)
                                defineSelDayWorkingTimeBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,dayBlockPosX,dayBlockPosY,EndTimsDayMs,dayWorkingTimeHours,totalWorkingTime,dayBlockWH,selWorkingTimeData,taskID,projID)


                        }else if(selDayMs == EndTimeDayOclockMs){

                               var dayWorkingTimeHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)
                                var secDayStartTimeMs = selDayMs + 9 * 60*60*1000
                               // var dayOffHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)
                               // var secDayStartTimeMs = selDayMs + 9 * 60*60*1000
                          
                                defineSelDayWorkingTimeBlock(parent,secDayStartTimeMs,selDayMs,EndTimeMs,dayBlockPosX,dayBlockPosY,EndTimsDayMs,dayWorkingTimeHours,totalWorkingTime,dayBlockWH,selWorkingTimeData,taskID,projID) 

                                };
                };
                }else if(crossDays >2){
                //  console.log('請假天數三日')   

                //(startTimsDayMs +  1 * 60*60*1000)

                var totalWorkingTime =((((startTimsDayMs +  1 * 60*60*1000) + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)) + ((EndTimeMs - ((startTimsDayMs +  1 * 60*60*1000) + 86400000*(crossDays-1) + 9 * 60*60*1000) ) / (60*60*1000)) + (9 * (crossDays-2) )


                if( selDayMs >= startTimsDayMs & selDayMs <= EndTimsDayMs ){
                        //  console.log(crossDays,new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))

                        // console.log('請假天數二日')  
                        if( selDayMs == startTimsDayMs ) {
                            //    console.log('請假天數大於二日 起始')  
                                var dayWorkingTimeHours = (  (selDayMs + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)
                                
                                defineSelDayWorkingTimeBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,dayBlockPosX,dayBlockPosY,EndTimsDayMs,dayWorkingTimeHours,totalWorkingTime,dayBlockWH,selWorkingTimeData,taskID,projID)


                        }else if( selDayMs >( startTimsDayMs + 86400000-1) & selDayMs < EndTimeDayOclockMs ){

                             //   console.log('請假天數大於二日 中間段')  

                                var dayWorkingTimeHours = 9 

                                var midDayStartTimeMs = selDayMs + 9 * 60*60*1000
                                
                                defineSelDayWorkingTimeBlock(parent,midDayStartTimeMs,selDayMs,EndTimeMs,dayBlockPosX,dayBlockPosY,EndTimsDayMs,dayWorkingTimeHours,totalWorkingTime,dayBlockWH,selWorkingTimeData,taskID,projID)


                        }else if(selDayMs == EndTimeDayOclockMs){
                               var dayWorkingTimeHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)

                            //   console.log('請假天數大於二日 結束')  
                                 //console.log(dayWorkingTimeHours,blockPosX,blockPosY)
                                var finalDayStartTimeMs = selDayMs + 9 * 60*60*1000

                               defineSelDayWorkingTimeBlock(parent,finalDayStartTimeMs,selDayMs,EndTimeMs,dayBlockPosX,dayBlockPosY,EndTimsDayMs,dayWorkingTimeHours,totalWorkingTime,dayBlockWH,selWorkingTimeData,taskID,projID)
                        };
                };                             
                };


            
            
            ////定義不同天數的工時區塊
            
        };
        
        
        

             ////定義休假日方塊B
        
        
        
    
    }; 
    
    
    
    
    
    ////定義工作日方塊

    //定義休假日方塊
    function defineSelUserDayOffBlock(parent,selDayMs,dayOffDB,selectFirstDay,textLabel,dayText,blockPosX,blockPosY){
                        //var selDayStartWorkMs = selDayMs + (9*60*60*1000)
                       // var selEndDayWorkMs = selDayMs + (18*60*60*1000)
                       // var selDayMs
                       // console.log(new Date(selDayStartWorkMs),dayText)
                       // console.log(dayOffDB)

                        for(var j = 0; j < dayOffDB.length ; j ++){
                            
                            var startTimeMs = dayOffDB[j][3]
                            var startTimsDayMs = (Math.floor(startTimeMs/86400000))*86400000 - 8 * 60*60*1000
                            var EndTimeMs = dayOffDB[j][4]
                            var EndTimeDayOclockMs = (Math.floor(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000
                            var EndTimsDayMs = (Math.ceil(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000 -1
                            var crossDays = Math.ceil((EndTimsDayMs -startTimsDayMs) / 86400000)    
                            var selDayOffData = dayOffDB[j]
                          //  console.log(crossDays,new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))
                            
                            if( crossDays == 1 & selDayMs == startTimsDayMs){
                             //   console.log('請假天數一日') 
                                
                                 var dayOffHours = (EndTimeMs - startTimeMs) / (60*60*1000)
                                 var totalDayOffHours = dayOffHours
                                       // console.log(dayOffHours,blockPosX,blockPosY)

                                        defineDayOffTimeBaseBlockC(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,selectFirstDay)
                              //  defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,selDayText)  
                                    
                                
                            }else if(crossDays == 2 ){
                                
                                    if( selDayMs >= startTimsDayMs & selDayMs <= EndTimsDayMs ){
                                            //  console.log(crossDays,new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))

                                            // console.log('請假天數二日')  
                                            var totalDayOffHours =((((startTimsDayMs +  1 * 60*60*1000)  + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)) + (( EndTimeMs - ((startTimsDayMs +  1 * 60*60*1000)+(86400000) + 9 * 60*60*1000) ) / (60*60*1000))

                                        
                                        
                                            if( selDayMs == startTimsDayMs ) {
                                                //    console.log('請假天數二日 起始')  
                                                    var dayOffHours = (  (selDayMs + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)

                                                  //  console.log(dayOffHours,blockPosX,blockPosY)
                                                    defineDayOffTimeBaseBlockC(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,selectFirstDay)


                                            }else if(selDayMs == EndTimeDayOclockMs){
                                                
                                                   var dayOffHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)
                                                    var secDayStartTimeMs = selDayMs + 9 * 60*60*1000
                          
                                                    defineDayOffTimeBaseBlockC(parent,secDayStartTimeMs,selDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,selectFirstDay)

                                                    };
                                    };
                            }else if(crossDays >2){
                                  //  console.log('請假天數三日')   
                                
                                    //(startTimsDayMs +  1 * 60*60*1000)
                                
                                    var totalDayOffHours =((((startTimsDayMs +  1 * 60*60*1000) + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)) + ((EndTimeMs - ((startTimsDayMs +  1 * 60*60*1000) + 86400000*(crossDays-1) + 9 * 60*60*1000) ) / (60*60*1000)) + (9 * (crossDays-2) )

                                
                                    if( selDayMs >= startTimsDayMs & selDayMs <= EndTimsDayMs ){
                                            //  console.log(crossDays,new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))

                                            // console.log('請假天數二日')  
                                            if( selDayMs == startTimsDayMs ) {
                                                //    console.log('請假天數大於二日 起始')  
                                                    var dayOffHours = (  (selDayMs + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)
                                                   // console.log(dayOffHours,blockPosX,blockPosY)
                                                   defineDayOffTimeBaseBlockC(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,selectFirstDay)


                                            }else if( selDayMs >( startTimsDayMs + 86400000-1) & selDayMs < EndTimeDayOclockMs ){
                                                
                                                 //   console.log('請假天數大於二日 中間段')  
                                                
                                                    var dayOffHours = 9 
                                                    
                                                    var midDayStartTimeMs = selDayMs + 9 * 60*60*1000
                                                    defineDayOffTimeBaseBlockC(parent,midDayStartTimeMs,selDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,selectFirstDay)

                                                
                                            }else if(selDayMs == EndTimeDayOclockMs){
                                                   var dayOffHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)

                                                //   console.log('請假天數大於二日 結束')  
                                                     //console.log(dayOffHours,blockPosX,blockPosY)
                                                    var finalDayStartTimeMs = selDayMs + 9 * 60*60*1000

                                                   defineDayOffTimeBaseBlockC(parent,finalDayStartTimeMs,selDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,selectFirstDay)
                                            };
                                    };                             
                            };
                    };  

      
            ////定義工作區塊
        
        };
    ////定義休假日方塊

    
    
    
    
    
    
    var workingHourList = [ 9,10,11,12,13,14,15,16,17,18 ];
    var timeHourList = [0,30];
    var hourBtnWidth = 25 ;

    
    // time Select    
    var timeFontStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xffffff', // gradient
        stroke: '0xffffff',

        });

    var selectHourInputBox = new PIXI.TextInput({
        input: {
            fontFamily: 'Noto Sans TC',
            fontSize: 14,
            padding:'2px',
            width: '200px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                focused: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                disabled: {fill: '0x222222', rounded: 5}
            }
        })
        selectHourInputBox.text = '選擇起始時間(Hour) '
        selectHourInputBox.x = 10

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectHourInputBox.y = 3
        selectHourInputBox.disabled = true
        timeSelStartWin.addChild(selectHourInputBox)   

    //選擇起始小時
    for(var i = 0; i< workingHourList.length ; i++){
        //  console.log(dataList) 


            var btnText = workingHourList[i]
            var btnPosX  =i*(hourBtnWidth+5) +15

            var btnPosY =  35

            var startTimeSelBtn = new buildBtnScaleC(timeSelStartWin,btnPosX,btnPosY,hourBtnWidth,hourBtnWidth,5,btnText,'0xffffff',14,1,'0xffffff',1,0,'0x777777')
                startTimeSelBtn.name = 'startTimeSelBtn';
                startTimeSelBtn.btnText = btnText;
                
                startTimeSelBtn.interactive = true;
                startTimeSelBtn.buttonMode = true;
      
                if(i == 0 ){startTimeSelBtn.tint = '0xff5555'}
            
                startTimeSelBtn.on('pointerover', function(){
                           // this.tint ='0xff5555'
                    
                        })
                        .on('pointerout', function(){
                           //  this.tint ='0xffffff'
                    
                             
                    
                            })
                        .on('mousedown',function(){

                            //  console.log(timeSelStartWin)  

                                

                            var allStartTimeBlockDB = timeSelStartWin.children.filter(function(item, index, array){
                                          return item.name == 'startTimeSelBtn'

                                     }); 
                                console.log(allStartTimeBlockDB)

                                for(var i = 0 ; i < allStartTimeBlockDB.length ; i++ ){
                                    
                                   allStartTimeBlockDB[i].tint = '0xffffff'
                                };
                    
                            this.tint ='0xff5555'
                            console.log(this.btnText)
                            selectStartTimeInputBox.text = this.btnText
                                
                                                  })
                        .on('pointerup', function(){
                            //    this.tint ='0xffffff'

                    
                        })
        


        };  
    
    var selectMinsInputBox = new PIXI.TextInput({
        input: {
            fontFamily: 'Noto Sans TC',
            fontSize: 14,
            padding:'2px',
            width: '200px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                focused: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                disabled: {fill: '0x222222', rounded: 5}
            }
        })
        selectMinsInputBox.text = '選擇起始時間(Mins) '
        selectMinsInputBox.x = 10

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectMinsInputBox.y = 70
        selectMinsInputBox.disabled = true

        timeSelStartWin.addChild(selectMinsInputBox)   

    //選擇起始分鐘
    

    for(var j = 0; j< timeHourList.length ; j++){
    //  console.log(dataList) 


        var btnText = timeHourList[j]
        var btnPosX  =j*(hourBtnWidth+5) +15

        var btnPosY =  100 

        var startSelMinsInputBox = new buildBtnScaleC(timeSelStartWin,btnPosX,btnPosY,hourBtnWidth,hourBtnWidth,5,btnText,'0x222222',14,1,'0xffffff',1,0,'0xccccaa')
            startSelMinsInputBox.name = 'startSelMinsInputBox';
            startSelMinsInputBox.btnText = btnText;

            startSelMinsInputBox.interactive = true;
            startSelMinsInputBox.buttonMode = true;
        
            if(j == 0 ){startSelMinsInputBox.tint = '0xff5555'}

       
            
            startSelMinsInputBox.on('pointerover', function(){
                       // this.tint ='0xff5555'

                    })
                    .on('pointerout', function(){
                       //  this.tint ='0xffffff'



                        })
                    .on('mousedown',function(){

                        //  console.log(timeSelStartWin)  



                        var allStartTimeMinBlockDB = timeSelStartWin.children.filter(function(item, index, array){
                                      return item.name == 'startSelMinsInputBox'

                                 }); 
                            console.log(allStartTimeMinBlockDB)

                            for(var i = 0 ; i < allStartTimeMinBlockDB.length ; i++ ){

                               allStartTimeMinBlockDB[i].tint = '0xffffff'
                            };

                        this.tint ='0xff5555'
                        taskDaysStartMinInputBox.text = this.btnText

                                              })
                    .on('pointerup', function(){
                        //    this.tint ='0xffffff'


                    })

        
        

    };
    
    var selectEndHourInputBox = new PIXI.TextInput({
        input: {
            fontFamily: 'Noto Sans TC',
            fontSize: 14,
            padding:'2px',
            width: '200px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                focused: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                disabled: {fill: '0x222222', rounded: 5}
            }
        })
        selectEndHourInputBox.text = '選擇結束時間(Hour) '
        selectEndHourInputBox.x = 10

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectEndHourInputBox.y = 3
        selectEndHourInputBox.disabled = true
        timeSelEndWin.addChild(selectEndHourInputBox)   
  
    var selectEndMinsInputBox = new PIXI.TextInput({
        input: {
            fontFamily: 'Noto Sans TC',
            fontSize: 14,
            padding:'2px',
            width: '200px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                focused: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                disabled: {fill: '0x222222', rounded: 5}
            }
        })
        selectEndMinsInputBox.text = '選擇結束時間(Mins) '
        selectEndMinsInputBox.x = 10
        selectEndMinsInputBox.disabled = true

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectEndMinsInputBox.y = 70

        timeSelEndWin.addChild(selectEndMinsInputBox)   
    
    
    //選擇結束小時
    for(var i = 0; i< workingHourList.length ; i++){
        //  console.log(dataList) 


            var btnText = workingHourList[i]
            var btnPosX  =i*(hourBtnWidth+5) +15

            var btnPosY =  35



            var endTimeSelBtn = new buildBtnScaleC(timeSelEndWin,btnPosX,btnPosY,hourBtnWidth,hourBtnWidth,5,btnText,'0xffffff',14,1,'0xffffff',1,0,'0x777777')
                endTimeSelBtn.name = 'endTimeSelBtn';
                endTimeSelBtn.btnText = btnText;
                
                endTimeSelBtn.interactive = true;
                endTimeSelBtn.buttonMode = true;
                if(i == ( workingHourList.length -1) ){endTimeSelBtn.tint = '0xff5555'}

                endTimeSelBtn.on('pointerover', function(){
                           // this.tint ='0xff5555'
                    
                        })
                        .on('pointerout', function(){
                           //  this.tint ='0xffffff'
                    
                             
                    
                            })
                        .on('mousedown',function(){

                            //  console.log(timeSelStartWin)  

                                

                            var allEndTimeBlockDB = timeSelEndWin.children.filter(function(item, index, array){
                                          return item.name == 'endTimeSelBtn'

                                     }); 
                                console.log(allEndTimeBlockDB)

                                for(var i = 0 ; i < allEndTimeBlockDB.length ; i++ ){
                                    
                                   allEndTimeBlockDB[i].tint = '0xffffff'
                                };
                    
                            this.tint ='0xff5555'
                            selectEndTimeInputBox.text = this.btnText
                            
                                                  })
                        .on('pointerup', function(){
                            //    this.tint ='0xffffff'

                    
                        })
        

    };  
    
    //選擇結束分鐘
    

    for(var j = 0; j< timeHourList.length ; j++){
    //  console.log(dataList) 


        var btnText = timeHourList[j]
        var btnPosX  =j*(hourBtnWidth+5) +15

        var btnPosY =  100 
                

        var endSelMinsInputBox = new buildBtnScaleC(timeSelEndWin,btnPosX,btnPosY,hourBtnWidth,hourBtnWidth,5,btnText,'0x222222',14,1,'0xffffff',1,0,'0xccccaa')
            endSelMinsInputBox.name = 'endSelMinsInputBox';
            endSelMinsInputBox.btnText = btnText;

            endSelMinsInputBox.interactive = true;
            endSelMinsInputBox.buttonMode = true;
        
            if(j == 0 ){endSelMinsInputBox.tint = '0xff5555'}

        
            endSelMinsInputBox.on('pointerover', function(){
                       // this.tint ='0xff5555'

                    })
                    .on('pointerout', function(){
                       //  this.tint ='0xffffff'



                        })
                    .on('mousedown',function(){

                        //  console.log(timeSelStartWin)  



                        var allEndTimeMinBlockDB = timeSelEndWin.children.filter(function(item, index, array){
                                      return item.name == 'endSelMinsInputBox'

                                 }); 
                            console.log(allEndTimeMinBlockDB)

                            for(var i = 0 ; i < allEndTimeMinBlockDB.length ; i++ ){

                               allEndTimeMinBlockDB[i].tint = '0xffffff'
                            };

                        this.tint ='0xff5555'
                        taskDaysEndMinsInputBox.text = this.btnText


                                              })
                    .on('pointerup', function(){
                        //    this.tint ='0xffffff'


                    })


    };
    
    
    //選擇任務優先度選項
    var taskPriorityNumList = [1,2,3]
    
    var taskPrioritySelWin=  new PIXI.Graphics();
        taskPrioritySelWin.lineStyle(1, '0x999999', 1);
        taskPrioritySelWin.beginFill('0x444444',1);
        taskPrioritySelWin.drawRoundedRect(0,0, 650,35, 2);
        taskPrioritySelWin.endFill();
        taskPrioritySelWin.name = 'taskPrioritySelWin'
        taskPrioritySelWin.x = 10
        taskPrioritySelWin.y = 560
        taskPrioritySelWin.alpha = 1
        parent.addChild(taskPrioritySelWin)
      //  daysWinBG.scale.set(timeSelStartWin)
    
   
    var taskPrioritySelLabel = new PIXI.TextInput({
        input: {
            fontFamily: 'Noto Sans TC',
            fontSize: 14,
            padding:'0px',
            width: '200px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x444444', rounded: 5, stroke: {color: '0x444444', width: 1}},
                focused: {fill: '0x444444', rounded: 5, stroke: {color: '0x444444', width: 1}},
                disabled: {fill: '0x444444', rounded: 5}
            }
        })
        taskPrioritySelLabel.text = '任務項次 / 優先度 :'
        taskPrioritySelLabel.x = 10

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        taskPrioritySelLabel.y = 3 
        taskPrioritySelLabel.disabled = true
        taskPrioritySelWin.addChild(taskPrioritySelLabel)
    
        taskPrioritySelWin.priorityID = 1
    
    
   // var taskPrioritySel_InputBox = new inputBoxWithLabelB(parent,410,570,170,60,3,'任務項次 / 優先度  :',1,12,'0x222222','0xaaaaaa',2,'0x222222',0.1,'0x555555','center')
    //    taskPrioritySel_InputBox.disabled = true
    //    taskPrioritySel_InputBox.name = 'taskPrioritySel_InputBox'
     

    
    
    

    for(var j = 0; j< taskPriorityNumList.length ; j++){
    //  console.log(dataList) 


        var btnText = taskPriorityNumList[j]
        var btnPosX  =j*(hourBtnWidth+5) +250

        var btnPosY =  5

        var prioritySelInputBox = new buildBtnScaleC(taskPrioritySelWin,btnPosX,btnPosY,hourBtnWidth,hourBtnWidth,15,btnText,'0x222222',14,1,'0xffffff',1,0,'0xaaccaa')
            prioritySelInputBox.name = 'prioritySelInputBox';
            prioritySelInputBox.btnText = btnText;

            prioritySelInputBox.interactive = true;
            prioritySelInputBox.buttonMode = true;
        
            if(j == 0 ){prioritySelInputBox.tint = '0xff5555'}

       
            
            prioritySelInputBox.on('pointerover', function(){
                       // this.tint ='0xff5555'

                    })
                    .on('pointerout', function(){
                       //  this.tint ='0xffffff'



                        })
                    .on('mousedown',function(){

                         // console.log(taskPrioritySelWin)  
                       // var daysSelectWin = uiBaseContainer.getChildByName("workingTimeSelectWin_container")
                       // var taskPrioritySelWin = daysSelectWin.getChildByName('taskPrioritySelWin')

                        var allpriorityBtnBlockDB = taskPrioritySelWin.children.filter(function(item, index, array){
                                      return item.name == 'prioritySelInputBox'

                                 }); 
                            console.log(allpriorityBtnBlockDB)

                            for(var d = 0 ; d < allpriorityBtnBlockDB.length ; d++ ){

                                
                                console.log(allpriorityBtnBlockDB[d].name)
                               allpriorityBtnBlockDB[d].tint = '0xffffff'
                            };
                            
                            
                      //  taskPrioritySel_InputBox.text = this.btnText
                        this.tint ='0xff5555'
                        addNewTaskWorkingTimeBtn.priorityID = this.btnText
                        taskPrioritySelWin.priorityID = this.btnText
                
                        console.log(taskPrioritySelWin.priorityID)
                       // vacDaysStartMinsInputBox.text = this.btnText

                                              })
                    .on('pointerup', function(){
                        //    this.tint ='0xffffff'


                    })

        
        

    };
    ////選擇任務優先度選項
    
    //錯誤訊息
    var errorMsgInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '630px',
            color:'0xffaaaa',
        }, 
         box: {
                default: {fill: '0x666666', rounded: 5, stroke: {color: '0x666666', width: 1}},
                focused: {fill: '0x666666', rounded: 5, stroke: {color: '0x666666', width: 1}},
                disabled: {fill: '0x666666', rounded: 5}
            }
        })
       // errorMsgInputBox.text = '請假事由'
        errorMsgInputBox.x = 30
        //errorMsgInputBox.children[3].pivot.x = -taskWorkinDescInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        errorMsgInputBox.y = 745
        errorMsgInputBox.name = 'errorMsgInputBox'
        parent.addChild(errorMsgInputBox)
    
   //確認新增      
    

    
   // var holidaysConfirmEditBtn = new buildBtnScaleE(daysSelectWin,1180,780,100,30,'確認編輯','primary')
    var selUser_InputBox = new inputBoxWithLabelB(parent,15,35,60,130,3,'人員 :',defaultUser,12,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x555555','center')
      //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        selUser_InputBox.disabled = true
        selUser_InputBox.name = 'selUser_InputBox'
     

    
    
    
    
    
    
   // var holidaysMsList = JSON.parse(window.localStorage.getItem("holidaysMsList"));
 
    
    
    var  addNewTaskWorkingTimeBtn= new buildBtnScaleF(parent,500,780,150,30,6,'Noto Sans TC','300','確認新增工時','0xffffff',15,1,'0x333333',1,0,'primary') //'0x67e4aa'

         addNewTaskWorkingTimeBtn.name = 'addNewTaskWorkingTimeBtn'
         addNewTaskWorkingTimeBtn.priorityID = 1
   
         addNewTaskWorkingTimeBtn.on('mousedown',function(){

                    console.log('確認新增工時')

                    var startDayText = selectFromDayInputBox.text
                    var endDayText = selectEndDayInputBox.text 
                    var startTime = String(selectStartTimeInputBox.text) + ":" +  String(taskDaysStartMinInputBox.text)
                    var endTime = String(selectEndTimeInputBox.text) + ":" +  String(taskDaysEndMinsInputBox.text)
                   // console.log(startDayText,endDayText)

                    var startDayMs = getSelDayMs(startDayText)
                    var endDayMs =  getSelDayMs(endDayText)
                    var taskDesc = taskWorkinDescInputBox.text

                   // var taskPrioritySelWin= parent.getChildByName('taskPrioritySelWin')
                    var daysSelectWin = uiBaseContainer.getChildByName("workingTimeSelectWin_container")
                    var taskPrioritySelWin = daysSelectWin.getChildByName('taskPrioritySelWin')
                    
                    //var  addNewTaskWorkingTimeBtn=  daysSelectWin.getChildByName("workingDayInfoWinBG")
                    
                    var startDayMs = getSelDayMs(startDayText)
                    var endDayMs =  getSelDayMs(endDayText)

                    if( startDayText == "起始日期" | endDayText == "結束日期"){

                        errorMsgInputBox.text = "請選擇起始日期/結束日期"

                    }else {

                       // Date.parse(startDayText)
                        var startTimeDate =   new Date(String(startDayText.split(" ")[2])+',' +String( startDayText.split(" ")[4])+','+ String(startDayText.split(" ")[0])  + " " + startTime)

                        var EndTimeDate =   new Date(String(endDayText.split(" ")[2])+',' +String( endDayText.split(" ")[4])+','+ String(endDayText.split(" ")[0])  + " " + endTime)


                        var startTimeMs = startTimeDate.valueOf()
                        var EndTimeMs = EndTimeDate.valueOf()
                       // console.log(startTimeMs,endTimeMs)

                        
                        var startTimsDayMs = (Math.floor(startTimeMs/86400000))*86400000 - 8 * 60*60*1000
                        var EndTimeDayOclockMs = (Math.floor(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000
                        var EndTimsDayMs = (Math.ceil(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000 -1
                        var crossDays = Math.ceil((EndTimsDayMs -startTimsDayMs) / 86400000)    
                        //define totalWorkingTime
                        if( crossDays == 1){
                            
                            var dayOffHours = (EndTimeMs - startTimeMs) / (60*60*1000)
                            var totalWorkingTimeHours = dayOffHours  
                            
                        }else if( crossDays == 2){
                            
                            var totalWorkingTimeHours =((((startTimsDayMs +  1 * 60*60*1000)  + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)) + (( EndTimeMs - ((startTimsDayMs +  1 * 60*60*1000)+(86400000) + 9 * 60*60*1000) ) / (60*60*1000))

                            
                        }else{
                            
                            var totalWorkingTimeHours = 0
                            
                            for(var d = 0 ; d < crossDays ; d ++ ){
                                if(d == 0){
                                    totalWorkingTimeHours = totalWorkingTimeHours + ((startTimsDayMs + 18 * 60*60*1000) -  startTimeMs ) / (60*60*1000)   
                                }else if( d >0 & d < (crossDays -1)){
                                    var selWorkingTimeDayMs = startTimsDayMs + d*86400000
                                    var checkWeekDay = convertWeekDay(selWorkingTimeDayMs)
                                    
                                    console.log(holidaysMsList)

                                    //確認是否週六日
                                    if( checkWeekDay == 0 | checkWeekDay == 6 ){
                                        
                                    }else{
                                        if( holidaysMsList.includes(selWorkingTimeDayMs)){
                                            
                                        }else{
                                           
                                            totalWorkingTimeHours = totalWorkingTimeHours +  9
                                            
                                        };    
                                        
                                        
                                    }; 
                                    
                                   // totalWorkingTimeHours = totalWorkingTimeHours +
                                }else if( d == (crossDays -1)){
                                  // var dayOffHours = ( EndTimeMs - (EndTimeDayOclockMs + 9 * 60*60*1000) ) / (60*60*1000)
  
                                    totalWorkingTimeHours =  totalWorkingTimeHours + ( EndTimeMs - (EndTimeDayOclockMs + 9 * 60*60*1000) ) / (60*60*1000)
                                    
                                };         
                                
                                
                            }
                            
                            
                            
      
                        };

     

                     //   console.log( convertMSB( startTimeMs ),convertMSB( EndTimeMs ))

                        if( startTimeMs > EndTimeMs){
                            errorMsgInputBox.text = "請假 起始時間晚於結束時間 "


                        }else{
                            
                                console.log(totalWorkingTimeHours)

                            
                               // console.log(addNewTaskWorkingTimeBtn.priorityID)
                             //console.log(taskPrioritySel_InputBox.text)

                               // var holidaysMsList = JSON.parse(window.localStorage.getItem("holidaysMsList"));

                                
                                $.post("/addNewWorkingTime", {   //runAllAutoEvents

                                        'username':defaultUser,
                                        'taskID' :taskID,
                                        'start_ms' :startTimeMs,
                                        'end_ms' :EndTimeMs,
                                        'taskDesc' :taskDesc,
                                       // 'projID' : projID,
                                        'priorityID' : this.priorityID,
                                        'total_time' : String(totalWorkingTimeHours),

                                       // 'type' :type,


                                   // 'current_proj' :parseInt(projSearchIndex)
                                    
                                    /*
                                    
                                    var currentTaskWinData = {"x":x,
                                          "y":y,
                                            "w":w,
                                            "h":h,
                                            "taskStartTimeMs":taskStartTimeMs,
                                            "taskEndTimeMs":taskEndTimeMs,
                                            "projName":projName,
                                            "projSearchIndexID":projSearchIndexID,
                                            "projChName":projChName,
                                            "projType":projType,
                                            "selUser":selUser,
                                            "defaultFliterType":defaultFliterType,
                                            "defaultFilterSel":defaultFilterSel,
                                            "listMode":listMode,
                                            "temp":"temp"
                                         };

                                    window.localStorage.setItem("currentTaskWinData", JSON.stringify(currentTaskWinData));
                                    
                                    */
                    
                    
                                }, function(data) {

                                        console.log(data)
                                        var currentProjID = data[7]
                                        var openDaysSelectBlock = new buildRealWorkingDayCalander(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose,defaultUser,taskID,taskName,currentProjID)
                                        
                                        /*
                                        
                                        var currentTaskWinData = JSON.parse(window.localStorage.getItem("currentTaskWinData"));
                                            console.log(currentTaskWinData)
                                    
                                    
                                        var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                        if(userNameInput.text == '未登入'){
                                                        var loginUserName = 'none'
                                                    }else{
                                                        var loginUserName = userNameInput.text 
                                                    };
                                        $.post("/getSelectProjectDataFromDB", {  
                                        'searchID':currentTaskWinData['projSearchIndexID'],
                                        'userName':loginUserName,
                                        'proj_name' : currentTaskWinData['projName'],
                                        'projType' : currentTaskWinData['projType'],
                                        'projNameCH' : currentTaskWinData['projChName']
                                        }, function(data) {
                                            var selProjData = data[1]
                                            var userFavProjList = data[2]
                                            var projType = data[5]

                                            var taskData = data[7]
                                            var projSearchIndex = data[6]
                                            var taskStartTimeMs = data[10]
                                            var taskEndTimeMs = data[11]
                                            var projName = data[3]
                                            var projCHName = data[4]

                                            console.log(data)
                                            window.localStorage.setItem("currentTaskData", JSON.stringify(taskData));

                                            //任務內容頁面
                                            var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,taskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,'','none','none','addNewTask')

                                           // uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   
                                            }); 
                                    
                                        */
                                         //var taskSchListWin = new buildTaskSchListWinB(this,currentTaskWinData['x'],currentTaskWinData['y'],currentTaskWinData['w'],currentTaskWinData['h'],currentTaskData,currentTaskWinData['taskStartTimeMs'],currentTaskWinData['taskEndTimeMs'],currentTaskWinData['projName'],currentTaskWinData['projSearchIndexID'],currentTaskWinData['projChName'],currentTaskWinData['projType'],currentTaskWinData['selUser'],currentTaskWinData['defaultFliterType'],currentTaskWinData['defaultFilterSel'],filterKey)
                                        //var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,taskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,'','none','none','時間▼')



                                });

                                
                            
                            


                        };

                    };











        });

    
    

    
    return leftDaysCalanderWin       
        
        
        
};


//定義user 休假方塊(雙月曆中)
function defineDayOffTimeBaseBlockC(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,selDayText,selDayOffHours,userDayOffData,dayOffTotalHours,dayBlockWH,selectFirstDay){
               // console.log(parent,selDayMs,startTimeMs,EndTimeMs,blockPosX,blockPosY)
               // console.log(new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))
                /// console.log(userDayOffData)
               // console.log('當日起始時間',convertMSB( startTimsDayMs ))

               // console.log('起始時間',convertMSB( startTimeMs ))
              //  console.log('結束時間',convertMSB( EndTimeMs ))
              //  console.log('休假時間',selDayOffHours)
               // console.log('總休假時間',dayOffTotalHours)
                                //(休假起始時間MS - 休假當日9:00 MS / 每小時MS  ) * 9分之一格子寬 
                 var deltaPosX = ((startTimeMs - (startTimsDayMs + 9 * 60*60*1000))/( 60*60*1000)) * (dayBlockWH/9)
                 

                 var dayBlockTimeW = (selDayOffHours/9 )*dayBlockWH
                 var dayOffBlock =  new PIXI.Graphics();   
                                dayOffBlock.lineStyle(1, '0xdd8888', 0);
                                dayOffBlock.beginFill('0xdd8888',0.2);
                                dayOffBlock.drawRoundedRect(0,0, dayBlockTimeW,dayBlockWH, 2);
                                dayOffBlock.endFill();
                            
                                dayOffBlock.x = blockPosX + deltaPosX
                                dayOffBlock.y = blockPosY// + dayBlockWH

                                dayOffBlock.name = 'usrDayOfDay_'// + String(i-selectFirstDay+1) 
                                                   //'dayBlockDay_'
                                /*
                 
                                dayOffBlock.isDayOff = true
                                dayOffBlock.dayOffID = userDayOffData[0]
                                dayOffBlock.dayOffUser = userDayOffData[1]
                                dayOffBlock.dayOffReason = userDayOffData[2]
                                dayOffBlock.dayOffStartMs = convertMSB(userDayOffData[3])
                                dayOffBlock.dayOffEndMs =  convertMSB(userDayOffData[4])
                                dayOffBlock.totalDayOffHours =dayOffTotalHours
                                dayOffBlock.interactive = true;
                                dayOffBlock.buttonMode = true; 
                                */
                                parent.addChild(dayOffBlock)
                
                               // dayOffBlock.addChild(selDayText)
                               
               

                                dayOffBlock.on('pointerover', function(){
                                              
                                    
                                                                        
                                                                        })
                                            .on('pointerout', function(){//workingDayInfoWinBG.alpha=0;
                                                                        
                                                                        
                                                                        })
                                            .on('mousedown',function(){this.alpha=0.5;
                                                                       
                                                                       /*
                                                                       console.log('人員休假資料')
                                                                       
                                                                      //  console.log(this.parent.parent.parent.getChildByName('workingDayInfoWinBG'))
                                                                       
                                                                        var workingDayInfoWinBG = this.parent.parent.parent.getChildByName('workingDayInfoWinBG')
                                                                        var showWokingTimeID = workingDayInfoWinBG.getChildByName('showWokingTimeID')
                                                                        
                                                                        var delWorkingTimeBtn = workingDayInfoWinBG.getChildByName('delWorkingTimeBtn')
                                                                        //var showWokingTimeID = workingDayInfoWinBG.getChildByName('showWokingTimeID')
                                                                        var showWorkingTimeDesc = workingDayInfoWinBG.getChildByName('showWorkingTimeDesc')
                                                                        var showWorkingTimeStart = workingDayInfoWinBG.getChildByName('showWorkingTimeStart')
                                                                        var showWorkingTimeEnd = workingDayInfoWinBG.getChildByName('showWorkingTimeEnd')
                                                                        var showTotalWorkingTime = workingDayInfoWinBG.getChildByName('showTotalWorkingTime')

                                                                        

                                                                        showWokingTimeID.text = this.dayOffID
                                                                        console.log(this.dayOffID)
                                                                       // console.log(leftDaysBlock)
                                                                        var leftWorkingDaysBlockInMonthDB = leftDaysBlock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'workingDaysBlk_'
                                                                                                                   //  dayBlockDay_
                                                                                 }); 
                                                                        var rightWorkingDaysBlockInMonthDB = rightDaysBlock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'workingDaysBlk_'

                                                                                 }); 
                                                                       
                                                                       
                                                                        var formdaysWinBlockInMonthDB = leftDaysBlock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,11) == 'dayBlockDay'

                                                                                 }); 

                   
                                                                        var dayBlockInMonthDB = rightDaysBlock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,11) == 'dayBlockDay'

                                                                                 }); 

                                                                       console.log(formdaysWinBlockInMonthDB)
                                                                         console.log(dayBlockInMonthDB)
                                                                        var selDayOffID = this.dayOffID
                                                                        for(var j = 0; j < leftWorkingDaysBlockInMonthDB.length ; j++){
                                                                            
                                                                                //leftWorkingDaysBlockInMonthDB[j].tint ='0xffffff' 
                                                                             //   console.log()
                                                                                if(leftWorkingDaysBlockInMonthDB[j].dayOffID == selDayOffID) {
                                                                                    console.log('aaaaaaaaaaaaaaaaa')
                                                                                    leftWorkingDaysBlockInMonthDB[j].tint ='0xffaaaa'
                                                                                }else{
                                                                                    leftWorkingDaysBlockInMonthDB[j].tint ='0xffffff'
                                                                                }
                                                                            
                                                                        };


                                                                        for(var j = 0; j < rightWorkingDaysBlockInMonthDB.length ; j++){
                                                                            
                                                                              //  rightWorkingDaysBlockInMonthDB[j].tint ='0xffffff' 

                                                                                if(rightWorkingDaysBlockInMonthDB[j].dayOffID == selDayOffID) {
                                                                                    console.log('bbbbbbbbbbbbbbb')

                                                                                    rightWorkingDaysBlockInMonthDB[j].tint ='0xffaaaa'
                                                                                }else{
                                                                                    rightWorkingDaysBlockInMonthDB[j].tint ='0xffffff'
                                                                                }
                                                                            

                                                                        };     

                                                                       
                                                                        for(var j = 0; j < formdaysWinBlockInMonthDB.length ; j++){
                                                                            
                                                                 
                                                                                formdaysWinBlockInMonthDB[j].alpha = 1
                                                                            
                                                                        };

                                                                        for(var j = 0; j < dayBlockInMonthDB.length ; j++){
                                                            
                                                                                dayBlockInMonthDB[j].alpha = 1
                                                                            
                                                                        };
                                                                      

                                                                       
                                                                         //   console.log(leftWorkingDaysBlockInMonthDB)

                                                                            showWokingTimeID.text =this.dayOffID
                                                                            showWokingTimeID.dayOffID =this.dayOffID

                                                                            showWorkingTimeDesc.text = this.dayOffReason
                                                                            showWorkingTimeStart.text = this.dayOffStartMs + '  起'
                                                                            showWorkingTimeEnd.text = this.dayOffEndMs + '  訖'
                                                                            showTotalWorkingTime.text = '總時數 :' + this.totalDayOffHours + '  時'

                                                                            console.log(showWokingTimeID.dayOffID)

                                                                        workingDayInfoWinBG.alpha = 1
                                                                        delWorkingTimeBtn.alpha = 1
                                                                    //    console.log(userSelFilterList) 

                                                                    */
                                    
                                                                        })
                                            .on('pointerup', function(){this.alpha=1;})

                
            
};

////定義user 休假方塊(雙月曆中)


//定義工作日方塊

function defineSelDayWorkingTimeBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,selDayOffHours,workingTimeTotalHours,dayBlockWH,selUserTaskWorkingDB,currentTaskID,currentProjID){
    //console.log('defineSelDayWorkingTimeBlock',parent,blockPosX,blockPosY)
    
   // console.log('selUserTaskWorkingDB',selUserTaskWorkingDB)
    var holidaysMsList = JSON.parse(window.localStorage.getItem("holidaysMsList"));

    var priorityCount = 3
    var selDaySeekDay = convertWeekDay( startTimsDayMs )
       
    var workingTimeID = selUserTaskWorkingDB[0]

    var taskID = parseInt(selUserTaskWorkingDB[1])
    var taskName = selUserTaskWorkingDB[2]
    var taskWorkingUser = selUserTaskWorkingDB[3]
    var taskWorkingStartMS =  parseInt(selUserTaskWorkingDB[4])
    var taskWorkingEndMS =  parseInt(selUserTaskWorkingDB[5])
    var taskWorkingDesc = selUserTaskWorkingDB[6]

    var projID  =  parseInt(selUserTaskWorkingDB[7])
    var priorityID =  parseInt(selUserTaskWorkingDB[8])
    var allWorkingDaysTotalHours =  String(selUserTaskWorkingDB[9])
 
   // console.log(priorityID)
    
    if( selDaySeekDay == 0 | selDaySeekDay == 6){
        var workingTimeBlockAlpha = 0        
    }else if(holidaysMsList.includes(startTimsDayMs)){
         var workingTimeBlockAlpha = 0        
    
    }else{
        if( currentTaskID == taskID & priorityID == 1 ){
            var workingTimeBlockColor = "0x75bdff"
            var deltaPosY = dayBlockWH / (priorityCount+1) * 0 
            var workingTimeBlockAlpha = 0.8       

        }else if( currentTaskID == taskID & priorityID == 2 ){
            var workingTimeBlockColor = "0xfffb95"  
             var deltaPosY = dayBlockWH / (priorityCount+1) * 1
             var workingTimeBlockAlpha = 0.8       

        }else if( currentTaskID == taskID & priorityID == 3 ){
            var workingTimeBlockColor = "0x64a157"  
             var deltaPosY = dayBlockWH / (priorityCount+1) * 2 
             var workingTimeBlockAlpha = 0.8       

        }else{
            if( projID == currentProjID){
                var workingTimeBlockColor = "0xaaaaaa" 
                var deltaPosY = dayBlockWH / (priorityCount+1) * 3   
                var workingTimeBlockAlpha = 0.5         

            }else{
                var workingTimeBlockColor = "0x888888" 
                var deltaPosY = dayBlockWH / (priorityCount+1) * 3     
                var workingTimeBlockAlpha = 0.5         

            };

        };


    }
    
    
   
   // console.log(parent,selDayMs,startTimeMs,EndTimeMs,blockPosX,blockPosY)
   // console.log(new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))
    /// console.log(userDayOffData)
   // console.log('當日起始時間',convertMSB( startTimsDayMs ))

   // console.log('起始時間',convertMSB( startTimeMs ))
  //  console.log('結束時間',convertMSB( EndTimeMs ))
  //  console.log('休假時間',selDayOffHours)
   // console.log('總休假時間',dayOffTotalHours)
                    //(休假起始時間MS - 休假當日9:00 MS / 每小時MS  ) * 9分之一格子寬 
    
    
     var deltaPosX = ((startTimeMs - (startTimsDayMs + 9 * 60*60*1000))/( 60*60*1000)) * (dayBlockWH/9)
     var dayBlockTimeW = (selDayOffHours/9 )*dayBlockWH
                     //     console.log('deltaPosX',deltaPosX,'dayBlockTimeW',dayBlockTimeW,'dayBlockWH',dayBlockWH)

     var dayWorkingTimeBlock =  new PIXI.Graphics();   
        dayWorkingTimeBlock.lineStyle(1, '0xdd8888', 0);
        dayWorkingTimeBlock.beginFill(workingTimeBlockColor,workingTimeBlockAlpha);
        dayWorkingTimeBlock.drawRoundedRect(0,0, dayBlockTimeW,dayBlockWH/(priorityCount+1), 2);
        // dayWorkingTimeBlock.drawRoundedRect(0,0, 200,200, 2);

        dayWorkingTimeBlock.endFill();

        dayWorkingTimeBlock.x = blockPosX + deltaPosX
        dayWorkingTimeBlock.y = blockPosY + deltaPosY

        dayWorkingTimeBlock.name = "workingDaysBlk_" //+ String(i-selectFirstDay+1) 


        //dayOffBlock.isDayOff = true
        //dayOffBlock.dayOffID = userDayOffData[0]
        //dayOffBlock.dayOffUser = userDayOffData[1]
        // dayOffBlock.dayOffReason = userDayOffData[2]
        // dayOffBlock.dayOffStartMs = convertMSB(userDayOffData[3])
        //dayOffBlock.dayOffEndMs =  convertMSB(userDayOffData[4])
        //dayOffBlock.totalDayOffHours =dayOffTotalHours
        dayWorkingTimeBlock.interactive = true;
        dayWorkingTimeBlock.buttonMode = true; 

        parent.addChild(dayWorkingTimeBlock)

                   // dayOffBlock.addChild(selDayText)


    var daysSelectWin = uiBaseContainer.getChildByName("workingTimeSelectWin_container")

    var workingDayInfoWinBG = daysSelectWin.getChildByName("workingDayInfoWinBG")

    var delWorkingTimeBtn = workingDayInfoWinBG.getChildByName("delWorkingTimeBtn")

    var showTaskID = workingDayInfoWinBG.getChildByName("showTaskID")

    var showTaskName = workingDayInfoWinBG.getChildByName("showTaskName")

    var showWokingTimeID = workingDayInfoWinBG.getChildByName("showWokingTimeID")

    var showWorkingTimeStart = workingDayInfoWinBG.getChildByName("showWorkingTimeStart")

    var showWorkingTimeEnd = workingDayInfoWinBG.getChildByName("showWorkingTimeEnd")

    var showTotalWorkingTime = workingDayInfoWinBG.getChildByName("showTotalWorkingTime")


    
                    dayWorkingTimeBlock.on('pointerover', function(){



                                                            })
                                .on('pointerout', function(){//workingDayInfoWinBG.alpha=0;


                                                            })
                                .on('mousedown',function(){this.alpha=0.5;
                                                           
                                                            delWorkingTimeBtn.alpha = 1
                                                            showTaskID.text = "Task ID :" + "  " + taskID
                                                            showTaskName.text = "任務名稱 :" + "  " + taskName
                                                            showWokingTimeID.text ="工時 ID :" + "  " + workingTimeID
                                                            showWorkingTimeStart.text = "起始時間 :" + "  " + convertMSB( taskWorkingStartMS )
                                                            showWorkingTimeEnd.text = "結束時間 :" + "  " + convertMSB( taskWorkingEndMS )
                                                            showTotalWorkingTime.text = "總工作時數 :" + "  " + allWorkingDaysTotalHours
                                                            delWorkingTimeBtn.taskID = taskID
                                                            delWorkingTimeBtn.workingTimeID = workingTimeID
                                                            delWorkingTimeBtn.projID = projID
                                                            delWorkingTimeBtn.user = taskWorkingUser
                                                            delWorkingTimeBtn.taskName = taskName

                                                           /*
                                                           console.log('人員休假資料')

                                                          //  console.log(this.parent.parent.parent.getChildByName('workingDayInfoWinBG'))

                                                            var workingDayInfoWinBG = this.parent.parent.parent.getChildByName('workingDayInfoWinBG')
                                                            var showWokingTimeID = workingDayInfoWinBG.getChildByName('showWokingTimeID')

                                                            var delWorkingTimeBtn = workingDayInfoWinBG.getChildByName('delWorkingTimeBtn')
                                                            //var showWokingTimeID = workingDayInfoWinBG.getChildByName('showWokingTimeID')
                                                            var showWorkingTimeDesc = workingDayInfoWinBG.getChildByName('showWorkingTimeDesc')
                                                            var showWorkingTimeStart = workingDayInfoWinBG.getChildByName('showWorkingTimeStart')
                                                            var showWorkingTimeEnd = workingDayInfoWinBG.getChildByName('showWorkingTimeEnd')
                                                            var showTotalWorkingTime = workingDayInfoWinBG.getChildByName('showTotalWorkingTime')



                                                            showWokingTimeID.text = this.dayOffID
                                                            console.log(this.dayOffID)
                                                           // console.log(leftDaysBlock)
                                                            var leftWorkingDaysBlockInMonthDB = leftDaysBlock.children.filter(function(item, index, array){
                                                                          return item.name.slice(0,15) == 'workingDaysBlk_'
                                                                                                       //  dayBlockDay_
                                                                     }); 
                                                            var rightWorkingDaysBlockInMonthDB = rightDaysBlock.children.filter(function(item, index, array){
                                                                          return item.name.slice(0,15) == 'workingDaysBlk_'

                                                                     }); 


                                                            var formdaysWinBlockInMonthDB = leftDaysBlock.children.filter(function(item, index, array){
                                                                          return item.name.slice(0,11) == 'dayBlockDay'

                                                                     }); 


                                                            var dayBlockInMonthDB = rightDaysBlock.children.filter(function(item, index, array){
                                                                          return item.name.slice(0,11) == 'dayBlockDay'

                                                                     }); 

                                                           console.log(formdaysWinBlockInMonthDB)
                                                             console.log(dayBlockInMonthDB)
                                                            var selDayOffID = this.dayOffID
                                                            for(var j = 0; j < leftWorkingDaysBlockInMonthDB.length ; j++){

                                                                    //leftWorkingDaysBlockInMonthDB[j].tint ='0xffffff' 
                                                                 //   console.log()
                                                                    if(leftWorkingDaysBlockInMonthDB[j].dayOffID == selDayOffID) {
                                                                        console.log('aaaaaaaaaaaaaaaaa')
                                                                        leftWorkingDaysBlockInMonthDB[j].tint ='0xffaaaa'
                                                                    }else{
                                                                        leftWorkingDaysBlockInMonthDB[j].tint ='0xffffff'
                                                                    }

                                                            };


                                                            for(var j = 0; j < rightWorkingDaysBlockInMonthDB.length ; j++){

                                                                  //  rightWorkingDaysBlockInMonthDB[j].tint ='0xffffff' 

                                                                    if(rightWorkingDaysBlockInMonthDB[j].dayOffID == selDayOffID) {
                                                                        console.log('bbbbbbbbbbbbbbb')

                                                                        rightWorkingDaysBlockInMonthDB[j].tint ='0xffaaaa'
                                                                    }else{
                                                                        rightWorkingDaysBlockInMonthDB[j].tint ='0xffffff'
                                                                    }


                                                            };     


                                                            for(var j = 0; j < formdaysWinBlockInMonthDB.length ; j++){


                                                                    formdaysWinBlockInMonthDB[j].alpha = 1

                                                            };

                                                            for(var j = 0; j < dayBlockInMonthDB.length ; j++){

                                                                    dayBlockInMonthDB[j].alpha = 1

                                                            };



                                                             //   console.log(leftWorkingDaysBlockInMonthDB)

                                                                showWokingTimeID.text =this.dayOffID
                                                                showWokingTimeID.dayOffID =this.dayOffID

                                                                showWorkingTimeDesc.text = this.dayOffReason
                                                                showWorkingTimeStart.text = this.dayOffStartMs + '  起'
                                                                showWorkingTimeEnd.text = this.dayOffEndMs + '  訖'
                                                                showTotalWorkingTime.text = '總時數 :' + this.totalDayOffHours + '  時'

                                                                console.log(showWokingTimeID.dayOffID)

                                                            workingDayInfoWinBG.alpha = 1
                                                            delWorkingTimeBtn.alpha = 1
                                                        //    console.log(userSelFilterList) 

                                                        */

                                                            })
                                .on('pointerup', function(){this.alpha=1;})



};



//可移動人員實際工時編輯視窗
function moveAbleUserWorkingTimeWin(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗
   // console.log(fontColor)
    
    //deleteExitsted WinBlock
    
    parent.removeChild(parent.getChildByName(containerName))
    
    
    
    //text style    timelineLabelInputStyle
    var fontStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: fontSize,
        fill:fontColor,
       // fontStyle: 'oblique',
        //fill: 'white',
        align: 'left',
        letterSpacing: 2,
       // lineJoin:'bevel',
       // stroke:'white',
        //strokeThickness:5
        });
    

    var winBGContainer = new PIXI.Container()
        winBGContainer.name = containerName;
        parent.addChild(winBGContainer)



    var darkBG =  new PIXI.Graphics(); //asset 主視窗
        darkBG.lineStyle(1, '0x111111', 0);
        darkBG.beginFill('0x111111',darkAlpha);
        darkBG.drawRoundedRect(0,0, 10000,10000, 0);
        darkBG.endFill();
        darkBG.name = 'darkBG'
        darkBG.x = -5000
        darkBG.y = -5000
        darkBG.alpha = 1
        winBGContainer.addChild(darkBG)

        darkBG.interactive = true;


    
    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(0, '0xffffff', 0);
        winTapeBlock.beginFill(winTapeColor,1);
        winTapeBlock.drawRoundedRect(0,0, w,25, borderRect);
        winTapeBlock.endFill();
        winTapeBlock.name = 'winTapeBlock'
      //  winTapeBlock.x = x+1
      //  winTapeBlock.y = y+1
      //  winTapeBlock.alpha = 1
       // winTapeBlock.zOrder = 5

    winBGContainer.addChild(winTapeBlock)
    winBGContainer.x = x
    winBGContainer.y = y
    
       

 
    
    
    
    var workAreaWin =  new PIXI.Graphics(); //asset 主視窗
        workAreaWin.lineStyle(borderWidth, borderColor, borderAlpha);
        workAreaWin.beginFill(winFillColor,FillAlpha);
        workAreaWin.drawRoundedRect(0,0, w,h-25, borderRect);
        workAreaWin.endFill();
        workAreaWin.name = 'workAreaWin'
       // workAreaWin.x = x
        workAreaWin.y = 25
        workAreaWin.alpha = 1
      //  winBG.zOrder = 1

    winBGContainer.addChild(workAreaWin)
    
    

       var selectRing =  new PIXI.Graphics(); //asset 主視窗
        selectRing.lineStyle(3, '0xaaaaff', 1);
        selectRing.beginFill('0xaaaaff',0.3);
        selectRing.drawRoundedRect(0,0, w,h, borderRect);
        selectRing.endFill();
        selectRing.name = 'selectRing'
       // selectRing.x = x
      //  selectRing.y = y
        selectRing.alpha = 0
      //  selectRing.zOrder = -1
    winBGContainer.addChild(selectRing) 
    
    
    var winLabelText = new PIXI.Text(labelText, fontStyle);
            
            
        winTapeBlock.addChild(winLabelText)

        winLabelText.x = 10
        winLabelText.pivot.y = winLabelText.height/2
        winLabelText.y = 12

    
    winTapeBlock.interactive = true;


    winTapeBlock
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
    
    
    function onDragStart(event) {
  
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
        selectRing.alpha = 1
        
        

        var containerCount = parent.children.length

        parent.setChildIndex(winBGContainer,containerCount-1)
        
        parent.children[containerCount-1].interactive = true

    }

    function onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;
        selectRing.alpha = 0

        
        var containerCount = parent.children.length

        //parent.setChildIndex(winBGContainer,containerCount-1)
        var selContainerIndex = containerCount-1
        
        for(var i = 0;i<selContainerIndex;i++){
            var selContainer = parent.children[i]
           // console.log(selContainer.x,selContainer.y,selContainer.width,selContainer.height)
            
            var maskArea = new PIXI.Graphics();

            maskArea.lineStyle(1, 0xffffff, 1);
            maskArea.beginFill(0x555555,0.6);
            maskArea.drawRect(selContainer.x, selContainer.y, selContainer.width,30);
            maskArea.endFill();
  
            
        }
                  //  console.log(parent)

 
        
    }
    
    function onDragMove() {
      //  console.log(selApp)
        if (this.dragging) {
            const newPosition = this.data.getLocalPosition(this.parent);

            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

           // console.log(w,h) 
            
            if(mouseposition.x<0){
                winBGContainer.x = 0
            }else if((mouseposition.x + w)>screenW){
                winBGContainer.x = (screenW -w)}else{
                winBGContainer.x =mouseposition.x
            };
                 
            if(mouseposition.y<0){
                winBGContainer.y = 0
            }else if((mouseposition.y + h)>screenH){
                winBGContainer.y = (screenH -h)    

                     }
            else{
                     winBGContainer.y =mouseposition.y

            };
            
            winBGContainer.posX = winBGContainer.x

            winBGContainer.posY = winBGContainer.y


        }
        
    }
    

    
    if(closeBtn == true){
        var closeIconBtn = new PIXI.Graphics();
        var closeIconBtnPosData = [[2.58, 0.0], [10.3, -7.73], [10.7, -8.33], [10.83, -9.01], [10.7, -9.7], [10.3, -10.3], [9.7, -10.7], [9.01, -10.83], [8.33, -10.7], [7.73, -10.3], [-0.0, -2.58], [-7.73, -10.3], [-8.33, -10.7], [-9.01, -10.83], [-9.7, -10.7], [-10.3, -10.3], [-10.7, -9.7], [-10.83, -9.01], [-10.7, -8.33], [-10.3, -7.73], [-2.58, -0.0], [-10.3, 7.73], [-10.7, 8.33], [-10.83, 9.01], [-10.7, 9.7], [-10.3, 10.3], [-9.7, 10.7], [-9.01, 10.83], [-8.33, 10.7], [-7.73, 10.3], [-0.0, 2.58], [7.73, 10.3], [8.33, 10.7], [9.01, 10.83], [9.7, 10.7], [10.3, 10.3], [10.7, 9.7], [10.83, 9.01], [10.7, 8.33], [10.3, 7.73]];
            closeIconBtn.lineStyle(1, 0xff7777, 1);
            closeIconBtn.beginFill(0xff7777, 1);

            closeIconBtn.drawCircle( 0, 0, 17);

            closeIconBtn.lineStyle(1, 0x555555, 1);
            closeIconBtn.beginFill(0x555555, 1);

            closeIconBtn.moveTo(closeIconBtnPosData[0][0], closeIconBtnPosData[0][1]);
        for(i=1;i<closeIconBtnPosData.length;i++){closeIconBtn.lineTo(closeIconBtnPosData[i][0], closeIconBtnPosData[i][1]);};
            closeIconBtn.lineTo(closeIconBtnPosData[0][0], closeIconBtnPosData[0][1]);
            closeIconBtn.alpha = 1;
           // closeIconBtn.pivot.x = closeIconBtn.width/2;
          //  closeIconBtn.pivot.y = closeIconBtn.height/2;
          //  closeIconBtn.x =0;
           // closeIconBtn.y =0;
            closeIconBtn.name="closeIconBtn";
            closeIconBtn.scale.set(0.5);  

        closeIconBtn.x = w - 13
        closeIconBtn.y =  11

        winBGContainer.addChild(closeIconBtn)
        closeIconBtn.interactive = true;
        closeIconBtn.buttonMode = true;
        closeIconBtn.on('pointerover', function(){this.tint='0xffaaaa';})
                            .on('pointerout', function(){this.tint='0xffffff';})
                            .on('mousedown', function(){
                                //console.log(this.parent)
                                //this.parent.scale.set(0.001)
                                //this.parent.alpha = 0
                               // var parentName = this.parent.name
                              //  console.log(parentName)
                                //this.parent.parent.removeChild(this.parent.parent.getChildByName(parentName))
                                parent.removeChild(parent.getChildByName(winBGContainer.name))

                                
                                //更新甘特圖視窗

                                var currentTaskWinData = JSON.parse(window.localStorage.getItem("currentTaskWinData"));
                                    console.log(currentTaskWinData)


                                var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                if(userNameInput.text == '未登入'){
                                                var loginUserName = 'none'
                                            }else{
                                                var loginUserName = userNameInput.text 
                                            };
                                $.post("/getSelectProjectDataFromDB", {   
                                'searchID':currentTaskWinData['projSearchIndexID'],
                                'userName':loginUserName,
                                'proj_name' : currentTaskWinData['projName'],
                                'projType' : currentTaskWinData['projType'],
                                'projNameCH' : currentTaskWinData['projChName']
                                }, function(data) {
                                    var selProjData = data[1]
                                    var userFavProjList = data[2]
                                    var projType = data[5]

                                    var taskData = data[7]
                                    var projSearchIndex = data[6]
                                    var taskStartTimeMs = data[10]
                                    var taskEndTimeMs = data[11]
                                    var projName = data[3]
                                    var projCHName = data[4]
                                    
                                    var selProjWorkingTimeDB = data[12]

                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    

                                    console.log(data)
                                    window.localStorage.setItem("currentTaskData", JSON.stringify(taskData));
                                    
                                    window.localStorage.setItem("selProjWorkingTimeDB", JSON.stringify(selProjWorkingTimeDB));  // 存入工時資料

                                  //  uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskScheduleListWin_container'))   

                                    //任務內容頁面
                                    var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,taskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,'','none','none','addNewTask')

                                   // uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   
                                }); 


            
            
            
            
            
            
                              //  console.log('close win', parentName)

                                })
                            .on('pointerup', function(){this.tint='0xffffff';})      
        
            };
    
    
     
    winBGContainer.posX = x

    winBGContainer.posY = y
    
    
    
    return winBGContainer
      
    
};


    
