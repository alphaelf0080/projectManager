// 人員編輯視窗
//
//
//
function buildSelectUserEditWin(parent,x,y,w,h,scale){   
    //buildUserEditWin
    console.log('buildSelectUserEditWin')

    parent.removeChild(parent.getChildByName("userEditWin_container"))
    var userEditWin = new moveAbleWinBlock(uiBaseContainer,x,y,w,h,'個人資訊編輯',20,20,14,'0xffffff','userEditWin_container',1,'0x555555',5,'0x777777',1,0,'0x555555',daysApp,screenW,screenH,true)

    var  addUserVacationBtn= new buildBtnScaleF(userEditWin,15,40,110,25,6,'Noto Sans TC','300','出缺勤','0xffffff',16,1,'0x333333',1,0,'0x4f6b7b') //'0x67e4aa'

    var  addUserInfoEditBtn= new buildBtnScaleF(userEditWin,15,75,110,25,6,'Noto Sans TC','300','資訊編輯','0xffffff',16,1,'0x333333',1,0,'0x4f6b7b') //'0x67e4aa'

    var  userWorkingTimeListBtn= new buildBtnScaleF(userEditWin,15,110,110,25,6,'Noto Sans TC','300','工時清單','0xffffff',16,1,'0x333333',1,0,'0x9f6b7b') //'0x67e4aa'

   
        addUserVacationBtn.on('mousedown', function(){
                             
                        console.log('addUserVacationBtn')
            

                        var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                        
                        if(userNameInput.text == '未登入'){
                            var loginUserName = '未登入'
                           // changeURLBtn.alpha = 0
                        }else if( userNameInput.text == 'alpha'   ){

                            // addUrlChangeBtn()
                            var loginUserName = userNameInput.text 


                         }else{
                            var loginUserName = userNameInput.text 

                        };

                           
                      //  var loginUserName =   userNameInput.text    
                        var buildUserVactionWin = new setUserVactionWin(uiBaseContainer,210,40,1300,830,1,loginUserName,false)

        });
    

   
        userWorkingTimeListBtn.on('mousedown', function(){
                
                        console.log('開啟工時列表')
                
                        var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                        if(userNameInput.text == '未登入'){
                           // getUserWorkingTimeDB(userNameInput.text)
                            errMsgBox.text = "請先登入"
                                userWorkingTimeListWinA(uiBaseContainer,80,40,1400,800,userNameInput.text)

                        }else if(
                          //  getUserWorkingTimeDB(userNameInput.text)
                                userWorkingTimeListWinA(uiBaseContainer,80,40,1400,800,userNameInput.text)
                        );
                        
                      //  console.log(userNameInput.text)
            

                        /*
          
            
                        */
            
                
            })
    
    
    
    
    
};




function setUserVactionWin(parent,x,y,w,h,scale,userName,autoClose){  //點選個人資訊 出缺勤後跳出視窗
  //  
    //console.log(selYear)
   // console.log(allWorkingRangeDays)
   // console.log(allFinishRangeDays)
   // console.log(allSubmitRangeDays)
    console.log(userName)


    var userData = JSON.parse(window.localStorage.getItem("userData"));

    var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));


  //  console.log(selUserDayOffDB)
    

    
    parent.removeChild(parent.getChildByName("setHolidayWin_container"))
    var allHolidaysDB = JSON.parse(window.localStorage.getItem("allHolidaysDB"));
    //console.log(allHolidaysDB)
    var daysSelectWin = new moveAbleWinBlockD(uiBaseContainer,x,y,w,h,'設定個人出缺勤總表',20,20,14,'0xffffff','daysSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
                             // moveAbleWinBlockC(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn
    daysSelectWin.name = 'setHolidayWin_container'
    daysSelectWin.scale.set(scale)
    //var daysSelectWinBlock = 

  //  console.log( new Date(2021, 2, 0).getDate())
    // buildDaysWinBlock(parent,x,y,w,h,selYear,selMonth,selDay,selWeekDay,blockScale){
    /*
    var holidaySetInputBox = new inputBoxWithLabel(daysSelectWin,990,60 ,100,170,2,'新增休假 :','',12,'0xffffff','0xFFFFFF',2,'0xaaaaaa',0.1,'0x777777')
        holidaySetInputBox.name = 'holidaySetInputBox'
        holidaySetInputBox.disabled = true
    
    var holidayDescBox = new inputBoxWithLabel(daysSelectWin,990,90 ,600,170,2,'時數 :','',12,'0xffffff','0xFFFFFF',2,'0xaaaaaa',0.1,'0x777777')
        holidayDescBox.name = 'holidayDescBox'
        holidayDescBox.disabled = true
    */    
   // var holidayDescInputBox = new inputBoxWithLabel(daysSelectWin,990,120 ,100,170,2,'休假由 :','',12,'0xffffff','0xaaaaaa',2,'0x333333',0.1,'0x333333')
   //     holidayDescInputBox.name = 'holidayDescInputBox'

   // var holidaysConfirmEditBtn = new buildBtnScaleE(daysSelectWin,1180,780,100,30,'確認編輯','primary')

   
    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
        console.log(userNameInput.text)
    if(userNameInput.text == '未登入'){
        var loginUserName = '未登入'
        
      //  var selUserDayOffDB =  []
   //     window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));  // 設定未登入休假資料
        
       // userName  = '未登入'

    }else{
        var loginUserName = userNameInput.text 

    };
    
    
    
    
   // var holidaysConfirmEditBtn = new buildBtnScaleE(daysSelectWin,1180,780,100,30,'確認編輯','primary')
    var selUser_InputBox = new inputBoxWithLabelB(daysSelectWin,30,32,60,130,3,'人員 :',loginUserName,12,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x334646','center')
      //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        selUser_InputBox.disabled = true
        selUser_InputBox.name = 'selUser_InputBox'
    
    
   
        selUser_InputBox.interactive = true;
        selUser_InputBox.buttonMode = true;
        selUser_InputBox.text = userName
    
        selUser_InputBox.on('pointerover', function(){this.alpha=0.5;})
                            .on('pointerout', function(){this.alpha=1;})
                            .on('mousedown',function(){this.alpha=0.5;
                                                       console.log('出缺勤編輯人員選擇')
                                                        
                                                    //    console.log(userData)
                                                       
                                                     //   console.log(userSelFilterList) 
                                                        
                                                       var winW = 190
                                                       var winH = 600
                                                     
                                                        var posX = 450
                                                        var posY = 80
                                 
                                                        
                                                        
                                                        var userWorkingDaySel = new openUserVacetionDaySelectFromTotalWin(uiBaseContainer,posX,posY,winW,winH,userSelFilterList,userData,selUser_InputBox,daysApp,loginUserName,false)
                                                        
                                                        //console.log(this.text)
                                                        })
                            .on('pointerup', function(){this.alpha=1;})

 
    
    
    
    
    

   // console.log(selUser_InputBox.text)

   var  addUserNewVacationBtn= new buildBtnScaleF(daysSelectWin,1020,50,110,25,6,'Noto Sans TC','300','新增休假','0xffffff',16,1,'0x333333',1,0,'primary') //'0x67e4aa'
 
        addUserNewVacationBtn.on('mousedown',function(){this.alpha=0.5;
                                                        console.log('選擇起始日期',selUser_InputBox.text)

                                                        if(selUser_InputBox.text == "未登入"){
                                                            var selUserDayOffDB =  []
                                                            window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));  // 設定未登入休假資料
                                                        }else{
                                                            console.log('已登入',selUser_InputBox.text)
                                                            getSelUserData(selUser_InputBox.text)
    
                                                        }
                                                        
                                                        
                                                        
                                                      
                                                        setTimeout(function(){ var openDaysSelWin = new buildSelVacDayTimeWinA(500, 70,1,false,selUser_InputBox.text)     }, 500); 
                                           
                                                       })
   

    
    
  var  addMassUserNewVacationBtn= new buildBtnScaleF(daysSelectWin,1020,790,110,25,6,'Noto Sans TC','300','快速新增休假','0xffffff',16,1,'0x333333',1,0,'danger') //'0x67e4aa'

       addMassUserNewVacationBtn.on('mousedown',function(){this.alpha=0.5;
                                                        console.log('renewMassUserDayOff')
                                                           
                                                   
                                                           $('#publishModal').modal('show');

                                          
                
                                                           
                                                           
                                                           /*
                                                        if(selUser_InputBox.text == "未登入"){
                                                            var selUserDayOffDB =  []
                                                            window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));  // 設定未登入休假資料
                                                        }else{
                                                            console.log('已登入',selUser_InputBox.text)
                                                            getSelUserData(selUser_InputBox.text)
    
                                                        }
                                                        
                                                        
                                                        */
                                                      
                                                       // setTimeout(function(){ var openDaysSelWin = new buildSelVacDayTimeWinA(500, 70,1,false,selUser_InputBox.text)     }, 500); 
                                           
                                                        })
   
   
  // var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,1055, 305,startDay_InputBox,0.7,true)

   
   
   
   
   
   
   
   
   
   
   
   
    
    var dayDate = new Date()
    
    var schYear = dayDate.getFullYear()
    var selMonth = dayDate.getMonth()
    var selDay = dayDate.getDate()

    daysSelectWin.selYear = schYear
  //  daysSelectWin.selMonth = selMonth
 //   daysSelectWin.selDay = selDay

    
   // console.log(selYear,selMonth,selDay)
    
    var startMonth = 1//selMonth +1

    var currentYearHolidaysDB = allHolidaysDB.filter(function(item, index, array){
          return item[1] == schYear

     }); 
     // console.log(currentYearHolidaysDB)      
   
    var canWinBG =  new PIXI.Graphics(); //asset 主視窗
        canWinBG.lineStyle(1, '0xffffff', 1);
        canWinBG.beginFill('0x222222',0.3);
        canWinBG.drawRoundedRect(0,0, w-330,h-60, 2);
        canWinBG.endFill();
        canWinBG.name = 'canWinBG'
    
        canWinBG.x =5
        canWinBG.y = 55

        daysSelectWin.addChild(canWinBG)

    var canWinBGContainer = new PIXI.Container()
        canWinBGContainer.name = "canWinBG_Container"
        daysSelectWin.addChild(canWinBGContainer)
        canWinBGContainer.x = 5
        canWinBGContainer.y = -3
    
    
    for(var i = 0 ; i < 12; i++){
        var schMonth = i+1

        var schWinScale = 0.6
     //   var openDaysSelectBlock = new buildDaysWinBlockMonthB(canWinBGContainer,(i%4)*400*schWinScale+5,Math.floor(i/4)*420*schWinScale+60,selYear,schMonth,selDay,schWinScale,false)
        var openDaysSelectBlock = new buildDaysWinBlockMonthB(canWinBGContainer,(i%4)*400*schWinScale+5,Math.floor(i/4)*420*schWinScale+60,schYear,schMonth,selDay,currentYearHolidaysDB,schWinScale,selUserDayOffDB,false,userName)

    };
    
    
    var pageUpCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 25,
        padding:'0px',
        width: '30px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
    
    pageUpCtrBtnBox.text = '＜'
    pageUpCtrBtnBox.x = 380
    
    pageUpCtrBtnBox.children[3].pivot.x = 5
    pageUpCtrBtnBox.y = 26
    pageUpCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageUpCtrBtnBox)   
    daysSelectWin.startMonth = startMonth
    daysSelectWin.startYear = schYear

    var pageDownCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 25,
        padding:'0px',
        width: '30px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
    
    
    
    
    
    
    pageDownCtrBtnBox.text = '＞'
    pageDownCtrBtnBox.x = 520
    
    pageDownCtrBtnBox.children[3].pivot.x = 5
    pageDownCtrBtnBox.y = 26
    pageDownCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageDownCtrBtnBox)   
    
    
    
    var currentYearText = new PIXI.TextInput({
    input: {
        fontSize: 22,
        padding:'0px',
        width: '300px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
        currentYearText.name = 'currentYearText'
        currentYearText.text =  loginUserName + " " + daysSelectWin.selYear + ' 年假日 '
        currentYearText.x = 700

       // currentYearText.children[3].pivot.x = 5
        currentYearText.y = 30
        currentYearText.disabled =true
        daysSelectWin.addChild(currentYearText)   

    
    
    
    pageUpCtrBtnBox.interactive = true;
    pageUpCtrBtnBox.buttonMode = true;
    pageUpCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
   
                   .on('mousedown',function(){this.alpha=0.5;
                                                console.log('pageUpCtrBtnBox')
                                       
                                                    var daysSelectWin = this.parent

                                                    daysSelectWin.removeChild(daysSelectWin.getChildByName("canWinBG_Container"))
                                                    var canWinBGContainer = new PIXI.Container()
                                                        canWinBGContainer.name = "canWinBG_Container"
                                                        daysSelectWin.addChild(canWinBGContainer)
                                                        canWinBGContainer.x = 5
                                                        canWinBGContainer.y = -3
                                                    var selDay = dayDate.getDate()

                                                   var currentStartYear = daysSelectWin.startYear
                                                   var schYear = currentStartYear - 1
                                                   daysSelectWin.startYear = schYear 
                                                   var schMonth = i+1
                                                    var schWinScale = 0.6
                                                    console.log(schYear)
                                                    currentYearText.text =  schYear  + ' 年假日 '
                                              

                                                    var currentYearHolidaysDB = allHolidaysDB.filter(function(item, index, array){
                                                          return item[1] == schYear

                                                     }); 

                                              

                                                    for(var i = 0 ; i < 12; i++){
                                                   
                                                        var schMonth = i+1
                                                       
                                         
                                                        var schWinScale = 0.6
                                                        //console.log(schYear,schMonth,selDay)
                                                        var openDaysSelectBlock = new buildDaysWinBlockMonthB(canWinBGContainer,(i%4)*400*schWinScale+5,Math.floor(i/4)*420*schWinScale+60,schYear,schMonth,selDay,currentYearHolidaysDB,schWinScale,selUserDayOffDB,false,userName)

                                         


                                                    };

                        
                                            
                                             })
    
                    .on('pointerup', function(){this.alpha=1;})
    
    pageDownCtrBtnBox.interactive = true;
    pageDownCtrBtnBox.buttonMode = true;
    pageDownCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                     .on('pointerout', function(){this.alpha=1;})
                     .on('mousedown',function(){this.alpha=0.5;
                                                    console.log('pageDownCtrBtnBox___2')

                                                    var daysSelectWin = this.parent

                                                        daysSelectWin.removeChild(daysSelectWin.getChildByName("canWinBG_Container"))
                                                    var canWinBGContainer = new PIXI.Container()
                                                        canWinBGContainer.name = "canWinBG_Container"
                                                        daysSelectWin.addChild(canWinBGContainer)
                                                        canWinBGContainer.x = 5
                                                        canWinBGContainer.y = -3                  

                                                    var selDay = dayDate.getDate()


                                                    var schYear = daysSelectWin.startYear +1 
                                                    currentYearText.text =  schYear  + ' 年假日 '

                                                     daysSelectWin.startYear = schYear
                                                   // console.log(schYear)
                                                   
                                                    var currentYearHolidaysDB = allHolidaysDB.filter(function(item, index, array){
                                                          return item[1] == schYear

                                                     }); 


                                                   for(var i = 0 ; i < 12; i++){
                                                   
                                                       var schMonth = i+1
                                                       
                                         
                                                        var schWinScale = 0.6
                                                        console.log(schYear,schMonth,selDay)
                                                        var openDaysSelectBlock = new buildDaysWinBlockMonthB(canWinBGContainer,(i%4)*400*schWinScale+5,Math.floor(i/4)*420*schWinScale+60,schYear,schMonth,selDay,currentYearHolidaysDB,schWinScale,selUserDayOffDB,false,userName)

                                         


                                                        };
                                                    
                                                        console.log(this.parent)   

                                            })
    
    
    
    
                     .on('pointerup', function(){this.alpha=1;})
    
    
    

   // return openDaysSelectBlock
};



// 全年休假標註
function buildDaysWinBlockMonthB(parent,x,y,selYear,selMonth,selDay,holidaysDB,blockScale,selUserDayOffDB,autoClose,defaultUser){
  //  parent.removeChild(parent.getChildByName("daysWinBG"))
   // var daysSelectWin = uiBaseContainer.getChildByName("daysSelectWin_container")
  //  var holidaySetInputBox = daysSelectWin.getChildByName("holidaySetInputBox")
  //  var holidayDescInputBox = daysSelectWin.getChildByName("holidayDescInputBox")
   // console.log(holidaySetInputBox)
  //  console.log(holidayDescInputBox)

    console.log(defaultUser)
   // console.log(allReadyRangeDays)
   // console.log(allWorkingRangeDays)
   // console.log(allFinishRangeDays)
   // console.log(allSubmitRangeDays)
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
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
    
    var bigFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
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
        fontFamily: '微軟正黑體',
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
    
    

 //   var currentWeekDayString = weekday[selWeekDay];
  
    
   // console.log(currentMonthString,currentWeekDayString)
    
    var daysWinBG =  new PIXI.Graphics();
        daysWinBG.lineStyle(1, '0xffffff', 1);
        daysWinBG.beginFill('0x222222',1);
        daysWinBG.drawRoundedRect(0,0, 400,420, 2);
        daysWinBG.endFill();
        daysWinBG.name = 'daysWinBG'

        daysWinBG.x = x
        daysWinBG.y = y
        daysWinBG.alpha = 1
        parent.addChild(daysWinBG)
        daysWinBG.scale.set(blockScale)
    
    
    
    
    var allDaysBlock = new PIXI.Graphics(); 
        allDaysBlock.lineStyle(1, '0x444444', 1);
        allDaysBlock.beginFill('0x222222',1);
        allDaysBlock.drawRoundedRect(0,0, 350,300, 1);
        allDaysBlock.endFill();
        allDaysBlock.name = 'daysWinBG'
        allDaysBlock.x = 20
        allDaysBlock.y = 100
        allDaysBlock.alpha = 1
    
        allDaysBlock.monthString = currentMonthString

        daysWinBG.addChild(allDaysBlock)
       // 今天日期顯示
        
    
    var dayBlockWH = 50
 
    var todayTextLabel = new PIXI.Text((selYear + " 年 " + selMonth + " 月 " ), bigFontStyle);
        todayTextLabel.x = 20
        todayTextLabel.y = 20
        daysWinBG.addChild(todayTextLabel)
        // 今天選擇月日
    var showSelMonthDayLabel = new PIXI.Text(( selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        showSelMonthDayLabel.x = 20
        showSelMonthDayLabel.y = 50
     //   daysWinBG.addChild(showSelMonthDayLabel)
    
        //顯示週日
    var showSundayLabel = new PIXI.Text("日", bigFontStyle);
        showSundayLabel.x = 45
        showSundayLabel.y = 80
        daysWinBG.addChild(showSundayLabel)
    
    var showMondayLabel = new PIXI.Text("一", bigFontStyle);
        showMondayLabel.x = 45 + dayBlockWH *1
        showMondayLabel.y = 80
        daysWinBG.addChild(showMondayLabel)  
    
    var showTuesdayLabel = new PIXI.Text("二", bigFontStyle);
        showTuesdayLabel.x = 45 + dayBlockWH *2
        showTuesdayLabel.y = 80
        daysWinBG.addChild(showTuesdayLabel)  
    
    var showWednesdayLabel = new PIXI.Text("三", bigFontStyle);
        showWednesdayLabel.x = 45 + dayBlockWH *3
        showWednesdayLabel.y = 80
        daysWinBG.addChild(showWednesdayLabel)  
    
    
    var showThursdayLabel = new PIXI.Text("四", bigFontStyle);
        showThursdayLabel.x = 45 + dayBlockWH *4
        showThursdayLabel.y = 80
        daysWinBG.addChild(showThursdayLabel)  
    
    var showFridayLabel = new PIXI.Text("五", bigFontStyle);
        showFridayLabel.x = 45 + dayBlockWH *5
        showFridayLabel.y = 80
        daysWinBG.addChild(showFridayLabel)  
    
    var showSaturdayLabel = new PIXI.Text("六", bigFontStyle);
        showSaturdayLabel.x = 45 + dayBlockWH *6
        showSaturdayLabel.y = 80
        daysWinBG.addChild(showSaturdayLabel)   
    
    
    
    var currentMonthDaysCount = new Date(selYear, selMonth, 0).getDate()
    var getSelectFirstDay = new Date(selYear,selMonth -1, 1).getDay() 
    
    var selectBlockTintColor = '0x0000ff'


    
    
    if( selMonth == 1){
            var lastMonth = 12 ; var lastMonthDaysCount =  new Date(selYear, 12, 0).getDate() 
        }else{
            var lastMonth = selMonth -1;
            var lastMonthDaysCount =  new Date(selYear, lastMonth, 0).getDate() 
    };
    
    
    
 //   console.log(currentMonthDaysCount,lastMonth,lastMonthDaysCount,getSelectFirstDay)
    
    
    for(var i =0; i<42;i++){
        var monthDayLabel = new PIXI.Text(i-getSelectFirstDay+1, bigFontStyle);

       // console.log(selYear,selMonth,monthDayLabel.text)
        var selDayMs = new Date(selYear,selMonth-1,monthDayLabel.text).valueOf();  
        

        var selHolidaysDB = holidaysDB.filter(function(item, index, array){
             return parseInt(item[2]) == selDayMs
              
        }); 
        
       // console.log(defaultUser)

        

        
        
        
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            if( i%7 == 0 |i%7 == 6 ){
                 var dayBlockColor = '0x555555'  

            }else{
                 var dayBlockColor = '0x333333'  
   
                
            }
        
            
        
            dayBlock.beginFill(dayBlockColor,1);
        
            dayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
            dayBlock.endFill();
            dayBlock.x = (i%7)*dayBlockWH
            dayBlock.y = Math.floor(i/7)*dayBlockWH

          // dayBlock.tint = '0xffffff'
        
            allDaysBlock.addChild(dayBlock)
        
        

        
        
        if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
            monthDayLabel.x = 20
            monthDayLabel.y =20
            dayBlock.dayText = i-getSelectFirstDay+1

            dayBlock.addChild(monthDayLabel)  
            dayBlock.currentMonth = true
            
            if(selHolidaysDB.length == 1){
            
                
                // dayBlock.tint = selectBlockTintColor
                
                // define holiday block
                
                
                
                var holidayBlock =  new PIXI.Graphics();   
                    holidayBlock.lineStyle(1, '0xffffff', 0.5);
                    holidayBlock.beginFill('0x555555',1);

                    holidayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
                    holidayBlock.endFill();
                    holidayBlock.x = (i%7)*dayBlockWH
                    holidayBlock.y = Math.floor(i/7)*dayBlockWH

                    allDaysBlock.addChild(holidayBlock)  

                    holidayBlock.addChild(monthDayLabel)  

                // define holiday block end
                
                
                
            }else{

                 dayBlock.tint = '0xffffff'

            }; 

        
        var selHolidayDB = selHolidaysDB[0]
          
        if(selHolidayDB == undefined ){
            var holidayID = 'none'
            var holidayDesc = 'none'

        }else{
            
            var holidayID = selHolidayDB[0]
            var holidayDesc = selHolidayDB[4]

        }
            dayBlock.holidayID =    holidayID 
            dayBlock.holidayDesc =    holidayDesc 

          //  console.log(holidayID)
          
    
            
        }else if(i<getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(lastMonthDaysCount-(getSelectFirstDay-i)+1, bigFontDarkStyle);
                dayBlock.dayText = lastMonthDaysCount-(getSelectFirstDay-i)+1
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.addChild(monthDayLabel)  
                dayBlock.currentMonth = false

        }else{
            var monthDayLabel = new PIXI.Text(i - getSelectFirstDay -currentMonthDaysCount+1, bigFontDarkStyle);
                monthDayLabel.x = 20
                monthDayLabel.y =20
            dayBlock.dayText = i - getSelectFirstDay -currentMonthDaysCount+1

                dayBlock.addChild(monthDayLabel)   
                dayBlock.currentMonth = false

            
        }
        dayBlock.selDayMs = selDayMs
        
        if(selUserDayOffDB == null | defaultUser == "none"){
           // console.log('無個人休假紀錄')
        }else{
           
           // console.log('讀取個人休假紀錄',allDaysBlock,selUserDayOffDB)
            
            var blockPosX = (i%7)*dayBlockWH
            var blockPosY =  Math.floor(i/7)*dayBlockWH
            //console.log(defaultUser)
            //console.log(dayBlock.currentMonth)

            if(dayBlock.currentMonth == true){
                
                if(defaultUser == "未登入"){
                    
                }else{
                    defineDayOffBlock(allDaysBlock,selUserDayOffDB,selDayMs,monthDayLabel,dayBlock,blockPosX,blockPosY)  //定義個人休假
   
                }
                

            } 
            
            
        }
 
        
    
       // dayBlock.interactive = true;
       // dayBlock.buttonMode = true;    
        
        
        
        dayBlock.on('pointerover', function(){this.alpha=0.5;
                          
                                            
                                              
                                            //  if( this.holidayDesc  == undefined | this.holidayDesc  == 'none' ){holidayDescBox.text = ''}else{ holidayDescBox.text = this.holidayDesc}
                                              
                                              
                                             
                                             })
                .on('pointerout', function(){this.alpha=1;})
                .on('mousedown',function(){this.alpha=0.5;
                                           // selectDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            parent.selYear = selYear;
                                            parent.selMonth = selMonth;
                                            parent.selDay = this.dayText
                                            console.log(selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 ')
             
                                            var selDayString  = new Date(this.selDayMs).toLocaleString()
                                           // console.log(selDayString,this.tint,this.currentMonth)
                                            if(this.tint == '0xffffff'){
                                                
                                              //  this.tint = '0x00ffff'   
                                                
                                            }else{
                                                
                                              //  this.tint = '0xffffff'
                                            };
                                            
                                            

                                           
                                           
                                          })
                .on('pointerup', function(){this.alpha=1;})

        
        
        
    };
            
        function defineDayOffBlock(parent,dayOffDB,selDayMs,dayLabel,dayBlock,blockPosX,blockPosY){
            
               // console.log('defineDayOffBlock',dayOffDB,selDayMs)
            //    console.log(parent.monthString)
            
                /* 
                var startTimeMs = dayOffDB[j][3]
                var startTimsDayMs = (Math.floor(startTimeMs/86400000))*86400000 - 8 * 60*60*1000
                var EndTimeMs = dayOffDB[j][4]
                var EndTimeDayOclockMs = (Math.floor(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000
                var EndTimsDayMs = (Math.ceil(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000 -1
                var crossDays = Math.ceil((EndTimsDayMs -startTimsDayMs) / 86400000)    
                var selDayOffData = dayOffDB[j]
                */
               // var blockPosX = (i%7)*dayBlockWH
               // var blockPosY =  Math.floor(i/7)*dayBlockWH

            
                for(var j = 0; j < dayOffDB.length ; j ++){
               // console.log('aaaa')
                    
                var startTimeMs = dayOffDB[j][3]    //休假起始時間MS
                var EndTimeMs = dayOffDB[j][4]      //休假結束時間MS
                var startTimsDayMs = (Math.floor(startTimeMs/86400000))*86400000 - 8 * 60*60*1000   //休假起始當日 0 點
                var EndTimeDayOclockMs = (Math.floor(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000 //休假結束當日 0 點
                var EndTimsDayMs = (Math.ceil(EndTimeMs/86400000))*86400000 - 8 * 60*60*1000 -1   //休假結束當日 23:59:59 
                var crossDays = Math.ceil((EndTimsDayMs -startTimsDayMs) / 86400000)   
                var selDayOffData = dayOffDB[j]

               // console.log(startTimeMs,EndTimeMs,startTimsDayMs,EndTimeDayOclockMs,EndTimsDayMs,crossDays)
                    

    
                    
                if( crossDays == 1 & selDayMs == startTimsDayMs){
                      console.log('請假天數一日') 
                    
                 
                    
                     var dayOffHours = (EndTimeMs - startTimeMs) / (60*60*1000)
                     var totalDayOffHours = dayOffHours
                          //  console.log(dayOffHours,blockPosX,blockPosY)
                     
                        defineTotalDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,dayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,dayBlock)
                  //  defineDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,selDayText)  

                    


                }else if(crossDays == 2 ){
                 //   console.log('請假天數二日')  
                      
                        if( selDayMs >= startTimsDayMs & selDayMs <= EndTimsDayMs ){
                                //  console.log(crossDays,new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))

                                // console.log('請假天數二日')  
                                var totalDayOffHours =((((startTimsDayMs +  1 * 60*60*1000)  + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)) + (( EndTimeMs - ((startTimsDayMs +  1 * 60*60*1000)+(86400000) + 9 * 60*60*1000) ) / (60*60*1000))



                                if( selDayMs == startTimsDayMs ) {
                                        console.log('請假天數二日 起始')  
                                        var dayOffHours = (  (selDayMs + 18 * 60*60*1000) - startTimeMs) / (60*60*1000)
                                        console.log(dayOffHours,blockPosX,blockPosY)
                                       defineTotalDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,dayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,dayBlock)
                                      //defineTotalDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,dayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,dayBlock)


                                }else if(selDayMs == EndTimeDayOclockMs){
                                       var dayOffHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)

                                        console.log('請假天數二日 結束')  
                                         console.log(dayOffHours,blockPosX,blockPosY)
                                         defineTotalDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,dayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,dayBlock)


                                        }

                        }
                        

                }else if(crossDays >2){
              //      console.log('請假天數三日')   
                    
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
                                         defineTotalDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,dayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,dayBlock)


                                }else if( selDayMs >( startTimsDayMs + 86400000-1) & selDayMs < EndTimeDayOclockMs ){

                                     //   console.log('請假天數大於二日 中間段')  

                                        var dayOffHours = 9 
                                         defineTotalDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,dayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,dayBlock)


                                }else if(selDayMs == EndTimeDayOclockMs){
                                       var dayOffHours = ( EndTimeMs - (selDayMs + 9 * 60*60*1000) ) / (60*60*1000)

                                    //   console.log('請假天數大於二日 結束')  
                                         //console.log(dayOffHours,blockPosX,blockPosY)
                                         defineTotalDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,blockPosX,blockPosY,EndTimsDayMs,dayLabel,dayOffHours,selDayOffData,totalDayOffHours,dayBlockWH,dayBlock)

                                }

                        }                             
                        
                };   

                    
                /*    

                if( selDayMs >= dayOffDB[j][3] & selDayMs <= dayOffDB[j][4]){

                 //   console.log('假日',selDayMs)  

                    var dayOffBlock =  new PIXI.Graphics();   
                        dayOffBlock.lineStyle(1, '0xffaaaa', 0.5);

                        dayOffBlock.beginFill('0xffaaaa',1);

                        dayOffBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
                        dayOffBlock.endFill();
                        dayOffBlock.x = (i%7)*dayBlockWH
                        dayOffBlock.y = Math.floor(i/7)*dayBlockWH

                      // dayBlock.tint = '0xffffff'

                        parent.addChild(dayOffBlock)

                        dayOffBlock.interactive = true;
                        dayOffBlock.buttonMode = true;    



                }else{


                      //  dayBlock.interactive = true;
                      //  dayBlock.buttonMode = true;    



                };  

                */
                    
                    
                    
                    
                    
            };  

            
            
        };

    
    return daysWinBG
};

function defineTotalDayOffTimeBaseBlock(parent,startTimeMs,startTimsDayMs,EndTimeMs,posX,posY,EndTimsDayMs,selDayText,selDayOffHours,userDayOffData,dayOffTotalHours,dayBlockWH,dayBlock){
            console.log(posX,posY)
           // console.log(new Date(selDayMs),new Date(startTimeMs),new Date(startTimsDayMs),new Date(EndTimeMs),new Date(EndTimsDayMs))
            /// console.log(userDayOffData)
             var dayBlockTimeH = (selDayOffHours/9 )*dayBlockWH
             
             if(selDayOffHours >= 9){
                dayOffBlockAlpha = 0.5 
             }else{
                dayOffBlockAlpha = 0.3 
 
             };
             
             
             var dayOffBlock =  new PIXI.Graphics();   
                    dayOffBlock.lineStyle(1, '0xffffff', 0);
                    dayOffBlock.beginFill('0xdd8888',dayOffBlockAlpha);
                    dayOffBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockTimeH, 2);
                   // dayOffBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);

                    dayOffBlock.endFill();
                   // dayBlock.name = "dayBlock"
                    dayOffBlock.pivot.y = -dayBlockWH+dayBlockTimeH
                  //  dayOffBlock.x = posX
                 //   dayOffBlock.y = posY //+ dayBlockWH// -dayBlockTimeH

                          //  dayOffBlock.name = "dayOffBlockDay_" + String(i-selectFirstDay+1) 
                            /*
    
                            selDayText.pivot.y =  dayBlockWH - dayBlockTimeH
                            dayOffBlock.isDayOff = true
                            dayOffBlock.dayOffID = userDayOffData[0]
                            dayOffBlock.dayOffUser = userDayOffData[1]
                            dayOffBlock.dayOffReason = userDayOffData[2]
                            dayOffBlock.dayOffStartMs = convertMSB(userDayOffData[3])
                            dayOffBlock.dayOffEndMs =  convertMSB(userDayOffData[4])
                            dayOffBlock.totalDayOffHours =dayOffTotalHours
                            */

          //  console.log(selDayText.pivot.y)
                          // dayBlock.tint = '0xffffff'
                            dayBlock.addChild(dayOffBlock)
                          //  selDayText.y = -20 +dayBlockWH //-dayBlockTimeH//-20//+ dayBlockWH -dayBlockTimeH

                          
                            //console.log(parent.parent.parent)

                            

        };
        
// 人員編輯win    
function buildAllUserEditWin(parent,x,y,w,h,scale){   
    //buildUserEditWin
    var countPrePage = 20
    
    var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    var userData = JSON.parse(window.localStorage.getItem("userData"));
    var userSearchFilter = JSON.parse(window.localStorage.getItem("userSearchFilter"));

    var userCount = userData.length
    var totalUserPages =  Math.ceil(userCount / countPrePage)
    //console.log('deptData',userData,userCount)
    parent.removeChild(parent.getChildByName("allUserEditWin_container"))
    //allUserEditWin
    var allUserEditWin = new moveAbleWinBlock(uiBaseContainer,x,y,w,h,'人員編輯',20,20,14,'0xffffff','allUserEditWin_container',1,'0x555555',5,'0x777777',1,1,'0x555555',daysApp,screenW,screenH,true)
    allUserEditWin.scale.set(scale)
     //simpleBlock(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,borderWidth,borderColor,borderRect,fillColor,borderAlpha,fillAlpha,blockName){

    var userSelFilterWin = new  simpleBlock(allUserEditWin,5,33,allUserEditWin.width-5,30,'labelText',20,20,14,'0xffffff',1,'0x454545',5,'0x454545',0,0,'userSelFilterWin')
    
   
    
    
    //顯示所有user
    var allUserFilterBtn = new buildBtnScaleC(userSelFilterWin, 0 , 0 , 80,20,6 ,'ALL' ,'0xffffff',11,1,'0x333333',1,0,'0x4c6272')

        allUserFilterBtn.on('mousedown', function(){
          
            pressFilterBtn(this)
        allUserFilterBtn.filterKey = 'all'

            
            
        });
    
    
    
    //新增所有user
    var  addNewUserBtn= new buildBtnScaleC(userSelFilterWin,allUserEditWin.width-105, 0,90,20,6,'新 增 帳 號','0x111111',12,1,'0x333333',1,0,'0x67e4aa')
        addNewUserBtn.on('mousedown', function(){
                console.log('新增帳號')
       // var newUserAddWin = new moveAbleWinBlock(uiBaseContainer,userEditWin.width + userEditWin.x,30,300,600,'新 增 帳 號',20,20,14,'0xffffff','newUserAddWin_container',1,'0x555555',5,'0x777777',1,1,'0x555555',daysApp,screenW,screenH,true)
        var allUserEditWin = new buildUserDetialEditWin(uiBaseContainer,925,40,this,'selUserData','add')
                
        
        });
    
    
    
    var searchFilterCount = userSearchFilter.length
    
    for(var i = 0 ; i< searchFilterCount ; i++){
        
        //console.log(userSearchFilter[i])  
        var searchFilterName = userSearchFilter[i]
        var userSearchFilterBtn = new buildBtnScaleC(userSelFilterWin, i*50 +90 , 0 , 60,20,6 ,searchFilterName ,'0xffffff',11,1,'0x333333',1,0,'0x3c5262')
            userSearchFilterBtn.filterKey = searchFilterName
                    console.log('人員選擇過濾',searchFilterName)

            userSearchFilterBtn.on('mousedown', function(){
                pressFilterBtn(this)



            });

        
                                     //buildBtnScaleC(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type)
    };
    
    
    function pressFilterBtn(btn){
        console.log('pressFilterBtn',btn)  
        var serarchKey = btn.filterKey
        console.log(serarchKey)  
        
        if(serarchKey == "all"){
            var userEditMainWin = new buildUserEditMainWin(allUserEditWin,daysApp,5,90,895,795,30,30,'0x333333','0x555555','0x777777','0xffffff',14,userData)     

            
        }else{
              var filterUserData = userData.filter(function(item, index, array){
                      return item[38] == serarchKey
              });     
            
            console.log(filterUserData)  
        
   
        
            var userEditMainWin = new buildUserEditMainWin(allUserEditWin,daysApp,5,90,895,795,30,30,'0x333333','0x555555','0x777777','0xffffff',14,filterUserData)     
        };
         
         
          var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                if(userNameInput.text == '未登入'){
                    var loginUserName = 'none'
                }else{
                    var loginUserName = userNameInput.text 
                        $.post("/renewUserFav", {   //runAllAutoEvents
                            'userName':loginUserName,
                            'mode' :'selUserGrp',
                            'selUserGrp' :serarchKey,

                            
                            
                       // 'current_proj' :parseInt(projSearchIndex)

                        }, function(data) {
                            console.log(data)

                                       // projState.text = data[1][0]
                                       // return_enName.text = data[1][1]


                    
                    
                    
                        }); 
        
            };
                console.log(loginUserName)




        
    };
    
    
    var userListLabel_name = new buildBtnScaleC(allUserEditWin,5,60,120,25,2,'人 員 名 稱','0xffffff',13,1,'0x333333',1,1,'0x565656')
    var userListLabel_Sec = new buildBtnScaleC(allUserEditWin,126,60,120,25,2,'所 屬 單 位','0xffffff',13,1,'0x333333',1,1,'0x565656')
    var userListLabel_Role = new buildBtnScaleC(allUserEditWin,246,60,120,25,2,'擔 任 工 作','0xffffff',13,1,'0x333333',1,1,'0x565656')
    var userListLabel_Desc = new buildBtnScaleC(allUserEditWin,366,60,200,25,2,'人 員 描 述','0xffffff',13,1,'0x333333',1,1,'0x565656')
    var userListLabel_Hire_Day = new buildBtnScaleC(allUserEditWin,566,60,150,25,2,'到 職 日 期','0xffffff',13,1,'0x333333',1,1,'0x565656')
    var userListLabel_LayOff_day = new buildBtnScaleC(allUserEditWin,716,60,150,25,2,'離 職 日 期','0xffffff',13,1,'0x333333',1,1,'0x565656')

   // var userListLabel_SearchKey = new buildBtnScaleC(userEditWin,566,60,150,25,2,'搜 尋 過 濾','0xffffff',13,1,'0x333333',1,1,'0x565656')


    //buildUserEditMainWin(parent,selApp,x,y,w,h,unit_W,unit_H,mainBlockColor,nameBGColor,secBGColor,fontColor,fontSize)
    var userEditMainWin = new buildUserEditMainWin(allUserEditWin,daysApp,5,90,895,795,30,30,'0x333333','0x555555','0x777777','0xffffff',14,userData)
    

    
    
    
    
                                                           
                                            

};
//人員編輯主視窗
function buildUserEditMainWin(parent,selApp,x,y,w,h,unit_W,unit_H,mainBlockColor,nameBGColor,secBGColor,fontColor,fontSize,userDataList){
    parent.removeChild(parent.getChildByName("mainBlock"))
 
    console.log('buildUserEditMainWin') 
    var userCount = userDataList.length
    /*
    var optionSelBlock =   new PIXI.Graphics();   // 主要顯示視窗
        optionSelBlock.lineStyle(1, '0xffffff', 0);
        optionSelBlock.beginFill(mainBlockColor,1);
        optionSelBlock.drawRoundedRect(0,0,parent.width-30,90, 3);
        optionSelBlock.endFill();
        optionSelBlock.name = 'optionSelBlock'
        optionSelBlock.x = 10

        optionSelBlock.y = 40
        optionSelBlock.alpha = 1
    
        parent.addChild(optionSelBlock)
    
    */
    var mainBlock =   new PIXI.Graphics();   // 主要顯示視窗
        mainBlock.lineStyle(1, '0xffffff', 0);
        mainBlock.beginFill(mainBlockColor,1);
        mainBlock.drawRoundedRect(0,0,parent.width-15,parent.height-90 - 56, 3);
        mainBlock.endFill();
        mainBlock.name = 'mainBlock'
        mainBlock.x = x

        mainBlock.y = y
        mainBlock.alpha = 1
    
        parent.addChild(mainBlock)
    
    
    
     //buildBtnScaleC(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type)
    

    

    var dragBlockHeight = userCount * unit_H
    

    
    var mainDragAreaBlock =  new PIXI.Graphics();   // 主要顯示視窗區域
        mainDragAreaBlock.lineStyle(1, '0xffffff', 0);
        mainDragAreaBlock.beginFill('0x774455',0.0);
        mainDragAreaBlock.drawRoundedRect(0,0,parent.width-30,dragBlockHeight, 1);
        mainDragAreaBlock.endFill();
        mainDragAreaBlock.name = 'mainDragAreaBlock'
        mainDragAreaBlock.x = 0

        mainDragAreaBlock.y = 0
        mainDragAreaBlock.alpha = 1
    
        mainBlock.addChild(mainDragAreaBlock)
    
    
        
    var mainBlockMask =   new PIXI.Graphics();   // 主要顯示視窗
        mainBlockMask.lineStyle(1, '0xffffff', 0);
        mainBlockMask.beginFill('0xff0000',1);
        mainBlockMask.drawRoundedRect(0,0,1010,unit_H * 24, 3);
        mainBlockMask.endFill();
        mainBlockMask.name = 'mainBlock'
        mainBlockMask.x = 0

        mainBlockMask.y = 0
        mainBlockMask.alpha = 1
    
        mainBlock.addChild(mainBlockMask)
    
    
        mainDragAreaBlock.mask = mainBlockMask
    
    
    
    
    
    
    var userNameInputBoxWidth = 120
   
    for(var i = 0 ; i < userCount ; i++ ){
        
       // console.log(userDataList[i])
        
        if(i%2 == 0){
            var blockBGColorA = '0x333333'
            var blockBGColorB = '0x444444'

        }else{
            var blockBGColorA = '0x454545'
            var blockBGColorB = '0x565656'

        }
        
        var userName = userDataList[i][2]
        
        var userNameInputBox = new PIXI.TextInput({
            input: {
                fontSize: fontSize,
                padding:'5px',
                width: String(userNameInputBoxWidth) + 'px',
                color:'0xffffff',
            }, 
             box: {
                    default: {fill: '0x555555', rounded: 2, stroke: {color: '0x333333', width: 1}},
                    focused: {fill: '0x999999', rounded: 2, stroke: {color: '0x999999', width: 1}},
                    disabled: {fill: blockBGColorA, rounded: 0}
                }
            });
            mainDragAreaBlock.addChild(userNameInputBox)
            userNameInputBox.y = unit_H * i
            userNameInputBox.text = userName
            userNameInputBox.disabled = true   
            userNameInputBox.children[3].pivot.x = + userNameInputBox.children[3].width/2 - userNameInputBoxWidth/2
        

            userNameInputBox.interactive = true;
            userNameInputBox.buttonMode = true;
            userNameInputBox.searchID = userDataList[i][0]
            userNameInputBox.userName = userDataList[i][2]
            userNameInputBox.searchKey = userDataList[i][38]

            userNameInputBox.on('pointerover', function(){//pageCtnLIconOL.tint="0xffffff";
                                            //  pageCtnLIconOL.alpha =1;
                                              this.alpha = 0.5

                                                        })
                    .on('pointerout', function(){
                                          //  pageCtnLIconOL.alpha =0;
                                            this.alpha = 1
                                                    })
                    .on('pointerup', function(){
                                           // pageCtnLIconOL.alpha =0;
                                            this.alpha = 1
                                                  })

        
        
                    .on('mousedown', function(){
                        console.log('點選user1',this.searchID,this.userName)   
                            var searchID = this.searchID
                            var userName = this.userName
                       // console.log(userEditWin.posX,userEditWin.posY)

                       // var editUserDetialWinBlockPosX = mainDragAreaBlock.posX + mainDragAreaBlock.width
                       // var editUserDetialWinBlockPosY = mainDragAreaBlock.posY //+ userEditWin.height
                                $.post("/getUserDataFromDB", {  
                                                        'searchID':searchID,
                                                        'userName':userName,

                                                    }, function(data) {
                                                        console.log(data)
                                                        var errMsg = data[0]
                                                       // var searchID = data[1]
                                                       // var userName = data[2]
                                                        var selUserData = data[3]
                                                     //   console.log(data)
                                                        //allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays
                                                        
                                                        var allReadyRangeDays = data[5]
                                                        var allWorkingRangeDays = data[6]
                                                        var allFinishRangeDays = data[7]
                                                        var allSubmitRangeDays = data[8]
                                                        var userDayOffDB =  data[11]
                                                          //  if(errMsg == 'the same name'){
                                                          //      errMsgBox.text = '專案名稱重複'
                                                          //  }else{
                                                            //    errMsgBox.text = '【' + projName + '】'+ ' 專案新增完成'

                                                           // }
                                                        var userEditWin = new buildUserDetialEditWin(uiBaseContainer,925,40,this,selUserData,'edit')
                                                        
                                                        //顯示現有工作日 
                                                        var userWorkingDaysWin = new buildDaysSelWinD(uiBaseContainer,1230,40,500,820,1,'alpha',allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,userDayOffDB,false) //pixiUI_layout

                                                        
                                                        
                                                        
                                                        }) 
                
                                /*
                                  $.post("/getUserWorkingDaysFromDB", {  
                            
                                         }, function(data) {       
                                      
                                      
                                      
                                      
                                    }) ;
                
                                */
                            //addNewProjectTODB
                        });
            
                
                      

    
                        
        
        

        var userDescInputBox = new PIXI.TextInput({
            input: {
                fontSize: fontSize,
                padding:'5px',
                width: String(userNameInputBoxWidth*2-42) + 'px',
                color:'0xffffff',
            }, 
             box: {
                    default: {fill: '0x5555aa', rounded: 2, stroke: {color: '0x333333', width: 1}},
                    focused: {fill: '0x999999', rounded: 2, stroke: {color: '0x999999', width: 1}},
                    disabled: {fill:blockBGColorB, rounded: 0}
                }
            });
            mainDragAreaBlock.addChild(userDescInputBox)
            userDescInputBox.x =362
            userDescInputBox.y = unit_H * i 
            userDescInputBox.text = userDataList[i][30]
            userDescInputBox.disabled = true   
            userDescInputBox.children[3].pivot.x = + userDescInputBox.children[3].width/2 - userNameInputBoxWidth/2
        
    
            
        var userSecInputBox = new PIXI.TextInput({
            input: {
                fontSize: fontSize,
                padding:'5px',
                width: String(userNameInputBoxWidth) + 'px',
                color:'0xffffff',
            }, 
             box: {
                    default: {fill: '0x5555aa', rounded: 2, stroke: {color: '0x333333', width: 1}},
                    focused: {fill: '0x999999', rounded: 2, stroke: {color: '0x999999', width: 1}},
                    disabled: {fill:blockBGColorB, rounded: 0}
                }
            });
            mainDragAreaBlock.addChild(userSecInputBox)
            userSecInputBox.x =120
            userSecInputBox.y = unit_H * i 
            userSecInputBox.text = userDataList[i][3]
            userSecInputBox.disabled = true   
            userSecInputBox.children[3].pivot.x = + userSecInputBox.children[3].width/2 - userNameInputBoxWidth/2    
        
        
                   
        var userRoleIputBox = new PIXI.TextInput({
            input: {
                fontSize: fontSize,
                padding:'5px',
                width: String(userNameInputBoxWidth) + 'px',
                color:'0xffffff',
            }, 
             box: {
                    default: {fill: '0x5555aa', rounded: 2, stroke: {color: '0x333333', width: 1}},
                    focused: {fill: '0x999999', rounded: 2, stroke: {color: '0x999999', width: 1}},
                    disabled: {fill:blockBGColorB, rounded: 0}
                }
            });
            mainDragAreaBlock.addChild(userRoleIputBox)
            userRoleIputBox.x =241
            userRoleIputBox.y = unit_H * i 
            userRoleIputBox.text = userDataList[i][29]
            userRoleIputBox.disabled = true   
            userRoleIputBox.children[3].pivot.x = + userRoleIputBox.children[3].width/2 - userNameInputBoxWidth/2    
        
        
                         
        var userSelFilterIputBox = new PIXI.TextInput({
            input: {
                fontSize: fontSize,
                padding:'5px',
                width: String(userNameInputBoxWidth+28) + 'px',
                color:'0xffffff',
            }, 
             box: {
                    default: {fill: '0x5555aa', rounded: 2, stroke: {color: '0x333333', width: 1}},
                    focused: {fill: '0x999999', rounded: 2, stroke: {color: '0x999999', width: 1}},
                    disabled: {fill:blockBGColorB, rounded: 0}
                }
            });
           // mainDragAreaBlock.addChild(userSelFilterIputBox)
            userSelFilterIputBox.x =562
            userSelFilterIputBox.y = unit_H * i 
            userSelFilterIputBox.text = userDataList[i][38]
            userSelFilterIputBox.disabled = true   
            userSelFilterIputBox.children[3].pivot.x = + userSelFilterIputBox.children[3].width/2 - userNameInputBoxWidth/2      
       // console.log(convertMS_ToYMD_String(parseInt(userDataList[i][41])))
       // console.log(userDataList[i][41])

        if(userDataList[i][41] == null | userDataList[i][41] == "none" | userDataList[i][41] == "NaN"){
           // console.log('aaaaaaaaaaaaaaaaaaa')
            var user_hireDay_text = ''
        }else{
          //  console.log('bbbbbbbbbbbbbbbbbbb')

            var user_hireDay_text = convertMS_ToYMD_String(parseInt(userDataList[i][41]))
        };
        
        if(userDataList[i][42] == null | userDataList[i][42] == "none" | userDataList[i][42] == "NaN"){
           // console.log('aaaaaaaaaaaaaaaaaaa')
            var user_layOffDay_text = ''
        }else{
          //  console.log('bbbbbbbbbbbbbbbbbbb')

            var user_layOffDay_text = convertMS_ToYMD_String(parseInt(userDataList[i][42]))
        }
        
        
        var user_hireDay = new PIXI.TextInput({
            input: {
                fontSize: fontSize,
                padding:'5px',
                width: String(userNameInputBoxWidth+28) + 'px',
                color:'0xffffff',
            }, 
             box: {
                    default: {fill: '0x5555aa', rounded: 2, stroke: {color: '0x333333', width: 1}},
                    focused: {fill: '0x999999', rounded: 2, stroke: {color: '0x999999', width: 1}},
                    disabled: {fill:blockBGColorB, rounded: 0}
                }
            });
            mainDragAreaBlock.addChild(user_hireDay)
            user_hireDay.x =561
            user_hireDay.y = unit_H * i 
            user_hireDay.text = user_hireDay_text//'2015/01/01'// userDataList[i][38]
            user_hireDay.disabled = true   
            user_hireDay.children[3].pivot.x = + user_hireDay.children[3].width/2 - (userNameInputBoxWidth+28)/2      
         
        var user_dayOff = new PIXI.TextInput({
            input: {
                fontSize: fontSize,
                padding:'5px',
                width: String(userNameInputBoxWidth+28) + 'px',
                color:'0xffffff',
            }, 
             box: {
                    default: {fill: '0x5555aa', rounded: 2, stroke: {color: '0x333333', width: 1}},
                    focused: {fill: '0x999999', rounded: 2, stroke: {color: '0x999999', width: 1}},
                    disabled: {fill:blockBGColorB, rounded: 0}
                }
            });
            mainDragAreaBlock.addChild(user_dayOff)
            user_dayOff.x =711
            user_dayOff.y = unit_H * i 
            user_dayOff.text =  user_layOffDay_text
            user_dayOff.disabled = true   
            user_dayOff.children[3].pivot.x = + user_dayOff.children[3].width/2 - (userNameInputBoxWidth+28)/2        
        
    };
    

    
    
    
    
  //  mainDragAreaBlock.buttonMode = true;
    
    if(userCount >= 24){
        mainDragAreaBlock.interactive = true; 
    }else{}
    

    mainDragAreaBlock
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
    
    
    var dragAreaHeight = 710
    
    
    function onDragStart(event) {
        this.data = event.data;
        this.dragging = true;
        
        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;


        this.startPosY = this.y
        this.startPivotY = this.pivot.y


        this.mouseStartPosY = mouseposition.y


    }

    function onDragEnd() {

        this.alpha = 1;
        this.dragging = false;
        this.data = null;


        
        
        if( this.pivot.y < 0){
                   // this.pivot.x = this.startPivotX + (mouseposition.x -this.mouseStartPosX)  
                  //  console.log('aaaaaaaaa')
                    this.pivot.y = 0
                   // mainDragAreaBlock.pivot.y = 0

                  //  daysInfoBlockBGWin.pivot.x = 0
        }else if(this.pivot.y > (this.height - dragAreaHeight)){
                 //   console.log('dragAreaHeight',dragAreaHeight)
                  //  console.log('bbbbbbbb',this.pivot.y,this.height,dayBGH*projectCount)

                    this.pivot.y = this.height - dragAreaHeight

                  //  mainDragAreaBlock.pivot.y =this.height - dragAreaHeight


        }
        
  
    };
    
    function onDragMove() {
       
        if (this.dragging) {
           // console.log('onDragMove')
           // const newPosition = this.data.getLocalPosition(this.parent);
            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;


                if( this.pivot.y < 0){
                    this.pivot.y = 0
                   // console.log('up')

                  //  projLabelBlockWin.pivot.y = 0
                    
                    
                }else if(this.pivot.y > (this.height - dragAreaHeight)){
                    //console.log('down')
                    
                    this.pivot.y =this.height - dragAreaHeight//dayBGH*projectCount

        
                }else{
                   // this.pivot.x = this.startPivotX + (mouseposition.x -this.mouseStartPosX)  
                   this.pivot.y = this.startPivotY + (mouseposition.y -this.mouseStartPosY)   
                 //  projLabelBlockWin.pivot.y = this.startPivotY + (mouseposition.y -this.mouseStartPosY)   
                  // projDurationTextBlockWin.pivot.y = this.startPivotY + (mouseposition.y -this.mouseStartPosY)   

                  // daysInfoBlockBGWin.pivot.x = this.startPivotX + (mouseposition.x -this.mouseStartPosX)   

                }
                
        
        }
        
    }; 
    
   
        
};





// 建立 user 編輯視窗     
function buildUserDetialEditWin(parent,x,y,selBtn,userData,mode){
   // console.log(selBtn.searchID,selBtn.userName)
    //var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    parent.removeChild(parent.getChildByName("userDetialWin_container"))

    
    var jobPositionList = JSON.parse(window.localStorage.getItem("jobPositionDB"));
    
    var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    var userSearchFilter = JSON.parse(window.localStorage.getItem("userSearchFilter"));

    console.log(userData)
    var inputBoxFontSize = 11
    
    var inputBoxGap = 30
    

    console.log(userData[42])
    
    if(mode == 'edit'){
        var userName = userData[2]
        var userSearchID = userData[0]
        var userSec = userData[3]

        var editWinLabelText = userName    + ' 人員資訊' 
        var userPW = userData[9]
        var userRole = userData[29]
        var userDesc = userData[30]
        var userSelFilter = userData[38]
        
        if(userData[41] == null | userData[41] == "none" | userData[41] == "NaN"){
           // console.log('aaaaaaaaaaaaaaaaaaa')
            var user_hireDay = ''
        }else{
          //  console.log('bbbbbbbbbbbbbbbbbbb')

            var user_hireDay = convertMS_ToYMD_String(parseInt(userData[41]))
        };
        
        if(userData[42] == null | userData[42] == "none" | userData[42] == "NaN"){
           // console.log('aaaaaaaaaaaaaaaaaaa')
            var user_layOffDay = ''
        }else{
          //  console.log('bbbbbbbbbbbbbbbbbbb')

            var user_layOffDay = convertMS_ToYMD_String(parseInt(userData[42]))
        }
        
        
        
        
       // var user_hireDay = userData[41]
      //  var user_layOffDay = userData[42]

        
    }else if(mode == 'add'){
        var userName = '人員ID'
        var userSearchID = 'none'
        var userSec = '人員所屬部門/組別'
        var editWinLabelText =' 新增人員資訊'
        var userPW = '1234'
        var userRole = '擔任職務/工作'
        var userDesc = '人員描述'
        var userSelFilter = '過濾字'
        var user_hireDay = '到職日期'
        var user_layOffDay = '離職日期'
        
    }
    
    
    

    var editUserDetialWinBlock = new moveAbleWinBlock(parent,x,y,300,820,editWinLabelText,10,10,14,'0xffffff','userDetialWin_container',3,'0x445566',5,'0x555555',1,0.5,'0x445566',daysApp,screenW,screenH,true) 
                            //inputBoxWithLabel(parent,x,y,boxX,inputBoxW,fontPadding,labelText,inputText,fontSize,labelTextColor,inputTextColor,boxRound,strokeColor,strokeWidth,fillColor)

    
    var selUserSearchIDBox = new inputBoxWithLabel(editUserDetialWinBlock,10,inputBoxGap + 20,100,150,2,'User SN :',userSearchID,inputBoxFontSize,'0xaaaaaa','0xaaaaaa',2,'0x333333',0.1,'0x333333')
    selUserSearchIDBox.disabled = true
    
    var selUserNameBox = new inputBoxWithLabel(editUserDetialWinBlock,10,inputBoxGap*2 +20,100,150,2,'User ID :',userName,inputBoxFontSize,'0xaaaaaa','0xaaaaaa',2,'0x333333',0.1,'0x333333')
    var selUserPSBox = new inputBoxWithLabel(editUserDetialWinBlock,10,inputBoxGap*3 +20,100,150,2,'密 碼 :',userPW,inputBoxFontSize,'0xaaaaaa','0xaaaaaa',2,'0x333333',0.1,'0x333333')

    var selUserSecBox = new inputBoxWithLabel(editUserDetialWinBlock,10,inputBoxGap*4 +20,100,150,2,'組 別 :',userSec,inputBoxFontSize,'0xaaaaaa','0xaaaaaa',2,'0x333333',0.1,'0x333333')
 
   // var selUserSecRoleDBEditBtn = new  dbEditBtnWithIcon(editUserDetialWinBlock,selUserSecBox.width +130,inputBoxGap*4 + 28 ,'0xabcdef','0x123456',1)
  
    
        selUserSecBox.disabled = true
        selUserSecBox.interactive = true;   // BTN
        selUserSecBox.buttonMode = true;
            selUserSecBox.on('mousedown', function(){
                           // var openSecSelWin  = new buildSelectionWinC(uiBaseContainer,1210,30,600,800,'部 門 / 組 別 ',deptData,selUserSecBox)
                            
                          //  var openDaysSelWin = new buildDaysSelWinC(uiBaseContainer,1055, 305,0.7,deptData,true)
                            var winW = 180
                            var winH = deptData.length *25 + 70
                            
                            var userOptionSelWin = new moveAbleWinBlockC(uiBaseContainer,930,40,winW,winH,'組 別 ',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                            
                            var openSelFilterOptionWin = new buildOptionSelectWinA(userOptionSelWin,10,10,winW,winH,'組 別',deptData,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,selUserSecBox,true,false)
                                        //            buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,800,'選擇主美',chiefArtistList,chiefArtistSel_inputBox)
                            })
    
    var selUserRoleBox = new inputBoxWithLabel(editUserDetialWinBlock,10,inputBoxGap*5 +20,100,150,2,'職 務 類 型 :',userRole,inputBoxFontSize,'0xaaaaaa','0xaaaaaa',2,'0x333333',0.1,'0x333333')

    //var selUserRoleDBEditBtn = new  dbEditBtnWithIcon(editUserDetialWinBlock,selUserRoleBox.width +130,inputBoxGap*5 + 28 ,'0xabcdef','0x123456',1)

            selUserRoleBox.disabled = true
        selUserRoleBox.interactive = true;   // BTN
        selUserRoleBox.buttonMode = true;
            selUserRoleBox.on('mousedown', function(){
         //   var openUserRoleSelWin  = new buildSelectionWinC(uiBaseContainer,1210,30,600,800,'工 作 職 務',jobPositionList,selUserRoleBox)
                            var winW = 180
                            var winH = jobPositionList.length *25 + 70
                            
                            var userOptionSelWin = new moveAbleWinBlockC(uiBaseContainer,930,40,winW,winH,'職 務 類 型 ',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                            
                            var openSelFilterOptionWin = new buildOptionSelectWinA(userOptionSelWin,10,10,winW,winH,'職 務 類 型 ',jobPositionList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,selUserRoleBox,true,false)
            
            
            
                            })
    
    
   // var selSecOptionBtnGrp = new buildOptionGrpBtn(editUserDetialWinBlock,20,inputBoxGap*4+20,'組 別 名 稱 :',deptData,100,3,100,selBtn.userGrp,11,9,'0xaaaaaa','0xcccccc')
    //console.log(selSecOptionBtnGrp)
    var selUserDescBox = new inputBoxWithLabel(editUserDetialWinBlock,10,inputBoxGap*6 +20,100,150,2,'人 員 描 述 :',userDesc,inputBoxFontSize,'0xaaaaaa','0xaaaaaa',2,'0x333333',0.1,'0x333333')

    
        
    var selUserFilterBox = new inputBoxWithLabel(editUserDetialWinBlock,10,inputBoxGap*7 +20,100,150,2,'搜 尋 過 濾 :',userSelFilter,inputBoxFontSize,'0xaaaaaa','0xaaaaaa',2,'0x333333',0.1,'0x333333')

   // var selFilterDBEditBtn = new  dbEditBtnWithIcon(editUserDetialWinBlock,selUserFilterBox.width +130,inputBoxGap*7 + 28 ,'0xabcdef','0x123456',1)


    
        selUserFilterBox.disabled = true
        selUserFilterBox.interactive = true;   // BTN
        selUserFilterBox.buttonMode = true;
            selUserFilterBox.on('mousedown', function(){
         //   var openUserRoleSelWin  = new buildSelectionWinC(uiBaseContainer,1210,30,600,800,'工 作 職 務',jobPositionList,selUserRoleBox)
                           // var filterList =['GA','GD','GP','TA','AU','WEB','IM']                                     

                            var winW = 180
                            var winH = userSearchFilter.length *25 + 70
                            
                            var userOptionSelWin = new moveAbleWinBlockC(uiBaseContainer,930,40,winW,winH,'搜 尋 過 濾 ',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                            
                            var openSelFilterOptionWin = new buildOptionSelectWinA(userOptionSelWin,10,10,winW,winH,'搜 尋 過 濾 ',userSearchFilter,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,selUserFilterBox,true,false)
            
            
            
                            })
    
    var selUser_hireDay = new inputBoxWithLabel(editUserDetialWinBlock,10,inputBoxGap*8 +20,100,150,2,'到 職 日 期 :',user_hireDay,inputBoxFontSize,'0xaaaaaa','0xaaaaaa',2,'0x333333',0.1,'0x333333')

        selUser_hireDay.disabled = true
        selUser_hireDay.interactive = true;   // BTN
        selUser_hireDay.buttonMode = true;
    
        selUser_hireDay.on('mousedown', function(){
         //   var openUserRoleSelWin  = new buildSelectionWinC(uiBaseContainer,1210,30,600,800,'工 作 職 務',jobPositionList,selUserRoleBox)
                           // var filterList =['GA','GD','GP','TA','AU','WEB','IM']                                     

                            var winW = 180
                            var winH = userSearchFilter.length *25 + 70
                            var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,440, 170,selUser_hireDay,0.7,true)
                           // var userOptionSelWin = new moveAbleWinBlockC(uiBaseContainer,930,40,winW,winH,'搜 尋 過 濾 ',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                            
                           // var openSelFilterOptionWin = new buildOptionSelectWinA(userOptionSelWin,10,10,winW,winH,'搜 尋 過 濾 ',userSearchFilter,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,selUserFilterBox,true,false)
            
            
            
                            })
    
    var selUser_layOffDay = new inputBoxWithLabel(editUserDetialWinBlock,10,inputBoxGap*9 +20,100,150,2,'離 職 日 期 :',user_layOffDay,inputBoxFontSize,'0xaaaaaa','0xaaaaaa',2,'0x333333',0.1,'0x333333')

        selUser_layOffDay.disabled = true
        selUser_layOffDay.interactive = true;   // BTN
        selUser_layOffDay.buttonMode = true;
    
        selUser_layOffDay.on('mousedown', function(){
         //   var openUserRoleSelWin  = new buildSelectionWinC(uiBaseContainer,1210,30,600,800,'工 作 職 務',jobPositionList,selUserRoleBox)
                           // var filterList =['GA','GD','GP','TA','AU','WEB','IM']                                     

                            var winW = 180
                            var winH = userSearchFilter.length *25 + 70
                            var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,440, 170,selUser_layOffDay,0.7,true)

                           // var userOptionSelWin = new moveAbleWinBlockC(uiBaseContainer,930,40,winW,winH,'搜 尋 過 濾 ',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                            
                           // var openSelFilterOptionWin = new buildOptionSelectWinA(userOptionSelWin,10,10,winW,winH,'搜 尋 過 濾 ',userSearchFilter,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,selUserFilterBox,true,false)
            
            
            
                            })
    
   // console.log(selUser_hireDay.text,selUser_layOffDay.text)
    
   // var selUserWorkOptionBtnGrp = new buildOptionGrpBtn(editUserDetialWinBlock,20,inputBoxGap*4+20,'擔 任 職 務 :',deptData,100,3,100,selBtn.userGrp,11,9,'0xaaaaaa','0xcccccc')

    
    
    var confirmEditBtn = new buildBtnScaleA(editUserDetialWinBlock,30,editUserDetialWinBlock.height -60,100,30,'確認編輯','primary')
        
        confirmEditBtn.on('mousedown', function(){
            
                        
                      //  console.log(this)   
                                 //     moveAbleConfirmBlock(parent,x,y,w,h,labelText,fontSize,fontColor,containerName,borderRect,FillAlpha,selApp,screenW,screenH)
                        var editUserConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'確 認 編 輯 視 窗','確認人員 '+selUserNameBox.text +' 儲存編輯',14,'0x000000','userEdirConfirmWin_container',5,1,daysApp,screenW,screenH)    
                        var editUserConfirmWinBK = editUserConfirmWin[0]
                        var confirmBtn = editUserConfirmWin[1]
                       // console.log(editUserConfirmWin)
                        editUserConfirmWinBK.x = editUserConfirmWinBK.x - 150
                        editUserConfirmWinBK.y = editUserConfirmWinBK.y - 100
            
                      //  var selUser_hireDay_String = selUser_hireDay.text
                        var selUser_hireDay_MS = getSelDayMs(selUser_hireDay.text)
                        var selUser_layOffDay_MS = getSelDayMs(selUser_layOffDay.text)

                        confirmBtn.on('mousedown', function(){
                                    //    console.log(this)
                                        $.post("/editUserDB", {  
                                                        'searchID':selUserSearchIDBox.text,
                                                        'userName':selUserNameBox.text,
                                                        'userPW':selUserPSBox.text,
                                                        'userSec':selUserSecBox.text,
                                                        'userRole':selUserRoleBox.text,
                                                        'userDesc':selUserDescBox.text,
                                                        'search_key':selUserFilterBox.text,
                                                        'hire_st':selUser_hireDay_MS,
                                                        'layoff_st':selUser_layOffDay_MS,

                                            
                                            
                                            }, function(data) {
                                                        console.log(data)
                                                       // var errMsg = data[0]
                                                       // var searchID = data[1]
                                                       // var userName = data[2]
                                                      //  var selUserData = data[3]
                                                          //  if(errMsg == 'the same name'){
                                                          //      errMsgBox.text = '專案名稱重複'
                                                          //  }else{
                                                            //    errMsgBox.text = '【' + projName + '】'+ ' 專案新增完成'

                                                           // }
                                                       // var userEditWin = new buildUserDetialEditWin(uiBaseContainer,1000,60,this,selUserData)
                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('userEdirConfirmWin_container'))   

                                        }) 
     
                                })
            
            

            
            
                        });
    

    var deleteUserBtn = new buildBtnScaleA(editUserDetialWinBlock,editUserDetialWinBlock.width -130,editUserDetialWinBlock.height -60,100,30,'刪 除','danger')
        deleteUserBtn.on('mousedown', function(){
                      //  console.log(this)   
                                 //     moveAbleConfirmBlock(parent,x,y,w,h,labelText,fontSize,fontColor,containerName,borderRect,FillAlpha,selApp,screenW,screenH)
                        var delUserConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'確 認 刪 除 視 窗','確認人員 '+selUserNameBox.text +' 刪除ˊ',14,'0x000000','delUserConfirmWin_container',5,1,daysApp,screenW,screenH)    
                        var delUserConfirmWinBK = delUserConfirmWin[0]
                        var confirmBtn = delUserConfirmWin[1]
                       // console.log(editUserConfirmWin)
                        delUserConfirmWinBK.x = delUserConfirmWinBK.x - 150
                        delUserConfirmWinBK.y = delUserConfirmWinBK.y - 100

                        confirmBtn.on('mousedown', function(){
                                    //    console.log(this)
                                        $.post("/deleteUserDB", {  
                                                        'searchID':selUserSearchIDBox.text,
                                                        'userName':selUserNameBox.text,
                                                       // 'userPW':selUserPSBox.text,
                                                        //'userSec':selUserSecBox.text,
                                                       // 'userRole':selUserRoleBox.text,
                                                       // 'userDesc':selUserDescBox.text,

                                            }, function(data) {
                                                        console.log(data)
                                                       // var errMsg = data[0]
                                                       // var searchID = data[1]
                                                       // var userName = data[2]
                                                      //  var selUserData = data[3]
                                                          //  if(errMsg == 'the same name'){
                                                          //      errMsgBox.text = '專案名稱重複'
                                                          //  }else{
                                                            //    errMsgBox.text = '【' + projName + '】'+ ' 專案新增完成'

                                                           // }
                                                       // var userEditWin = new buildUserDetialEditWin(uiBaseContainer,1000,60,this,selUserData)
                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('delUserConfirmWin_container'))   

                                        }) 
     
                                })
            
            

            
            
                        });
    
    // dbEditBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale)
    
    
    
    
    
    
    
    var addUserConfirmBtn = new buildBtnScaleA(editUserDetialWinBlock,editUserDetialWinBlock.width/2-50,editUserDetialWinBlock.height -60,100,30,'新 增 帳 號','primary')
    
    
    if(mode == 'edit'){
        //console.log(confirmEditBtn)
        confirmEditBtn.visible = true
        deleteUserBtn.visible = true
        addUserConfirmBtn.visible = false

  
    }else if(mode =='add'){
        confirmEditBtn.visible = false
        deleteUserBtn.visible = false
        addUserConfirmBtn.visible = true
  
        
        
            
    }
    
    
        addUserConfirmBtn.on('mousedown', function(){
                      //  console.log(this)   
                                 //     moveAbleConfirmBlock(parent,x,y,w,h,labelText,fontSize,fontColor,containerName,borderRect,FillAlpha,selApp,screenW,screenH)
                        var addUserConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'新 增 人 員 視 窗','確認人員 '+selUserNameBox.text +' 新增',14,'0x000000','addUserConfirmWin_container',5,1,daysApp,screenW,screenH)    
                        var addUserConfirmWinBK = addUserConfirmWin[0]
                        var confirmBtn = addUserConfirmWin[1]
                       // console.log(editUserConfirmWin)
                        addUserConfirmWinBK.x = addUserConfirmWinBK.x - 150
                        addUserConfirmWinBK.y = addUserConfirmWinBK.y - 100
                        var selUser_hireDay_MS = getSelDayMs(selUser_hireDay.text)
                        var selUser_layOffDay_MS = getSelDayMs(selUser_layOffDay.text)
                        confirmBtn.on('mousedown', function(){
                                        console.log('add new user')
                                  
                                        $.post("/addNewUserID", {  
                                                       // 'searchID':selUserSearchIDBox.text,
                                                        'userName':selUserNameBox.text,
                                                        'userPW':selUserPSBox.text,
                                                        'userSec':selUserSecBox.text,
                                                        'userRole':selUserRoleBox.text,
                                                        'userDesc':selUserDescBox.text,
                                                         'hire_st':selUser_hireDay_MS,
                                                        'layoff_st':selUser_layOffDay_MS,

                                            }, function(data) {
                                                        console.log(data)
                                                       // var errMsg = data[0]
                                                       // var searchID = data[1]
                                                       // var userName = data[2]
                                                      //  var selUserData = data[3]
                                                          //  if(errMsg == 'the same name'){
                                                          //      errMsgBox.text = '專案名稱重複'
                                                          //  }else{
                                                            //    errMsgBox.text = '【' + projName + '】'+ ' 專案新增完成'

                                                           // }
                                                       // var userEditWin = new buildUserDetialEditWin(uiBaseContainer,1000,60,this,selUserData)
                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('addUserConfirmWin_container'))   

                                        }) 
                                            
                            
     
                                })
            
            

            
            
                        });
    
    
    
};


// 上方 user 登入欄位
function userInfoBlock(parent,x,y,w,h,bgColor,fontSize,fontColor,userName,inputBGColor,inputBoxWidth){
     /* 
    var userInfoBG =  new PIXI.Graphics(); //asset 主視窗
        userInfoBG.lineStyle(1, bgColor, 1);
        userInfoBG.beginFill(bgColor,1);
        userInfoBG.drawRoundedRect(0,0, w,h, 0);
        userInfoBG.endFill();
        userInfoBG.name = 'userInfoBG'
        userInfoBG.x = x
        userInfoBG.y = y
        userInfoBG.alpha = 1
      //  parent.addChild(userInfoBG)    
   
    
  
    var userLabelInputBox = new PIXI.TextInput({
        input: {
         //   fontFamily : 'Arial' ,
            fontFamily : '微軟正黑體' ,

            fontSize: '14px',
            letterSpacing: '2px',

            padding:'0px',
            fontWeight: 'lighter',
            fill: '0xff0000',
            color:fontColor,
             //   lineJoin: 'round',

        }, 
         box: {
                default: {fill: bgColor, rounded: 0, stroke: {color: bgColor, width: 1}},
                focused: {fill: bgColor, rounded: 0, stroke: {color: bgColor, width: 1}},
                disabled: {fill: bgColor, rounded: 0, stroke: {color: bgColor, width: 1}}
            }
        })
   
        userLabelInputBox.text = 'User :'
        userLabelInputBox.pivot.y = userLabelInputBox.height/2
        userLabelInputBox.x = 250
        userLabelInputBox.y =h/2
        userLabelInputBox.disabled = true
        userInfoBG.addChild(userLabelInputBox)    
        userLabelInputBox.scale.set(1)
        */
    userNameInput = new PIXI.TextInput({
    input: {
        fontFamily : '微軟正黑體' ,
        fontSize: '15px',
        letterSpacing: '2px',
      //  fontSmoothing: 'antialiased',
        padding: '2px',
        fontWeight: 'lighter',
        color: fontColor,
        width: String(inputBoxWidth) + 'px',

        
        
        
        
    },
    box: {
        default: {fill: inputBGColor, rounded: 3, stroke: {color: '0xffffff', width: 1}},
        focused: {fill:inputBGColor, rounded: 3, stroke: {color: '0xffffff', width: 1}},
        disabled: {fill: inputBGColor, rounded: 3}
    }
    });
    
    userNameInput.name = 'userNameInput'

    userNameInput.pivot.y = userNameInput.height/2
    
    userNameInput.x = x
    userNameInput.y = y//y// + userNameInput.height/2
    userNameInput.text = userName

    userNameInput.children[3].pivot.x = -150/2 + userNameInput.children[3].width/2 +10
    //userNameInput.children[3].x = 200
    parent.addChild(userNameInput)  
   // console.log(input.children)
    userNameInput.disabled = true
    
    userNameInput.interactive = true;
    userNameInput.buttonMode = true;
    userNameInput.on('pointerover', function(){this.children[0].tint="0xaaaaff"})
           .on('pointerout', function(){this.children[0].tint="0xffffff"})
           .on('pointerup',  function(){this.children[0].tint="0xffffff"})
           .on('mousedown', function(){ 
                  //  let userInfoBG = this.parent
                    console.log(this)
                    var winW = 300
                    var winH = 500
                    var openUserLoginWin  =  new buildUserLoginWin(uiBaseContainer,160, 40,winW,winH)
                    
                    
      

                    });


    
    userNameInput.currentUser = ''
    userNameInput.user_id = ''
    userNameInput.proj_list_filter = ''
    userNameInput.proj_type_filter = ''
    userNameInput.my_proj_filter = ''
    userNameInput.my_task_filter = ''
    userNameInput.current_proj = ''
    userNameInput.current_task = ''
    userNameInput.identity = ''

    
 //   console.log(userInfoBlock)
    return userNameInput 
    
    
};



    
//人員登入 視窗   
function buildUserLoginWin(parent,x,y,w,h){
    
    var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    var userData = JSON.parse(window.localStorage.getItem("userData"));

    
    parent.removeChild(parent.getChildByName("UserLoginWin_container"))
    
    for(var item in winList ){
                                                  //  console.log(winList[item])
            if( winList[item] == 'UserLoginWin_container'){}else{uiBaseContainer.removeChild(uiBaseContainer.getChildByName(winList[item]))}
        };       
    
    
    var UserLoginWin = new moveAbleWinBlock(uiBaseContainer,x,y,w,h,'人員登入',20,20,15,'0x111111','UserLoginWin_container',1,'0x555555',2,'0x555555',1,1,'0x4db7dc',daysApp,screenW,screenH,true)
        UserLoginWin.name = 'UserLoginWin_container'


    var selUser_InputBox = new inputBoxWithLabel(UserLoginWin,10,70,100,150,3,'登入人員 :','選擇登入ID',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
      //  taskUser_InputBox.text = ''
        selUser_InputBox.disabled = true   
        selUser_InputBox.name = 'selUser_InputBox'

        selUser_InputBox.interactive = true;
        selUser_InputBox.buttonMode = true;
    
    

        selUser_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                var openDaysSelWin  = new buildSelectionWinD(uiBaseContainer,UserLoginWin.x+w +10,UserLoginWin.y,800,500,'人員選擇',userNameList,selUser_InputBox,true,1)

                                                  // buildSelectionWin(uiBaseContainer,x-600,50,600,800,'選擇主美',userNameList,artistSel_inputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})

    
    
    
    
    
    
    
    
    
    
    var loiginPW_InputBox = new inputBoxWithLabel(UserLoginWin,10,110,100,150,3,'登入密碼 :','1234',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
      //  taskUser_InputBox.text = ''
       // loiginPW_InputBox.disabled = true   
        loiginPW_InputBox.name = 'loiginPW_InputBox'


    
    
    
    
    
    
    
    
    
    
    var  addNewUserBtn= new buildBtnScaleC(UserLoginWin,UserLoginWin.width-120,UserLoginWin.height-40,100,25,2,'新 增 帳 號','0xffffff',14,1,'0x333333',1,1,'primary outline')
    
    
        addNewUserBtn.on('mousedown', function(){
                console.log('新增帳號')
       // var newUserAddWin = new moveAbleWinBlock(uiBaseContainer,userEditWin.width + userEditWin.x,30,300,600,'新 增 帳 號',20,20,14,'0xffffff','newUserAddWin_container',1,'0x555555',5,'0x777777',1,1,'0x555555',daysApp,screenW,screenH,true)
        var userEditWin = new buildUserDetialEditWin(uiBaseContainer,810,30,this,'selUserData','add')
                       
        
        });
    
    
    var loginBtn= new buildBtnScaleC(UserLoginWin,30,170,230,25,2,'登入帳號','0xffffff',15,1,'0x333333',1,1,'secondary')
 
        loginBtn.on('mousedown', function(){
            console.log('登 入 帳 號',selUser_InputBox.text,loiginPW_InputBox.text)
            var filterUserData = userData.filter(function(item, index, array){
                  return item[2] == selUser_InputBox.text
              
            }); 
            
            if( filterUserData.length != 1){
                errMsgBox.text = '帳號錯誤'
                
            }else if( filterUserData.length == 1){
                console.log(filterUserData[0][9])
                
                if( filterUserData[0][9] == loiginPW_InputBox.text){
                    
                     console.log('已登入帳號')
                     userNameInput.text = selUser_InputBox.text
                     $.cookie('loginID', selUser_InputBox.text , { expires: 14 });

                     uiBaseContainer.removeChild(uiBaseContainer.getChildByName("openUserSelectWin_container"))
                     uiBaseContainer.removeChild(uiBaseContainer.getChildByName("UserLoginWin_container"))
  
                    errMsgBox.text =selUser_InputBox.text + '  已登入帳號'
                    
                            //讀取 user 設定
                       $.post("/getUserFav", {   //runAllAutoEvents
                        'user_name':userNameInput.text,

                            }, function(data) {
                        console.log(data)
                           var userPrefSet = data[1]
                            window.localStorage.setItem("userPrefSet", JSON.stringify(userPrefSet));
                           
                           getUserProj()

                           openDefautWin()

                       })
                    
                    // get select user DB
                    
                        getSelUserData( selUser_InputBox.text)

                    
                    
                }
            }
        });
    
    
    
    var logoutBtn= new buildBtnScaleC(UserLoginWin,30,300,230,25,2,'登出','0xffffff',16,1,'0x333333',1,1,'secondary')

    
    
    
    
    
      var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                if(userNameInput.text == '未登入'){
                  //  var loginUserName = 'none'
                }else{
                    
                    selUser_InputBox.text = userNameInput.text 
                    loiginPW_InputBox.text = "****"
                    //var loginUserName = userNameInput.text 
                };
    
    
    
    

};   
   

//人員選擇
function buildSelectionWinD(parent,x,y,w,h,tapeText,dataList,returnInputBox,userGrpMode,scale){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("openUserSelectWin_container"))
  //  var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    
    var userData = JSON.parse(window.localStorage.getItem("userData"));
  
    
    var userSelectWin = new moveAbleWinBlock(uiBaseContainer,x,y,w,h,tapeText,20,20,14,'0xffffff','openUserSelectWin_container',1,'0x333333',5,'0x555555',1,1,'0x333333',daysApp,screenW,screenH,true)
    userSelectWin.name = 'openUserSelectWin_container'
   // console.log(userData,userData.length)

    userSelectWin.interactive = true;
    
     var userSelectBlock = new buildUserSelectBlockB(userSelectWin,10,150,dataList,115,1,returnInputBox)
         userSelectBlock.name = 'userSelectBlock'  
    
    if(userGrpMode == true){
            console.log('build user group selection')
           var selSecOptionBtnGrp = new buildOptionGrp_B_Btn   (userSelectWin,20,50,'組 別 選 擇 :',deptData,150,5,160,'未指定',11,10,'0xffffff','0xffffff','0x333333',0.7,1)                                     //(parent,x,y,userNameList,userNameBK_Width,filter,blockScale,returnInputBox)






            selSecOptionBtnGrp.interactive = true;
            selSecOptionBtnGrp.buttonMode = true;
            selSecOptionBtnGrp.on('mousedown', function(){console.log(selSecOptionBtnGrp.assetType)
                                              
                                                          if( selSecOptionBtnGrp.assetType == "未指定"){
                                                              console.log('未指定組別/部門',userData.length)
                                                                var filterUserList = []
                                                                    for(var i = 0; i < userData.length ;i++){
                                                                        filterUserList.push(userData[i][2])
                                                                        console.log(userData[i][2])
                                                                    };
                                                          }else{
                                                                var filterUserArray = userData.filter(function(item, index, array){
                                                                return item[3] == selSecOptionBtnGrp.assetType;      
                                                                });       
                                                                console.log(filterUserArray,filterUserArray.length)
                                                                var filterUserList = []
                                                                for(var i = 0; i < filterUserArray.length ;i++){
                                                                        filterUserList.push(filterUserArray[i][2])
                                                                };
                                                           // console.log(filterUserList,filterUserList.length)

                                                             
                                                           // userSelectBlock.interactive = true;
  
                                                              
                                                                };
                                                        
                                                            //  uiBaseContainer.removeChild(uiBaseContainer.getChildByName("openUserSelectWin_container"))

                                                         var userSelectBlock = new buildUserSelectBlockB(userSelectWin,10,150,filterUserList,115,1,returnInputBox)
                                                                //    userSelectBlock.name = 'userSelectBlock'
                                                          
                                                          
                                                         })


   
        
    }else{

        // userSelectBlock.interactive = true;

        
    };
        
    userSelectWin.scale.set(scale)

};




function buildUserSelectBlockB(parent,x,y,userNameList,userNameBK_Width,blockScale,returnInputBox){
        parent.removeChild(parent.getChildByName('userWinBG'))

    var itemPreList = 6
    var userWinBG =  new PIXI.Graphics();
        userWinBG.lineStyle(1, '0xffffff', 0);
        userWinBG.beginFill('0x444444',1);
        userWinBG.drawRoundedRect(0,0, itemPreList*(userNameBK_Width+10)+10,Math.ceil(userNameList.length/5)*30 +15, 5);
        userWinBG.endFill();
        userWinBG.name = 'userWinBG'
        userWinBG.x = x
        userWinBG.y = y
        userWinBG.alpha = 1
        parent.addChild(userWinBG)
        userWinBG.scale.set(blockScale)

 
    for(var i = 0; i< userNameList.length; i++){
        var userSelectBK = new PIXI.TextInput({
        input: {
            fontSize: 16,
            padding:'5px',
            width: String(userNameBK_Width) +'px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x333333', rounded: 5, stroke: {color: '0x88ffff', width: 1}},
                focused: {fill: '0x333333', rounded: 5, stroke: {color: '0x88ffff', width: 1}},
                disabled: {fill: '0x333333', rounded: 5, stroke: {color: '0x88ffff', width: 1}}
            }
        })
   
        userSelectBK.text = userNameList[i]
        userSelectBK.x =(i%itemPreList)*(userNameBK_Width +10) +10
        userSelectBK.children[3].pivot.x = -userNameBK_Width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        userSelectBK.y = Math.floor(i/itemPreList)*35 +10
        userSelectBK.disabled = true
        userWinBG.addChild(userSelectBK)
        userSelectBK.interactive = true;
        userSelectBK.buttonMode = true;
        userSelectBK.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
                            console.log('asdsads')
                                
                                    
                               // var parentName = this.parent.name
                              //  console.log(parentName)
                                //this.parent.parent.removeChild(this.parent.parent.getChildByName(parentName))
                               // parent.removeChild(parent.getChildByName(winBGContainer.name))

                              //  console.log('close win', parentName)
                                returnInputBox.text = this.text
                                uiBaseContainer.removeChild(uiBaseContainer.getChildByName("openUserSelectWin_container"))
                                })
                            .on('pointerup', function(){this.alpha = 1;})     
        
    }; 
  
   // userWinBG.interactive = true;
   // return userWinBG
    
    
};






//人員選擇
function buildSelectionWinC(parent,x,y,w,h,tapeText,dataList,returnInputBox){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("openUserSelectWinC_container"))
  //  var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    
    var userData = JSON.parse(window.localStorage.getItem("userData"));
  
    var itemPreList = 5
    var userNameBK_Width = 100
    var userSelectWinC = new moveAbleWinBlock(parent,x,y,itemPreList*(userNameBK_Width+10)+20,Math.ceil(dataList.length/5)*30 +100,tapeText,20,20,14,'0xffffff','openUserSelectWinC_container',1,'0x223333',5,'0x333333',1,1,'0x223333',daysApp,screenW,screenH,true)
    userSelectWinC.name = 'openUserSelectWinC_container'
    console.log(userData,userData.length)

    userSelectWinC.interactive = true;
    


    for(var i = 0; i< dataList.length; i++){
      //  console.log(dataList) 
        var userSelectBK = new PIXI.TextInput({

        input: {
            fontSize: 14,
            padding:'2px',
            width: String(userNameBK_Width) +'px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x333333', rounded: 5, stroke: {color: '0x88ffff', width: 1}},
                focused: {fill: '0x333333', rounded: 5, stroke: {color: '0x88ffff', width: 1}},
                disabled: {fill: '0x333333', rounded: 5, stroke: {color: '0x88ffff', width: 1}}
            }
        })

        userSelectBK.text = dataList[i]
        userSelectBK.x =(i%itemPreList)*(userNameBK_Width +10) +10
        userSelectBK.children[3].pivot.x = -userNameBK_Width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        userSelectBK.y = Math.floor(i/itemPreList)*30 +50
        userSelectBK.disabled = true
        userSelectWinC.addChild(userSelectBK)
        userSelectBK.interactive = true;
        userSelectBK.buttonMode = true;
        userSelectBK.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
                               // console.log('asdsads')

                                returnInputBox.text = this.text
            
                                parent.removeChild(parent.getChildByName("openUserSelectWinC_container"))

            
                                })
                            .on('pointerup', function(){this.alpha = 1;})     
        
    };    
    
};








//人員選擇視窗   棄用
function moveAbleUserSelectWin(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn,userSearchFilter,userData,inputTextBox){   //創建視窗
    console.log(userSearchFilter)
    
    //deleteExitsted WinBlock
    
    parent.removeChild(parent.getChildByName(containerName))
    
    
    
    //text style    timelineLabelInputStyle
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
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

                              //  console.log('close win', parentName)

                                })
                            .on('pointerup', function(){this.tint='0xffffff';})      
        
            };
    
    
     
    winBGContainer.posX = x

    winBGContainer.posY = y
    
    
    var userSelFilterWin = new  simpleBlock(winBGContainer,2,28,w-5,30,'labelText',20,20,14,'0xffffff',1,'0x454545',5,'0x454545',0,0,'userSelFilterWin')

        //顯示所有user
    var allUserFilterBtn = new buildBtnScaleC(userSelFilterWin, 0 , 0 , 30,20,3 ,'ALL' ,'0xffffff',11,1,'0x333333',1,0,'0x4c6272')

        allUserFilterBtn.on('mousedown', function(){
          
        allUserFilterBtn.filterKey = 'all'

        pressFilterBtn(this)
   
            
    });
    

    var searchFilterCount = userSearchFilter.length
    
    for(var i = 0 ; i< searchFilterCount ; i++){
        
        //console.log(userSearchFilter[i])  
        var searchFilterName = userSearchFilter[i]
        var userSearchFilterBtn = new buildBtnScaleC(userSelFilterWin, i*31  +60 , 0 , 30,20,3 ,searchFilterName ,'0xffffff',11,1,'0x333333',1,0,'0x3c5262')
            userSearchFilterBtn.filterKey = searchFilterName
                    console.log('人員選擇過濾',searchFilterName)

            userSearchFilterBtn.on('mousedown', function(){
            pressFilterBtn(this)



            });

        
                                     //buildBtnScaleC(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type)
    };
    
    
    function pressFilterBtn(btn){
        console.log('pressFilterBtn',btn)  
        var serarchKey = btn.filterKey
       // console.log(serarchKey)  
        
        if(serarchKey == "all"){
        // var openUserSelWin  = new buildUserSelectWinA(workingUserSelWin,0,0,winW,winH,'人員選擇',userNameList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,taskUser_InputBox,false,true)
           // var filterUserData = userData.filter(function(item, index, array){
          //            return index[2] //== serarchKey
           //   });    
            var allUserNameList = []
            var allUserCount = userData.length
            //console.log(allUserCount)

            for( i= 0 ; i< allUserCount ; i++ ){
                //console.log(userData[i])
                allUserNameList.push(userData[i][2])
            };
            
            var openUserSelWin  = new buildUserSelectWinA(winBGContainer,0,0,w,h,'人員選擇',allUserNameList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,inputTextBox,true,true)
           // console.log(allUserNameList)
           // console.log(userData)
            
        }else{
              var filterUserData = userData.filter(function(item, index, array){
                      return item[38] == serarchKey
              });     

            console.log(filterUserData)  
        
   
        
         //   var userEditMainWin = new buildUserEditMainWin(userEditWin,daysApp,5,90,895,795,30,30,'0x333333','0x555555','0x777777','0xffffff',14,filterUserData)     
        };
         
         
        

         
        
    };

    
    
    
    
    
    
    
    
    return winBGContainer
      
    
};


function openWorkingUserDaysSelectB(parent,x,y,w,h,userSelFilter,userData,userInputBox,selApp){   //設定事件工作人員與工時
        console.log('openWorkingUserDaysSelect')
    var taskUserSelWin = new moveAbleWinBlockC(parent,x,y,w,h,'執行人員選擇',20,20,16,'0xffffff','workingUserSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',selApp,screenW,screenH,true)    

                                                      //moveAbleUserSelectWin

                                                      //  var openDaysSelWin  = new buildOptionSelectWinA(taskUserSelWin,0,0,winW,winH,'主美選擇',chiefArtistList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,chiefArtistSel_inputBox,true,true)
                                                        // 人員選擇過濾
                                                            var itemPreList = 6
                                                            var btnWidth = 28
                                                            var btnHeight = 12
                                                            
                                                           // var filterBtn = new buildBtnScaleC(taskUserSelWin,10,35,30,btnHeight,3,'ALL','0xffffff',10,1,'0x234a5a',1,1,'0x668686')

                                                            for(var i = 0; i< userSelFilter.length ; i++){
                                                                  //  console.log(dataList) 


                                                                    var btnText = userSelFilter[i]
                                                                    var btnPosX  =(i%itemPreList)*btnWidth +10 //+10
                                                                    var btnPosY = 35 + Math.floor(i/itemPreList)*btnHeight//+ optionBGBlockStartPosY
                                                                //    console.log(btnText)
                                                                    var filterBtn = new buildBtnScaleC(taskUserSelWin,btnPosX,btnPosY,btnWidth,btnHeight,3,btnText,'0xffffff',10,1,'0x234a5a',1,1,'0x668686')
                                                                    filterBtn.btnText = btnText

                                                                    filterBtn.interactive = true;
                                                                    filterBtn.buttonMode = true;
                                                                  //  console.log(userSelectBK.height)
                                                                    filterBtn.on('pointerover', function(){this.alpha = 0.2;})
                                                                                        .on('pointerout', function(){this.alpha =1;})
                                                                                        .on('mousedown', function(){
                                                                                            this.alpha = 1

                                                                                            var filterKey = this.btnText
                                                                                            console.log(filterKey)
                                                                        
                                                                        
                                                                                            $.cookie('userSelFilter', filterKey , { expires: 14 });
                                                                        
                                                                        
                                                                                          //  var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
                                                                                           //  console.log(userData)

                                                                                            if(filterKey == 'ALL'){
                                                                                                var filterUserList =  userData  
                                                                                            }else if(filterKey == 'My'){

                                                                                            }else{
                                                                                                var filterUserList = userData.filter(function(item, index, array){
                                                                                                    return item[3] == filterKey
                                                                                                });    
                                                                                                
                                                                                              //  var filterUserList = []
                                                                                             //   for(var i=0;i<tempFilterUserList.length;i++){
                                                                                              //      filterUserList.push(tempFilterUserList[i][2])      
                                                                                                       
                                                                                               // };
                                                                                                
                                                                                            }
                                                                                            console.log(filterUserList)
                                                                                         
                                                                                            var openUserSelWin  = new buildUserSelectWinB(taskUserSelWin,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true)    

                                                                                           // var projSelBKGroup = new buildProjSelWinA(projectSelectWin,0,0,w,h,filterUserList,selApp)

                                                                                           // console.log(filterKey,filterUserList)

                                                                                            })
                                                                
                                                                                        .on('pointerup', function(){this.alpha = 1;})   






                                                            };    

                                                        
                                                    var userSelFilter = $.cookie('userSelFilter')
                                                    
                                                    if(userSelFilter == undefined ){
                                                        console.log('no select filter')
                                                       //   var openUserSelWin  = new buildUserSelectWinB(taskUserSelWin,0,0,w,h,'人員選擇',userData,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true)    
                                                        
                                                    }else if(userSelFilter == "ALL"){
                                                             
                                                          var filterUserList =  userData     
                                                     }else if(userSelFilter == "My"){
                                                            var filterUserList =  userData     

                                                              
                                                    }else{
                                                        
                                                        var filterUserList = userData.filter(function(item, index, array){
                                                                                                    return item[3] == userSelFilter
                                                                                                });    
                                                            console.log(filterUserList)
                                                        
                                                        //   var openUserSelWin  = new buildUserSelectWinB(taskUserSelWin,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true)    

                                                    };
                                                    console.log(userSelFilter)
                                                    var openUserSelWin  = new buildUserSelectWinB(taskUserSelWin,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true)    

                                                    //人員選擇 
                                                   // console.log(returnStartDay_inputBox,returnEndDay_inputBox)
                                                 
                                                    
                                                   // console.log('openUserSelWin')
    
                                               // buildUserSelectWinB(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect)
    
    
};// 依照人員過濾



function openWorkingUserDaysSelectC(parent,x,y,w,h,taskTypeList,jobType_inputBox,selApp){   //依照任務類型過濾
        console.log('openWorkingUserDaysSelect')
    var taskTypeSelWin = new moveAbleWinBlockC(parent,x,y,w,h,'任務類型選擇',20,20,16,'0xffffff','workingUserSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',selApp,screenW,screenH,true)    
                        console.log(taskTypeList)
                                       
                                                        // 人員選擇過濾
                                                         //   var itemPreList = 5
                                                         //   var btnWidth = 30
                                                          //  var btnHeight = 12
                                                            
                                                            
                                                            
                                                         //   var openUserSelWin  = new buildUserSelectWinB(taskTypeSelWin,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,jobType_inputBox,true,true)      
    
                                                    if(taskTypeList.length < 25){
                                                        var blockWidth = 170
                                                    }else{
                                                        
                                                         var blockWidth = 150
                                                    }
                                


                                                    //人員選擇 
                                                   // console.log(returnStartDay_inputBox,returnEndDay_inputBox)
                                                   var openUserSelWin  = new buildTaskTypeSelectWinC(taskTypeSelWin,0,0,w,h,'人員選擇',taskTypeList,'0x88aacc','0x234a5a',12,blockWidth,1,30,25,170,selApp,jobType_inputBox,true,true)    
                                                    
                                                    
    
    
};

function openWorkingUserDaysSelectD(parent,x,y,w,h,userData,userTypeList,userType_inputBox,selApp){   //依照人員類型過濾
        console.log('openWorkingUserDaysSelect')
    var userTypeSelWin = new moveAbleWinBlockC(parent,x,y,w,h,'人員類型選擇',20,20,16,'0xffffff','workingUserSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',selApp,screenW,screenH,true)    
                        console.log(userTypeList)
                                       
                                                        // 人員選擇過濾
                                                         //   var itemPreList = 5
                                                         //   var btnWidth = 30
                                                          //  var btnHeight = 12
                                                            
                                                            
                                                            
                                                         //   var openUserSelWin  = new buildUserSelectWinB(taskTypeSelWin,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,jobType_inputBox,true,true)      
    
                                                    if(userTypeList.length < 25){
                                                        var blockWidth = 170
                                                    }else{
                                                        
                                                         var blockWidth = 150
                                                    }
                                


                                                    //人員選擇 
                                                   // console.log(returnStartDay_inputBox,returnEndDay_inputBox)
                                                   var openUserSelWin  = new buildTaskTypeSelectWinD(userTypeSelWin,0,0,w,h,'人員選擇',userData,userTypeList,'0x88aacc','0x234a5a',12,blockWidth,1,30,25,170,selApp,userType_inputBox,true,true)    
                                                    
                                                    
    
    
};





//人員選擇視窗  
function buildUserSelectWinA(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,returnStartDay_inputBox,returnEndDay_inputBox,autoClose,userSelect){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
    console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect)
    //console.log(dataList)
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
        fill:'0xffffff',
       // fontStyle: 'oblique',
        //fill: 'white',
        align: 'left',
        letterSpacing: 2,
       // lineJoin:'bevel',
       // stroke:'white',
        //strokeThickness:5
        });
    

    var winBGContainer = new PIXI.Container()
        winBGContainer.name = 'selectOpti_container';
        parent.addChild(winBGContainer)


    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(0, tapeColor, 0);
        winTapeBlock.beginFill(tapeColor,1);
        winTapeBlock.drawRoundedRect(0,0, w,25, 2);
        winTapeBlock.endFill();
        winTapeBlock.name = 'winTapeBlock'
      //  winTapeBlock.x = x+1
      //  winTapeBlock.y = y+1
      //  winTapeBlock.alpha = 1
       // winTapeBlock.zOrder = 5
        
       // winBGContainer.addChild(winTapeBlock)
        winBGContainer.x = x+2
        winBGContainer.y = y
    
    
    
    
    var winBlock =  new PIXI.Graphics(); //asset 主視窗
        winBlock.lineStyle(1, blockColor, 1);
        winBlock.beginFill(blockColor,0.1);
        winBlock.drawRoundedRect(0,0, w,h-25, 2);
        winBlock.endFill();
        winBlock.name = 'winBlock'
        winBlock.x = 0
        winBlock.y =  30
        winBGContainer.addChild(winBlock)
    
    
    

    
  //  var optionBGBlockStartPosX = 20
  //  var optionBlockHeight  = 25

    var dataListCount = dataList.length

     //   winBlock.addChild(optionBGBlock)
    
    var barOutlineHeight = h -optionBGBlockStartPosY -optionBlockHeight -10
   // var dragBarHeight
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        var dragBarHeight = barOutlineHeight
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( dataListCount * optionBlockHeight))*barOutlineHeight
        
    };
    
    var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0xff55ff',0);
        barBGBlock.drawRoundedRect(0,0, 10,barOutlineHeight, 2);
        barBGBlock.endFill();
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = barPosX
        barBGBlock.y = optionBGBlockStartPosY
        winBlock.addChild(barBGBlock)
    
    var dragBar =  new PIXI.Graphics(); //asset 主視窗
        dragBar.lineStyle(1, '0xffffff', 0);
        dragBar.beginFill('0x88ffff',0.5);
        dragBar.drawRoundedRect(0,0, 10,dragBarHeight, 2);
        dragBar.endFill();
        dragBar.name = 'optionBGBlock'
        dragBar.x = 0//barPosX
        dragBar.y = 0//optionBGBlockStartPosX
        barBGBlock.addChild(dragBar)
    
    var optionBKBG =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG.lineStyle(1, '0xff0000', 0);
        optionBKBG.beginFill('0x223311',0.3);
        optionBKBG.drawRoundedRect(0,0, optionBK_width,dataListCount * optionBlockHeight, 1);
        optionBKBG.endFill();
        optionBKBG.name = 'optionBKBG'
        optionBKBG.x = 10
        optionBKBG.y =  optionBGBlockStartPosY
        winBlock.addChild(optionBKBG)
        var blockW = optionBKBG.getBounds()
        //console.log(optionBGBlockStartPosY,optionBKBG.worldTransform,optionBKBG)
       // console.log(blockW.y)
        
        
      
    var optionBKBG_mask =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG_mask.lineStyle(1, '0xff0000', 0);
        optionBKBG_mask.beginFill('0xff0000',1);
        optionBKBG_mask.drawRoundedRect(0,0, optionBK_width+200,barOutlineHeight+2, 1);
        optionBKBG_mask.endFill();
        optionBKBG_mask.name = 'optionBKBG_mask'
        optionBKBG_mask.x = 0
        optionBKBG_mask.y =  optionBGBlockStartPosY -2
        winBlock.addChild(optionBKBG_mask)
        optionBKBG.mask = optionBKBG_mask
        dragBar.mask = optionBKBG_mask


    //判斷是否需要捲動 worldTransform.ty
    
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    }; 
    
    
        dragBar.boundY = blockW.y -optionBGBlockStartPosY
    
        dragBar
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
 
    
    
    
    

    for(var i = 0; i< dataListCount ; i++){
      //  console.log(dataList) 
        var userSelectBK = new PIXI.TextInput({

        input: {
            fontSize: fontSize,
            padding:'0px',
            width: String(optionBK_width) +'px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                focused: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                disabled: {fill: '0x333333', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}}
            }
        })

        userSelectBK.text = dataList[i][2]
        userSelectBK.searchID = dataList[i][0]

        userSelectBK.x =0//(i%itemPreList)*(optionBK_width +10) +10
        userSelectBK.children[3].pivot.x = -optionBK_width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        userSelectBK.y = Math.floor(i/itemPreList)*optionBlockHeight //+ optionBGBlockStartPosY
        userSelectBK.disabled = true
        optionBKBG.addChild(userSelectBK)
      //  console.log(userSelectBK.height)
        userSelectBK.interactive = true;
        userSelectBK.buttonMode = true;
      //  console.log(userSelectBK.height)
        userSelectBK.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
                               // console.log('asdsads')

                                returnInputBox.text = this.text
            
                                //parent.removeChild(parent.getChildByName("selectOpti_container"))
                                
            
                                if( autoClose == true){
                                    console.log('autoClose True')
                                  //  parent.removeChild(parent.getChildByName("selectOpti_container"))
                                    var parentContainerName = parent.name
                                    
                                //    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                    console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                        
                                        var searchID = this.searchID
                                        var userName = this.text
                                        console.log('點選 user 2',searchID,userName) 

                       // console.log(userEditWin.posX,userEditWin.posY)

                       // var editUserDetialWinBlockPosX = mainDragAreaBlock.posX + mainDragAreaBlock.width
                       // var editUserDetialWinBlockPosY = mainDragAreaBlock.posY //+ userEditWin.height
                                        $.post("/getUserDataFromDB", {  
                                                        'searchID':searchID,
                                                        'userName':userName,

                                                        }, function(data) {
                                                      //      console.log(data)
                                                            var errMsg = data[0]
                                                           // var searchID = data[1]
                                                           // var userName = data[2]
                                                            var selUserData = data[3]

                                                            //allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays

                                                            var allReadyRangeDays = data[5]
                                                            var allWorkingRangeDays = data[6]
                                                            var allFinishRangeDays = data[7]
                                                            var allSubmitRangeDays = data[8]

                                                          //  if(errMsg == 'the same name'){
                                                          //      errMsgBox.text = '專案名稱重複'
                                                          //  }else{
                                                            //    errMsgBox.text = '【' + projName + '】'+ ' 專案新增完成'

                                                           // }
                                                          //  var userEditWin = new buildUserDetialEditWin(uiBaseContainer,625,40,this,selUserData,'edit')
                                                        
                                                        //顯示現有工作日 
                                                            var posX = winBGContainer.width + winBGContainer.transform.worldTransform.tx
                                                            var posY = winBGContainer.transform.worldTransform.ty

                                                            var userWorkingDaysWin = new buildWorkingDaysSelWinA(uiBaseContainer,posX,posY,500,820,1,'alpha',allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,returnStartDay_inputBox,returnEndDay_inputBox,false) //pixiUI_layout

                                                            //console.log(winBGContainer.transform.worldTransform.tx,winBGContainer.transform.worldTransform.ty)

                                                        
                                                        
                                                        }) 
                                               // }) 

                                        
                                       // getUserWorkingDay
                                        
                                        
                                    }else{
                                         console.log('userSelect False')   

                                    };
            
                                })
                            .on('pointerup', function(){this.alpha = 1;})   
        
        
        
        
        
        
    };    
    
    
    
     

    function onDragStart(e) {

        
    var mouseposition = selApp.renderer.plugins.interaction.mouse.global;  


    this.dragging = true;
    var deltaPosY = mouseposition.y -  this.boundY -this.position.y
    this.deltaPosY = deltaPosY 

    //console.log(optionBKBG.height,optionBKBG.position.y)
   // console.log(barBGBlock.height,this.height)
   
     //   barBGBlock

    }
    

    
    
    function onDragMove(e) {
        if(this.dragging == true){

            this.data = e.data;
         //   console.log(this.data)
            
            var newPosition = this.data.getLocalPosition(this.parent);
            this.y = newPosition.y - this.deltaPosY;
            
            
           // console.log(optionBKBG.height,optionBKBG.position.y)

            var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
               // console.log(optionBKBG.position.y)
            
        };
        


    
    };
    
    
    function onDragEnd(e) {
        console.log('onDragEnd')
        var selectedTarget = e.target;
        // Restore the original bunny alpha.
       // selectedTarget.alpha = 1;
        this.dragging = false;
        
        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

                    
        if(this.position.y < 0 ){
                                this.position.y = 0
                                optionBKBG.position.y = 0 + optionBGBlockStartPosY
                }else if(this.position.y + this.height > barOutlineHeight){
                           this.position.y =barOutlineHeight -this.height
                            //var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                         //   optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
                          //  leftMoveBlock.position.y = 95
                            optionBKBG.position.y = - optionBKBG.height + barBGBlock.height + optionBGBlockStartPosY

                    console.log(optionBKBG.position.y)
                }else{
                  //  optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY

                   //  this.position.y  = this.startY + mouseDeltaY
        };
            
      //  this.startY = this.position.y 
     //   console.log(this.position.y )
        // Stop listening to dragging on the stage
    };
    
    
};
    





//人員選擇視窗  B
function buildUserSelectWinB(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
    console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect)
    
    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
        if(userNameInput.text == '未登入'){
            var loginUserName = 'none'
        }else{
            var loginUserName = userNameInput.text 
        };

    
    
    var projectEditWin_container = uiBaseContainer.getChildByName("projectEditWin_container")
    var ProjectInfoWin =  projectEditWin_container.getChildByName("ProjectInfoWin")
    
    var projID = ProjectInfoWin.getChildByName("newProj_searchID_InputBox").text
    var projNameEN = ProjectInfoWin.getChildByName("newProjEN_name_InputBox").text
    var projNameCH = ProjectInfoWin.getChildByName("newProjCH_name_InputBox").text
    var projType = ProjectInfoWin.getChildByName("projectTypeSel_inputBox").text

    
    
    //
            //   'searchID':parseInt(this.projID),
             //   'userName':loginUserName,
             //   'proj_name' : this.projNameEN,
               // 'projType' : this.projType,
               // 'projNameCH' : this.projNameCH

    
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
        fill:'0xffffff',
       // fontStyle: 'oblique',
        //fill: 'white',
        align: 'left',
        letterSpacing: 2,
       // lineJoin:'bevel',
       // stroke:'white',
        //strokeThickness:5
        });
    

    var winBGContainer = new PIXI.Container()
        winBGContainer.name = 'selectOpti_container';
        parent.addChild(winBGContainer)


    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(0, tapeColor, 0);
        winTapeBlock.beginFill(tapeColor,1);
        winTapeBlock.drawRoundedRect(0,0, w,25, 2);
        winTapeBlock.endFill();
        winTapeBlock.name = 'winTapeBlock'
      //  winTapeBlock.x = x+1
      //  winTapeBlock.y = y+1
      //  winTapeBlock.alpha = 1
       // winTapeBlock.zOrder = 5
        
       // winBGContainer.addChild(winTapeBlock)
        winBGContainer.x = x+2
        winBGContainer.y = y
    
    
    
    
    var winBlock =  new PIXI.Graphics(); //asset 主視窗
        winBlock.lineStyle(1, blockColor, 1);
        winBlock.beginFill(blockColor,0.1);
        winBlock.drawRoundedRect(0,0, w,h-25, 2);
        winBlock.endFill();
        winBlock.name = 'winBlock'
        winBlock.x = 0
        winBlock.y =  30
        winBGContainer.addChild(winBlock)
    
    
    

    
  //  var optionBGBlockStartPosX = 20
  //  var optionBlockHeight  = 25

    var dataListCount = dataList.length

     //   winBlock.addChild(optionBGBlock)
    
    var barOutlineHeight = h -optionBGBlockStartPosY -optionBlockHeight -10
   // var dragBarHeight
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        var dragBarHeight = barOutlineHeight
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( dataListCount * optionBlockHeight))*barOutlineHeight
        
    };
    
    var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0xff55ff',0);
        barBGBlock.drawRoundedRect(0,0, 10,barOutlineHeight, 2);
        barBGBlock.endFill();
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = barPosX
        barBGBlock.y = optionBGBlockStartPosY
        winBlock.addChild(barBGBlock)
    
    var dragBar =  new PIXI.Graphics(); //asset 主視窗
        dragBar.lineStyle(1, '0xffffff', 0);
        dragBar.beginFill('0x88ffff',0.5);
        dragBar.drawRoundedRect(0,0, 10,dragBarHeight, 2);
        dragBar.endFill();
        dragBar.name = 'optionBGBlock'
        dragBar.x = 0//barPosX
        dragBar.y = 0//optionBGBlockStartPosX
        barBGBlock.addChild(dragBar)
    
    var optionBKBG =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG.lineStyle(1, '0xff0000', 0);
        optionBKBG.beginFill('0x223311',0.3);
        optionBKBG.drawRoundedRect(0,0, optionBK_width,dataListCount * optionBlockHeight, 1);
        optionBKBG.endFill();
        optionBKBG.name = 'optionBKBG'
        optionBKBG.x = 10
        optionBKBG.y =  optionBGBlockStartPosY
        winBlock.addChild(optionBKBG)
        var blockW = optionBKBG.getBounds()
        //console.log(optionBGBlockStartPosY,optionBKBG.worldTransform,optionBKBG)
       // console.log(blockW.y)
        
        
      
    var optionBKBG_mask =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG_mask.lineStyle(1, '0xff0000', 0);
        optionBKBG_mask.beginFill('0xff0000',1);
        optionBKBG_mask.drawRoundedRect(0,0, optionBK_width+200,barOutlineHeight+2, 1);
        optionBKBG_mask.endFill();
        optionBKBG_mask.name = 'optionBKBG_mask'
        optionBKBG_mask.x = 0
        optionBKBG_mask.y =  optionBGBlockStartPosY -2
        winBlock.addChild(optionBKBG_mask)
        optionBKBG.mask = optionBKBG_mask
        dragBar.mask = optionBKBG_mask


    //判斷是否需要捲動 worldTransform.ty
    
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    }; 
    
    
        dragBar.boundY = blockW.y -optionBGBlockStartPosY
    
        dragBar
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
 
    
    
    
    

    for(var i = 0; i< dataListCount ; i++){
      //  console.log(dataList) 
        var userSelectBK = new PIXI.TextInput({

        input: {
            fontSize: fontSize,
            padding:'0px',
            width: String(optionBK_width) +'px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                focused: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                disabled: {fill: '0x333333', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}}
            }
        })

        userSelectBK.text = dataList[i][2]
        userSelectBK.searchID = dataList[i][0]

        userSelectBK.x =0//(i%itemPreList)*(optionBK_width +10) +10
        userSelectBK.children[3].pivot.x = -optionBK_width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        userSelectBK.y = Math.floor(i/itemPreList)*optionBlockHeight //+ optionBGBlockStartPosY
        userSelectBK.disabled = true
        optionBKBG.addChild(userSelectBK)
      //  console.log(userSelectBK.height)
        userSelectBK.interactive = true;
        userSelectBK.buttonMode = true;
      //  console.log(userSelectBK.height)
        userSelectBK.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
                               // console.log('asdsads')

                                returnInputBox.text = this.text
                                console.log(returnInputBox)
                                //parent.removeChild(parent.getChildByName("selectOpti_container"))
                                
            
                                if( autoClose == true){
                                    console.log('autoClose True')
                                  //  parent.removeChild(parent.getChildByName("selectOpti_container"))
                                    var parentContainerName = parent.name
                                    
                                //    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                    console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                        
                                       // var searchID = this.searchID
                                        var userName = this.text
                                      //  console.log('點選 user 2',searchID,userName) 
                                        
                  console.log(loginUserName,projID,projNameEN,projNameCH,projType)

                                        
                                        
                                            $.post("/getSelectProjectDataFromDB", {  
                                                    'searchID':parseInt(projID),
                                                    'userName':loginUserName,
                                                    'proj_name' : projNameEN,
                                                    'projType' : projType,
                                                    'projNameCH' : projNameCH
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

                                                
                                                
                                                
                                                        var selUserTaskData = taskData.filter(function(item, index, array){
                                                           // return item[0] in elementList

                                                               return item[4] === userName

                                                        });   
                                                
                                                      //  console.log(userName,selUserTaskData)

    
                                                        // 專案內容頁面
                                                     //   var projectEditWin = new  openProjectEditWinB(uiBaseContainer,360,40,1130,160,daysApp,selProjData,'edit',userFavProjList); 
                                                        
                                                        //任務內容頁面
                                                        //var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,selUserTaskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,userName,'user',userName)
                                                        //var userName = this.text
                                                        returnInputBox.text = this.text
                                                

                                                        $.post("/getSelectTaskDataBySelFilterFromDB", {  
                                                                'filterType':'userNameSelect',
                                                                'filterData':userName,
                                                                'projID': parseInt(projID)
                                                                }, function(data) {

                                                                    console.log(data)

                                                                    var selUserTypeTaskDataTemp = data[3]
                                                                     var selUserTypeTaskData = selUserTypeTaskDataTemp.filter(function(item, index, array){
                                                                                                                   // return item[0] in elementList

                                                                                                       return item[12] === '準備中'  | item[12] === '進行中'

                                                                                });   

                                                                    var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,selUserTypeTaskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,userName,'user',userName,'時間▼')
                                                
                                                                })
                                                
                                                
                                                
                                                

                                            });  
                                                   
                                        
                                        
                                        
                                        
                                        
                  
                                        
                                        
                                    }else{
                                         console.log('userSelect False')   

                                    };
            
                                })
                            .on('pointerup', function(){this.alpha = 1;})   
        
        
        
        
        
        
    };    
    
    
    
     

        function onDragStart(e) {


        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;  


        this.dragging = true;
        var deltaPosY = mouseposition.y -  this.boundY -this.position.y
        this.deltaPosY = deltaPosY 

        //console.log(optionBKBG.height,optionBKBG.position.y)
       // console.log(barBGBlock.height,this.height)

         //   barBGBlock

        }




        function onDragMove(e) {
            if(this.dragging == true){

                this.data = e.data;
             //   console.log(this.data)

                var newPosition = this.data.getLocalPosition(this.parent);
                this.y = newPosition.y - this.deltaPosY;


               // console.log(optionBKBG.height,optionBKBG.position.y)

                var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                    optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
                   // console.log(optionBKBG.position.y)

            };




        };


        function onDragEnd(e) {
            console.log('onDragEnd')
            var selectedTarget = e.target;
            // Restore the original bunny alpha.
           // selectedTarget.alpha = 1;
            this.dragging = false;

            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;


            if(this.position.y < 0 ){
                                    this.position.y = 0
                                    optionBKBG.position.y = 0 + optionBGBlockStartPosY
                    }else if(this.position.y + this.height > barOutlineHeight){
                               this.position.y =barOutlineHeight -this.height
                                //var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                             //   optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
                              //  leftMoveBlock.position.y = 95
                                optionBKBG.position.y = - optionBKBG.height + barBGBlock.height + optionBGBlockStartPosY

                        console.log(optionBKBG.position.y)
                    }else{
                      //  optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY

                       //  this.position.y  = this.startY + mouseDeltaY
            };

          //  this.startY = this.position.y 
         //   console.log(this.position.y )
            // Stop listening to dragging on the stage
        };
    
    
};
    




//任務類型選擇視窗 C
function buildTaskTypeSelectWinC(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
    console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect)
    
    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
        if(userNameInput.text == '未登入'){
            var loginUserName = 'none'
        }else{
            var loginUserName = userNameInput.text 
        };

    
    
    var projectEditWin_container = uiBaseContainer.getChildByName("projectEditWin_container")
    var ProjectInfoWin =  projectEditWin_container.getChildByName("ProjectInfoWin")
    
    var projID = ProjectInfoWin.getChildByName("newProj_searchID_InputBox").text
    var projNameEN = ProjectInfoWin.getChildByName("newProjEN_name_InputBox").text
    var projNameCH = ProjectInfoWin.getChildByName("newProjCH_name_InputBox").text
    var projType = ProjectInfoWin.getChildByName("projectTypeSel_inputBox").text

    
    
    //
            //   'searchID':parseInt(this.projID),
             //   'userName':loginUserName,
             //   'proj_name' : this.projNameEN,
               // 'projType' : this.projType,
               // 'projNameCH' : this.projNameCH

    
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
        fill:'0xffffff',
       // fontStyle: 'oblique',
        //fill: 'white',
        align: 'left',
        letterSpacing: 2,
       // lineJoin:'bevel',
       // stroke:'white',
        //strokeThickness:5
        });
    

    var winBGContainer = new PIXI.Container()
        winBGContainer.name = 'selectOpti_container';
        parent.addChild(winBGContainer)


    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(0, tapeColor, 0);
        winTapeBlock.beginFill(tapeColor,1);
        winTapeBlock.drawRoundedRect(0,0, w,25, 2);
        winTapeBlock.endFill();
        winTapeBlock.name = 'winTapeBlock'
      //  winTapeBlock.x = x+1
      //  winTapeBlock.y = y+1
      //  winTapeBlock.alpha = 1
       // winTapeBlock.zOrder = 5
        
       // winBGContainer.addChild(winTapeBlock)
        winBGContainer.x = x+2
        winBGContainer.y = y
    
    
    
    
    var winBlock =  new PIXI.Graphics(); //asset 主視窗
        winBlock.lineStyle(1, blockColor, 1);
        winBlock.beginFill(blockColor,0.1);
        winBlock.drawRoundedRect(0,0, w,h-25, 2);
        winBlock.endFill();
        winBlock.name = 'winBlock'
        winBlock.x = 0
        winBlock.y =  30
        winBGContainer.addChild(winBlock)
    
    
    

    
  //  var optionBGBlockStartPosX = 20
  //  var optionBlockHeight  = 25

    var dataListCount = dataList.length

     //   winBlock.addChild(optionBGBlock)
    
    var barOutlineHeight = h -optionBGBlockStartPosY -optionBlockHeight -10
   // var dragBarHeight
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        var dragBarHeight = barOutlineHeight
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( dataListCount * optionBlockHeight))*barOutlineHeight
        
    };
    
    var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0xff55ff',0);
        barBGBlock.drawRoundedRect(0,0, 10,barOutlineHeight, 2);
        barBGBlock.endFill();
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = barPosX
        barBGBlock.y = optionBGBlockStartPosY
        winBlock.addChild(barBGBlock)
    
    var dragBar =  new PIXI.Graphics(); //asset 主視窗
        dragBar.lineStyle(1, '0xffffff', 0);
        dragBar.beginFill('0x88ffff',0.5);
        dragBar.drawRoundedRect(0,0, 10,dragBarHeight, 2);
        dragBar.endFill();
        dragBar.name = 'optionBGBlock'
        dragBar.x = 0//barPosX
        dragBar.y = 0//optionBGBlockStartPosX
        barBGBlock.addChild(dragBar)
    
    var optionBKBG =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG.lineStyle(1, '0xff0000', 0);
        optionBKBG.beginFill('0x223311',0.3);
        optionBKBG.drawRoundedRect(0,0, optionBK_width,dataListCount * optionBlockHeight, 1);
        optionBKBG.endFill();
        optionBKBG.name = 'optionBKBG'
        optionBKBG.x = 10
        optionBKBG.y =  optionBGBlockStartPosY
        winBlock.addChild(optionBKBG)
        var blockW = optionBKBG.getBounds()
        //console.log(optionBGBlockStartPosY,optionBKBG.worldTransform,optionBKBG)
       // console.log(blockW.y)
        
        
      
    var optionBKBG_mask =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG_mask.lineStyle(1, '0xff0000', 0);
        optionBKBG_mask.beginFill('0xff0000',1);
        optionBKBG_mask.drawRoundedRect(0,0, optionBK_width+200,barOutlineHeight+2, 1);
        optionBKBG_mask.endFill();
        optionBKBG_mask.name = 'optionBKBG_mask'
        optionBKBG_mask.x = 0
        optionBKBG_mask.y =  optionBGBlockStartPosY -2
        winBlock.addChild(optionBKBG_mask)
        optionBKBG.mask = optionBKBG_mask
        dragBar.mask = optionBKBG_mask


    //判斷是否需要捲動 worldTransform.ty
    
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    }; 
    
    
        dragBar.boundY = blockW.y -optionBGBlockStartPosY
    
        dragBar
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
 
    
    
    
    

    for(var i = 0; i< dataListCount ; i++){
      //  console.log(dataList) 
        var userSelectBK = new PIXI.TextInput({

        input: {
            fontSize: fontSize,
            padding:'0px',
            width: String(optionBK_width) +'px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                focused: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                disabled: {fill: '0x333333', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}}
            }
        })

        userSelectBK.text = dataList[i]
        
        
        userSelectBK.jobType = dataList[i]
       // userSelectBK.searchID = dataList[i][0]

        userSelectBK.x =0//(i%itemPreList)*(optionBK_width +10) +10
        userSelectBK.children[3].pivot.x = -optionBK_width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        userSelectBK.y = Math.floor(i/itemPreList)*optionBlockHeight //+ optionBGBlockStartPosY
        userSelectBK.disabled = true
        optionBKBG.addChild(userSelectBK)
      //  console.log(userSelectBK.height)
        userSelectBK.interactive = true;
        userSelectBK.buttonMode = true;
      //  console.log(userSelectBK.height)
        userSelectBK.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
                               // console.log('asdsads')

                                returnInputBox.text = this.text
                                var selJobType =  this.text
                                console.log(this.text)
                                //parent.removeChild(parent.getChildByName("selectOpti_container"))
                                
            
                                if( autoClose == true){
                                    console.log('autoClose True')
                                  //  parent.removeChild(parent.getChildByName("selectOpti_container"))
                                    var parentContainerName = parent.name
                                    
                                //    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                    console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                        
                                       // var searchID = this.searchID
                                       // var userName = this.text
                                      //  console.log('點選 user 2',searchID,userName) 
                                        
             //     console.log(loginUserName,projID,projNameEN,projNameCH,projType)

                                        
                                            
                                            $.post("/getSelectProjectDataFromDB", {  
                                                    'searchID':parseInt(projID),
                                                    'userName':loginUserName,
                                                    'proj_name' : projNameEN,
                                                    'projType' : projType,
                                                    'projNameCH' : projNameCH
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

                                                        console.log(selJobType)

                                                
                                                
                                                        var selTaskTypeTaskData = taskData.filter(function(item, index, array){
                                                           // return item[0] in elementList

                                                               return item[11] === selJobType

                                                        });   
                                                     //   console.log(this.text)
                                                     //   console.log(userName,selTaskTypeTaskData)

    
                                                        // 專案內容頁面
                                                     //   var projectEditWin = new  openProjectEditWinB(uiBaseContainer,360,40,1130,160,daysApp,selProjData,'edit',userFavProjList); 
                                                        
                                                        //任務內容頁面
                                                        var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,selTaskTypeTaskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,loginUserName, 'jobType',selJobType,'時間▼')
                                                        //var userName = this.text
                                                      //  returnInputBox.text = this.text

                                            });  
                                                   
                                        
                                    
                                        
                                        
                                        
                  
                                        
                                        
                                    }else{
                                         console.log('userSelect False')   

                                    };
            
                                })
                            .on('pointerup', function(){this.alpha = 1;})   
        
        
        
        
        
        
    };    
    
    
    
     

        function onDragStart(e) {


        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;  


        this.dragging = true;
        var deltaPosY = mouseposition.y -  this.boundY -this.position.y
        this.deltaPosY = deltaPosY 

        //console.log(optionBKBG.height,optionBKBG.position.y)
       // console.log(barBGBlock.height,this.height)

         //   barBGBlock

        }




        function onDragMove(e) {
            if(this.dragging == true){

                this.data = e.data;
             //   console.log(this.data)

                var newPosition = this.data.getLocalPosition(this.parent);
                this.y = newPosition.y - this.deltaPosY;


               // console.log(optionBKBG.height,optionBKBG.position.y)

                var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                    optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
                   // console.log(optionBKBG.position.y)

            };




        };


        function onDragEnd(e) {
            console.log('onDragEnd')
            var selectedTarget = e.target;
            // Restore the original bunny alpha.
           // selectedTarget.alpha = 1;
            this.dragging = false;

            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;


            if(this.position.y < 0 ){
                                    this.position.y = 0
                                    optionBKBG.position.y = 0 + optionBGBlockStartPosY
                    }else if(this.position.y + this.height > barOutlineHeight){
                               this.position.y =barOutlineHeight -this.height
                                //var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                             //   optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
                              //  leftMoveBlock.position.y = 95
                                optionBKBG.position.y = - optionBKBG.height + barBGBlock.height + optionBGBlockStartPosY

                        console.log(optionBKBG.position.y)
                    }else{
                      //  optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY

                       //  this.position.y  = this.startY + mouseDeltaY
            };

          //  this.startY = this.position.y 
         //   console.log(this.position.y )
            // Stop listening to dragging on the stage
        };
    
    
};
    


//人員型選擇視窗 D
function buildTaskTypeSelectWinD(parent,x,y,w,h,tapeText,userData,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
    console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect)
    
    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
        if(userNameInput.text == '未登入'){
            var loginUserName = 'none'
        }else{
            var loginUserName = userNameInput.text 
        };

    
    
    var projectEditWin_container = uiBaseContainer.getChildByName("projectEditWin_container")
    var ProjectInfoWin =  projectEditWin_container.getChildByName("ProjectInfoWin")
    
    var projID = ProjectInfoWin.getChildByName("newProj_searchID_InputBox").text
    var projNameEN = ProjectInfoWin.getChildByName("newProjEN_name_InputBox").text
    var projNameCH = ProjectInfoWin.getChildByName("newProjCH_name_InputBox").text
    var projType = ProjectInfoWin.getChildByName("projectTypeSel_inputBox").text

    
    
    //
            //   'searchID':parseInt(this.projID),
             //   'userName':loginUserName,
             //   'proj_name' : this.projNameEN,
               // 'projType' : this.projType,
               // 'projNameCH' : this.projNameCH

    
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
        fill:'0xffffff',
       // fontStyle: 'oblique',
        //fill: 'white',
        align: 'left',
        letterSpacing: 2,
       // lineJoin:'bevel',
       // stroke:'white',
        //strokeThickness:5
        });
    

    var winBGContainer = new PIXI.Container()
        winBGContainer.name = 'selectOpti_container';
        parent.addChild(winBGContainer)


    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(0, tapeColor, 0);
        winTapeBlock.beginFill(tapeColor,1);
        winTapeBlock.drawRoundedRect(0,0, w,25, 2);
        winTapeBlock.endFill();
        winTapeBlock.name = 'winTapeBlock'
      //  winTapeBlock.x = x+1
      //  winTapeBlock.y = y+1
      //  winTapeBlock.alpha = 1
       // winTapeBlock.zOrder = 5
        
       // winBGContainer.addChild(winTapeBlock)
        winBGContainer.x = x+2
        winBGContainer.y = y
    
    
    
    
    var winBlock =  new PIXI.Graphics(); //asset 主視窗
        winBlock.lineStyle(1, blockColor, 1);
        winBlock.beginFill(blockColor,0.1);
        winBlock.drawRoundedRect(0,0, w,h-25, 2);
        winBlock.endFill();
        winBlock.name = 'winBlock'
        winBlock.x = 0
        winBlock.y =  30
        winBGContainer.addChild(winBlock)
    
    
    

    
  //  var optionBGBlockStartPosX = 20
  //  var optionBlockHeight  = 25

    var dataListCount = dataList.length

     //   winBlock.addChild(optionBGBlock)
    
    var barOutlineHeight = h -optionBGBlockStartPosY -optionBlockHeight -10
   // var dragBarHeight
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        var dragBarHeight = barOutlineHeight
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( dataListCount * optionBlockHeight))*barOutlineHeight
        
    };
    
    var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0xff55ff',0);
        barBGBlock.drawRoundedRect(0,0, 10,barOutlineHeight, 2);
        barBGBlock.endFill();
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = barPosX
        barBGBlock.y = optionBGBlockStartPosY
        winBlock.addChild(barBGBlock)
    
    var dragBar =  new PIXI.Graphics(); //asset 主視窗
        dragBar.lineStyle(1, '0xffffff', 0);
        dragBar.beginFill('0x88ffff',0.5);
        dragBar.drawRoundedRect(0,0, 10,dragBarHeight, 2);
        dragBar.endFill();
        dragBar.name = 'optionBGBlock'
        dragBar.x = 0//barPosX
        dragBar.y = 0//optionBGBlockStartPosX
        barBGBlock.addChild(dragBar)
    
    var optionBKBG =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG.lineStyle(1, '0xff0000', 0);
        optionBKBG.beginFill('0x223311',0.3);
        optionBKBG.drawRoundedRect(0,0, optionBK_width,dataListCount * optionBlockHeight, 1);
        optionBKBG.endFill();
        optionBKBG.name = 'optionBKBG'
        optionBKBG.x = 10
        optionBKBG.y =  optionBGBlockStartPosY
        winBlock.addChild(optionBKBG)
        var blockW = optionBKBG.getBounds()
        //console.log(optionBGBlockStartPosY,optionBKBG.worldTransform,optionBKBG)
       // console.log(blockW.y)
        
        
      
    var optionBKBG_mask =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG_mask.lineStyle(1, '0xff0000', 0);
        optionBKBG_mask.beginFill('0xff0000',1);
        optionBKBG_mask.drawRoundedRect(0,0, optionBK_width+200,barOutlineHeight+2, 1);
        optionBKBG_mask.endFill();
        optionBKBG_mask.name = 'optionBKBG_mask'
        optionBKBG_mask.x = 0
        optionBKBG_mask.y =  optionBGBlockStartPosY -2
        winBlock.addChild(optionBKBG_mask)
        optionBKBG.mask = optionBKBG_mask
        dragBar.mask = optionBKBG_mask


    //判斷是否需要捲動 worldTransform.ty
    
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    }; 
    
    
        dragBar.boundY = blockW.y -optionBGBlockStartPosY
    
        dragBar
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
 
    
    
    
    

    for(var i = 0; i< dataListCount ; i++){
      //  console.log(dataList) 
        var userSelectBK = new PIXI.TextInput({

        input: {
            fontSize: fontSize,
            padding:'0px',
            width: String(optionBK_width) +'px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                focused: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                disabled: {fill: '0x333333', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}}
            }
        })

        userSelectBK.text = dataList[i]
        
        
        userSelectBK.jobType = dataList[i]
       // userSelectBK.searchID = dataList[i][0]

        userSelectBK.x =0//(i%itemPreList)*(optionBK_width +10) +10
        userSelectBK.children[3].pivot.x = -optionBK_width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        userSelectBK.y = Math.floor(i/itemPreList)*optionBlockHeight //+ optionBGBlockStartPosY
        userSelectBK.disabled = true
        optionBKBG.addChild(userSelectBK)
      //  console.log(userSelectBK.height)
        userSelectBK.interactive = true;
        userSelectBK.buttonMode = true;
      //  console.log(userSelectBK.height)
        userSelectBK.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
                               // console.log('asdsads')

                                returnInputBox.text = this.text
                                var selUserType =  this.text
                                console.log(this.text)
                                console.log(userData)
                                console.log(selUserType)

                                //parent.removeChild(parent.getChildByName("selectOpti_container"))
                                
            
                                if( autoClose == true){
                                    console.log('autoClose True')
                                  //  parent.removeChild(parent.getChildByName("selectOpti_container"))
                                    var parentContainerName = parent.name
                                    
                                //    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                    console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                        
                                       // var searchID = this.searchID
                                        var selUserType = this.text
                                      //  console.log('點選 user 2',searchID,userName) 
                                        
             //     console.log(loginUserName,projID,projNameEN,projNameCH,projType)

                                            var selUserTypeUserData = userData.filter(function(item, index, array){

                                                               return item[29] === selUserType

                                             });   
                                        
                                            console.log(selUserTypeUserData)
                                        
                                        
                                            var userNameList = []
                                            for(var i = 0 ; i < selUserTypeUserData.length ; i++){
                                                
                                                userNameList.push(selUserTypeUserData[i][2])
                                            };
                                            
                                            console.log(userNameList)
                                        
                                            $.post("/getSelectTaskDataBySelFilterFromDB", {  
                                                    'filterType':'userName',
                                                    'filterData':String(userNameList),
                                                    'projID': parseInt(projID)
                                                    }, function(data) {
                              
                                                        console.log(data)

                                                        var selUserTypeTaskData = data[3]
                                                        
                                                        
                                                        

                                                        $.post("/getSelectProjectDataFromDB", {  
                                                                'searchID':parseInt(projID),
                                                                'userName':loginUserName,
                                                                'proj_name' : projNameEN,
                                                                'projType' : projType,
                                                                'projNameCH' : projNameCH
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

                                                                    console.log(selUserType)
                                                                 var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,selUserTypeTaskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,loginUserName, 'userType',selUserType,'時間▼')
                                                        
                                                        });
                                                    //    var selTaskTypeTaskData = taskData.filter(function(item, index, array){
                                                           // return item[0] in elementList

                                                       //        return item[11] === selUserType

                                                      //  });   
                                                     //   console.log(this.text)
                                                     //   console.log(userName,selTaskTypeTaskData)

    
                                                        // 專案內容頁面
                                                     //   var projectEditWin = new  openProjectEditWinB(uiBaseContainer,360,40,1130,160,daysApp,selProjData,'edit',userFavProjList); 
                                                        
                                                        //任務內容頁面
                                           
                                                        //var userName = this.text
                                                      //  returnInputBox.text = this.text

                                            });  
                                                   
                                        
                                    
                                        
                                        
                                        
                  
                                        
                                        
                                    }else{
                                         console.log('userSelect False')   

                                    };
            
                                })
                            .on('pointerup', function(){this.alpha = 1;})   
        
        
        
        
        
        
    };    
    
    
    
     

        function onDragStart(e) {


        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;  


        this.dragging = true;
        var deltaPosY = mouseposition.y -  this.boundY -this.position.y
        this.deltaPosY = deltaPosY 

        //console.log(optionBKBG.height,optionBKBG.position.y)
       // console.log(barBGBlock.height,this.height)

         //   barBGBlock

        }




        function onDragMove(e) {
            if(this.dragging == true){

                this.data = e.data;
             //   console.log(this.data)

                var newPosition = this.data.getLocalPosition(this.parent);
                this.y = newPosition.y - this.deltaPosY;


               // console.log(optionBKBG.height,optionBKBG.position.y)

                var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                    optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
                   // console.log(optionBKBG.position.y)

            };




        };


        function onDragEnd(e) {
            console.log('onDragEnd')
            var selectedTarget = e.target;
            // Restore the original bunny alpha.
           // selectedTarget.alpha = 1;
            this.dragging = false;

            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;


            if(this.position.y < 0 ){
                                    this.position.y = 0
                                    optionBKBG.position.y = 0 + optionBGBlockStartPosY
                    }else if(this.position.y + this.height > barOutlineHeight){
                               this.position.y =barOutlineHeight -this.height
                                //var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                             //   optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
                              //  leftMoveBlock.position.y = 95
                                optionBKBG.position.y = - optionBKBG.height + barBGBlock.height + optionBGBlockStartPosY

                        console.log(optionBKBG.position.y)
                    }else{
                      //  optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY

                       //  this.position.y  = this.startY + mouseDeltaY
            };

          //  this.startY = this.position.y 
         //   console.log(this.position.y )
            // Stop listening to dragging on the stage
        };
    
    
};
 

//人員選擇視窗   出缺勤  由總日期表選擇人員 過濾器選擇
function buildUserSelectWinE(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect,autoOpenDayOffSetWin){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
    console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect,autoOpenDayOffSetWin)
    //console.log(dataList)
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
        fill:'0xffffff',
       // fontStyle: 'oblique',
        //fill: 'white',
        align: 'left',
        letterSpacing: 2,
       // lineJoin:'bevel',
       // stroke:'white',
        //strokeThickness:5
        });
    

    var winBGContainer = new PIXI.Container()
        winBGContainer.name = 'selectOpti_container';
        parent.addChild(winBGContainer)


    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(0, tapeColor, 0);
        winTapeBlock.beginFill(tapeColor,1);
        winTapeBlock.drawRoundedRect(0,0, w,25, 2);
        winTapeBlock.endFill();
        winTapeBlock.name = 'winTapeBlock'
      //  winTapeBlock.x = x+1
      //  winTapeBlock.y = y+1
      //  winTapeBlock.alpha = 1
       // winTapeBlock.zOrder = 5
        
       // winBGContainer.addChild(winTapeBlock)
        winBGContainer.x = x+2
        winBGContainer.y = y
    
    
    
    
    var winBlock =  new PIXI.Graphics(); //asset 主視窗
        winBlock.lineStyle(1, blockColor, 1);
        winBlock.beginFill(blockColor,0.1);
        winBlock.drawRoundedRect(0,0, w,h-25, 2);
        winBlock.endFill();
        winBlock.name = 'winBlock'
        winBlock.x = 0
        winBlock.y =  30
        winBGContainer.addChild(winBlock)
    
    
    

    
  //  var optionBGBlockStartPosX = 20
  //  var optionBlockHeight  = 25

    var dataListCount = dataList.length

     //   winBlock.addChild(optionBGBlock)
    
    var barOutlineHeight = h -optionBGBlockStartPosY -optionBlockHeight -10
   // var dragBarHeight
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        var dragBarHeight = barOutlineHeight
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( dataListCount * optionBlockHeight))*barOutlineHeight
        
    };
    
    var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0xff55ff',0);
        barBGBlock.drawRoundedRect(0,0, 10,barOutlineHeight, 2);
        barBGBlock.endFill();
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = barPosX
        barBGBlock.y = optionBGBlockStartPosY
        winBlock.addChild(barBGBlock)
    
    var dragBar =  new PIXI.Graphics(); //asset 主視窗
        dragBar.lineStyle(1, '0xffffff', 0);
        dragBar.beginFill('0x88ffff',0.5);
        dragBar.drawRoundedRect(0,0, 10,dragBarHeight, 2);
        dragBar.endFill();
        dragBar.name = 'optionBGBlock'
        dragBar.x = 0//barPosX
        dragBar.y = 0//optionBGBlockStartPosX
        barBGBlock.addChild(dragBar)
    
    var optionBKBG =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG.lineStyle(1, '0xff0000', 0);
        optionBKBG.beginFill('0x223311',0.3);
        optionBKBG.drawRoundedRect(0,0, optionBK_width,dataListCount * optionBlockHeight, 1);
        optionBKBG.endFill();
        optionBKBG.name = 'optionBKBG'
        optionBKBG.x = 10
        optionBKBG.y =  optionBGBlockStartPosY
        winBlock.addChild(optionBKBG)
        var blockW = optionBKBG.getBounds()
        //console.log(optionBGBlockStartPosY,optionBKBG.worldTransform,optionBKBG)
       // console.log(blockW.y)
        
        
      
    var optionBKBG_mask =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG_mask.lineStyle(1, '0xff0000', 0);
        optionBKBG_mask.beginFill('0xff0000',1);
        optionBKBG_mask.drawRoundedRect(0,0, optionBK_width+200,barOutlineHeight+2, 1);
        optionBKBG_mask.endFill();
        optionBKBG_mask.name = 'optionBKBG_mask'
        optionBKBG_mask.x = 0
        optionBKBG_mask.y =  optionBGBlockStartPosY -2
        winBlock.addChild(optionBKBG_mask)
        optionBKBG.mask = optionBKBG_mask
        dragBar.mask = optionBKBG_mask


    //判斷是否需要捲動 worldTransform.ty
    
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    }; 
    
    
        dragBar.boundY = blockW.y -optionBGBlockStartPosY
    
        dragBar
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
 
    
    
    
    

    for(var i = 0; i< dataListCount ; i++){
      //  console.log(dataList) 
        var userSelectBK = new PIXI.TextInput({

        input: {
            fontSize: fontSize,
            padding:'0px',
            width: String(optionBK_width) +'px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                focused: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                disabled: {fill: '0x333333', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}}
            }
        })

        userSelectBK.text = dataList[i][2]
        userSelectBK.searchID = dataList[i][0]

        userSelectBK.x =0//(i%itemPreList)*(optionBK_width +10) +10
        userSelectBK.children[3].pivot.x = -optionBK_width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        userSelectBK.y = Math.floor(i/itemPreList)*optionBlockHeight //+ optionBGBlockStartPosY
        userSelectBK.disabled = true
        optionBKBG.addChild(userSelectBK)
      //  console.log(userSelectBK.height)
        userSelectBK.interactive = true;
        userSelectBK.buttonMode = true;
      //  console.log(userSelectBK.height)
        userSelectBK.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
                               // console.log('asdsads')

                                returnInputBox.text = this.text
            
                                //parent.removeChild(parent.getChildByName("selectOpti_container"))
                                console.log( returnInputBox.text)
            
                                if( autoClose == true){
                                   // console.log('autoClose True')
                                  //  parent.removeChild(parent.getChildByName("selectOpti_container"))
                                    var parentContainerName = parent.name
                                    
                                //    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                  //  console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                        
                                        var searchID = this.searchID
                                        var userName = this.text
                                        console.log('點選 user 2',searchID,userName) 

                       // console.log(userEditWin.posX,userEditWin.posY)

                       // var editUserDetialWinBlockPosX = mainDragAreaBlock.posX + mainDragAreaBlock.width
                       // var editUserDetialWinBlockPosY = mainDragAreaBlock.posY //+ userEditWin.height
                                        $.post("/getUserDataFromDB", {  
                                                        'searchID':searchID,
                                                        'userName':userName,

                                                        }, function(data) {
                                                          // console.log(data)
                                                            var errMsg = data[0]
                                                           // var searchID = data[1]
                                                           // var userName = data[2]
                                                            var selUserData = data[3]

                                                            var userName =  data[2]
                                                            var allReadyRangeDays = data[5]
                                                            var allWorkingRangeDays = data[6]
                                                            var allFinishRangeDays = data[7]
                                                            var allSubmitRangeDays = data[8]

                                                            var posX = winBGContainer.width + winBGContainer.transform.worldTransform.tx
                                                            var posY = winBGContainer.transform.worldTransform.ty
                                                            getSelUserData(userName)


                                                          //  console.log(data)
                                                        //
                                                          
                                            
                                            
                                            
                                                            console.log('已選擇',userName)
                                                            console.log('autoOpenDayOffSetWin',autoOpenDayOffSetWin)
                                                            if(autoOpenDayOffSetWin == true){
                                                                 setTimeout(function(){
                                                            
                                                                 var openDaysSelWin = new buildSelVacDayTimeWinA(500, 70,1,false,userName)    
                                                            
                                                            }, 500); 
                                                                
                                                            }else{}
                                            
                                            
                                                            setTimeout(function(){   var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));

                                                                                            console.log('selUserDayOffDB',selUserDayOffDB)
                                                                                    }, 500); 
                                            
                                            
                                                            //重設個人出勤總表
                                            
                                                            /*
                                                            setTimeout(function(){   
                                                                                    console.log('重設個人出勤總表')
                                                                                    var buildUserVactionWin = new setUserVactionWin(uiBaseContainer,210,40,1300,830,1,userName,false)
                                                                
                                                                                            
                                                                                    }, 500); 
                                            
                                            
                                                            */
                                            
                                                    
                                                          
                                                        }) 
                                               // }) 

                                        
                                       // getUserWorkingDay
                                        
                                        
                                    }else{
                                         console.log('userSelect False')   

                                    };
            
                                })
                            .on('pointerup', function(){this.alpha = 1;})   
        
        
        
        
        
        
    };    
    
    
    
     

    function onDragStart(e) {

        
    var mouseposition = selApp.renderer.plugins.interaction.mouse.global;  


    this.dragging = true;
    var deltaPosY = mouseposition.y -  this.boundY -this.position.y
    this.deltaPosY = deltaPosY 

    //console.log(optionBKBG.height,optionBKBG.position.y)
   // console.log(barBGBlock.height,this.height)
   
     //   barBGBlock

    }
    

    
    
    function onDragMove(e) {
        if(this.dragging == true){

            this.data = e.data;
         //   console.log(this.data)
            
            var newPosition = this.data.getLocalPosition(this.parent);
            this.y = newPosition.y - this.deltaPosY;
            
            
           // console.log(optionBKBG.height,optionBKBG.position.y)

            var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
               // console.log(optionBKBG.position.y)
            
        };
        


    
    };
    
    
    function onDragEnd(e) {
        console.log('onDragEnd')
        var selectedTarget = e.target;
        // Restore the original bunny alpha.
       // selectedTarget.alpha = 1;
        this.dragging = false;
        
        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

                    
        if(this.position.y < 0 ){
                                this.position.y = 0
                                optionBKBG.position.y = 0 + optionBGBlockStartPosY
                }else if(this.position.y + this.height > barOutlineHeight){
                           this.position.y =barOutlineHeight -this.height
                            //var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                         //   optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
                          //  leftMoveBlock.position.y = 95
                            optionBKBG.position.y = - optionBKBG.height + barBGBlock.height + optionBGBlockStartPosY

                    console.log(optionBKBG.position.y)
                }else{
                  //  optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY

                   //  this.position.y  = this.startY + mouseDeltaY
        };
            
      //  this.startY = this.position.y 
     //   console.log(this.position.y )
        // Stop listening to dragging on the stage
    };
    
    
};
    



//人員選擇視窗   出缺勤  由總日期表選擇人員 過濾器選擇
function buildUserSelectFromTotalWin(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect,autoOpenDayOffSetWin){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
    console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect,autoOpenDayOffSetWin)
    //console.log(dataList)
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
        fill:'0xffffff',
       // fontStyle: 'oblique',
        //fill: 'white',
        align: 'left',
        letterSpacing: 2,
       // lineJoin:'bevel',
       // stroke:'white',
        //strokeThickness:5
        });
    

    var winBGContainer = new PIXI.Container()
        winBGContainer.name = 'selectOpti_container';
        parent.addChild(winBGContainer)


    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(0, tapeColor, 0);
        winTapeBlock.beginFill(tapeColor,1);
        winTapeBlock.drawRoundedRect(0,0, w,25, 2);
        winTapeBlock.endFill();
        winTapeBlock.name = 'winTapeBlock'
      //  winTapeBlock.x = x+1
      //  winTapeBlock.y = y+1
      //  winTapeBlock.alpha = 1
       // winTapeBlock.zOrder = 5
        
       // winBGContainer.addChild(winTapeBlock)
        winBGContainer.x = x+2
        winBGContainer.y = y
    
    
    
    
    var winBlock =  new PIXI.Graphics(); //asset 主視窗
        winBlock.lineStyle(1, blockColor, 1);
        winBlock.beginFill(blockColor,0.1);
        winBlock.drawRoundedRect(0,0, w,h-25, 2);
        winBlock.endFill();
        winBlock.name = 'winBlock'
        winBlock.x = 0
        winBlock.y =  30
        winBGContainer.addChild(winBlock)
    
    
    

    
  //  var optionBGBlockStartPosX = 20
  //  var optionBlockHeight  = 25

    var dataListCount = dataList.length

     //   winBlock.addChild(optionBGBlock)
    
    var barOutlineHeight = h -optionBGBlockStartPosY -optionBlockHeight -10
   // var dragBarHeight
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        var dragBarHeight = barOutlineHeight
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( dataListCount * optionBlockHeight))*barOutlineHeight
        
    };
    
    var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0xff55ff',0);
        barBGBlock.drawRoundedRect(0,0, 10,barOutlineHeight, 2);
        barBGBlock.endFill();
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = barPosX
        barBGBlock.y = optionBGBlockStartPosY
        winBlock.addChild(barBGBlock)
    
    var dragBar =  new PIXI.Graphics(); //asset 主視窗
        dragBar.lineStyle(1, '0xffffff', 0);
        dragBar.beginFill('0x88ffff',0.5);
        dragBar.drawRoundedRect(0,0, 10,dragBarHeight, 2);
        dragBar.endFill();
        dragBar.name = 'optionBGBlock'
        dragBar.x = 0//barPosX
        dragBar.y = 0//optionBGBlockStartPosX
        barBGBlock.addChild(dragBar)
    
    var optionBKBG =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG.lineStyle(1, '0xff0000', 0);
        optionBKBG.beginFill('0x223311',0.3);
        optionBKBG.drawRoundedRect(0,0, optionBK_width,dataListCount * optionBlockHeight, 1);
        optionBKBG.endFill();
        optionBKBG.name = 'optionBKBG'
        optionBKBG.x = 10
        optionBKBG.y =  optionBGBlockStartPosY
        winBlock.addChild(optionBKBG)
        var blockW = optionBKBG.getBounds()
        //console.log(optionBGBlockStartPosY,optionBKBG.worldTransform,optionBKBG)
       // console.log(blockW.y)
        
        
      
    var optionBKBG_mask =  new PIXI.Graphics(); //asset 主視窗
        optionBKBG_mask.lineStyle(1, '0xff0000', 0);
        optionBKBG_mask.beginFill('0xff0000',1);
        optionBKBG_mask.drawRoundedRect(0,0, optionBK_width+200,barOutlineHeight+2, 1);
        optionBKBG_mask.endFill();
        optionBKBG_mask.name = 'optionBKBG_mask'
        optionBKBG_mask.x = 0
        optionBKBG_mask.y =  optionBGBlockStartPosY -2
        winBlock.addChild(optionBKBG_mask)
        optionBKBG.mask = optionBKBG_mask
        dragBar.mask = optionBKBG_mask


    //判斷是否需要捲動 worldTransform.ty
    
    if( dataListCount * optionBlockHeight < barOutlineHeight   ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    }; 
    
    
        dragBar.boundY = blockW.y -optionBGBlockStartPosY
    
        dragBar
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
 
    
    
    
    

    for(var i = 0; i< dataListCount ; i++){
      //  console.log(dataList) 
        var userSelectBK = new PIXI.TextInput({

        input: {
            fontSize: fontSize,
            padding:'0px',
            width: String(optionBK_width) +'px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                focused: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                disabled: {fill: '0x333333', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}}
            }
        })

        userSelectBK.text = dataList[i][2]
        userSelectBK.searchID = dataList[i][0]

        userSelectBK.x =0//(i%itemPreList)*(optionBK_width +10) +10
        userSelectBK.children[3].pivot.x = -optionBK_width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        userSelectBK.y = Math.floor(i/itemPreList)*optionBlockHeight //+ optionBGBlockStartPosY
        userSelectBK.disabled = true
        optionBKBG.addChild(userSelectBK)
      //  console.log(userSelectBK.height)
        userSelectBK.interactive = true;
        userSelectBK.buttonMode = true;
      //  console.log(userSelectBK.height)
        userSelectBK.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
                               // console.log('asdsads')

                                returnInputBox.text = this.text
            
                                //parent.removeChild(parent.getChildByName("selectOpti_container"))
                                console.log( returnInputBox.text)
            
                                if( autoClose == true){
                                   // console.log('autoClose True')
                                  //  parent.removeChild(parent.getChildByName("selectOpti_container"))
                                    var parentContainerName = parent.name
                                    
                                //    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                  //  console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                        
                                        var searchID = this.searchID
                                        var userName = this.text
                                        console.log('點選 user 2',searchID,userName) 

                       // console.log(userEditWin.posX,userEditWin.posY)

                       // var editUserDetialWinBlockPosX = mainDragAreaBlock.posX + mainDragAreaBlock.width
                       // var editUserDetialWinBlockPosY = mainDragAreaBlock.posY //+ userEditWin.height
                                        $.post("/getUserDataFromDB", {  
                                                        'searchID':searchID,
                                                        'userName':userName,

                                                        }, function(data) {
                                                          // console.log(data)
                                                            var errMsg = data[0]
                                                           // var searchID = data[1]
                                                           // var userName = data[2]
                                                            var selUserData = data[3]

                                                            var userName =  data[2]
                                                            var allReadyRangeDays = data[5]
                                                            var allWorkingRangeDays = data[6]
                                                            var allFinishRangeDays = data[7]
                                                            var allSubmitRangeDays = data[8]

                                                            var posX = winBGContainer.width + winBGContainer.transform.worldTransform.tx
                                                            var posY = winBGContainer.transform.worldTransform.ty
                                                            getSelUserData(userName)


                                                          //  console.log(data)
                                                        //
                                                          
                                            
                                            
                                            
                                                            console.log('已選擇',userName)
                                                            console.log('autoOpenDayOffSetWin',autoOpenDayOffSetWin)
                                                            if(autoOpenDayOffSetWin == true){
                                                                 setTimeout(function(){
                                                            
                                                                 var openDaysSelWin = new buildSelVacDayTimeWinA(500, 70,1,false,userName)    
                                                            
                                                            }, 500); 
                                                                
                                                            }else{}
                                            
                                            
                                                            setTimeout(function(){   var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));

                                                                                            console.log('selUserDayOffDB',selUserDayOffDB)
                                                                                    }, 500); 
                                            
                                            
                                                            //重設個人出勤總表
                                            
                                                            
                                                            setTimeout(function(){   
                                                                                    console.log('重設個人出勤總表')
                                                                                    var buildUserVactionWin = new setUserVactionWin(uiBaseContainer,210,40,1300,830,1,userName,false)
                                                                
                                                                                            
                                                                                    }, 500); 
                                            
                                            
                                                            
                                            
                                                    
                                                          
                                                        }) 
                                               // }) 

                                        
                                       // getUserWorkingDay
                                        
                                        
                                    }else{
                                         console.log('userSelect False')   

                                    };
            
                                })
                            .on('pointerup', function(){this.alpha = 1;})   
        
        
        
        
        
        
    };    
    
    
    
     

    function onDragStart(e) {

        
    var mouseposition = selApp.renderer.plugins.interaction.mouse.global;  


    this.dragging = true;
    var deltaPosY = mouseposition.y -  this.boundY -this.position.y
    this.deltaPosY = deltaPosY 

    //console.log(optionBKBG.height,optionBKBG.position.y)
   // console.log(barBGBlock.height,this.height)
   
     //   barBGBlock

    }
    

    
    
    function onDragMove(e) {
        if(this.dragging == true){

            this.data = e.data;
         //   console.log(this.data)
            
            var newPosition = this.data.getLocalPosition(this.parent);
            this.y = newPosition.y - this.deltaPosY;
            
            
           // console.log(optionBKBG.height,optionBKBG.position.y)

            var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
               // console.log(optionBKBG.position.y)
            
        };
        


    
    };
    
    
    function onDragEnd(e) {
        console.log('onDragEnd')
        var selectedTarget = e.target;
        // Restore the original bunny alpha.
       // selectedTarget.alpha = 1;
        this.dragging = false;
        
        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

                    
        if(this.position.y < 0 ){
                                this.position.y = 0
                                optionBKBG.position.y = 0 + optionBGBlockStartPosY
                }else if(this.position.y + this.height > barOutlineHeight){
                           this.position.y =barOutlineHeight -this.height
                            //var optionBKDeltaPosY = ( barBGBlock.height / this.height) * this.y  //console.log(barBGBlock.height,this.height)
                         //   optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY
                          //  leftMoveBlock.position.y = 95
                            optionBKBG.position.y = - optionBKBG.height + barBGBlock.height + optionBGBlockStartPosY

                    console.log(optionBKBG.position.y)
                }else{
                  //  optionBKBG.position.y = -optionBKDeltaPosY + optionBGBlockStartPosY

                   //  this.position.y  = this.startY + mouseDeltaY
        };
            
      //  this.startY = this.position.y 
     //   console.log(this.position.y )
        // Stop listening to dragging on the stage
    };
    
    
};
    


function openUserVacetionDaySelectWin(parent,x,y,w,h,userSelFilter,userData,userInputBox,selApp,defaultUser,autoOpenDayOffWin){   //設定事件工作人員與工時
        console.log('openWorkingUserDaysSelect',autoOpenDayOffWin)
    
    
        console.log(defaultUser)
    
    
        if(defaultUser == "未登入"){
            
        }else{
           setTimeout(function(){ getSelUserData(defaultUser)}, 500); 
 
            
        }
    var taskUserSelWin = new moveAbleWinBlockC(parent,x,y,w,h,'休假人員選擇',20,20,16,'0xffffff','workingUserSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',selApp,screenW,screenH,true)    

                                                      //moveAbleUserSelectWin

                                                      //  var openDaysSelWin  = new buildOptionSelectWinA(taskUserSelWin,0,0,winW,winH,'主美選擇',chiefArtistList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,chiefArtistSel_inputBox,true,true)
                                                        // 人員選擇過濾
                                                            var itemPreList = 5
                                                            var btnWidth = 30
                                                            var btnHeight = 12
                                                            
                                                           // var filterBtn = new buildBtnScaleC(taskUserSelWin,10,35,30,btnHeight,3,'ALL','0xffffff',10,1,'0x234a5a',1,1,'0x668686')

                                                            for(var i = 0; i< userSelFilter.length ; i++){
                                                                  //  console.log(dataList) 


                                                                    var btnText = userSelFilter[i]
                                                                    var btnPosX  =(i%itemPreList)*btnWidth +10 //+10
                                                                    var btnPosY = 35 + Math.floor(i/itemPreList)*btnHeight//+ optionBGBlockStartPosY
                                                                //    console.log(btnText)
                                                                    var filterBtn = new buildBtnScaleC(taskUserSelWin,btnPosX,btnPosY,btnWidth,btnHeight,3,btnText,'0xffffff',10,1,'0x234a5a',1,1,'0x668686')
                                                                    filterBtn.btnText = btnText

                                                                    filterBtn.interactive = true;
                                                                    filterBtn.buttonMode = true;
                                                                  //  console.log(userSelectBK.height)
                                                                    filterBtn.on('pointerover', function(){this.alpha = 0.2;})
                                                                                        .on('pointerout', function(){this.alpha =1;})
                                                                                        .on('mousedown', function(){
                                                                                            this.alpha = 1
                                                                                            console.log('1111111111111111111111111111111111111111111111111111111111111111111111')
                                                                                            var filterKey = this.btnText
                                                                                          //  console.log(filterKey)
                                                                                          //  var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
                                                                                           //  console.log(userData)

                                                                                            if(filterKey == 'ALL'){
                                                                                                var filterUserList =  userData  
                                                                                            }else if(filterKey == 'My'){

                                                                                            }else{
                                                                                                var filterUserList = userData.filter(function(item, index, array){
                                                                                                    return item[38] == filterKey
                                                                                                });    
                                                                                                
                                                                                              //  var filterUserList = []
                                                                                             //   for(var i=0;i<tempFilterUserList.length;i++){
                                                                                              //      filterUserList.push(tempFilterUserList[i][2])      
                                                                                                       
                                                                                               // };
                                                                                                
                                                                                            };
                                                                        
                                                                                            console.log('選擇人員',defaultUser,'autoOpenDayOffWin',autoOpenDayOffWin)

                                                                                            //console.log(returnStartDay_inputBox,returnEndDay_inputBox)
                                                                                            var openUserSelWin  = new buildUserSelectWinE(taskUserSelWin,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true,autoOpenDayOffWin)

                                                                                              
                                                                                            // 載入個人資料
                                                                                            /*
                                                                                            if(autoOpenDayOffWin == false){
                                                                                                    console.log('autoOpenDayOffWin False')
                                                                                            }else if(autoOpenDayOffWin == true){
                                                                                                    console.log('autoOpenDayOffWin True')
                                                                                                     
                                                                                                    setTimeout(function(){
                                                                                                        var daysSelectWin = uiBaseContainer.getChildByName('daysSelectWin_container')
                                                                                                        var openDaysSelectBlock = new buildFromToCalanderA(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose)


                                                                                                    }, 500);    
                                                                                            }
                                                                                          
                                                                                           

                                                                                            */
                                                                                            
                                                                                           // var projSelBKGroup = new buildProjSelWinA(projectSelectWin,0,0,w,h,filterUserList,selApp)

                                                                                           // console.log(filterKey,filterUserList)

                                                                                            })
                                                                
                                                                                        .on('pointerup', function(){this.alpha = 1;})   






                                                            };    

                                                        

                                


                                                    //人員選擇 
                                                  //  console.log(returnStartDay_inputBox,returnEndDay_inputBox)
                                                    if(autoOpenDayOffWin == true){
                                                            var openUserSelWin  = new buildUserSelectWinE(taskUserSelWin,0,0,w,h,'人員選擇',userData,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true,true)    

                                                    }else if(autoOpenDayOffWin == false){
                                                            var openUserSelWin  = new buildUserSelectWinE(taskUserSelWin,0,0,w,h,'人員選擇',userData,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true,false)    

                                                             }
    
    
    
    
};

function openUserVacetionDaySelectFromTotalWin(parent,x,y,w,h,userSelFilter,userData,userInputBox,selApp,defaultUser,autoOpenDayOffWin){   //設定事件工作人員與工時
        console.log('openWorkingUserDaysSelect',autoOpenDayOffWin)
    
    
        console.log(defaultUser)
    
    
        if(defaultUser == "未登入"){
            
        }else{
           setTimeout(function(){ getSelUserData(defaultUser)}, 500); 
 
            
        }
    var taskUserSelWin = new moveAbleWinBlockC(parent,x,y,w,h,'休假人員選擇(總表)',20,20,16,'0xffffff','workingUserSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',selApp,screenW,screenH,true)    

                                                      //moveAbleUserSelectWin

                                                      //  var openDaysSelWin  = new buildOptionSelectWinA(taskUserSelWin,0,0,winW,winH,'主美選擇',chiefArtistList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,chiefArtistSel_inputBox,true,true)
                                                        // 人員選擇過濾
                                                            var itemPreList = 5
                                                            var btnWidth = 30
                                                            var btnHeight = 12
                                                            
                                                           // var filterBtn = new buildBtnScaleC(taskUserSelWin,10,35,30,btnHeight,3,'ALL','0xffffff',10,1,'0x234a5a',1,1,'0x668686')

                                                            for(var i = 0; i< userSelFilter.length ; i++){
                                                                  //  console.log(dataList) 


                                                                    var btnText = userSelFilter[i]
                                                                    var btnPosX  =(i%itemPreList)*btnWidth +10 //+10
                                                                    var btnPosY = 35 + Math.floor(i/itemPreList)*btnHeight//+ optionBGBlockStartPosY
                                                                //    console.log(btnText)
                                                                    var filterBtn = new buildBtnScaleC(taskUserSelWin,btnPosX,btnPosY,btnWidth,btnHeight,3,btnText,'0xffffff',10,1,'0x234a5a',1,1,'0x668686')
                                                                    filterBtn.btnText = btnText

                                                                    filterBtn.interactive = true;
                                                                    filterBtn.buttonMode = true;
                                                                  //  console.log(userSelectBK.height)
                                                                    filterBtn.on('pointerover', function(){this.alpha = 0.2;})
                                                                                        .on('pointerout', function(){this.alpha =1;})
                                                                                        .on('mousedown', function(){
                                                                                            this.alpha = 1
                                                                                            console.log('1111111111111111111111111111111111111111111111111111111111111111111111')
                                                                                            var filterKey = this.btnText
                                                                                          //  console.log(filterKey)
                                                                                          //  var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
                                                                                           //  console.log(userData)

                                                                                            if(filterKey == 'ALL'){
                                                                                                var filterUserList =  userData  
                                                                                            }else if(filterKey == 'My'){

                                                                                            }else{
                                                                                                var filterUserList = userData.filter(function(item, index, array){
                                                                                                    return item[38] == filterKey
                                                                                                });    
                                                                                                
                                                                                              //  var filterUserList = []
                                                                                             //   for(var i=0;i<tempFilterUserList.length;i++){
                                                                                              //      filterUserList.push(tempFilterUserList[i][2])      
                                                                                                       
                                                                                               // };
                                                                                                
                                                                                            };
                                                                        
                                                                                            console.log('選擇人員',defaultUser,'autoOpenDayOffWin',autoOpenDayOffWin)

                                                                                            //console.log(returnStartDay_inputBox,returnEndDay_inputBox)
                                                                                            var openUserSelWin  = new buildUserSelectFromTotalWin(taskUserSelWin,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true,autoOpenDayOffWin)

                                                                                              
                                                                                            // 載入個人資料
                                                                                            /*
                                                                                            if(autoOpenDayOffWin == false){
                                                                                                    console.log('autoOpenDayOffWin False')
                                                                                            }else if(autoOpenDayOffWin == true){
                                                                                                    console.log('autoOpenDayOffWin True')
                                                                                                     
                                                                                                    setTimeout(function(){
                                                                                                        var daysSelectWin = uiBaseContainer.getChildByName('daysSelectWin_container')
                                                                                                        var openDaysSelectBlock = new buildFromToCalanderA(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,daysSelectWin.selDay,4,1,autoClose)


                                                                                                    }, 500);    
                                                                                            }
                                                                                          
                                                                                           

                                                                                            */
                                                                                            
                                                                                           // var projSelBKGroup = new buildProjSelWinA(projectSelectWin,0,0,w,h,filterUserList,selApp)

                                                                                           // console.log(filterKey,filterUserList)

                                                                                            })
                                                                
                                                                                        .on('pointerup', function(){this.alpha = 1;})   






                                                            };    

                                                        

                                


                                                    //人員選擇 
                                                  //  console.log(returnStartDay_inputBox,returnEndDay_inputBox)
                                                    if(autoOpenDayOffWin == true){
                                                            var openUserSelWin  = new buildUserSelectFromTotalWin(taskUserSelWin,0,0,w,h,'人員選擇',userData,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true,true)    

                                                    }else if(autoOpenDayOffWin == false){
                                                            var openUserSelWin  = new buildUserSelectFromTotalWin(taskUserSelWin,0,0,w,h,'人員選擇',userData,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true,false)    

                                                             }
    
    
    
    
};


    
function getSelUserData(userName){
        console.log('getSelUserData',userName)     
        $.post("/getSelUserData", {  
                        'userName':userName,

                    }, function(data) {
                    //    console.log(data)
            
                        var errMsg = data[0]
                       // var searchID = data[1]
                       // var userName = data[2]
                        var selUserData = data[2]
                     //   console.log(data)
                        //allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays

                        var allReadyRangeDays = data[4]
                        var allWorkingRangeDays = data[5]
                        var allFinishRangeDays = data[6]
                        var allSubmitRangeDays = data[7]
                        var selUserDayOffDB =  data[8]
                        
                    //    console.log(selUserDayOffDB)
                          //  if(errMsg == 'the same name'){
                          //      errMsgBox.text = '專案名稱重複'
                          //  }else{
                            //    errMsgBox.text = '【' + projName + '】'+ ' 專案新增完成'

                           // }
                        //var userEditWin = new buildUserDetialEditWin(uiBaseContainer,625,40,this,selUserData,'edit')

                        //顯示現有工作日 
                       // var userWorkingDaysWin = new buildDaysSelWinD(uiBaseContainer,930,40,500,820,1,'alpha',allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,userDayOffDB,false) //pixiUI_layout
                        

                        window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));


                        })     
            
            
};




function getUserTaskWorkTime(userName){
    
    
        console.log('getUserTaskWorkTime',userName)     
        $.post("/getUserTaskWorkTime", {  
                        'username':userName,

        }, function(data) {
                        console.log(data)
            
                        var errMsg = data[0]
                        var userName = data[1]
                        var selUserWrokingTime = data[2]

                       // var userName = data[2]

                        

                        window.localStorage.setItem("selUserWrokingTime", JSON.stringify(selUserWrokingTime));


        })       
    
    
    
    
};




function checkUser_layoff(dept,monthStartMS,monthEndMs){
   // console.log(dept,monthStartMS,monthEndMs)
    var userData = JSON.parse(window.localStorage.getItem("userData"));
    var selUserData = []      
/*
     var selUserData =  userData.filter(function(item, index, array){
                                   // return item[0] == taskTypeSortIndex
                    return item[38] == dept  & item[42] != //&  parseInt(item[41]) <= monthStartMS  &  (parseInt(item[42]) - monthStartMS ) <= (monthEndMs - monthStartMS) 

            });  
    */
    
    for(var i = 0; i <userData.length;i++){
        
        if(userData[i][38] == dept & parseInt(userData[i][41]) <= monthStartMS){
            if(userData[i][42] == null | userData[i][42] == "none" | userData[i][42] == "NaN"){
                selUserData.push(userData[i])                  
            }else if( (parseInt(userData[i][42] - monthStartMS ) >= (monthEndMs - monthStartMS))){
                 selUserData.push(userData[i])                  
    
            }
           // console.log('aaaaaaaaaaaaaaaaaaa')
            
        }; 
        
    };
    
     var selUserList = new mergeSelElementFromList(selUserData,2)
   // console.log(selUserList,monthEndMs)
     return selUserList
}
          