



function addWinBlock(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha){   //創建視窗
        
    //text style    timelineLabelInputStyle
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: fontColor, // gradient
        stroke: fontColor,
        strokeThickness: 0,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    


    var winBG =  new PIXI.Graphics(); //asset 主視窗
    winBG.lineStyle(borderWidth, borderColor, borderAlpha);
    winBG.beginFill(winFillColor,FillAlpha);
    winBG.drawRoundedRect(0,0, w,h, borderRect);
    winBG.endFill();
    winBG.name = containerName
    winBG.x = x
    winBG.y = y
    winBG.alpha = 1
    parent.addChild(winBG)

    
    var winLabelText = new PIXI.Text(labelText, fontStyle);
            
            
        winBG.addChild(winLabelText)

        winLabelText.x = textX
        winLabelText.y = textY

    var winBGContainer = new PIXI.Container()
        winBGContainer.name = containerName;
        winBG.addChild(winBGContainer)
    
    return winBG
      
    
};






function addWinBlockB(parent,x,y,w,h,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha){   //創建視窗
        
    //text style    timelineLabelInputStyle

    


    var winBG =  new PIXI.Graphics(); //asset 主視窗
        winBG.lineStyle(borderWidth, borderColor, borderAlpha);
        winBG.beginFill(winFillColor,FillAlpha);
        winBG.drawRoundedRect(0,0, w,h, borderRect);
        winBG.endFill();
        winBG.name = containerName
        winBG.x = x
        winBG.y = y
        winBG.alpha = 1
        parent.addChild(winBG)

    


    var winBGContainer = new PIXI.Container()
        winBGContainer.name = containerName;
        winBG.addChild(winBGContainer)
    
    return winBG
      
    
};
//簡單的方格框

function simpleBlock(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,borderWidth,borderColor,borderRect,fillColor,borderAlpha,fillAlpha,blockName){
 
     var fontStyle = new PIXI.TextStyle({
            fontFamily: '微軟正黑體',
            fontSize: fontSize,
            fontStyle: 'normal',
            fontWeight: '100',
            fill: fontColor, // gradient
            stroke: fontColor,
            strokeThickness: 0.5,
            dropShadow: false,
            dropShadowColor: '#333333',
            dropShadowBlur: 6,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 3,
            wordWrap: true,
            wordWrapWidth: 440,
            });

    var winBG =  new PIXI.Graphics(); //asset 主視窗
        winBG.lineStyle(borderWidth, borderColor, borderAlpha);
        winBG.beginFill(fillColor,fillAlpha);
        winBG.drawRoundedRect(0,0, w,h, borderRect);
        winBG.endFill();
        winBG.name = blockName
        winBG.x = x
        winBG.y = y
        winBG.alpha = 1
        parent.addChild(winBG)

       
    var winLabelText = new PIXI.Text(labelText, fontStyle);
            
            
       // winBG.addChild(winLabelText)

        winLabelText.x = textX
        winLabelText.y = textY

       // winLabelText.pivot.y = winLabelText.height/2
       // winLabelText.y = 15
 
    return winBG
    
    
};


// 日曆視窗

function buildDaysWinBlock(parent,x,y,selYear,selMonth,selDay,selWeekDay,blockScale,returnTextBox){
    parent.removeChild(parent.getChildByName("daysWinBG"))

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
    
    

    var currentWeekDayString = weekday[selWeekDay];
  
    
    console.log(currentMonthString,currentWeekDayString)
    
    var daysWinBG =  new PIXI.Graphics();
        daysWinBG.lineStyle(1, '0xffffff', 1);
        daysWinBG.beginFill('0x222222',1);
        daysWinBG.drawRoundedRect(0,0, 400,450, 2);
        daysWinBG.endFill();
        daysWinBG.name = 'daysWinBG'
        daysWinBG.x = x
        daysWinBG.y = y
        daysWinBG.alpha = 1
        parent.addChild(daysWinBG)
        daysWinBG.scale.set(blockScale)
    
    
    
    
    var allDaysBlock = new PIXI.Graphics(); 
        allDaysBlock.lineStyle(1, '0x444444', 1);
        allDaysBlock.beginFill('0xaa4444',1);
        allDaysBlock.drawRoundedRect(0,0, 350,300, 1);
        allDaysBlock.endFill();
        allDaysBlock.name = 'daysWinBG'
        allDaysBlock.x = 20
        allDaysBlock.y = 100
        allDaysBlock.alpha = 1
        daysWinBG.addChild(allDaysBlock)
       // 今天日期顯示
        
    
    var dayBlockWH = 50
 
    var todayTextLabel = new PIXI.Text((selYear + " 年 " + selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        todayTextLabel.x = 20
        todayTextLabel.y = 20
        daysWinBG.addChild(todayTextLabel)
        // 今天選擇月日
    var showSelMonthDayLabel = new PIXI.Text(( selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        showSelMonthDayLabel.x = 20
        showSelMonthDayLabel.y = 50
        daysWinBG.addChild(showSelMonthDayLabel)
    
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

    var selectDayInputBox = new PIXI.TextInput({
    input: {
        fontSize: 16,
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
    selectDayInputBox.text = '選擇日期 '
    selectDayInputBox.x = 60
    
   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectDayInputBox.y = 410
    
    daysWinBG.addChild(selectDayInputBox)   

    

    
    
    
    //editBtnInputBox.children[3].pivot.x = editBtnInputBox.children[3].width/2 - editBtnWidth/2 -15

    
    
    
    
    if( selMonth == 1){
            var lastMonth = 12 ; var lastMonthDaysCount =  new Date(selYear, 12, 0).getDate() 
        }else{
            var lastMonth = selMonth -1;
            var lastMonthDaysCount =  new Date(selYear, lastMonth, 0).getDate() 
    };
    
    
    
    console.log(currentMonthDaysCount,lastMonth,lastMonthDaysCount,getSelectFirstDay)
    
    
    for(var i =0; i<42;i++){
        

        
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            dayBlock.beginFill('0x444444',1);
            dayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
            dayBlock.endFill();
            dayBlock.x = (i%7)*dayBlockWH
            dayBlock.y = Math.floor(i/7)*dayBlockWH

        
        
            allDaysBlock.addChild(dayBlock)
        
        
        
        
        if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(i-getSelectFirstDay+1, bigFontStyle);
            monthDayLabel.x = 20
            monthDayLabel.y =20
            dayBlock.dayText = i-getSelectFirstDay+1

            dayBlock.addChild(monthDayLabel)  
            
        }else if(i<getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(lastMonthDaysCount-(getSelectFirstDay-i)+1, bigFontDarkStyle);
                dayBlock.dayText = lastMonthDaysCount-(getSelectFirstDay-i)+1
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.addChild(monthDayLabel)  
        }else{
            var monthDayLabel = new PIXI.Text(i - getSelectFirstDay -currentMonthDaysCount+1, bigFontDarkStyle);
                monthDayLabel.x = 20
                monthDayLabel.y =20
            dayBlock.dayText = i - getSelectFirstDay -currentMonthDaysCount+1

                dayBlock.addChild(monthDayLabel)   
            
            
        }
         

        dayBlock.interactive = true;
        dayBlock.buttonMode = true;
        dayBlock.on('pointerover', function(){this.alpha=0.5;})
                .on('pointerout', function(){this.alpha=1;})
                .on('mousedown',function(){this.alpha=0.5;
                                            selectDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            parent.selYear = selYear;
                                            parent.selMonth = selMonth;
                                            parent.selDay = this.dayText
                                            returnTextBox.text =  selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            console.log(returnTextBox)
                                           
                                          })
                .on('pointerup', function(){this.alpha=1;})

        
        
        
    };
    
    
    return daysWinBG
};

function buildDaysWinBlockB(parent,x,y,selYear,selMonth,selDay,selWeekDay,blockScale,returnTextBox,autoClose){
    parent.removeChild(parent.getChildByName("daysWinBG"))
    console.log(autoClose)
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
    
    

    var currentWeekDayString = weekday[selWeekDay];
  
    
    console.log(currentMonthString,currentWeekDayString)
    
    var daysWinBG =  new PIXI.Graphics();
        daysWinBG.lineStyle(1, '0xffffff', 1);
        daysWinBG.beginFill('0x222222',1);
        daysWinBG.drawRoundedRect(0,0, 400,450, 2);
        daysWinBG.endFill();
        daysWinBG.name = 'daysWinBG'
        daysWinBG.x = x
        daysWinBG.y = y
        daysWinBG.alpha = 1
        parent.addChild(daysWinBG)
        daysWinBG.scale.set(blockScale)
    
    
    
    
    var allDaysBlock = new PIXI.Graphics(); 
        allDaysBlock.lineStyle(1, '0x444444', 1);
        allDaysBlock.beginFill('0xaa4444',1);
        allDaysBlock.drawRoundedRect(0,0, 350,300, 1);
        allDaysBlock.endFill();
        allDaysBlock.name = 'allDaysBlock'
        allDaysBlock.x = 20
        allDaysBlock.y = 100
        allDaysBlock.alpha = 1
        daysWinBG.addChild(allDaysBlock)
       // 今天日期顯示
        
    
    var dayBlockWH = 50
 
    var todayTextLabel = new PIXI.Text((selYear + " 年 " + selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        todayTextLabel.x = 20
        todayTextLabel.y = 20
        daysWinBG.addChild(todayTextLabel)
        // 今天選擇月日
    var showSelMonthDayLabel = new PIXI.Text(( selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        showSelMonthDayLabel.x = 20
        showSelMonthDayLabel.y = 50
        daysWinBG.addChild(showSelMonthDayLabel)
    
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

    var selectDayInputBox = new PIXI.TextInput({
    input: {
        fontSize: 16,
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
    selectDayInputBox.text = '選擇日期 '
    selectDayInputBox.x = 60
    
   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectDayInputBox.y = 410
    
    daysWinBG.addChild(selectDayInputBox)   

    

    
    
    
    //editBtnInputBox.children[3].pivot.x = editBtnInputBox.children[3].width/2 - editBtnWidth/2 -15

    
    
    
    
    if( selMonth == 1){
            var lastMonth = 12 ; var lastMonthDaysCount =  new Date(selYear, 12, 0).getDate() 
        }else{
            var lastMonth = selMonth -1;
            var lastMonthDaysCount =  new Date(selYear, lastMonth, 0).getDate() 
    };
    
    
    
    console.log(currentMonthDaysCount,lastMonth,lastMonthDaysCount,getSelectFirstDay)
    
    
    for(var i =0; i<42;i++){
        

        
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            dayBlock.beginFill('0x444444',1);
            dayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
            dayBlock.endFill();
           // dayBlock.name = "dayBlock"
            dayBlock.x = (i%7)*dayBlockWH
            dayBlock.y = Math.floor(i/7)*dayBlockWH

        
        
            allDaysBlock.addChild(dayBlock)
        
        
        
        
        if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(i-getSelectFirstDay+1, bigFontStyle);
            monthDayLabel.x = 20
            monthDayLabel.y =20
            dayBlock.dayText = i-getSelectFirstDay+1
            dayBlock.name = "dayBlock_" + String(i-getSelectFirstDay+1) 

            dayBlock.addChild(monthDayLabel)  
            
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
         

        dayBlock.interactive = true;
        dayBlock.buttonMode = true;
        dayBlock.on('pointerover', function(){})
                .on('pointerout', function(){})
                .on('mousedown',function(){//this.alpha=0.5;
                                            selectDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            parent.selYear = selYear;
                                            parent.selMonth = selMonth;
                                            parent.selDay = this.dayText
                                            returnTextBox.text =  selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                           // console.log(selYear,selMonth,this.dayText,returnTextBox.text)
                                           
                                           
                                           
                                            console.log(allDaysBlock)
                                            console.log( this.name)
                                            console.log( this.dayText)

                                            for(var j = 0 ; j < allDaysBlock.children.length ;j ++){
                                                
                                                var currentBlockName =  allDaysBlock.children[j].name
                                                var currentBlockDayText = allDaysBlock.children[j].dayText
                                                console.log( currentBlockName,currentBlockDayText) 
                                                
                                                   // console.log(currentBlockName.slice(0,9))
                                                    if(currentBlockName == "dayBlock_"+String(this.dayText)){
                                                        console.log('aaaaaaaaaaaaaaaaa')
                                                        this.alpha = 0.5
                                                    }else{
                                                        console.log('bbbbbbbbbbbbb')

                                                        allDaysBlock.children[j].alpha =1
                                                        
                                                    }
                                                
                                                         

                                            }
                                           
                                           
                                            if (autoClose == true){
                                                console.log('11111')
                                                uiBaseContainer.removeChild(uiBaseContainer.getChildByName("daysSelectWin_container"))

                                                
                                            }else{
                                                
                                                console.log('22222')
                                            }
                                           
                                           
                                           
                                           
                                          })
                .on('pointerup', function(){})

        
        
        
    };
    
    
    return daysWinBG
};




function buildDaysWinBlockForTaskEditor(parent,x,y,selYear,selMonth,selDay,selWeekDay,blockScale,returnTextBox,returnTextBoxB,autoClose){
    parent.removeChild(parent.getChildByName("daysWinBG"))
    console.log(autoClose)
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
    
    

    var currentWeekDayString = weekday[selWeekDay];
  
    
    console.log(currentMonthString,currentWeekDayString)
    
    var daysWinBG =  new PIXI.Graphics();
        daysWinBG.lineStyle(1, '0xffffff', 1);
        daysWinBG.beginFill('0x222222',1);
        daysWinBG.drawRoundedRect(0,0, 400,450, 2);
        daysWinBG.endFill();
        daysWinBG.name = 'daysWinBG'
        daysWinBG.x = x
        daysWinBG.y = y
        daysWinBG.alpha = 1
        parent.addChild(daysWinBG)
        daysWinBG.scale.set(blockScale)
    
    
    
    
    var allDaysBlock = new PIXI.Graphics(); 
        allDaysBlock.lineStyle(1, '0x444444', 1);
        allDaysBlock.beginFill('0xaa4444',1);
        allDaysBlock.drawRoundedRect(0,0, 350,300, 1);
        allDaysBlock.endFill();
        allDaysBlock.name = 'allDaysBlock'
        allDaysBlock.x = 20
        allDaysBlock.y = 100
        allDaysBlock.alpha = 1
        daysWinBG.addChild(allDaysBlock)
       // 今天日期顯示
        
    
    var dayBlockWH = 50
 
    var todayTextLabel = new PIXI.Text((selYear + " 年 " + selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        todayTextLabel.x = 20
        todayTextLabel.y = 20
        daysWinBG.addChild(todayTextLabel)
        // 今天選擇月日
    var showSelMonthDayLabel = new PIXI.Text(( selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        showSelMonthDayLabel.x = 20
        showSelMonthDayLabel.y = 50
        daysWinBG.addChild(showSelMonthDayLabel)
    
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

    var selectDayInputBox = new PIXI.TextInput({
    input: {
        fontSize: 16,
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
    selectDayInputBox.text = '選擇日期 '
    selectDayInputBox.x = 60
    
   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectDayInputBox.y = 410
    
    daysWinBG.addChild(selectDayInputBox)   

    

    
    
    
    //editBtnInputBox.children[3].pivot.x = editBtnInputBox.children[3].width/2 - editBtnWidth/2 -15

    
    
    
    
    if( selMonth == 1){
            var lastMonth = 12 ; var lastMonthDaysCount =  new Date(selYear, 12, 0).getDate() 
        }else{
            var lastMonth = selMonth -1;
            var lastMonthDaysCount =  new Date(selYear, lastMonth, 0).getDate() 
    };
    
    
    
    console.log(currentMonthDaysCount,lastMonth,lastMonthDaysCount,getSelectFirstDay)
    
    
    for(var i =0; i<42;i++){
        

        
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            dayBlock.beginFill('0x444444',1);
            dayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
            dayBlock.endFill();
           // dayBlock.name = "dayBlock"
            dayBlock.x = (i%7)*dayBlockWH
            dayBlock.y = Math.floor(i/7)*dayBlockWH

        
        
            allDaysBlock.addChild(dayBlock)
        
        
        
        
        if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(i-getSelectFirstDay+1, bigFontStyle);
            monthDayLabel.x = 20
            monthDayLabel.y =20
            dayBlock.dayText = i-getSelectFirstDay+1
            dayBlock.name = "dayBlock_" + String(i-getSelectFirstDay+1) 

            dayBlock.addChild(monthDayLabel)  
            
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
         

        dayBlock.interactive = true;
        dayBlock.buttonMode = true;
        dayBlock.on('pointerover', function(){})
                .on('pointerout', function(){})
                .on('mousedown',function(){//this.alpha=0.5;
                                            selectDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            parent.selYear = selYear;
                                            parent.selMonth = selMonth;
                                            parent.selDay = this.dayText
                                            returnTextBox.text =  selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            returnTextBoxB.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
            
                                           // console.log(selYear,selMonth,this.dayText,returnTextBox.text)
                                           
                                           
                                           
                                            console.log(allDaysBlock)
                                            console.log( this.name)
                                            console.log( this.dayText)

                                            for(var j = 0 ; j < allDaysBlock.children.length ;j ++){
                                                
                                                var currentBlockName =  allDaysBlock.children[j].name
                                                var currentBlockDayText = allDaysBlock.children[j].dayText
                                                console.log( currentBlockName,currentBlockDayText) 
                                                
                                                   // console.log(currentBlockName.slice(0,9))
                                                    if(currentBlockName == "dayBlock_"+String(this.dayText)){
                                                        console.log('aaaaaaaaaaaaaaaaa')
                                                        this.alpha = 0.5
                                                    }else{
                                                        console.log('bbbbbbbbbbbbb')

                                                        allDaysBlock.children[j].alpha =1
                                                        
                                                    }
                                                
                                                         

                                            }
                                           
                                           
                                            if (autoClose == true){
                                                console.log('11111')
                                                uiBaseContainer.removeChild(uiBaseContainer.getChildByName("daysSelectWin_container"))

                                                
                                            }else{
                                                
                                                console.log('22222')
                                            }
                                           
                                           
                                           
                                           
                                          })
                .on('pointerup', function(){})

        
        
        
    };
    
    
    return daysWinBG
};






// 日曆視窗 顯示booking日期
function buildDaysWinBlockC(parent,x,y,selYear,selMonth,selDay,selWeekDay,blockScale,autoClose){
    parent.removeChild(parent.getChildByName("daysWinBG"))
    console.log(autoClose)
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
    
    

    var currentWeekDayString = weekday[selWeekDay];
  
    
    console.log(currentMonthString,currentWeekDayString)
    
    var daysWinBG =  new PIXI.Graphics();
        daysWinBG.lineStyle(1, '0xffffff', 1);
        daysWinBG.beginFill('0x222222',1);
        daysWinBG.drawRoundedRect(0,0, 400,450, 2);
        daysWinBG.endFill();
        daysWinBG.name = 'daysWinBG'
        daysWinBG.x = x
        daysWinBG.y = y
        daysWinBG.alpha = 1
        parent.addChild(daysWinBG)
        daysWinBG.scale.set(blockScale)
    
    
    
    
    var allDaysBlock = new PIXI.Graphics(); 
        allDaysBlock.lineStyle(1, '0x444444', 1);
        allDaysBlock.beginFill('0xaa4444',1);
        allDaysBlock.drawRoundedRect(0,0, 350,300, 1);
        allDaysBlock.endFill();
        allDaysBlock.name = 'daysWinBG'
        allDaysBlock.x = 20
        allDaysBlock.y = 100
        allDaysBlock.alpha = 1
        daysWinBG.addChild(allDaysBlock)
       // 今天日期顯示
        
    
    var dayBlockWH = 50
 
    var todayTextLabel = new PIXI.Text((selYear + " 年 " + selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        todayTextLabel.x = 20
        todayTextLabel.y = 20
        daysWinBG.addChild(todayTextLabel)
        // 今天選擇月日
    var showSelMonthDayLabel = new PIXI.Text(( selMonth + " 月 " + selDay + " 日 "), bigFontStyle);
        showSelMonthDayLabel.x = 20
        showSelMonthDayLabel.y = 50
        daysWinBG.addChild(showSelMonthDayLabel)
    
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

    var selectDayInputBox = new PIXI.TextInput({
    input: {
        fontSize: 16,
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
    selectDayInputBox.text = '選擇日期 '
    selectDayInputBox.x = 60
    
   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectDayInputBox.y = 410
    
    daysWinBG.addChild(selectDayInputBox)   

    

    
    
    
    //editBtnInputBox.children[3].pivot.x = editBtnInputBox.children[3].width/2 - editBtnWidth/2 -15

    
    
    
    
    if( selMonth == 1){
            var lastMonth = 12 ; var lastMonthDaysCount =  new Date(selYear, 12, 0).getDate() 
        }else{
            var lastMonth = selMonth -1;
            var lastMonthDaysCount =  new Date(selYear, lastMonth, 0).getDate() 
    };
    
    
    
    console.log(currentMonthDaysCount,lastMonth,lastMonthDaysCount,getSelectFirstDay)
    
    
    for(var i =0; i<42;i++){
        

        
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            dayBlock.beginFill('0x444444',1);
            dayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
            dayBlock.endFill();
            dayBlock.x = (i%7)*dayBlockWH
            dayBlock.y = Math.floor(i/7)*dayBlockWH

        
        
            allDaysBlock.addChild(dayBlock)
        
        
        
        
        if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(i-getSelectFirstDay+1, bigFontStyle);
            monthDayLabel.x = 20
            monthDayLabel.y =20
            dayBlock.dayText = i-getSelectFirstDay+1

            dayBlock.addChild(monthDayLabel)  
            
        }else if(i<getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(lastMonthDaysCount-(getSelectFirstDay-i)+1, bigFontDarkStyle);
                dayBlock.dayText = lastMonthDaysCount-(getSelectFirstDay-i)+1
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.addChild(monthDayLabel)  
        }else{
            var monthDayLabel = new PIXI.Text(i - getSelectFirstDay -currentMonthDaysCount+1, bigFontDarkStyle);
                monthDayLabel.x = 20
                monthDayLabel.y =20
            dayBlock.dayText = i - getSelectFirstDay -currentMonthDaysCount+1

                dayBlock.addChild(monthDayLabel)   
            
            
        }
         

        dayBlock.interactive = true;
        dayBlock.buttonMode = true;
        dayBlock.on('pointerover', function(){this.alpha=0.5;})
                .on('pointerout', function(){this.alpha=1;})
                .on('mousedown',function(){this.alpha=0.5;
                                            selectDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            parent.selYear = selYear;
                                            parent.selMonth = selMonth;
                                            parent.selDay = this.dayText
                                          //  returnTextBox.text =  selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                           // console.log(selYear,selMonth,this.dayText,returnTextBox.text)
                                           
                                            if (autoClose == true){
                                                console.log('11111')
                                                uiBaseContainer.removeChild(uiBaseContainer.getChildByName("daysSelectWin_container"))

                                                
                                            }else{
                                                
                                                console.log('22222')
                                            }
                                           
                                           
                                           
                                           
                                          })
                .on('pointerup', function(){this.alpha=1;})

        
        
        
    };
    
    
    return daysWinBG
};


// 日曆視窗 顯示booking日期 buildDaysWinBlockC // 工作日 標註工作日
function buildDaysWinBlockD(parent,x,y,selYear,selMonth,selDay,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,blockScale,userDayOffDB,autoClose){
  //  parent.removeChild(parent.getChildByName("daysWinBG"))
   // console.log(autoClose)
   // console.log(allReadyRangeDays)
   // console.log(allWorkingRangeDays)
   // console.log(allFinishRangeDays)
    console.log(userDayOffDB)
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
    /*
    var selectDayInputBox = new PIXI.TextInput({
    input: {
        fontSize: 16,
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
    selectDayInputBox.text = '選擇日期 '
    selectDayInputBox.x = 60
    
   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectDayInputBox.y = 410
    
    daysWinBG.addChild(selectDayInputBox)   

    */

    
    
    
    //editBtnInputBox.children[3].pivot.x = editBtnInputBox.children[3].width/2 - editBtnWidth/2 -15

    
    
    
    
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
      //  console.log(selDayMs)
        
        //allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays
        
        if(allReadyRangeDays.includes(selDayMs) == true){
            var dayBlockColor = '0xff0000'  
        }else if(allWorkingRangeDays.includes(selDayMs) == true){
            var dayBlockColor = '0xffff00'  
   
        }else if(allFinishRangeDays.includes(selDayMs) == true){
            var dayBlockColor = '0xff00ff'  

        }else if(allSubmitRangeDays.includes(selDayMs) == true){
            var dayBlockColor = '0x00ffff'  
     
        }else{
            var dayBlockColor = '0x444444'  
            
        };
        
        
       //  var dayBlockColor = '0x444444'  
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            dayBlock.beginFill(dayBlockColor,0.3);
            dayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
            dayBlock.endFill();
            dayBlock.x = (i%7)*dayBlockWH
            dayBlock.y = Math.floor(i/7)*dayBlockWH

        
        
            allDaysBlock.addChild(dayBlock)
        
        
        
        if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
            monthDayLabel.x = 20
            monthDayLabel.y =20
            dayBlock.dayText = i-getSelectFirstDay+1

            dayBlock.addChild(monthDayLabel)  
            
        }else if(i<getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(lastMonthDaysCount-(getSelectFirstDay-i)+1, bigFontDarkStyle);
                dayBlock.dayText = lastMonthDaysCount-(getSelectFirstDay-i)+1
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.addChild(monthDayLabel)  
        }else{
            var monthDayLabel = new PIXI.Text(i - getSelectFirstDay -currentMonthDaysCount+1, bigFontDarkStyle);
                monthDayLabel.x = 20
                monthDayLabel.y =20
            dayBlock.dayText = i - getSelectFirstDay -currentMonthDaysCount+1

                dayBlock.addChild(monthDayLabel)   
            
            
        }
         

        dayBlock.interactive = true;
        dayBlock.buttonMode = true;
        dayBlock.on('pointerover', function(){this.alpha=0.5;})
                .on('pointerout', function(){this.alpha=1;})
                .on('mousedown',function(){this.alpha=0.5;
                                            selectDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            parent.selYear = selYear;
                                            parent.selMonth = selMonth;
                                            parent.selDay = this.dayText
                                          //  returnTextBox.text =  selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                           // console.log(selYear,selMonth,this.dayText,returnTextBox.text)
                                           
                                            if (autoClose == true){
                                                console.log('11111')
                                                uiBaseContainer.removeChild(uiBaseContainer.getChildByName("daysSelectWin_container"))

                                                
                                            }else{
                                                
                                                console.log('22222')
                                            }
                                           
                                           
                                           
                                           
                                          })
                .on('pointerup', function(){this.alpha=1;})

        
        
        
    };
    
    
    return daysWinBG
};

function buildUserSelectBlock(parent,x,y,userNameList,userNameBK_Width,blockScale,returnInputBox){
        parent.removeChild(parent.getChildByName('userWinBG'))

    var itemPreList = 5
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
   
        userSelectBK.text = userNameList[i]
        userSelectBK.x =(i%itemPreList)*(userNameBK_Width +10) +10
        userSelectBK.children[3].pivot.x = -userNameBK_Width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        userSelectBK.y = Math.floor(i/itemPreList)*30 +10
        userSelectBK.disabled = true
        userWinBG.addChild(userSelectBK)
        userSelectBK.interactive = true;
        userSelectBK.buttonMode = true;
        userSelectBK.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
            console.log('asdsads')
                                uiBaseContainer.removeChild(uiBaseContainer.getChildByName("openUserSelectWin_container"))

                               // var parentName = this.parent.name
                              //  console.log(parentName)
                                //this.parent.parent.removeChild(this.parent.parent.getChildByName(parentName))
                               // parent.removeChild(parent.getChildByName(winBGContainer.name))

                              //  console.log('close win', parentName)
                                returnInputBox.text = this.text
                                })
                            .on('pointerup', function(){this.alpha = 1;})     
        
    }; 
  
   // userWinBG.interactive = true;
   // return userWinBG
    
    
};

//專案選擇視窗
function buildSimpletBlock(parent,x,y,w,h,blockScale,blockColor,blockScale){
    var winBG =  new PIXI.Graphics();
        winBG.lineStyle(1, '0xffffff', 0);
        winBG.beginFill(blockColor,1);
        winBG.drawRoundedRect(0,0,w,h, 5);
        winBG.endFill();
        winBG.name = 'winBG'
        winBG.x = x
        winBG.y = y
        winBG.alpha = 1
        parent.addChild(winBG)
        winBG.scale.set(blockScale)  
    
    
    return winBG

    
};

//專案選擇視窗
function buildSimpletBlockB(parent,x,y,w,h,blockScale,blockColor,blockAlpha,blockScale){
    var winBG =  new PIXI.Graphics();
        winBG.lineStyle(1, '0xffffff', 0);
        winBG.beginFill(blockColor,blockAlpha);
        winBG.drawRoundedRect(0,0,w,h, 5);
        winBG.endFill();
        winBG.name = 'winBG'
        winBG.x = x
        winBG.y = y
        winBG.alpha = 1
        parent.addChild(winBG)
        winBG.scale.set(blockScale)  
    
    
    return winBG

    
};



function moveAbleWinBlock(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗
  //  console.log(fontColor)
    
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
        workAreaWin.drawRoundedRect(0,0, w,h-30, borderRect);
        workAreaWin.endFill();
        workAreaWin.name = 'workAreaWin'
       // workAreaWin.x = x
        workAreaWin.y = 30
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
        winLabelText.y = winTapeBlock.height/2 - fontSize/3//15

    
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
            console.log(selContainer.x,selContainer.y,selContainer.width,selContainer.height)
            
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
        closeIconBtn.y =  15

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
    
    
    
    return winBGContainer
      
    
};


function moveAbleConfirmBlock(parent,x,y,w,h,labelText,descText,fontSize,fontColor,containerName,borderRect,FillAlpha,selApp,screenW,screenH){   //創建視窗
    //console.log(screenW,screenH)
    
    //deleteExitsted WinBlock
    
    parent.removeChild(parent.getChildByName(containerName))
    
    
    
    //text style    timelineLabelInputStyle
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fill: '0xffffff', // gradient
        stroke: '0x000000',
        strokeThickness: 0,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
    var descFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fill: '0x222222', // gradient
        stroke: '0x000000',
        strokeThickness: 0,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });


    var winBGContainer = new PIXI.Container()
        winBGContainer.name = containerName;
        parent.addChild(winBGContainer)




    
    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(0, '0xffffff', 0);
        winTapeBlock.beginFill('0xff6666',1);
        winTapeBlock.drawRoundedRect(0,0, w,30, borderRect);
        winTapeBlock.endFill();
        winTapeBlock.name = 'winTapeBlock'
      //  winTapeBlock.x = x+1
      //  winTapeBlock.y = y+1
      //  winTapeBlock.alpha = 1
       // winTapeBlock.zOrder = 5

    winBGContainer.addChild(winTapeBlock)
    //winBGContainer.pivot.x = winBGContainer.width/2
   // winBGContainer.pivot.y = winBGContainer.height/2

    winBGContainer.x = x
    winBGContainer.y = y
    
    
    var workAreaWin =  new PIXI.Graphics(); //asset 主視窗
        workAreaWin.lineStyle(1, '0xcccccc', 1);
        workAreaWin.beginFill('0xcccccc',FillAlpha);
        workAreaWin.drawRoundedRect(0,0, w,h-30, borderRect);
        workAreaWin.endFill();
        workAreaWin.name = 'workAreaWin'
       // workAreaWin.x = x
        workAreaWin.y = 30
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

        winLabelText.x = 30
        winLabelText.pivot.y = winLabelText.height/2
        winLabelText.y = 15

    
    winTapeBlock.interactive = true;

    
    
    var descText = new PIXI.Text(descText, descFontStyle);
    workAreaWin.addChild(descText)
    descText.x =20
    descText.y =20

    winTapeBlock
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
    
    
    function onDragStart(event) {
        // store a reference to the data
        // the reason for this is because of multitouch
        // we want to track the movement of this particular touch
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
        selectRing.alpha = 1
     //   winBGContainer.alpha = 0.5
        var containerCount = parent.children.length

        parent.setChildIndex(winBGContainer,containerCount-1)

    }

    function onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;
        selectRing.alpha = 0
       // winBGContainer.alpha = 1
        
       // var containerCount = parent.children.length
        
               // console.log(containerCount)
      //  for(var i=0 ;i<containerCount;i++){
            
      //      console.log(parent.children[i])
            
        //        parent.children[i].zOrder = i
       // }
        
       // winBGContainer.zOrder = containerCount
       // parent.setChildIndex(winBGContainer,containerCount-1)
    }
    
    function onDragMove() {
      //  console.log(selApp)
        if (this.dragging) {
            const newPosition = this.data.getLocalPosition(this.parent);

            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;
        //    console.log(mouseposition.x,mouseposition.y)
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
    
    
    var editBtnWidth = 50
    
    var editBtnInputBox = new PIXI.TextInput({
    input: {
        fontSize: 14,
        padding:'2px',
        width: '80px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x007bff', rounded: 5, stroke: {color: '0x007bff', width: 1}},
            focused: {fill: '0x007bff', rounded: 5, stroke: {color: '0x007bff', width: 1}},
            disabled: {fill: '0x007bff', rounded: 5}
        }
    })
    editBtnInputBox.text = '確  認 '
    editBtnInputBox.x = 60
    
    editBtnInputBox.pivot.y = editBtnInputBox.height/2
    editBtnInputBox.y = h -60
    editBtnInputBox.children[3].pivot.x = editBtnInputBox.children[3].width/2 - editBtnWidth/2 -15

    workAreaWin.addChild(editBtnInputBox);  
    
    
   // editBtnInputBox.searchID = searchID
   // editBtnInputBox.searchName = rowB_text
 
    
    editBtnInputBox.disabled = true
    
   
    editBtnInputBox.interactive = true;   // BTN
    editBtnInputBox.buttonMode = true;
    editBtnInputBox.on('pointerover', function(){this.tint="0xff0000";this.alpha = 0.5})
                   .on('pointerout', function(){this.tint="0xffffff";this.alpha = 1})
                   .on('pointerup',  function(){this.tint="0xffffff";this.alpha = 1})
           
    
    
    
    
    var delBtnInputBox = new PIXI.TextInput({
    input: {
            fontSize: 14,
            padding:'2px',
            width: '80px',
            color:'0xffffff',
    }, 
     box: {
            default: {fill: '0xdc3545', rounded: 5, stroke: {color: '0xdc3545', width: 1}},
            focused: {fill: '0xdc3545', rounded: 5, stroke: {color: '0xdc3545', width: 1}},
            disabled: {fill: '0xdc3545', rounded: 5}
        }
    })
    delBtnInputBox.text = '取  消'
    delBtnInputBox.x = 160
    
    delBtnInputBox.pivot.y = editBtnInputBox.height/2
    delBtnInputBox.y =  h -60
    delBtnInputBox.children[3].pivot.x = delBtnInputBox.children[3].width/2 - editBtnWidth/2 -10

    workAreaWin.addChild(delBtnInputBox);  
    
   // delBtnInputBox.searchID = searchID
   // delBtnInputBox.searchName = rowB_text
    
    delBtnInputBox.disabled = true
    
   
    delBtnInputBox.interactive = true;   // BTN
    delBtnInputBox.buttonMode = true;
    delBtnInputBox.on('pointerover', function(){this.tint="0xff0000";this.alpha = 0.5})
                   .on('pointerout', function(){this.tint="0xffffff";this.alpha = 1})
                   .on('pointerup',  function(){this.tint="0xffffff";this.alpha = 1})
                    .on('mousedown', function(){
                            parent.removeChild(parent.getChildByName(winBGContainer.name))
                        })

    
   
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
    closeIconBtn.y =  15

    winBGContainer.addChild(closeIconBtn)
    closeIconBtn.interactive = true;
    closeIconBtn.buttonMode = true;
    closeIconBtn.on('pointerover', function(){this.tint='0xffaaaa';})
                        .on('pointerout', function(){this.tint='0xffffff';})
                        .on('mousedown', function(){
                            parent.removeChild(parent.getChildByName(winBGContainer.name))
                            })
                        .on('pointerup', function(){this.tint='0xffffff';})      

        
    
    
    
    
     
    winBGContainer.posX = x

    winBGContainer.posY = y
    
    
    
    
    
    
    
    return [winBGContainer,editBtnInputBox,delBtnInputBox]
      
    
};







function moveAbleWinBlockB(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,tapeAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗
    console.log(fontColor)
    
    //deleteExitsted WinBlock
    
    parent.removeChild(parent.getChildByName(containerName))
    
    
    
    //text style    timelineLabelInputStyle
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSize,//15,
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


        winBGContainer.interactive = true;



    
    var winBG =  new PIXI.Graphics(); //asset 主視窗
        winBG.lineStyle(0, '0xff3333', 0);
        winBG.beginFill('0x55ff55',1);
        winBG.drawRoundedRect(0,0, w,h, borderRect);
        winBG.endFill();
        winBG.name = 'winBG'
        winBG.x = x
        winBG.y = y
        winBG.alpha = 1
      //  winBG.zOrder = 1

   // parent.addChild(winBG)
        //winBG.interactive = true;

    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(1, borderColor, borderAlpha);
        winTapeBlock.beginFill(winTapeColor,tapeAlpha);
        winTapeBlock.drawRoundedRect(0,0, w,30, borderRect);
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
        workAreaWin.drawRoundedRect(0,0, w,h-30, borderRect);
        workAreaWin.endFill();
        workAreaWin.name = 'workAreaWin'
       // workAreaWin.x = x
        workAreaWin.y = 30
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
        winLabelText.y = 15

    
    winTapeBlock.interactive = true;


    winTapeBlock
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
    
    
    function onDragStart(event) {
        console.log('拉動')
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
        closeIconBtn.y =  15

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
    
    
    
    return winBGContainer
      
    
};


//dark background moveAblewin
function moveAbleWinBlockC(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗
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

                              //  console.log('close win', parentName)

                                })
                            .on('pointerup', function(){this.tint='0xffffff';})      
        
            };
    
    
     
    winBGContainer.posX = x

    winBGContainer.posY = y
    
    
    
    return winBGContainer
      
    
};

// 顯示日期使用
function moveAbleWinBlockD(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗
   // console.log(fontColor)
    
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
      //  winBGContainer.addChild(darkBG)

      //  darkBG.interactive = true;


    
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
    
    
    
    return winBGContainer
      
    
};


function moveAbleWinBlockE(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,tapeAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗
    console.log(fontColor)
    
    //deleteExitsted WinBlock
    
    parent.removeChild(parent.getChildByName(containerName))
    
    
    
    //text style    timelineLabelInputStyle
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSize,//15,
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


        winBGContainer.interactive = true;



    
    var winBG =  new PIXI.Graphics(); //asset 主視窗
        winBG.lineStyle(0, '0xff3333', 0);
        winBG.beginFill('0x55ff55',1);
        winBG.drawRoundedRect(0,0, w,h, borderRect);
        winBG.endFill();
        winBG.name = 'winBG'
        winBG.x = x
        winBG.y = y
        winBG.alpha = 1
      //  winBG.zOrder = 1

   // parent.addChild(winBG)
        //winBG.interactive = true;

    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(1, borderColor, borderAlpha);
        winTapeBlock.beginFill(winTapeColor,tapeAlpha);
        winTapeBlock.drawRoundedRect(0,0, w,30, borderRect);
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
        workAreaWin.drawRoundedRect(0,0, w,h-30, borderRect);
        workAreaWin.endFill();
        workAreaWin.name = 'workAreaWin'
       // workAreaWin.x = x
        workAreaWin.y = 30
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
        winLabelText.y = 15

    
    winTapeBlock.interactive = false;


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
        closeIconBtn.y =  15

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
    
    
    
    return winBGContainer
      
    
};


function moveAbleWinBlockF(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗
  //  console.log(fontColor)
    
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





    
    var winTapeBlock =  new PIXI.Graphics(); //asset 主視窗
        winTapeBlock.lineStyle(0, '0xffffff', 0);
        winTapeBlock.beginFill(winTapeColor,1);
        winTapeBlock.drawRoundedRect(0,0, w,30, borderRect);
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
        workAreaWin.drawRoundedRect(0,0, w,h-30, borderRect);
        workAreaWin.endFill();
        workAreaWin.name = 'workAreaWin'
       // workAreaWin.x = x
        workAreaWin.y = 31
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
        winLabelText.y = 15

    
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
            console.log(selContainer.x,selContainer.y,selContainer.width,selContainer.height)
            
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
        closeIconBtn.y =  15

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
    
    
    
    return winBGContainer
      
    
};
function errorMsgBox(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,errMsgFontColor,errMsgText){   //創建視窗
        
    //text style    timelineLabelInputStyle
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: fontColor, // gradient
        stroke: '0x000000',
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
    var errMsgTextfontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: errMsgFontColor, // gradient
        stroke: '0x000000',
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth:1600,
        });
    


    var winBG =  new PIXI.Graphics(); //asset 主視窗
    winBG.lineStyle(borderWidth, borderColor, borderAlpha);
    winBG.beginFill(winFillColor,FillAlpha);
    winBG.drawRoundedRect(0,0, w,h, borderRect);
    winBG.endFill();
    winBG.name = 'errorMsgBox'
    winBG.x = x
    winBG.y = y
    winBG.alpha = 1
    parent.addChild(winBG)

    
    var winLabelText = new PIXI.Text(labelText, fontStyle);
            
            
        winBG.addChild(winLabelText)

        winLabelText.x = textX
        winLabelText.pivot.y = winLabelText.height/2

        winLabelText.y = h/2

    var winBGContainer = new PIXI.Container()
        winBGContainer.name = containerName;
        winBG.addChild(winBGContainer)

    
    var errMsgText = new PIXI.Text(errMsgText, errMsgTextfontStyle);
            
            
        winBG.addChild(errMsgText)

        errMsgText.x = winLabelText .width +40
        errMsgText.pivot.y = errMsgText.height/2

        errMsgText.y = h/2
    
    
    
    return errMsgText
    

    
    
};

    
//開啟時間選擇視窗
function buildDaysSelWin(parent,x,y,w,h,returnTextBox){
    
    parent.removeChild(parent.getChildByName("daysSelectWin_container"))

    var daysSelectWin = new moveAbleWinBlock(uiBaseContainer,x,y,450,570,'選取時間',20,20,14,'0xffffff','daysSelectWin_container',1,'0x555555',5,'0x777777',1,1,'0x555555',daysApp,screenW,screenH,true)
    daysSelectWin.name = 'daysSelectWin_container'
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

    
    console.log(selYear,selMonth,selDay)
    
    var openDaysSelectBlock = new buildDaysWinBlock(daysSelectWin,20,100,selYear,selMonth+1,selDay,4,1,returnTextBox)
    
    
    var pageUpCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 32,
        padding:'5px',
        width: '32px',
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
    
    pageUpCtrBtnBox.children[3].pivot.x = 5
    pageUpCtrBtnBox.y = 40
    pageUpCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageUpCtrBtnBox)   
    
    var pageDownCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 32,
        padding:'5px',
        width: '32px',
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
    
    pageDownCtrBtnBox.children[3].pivot.x = 5
    pageDownCtrBtnBox.y = 40
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
                                            var openDaysSelectBlock = new buildDaysWinBlock(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,returnTextBox)

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
                                            var openDaysSelectBlock = new buildDaysWinBlock(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,returnTextBox)

                                      })
                     .on('pointerup', function(){this.alpha=1;})
    
    
    
    //console.log(openDaysSelectBlock) 
    openDaysSelectBlock.interactive = true;

    return openDaysSelectBlock
};
    
function buildTimeSelWinA(x,y,returnTextBox,scale,autoClose){
    uiBaseContainer.removeChild(uiBaseContainer.getChildByName("timeSelectWin_container"))
  
    var timeSelectWin = new moveAbleWinBlockC(uiBaseContainer,x,y,450,570,'',20,20,14,'0xffffff','timeSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
    timeSelectWin.name = 'timeSelectWin_container'
    timeSelectWin.scale.set(scale)
    
    var pageUpCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 32,
        padding:'5px',
        width: '32px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x333333', rounded: 5, stroke: {color: '0x333333', width: 1}},
            focused: {fill: '0x333333', rounded: 5, stroke: {color: '0x333333', width: 1}},
            disabled: {fill: '0x333333', rounded: 5}
        }
    })
    
    
    pageUpCtrBtnBox.text = '＜'
    pageUpCtrBtnBox.x = 50
    
    pageUpCtrBtnBox.children[3].pivot.x = 5
    pageUpCtrBtnBox.y = 50
    pageUpCtrBtnBox.disabled =true
    timeSelectWin.addChild(pageUpCtrBtnBox)   
    
    
};



function buildDaysSelWinB(parent,x,y,returnTextBox,scale,autoClose){
    
    
    parent.removeChild(parent.getChildByName("daysSelectWin_container"))

    var daysSelectWin = new moveAbleWinBlockC(uiBaseContainer,x,y,450,570,'',20,20,14,'0xffffff','daysSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
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
    console.log(returnTextBox)
    var openDaysSelectBlock = new buildDaysWinBlockB(daysSelectWin,20,100,selYear,selMonth+1,selDay,4,1,returnTextBox,true)
    
    var pageUpCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 32,
        padding:'5px',
        width: '32px',
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
    
    pageUpCtrBtnBox.children[3].pivot.x = 5
    pageUpCtrBtnBox.y = 40
    pageUpCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageUpCtrBtnBox)   
    
    var pageDownCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 32,
        padding:'5px',
        width: '32px',
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
    
    pageDownCtrBtnBox.children[3].pivot.x = 5
    pageDownCtrBtnBox.y = 40
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
                                            var openDaysSelectBlock = new buildDaysWinBlockB(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,returnTextBox,true)
                                            
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
                                            var openDaysSelectBlock = new buildDaysWinBlockB(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,returnTextBox,true)

                                      })
                     .on('pointerup', function(){this.alpha=1;})
    
    
    
    //console.log(openDaysSelectBlock) 
    openDaysSelectBlock.interactive = true;

    return openDaysSelectBlock
};
    

//日期，show booking days

function buildDaysSelWinC(parent,x,y,scale,userName,autoClose){
    
    
    parent.removeChild(parent.getChildByName("daysSelectWin_container"))

    var daysSelectWin = new moveAbleWinBlockC(uiBaseContainer,x,y,450,570,'',20,20,14,'0xffffff','daysSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
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
    console.log(userName)
    var openDaysSelectBlock = new buildDaysWinBlockC(daysSelectWin,20,100,selYear,selMonth+1,selDay,4,1,false)
    
    var pageUpCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 32,
        padding:'5px',
        width: '32px',
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
    
    pageUpCtrBtnBox.children[3].pivot.x = 5
    pageUpCtrBtnBox.y = 40
    pageUpCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageUpCtrBtnBox)   
    
    var pageDownCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 32,
        padding:'5px',
        width: '32px',
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
    
    pageDownCtrBtnBox.children[3].pivot.x = 5
    pageDownCtrBtnBox.y = 40
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
                                            var openDaysSelectBlock = new buildDaysWinBlockC(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,false)
                                            
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
                                            var openDaysSelectBlock = new buildDaysWinBlockC(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,false)

                                      })
                     .on('pointerup', function(){this.alpha=1;})
    
    
    
    //console.log(openDaysSelectBlock) 
    openDaysSelectBlock.interactive = true;

    return openDaysSelectBlock
};


function buildDaysSelWinForTaskEditor(parent,x,y,returnTextBox,returnTextBoxB,scale,autoClose){
    
    
    parent.removeChild(parent.getChildByName("daysSelectWin_container"))

    var daysSelectWin = new moveAbleWinBlockC(uiBaseContainer,x,y,450,570,'',20,20,14,'0xffffff','daysSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
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
    console.log(returnTextBox)
    var openDaysSelectBlock = new buildDaysWinBlockForTaskEditor(daysSelectWin,20,100,selYear,selMonth+1,selDay,4,1,returnTextBox,returnTextBoxB,true)
    
    var pageUpCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 32,
        padding:'5px',
        width: '32px',
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
    
    pageUpCtrBtnBox.children[3].pivot.x = 5
    pageUpCtrBtnBox.y = 40
    pageUpCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageUpCtrBtnBox)   
    
    var pageDownCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 32,
        padding:'5px',
        width: '32px',
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
    
    pageDownCtrBtnBox.children[3].pivot.x = 5
    pageDownCtrBtnBox.y = 40
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
                                            var openDaysSelectBlock = new buildDaysWinBlockForTaskEditor(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,returnTextBox,returnTextBoxB,true)
                                            
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
                                            var openDaysSelectBlock = new buildDaysWinBlockForTaskEditor(daysSelectWin,20,100,daysSelectWin.selYear,daysSelectWin.selMonth+1,1,4,1,returnTextBox,returnTextBoxB,true)

                                      })
                     .on('pointerup', function(){this.alpha=1;})
    
    
    
    //console.log(openDaysSelectBlock) 
    openDaysSelectBlock.interactive = true;

    return openDaysSelectBlock
};

//日期，show booking days 檢視人員工作日


function buildDaysSelWinD(parent,x,y,w,h,scale,userName,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,userDayOffDB,autoClose){
    
   // console.log(allReadyRangeDays)
   // console.log(allWorkingRangeDays)
   // console.log(allFinishRangeDays)
    console.log(userDayOffDB)

    parent.removeChild(parent.getChildByName("daysSelectWin_container"))

    var daysSelectWin = new moveAbleWinBlockD(uiBaseContainer,x,y,w,h,'',20,20,14,'0xffffff','daysSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
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
    
    var startMonth = selMonth +1

    
   
    var canWinBG =  new PIXI.Graphics(); //asset 主視窗
        canWinBG.lineStyle(1, '0xffffff', 1);
        canWinBG.beginFill('0x222222',0.3);
        canWinBG.drawRoundedRect(0,0, w-10,h-60, 2);
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
    
    
    for(var i = 0 ; i < 6; i++){
        
        
        var currentMonth =   startMonth + i  
        if(currentMonth > 12){
           var schMonth = currentMonth % 12
           var schYear = selYear +1
            }else{
           var schMonth = currentMonth
           var schYear = selYear 

        };
        if( i == 0){
            daysSelectWin.startYear = schYear
 
            
        }else if(i == 5){
            daysSelectWin.lastYear = schYear
            daysSelectWin.lastMonth = schMonth

     
        };
         console.log(schMonth)
      //  console.log(Math.floor(i/2))
        var schWinScale = 0.6
        var openDaysSelectBlock = new buildDaysWinBlockD(canWinBGContainer,(i%2)*400*schWinScale+5,Math.floor(i/2)*420*schWinScale+60,schYear,schMonth,selDay,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,schWinScale,userDayOffDB,false)


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
    pageUpCtrBtnBox.x = 420
    
    pageUpCtrBtnBox.children[3].pivot.x = 5
    pageUpCtrBtnBox.y = 26
    pageUpCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageUpCtrBtnBox)   
    daysSelectWin.startMonth = startMonth
    daysSelectWin.startYear = selYear

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
    pageDownCtrBtnBox.x = 460
    
    pageDownCtrBtnBox.children[3].pivot.x = 5
    pageDownCtrBtnBox.y = 26
    pageDownCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageDownCtrBtnBox)   
    
    
    pageUpCtrBtnBox.interactive = true;
    pageUpCtrBtnBox.buttonMode = true;
    pageUpCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
   
                   .on('mousedown',function(){this.alpha=0.5;
                                       
                                                    var daysSelectWin = this.parent

                                                    daysSelectWin.removeChild(daysSelectWin.getChildByName("canWinBG_Container"))
                                                    var canWinBGContainer = new PIXI.Container()
                                                        canWinBGContainer.name = "canWinBG_Container"
                                                        daysSelectWin.addChild(canWinBGContainer)
                                                        canWinBGContainer.x = 5
                                                        canWinBGContainer.y = -3
                                                   var currentStartMonth = daysSelectWin.startMonth
                                                   var currentLastMonth = daysSelectWin.lastMonth
                                                   var currentStartYear = daysSelectWin.startYear
                                                   var currentLastYear = daysSelectWin.lastYear
                                                 //  var nextStartMonth = (currentStartMonth +6)%12
                                                  // console.log(currentStartYear,currentLastYear,currentStartMonth,currentLastMonth,nextStartMonth)


                                                   for(var i = 0 ; i < 6; i++){
                                                        var currentMonth =   currentStartMonth - i  -1
                                                        if(currentMonth < 1){

                                                           if( (12+currentMonth) % 12 == 0){

                                                                 var schMonth = 12 
                                                                 var schYear = currentStartYear-1
                                                           }else{

                                                                var schMonth = (12+currentMonth) % 12 
                                                                var schYear = currentStartYear -1
                                                           }

                                                            console.log('1111111111111',i,schMonth,schYear)
                                                        }else{
                                                           var schMonth = currentMonth
                                                           var schYear = currentStartYear 
                                                           console.log('22222222222222',i,schMonth,schYear)


                                                        };
                                                    //    console.log(i,currentStartMonth,schMonth,schYear)

                                                        if( i == 0){
                                                          //  console.log('startYear',i,schYear)
                                                            daysSelectWin.lastYear = schYear
                                                            daysSelectWin.lastMonth = schMonth

                                                           // this.startYear = schYear


                                                        }else if(i == 5){
                                                            daysSelectWin.startYear = schYear
                                                            daysSelectWin.startMonth = schMonth


                                                        };
                                                      //  console.log(Math.floor(i/2))
                                                       var schWinScale = 0.6
                                                       //console.log(((i+1)%2)*400*schWinScale+5,Math.floor((5-i)/2)*420*schWinScale+60)
                                                 // console.log(schYear,schMonth,selDay,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,schWinScale)

                                                   var openDaysSelectBlock = new buildDaysWinBlockD(canWinBGContainer,((i+1)%2)*400*schWinScale+5,Math.floor((5-i)/2)*420*schWinScale+60,schYear,schMonth,selDay,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,schWinScale,userDayOffDB,false)

                                                };
                                                console.log(daysSelectWin)   

                        
                                            
                                             })
    
                    .on('pointerup', function(){this.alpha=1;})
    
    pageDownCtrBtnBox.interactive = true;
    pageDownCtrBtnBox.buttonMode = true;
    pageDownCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                     .on('pointerout', function(){this.alpha=1;})
                     .on('mousedown',function(){this.alpha=0.5;

                                                    var daysSelectWin = this.parent

                                                        daysSelectWin.removeChild(daysSelectWin.getChildByName("canWinBG_Container"))
                                                    var canWinBGContainer = new PIXI.Container()
                                                        canWinBGContainer.name = "canWinBG_Container"
                                                        daysSelectWin.addChild(canWinBGContainer)
                                                        canWinBGContainer.x = 5
                                                        canWinBGContainer.y = -3                  



                                                    var currentStartMonth = daysSelectWin.startMonth
                                                    var currentLastMonth = daysSelectWin.lastMonth
                                                    var currentStartYear = daysSelectWin.startYear
                                                    var currentLastYear = daysSelectWin.lastYear


                                                       //var nextStartMonth = (currentStartMonth +6)%12
                                                       console.log(currentStartYear,currentLastYear,currentStartMonth,currentLastMonth)


                                                   for(var i = 0 ; i < 6; i++){
                                                        var currentMonth =   currentLastMonth + i  + 1
                                                        if(currentMonth >= 12){

                                                               if( (currentMonth) % 12 == 0){

                                                                     var schMonth = 12 
                                                                     var schYear = currentLastYear 
                                                               }else{
                                                                    var schYear = currentLastYear + 1

                                                                    var schMonth = (currentMonth) % 12  
                                                               };
                                                                console.log('1111111111111',i,schMonth,schYear)
                                                        }else{
                                                           var schMonth = currentMonth
                                                           var schYear = currentLastYear 
                                                           console.log('22222222222222',i,schMonth,schYear)


                                                        };
                                                    //    console.log(i,currentStartMonth,schMonth,schYear)

                                                        if( i == 0){
                                                            console.log('startYear',i,schYear)
                                                            daysSelectWin.startYear = schYear
                                                            daysSelectWin.startMonth = schMonth

                                                           // this.startYear = schYear


                                                        }else if(i == 5){

                                                            daysSelectWin.lastYear = schYear
                                                            daysSelectWin.lastMonth = schMonth

                                                        };
                                                      //  console.log(Math.floor(i/2))
                                                        var schWinScale = 0.6


                                                        var openDaysSelectBlock = new buildDaysWinBlockD(canWinBGContainer,(i%2)*400*schWinScale+5,Math.floor(i/2)*420*schWinScale+60,schYear,schMonth,selDay,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,schWinScale,userDayOffDB,false)



                                                        };
                                                        console.log(this.parent)   

                                            })
    
    
    
    
                     .on('pointerup', function(){this.alpha=1;})
    
    
    
    //console.log(openDaysSelectBlock) 
  //  openDaysSelectBlock.interactive = true;
    
    
    

   // return openDaysSelectBlock
};








//日期，show booking days 檢視人員工作日 ，選擇工作區間


function buildWorkingDaysSelWinA(parent,x,y,w,h,scale,userName,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,returnStartDay_inputBox,returnEndDay_inputBox,autoClose){
    
    console.log('buildWorkingDaysSelWinA')
    
    console.log(returnStartDay_inputBox,returnEndDay_inputBox)
    parent.removeChild(parent.getChildByName("daysSelectWin_container"))

    var daysSelectWin = new moveAbleWinBlockD(uiBaseContainer,x,y,w,h,'',20,20,14,'0xffffff','daysSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
                             // moveAbleWinBlockC(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn
    daysSelectWin.name = 'daysSelectWin_container'
    daysSelectWin.scale.set(scale)
    daysSelectWin.daySelCount = 0
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
    
    var startMonth = selMonth +1

    
   
    var canWinBG =  new PIXI.Graphics(); //asset 主視窗
        canWinBG.lineStyle(1, '0xffffff', 1);
        canWinBG.beginFill('0x222222',0.3);
        canWinBG.drawRoundedRect(0,0, w-10,h-60, 2);
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
    
    canWinBGContainer.daySelCount = 0  //選擇起始結束日計數器
    
    var startDay_InputBox = new inputBoxWithLabelB(daysSelectWin,10,30,50,110,1,'起始日:','',10,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x222222','center')
      //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        startDay_InputBox.disabled = true
        startDay_InputBox.name = 'startDay_InputBox'

    
    var endDay_InputBox = new inputBoxWithLabelB(daysSelectWin,180,30,50,110,1,'結束日:','',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x222222','center')
       // endDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        endDay_InputBox.disabled = true
        endDay_InputBox.name = 'endDay_InputBox'

    var editProjBtn = new buildInputBoxBtn(daysSelectWin,350,28,80,20,10,'確認日期','0xffffff','white_outline')

    
    
    for(var i = 0 ; i < 6; i++){
        
        
        var currentMonth =   startMonth + i  
        if(currentMonth > 12){
           var schMonth = currentMonth % 12
           var schYear = selYear +1
            }else{
           var schMonth = currentMonth
           var schYear = selYear 

        };
        if( i == 0){
            daysSelectWin.startYear = schYear
 
            
        }else if(i == 5){
            daysSelectWin.lastYear = schYear
            daysSelectWin.lastMonth = schMonth

     
        };
         console.log(schMonth)
      //  console.log(Math.floor(i/2))
        var schWinScale = 0.6
        var openDaysSelectBlock = new buildDaysWinBlockE(canWinBGContainer,(i%2)*400*schWinScale+5,Math.floor(i/2)*420*schWinScale+60,schYear,schMonth,selDay,startDay_InputBox,endDay_InputBox,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,schWinScale,false)


    };
    
    
    var pageUpCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 25,
        padding:'0px',
        width: '25px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
    
    pageUpCtrBtnBox.text = '＜'
    pageUpCtrBtnBox.x = 440
    
    pageUpCtrBtnBox.children[3].pivot.x = 5
    pageUpCtrBtnBox.y = 26
    pageUpCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageUpCtrBtnBox)   
    daysSelectWin.startMonth = startMonth
    daysSelectWin.startYear = selYear

    var pageDownCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 25,
        padding:'0px',
        width: '25px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            focused: {fill: '0x777777', rounded: 5, stroke: {color: '0x777777', width: 1}},
            disabled: {fill: '0x777777', rounded: 5}
        }
    })
    
    pageDownCtrBtnBox.text = '＞'
    pageDownCtrBtnBox.x = 460
    
    pageDownCtrBtnBox.children[3].pivot.x = 5
    pageDownCtrBtnBox.y = 26
    pageDownCtrBtnBox.disabled =true
    daysSelectWin.addChild(pageDownCtrBtnBox)   
    
    
    pageUpCtrBtnBox.interactive = true;
    pageUpCtrBtnBox.buttonMode = true;
    pageUpCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
   
                   .on('mousedown',function(){this.alpha=0.5;
                                       
                                                    var daysSelectWin = this.parent

                                                    daysSelectWin.removeChild(daysSelectWin.getChildByName("canWinBG_Container"))
                                                    var canWinBGContainer = new PIXI.Container()
                                                        canWinBGContainer.name = "canWinBG_Container"
                                                        daysSelectWin.addChild(canWinBGContainer)
                                                        canWinBGContainer.x = 5
                                                        canWinBGContainer.y = -3
                                                   var currentStartMonth = daysSelectWin.startMonth
                                                   var currentLastMonth = daysSelectWin.lastMonth
                                                   var currentStartYear = daysSelectWin.startYear
                                                   var currentLastYear = daysSelectWin.lastYear
                                                 //  var nextStartMonth = (currentStartMonth +6)%12
                                                  // console.log(currentStartYear,currentLastYear,currentStartMonth,currentLastMonth,nextStartMonth)


                                                   for(var i = 0 ; i < 6; i++){
                                                        var currentMonth =   currentStartMonth - i  -1
                                                        if(currentMonth < 1){

                                                           if( (12+currentMonth) % 12 == 0){

                                                                 var schMonth = 12 
                                                                 var schYear = currentStartYear-1
                                                           }else{

                                                                var schMonth = (12+currentMonth) % 12 
                                                                var schYear = currentStartYear -1
                                                           }

                                                            console.log('1111111111111',i,schMonth,schYear)
                                                        }else{
                                                           var schMonth = currentMonth
                                                           var schYear = currentStartYear 
                                                           console.log('22222222222222',i,schMonth,schYear)


                                                        };
                                                    //    console.log(i,currentStartMonth,schMonth,schYear)

                                                        if( i == 0){
                                                          //  console.log('startYear',i,schYear)
                                                            daysSelectWin.lastYear = schYear
                                                            daysSelectWin.lastMonth = schMonth

                                                           // this.startYear = schYear


                                                        }else if(i == 5){
                                                            daysSelectWin.startYear = schYear
                                                            daysSelectWin.startMonth = schMonth


                                                        };
                                                      //  console.log(Math.floor(i/2))
                                                       var schWinScale = 0.6
                                                       //console.log(((i+1)%2)*400*schWinScale+5,Math.floor((5-i)/2)*420*schWinScale+60)
                                                 // console.log(schYear,schMonth,selDay,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,schWinScale)

                                                   var openDaysSelectBlock = new buildDaysWinBlockE(canWinBGContainer,((i+1)%2)*400*schWinScale+5,Math.floor((5-i)/2)*420*schWinScale+60,schYear,schMonth,selDay,startDay_InputBox,endDay_InputBox,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,schWinScale,false)

                                                };
                                                console.log(daysSelectWin)   

                        
                                            
                                             })
    
                    .on('pointerup', function(){this.alpha=1;})
    
    pageDownCtrBtnBox.interactive = true;
    pageDownCtrBtnBox.buttonMode = true;
    pageDownCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                     .on('pointerout', function(){this.alpha=1;})
                     .on('mousedown',function(){this.alpha=0.5;

                                                    var daysSelectWin = this.parent

                                                        daysSelectWin.removeChild(daysSelectWin.getChildByName("canWinBG_Container"))
                                                    var canWinBGContainer = new PIXI.Container()
                                                        canWinBGContainer.name = "canWinBG_Container"
                                                        daysSelectWin.addChild(canWinBGContainer)
                                                        canWinBGContainer.x = 5
                                                        canWinBGContainer.y = -3                  



                                                    var currentStartMonth = daysSelectWin.startMonth
                                                    var currentLastMonth = daysSelectWin.lastMonth
                                                    var currentStartYear = daysSelectWin.startYear
                                                    var currentLastYear = daysSelectWin.lastYear


                                                       //var nextStartMonth = (currentStartMonth +6)%12
                                                       console.log(currentStartYear,currentLastYear,currentStartMonth,currentLastMonth)


                                                   for(var i = 0 ; i < 6; i++){
                                                        var currentMonth =   currentLastMonth + i  + 1
                                                        if(currentMonth >= 12){

                                                               if( (currentMonth) % 12 == 0){

                                                                     var schMonth = 12 
                                                                     var schYear = currentLastYear 
                                                               }else{
                                                                    var schYear = currentLastYear + 1

                                                                    var schMonth = (currentMonth) % 12  
                                                               };
                                                                console.log('1111111111111',i,schMonth,schYear)
                                                        }else{
                                                           var schMonth = currentMonth
                                                           var schYear = currentLastYear 
                                                           console.log('22222222222222',i,schMonth,schYear)


                                                        };
                                                    //    console.log(i,currentStartMonth,schMonth,schYear)

                                                        if( i == 0){
                                                            console.log('startYear',i,schYear)
                                                            daysSelectWin.startYear = schYear
                                                            daysSelectWin.startMonth = schMonth

                                                           // this.startYear = schYear


                                                        }else if(i == 5){

                                                            daysSelectWin.lastYear = schYear
                                                            daysSelectWin.lastMonth = schMonth

                                                        };
                                                      //  console.log(Math.floor(i/2))
                                                        var schWinScale = 0.6


                                                        var openDaysSelectBlock = new buildDaysWinBlockE(canWinBGContainer,(i%2)*400*schWinScale+5,Math.floor(i/2)*420*schWinScale+60,schYear,schMonth,selDay,startDay_InputBox,endDay_InputBox,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,schWinScale,false)



                                                        };
                                                        console.log(this.parent)   

                                            })
    
    
    
    
                     .on('pointerup', function(){this.alpha=1;})
    
    
    
    editProjBtn.on('mousedown',function(){this.alpha=0.5;

                                                console.log('editProjBtn,確認日期')     
                                          
                                          
                                              //  console.log(startDay_InputBox.text,endDay_InputBox.text)
                                          
                                                if(startDay_InputBox.text == '' | endDay_InputBox.text =='' ){
                                                       console.log('日期不正確') 
                                                   
                                                   }else{
                                                       console.log('回傳日期') 
                                                       
                                                       //(returnStartDay_inputBox,returnEndDay_inputBox)
                                                     //  console.log(uiBaseContainer.getChildByName("taskEditWin_container"))
                                                       
                                                      // var editWin = uiBaseContainer.getChildByName("taskEditWin_container")
                                                      // var editWinStartDay_InputBox = editWin.getChildByName("startDay_InputBox")
                                                      // var editWinEndDay_InputBox = editWin.getChildByName("endDay_InputBox")
                                                       returnStartDay_inputBox.text = startDay_InputBox.text
                                                       returnEndDay_inputBox.text = endDay_InputBox.text
                                                        console.log(returnStartDay_inputBox,returnEndDay_inputBox) 
                                                       parent.removeChild(parent.getChildByName("daysSelectWin_container"))
                                                       uiBaseContainer.removeChild(uiBaseContainer.getChildByName("workingUserSelWin_container"))

                                                   };

                                            })
    
    
    
    
    //console.log(openDaysSelectBlock) 
  //  openDaysSelectBlock.interactive = true;
    
    
    

   // return openDaysSelectBlock
};

// 日曆視窗 顯示booking日期 buildDaysWinBlockE // 工作日
function buildDaysWinBlockE(parent,x,y,selYear,selMonth,selDay,fromDay_InputBox,toDay_InputBox,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,blockScale,autoClose){
  //  parent.removeChild(parent.getChildByName("daysWinBG"))
    console.log("buildDaysWinBlockE")
   // fromDay_InputBox.selDayMs = 0
   // toDay_InputBox.selDayMs = 0
    console.log(parent)

    
    console.log(selYear,selMonth,selDay,fromDay_InputBox,toDay_InputBox)

   // console.log(parent)
   // console.log(parent.parent)
    var daysSelectWin_container = parent.parent
    var canWinBG_Container = parent
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
        allDaysBlock.name = 'allDaysBlock'
        allDaysBlock.x = 20
        allDaysBlock.y = 100
        allDaysBlock.alpha = 1
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
    /*
    var selectDayInputBox = new PIXI.TextInput({
    input: {
        fontSize: 16,
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
    selectDayInputBox.text = '選擇日期 '
    selectDayInputBox.x = 60
    
   // selectDayInputBox.pivot.y = editBtnInputBox.height/2
    selectDayInputBox.y = 410
    
    daysWinBG.addChild(selectDayInputBox)   

    */

    
    
    
    //editBtnInputBox.children[3].pivot.x = editBtnInputBox.children[3].width/2 - editBtnWidth/2 -15

    
    
    
    
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
       // console.log(selDayMs)
        
        //allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays
        
        if(allReadyRangeDays.includes(selDayMs) == true){
            var dayBlockColor = '0xff0000'  
        }else if(allWorkingRangeDays.includes(selDayMs) == true){
            var dayBlockColor = '0xffff00'  
   
        }else if(allFinishRangeDays.includes(selDayMs) == true){
            var dayBlockColor = '0xff00ff'  

        }else if(allSubmitRangeDays.includes(selDayMs) == true){
            var dayBlockColor = '0x00ffff'  
     
        }else{
            var dayBlockColor = '0x444444'  
            
        };
        
        
       //  var dayBlockColor = '0x444444'  
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            dayBlock.beginFill(dayBlockColor,0.3);
            dayBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH, 2);
            dayBlock.endFill();
            dayBlock.x = (i%7)*dayBlockWH
            dayBlock.y = Math.floor(i/7)*dayBlockWH

            dayBlock.name  = 'dayBlockWeekend'

        
            allDaysBlock.addChild(dayBlock)
        
            dayBlock.selDayMs = selDayMs
        
        var workingDaySelBlock =  new PIXI.Graphics();   
            workingDaySelBlock.lineStyle(1, '0xffffff', 0);
            workingDaySelBlock.beginFill('0x66ffff',0.5);
            workingDaySelBlock.drawRoundedRect(0,0, dayBlockWH,dayBlockWH/5, 2);
            workingDaySelBlock.endFill();
            workingDaySelBlock.y = (dayBlockWH/5)*4
            workingDaySelBlock.name = 'workingDaySelBlock'
            workingDaySelBlock.alpha = 0
            dayBlock.addChild(workingDaySelBlock)

        
        
        
            
        if(i>=getSelectFirstDay && i<currentMonthDaysCount+getSelectFirstDay){
            monthDayLabel.x = 20
            monthDayLabel.y =20
            dayBlock.dayText = i-getSelectFirstDay+1
            dayBlock.name  = 'dayBlock'

            dayBlock.addChild(monthDayLabel)  
            
        }else if(i<getSelectFirstDay){
            var monthDayLabel = new PIXI.Text(lastMonthDaysCount-(getSelectFirstDay-i)+1, bigFontDarkStyle);
                dayBlock.dayText = lastMonthDaysCount-(getSelectFirstDay-i)+1
                monthDayLabel.x = 20
                monthDayLabel.y =20
                dayBlock.addChild(monthDayLabel)  
        }else{
            var monthDayLabel = new PIXI.Text(i - getSelectFirstDay -currentMonthDaysCount+1, bigFontDarkStyle);
                monthDayLabel.x = 20
                monthDayLabel.y =20
            dayBlock.dayText = i - getSelectFirstDay -currentMonthDaysCount+1

                dayBlock.addChild(monthDayLabel)   
            
            
        }
         

        
        
        
        
        
        dayBlock.interactive = true;
        dayBlock.buttonMode = true;
        dayBlock.on('pointerover', function(){this.alpha=0.5;})
                .on('pointerout', function(){this.alpha=1;})
                .on('mousedown',function(){this.alpha=0.5;
                                           // selectDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            parent.selYear = selYear;
                                            parent.selMonth = selMonth;
                                            parent.selDay = this.dayText
                                          //  returnTextBox.text =  selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                          //  console.log(this)
                                         //   console.log(this.selDayMs)
                                            var clickDayStingSimple = (new Date(this.selDayMs).toLocaleString()).split(' ')[0]

                                            var dayString = clickDayStingSimple.split('/')[0] + " 年 " + clickDayStingSimple.split('/')[1] + " 月 " + clickDayStingSimple.split('/')[2] + " 日 "
                                         //  console.log(dayString)
                                          // console.log(this.parent.parent.parent.parent)
                                           // var canWinBG_Container = this.parent.parent.parent
                                           // daysSelectWin_container
                                           // var daysSelectWin_container = canWinBG_Container.parent
                                            // console.log(daySelCount)
                                           // console.log(daysSelectWin_container)
                                          //  console.log(this)
                                          //  console.log(this.name)

                                            if(this.name == 'dayBlock'){
                                                
                                                console.log('dayBlock_______________0000000000000000000',daysSelectWin_container.daySelCount)
                                            
                                                if(daysSelectWin_container.daySelCount == 0 ){  // 定義起始日期
                                                    daysSelectWin_container.daySelCount = 1  
                                                   // this.tint = '0xff0000'
                                                    this.getChildByName("workingDaySelBlock").alpha = 1


                                                    fromDay_InputBox.selDayMs = this.selDayMs
                                                    
                                                    fromDay_InputBox.text = dayString
                                                    fromDay_InputBox.children[3].position.x = 5-fromDay_InputBox.children[3].width/2
                                                   // toDay_InputBox.selDayMs = ''

                                                    daysSelectWin_container.storeSelDayMs = this.selDayMs  // 儲存比較MS
                                                    
                                                    //console.log(fromDay_InputBox.selDayMs,toDay_InputBox.selDayMs)

                                                    console.log('選擇起始日期')
                                                    //fromDay_InputBox,toDay_InputBox     
                                                }else if(daysSelectWin_container.daySelCount ==1){

                                                    if( this.selDayMs > fromDay_InputBox.selDayMs ) { //選擇日期大於開始日期
                                                        console.log('選擇日期大於開始日期')
                                                       // canWinBG_Container.daySelCount = 2  

                                                        toDay_InputBox.selDayMs = this.selDayMs
             
                                                        toDay_InputBox.text = dayString
                                                        toDay_InputBox.children[3].position.x = 5-toDay_InputBox.children[3].width/2
                                                        
                                                        
                                                        console.log(fromDay_InputBox.selDayMs,toDay_InputBox.selDayMs)
                    


                                                    }else if( this.selDayMs == fromDay_InputBox.selDayMs ){ //選擇日期等於開始日期
                                                        toDay_InputBox.selDayMs = this.selDayMs
                                                        console.log('選擇日期等於開始日期')
                                                    
                                                        toDay_InputBox.text = dayString
                                                        toDay_InputBox.children[3].position.x = 5-toDay_InputBox.children[3].width/2
                                                        

                                                       // canWinBG_Container.daySelCount = 0  
                                                        console.log(fromDay_InputBox.selDayMs,toDay_InputBox.selDayMs)

                                                    }else if( this.selDayMs < fromDay_InputBox.selDayMs){ //選擇日期小於開始日期

                                                        console.log('選擇日期小於開始日期')
                                                        
                                                        
                                                        
                                                      //  toDay_InputBox.selDayMs = ''
                                                        toDay_InputBox.selDayMs =  fromDay_InputBox.selDayMs
                                                        
                                                        toDay_InputBox.text = fromDay_InputBox.text
                                                        toDay_InputBox.children[3].position.x = 5-toDay_InputBox.children[3].width/2

                                                        
                                                        fromDay_InputBox.selDayMs = this.selDayMs
   
                                                        fromDay_InputBox.text = dayString
                                                        fromDay_InputBox.children[3].position.x = 5-fromDay_InputBox.children[3].width/2
                                                        
                                                        
                                                        console.log(fromDay_InputBox.selDayMs,toDay_InputBox.selDayMs)
                                        
                                                        
                                                        
                                                        

                                                    }else{

                                                        console.log('非本月日期')
                                                        //toDay_InputBox.selDayMs = ''
                                                        console.log(fromDay_InputBox.selDayMs,toDay_InputBox.selDayMs)


                                                    };
                                                      for(var i =0; i<canWinBG_Container.children.length; i++){
                                                           // console.log(canWinBG_Container.children[i].name)
                                                            var selAllDaysBlock = canWinBG_Container.children[i].getChildByName("allDaysBlock")    
                                                            // console.log(selAllDaysBlock)

                                                            for(var d=0;d<selAllDaysBlock.children.length;d++){
                                                                if(selAllDaysBlock.children[d].selDayMs <= this.selDayMs &  selAllDaysBlock.children[d].selDayMs >= fromDay_InputBox.selDayMs){
                                                                  //  console.log(selAllDaysBlock.children[d].name,selAllDaysBlock.children[d].selDayMs)
                                                                   
                                                                    if(selAllDaysBlock.children[d].name == 'dayBlock'){
                                                                        selAllDaysBlock.children[d].getChildByName("workingDaySelBlock").alpha = 1
    
                                                                    }
                                                                    


                                                                }else{

                                                                    selAllDaysBlock.children[d].getChildByName("workingDaySelBlock").alpha = 0


                                                                };


                                                            };


                                                        };
                                                    
                                                    
                                                    

                                                }else if(daysSelectWin_container.daySelCount ==1){
                                                         
                                                        console.log('取消日期')
                                                         
                                                };
                                           
                                            }else{
                                                
                                                
                                                console.log('11111111111111111')

                                                
                                                
                                            };
                                           
                                            if (autoClose == true){
                                              //  console.log('11111')
                                              //  uiBaseContainer.removeChild(uiBaseContainer.getChildByName("daysSelectWin_container"))

                                                
                                            }else{
                                                
                                                console.log('22222')
                                            }
                                           
                                           
                                           console.log('333333333333333333333333')

                                           
                                          })
                .on('pointerup', function(){this.alpha=1;})

        
        
        
    };
    
    
    console.log(fromDay_InputBox.selDayMs,toDay_InputBox.selDayMs,daysSelectWin_container.daySelCount)
    
    
    if( fromDay_InputBox.selDayMs != undefined & toDay_InputBox.selDayMs != undefined ){
                console.log('標記工作時間_111111')
        
                console.log(canWinBG_Container)
        
                markWorkingDay(canWinBG_Container)
    }else if(fromDay_InputBox.selDayMs == undefined){
                     console.log('無起始時間_22222')

    }else if(toDay_InputBox.selDayMs == undefined){
                console.log('無結束時間_3333')
     
    }else{
        
                console.log('無時間_44444')

    };
    

    
    
    
    function markWorkingDay(canContainer){
        
         for(var i =0; i<canWinBG_Container.children.length; i++){
                               // console.log(canWinBG_Container.children[i].name)
                                var selAllDaysBlock = canWinBG_Container.children[i].getChildByName("allDaysBlock")    
                                 console.log(selAllDaysBlock)
                                console.log(fromDay_InputBox)
                                 console.log(toDay_InputBox)

                            
                                for(var d=0;d<selAllDaysBlock.children.length;d++){
                                    if(selAllDaysBlock.children[d].selDayMs <= toDay_InputBox.selDayMs &  selAllDaysBlock.children[d].selDayMs >= fromDay_InputBox.selDayMs){
                                      //  console.log(selAllDaysBlock.children[d].name,selAllDaysBlock.children[d].selDayMs)

                                        if(selAllDaysBlock.children[d].name == 'dayBlock'){
                                            selAllDaysBlock.children[d].getChildByName("workingDaySelBlock").alpha = 1

                                        }



                                    }else{

                                        selAllDaysBlock.children[d].getChildByName("workingDaySelBlock").alpha = 0


                                    };
                                    
                                    
                                };
                               

        };
                            
        
        
        
        
        
        
    };
    
    
    
    
    return daysWinBG
};


function buildScheduleMainBlock(x,y,fromDay,toDay){
    
    var today = new Date();
   // var today = new Date(-1);
  //  var today = new Date(1);
   // var today = new Date(7);
//var d = new Date(86400000);

  //  console.log(today)
  //  console.log(new Date(today.valueOf()-86400000))
   // console.log(new Date(today.valueOf()+86400000*7))
//
   //  console.log(d)
     //    console.log(new Date(1))
       //  console.log(new Date(7))

    
}


//日期方塊

function buildDayBlock(parent,x,y,w,h,fontSize,daysList,blockScale){
  //  console.log(daysList)
    var daysCount = daysList.length
   // console.log(daysList)
    parent.removeChild(parent.getChildByName("daysListContainer"))
                       
    var daysListContainer = new PIXI.Container()
        daysListContainer.name = 'daysListContainer';
        parent.addChild(daysListContainer)
    
    
    var dayTextFontStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: fontSize,
        fontStyle: 'normal',
        fontWeight: '200',
        fill: '0x333333', // gradient
        stroke: '0x6789aa',
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
    var yearTextFontStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '200',
        fill: '0x999999', // gradient
        stroke: '0x999999',
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        }); 
    
    
    
    for(var i =0 ;i < daysCount ; i++){
        var selDayInfo = daysList[i].split(' ')
          //  console.log(selDayInfo)
        var weekDayText = selDayInfo[0]
        var monthText = selDayInfo[1]
        var dayText = selDayInfo[2]
        var yearText = selDayInfo[3]
      //  console.log(weekDayText)
        if( weekDayText == 'Sat' ||  weekDayText == 'Sun'){
            var blockBGColor = '0xaa6789'          
        }else{
            
            var blockBGColor = '0x6789aa'          
        }

        if(parseInt(dayText) == 1){
            var monthBG =  new PIXI.Graphics(); //asset 主視窗
                monthBG.lineStyle(1,  '0x999999', 1);
                monthBG.beginFill( '0x999999',1);
                monthBG.drawRoundedRect(0,0, w,h, 1);
                monthBG.endFill();
                monthBG.name = 'dayBG'
                monthBG.x = (w)*i 
                monthBG.y = 2
                monthBG.alpha = 1
                daysListContainer.addChild(monthBG)     
            
            var monthText = new PIXI.Text(monthText, dayTextFontStyle);


                monthText.pivot.x = monthText.width/2
                monthText.pivot.y = monthText.height/2
                //console.log( dayText.weight/2)
                monthText.x = w/2 //- dayText.weight/2
                monthText.y = h/2

                monthBG.addChild(monthText)
         
            
        }else if(i == 0 && parseInt(dayText) != 1){
                 
            var monthBG =  new PIXI.Graphics(); //asset 主視窗
                monthBG.lineStyle(1, '0x999999', 1);
                monthBG.beginFill('0x999999',1);
                monthBG.drawRoundedRect(0,0, w,h, 1);
                monthBG.endFill();
                monthBG.name = 'dayBG'
                monthBG.x = (w)*i 
                monthBG.y = 2
                monthBG.alpha = 1
                daysListContainer.addChild(monthBG)     
            
            var monthText = new PIXI.Text(monthText, dayTextFontStyle);


                monthText.pivot.x = monthText.width/2
                monthText.pivot.y = monthText.height/2
                //console.log( dayText.weight/2)
                monthText.x = w/2 //- dayText.weight/2
                monthText.y = h/2

                monthBG.addChild(monthText)      
                 
    
        };
        
        
        
        if(i == 0 ){
            
            
             var yearTextStart = new PIXI.Text(yearText, yearTextFontStyle);     
                 
               // yearTextStart.pivot.x = yearTextStart.width/2
               // yearTextStart.pivot.y = yearTextStart.height/2
                //console.log( dayText.weight/2)
                yearTextStart.x =   0 //- dayText.weight/2
                yearTextStart.y =  -25
               // console.log(yearText)
                daysListContainer.addChild(yearTextStart)        
        }else if(i ==( daysCount -1)){
            console.log(daysCount)
                
             var yearTextEnd = new PIXI.Text(yearText, yearTextFontStyle);     
                 
              //  yearTextEnd.pivot.x = yearTextEnd.width/2
              //  yearTextEnd.pivot.y = yearTextEnd.height/2
                //console.log( dayText.weight/2)
                yearTextEnd.x = 1470  //- dayText.weight/2
                yearTextEnd.y =  -25
               // console.log(yearText)
                daysListContainer.addChild(yearTextEnd)           
                 
                 
                 
                 
                 
         };
        
        
        
        
        
        
        
        
        var dayBG =  new PIXI.Graphics(); //asset 主視窗
            dayBG.lineStyle(1, blockBGColor, 1);
            dayBG.beginFill(blockBGColor,1);
            dayBG.drawRoundedRect(0,0, w,h, 1);
            dayBG.endFill();
            dayBG.name = 'dayBG'
            dayBG.x = (w)*i 
            dayBG.y = w +2
            dayBG.alpha = 1
            daysListContainer.addChild(dayBG)
        
           // console.log(daysList[i].split(' '))

            
            
        
        var dayText = new PIXI.Text(dayText, dayTextFontStyle);


            dayText.pivot.x = dayText.width/2
            dayText.pivot.y = dayText.height/2
            //console.log( dayText.weight/2)
            dayText.x = w/2 //- dayText.weight/2
            dayText.y = h/2

            dayBG.addChild(dayText)
        
        
        
    };
    daysListContainer.x = x
    daysListContainer.y = y
   // console.log(daysListContainer)
    daysListContainer.scale.set(blockScale)
    
    return buildDayBlock
};




function buildRollBarVertical(parent,affectWin,affectWinB,selApp,x,y,w,h,maxViewLength,blockScale){
    
    //console.log(parent,affectWin)
 //   console.log(parent.alpha)
    parent.removeChild(parent.getChildByName("rollBarBG"))
    parent.removeChild(parent.getChildByName("barHold"))

    var rollBarBG =  new PIXI.Graphics(); //asset 主視窗
        rollBarBG.lineStyle(1, '0xffffff', 1);
        rollBarBG.beginFill('0x222222',1);
        rollBarBG.drawRoundedRect(0,0, w, h,(w/2)-2);
        rollBarBG.endFill();
        rollBarBG.name = 'rollBarBG'
        rollBarBG.x = x
        rollBarBG.y = y
        rollBarBG.alpha = 1
        parent.addChild(rollBarBG)   

    
    if(maxViewLength <= h){
        var barHoldHeight = h-2 
        
    }else{
        var barHoldHeight = Math.ceil((parseFloat(h)/parseFloat(maxViewLength)) * h) 
        
    };
    
   
        console.log(barHoldHeight,h)
        var barHold =  new PIXI.Graphics(); //asset 主視窗
        barHold.lineStyle(1, '0x888888', 0);
        barHold.beginFill('0x888888',1);
        barHold.drawRoundedRect(0,0, w-4, barHoldHeight,(w-4)/2);
        barHold.endFill();
        barHold.name = 'barHold'
        barHold.x = x +2
        barHold.y = y +1
        barHold.alpha = 1
        parent.addChild(barHold)   
    
        barHold.interactive = true;
        barHold.buttonMode = true;
    
    
        barHold
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

    if(maxViewLength <= h){
        rollBarBG.alpha = 0
        barHold.alpha = 0
    }
    
    
    
    
    function onDragStart(event) {
  
        this.data = event.data;
       // this.alpha = 0.5;
        this.dragging = true;

        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

      //  this.posY = this.y
        this.mouseStartPosY = mouseposition.y
        //console.log(this.mouseStartPosY)
    };

    function onDragEnd() {
       // this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;


 
        
    };
    
    function onDragMove() {
       // this.alpha = 0.5;
        
        
               //     const newPosition = this.data.getLocalPosition(this.parent);

        if (this.dragging ) {

            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

            var rollScall = h/this.height
                 
            if(mouseposition.y - this.mouseStartPosY <= 0 ){
             //   console.log('aaaa')
                this.y = y
                affectWin.y = y
                affectWinB.y = y
            }else if((mouseposition.y - this.mouseStartPosY + this.height) >= h ){
         
                this.y = y+(h -  this.height)
                 affectWin.y = y - (h - this.height) *rollScall
                 affectWinB.y = y - (h - this.height) *rollScall

               // console.log('bbbbb')
                     }
            else{
              //  console.log('ccccccc')
                this.y = y +mouseposition.y - this.mouseStartPosY

                affectWin.y = y - (mouseposition.y - this.mouseStartPosY)*rollScall
                affectWinB.y = y - (mouseposition.y - this.mouseStartPosY)*rollScall

                

            };
             

        };
        
    };
    
};


function buildRollBarVertical_signalWin(parent,affectWin,selApp,x,y,w,h,maxViewLength,blockScale){
    
    //console.log(parent,affectWin)
 //   console.log(parent.alpha)
    parent.removeChild(parent.getChildByName("rollBarBG"))
    parent.removeChild(parent.getChildByName("barHold"))

    var rollBarBG =  new PIXI.Graphics(); //asset 主視窗
        rollBarBG.lineStyle(1, '0xffffff', 1);
        rollBarBG.beginFill('0x222222',1);
        rollBarBG.drawRoundedRect(0,0, w, h,(w/2)-2);
        rollBarBG.endFill();
        rollBarBG.name = 'rollBarBG'
        rollBarBG.x = x
        rollBarBG.y = y
        rollBarBG.alpha = 1
        parent.addChild(rollBarBG)   

    
    if(maxViewLength <= h){
        var barHoldHeight = h-2 
        
    }else{
        var barHoldHeight = Math.ceil((parseFloat(h)/parseFloat(maxViewLength)) * h) 
        
    };
    
   
        console.log(barHoldHeight,h)
        var barHold =  new PIXI.Graphics(); //asset 主視窗
        barHold.lineStyle(1, '0x888888', 0);
        barHold.beginFill('0x888888',1);
        barHold.drawRoundedRect(0,0, w-4, barHoldHeight,(w-4)/2);
        barHold.endFill();
        barHold.name = 'barHold'
        barHold.x = x +2
        barHold.y = y +1
        barHold.alpha = 1
        parent.addChild(barHold)   
    
        barHold.interactive = true;
        barHold.buttonMode = true;
    
    
        barHold
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

    if(maxViewLength <= h){
        rollBarBG.alpha = 0
        barHold.alpha = 0
    }
    
    
    
    
    function onDragStart(event) {
  
        this.data = event.data;
       // this.alpha = 0.5;
        this.dragging = true;

        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

      //  this.posY = this.y
        this.mouseStartPosY = mouseposition.y
        //console.log(this.mouseStartPosY)
    };

    function onDragEnd() {
       // this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;


 
        
    };
    
    function onDragMove() {
       // this.alpha = 0.5;
        
        
               //     const newPosition = this.data.getLocalPosition(this.parent);

        if (this.dragging ) {

            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

            var rollScall = h/this.height
                 
            if(mouseposition.y - this.mouseStartPosY <= 0 ){
             //   console.log('aaaa')
                this.y = y
                affectWin.y = y
            }else if((mouseposition.y - this.mouseStartPosY + this.height) >= h ){
         
                this.y = y+(h -  this.height)
                 affectWin.y = y - (h - this.height) *rollScall

               // console.log('bbbbb')
                     }
            else{
              //  console.log('ccccccc')
                this.y = y +mouseposition.y - this.mouseStartPosY

                affectWin.y = y - (mouseposition.y - this.mouseStartPosY)*rollScall

                

            };
             

        };
        
    };
    
};


//人員選擇
function buildSelectionWinB(parent,x,y,w,h,tapeText,dataList,returnInputBox){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("openUserSelectWin_container"))
  //  var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    //var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    
   // var userData = JSON.parse(window.localStorage.getItem("userData"));
  
    
    var userSelectWin = new moveAbleWinBlock(uiBaseContainer,x,y,w,h,tapeText,20,20,14,'0xffffff','openUserSelectWin_container',1,'0x333333',5,'0x555555',1,1,'0x333333',daysApp,screenW,screenH,true)
    userSelectWin.name = 'openUserSelectWin_container'
  //  console.log(userData,userData.length)

    userSelectWin.interactive = true;
    
     var userSelectBlock = new buildUserSelectBlock(userSelectWin,5,35,dataList,100,1,returnInputBox)
         userSelectBlock.name = 'userSelectBlock'     
    
};
    
    
//filterSelectWin
function buildFilterSelWin(parent,x,y,type,blockW,blockH,filterList,blockColor,bgColor,fontColor,fontSize,scale){
    
    var selFilterWinContainer = new PIXI.Container()
        selFilterWinContainer.name = 'selFilterWinContainer';
        parent.addChild(selFilterWinContainer)   
    
    if(type == 'vertical'){
        var blockWinW = blockW +4
        var blockWinH = filterList.length *blockH +4
        
    }else if(type == 'horizontal'){
             
    }else{
             
    };
        
    var selFilterWinBlock =  new PIXI.Graphics(); //asset 主視窗
        selFilterWinBlock.lineStyle(1, blockColor, 1);
        selFilterWinBlock.beginFill(blockColor,0.1);
        selFilterWinBlock.drawRoundedRect(0,0, w,h-25, 2);
        selFilterWinBlock.endFill();
        selFilterWinBlock.name = 'selFilterWinBlock'
        selFilterWinBlock.x = 0
        winselFilterWinBlockBlock.y =  30
        selFilterWinContainer.addChild(selFilterWinBlock)
    
        selFilterWinContainer.x = x
        selFilterWinContainer.y = y
}


//類別選擇
// buildSelectionWinC(taskEditWin,taskEditWin.x +taskEditWin.width,taskEditWin.y,600,400,'任務類型',taskTypeList,taskType_InputBox)

function buildOptionSelectWinA(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
    console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect)
    console.log(parent)
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
        console.log(dataList)
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
 
    
    
    
    
   // console.log('aaaa',dataList)

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
                                    
                                    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                    console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                         console.log('userSelect true',this.text) 
                                        

                                        $.post("/getUserWorkingDay", {   //runAllAutoEvents
                                                'userName':this.text,
                

                                                }, function(data) {
                                                    console.log(data)
                                                    var userName = data[1]
                                                    //buildDaysSelWinC(parent,x,y,returnTextBox,scale,userID,autoClose)
                                                  //  var openDaysSelWin = new buildDaysSelWinC(uiBaseContainer,1055, 305,0.7,userName,false)
                                                                    //buildDaysSelWinC(parent,x,y,scale,userName,autoClose)
                                            
                                            

                                                }) 

                                        
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
    


//類別選擇
// buildSelectionWinC(taskEditWin,taskEditWin.x +taskEditWin.width,taskEditWin.y,600,400,'任務類型',taskTypeList,taskType_InputBox)

function buildTaskTypeSelectWinA(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
    console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect)
    console.log(dataList)
    
    var taskTypeList = []
    
    for (var i =0; i<dataList.length;i++ ){
        taskTypeList.push(dataList[i][1])
        };
    
    
    
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

    var dataListCount = taskTypeList.length
       // console.log(taskTypeList)
       // console.log(dataList)

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
 
    
    
    
    
   // console.log('aaaa',dataList)

    for(var i = 0; i< dataListCount ; i++){
      //  console.log(dataList) 
        
        //var taskBkColor = '0x'+dataList[i][5]
        var taskBlockColor = '0x'+dataList[i][10]
        var taskTypeCount = dataList[i][8]
        if( taskTypeCount == 0){
            
            var taskBkColor = taskBlockColor//'0x999999'  
            var taskTextColor =  '0x111111'
        }else{
            
            var taskBkColor = taskBlockColor//'0x333333'  
            var taskTextColor = '0xffffff'
        };
        
        var userSelectBK = new PIXI.TextInput({
 
      
            
            
        input: {
            fontSize: fontSize,
            padding:'0px',
            width: String(optionBK_width) +'px',
            color: taskTextColor,
        }, 
         box: {
                default: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                focused: {fill: '0x88ffff', rounded: 2, stroke: {color: '0x88ffff', width: 0.5}},
                disabled: {fill: taskBkColor, rounded: 2, stroke: {color: '0x88ffff', width: 0.5}}
            }
        })

        userSelectBK.text = dataList[i][1] //taskTypeList dataList
  
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
                                    
                                    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                    console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                         console.log('userSelect true',this.text) 
                                        

                                        $.post("/getUserWorkingDay", {   //runAllAutoEvents
                                                'userName':this.text,
                

                                                }, function(data) {
                                                    console.log(data)
                                                    var userName = data[1]
                                                    //buildDaysSelWinC(parent,x,y,returnTextBox,scale,userID,autoClose)
                                                  //  var openDaysSelWin = new buildDaysSelWinC(uiBaseContainer,1055, 305,0.7,userName,false)
                                                                    //buildDaysSelWinC(parent,x,y,scale,userName,autoClose)
                                            
                                            

                                                }) 

                                        
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
    









function buildOptionSelectWinB(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,modifyData,autoClose,userSelect){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
   // console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect)
   // console.log(parent)
  
    var taskEditWin =  uiBaseContainer.getChildByName("taskEditWin_container")
    
    console.log(modifyData)
    
    var taskName_InputBox = taskEditWin.getChildByName("taskName_InputBox")
    var taskDesc_InputBox = taskEditWin.getChildByName("taskDesc_InputBox")

    var parentTask_InputBox = taskEditWin.getChildByName("parentTask_InputBox")
    var taskUser_InputBox = taskEditWin.getChildByName("taskUser_InputBox")
    var taskProcess_InputBox = taskEditWin.getChildByName("taskProcess_InputBox")
    
    var startDay_InputBox = taskEditWin.getChildByName("startDay_InputBox")
    var endDay_InputBox = taskEditWin.getChildByName("endDay_InputBox")
    
    var realStartDay_InputBox = taskEditWin.getChildByName("realStartDay_InputBox")
    var realEndDay_InputBox = taskEditWin.getChildByName("realEndDay_InputBox")
    var requestDay_InputBox = taskEditWin.getChildByName("requestDay_InputBox")

   var taskReferenceURL_InputBox = taskEditWin.getChildByName("taskReferenceURL_InputBox")
   var taskOutputURL_InputBox = taskEditWin.getChildByName("taskOutputURL_InputBox")
   var taskExt1_InputBox = taskEditWin.getChildByName("taskExt1_InputBox")

   
   
   
   
   
    
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
 
    
    
    
    
   // console.log('aaaa',dataList)

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
        userSelectBK.modifyData = modifyData[i]
        userSelectBK.text = dataList[i]
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
                                //console.log(this.modifyData)
                                var selModifyData = this.modifyData
                                returnInputBox.text = this.text
        
            
                
                                taskName_InputBox.text = selModifyData[1]
                                taskDesc_InputBox.text = selModifyData[8]
                                parentTask_InputBox.text = parseInt(selModifyData[2])
                                taskUser_InputBox.text = selModifyData[3]
                                taskProcess_InputBox.text = selModifyData[10]

                                startDay_InputBox.text = selModifyData[4]
                                endDay_InputBox.text = selModifyData[5]

                                realStartDay_InputBox.text = selModifyData[13]
                                realEndDay_InputBox.text = selModifyData[14]
                                requestDay_InputBox.text = selModifyData[15]

                                taskReferenceURL_InputBox.text =selModifyData[6]
                                taskOutputURL_InputBox.text = selModifyData[7]
                                taskExt1_InputBox.text = selModifyData[12]


            
            
            
            
            
            
                                if( autoClose == true){
                                    console.log('autoClose True')
                                  //  parent.removeChild(parent.getChildByName("selectOpti_container"))
                                    var parentContainerName = parent.name
                                    
                                    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                    console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                         console.log('userSelect true',this.text) 
                                        

                                        $.post("/getUserWorkingDay", {   //runAllAutoEvents
                                                'userName':this.text,
                

                                                }, function(data) {
                                                    console.log(data)
                                                    var userName = data[1]
                                                    //buildDaysSelWinC(parent,x,y,returnTextBox,scale,userID,autoClose)
                                                  //  var openDaysSelWin = new buildDaysSelWinC(uiBaseContainer,1055, 305,0.7,userName,false)
                                                                    //buildDaysSelWinC(parent,x,y,scale,userName,autoClose)
                                            
                                            

                                                }) 

                                        
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


//專案過濾選單專用 function
function projFillterSel(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,autoClose,userSelect){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("selectOpti_container"))
   // console.log('buildOptionSelectWinA','autoClose',autoClose,'userSelect',userSelect)
    console.log(dataList)
  //  dataList.push('All')
  //  dataList.push('My')

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
        winBlock.lineStyle(1, blockColor, 0);
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
 
    
    
    
    
   // console.log('aaaa',dataList)

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

                                //returnInputBox.text = this.text
            
                                //parent.removeChild(parent.getChildByName("selectOpti_container"))
                                
            
                                if( autoClose == true){
                                    console.log('autoClose True')
                                  //  parent.removeChild(parent.getChildByName("selectOpti_container"))
                                    var parentContainerName = parent.name
                                    
                                    console.log(parent.parent.name)
                                   // console.log(parentContainerName)

                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                   // parent.removeChild(parent.getChildByName(parentContainerName))

                                }else{
                                    console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                         console.log('userSelect true',this.text) 
                                        

                                        $.post("/getUserWorkingDay", {   //runAllAutoEvents
                                                'userName':this.text,
                

                                                }, function(data) {
                                                    console.log(data)
                                                    var userName = data[1]
                                                    //buildDaysSelWinC(parent,x,y,returnTextBox,scale,userID,autoClose)
                                                  //  var openDaysSelWin = new buildDaysSelWinC(uiBaseContainer,1055, 305,0.7,userName,false)
                                                                    //buildDaysSelWinC(parent,x,y,scale,userName,autoClose)
               

                                                }) 

                                        
                                       // getUserWorkingDay
                                        
                                        
                                    }else{
                                            var filterKey = this.text
                                            console.log('專案過濾選擇',filterKey)   
                        
                                            var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
                                           // console.log(allProjectList)
                                        
                                            var filterProjsList = allProjectList.filter(function(item, index, array){
                                                return item[8] == filterKey
                                            }); 
                                        
                                            console.log(filterProjsList)

                                        
                                            var userPrefSet = JSON.parse(window.localStorage.getItem("userPrefSet"));
                                           
                                          //  var projSelWin = new buildPorjSelWinC(uiBaseContainer,daysApp,40,40,300,800,userPrefSet,filterProjsList,'projectSelWin_container')
                                            
                                         //   for(var item in winList ){
                                              //  console.log(winList[item])
                                         //       if( winList[item] == 'projectSelWin_container'){}else{uiBaseContainer.removeChild(uiBaseContainer.getChildByName(winList[item]))}
                                          //  };   
                                         //   
                                        

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



//物件選擇視窗
function elementSelWin(parent,x,y,w,h,tapeText,dataList,returnInputBox){
        //openUserSelectWin_container   
    parent.removeChild(parent.getChildByName("openUserSelectWinC_container"))
  //  var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    
    var userData = JSON.parse(window.localStorage.getItem("userData"));
  
    var itemPreList = 5
    var userNameBK_Width = 100
    var userSelectWinC = new moveAbleWinBlock(parent,x,y,itemPreList*(userNameBK_Width+10)+20,Math.ceil(dataList.length/5)*30 +100,tapeText,20,20,14,'0xffffff','openUserSelectWinC_container',1,'0x223333',5,'0x333333',1,1,'0x223333',daysApp,screenW,screenH,true)
    userSelectWinC.name = 'openUserSelectWinC_container'
   // console.log(userData,userData.length)

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






function buildFilterWinBlock(parent,x,y,w,h,bgColor,borderColor,filterData){
    
    
    // filterBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
    
    
    
};

    
 


const rgbToHex = (r, g, b) => '0x' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

       // console.log(rgbToHex(0, 51, 255)); // '#0033ff'
        