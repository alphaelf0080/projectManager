



function buildSelVacDayTimeWinA(x,y,scale,autoClose,defaultUser){
    
    //console.log(defaultUser)

    
    if(defaultUser == "未登入"){
        var selUserDayOffDB = []
        
      //  selUserDayOffDB 
        window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));

    }else{
        
        var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));

    }
   // console.log(selUserDayOffDB)
    uiBaseContainer.removeChild(uiBaseContainer.getChildByName("daysSelectWin_container"))

    var daysSelectWin = new moveAbleWinBlockC(uiBaseContainer,x,y,900,770,'',20,20,14,'0xffffff','daysSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
                             // moveAbleWinBlockC(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn
    daysSelectWin.name = 'daysSelectWin_container'
    daysSelectWin.scale.set(scale)
    //var daysSelectWinBlock = 

  //  console.log( new Date(2021, 2, 0).getDate())
   
    // buildDaysWinBlock(parent,x,y,w,h,selYear,selMonth,selDay,selWeekDay,blockScale){
    
    var dayDate = new Date()
    
    var selYear = dayDate.getFullYear()
    var selMonth = dayDate.getMonth()
    var selDay = dayDate.getDate()

    daysSelectWin.selYear = selYear
    daysSelectWin.selMonth = selMonth
    daysSelectWin.selDay = selDay

    
   // console.log(selYear,selMonth,selDay)
    var openDaysSelectBlock = new buildFromToCalanderA(daysSelectWin,20,100,selYear,selMonth+1,selDay,4,1,autoClose,defaultUser)
    
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
                                            var openDaysSelectBlock = new buildFromToCalanderA(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,autoClose,defaultUser)
                                            
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
                                            var openDaysSelectBlock = new buildFromToCalanderA(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,autoClose,defaultUser)

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
        fill: '0xffffff', // gradient
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
    
    
    
    var dayOffInfoWinBG =  new PIXI.Graphics();
        dayOffInfoWinBG.lineStyle(1, '0xffffff', 1);
        dayOffInfoWinBG.beginFill('0x222222',0.1);
        dayOffInfoWinBG.drawRoundedRect(0,0, 220,490, 2);
        dayOffInfoWinBG.endFill();
        dayOffInfoWinBG.name = 'dayOffInfoWinBG'
        dayOffInfoWinBG.x = 670
        dayOffInfoWinBG.y = 60
        dayOffInfoWinBG.alpha = 1
        daysSelectWin.addChild(dayOffInfoWinBG)
    
    
    
    
    var showDayOffID = new PIXI.Text('ID', fontStyle);
        showDayOffID.x = 10
        showDayOffID.y = 60
        showDayOffID.name = 'showDayOffID'
        dayOffInfoWinBG.addChild(showDayOffID)
    
    var showDayOffReason = new PIXI.Text('休假原因', fontStyle);
        showDayOffReason.x = 10
        showDayOffReason.y = 90
        showDayOffReason.name = 'showDayOffReason'

        dayOffInfoWinBG.addChild(showDayOffReason)

    
    var showDayOffStartTime = new PIXI.Text('起始時間', fontStyle);
        showDayOffStartTime.x = 10
        showDayOffStartTime.y = 120
        showDayOffStartTime.name = 'showDayOffStartTime'

        dayOffInfoWinBG.addChild(showDayOffStartTime)

    var showDayOffEndTime = new PIXI.Text('結束時間', fontStyle);
        showDayOffEndTime.x = 10
        showDayOffEndTime.y = 150
        showDayOffEndTime.name = 'showDayOffEndTime'

        dayOffInfoWinBG.addChild(showDayOffEndTime)
  
    var showDayOffTotalTime = new PIXI.Text('總休假時數', fontStyle);
        showDayOffTotalTime.x = 10
        showDayOffTotalTime.y = 180
        showDayOffTotalTime.name = 'showDayOffTotalTime'
        dayOffInfoWinBG.addChild(showDayOffTotalTime) 
    
    var delSelDayOffBtn = new buildBtnScaleG(dayOffInfoWinBG,90,350,110,25,6,'Noto Sans TC','300','刪除休假','0xffffff',16,1,'0x333333',1,0,'danger') //'0x67e4aa'

        delSelDayOffBtn.name = 'delSelDayOffBtn'
        delSelDayOffBtn.alpha = 0
    
        delSelDayOffBtn.interactive = true;   // BTN
        delSelDayOffBtn.buttonMode = true;
    
        delSelDayOffBtn.on('mousedown',function(){//delSelDayOffBtn.alpha = 0;
                                                 // dayOffInfoWinBG.alpha = 0
                                                 
                                                var dayOffInfoWinBG = this.parent//parent.parent.parent.getChildByName('dayOffInfoWinBG')
                                              //  console.log(dayOffInfoWinBG)
                                                var errorMsgInputBox  =  dayOffInfoWinBG.parent.getChildByName('errorMsgInputBox')
                                              //  console.log(errorMsgInputBox)
                                               // var delSelDayOffBtn = dayOffInfoWinBG.getChildByName('delSelDayOffBtn')
                                                var showDayOffID = dayOffInfoWinBG.getChildByName('showDayOffID')
                                                     //   console.log(showDayOffID.dayOffID)

                                               // var showDayOffReason = dayOffInfoWinBG.getChildByName('showDayOffReason')
                                               // var showDayOffStartTime = dayOffInfoWinBG.getChildByName('showDayOffStartTime')
                                               // var showDayOffEndTime = dayOffInfoWinBG.getChildByName('showDayOffEndTime')
                                               // var showDayOffTotalTime = dayOffInfoWinBG.getChildByName('showDayOffTotalTime')
                                                  
                                               // console.log(dayOffInfoWinBG)
                                              //  console.log(showDayOffID.text)

                                                     
                                                          //  var delDayOffID = parseInt(showDayOffID.text)
                                                         //   console.log(delDayOffID)
            
                                                            
                                                           $.post("/delSelUserDayOffData", {  
                                                                        'dayOffID':showDayOffID.dayOffID,





                                                                        }, function(data) {
                                                                            console.log(data)

                                                                            var errMsg = data[0]

                                                                     //   var selUserData = data[2]

                                                                            errorMsgInputBox.text = "刪除休假完成"
                                                               
                                                                            //重置休假表
                                                                      //  console.log(defaultUser)
                                                                    
                                                                        setTimeout(function(){
                                                                            getSelUserData(defaultUser)
                                                                        }, 500);     
                                                               
                                                               
                                                               
                                                                           // console.log('刪除休假完成',defaultUser)
                                                                            
                                                                    
                                                                            setTimeout(function(){
                                                                                   var daysSelectWin = uiBaseContainer.getChildByName('daysSelectWin_container')
                                                                                    var openDaysSelectBlock = new buildFromToCalanderA(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose,defaultUser)


                                                                            }, 1000);       
                                                                            
                                                                                
                                                                       // window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));


                                                                        })     
                    
                                                            
                                                            
                                                 
                                                 
                                                 
                                                 
                                             })
    
    
    
    
    
    

    
    
    return openDaysSelectBlock
};


function buildFromToCalanderA(parent,x,y,selYear,selMonth,selDay,selWeekDay,blockScale,autoClose,defaultUser){
    
    console.log('buildFromToCalanderA',defaultUser)
    
    console.log(parent,x,y,selYear,selMonth,selDay,selWeekDay)
    
    parent.removeChild(parent.getChildByName("fromDaysWinBG"))
    console.log(autoClose)
    
    var userData = JSON.parse(window.localStorage.getItem("userData"));

    var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));

    var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));

    var fontStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xffffff', // gradient
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

    console.log(currentMonthString,currentWeekDayString)
    
    var fromDaysWinBG =  new PIXI.Graphics();
        fromDaysWinBG.lineStyle(1, '0xffffff', 1);
        fromDaysWinBG.beginFill('0x222222',1);
        fromDaysWinBG.drawRoundedRect(0,0, 320,330, 2);
        fromDaysWinBG.endFill();
        fromDaysWinBG.name = 'fromDaysWinBG'
        fromDaysWinBG.x = 10
        fromDaysWinBG.y = 60
        fromDaysWinBG.alpha = 1
        parent.addChild(fromDaysWinBG)
        fromDaysWinBG.scale.set(blockScale)
    
     
    var toDaysWinBG =  new PIXI.Graphics();
        toDaysWinBG.lineStyle(1, '0xffffff', 1);
        toDaysWinBG.beginFill('0x222222',1);
        toDaysWinBG.drawRoundedRect(0,0, 320,330, 2);
        toDaysWinBG.endFill();
        toDaysWinBG.name = 'toDaysWinBG'
        toDaysWinBG.x = 340
        toDaysWinBG.y = 60
        toDaysWinBG.alpha = 1
        parent.addChild(toDaysWinBG)
        toDaysWinBG.scale.set(blockScale)
    
       
    
    
    var fromDaysBGblock = new PIXI.Graphics(); 
        fromDaysBGblock.lineStyle(1, '0x444444', 1);
        fromDaysBGblock.beginFill('0xaa4444',1);
        fromDaysBGblock.drawRoundedRect(0,0, dayBlockWH*7,dayBlockWH*6, 1);
        fromDaysBGblock.endFill();
        fromDaysBGblock.name = 'fromDaysBGblock'
        fromDaysBGblock.x = 20
        fromDaysBGblock.y =60
        fromDaysBGblock.alpha = 1
        fromDaysWinBG.addChild(fromDaysBGblock)

    
    
        
    var toDaysBGblock = new PIXI.Graphics(); 
        toDaysBGblock.lineStyle(1, '0x444444', 1);
        toDaysBGblock.beginFill('0xaa4444',1);
        toDaysBGblock.drawRoundedRect(0,0, dayBlockWH*7,dayBlockWH*6, 1);
        toDaysBGblock.endFill();
        toDaysBGblock.name = 'toDaysBGblock'
        toDaysBGblock.x = 20
        toDaysBGblock.y =60
        toDaysBGblock.alpha = 1
        toDaysWinBG.addChild(toDaysBGblock)
 
    
    
    /*
    
    //{請假資訊欄位
    
    var dayOffInfoWinBG =  new PIXI.Graphics();
        dayOffInfoWinBG.lineStyle(1, '0xffffff', 1);
        dayOffInfoWinBG.beginFill('0x222222',0.1);
        dayOffInfoWinBG.drawRoundedRect(0,0, 220,490, 2);
        dayOffInfoWinBG.endFill();
        dayOffInfoWinBG.name = 'dayOffInfoWinBG'
        dayOffInfoWinBG.x = 670
        dayOffInfoWinBG.y = 60
        dayOffInfoWinBG.alpha = 0
        parent.addChild(dayOffInfoWinBG)
    
    
    
    
    var showDayOffID = new PIXI.Text('ID', fontStyle);
        showDayOffID.x = 10
        showDayOffID.y = 60
        showDayOffID.name = 'showDayOffID'
        dayOffInfoWinBG.addChild(showDayOffID)
    
    var showDayOffReason = new PIXI.Text('休假原因', fontStyle);
        showDayOffReason.x = 10
        showDayOffReason.y = 90
        showDayOffReason.name = 'showDayOffReason'

        dayOffInfoWinBG.addChild(showDayOffReason)

    
    var showDayOffStartTime = new PIXI.Text('起始時間', fontStyle);
        showDayOffStartTime.x = 10
        showDayOffStartTime.y = 120
        showDayOffStartTime.name = 'showDayOffStartTime'

        dayOffInfoWinBG.addChild(showDayOffStartTime)

    var showDayOffEndTime = new PIXI.Text('結束時間', fontStyle);
        showDayOffEndTime.x = 10
        showDayOffEndTime.y = 150
        showDayOffEndTime.name = 'showDayOffEndTime'

        dayOffInfoWinBG.addChild(showDayOffEndTime)
  
    var showDayOffTotalTime = new PIXI.Text('總休假時數', fontStyle);
        showDayOffTotalTime.x = 10
        showDayOffTotalTime.y = 180
        showDayOffTotalTime.name = 'showDayOffTotalTime'
        dayOffInfoWinBG.addChild(showDayOffTotalTime) 
    
    var delSelDayOffBtn = new buildBtnScaleF(dayOffInfoWinBG,90,350,110,25,6,'Noto Sans TC','300','刪除休假','0xffffff',16,1,'0x333333',1,0,'danger') //'0x67e4aa'

        delSelDayOffBtn.name = 'delSelDayOffBtn'
        delSelDayOffBtn.alpha = 0
    
        delSelDayOffBtn.on('mousedown',function(){//delSelDayOffBtn.alpha = 0;
                                                 // dayOffInfoWinBG.alpha = 0
                                                 
                                                    
                                                var dayOffInfoWinBG = this.parent//parent.parent.parent.getChildByName('dayOffInfoWinBG')
                                                console.log(dayOffInfoWinBG)
                                               // var delSelDayOffBtn = dayOffInfoWinBG.getChildByName('delSelDayOffBtn')
                                                var showDayOffID = dayOffInfoWinBG.getChildByName('showDayOffID')
                                                        console.log(showDayOffID.dayOffID)

                                               // var showDayOffReason = dayOffInfoWinBG.getChildByName('showDayOffReason')
                                               // var showDayOffStartTime = dayOffInfoWinBG.getChildByName('showDayOffStartTime')
                                               // var showDayOffEndTime = dayOffInfoWinBG.getChildByName('showDayOffEndTime')
                                               // var showDayOffTotalTime = dayOffInfoWinBG.getChildByName('showDayOffTotalTime')
                                                  
                                               // console.log(dayOffInfoWinBG)
                                              //  console.log(showDayOffID.text)

                                                     
                                                          //  var delDayOffID = parseInt(showDayOffID.text)
                                                         //   console.log(delDayOffID)
            
                                                            
                                                           $.post("/delSelUserDayOffData", {  
                                                                        'dayOffID':showDayOffID.dayOffID,





                                                                        }, function(data) {
                                                                            console.log(data)

                                                                            var errMsg = data[0]

                                                                     //   var selUserData = data[2]

                                                                            errorMsgInputBox.text = "刪除休假完成"
                                                               
                                                                            //重置休假表
                                                                console.log(defaultUser)
                                                                        getSelUserData(defaultUser)
                                                                    
                                                                       // setTimeout(function(){
                                                                      //     
                                                                      //  }, 1000);     
                                                               
                                                               
                                                               
                                                                           // console.log('刪除休假完成',defaultUser)
                                                                            
                                                                    
                                                                            setTimeout(function(){
                                                                                   var daysSelectWin = uiBaseContainer.getChildByName('daysSelectWin_container')
                                                                                    var openDaysSelectBlock = new buildFromToCalanderA(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose,defaultUser)


                                                                            }, 10000);       
                                                                            
                                                                                
                                                                       // window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));


                                                                        })     
                    
                                                            
                                                            
                                                 
                                                 
                                                 
                                                 
                                                 })
   
   
    */
    
    
    
    //請假資訊欄位}

    
    
    
    
    //var todayTextLabel = new PIXI.Text((selYear + " 年 " + selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
    var fromMonthLabel = new PIXI.Text((selYear + " 年 " + selMonth + " 月 " ), bigFontStyle);

        fromMonthLabel.x = 20
        fromMonthLabel.y = 10
        fromDaysWinBG.addChild(fromMonthLabel)
    
    
    if(selMonth == 12){var toSelYear = selYear +1 }else{
        var toSelYear = selYear  
    }
    console.log(toSelYear)
    
    
    if(selMonth == 11){
        var toSelMonth = 12
        
    }else{
        
       var toSelMonth = (selMonth+1)%12
 
    }
    var toMonthLabel = new PIXI.Text((toSelYear + " 年 " + toSelMonth + " 月 " ), bigFontStyle);

        toMonthLabel.x = 20
        toMonthLabel.y = 10
        toDaysWinBG.addChild(toMonthLabel)
    
    
        // 今天選擇月日
    /*
    var showSelMonthDayLabel = new PIXI.Text(( selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        showSelMonthDayLabel.x = 20
        showSelMonthDayLabel.y = 50
       // fromDaysWinBG.addChild(showSelMonthDayLabel)
    */
        //顯示起始月週日
    var showSundayLabel = new PIXI.Text("日        一        二         三        四         五        六", bigFontStyle);
        showSundayLabel.x = 35
        showSundayLabel.y = 40
        fromDaysWinBG.addChild(showSundayLabel)
        //顯示結束月週日
    var showSundayLabelB = new PIXI.Text("日        一        二         三        四         五        六", bigFontStyle);
        showSundayLabelB.x = 35
        showSundayLabelB.y = 40
        toDaysWinBG.addChild(showSundayLabelB)

    
    
        
    //清除選擇按鈕
    
    var  addUserNewVacationBtn= new buildBtnScaleF(parent,550,30,110,25,6,'Noto Sans TC','300','清除選擇','0xffffff',16,1,'0x333333',1,0,'secondary outline') //'0x67e4aa'

    
        addUserNewVacationBtn.on('mousedown',function(){
                                                       console.log('清除選擇')
                                                        var daysSelectWin = uiBaseContainer.getChildByName('daysSelectWin_container')
                                                       // console.log(daysSelectWin)
                                                       // console.log(daysSelectWin.selYear)
                                                       // console.log(daysSelectWin.selMonth)
                                                       // console.log(daysSelectWin.selDay)
                                                        
                                                       // var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));

                                                        var openDaysSelectBlock = new buildFromToCalanderA(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose,defaultUser)

                                                      // var openDaysSelWin = new buildSelVacDayTimeWinA(550, 150,1,false)    

                                           
                                                        })
   
    

       // daysSelectWin.selYear = selYear
   // daysSelectWin.selMonth = selMonth
   // daysSelectWin.selDay = selDay

    
    
    
    //當月資訊
    var currentMonthDaysCount = new Date(selYear, selMonth, 0).getDate()
    var getSelectFirstDay = new Date(selYear,selMonth -1, 1).getDay() 
    
    //下月資訊
    var nextMonthDaysCount = new Date(toSelYear, toSelMonth, 0).getDate()
    var getNextMonthFirstDay = new Date(toSelYear,toSelMonth -1, 1).getDay() 
    
    //起始日期標籤

    
    var selectFromDayLabel = new PIXI.TextInput({
    input: {
        fontSize: 16,
        padding:'2px',
        width: '630px',
        color:'0x000000',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
    selectFromDayLabel.text = '請假起始日期時間:                                                                           點                分 '
    selectFromDayLabel.x = 60
   // selectFromDayLabel.children[3].pivot.x = -selectFromDayLabel.children[3].width/2 + 100

   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectFromDayLabel.y = 570
    selectFromDayLabel.disabled = true
    
    
    parent.addChild(selectFromDayLabel)  
    
       //結束日期標籤
    var selectEndDayLabel = new PIXI.TextInput({
    input: {
        fontSize: 16,
        padding:'2px',
        width: '630px',
        color:'0x000000',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
    selectEndDayLabel.text = '請假結束日期時間:                                                                           點                分 '
    selectEndDayLabel.x = 60
   // selectFromDayLabel.children[3].pivot.x = -selectFromDayLabel.children[3].width/2 + 100

   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectEndDayLabel.y = 600
    selectEndDayLabel.disabled = true
    
    
    parent.addChild(selectEndDayLabel)   

    //起始日期輸入
    var selectFromDayInputBox = new PIXI.TextInput({
    input: {
        fontSize: 16,
        padding:'2px',
        width: '200px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
            focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
            disabled: {fill: '0x555555', rounded: 5}
        }
    })
    selectFromDayInputBox.text = '起始日期'
    selectFromDayInputBox.x = 230
    selectFromDayInputBox.children[3].pivot.x = -selectFromDayInputBox.children[3].width/2

   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectFromDayInputBox.y = 570
    selectFromDayInputBox.disabled = true
    //結束日期標籤

    var selectEndDayInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '200px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        selectEndDayInputBox.text = '結束日期'
        selectEndDayInputBox.x = 230
        selectEndDayInputBox.children[3].pivot.x = -selectEndDayInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectEndDayInputBox.y = 600
        selectEndDayInputBox.disabled = true

    
    var selectStartTimeInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '60px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        selectStartTimeInputBox.text = 9  // 內定為09:00
        selectStartTimeInputBox.x = 460
        selectStartTimeInputBox.children[3].pivot.x = -selectStartTimeInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectStartTimeInputBox.y = 570
        selectStartTimeInputBox.disabled = true

    var selectEndTimeInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '60px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        selectEndTimeInputBox.text = 18 // 內定為18:00
        selectEndTimeInputBox.x = 460
        selectEndTimeInputBox.children[3].pivot.x = -selectEndTimeInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        selectEndTimeInputBox.y = 600
        selectEndTimeInputBox.disabled = true
    
    var vacDaysReasonInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '570px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0xffffff', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        vacDaysReasonInputBox.text = '請假事由'
        vacDaysReasonInputBox.x = 60
        vacDaysReasonInputBox.children[3].pivot.x = -vacDaysReasonInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        vacDaysReasonInputBox.y = 650

    
    
    
    //總請假日數標籤
    
    /*
    var totalVacDaySLabel = new PIXI.TextInput({
    input: {
        fontSize: 16,
        padding:'2px',
        width: '200px',
        color:'0x000000',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
    totalVacDaySLabel.text = '共計請假日數 :'
    totalVacDaySLabel.x = 280
    totalVacDaySLabel.y = 640
    totalVacDaySLabel.disabled = true
    parent.addChild(totalVacDaySLabel)   
    
        //總請假時數標籤
    var totalVacHoursLabel = new PIXI.TextInput({
    input: {
        fontSize: 16,
        padding:'2px',
        width: '100px',
        color:'0x000000',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
    totalVacHoursLabel.text = '時數 :'
    totalVacHoursLabel.x = 500
    totalVacHoursLabel.y = 640
    totalVacHoursLabel.disabled = true
    parent.addChild(totalVacHoursLabel)   
    
    
    var vacDaysTotalDaysInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '60px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0xffffff', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
    
        vacDaysTotalDaysInputBox.text = '天數'
        vacDaysTotalDaysInputBox.x = 420
        vacDaysTotalDaysInputBox.children[3].pivot.x = -vacDaysTotalDaysInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        vacDaysTotalDaysInputBox.y = 640
    
    vacDaysTotalDaysInputBox.disabled = true

    
    var vacDaysTotalHoursInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '60px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0xffffff', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        vacDaysTotalHoursInputBox.text = '時數'
        vacDaysTotalHoursInputBox.x = 550
        vacDaysTotalHoursInputBox.children[3].pivot.x = -vacDaysTotalHoursInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        vacDaysTotalHoursInputBox.y = 640
    vacDaysTotalHoursInputBox.disabled = true

        
    
    parent.addChild(vacDaysTotalDaysInputBox)   
    parent.addChild(vacDaysTotalHoursInputBox)   

    */
    
    
   var vacDaysStartMinsInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '60px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0xffffff', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        vacDaysStartMinsInputBox.text = 0 // 內定為 00 分
        vacDaysStartMinsInputBox.x = 550
        vacDaysStartMinsInputBox.children[3].pivot.x = -vacDaysStartMinsInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        vacDaysStartMinsInputBox.y = 570
        vacDaysStartMinsInputBox.disabled = true 
        parent.addChild(vacDaysStartMinsInputBox)   

    
    var vacDaysEndMinsInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '60px',
            color:'0xaaaaaa',
        }, 
         box: {
                default: {fill: '0x555555', rounded: 5, stroke: {color: '0x555555', width: 1}},
                focused: {fill: '0xffffff', rounded: 5, stroke: {color: '0x555555', width: 1}},
                disabled: {fill: '0x555555', rounded: 5}
            }
        })
        vacDaysEndMinsInputBox.text = 0// 內定為 00 分
        vacDaysEndMinsInputBox.x = 550
        vacDaysEndMinsInputBox.children[3].pivot.x = -vacDaysEndMinsInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        vacDaysEndMinsInputBox.y = 600
        vacDaysEndMinsInputBox.disabled = true 
        parent.addChild(vacDaysEndMinsInputBox)    
    
    
    
    

   
   
   
   
   
   

    parent.addChild(selectFromDayInputBox)   

    parent.addChild(selectEndDayInputBox)   
    parent.addChild(selectStartTimeInputBox)   
    parent.addChild(selectEndTimeInputBox)   

    parent.addChild(vacDaysReasonInputBox)   


    
    
    
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
            
            var dayBlockColor = '0x888888'
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

       
        
            fromDaysBGblock.addChild(dayBlock)
        
        


        
         
        
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
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.name = "dayBlock_outRange"

                dayBlock.addChild(monthDayLabel)  
            
        }else{
            var monthDayLabel = new PIXI.Text(i - getSelectFirstDay -currentMonthDaysCount+1, bigFontDarkStyle);
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.dayText = i - getSelectFirstDay -currentMonthDaysCount+1
                dayBlock.name = "dayBlock_outRange"

                dayBlock.addChild(monthDayLabel)   
            
            
        }
         
        dayBlock.ms = getSelDayMs(selYear + " 年 "+ selMonth + ' 月 ' + dayBlock.dayText + ' 日 ')
        dayBlock.currentDayStr = toSelYear + " 年 "+ toSelMonth + ' 月 ' + dayBlock.dayText + ' 日 '

       // console.log(dayBlock.ms)
        
        if(selUserDayOffDB == null){
           // console.log('無個人休假紀錄')
        }else{
            if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
                defineDayOffBlock(fromDaysBGblock,dayBlock.ms,selUserDayOffDB,getSelectFirstDay,monthDayLabel,i-getSelectFirstDay+1,blockPosX,blockPosY)
   
            }
           // console.log('定義個人休假區塊',selUserDayOffDB)

        };
         
        //dayBlock.addChild(monthDayLabel)   
        
        dayBlock.on('pointerover', function(){})
                .on('pointerout', function(){})
                .on('mousedown',function(){//this.alpha=0.5;
                                            console.log(this.ms,this.currentDayStr)
                                            var fromDaysBGblock = this.parent
                                            var daysSelectWin_container = fromDaysBGblock.parent.parent

                                            var toDaysWinBG   = daysSelectWin_container.getChildByName('toDaysWinBG')      
                                            var toDaysBGblock   = toDaysWinBG.getChildByName('toDaysBGblock')     
                                            
                                            
                                            var fromDayBlockInMonthDB = fromDaysBGblock.children.filter(function(item, index, array){
                                                          return item.name.slice(0,11) == 'dayBlockDay'

                                                     }); 
                                            var toDayBlockInMonthDB = toDaysBGblock.children.filter(function(item, index, array){
                                                          return item.name.slice(0,11) == 'dayBlockDay'

                                                     }); 
                                              
                                            var fromDayOffBlockInMonthDB = fromDaysBGblock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'dayOffBlockDay_'
                                                                                                                   //  dayBlockDay_
                                                     }); 
            
                                            var toDayBlockOffInMonthDB = toDaysBGblock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'dayOffBlockDay_'

                                                     }); 

            
                                           // console.log(dayBlockInMonthDB)
            
                                            for(var j = 0; j < fromDayOffBlockInMonthDB.length ; j++){
                                                                            
                                                fromDayOffBlockInMonthDB[j].tint = '0xffffff'

                                            };  
            
                                            for(var j = 0; j < toDayBlockOffInMonthDB.length ; j++){
                                                                            
                                                toDayBlockOffInMonthDB[j].tint = '0xffffff'

                                            };     
                       
            
            
                                           
                                            if( daysSelectWin_container.selVarDaysCount == 0){
                                                this.alpha = 0.5      
                                                daysSelectWin_container.selVarDaysCount = 1
                                                daysSelectWin_container.selFirstDayMS = this.ms 
                                                selectFromDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                                selectEndDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '

                                            }else if(daysSelectWin_container.selVarDaysCount > 0){
                                                console.log(this.ms,daysSelectWin_container.selFirstDayMS)

                                               
                                                

                                                if( this.ms > daysSelectWin_container.selFirstDayMS ){
                                                    this.alpha = 0.5      
                                                     selectEndDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                                   var vacDays = ( this.ms -  daysSelectWin_container.selFirstDayMS) /86400000
                                                        for(var k = 0; k < fromDayBlockInMonthDB.length ; k++){

                                                            if(fromDayBlockInMonthDB[k].ms > daysSelectWin_container.selFirstDayMS & fromDayBlockInMonthDB[k].ms < this.ms){


                                                               fromDayBlockInMonthDB[k].alpha = 0.5 
                                                            }else if(fromDayBlockInMonthDB[k].ms >  this.ms)  {

                                                                 fromDayBlockInMonthDB[k].alpha = 1
                                                            }

                                                        };


                                                       for(var k = 0; k < toDayBlockInMonthDB.length ; k++){

                                                                        if(toDayBlockInMonthDB[k].ms > daysSelectWin_container.selFirstDayMS & toDayBlockInMonthDB[k].ms < this.ms){


                                                                           toDayBlockInMonthDB[k].alpha = 0.5 
                                                                        }else if(toDayBlockInMonthDB[k].ms >  this.ms)  {

                                                                             toDayBlockInMonthDB[k].alpha = 1
                                                                        }

                                                        };     

                                                    
                                                    
                                                    
                                                }else{
                                                    
                                                };
                                                   
                                                
      
                                                     
                                            };
            
                                            //console.log(daysSelectWin_container.selVarDaysCount)
                                            

                                           
                                          })
                .on('pointerup', function(){})

        
        
        
    };


    
   //右邊欄位月份日期方塊
   // console.log(nextMonthDaysCount,getNextMonthFirstDay,toSelYear,toSelMonth)
    
    for(var i =0; i<42;i++){
        
        var blockPosX = (i%7)*dayBlockWH
        var blockPosY =  Math.floor(i/7)*dayBlockWH
        if(i%7 == 0 | i%7 == 6){
            
            var dayBlockColor = '0x888888'
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

        
        
            toDaysBGblock.addChild(dayBlock)
        
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
                defineDayOffBlock(toDaysBGblock,dayBlock.ms,selUserDayOffDB,getNextMonthFirstDay,monthDayLabel,i-getNextMonthFirstDay+1,blockPosX,blockPosY)
   
            }
           // console.log('定義個人休假區塊',selUserDayOffDB)

        };
        
        

    
        
            
        dayBlock.on('pointerover', function(){})
                .on('pointerout', function(){})
                .on('mousedown',function(){
                                        
                                            console.log(this.ms,this.currentDayStr)
                                            var toDaysBGblock = this.parent
                                            var daysSelectWin_container = toDaysBGblock.parent.parent
                                            
                                            var fromDaysWinBG   = daysSelectWin_container.getChildByName('fromDaysWinBG')      
                                            var fromDaysBGblock   = fromDaysWinBG.getChildByName('fromDaysBGblock')                                      

                                
                                     

                                            var formdaysWinBlockInMonthDB = fromDaysBGblock.children.filter(function(item, index, array){
                                                          return item.name.slice(0,11) == 'dayBlockDay'

                                                     }); 
                                             
            
                                            var dayBlockInMonthDB = toDaysBGblock.children.filter(function(item, index, array){
                                                          return item.name.slice(0,11) == 'dayBlockDay'

                                                     }); 
            
                                            var fromDayOffBlockInMonthDB = fromDaysBGblock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'dayOffBlockDay_'
                                                                                                                   //  dayBlockDay_
                                                     }); 
            
                                            var toDayBlockOffInMonthDB = toDaysBGblock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'dayOffBlockDay_'

                                                     }); 

            
            
            
            
                                            for(var j = 0; j < fromDayOffBlockInMonthDB.length ; j++){
                                                                            
                                                fromDayOffBlockInMonthDB[j].tint = '0xffffff'

                                            };  
            
                                            for(var j = 0; j < toDayBlockOffInMonthDB.length ; j++){
                                                                            
                                                toDayBlockOffInMonthDB[j].tint = '0xffffff'

                                            };     
            
            
            
                                             //   console.log(daysSelectWin_container)
            
            
            
 
                                          //  console.log(dayBlockInMonthDB)
                                            
                                            if( daysSelectWin_container.selVarDaysCount == 0){
                                                
                                               // console.log('bbbbbbbb')
                                                this.alpha = 0.5      
                                                daysSelectWin_container.selVarDaysCount = 1
                                                daysSelectWin_container.selFirstDayMS = this.ms 
                                                selectFromDayInputBox.text = this.currentDayStr// selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                                selectEndDayInputBox.text = this.currentDayStr//selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '

                                            }else if(daysSelectWin_container.selVarDaysCount > 0){
                                               // console.log('cccccccc')

                                                console.log(this.ms,daysSelectWin_container.selFirstDayMS)

                                                selectEndDayInputBox.text = this.currentDayStr//toSelYear + " 年 "+ toSelMonth + ' 月 ' + this.dayText + ' 日 '
                                                this.alpha = 0.5      

                                                    if( this.ms > daysSelectWin_container.selFirstDayMS ){
                                                        var vacDays = ( this.ms -  daysSelectWin_container.selFirstDayMS) /86400000
                                                            for(var k = 0; k < dayBlockInMonthDB.length ; k++){

                                                                if(dayBlockInMonthDB[k].ms > daysSelectWin_container.selFirstDayMS & dayBlockInMonthDB[k].ms < this.ms){


                                                                   dayBlockInMonthDB[k].alpha = 0.5 
                                                                }else if(dayBlockInMonthDB[k].ms >  this.ms)  {

                                                                     dayBlockInMonthDB[k].alpha = 1
                                                                }

                                                            };
                                                    
                                                           for(var k = 0; k < formdaysWinBlockInMonthDB.length ; k++){
                                                                
                                                                if(formdaysWinBlockInMonthDB[k].ms > daysSelectWin_container.selFirstDayMS & formdaysWinBlockInMonthDB[k].ms < this.ms){


                                                                   formdaysWinBlockInMonthDB[k].alpha = 0.5 
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


    //定義休假日方塊
    function defineDayOffBlock(parent,selDayMs,dayOffDB,selectFirstDay,textLabel,dayText,blockPosX,blockPosY){
                        var selDayStartWorkMs = selDayMs + (9*60*60*1000)
                        var selEndDayWorkMs = selDayMs + (18*60*60*1000)
                        var selDayMs
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
                                
                                 //var dayOffHours = (EndTimeMs - startTimeMs) / (60*60*1000)
                                // var totalDayOffHours = dayOffHours
                                       // console.log(dayOffHours,blockPosX,blockPosY)

                                 
                                                     
                                 var dayOffHours = (EndTimeMs - startTimeMs) / (60*60*1000)
                                 var totalDayOffHours = dayOffHours


                                 
                                    defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours)
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

                                                    
                                                    defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours)


                                            }else if(selDayMs == EndTimeDayOclockMs){
                                                 //  var dayOffHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)

                                               //    console.log('請假天數二日 結束')  
                                                   //  console.log(dayOffHours,blockPosX,blockPosY)
                                                   // defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours)
                                                   
                                                   var dayOffHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)
                                                    var secDayStartTimeMs = selDayMs + 9 * 60*60*1000
                          
                                                    defineDayOffTimeBaseBlock(parent,secDayStartTimeMs,selDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours) 
                                                   

                                                    }

                                    }
                                 
               
                            }else if(crossDays >2){
                                  //  console.log('請假天數三日')   
                                
                                    //(startTimsDayMs +  1 * 60*60*1000)
                                
                                    var totalDayOffHours =((((startTimsDayMs +  1 * 60*60*1000) + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)) + ((EndTimeMs - ((startTimsDayMs +  1 * 60*60*1000) + 86400000*(crossDays-1) + 9 * 60*60*1000) ) / (60*60*1000)) + (9 * (crossDays-2) )

                                
                                    if( selDayMs >= startTimsDayMs & selDayMs <= EndTimsDayMs ){
                                            //  console.log(crossDays,new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))

                                            /*
                                        
                                            // console.log('請假天數二日')  
                                            if( selDayMs == startTimsDayMs ) {
                                                //    console.log('請假天數大於二日 起始')  
                                                    var dayOffHours = (  (selDayMs + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)
                                                   // console.log(dayOffHours,blockPosX,blockPosY)
                                                   defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours)


                                            }else if( selDayMs >( startTimsDayMs + 86400000-1) & selDayMs < EndTimeDayOclockMs ){
                                                
                                                 //   console.log('請假天數大於二日 中間段')  
                                                
                                                    var dayOffHours = 9 
                                                    defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours)

                                                
                                            }else if(selDayMs == EndTimeDayOclockMs){
                                                   var dayOffHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)

                                                //   console.log('請假天數大於二日 結束')  
                                                     //console.log(dayOffHours,blockPosX,blockPosY)
                                                    defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours)

                                            };
                                            */
                                        
                                        
                                            // console.log('請假天數二日')  
                                            if( selDayMs == startTimsDayMs ) {
                                                //    console.log('請假天數大於二日 起始')  
                                                    var dayOffHours = (  (selDayMs + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)
                                                   // console.log(dayOffHours,blockPosX,blockPosY)
                                                   defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours)


                                            }else if( selDayMs >( startTimsDayMs + 86400000-1) & selDayMs < EndTimeDayOclockMs ){
                                                
                                                 //   console.log('請假天數大於二日 中間段')  
                                                
                                                    var dayOffHours = 9 
                                                    
                                                    var midDayStartTimeMs = selDayMs + 9 * 60*60*1000
                                                    defineDayOffTimeBaseBlock(parent,midDayStartTimeMs,selDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours)

                                                
                                            }else if(selDayMs == EndTimeDayOclockMs){
                                                   var dayOffHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)

                                                //   console.log('請假天數大於二日 結束')  
                                                     //console.log(dayOffHours,blockPosX,blockPosY)
                                                    var finalDayStartTimeMs = selDayMs + 9 * 60*60*1000

                                                   defineDayOffTimeBaseBlock(parent,finalDayStartTimeMs,selDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,monthDayLabel,dayOffHours,selDayOffData,totalDayOffHours)

                                            };
                                        
                                        
                                   
                                    
                                    };                           
                                
                            };
                            
                

                    };  


            function defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,selDayText,selDayOffHours,userDayOffData,dayOffTotalHours){
               // console.log(parent,selDayMs,startTimeMs,EndTimeMs,blockPosX,blockPosY)
               // console.log(new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))
                /// console.log(userDayOffData)
                 var dayBlockTimeH = (selDayOffHours/9 )*dayBlockWH
              
                                /*直式
                                var dayOffBlock =  new PIXI.Graphics();   
                             
                
                                dayOffBlock.lineStyle(1, '0xffffff', 0.5);
                                dayOffBlock.beginFill('0xdd8888',1);
                                dayOffBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockTimeH, 2);
                                dayOffBlock.endFill();
                               // dayBlock.name = "dayBlock"
                                dayOffBlock.pivot.y = dayBlockTimeH
                                dayOffBlock.x = blockPosX
                                dayOffBlock.y = blockPosY + dayBlockWH// -dayBlockTimeH
                                */
                
                                //橫式
                                var deltaPosX = ((startTimeMs - (startTimsDayMs + 9 * 60*60*1000))/( 60*60*1000)) * (dayBlockWH/9)
                                 console.log('deltaPosX',deltaPosX)

                                var dayBlockTimeW = (selDayOffHours/9 )*dayBlockWH
                                var dayOffBlock =  new PIXI.Graphics();   
                                dayOffBlock.lineStyle(1, '0xdd8888', 0.7);
                                dayOffBlock.beginFill('0xdd8888',0.5);
                                dayOffBlock.drawRoundedRect(0,0, dayBlockTimeW,dayBlockWH, 2);
                                dayOffBlock.endFill();
                            
                                dayOffBlock.x = blockPosX + deltaPosX
                                dayOffBlock.y = blockPosY// + dayBlockWH

                                
                
                
                
                

                                dayOffBlock.name = "dayOffBlockDay_" + String(i-selectFirstDay+1) 
                                //selDayText.pivot.y =  dayBlockWH - dayBlockTimeH
                                dayOffBlock.isDayOff = true
                                dayOffBlock.dayOffID = userDayOffData[0]
                                dayOffBlock.dayOffUser = userDayOffData[1]
                                dayOffBlock.dayOffReason = userDayOffData[2]
                                dayOffBlock.dayOffStartMs = convertMSB(userDayOffData[3])
                                dayOffBlock.dayOffEndMs =  convertMSB(userDayOffData[4])
                                dayOffBlock.totalDayOffHours =dayOffTotalHours


                                parent.addChild(dayOffBlock)
                
                               // dayOffBlock.addChild(selDayText)
                                dayOffBlock.interactive = true;
                                dayOffBlock.buttonMode = true;    


                                dayOffBlock.on('pointerover', function(){
                   
                                    
                                    
                                                                        
                                                                        })
                                            .on('pointerout', function(){//dayOffInfoWinBG.alpha=0;
                                                                        
                                                                        
                                                                        })
                                            .on('mousedown',function(){this.alpha=0.5;
                                                                       console.log('人員休假資料')
                                                                       
                                                                      //  console.log(this.parent.parent.parent.getChildByName('dayOffInfoWinBG'))
                                                                       
                                                                        var dayOffInfoWinBG = this.parent.parent.parent.getChildByName('dayOffInfoWinBG')
                                                                        var showDayOffID = dayOffInfoWinBG.getChildByName('showDayOffID')
                                                                        
                                                                        var delSelDayOffBtn = dayOffInfoWinBG.getChildByName('delSelDayOffBtn')
                                                                        //var showDayOffID = dayOffInfoWinBG.getChildByName('showDayOffID')
                                                                        var showDayOffReason = dayOffInfoWinBG.getChildByName('showDayOffReason')
                                                                        var showDayOffStartTime = dayOffInfoWinBG.getChildByName('showDayOffStartTime')
                                                                        var showDayOffEndTime = dayOffInfoWinBG.getChildByName('showDayOffEndTime')
                                                                        var showDayOffTotalTime = dayOffInfoWinBG.getChildByName('showDayOffTotalTime')

                                                                        

                                                                        showDayOffID.text = this.dayOffID
                                                                        console.log(this.dayOffID)
                                                                       // console.log(fromDaysBGblock)
                                                                        var fromDayOffBlockInMonthDB = fromDaysBGblock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'dayOffBlockDay_'
                                                                                                                   //  dayBlockDay_
                                                                                 }); 
                                                                        var toDayBlockOffInMonthDB = toDaysBGblock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,15) == 'dayOffBlockDay_'

                                                                                 }); 
                                                                       
                                                                       
                                                                        var formdaysWinBlockInMonthDB = fromDaysBGblock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,11) == 'dayBlockDay'

                                                                                 }); 

                   
                                                                        var dayBlockInMonthDB = toDaysBGblock.children.filter(function(item, index, array){
                                                                                      return item.name.slice(0,11) == 'dayBlockDay'

                                                                                 }); 

                                                                       console.log(formdaysWinBlockInMonthDB)
                                                                         console.log(dayBlockInMonthDB)
                                                                        var selDayOffID = this.dayOffID
                                                                        for(var j = 0; j < fromDayOffBlockInMonthDB.length ; j++){
                                                                            
                                                                                //fromDayOffBlockInMonthDB[j].tint ='0xffffff' 
                                                                             //   console.log()
                                                                                if(fromDayOffBlockInMonthDB[j].dayOffID == selDayOffID) {
                                                                                    console.log('aaaaaaaaaaaaaaaaa')
                                                                                    fromDayOffBlockInMonthDB[j].tint ='0xffaaaa'
                                                                                }else{
                                                                                    fromDayOffBlockInMonthDB[j].tint ='0xffffff'
                                                                                }
                                                                            
                                                                        };


                                                                        for(var j = 0; j < toDayBlockOffInMonthDB.length ; j++){
                                                                            
                                                                              //  toDayBlockOffInMonthDB[j].tint ='0xffffff' 

                                                                                if(toDayBlockOffInMonthDB[j].dayOffID == selDayOffID) {
                                                                                    console.log('bbbbbbbbbbbbbbb')

                                                                                    toDayBlockOffInMonthDB[j].tint ='0xffaaaa'
                                                                                }else{
                                                                                    toDayBlockOffInMonthDB[j].tint ='0xffffff'
                                                                                }
                                                                            

                                                                        };     

                                                                       
                                                                        for(var j = 0; j < formdaysWinBlockInMonthDB.length ; j++){
                                                                            
                                                                 
                                                                                formdaysWinBlockInMonthDB[j].alpha = 1
                                                                            
                                                                        };

                                                                        for(var j = 0; j < dayBlockInMonthDB.length ; j++){
                                                            
                                                                                dayBlockInMonthDB[j].alpha = 1
                                                                            
                                                                        };
                                                                      

                                                                       
                                                                         //   console.log(fromDayOffBlockInMonthDB)

                                                                            showDayOffID.text =this.dayOffID
                                                                            showDayOffID.dayOffID =this.dayOffID

                                                                            showDayOffReason.text = this.dayOffReason
                                                                            showDayOffStartTime.text = this.dayOffStartMs + '  起'
                                                                            showDayOffEndTime.text = this.dayOffEndMs + '  訖'
                                                                            showDayOffTotalTime.text = '總時數 :' + this.totalDayOffHours + '  時'

                                                                            console.log(showDayOffID.dayOffID)

                                                                        dayOffInfoWinBG.alpha = 1
                                                                        delSelDayOffBtn.alpha = 1
                                                                    //    console.log(userSelFilterList) 

                                                 
                                    
                                                                        })
                                            .on('pointerup', function(){this.alpha=1;})

                
            
            };
        
        
        
        
        

        };


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
                        vacDaysStartMinsInputBox.text = this.btnText

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
                        vacDaysEndMinsInputBox.text = this.btnText


                                              })
                    .on('pointerup', function(){
                        //    this.tint ='0xffffff'


                    })


    };
    
    //錯誤訊息
    var errorMsgInputBox = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'2px',
            width: '570px',
            color:'0xffaaaa',
        }, 
         box: {
                default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
                focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
                disabled: {fill: '0x777777', rounded: 5}
            }
        })
       // errorMsgInputBox.text = '請假事由'
        errorMsgInputBox.x = 60
        //errorMsgInputBox.children[3].pivot.x = -vacDaysReasonInputBox.children[3].width/2

       // selectDayInputBox.pivot.y = editBtnInputBox.height/2
        errorMsgInputBox.y = 690
        errorMsgInputBox.name = 'errorMsgInputBox'
        parent.addChild(errorMsgInputBox)
    
   //確認新增      
    
    /*
      
    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
        console.log(userNameInput.text)
    
    
    if(userNameInput.text == '未登入'){
        var loginUserName = '未登入'

    }else{
        var loginUserName = userNameInput.text 

    };
    */
    
    
   // var holidaysConfirmEditBtn = new buildBtnScaleE(daysSelectWin,1180,780,100,30,'確認編輯','primary')
    var selUser_InputBox = new inputBoxWithLabelB(parent,15,35,60,130,3,'人員 :',defaultUser,12,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x555555','center')
      //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        selUser_InputBox.disabled = true
        selUser_InputBox.name = 'selUser_InputBox'
     
       // selUser_InputBox.text = 
    
    
    
    
        selUser_InputBox.interactive = true;
        selUser_InputBox.buttonMode = true;

    
        selUser_InputBox.on('pointerover', function(){this.alpha=0.5;})
                            .on('pointerout', function(){this.alpha=1;})
                            .on('mousedown',function(){this.alpha=0.5;
                           
                                                        
                                                       var winW = 190
                                                       var winH = 600//userNameList.length *25 + 70

                                                        var posX = 800//taskEditWin.position.x + w +5 //+20
                                                        var posY = 150//taskEditWin.position.y 
                                                        console.log('selUser_InputBox',defaultUser)
                                                        var userWorkingDaySel = new openUserVacetionDaySelectWin(uiBaseContainer,posX,posY,winW,winH,userSelFilterList,userData,selUser_InputBox,daysApp,defaultUser,true)
                                           
                                                        })
                            .on('pointerup', function(){this.alpha=1;})

    
    
    
    
    
    
    
    
    
    
    
    
    
    
        var  addUserNewVacationBtn= new buildBtnScaleF(parent,520,720,110,25,6,'Noto Sans TC','300','確認新增','0xffffff',16,1,'0x333333',1,0,'primary') //'0x67e4aa'

    
   
   
             addUserNewVacationBtn.on('mousedown',function(){

                        console.log('確認新增休假')
                        var startDayText = selectFromDayInputBox.text
                        var endDayText = selectEndDayInputBox.text 
                        var startTime = String(selectStartTimeInputBox.text) + ":" +  String(vacDaysStartMinsInputBox.text)
                        var endTime = String(selectEndTimeInputBox.text) + ":" +  String(vacDaysEndMinsInputBox.text)
                        console.log(startDayText,endDayText)

                       // console.log(startTime,endTime)
                       // console.log(getSelDayMs('2022' + " 年 "+ '10' + ' 月 ' +'01' + ' 日 '))

                        var startDayMs = getSelDayMs(startDayText)
                        var endDayMs =  getSelDayMs(endDayText)

                        console.log(startDayMs,endDayMs)

                        if( startDayText == "起始日期" | endDayText == "結束日期"){

                            errorMsgInputBox.text = "請選擇起始日期/結束日期"

                        }else {

                           // Date.parse(startDayText)
                            var startTimeDate =   new Date(String(startDayText.split(" ")[2])+',' +String( startDayText.split(" ")[4])+','+ String(startDayText.split(" ")[0])  + " " + startTime)

                            var EndTimeDate =   new Date(String(endDayText.split(" ")[2])+',' +String( endDayText.split(" ")[4])+','+ String(endDayText.split(" ")[0])  + " " + endTime)


                            var startTimeMs = startTimeDate.valueOf()
                            var endTimeMs = EndTimeDate.valueOf()


                            if( startTimeMs > endTimeMs){
                                errorMsgInputBox.text = "請假 起始時間晚於結束時間 "


                            }else if( selUser_InputBox.text == '未登入'){
                                errorMsgInputBox.text = "請假 請選擇人員 "
                                console.log(selUser_InputBox.text)
                            }else{

                                errorMsgInputBox.text = "輸入完成"

                                $.post("/addUserDayOff", {   //runAllAutoEvents

                                        'user':selUser_InputBox.text,
                                        'start_ms' :startTimeMs,
                                        'end_ms' :endTimeMs,
                                        'reason' :vacDaysReasonInputBox.text,
                                       // 'type' :type,


                                   // 'current_proj' :parseInt(projSearchIndex)

                                }, function(data) {
                                        console.log(data)
                                        var errMsg = data[0]//"overlapping day off"
                                                   // projState.text = data[1][0]
                                                   // return_enName.text = data[1][1]
                                        var userName = data[7]

                                        if( errMsg == "overlapping day off"){

                                            errorMsgInputBox.text = "請假區間重疊"

                                        }else if(errMsg == "add day off done"){
                                            
                                            errorMsgInputBox.text = "新增休假完成"
                                            getSelUserData(userName)

                                            console.log('清除選擇')
                                            
                                            setTimeout(function(){
                                                   var daysSelectWin = uiBaseContainer.getChildByName('daysSelectWin_container')
                                                    var openDaysSelectBlock = new buildFromToCalanderA(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose,userName)


                                            }, 500); 

                                         

                                        }else if(errMsg == "overlapping with holidays"){
                                            
                                            errorMsgInputBox.text = "與假日重疊"
                                                 
                                        }else if(errMsg == "overlapping with weekend days"){
                                            
                                            errorMsgInputBox.text = "與週六日重疊"
                                                 
                                        }else{

                                            errorMsgInputBox.text =errMsg
                                            
                                            
                                            
                                        };

                                        
                                    
                                        
                                    
                                    
                                }); 

                            };

                    };
        

            });

    
    return fromDaysWinBG
};













