
//創建編輯工具視窗
function buildExtraToolWin(parent,x,y,w,h){
    
    
    var extraToolEditWin = new toolEditMoveAbleWinBlock(uiBaseContainer,x,y,w,h,'編輯工具',20,20,15,'0xffffff','extraToolEditWin_container',2,'0x777777',2,'0x777777',1,0,'0x5577aa',daysApp,screenW,screenH,false)
   
    
      //  userEditWin.name = 'userEditWin_container'
        for(var item in winList ){
          //  console.log(winList[item])
            if( winList[item] == 'extraToolEditWin_container'){}else{uiBaseContainer.removeChild(uiBaseContainer.getChildByName(winList[item]))}
        };

        
        
   // var  addNewUserBtn= new buildBtnScaleC(extraToolEditWin,30,60,100,25,2,'假日編輯','0xffffff',14,1,'0x333333',1,1,'primary')

    
    

    var setHolidayBtn = new setHolidayBtnWithIcon(extraToolEditWin,30,100,'設定假日',12,'0xffffff','0x222222','0xaaffff',1.5)
                           // setHolidayBtnWithIcon(parent,x,y,desc,fontSize,fontColor,iconColor,fillColor,scale)
    
                  .on('mousedown', function(){
                             
                            console.log('setHolidayBtn')
                            var dayDate = new Date()

                            var thisYear = dayDate.getFullYear()

                            $.post("/getHolidaysDB", {   //runAllAutoEvents
                                'year':thisYear,
                        //    'year':selYear,
                        //    'day_string':selDayStringYMD,
                         //   'day_desc':holidayDescInputBox.text,

                           // 'mode' :'selUserGrp',
                            //'selUserGrp' :serarchKey,



                           // 'current_proj' :parseInt(projSearchIndex)

                            }, function(data) {
                                console.log(data)
                                var allHolidaysDB = data[3]
                                //var selYear = data[1]
                                window.localStorage.setItem("allHolidaysDB", JSON.stringify(allHolidaysDB));
                                var buildHolidayWin = new setHolidayWin(uiBaseContainer,150,30,1300,830,1,'userName',false)

                                // projState.text = data[1][0]
                                           // return_enName.text = data[1][1]





                            }); 

                                
                                
                                
                                
                                
                                })
    
    
        extraToolEditWin.interactive = true;
        extraToolEditWin.buttonMode = true;
        extraToolEditWin.on('pointerout', function(){
                              uiBaseContainer.removeChild(uiBaseContainer.getChildByName('extraToolEditWin_container'))

                                })
      
    
    //setHolidayWin(parent,x,y,w,h,scale,userName,allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,autoClose)
    
    


    

    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
        if(userNameInput.text == '未登入'){
            var loginUserName = 'none'
           // changeURLBtn.alpha = 0
        }else if( userNameInput.text == 'alpha'   ){
           
             addUrlChangeBtn()

         
         }else{
            var loginUserName = userNameInput.text 
            
        };
    
    function addUrlChangeBtn(){
        
        
        var changeURLBtn = new changeDataBaseURLBtnWithIcon(extraToolEditWin,30,150,'變更資料庫URL',12,'0xffffff','0x222222','0xaaffff',1.5)
                           // setHolidayBtnWithIcon(parent,x,y,desc,fontSize,fontColor,iconColor,fillColor,scale)
    

      
        changeURLBtn.name = 'changeURLBtn'
        changeURLBtn.on('mousedown', function(){
                var userNameInput = uiBaseContainer.getChildByName('userNameInput')

                console.log(userNameInput.text)
    
                        
                            console.log('修正資料庫路徑')
                        if(userNameInput.text == 'alpha'){
                            errMsgBox.text = ' 需修改檔案中的備註 '

                                /*
                              $.post("/fixDBURL", {   //runAllAutoEvents


                                            }, function(data) {
                                                console.log(data)



                                            }) 
                                            */

                        }else{
                            errMsgBox.text = ' 權限不足 '
                            
                        }

            
                });     
        
        
    } 
    
    
    var allUserEditBtn = new allUserEditBtnWithIcon(extraToolEditWin,30,200,'使用者編輯',12,'0xffffff','0x1a2b30','0x79ffaa',1.5)
   //allUserEditWin_container
   
         allUserEditBtn.on('mousedown', function(){


                console.log('點選使用者編輯' ,'allUserEditWin')   
                var allUserEditWin = new buildAllUserEditWin(uiBaseContainer,50, 40, 870,820,1)
                                allUserEditWin.name = 'allUserEditWin'
             
                            for(var item in winList ){
                              //  console.log(winList[item])
                                if( winList[item] == 'allUserEditWin_container'){}else{uiBaseContainer.removeChild(uiBaseContainer.getChildByName(winList[item]))}
                            };
                


         });

    
    
    // 任務資訊編輯
    
    var taskTypeInfoEditBtn = new taskTypeInfoEditIcon(extraToolEditWin,30,250,100,100,5,'0x1a2b30','0x79ffaa',1.5)

        taskTypeInfoEditBtn.on('mousedown', function(){
              
                                console.log('點擊任務類型說明編輯' ,'taskTypeInfoEditBtn')   
            
                            for(var item in winList ){
                              //  console.log(winList[item])
                                if( winList[item] == 'taskTypeInfoEditWin_container'){}else{uiBaseContainer.removeChild(uiBaseContainer.getChildByName(winList[item]))}
                            };
                                var taskTypeInfoEditWin = new  buildTaskTypeInfoEditWin(uiBaseContainer,100,40,1200,900,1)
              
                            })
    
    
    
    return extraToolEditWin
    
};


////任務類型編輯視窗
function buildTaskTypeInfoEditWin(parent,x,y,w,h,scale){   
    

    parent.removeChild(parent.getChildByName("taskTypeInfoEditWin_container"))
    var taskTypeData = JSON.parse(window.localStorage.getItem("taskTypeData"));

    //價目表主視窗
    var taskTypeEditWinBlock = new moveAbleWinBlockC(uiBaseContainer,x,y,w,h,'任務類型編輯視窗',20,20,15,'0xffffff','taskTypeInfoEditWin_container',1,'0x555555',5,'0x333333',1,1,0.6,'0x467b88',daysApp,screenW,screenH,true)    
   // var taskUserSelWin = new moveAbleWinBlockC(parent,x,y,w,h,'執行人員選擇',20,20,16,'0xffffff','workingUserSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',selApp,screenW,screenH,true)    
                            // moveAbleWinBlockC(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗

        taskTypeEditWinBlock.scale.set(scale)
    
    
    console.log(taskTypeData)
    var inputBoxFontSize = 11
    
    var inputBoxGap = 27
    
    var taskTypeCount = taskTypeData.length
    
    ////可拖曳Block
    var maxViewTaskTypeCount = 28

    var winBlock =  new PIXI.Graphics(); //asset 主視窗
        winBlock.lineStyle(1, '0x666688', 0);
        winBlock.beginFill('0x113355',0.2);
        winBlock.drawRoundedRect(0,0, w-40,taskTypeCount * inputBoxGap , 2);
        winBlock.endFill();
        winBlock.name = 'winBlock'
        winBlock.x = 5
        winBlock.y =  60
        taskTypeEditWinBlock.addChild(winBlock)
    

    var winBlockMask =  new PIXI.Graphics(); //asset 主視窗
        winBlockMask.lineStyle(1, '0x666688', 1);
        winBlockMask.beginFill('0xff0000',1);
        winBlockMask.drawRoundedRect(0,0, w-40, maxViewTaskTypeCount * inputBoxGap , 2);
        winBlockMask.endFill();
        winBlockMask.name = 'winBlockMask'
        winBlockMask.x = 5
        winBlockMask.y =  60
        taskTypeEditWinBlock.addChild(winBlockMask)
    
        winBlock.mask = winBlockMask
  //  var dataListCount = dataList.length

     //   winBlock.addChild(optionBGBlock)

    var barOutlineHeight = maxViewTaskTypeCount * inputBoxGap //+ 10
   // var dragBarHeight

    


    console.log(taskTypeData)
    var inputBoxFontSize = 11
    
    var inputBoxGap = 27
    var taskTypeCount = taskTypeData.length
    
    //// 標籤說明
    var taskType_SN_Text = new inputBoxWithLabel(taskTypeEditWinBlock,15,35,30,150,2,i,'任務類型名稱',14,'0xeeeeee','0xeeeeee',2,'0x333333',0.1,'0x333333')
    var taskType_Desc_Text = new inputBoxWithLabel(taskTypeEditWinBlock,165,35,30,150,2,i,'說明',14,'0xeeeeee','0xeeeeee',2,'0x333333',0.1,'0x333333')
    var taskType_LabelColor_Text = new inputBoxWithLabel(taskTypeEditWinBlock,240,35,30,150,2,i,'標籤顏色',14,'0xeeeeee','0xeeeeee',2,'0x333333',0.1,'0x333333')
    var taskType_sortNumber_Text = new inputBoxWithLabel(taskTypeEditWinBlock,350,35,30,150,2,i,'排序',14,'0xeeeeee','0xeeeeee',2,'0x333333',0.1,'0x333333')
    var taskType_sortName_Text = new inputBoxWithLabel(taskTypeEditWinBlock,415,35,30,150,2,i,'排序名稱',14,'0xeeeeee','0xeeeeee',2,'0x333333',0.1,'0x333333')
    var taskType_priceCounted_Text = new inputBoxWithLabel(taskTypeEditWinBlock,560,35,30,150,2,i,'成本計算',14,'0xeeeeee','0xeeeeee',2,'0x333333',0.1,'0x333333')
    var taskType_priceCounted_Text = new inputBoxWithLabel(taskTypeEditWinBlock,650,35,30,150,2,i,'工時分類',14,'0xeeeeee','0xeeeeee',2,'0x333333',0.1,'0x333333')
    var taskType_priceCounted_Text = new inputBoxWithLabel(taskTypeEditWinBlock,770,35,30,150,2,i,'分類顏色',14,'0xeeeeee','0xeeeeee',2,'0x333333',0.1,'0x333333')
    var taskType_priceCounted_Text = new inputBoxWithLabel(taskTypeEditWinBlock,870,35,30,150,2,i,'文字顏色',14,'0xeeeeee','0xeeeeee',2,'0x333333',0.1,'0x333333')


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
                                                       // parent, affect block
    for(var i = 0 ; i <taskTypeCount ; i++){
        var taskTypeName = taskTypeData[i][1]
        var taskSearchID = taskTypeData[i][0]
        var taskTypeDesc = taskTypeData[i][2]
        var taskTypeTagColor = taskTypeData[i][5]
        var taskTypeSort = taskTypeData[i][6]
        var taskTypeSortName = taskTypeData[i][7]
        var taskTypeCounted = taskTypeData[i][8]
        var taskTypeSelected = taskTypeData[i][9]
        var taskTypeLabelColor = taskTypeData[i][10]
        var taskTypeFontColor = taskTypeData[i][11]
        
        var taskTypeBlockColor = '0x'+taskTypeData[i][10]
        var taskTypeFontColor = '0x'+taskTypeData[i][11]
        
        var posY = inputBoxGap*i +5
      //  console.log(taskTypeBlockColor)
        var taskType_SN_Label = new inputBoxWithLabel(winBlock,10,posY,30,150,2,i,taskTypeName,inputBoxFontSize,'0xcccccc',taskTypeFontColor,2,'0x333333',0.1,taskTypeBlockColor)
            taskType_SN_Label.name = 'taskType_SN_Label__' + String(taskSearchID)
        
        var taskType_Desc_Label = new inputBoxWithLabel(winBlock,165,posY,30,70,2,'',taskTypeDesc,inputBoxFontSize,'0xcccccc',taskTypeFontColor,2,'0x333333',0.1,taskTypeBlockColor)
            taskType_Desc_Label.name = 'taskType_Desc_Label__' + String(taskSearchID)
        
        
            setButtonOptionSelected(taskType_Desc_Label,['概念','平面','腳本','設計','模型','材質','動畫','構圖','燈光','合成','算圖','綁定','特效','模擬','spine','babylon','輸出','研究','管理','企劃','市場','維運','訓練','排程','其他'],'工作類型說明選擇',420,100)

        var taskType_tagColor_Label = new inputBoxWithLabel(winBlock,240,posY,30,100,2,'',taskTypeTagColor,inputBoxFontSize,'0xcccccc',taskTypeFontColor,2,'0x333333',0.1,taskTypeBlockColor)
            taskType_tagColor_Label.name = 'taskType_tagColor_Label__' + String(taskSearchID)
        
        var taskType_sort_Label = new inputBoxWithLabel(winBlock,345,posY,30,60,2,'',taskTypeSort,inputBoxFontSize,'0xcccccc',taskTypeFontColor,2,'0x333333',0.1,taskTypeBlockColor)
            taskType_sort_Label.name = 'taskType_sort_Label__' + String(taskSearchID)
        
        var taskType_sortName_Label = new inputBoxWithLabel(winBlock,410,posY,30,150,2,'',taskTypeSortName,inputBoxFontSize,'0xcccccc',taskTypeFontColor,2,'0x333333',0.1,taskTypeBlockColor)
            taskType_sortName_Label.name = 'taskType_sortName_Label__' + String(taskSearchID)
            setButtonOptionSelected(taskType_sortName_Label,['前期設計','後期製作','3D 製作','動畫製作','後期製作','特效製作','web引擎動畫製作','上線輸出','專案測試','專案管理','遊戲企劃','市場需求','維運','內部排程','專案追蹤'],'工作類型排列名稱選擇',800,200)

        var taskType_Counted_Label = new inputBoxWithLabel(winBlock,565,posY,30,70,2,'',taskTypeCounted,inputBoxFontSize,'0xcccccc',taskTypeFontColor,2,'0x333333',0.1,taskTypeBlockColor)
            taskType_Counted_Label.name = 'taskType_Counted_Label__' + String(taskSearchID)
            setButtonOptionSelected(taskType_Counted_Label,[0,1],'成本是否計算',800,200)

        
        var taskType_Selected_Label = new inputBoxWithLabel(winBlock,640,posY,30,120,2,'',taskTypeSelected,inputBoxFontSize,'0xcccccc',taskTypeFontColor,2,'0x333333',0.1,taskTypeBlockColor)
            taskType_Selected_Label.name = 'taskType_Selected_Label' + String(taskSearchID)
            setButtonOptionSelected(taskType_Selected_Label,['專案執行','內部工作優化','創新技術研究','專案管理','市場需求','維運','其他'],'工作類型選擇',800,200)

        
        
        
        var taskType_typeColor_Label = new inputBoxWithLabel(winBlock,765,posY,30,100,2,'',taskTypeLabelColor,inputBoxFontSize,'0xcccccc',taskTypeFontColor,2,'0x333333',0.1,taskTypeBlockColor)
            taskType_typeColor_Label.name = 'taskType_typeColor_Label' + String(taskSearchID)
        
        
        var taskType_fontColor_Label = new inputBoxWithLabel(winBlock,870,posY,30,100,2,'',taskTypeFontColor,inputBoxFontSize,'0xcccccc',taskTypeFontColor,2,'0x333333',0.1,taskTypeBlockColor)
            taskType_fontColor_Label.name = 'taskType_fontColor_Label' + String(taskSearchID)

        
        
        
        var editTaskTypeBtn = new confirmBtnWithIcon(winBlock,1050,posY+10,'0x333333','0x579a57',1)
            editTaskTypeBtn.name = 'editTaskTypeBtn' + String(taskSearchID)
            editTaskTypeBtn.on('mousedown',function(){console.log('編輯Task type BTN',this.name,'連動 Task，task_type資料庫')})
    };

        /*
        selProjStateOptionBtnGrp.disabled = true
        selProjStateOptionBtnGrp.interactive = true;
        selProjStateOptionBtnGrp.buttonMode = true;
        selProjStateOptionBtnGrp.name = 'selProjStateOptionBtnGrp'

        selProjStateOptionBtnGrp.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                              // buildSelectionWinB(parent,x,y,w,h,tapeText,dataList,returnInputBox)
                                              //  buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,150,'專案狀態',['準備中','進行中','已完成','結案'],selProjStateOptionBtnGrp)
                                               
                                                   var projStateList = ['準備中','進行中','已完成','結案']              
                                                   var winW = 180
                                                   var winH = projStateList.length *25 + 70

                                                  var chiefArtistSelWin = new moveAbleWinBlockC(uiBaseContainer,970,40,winW,winH,'專案狀態',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                                                 // var selWinH = projectTypeList.length *30
                                                 var openDaysSelWin  = new buildOptionSelectWinA(chiefArtistSelWin,0,0,winW,winH,'專案狀態',projStateList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,selProjStateOptionBtnGrp,true,false) 
                                               
                                               

                                              })
    

        */
 
    
    return taskTypeEditWinBlock
                                                           
                                            

};


function setButtonOptionSelected(btn,optionList,winText,x,y){
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
                                               
                                              

                                              })
    
}


function toolEditMoveAbleWinBlock(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗
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
        winTapeBlock.beginFill(winTapeColor,0);
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

        winLabelText.x = 0
        winLabelText.pivot.y = winLabelText.height/2
        winLabelText.y = winTapeBlock.height/2// - fontSize/3//15

    
    winTapeBlock.interactive = true;



    



    


    
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



function setHolidayWin(parent,x,y,w,h,scale,userName,autoClose){
  //  
    //console.log(selYear)
   // console.log(allWorkingRangeDays)
   // console.log(allFinishRangeDays)
   // console.log(allSubmitRangeDays)

    parent.removeChild(parent.getChildByName("setHolidayWin_container"))
    var allHolidaysDB = JSON.parse(window.localStorage.getItem("allHolidaysDB"));
   // console.log(allHolidaysDB)
    var daysSelectWin = new moveAbleWinBlockD(uiBaseContainer,x,y,w,h,'',20,20,14,'0xffffff','daysSelectWin_container',1,'0x555555',5,'0x777777',1,1,0.8,'0x555555',daysApp,screenW,screenH,true)
                             // moveAbleWinBlockC(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn
    daysSelectWin.name = 'setHolidayWin_container'
    daysSelectWin.scale.set(scale)
    //var daysSelectWinBlock = 

  //  console.log( new Date(2021, 2, 0).getDate())
    // buildDaysWinBlock(parent,x,y,w,h,selYear,selMonth,selDay,selWeekDay,blockScale){
    
    var holidaySetInputBox = new inputBoxWithLabel(daysSelectWin,990,100 ,100,170,2,'日期 :','假日日期',12,'0xffffff','0xFFFFFF',2,'0xaaaaaa',0.1,'0x777777')
        holidaySetInputBox.name = 'holidaySetInputBox'
        holidaySetInputBox.disabled = true
    
    var holidayDescBox = new inputBoxWithLabel(daysSelectWin,990,130 ,100,170,2,'描述 :','',12,'0xffffff','0xFFFFFF',2,'0xaaaaaa',0.1,'0x777777')
        holidayDescBox.name = 'holidayDescBox'
        holidayDescBox.disabled = true
        
    var holidayDescInputBox = new inputBoxWithLabel(daysSelectWin,990,230 ,100,170,2,'描述編輯 :','',12,'0xffffff','0xaaaaaa',2,'0x333333',0.1,'0x333333')
        holidayDescInputBox.name = 'holidayDescInputBox'

    var holidayDescEditBtn = new dbEditBtnWithIcon(daysSelectWin,1280,238,'0xaaaaaa','0x222222',1)
    
        holidayDescEditBtn.name = 'holidayDescEditBtn'
    
    
        holidayDescEditBtn.on('mousedown', function(){
                        console.log('點選修改假日描述')   
           
                        console.log( holidayDescInputBox.holidayID)   
                          //  var searchID = this.searchID
                         //   var userName = this.userName
                            
                                $.post("/updateHolidays", {  
                                                        'holidayID':holidayDescInputBox.holidayID,
                                                        'day_desc':holidayDescInputBox.text,

                                                    }, function(data) {
                                                        console.log(data)
              
                                                        
                                                        
                                                        
                                                        }) 
  
                       
        
                                });
            
    
   // var holidaysConfirmEditBtn = new buildBtnScaleE(daysSelectWin,1180,780,100,30,'確認編輯','primary')

    
    
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
     //   var openDaysSelectBlock = new buildDaysWinBlockMonthA(canWinBGContainer,(i%4)*400*schWinScale+5,Math.floor(i/4)*420*schWinScale+60,selYear,schMonth,selDay,schWinScale,false)
        var openDaysSelectBlock = new buildDaysWinBlockMonthA(canWinBGContainer,(i%4)*400*schWinScale+5,Math.floor(i/4)*420*schWinScale+60,schYear,schMonth,selDay,holidaySetInputBox,holidayDescInputBox,holidayDescBox,currentYearHolidaysDB,schWinScale,false)

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
    pageUpCtrBtnBox.x = 880
    
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
    pageDownCtrBtnBox.x = 920
    
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
        currentYearText.text =  daysSelectWin.selYear + ' 年假日 '
        currentYearText.x = 100

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
                                                        var openDaysSelectBlock = new buildDaysWinBlockMonthA(canWinBGContainer,(i%4)*400*schWinScale+5,Math.floor(i/4)*420*schWinScale+60,schYear,schMonth,selDay,holidaySetInputBox,holidayDescInputBox,holidayDescBox,currentYearHolidaysDB,schWinScale,false)

                                         


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
                                                        var openDaysSelectBlock = new buildDaysWinBlockMonthA(canWinBGContainer,(i%4)*400*schWinScale+5,Math.floor(i/4)*420*schWinScale+60,schYear,schMonth,selDay,holidaySetInputBox,holidayDescInputBox,holidayDescBox,currentYearHolidaysDB,schWinScale,false)

                                         


                                                        };
                                                    
                                                        console.log(this.parent)   

                                            })
    
    
    
    
                     .on('pointerup', function(){this.alpha=1;})
    
    
    

   // return openDaysSelectBlock
};


// 日曆視窗 顯示booking日期 buildDaysWinBlockC // 工作日 標註工作日
function buildDaysWinBlockMonthA(parent,x,y,selYear,selMonth,selDay,holidaySetInputBox,holidayDescInputBox,holidayDescBox,holidaysDB,blockScale,autoClose){
  //  parent.removeChild(parent.getChildByName("daysWinBG"))
   // var daysSelectWin = uiBaseContainer.getChildByName("daysSelectWin_container")
  //  var holidaySetInputBox = daysSelectWin.getChildByName("holidaySetInputBox")
  //  var holidayDescInputBox = daysSelectWin.getChildByName("holidayDescInputBox")
   // console.log(holidaySetInputBox)
  //  console.log(holidayDescInputBox)

   // console.log(holidaysDB)
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
       // console.log(selYear,selMonth-1,monthDayLabel.text)
        
        //allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays
        /*
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
        */
       //  var dayBlockColor = '0x444444'  
       var selHolidaysDB = holidaysDB.filter(function(item, index, array){
              return parseInt(item[2]) == selDayMs
              
        }); 
        
      //  console.log(selHolidaysDB)
        
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0xffffff', 0.5);
            if( i%7 == 0 |i%7 == 6 ){
                 var dayBlockColor = '0xaaaaaa'  

            }else{
                 var dayBlockColor = '0x777777'  
   
                
            }
        
            
        
            dayBlock.beginFill(dayBlockColor,0.3);
        
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
            
                 dayBlock.tint = selectBlockTintColor
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

        dayBlock.interactive = true;
        dayBlock.buttonMode = true;
        dayBlock.on('pointerover', function(){this.alpha=0.5;
                          
                                            
                                              
                                              if( this.holidayDesc  == undefined | this.holidayDesc  == 'none' ){holidayDescBox.text = ''}else{ holidayDescBox.text = this.holidayDesc}
                                              
                                              
                                             
                                             })
                .on('pointerout', function(){this.alpha=1;})
                .on('mousedown',function(){this.alpha=0.5;
                                           // selectDayInputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                            parent.selYear = selYear;
                                            parent.selMonth = selMonth;
                                            parent.selDay = this.dayText
                                          //  console.log(this.holidayID)
               
                                           // this.tint = selectBlockTintColor
                                          //  var selDayString = new convertMS( this.selDayMs )
                                            var selDayString  = new Date(this.selDayMs).toLocaleString()
                                           // console.log(selDayString,this.tint,this.currentMonth)
                                            
                                            if(this.tint == '0xffffff' & this.currentMonth == true){
                                                this.tint =  selectBlockTintColor
                                                  var selDayString  = new Date(this.selDayMs).toLocaleString()
                                                  var selDayStringYMD = (selDayString.split(' '))[0]
                                                  var selYear = (selDayStringYMD.split('/'))[0]
                                                  holidaySetInputBox.text = selDayStringYMD
                                                
                                                
                                                   // console.log()
                                                    $.post("/defineHolidays", {   //runAllAutoEvents
                                                    'day_ms':this.selDayMs,
                                                    'year':selYear,
                                                    'day_string':selDayStringYMD,
                                                    'day_desc':holidayDescInputBox.text,

                                                   // 'mode' :'selUserGrp',
                                                    //'selUserGrp' :serarchKey,



                                                   // 'current_proj' :parseInt(projSearchIndex)

                                                    }, function(data) {
                                                        console.log(data)
                                                            var holidayData = data[8]
                                                            holidayDescInputBox.holidayID = holidayData[0]
                                                            console.log(holidayDescInputBox.holidayID )

                                                            holidayDescInputBox.on('mousedown', function(){
                                                            
                                                                console.log('1111111111122222222222233333333')
                                                            })
                                                                   // projState.text = data[1][0]
                                                                   // return_enName.text = data[1][1]





                                                    }); 

                                                
                                                
                                              //  console.log('11111111111111')
                                            }else{
                                                this.tint = '0xffffff'
                                                console.log(this.selDayMs)
                                                
                                                
                                                 $.post("/deleteHolidays", {   //runAllAutoEvents
                                                    'day_ms':this.selDayMs,
                                                   // 'year':selYear,
                                                   // 'day_string':selDayStringYMD,
                                                   // 'day_desc':holidayDescInputBox.text,

                                                   // 'mode' :'selUserGrp',
                                                    //'selUserGrp' :serarchKey,



                                                   // 'current_proj' :parseInt(projSearchIndex)

                                                    }, function(data) {
                                                        console.log(data)

                                                                   // projState.text = data[1][0]
                                                                   // return_enName.text = data[1][1]





                                                    }); 

                                            
                                                

                                            };
                                           
                                          //  returnTextBox.text =  selYear + " 年 "+ selMonth + ' 月 ' + this.dayText + ' 日 '
                                           // console.log(selYear,selMonth,this.dayText,returnTextBox.text)
                                           /*
                                            if (autoClose == true){
                                                console.log('11111')
                                                uiBaseContainer.removeChild(uiBaseContainer.getChildByName("daysSelectWin_container"))

                                                
                                            }else{
                                                
                                                console.log('22222')
                                            }
                                           
                                           */
                                           
                                           
                                          })
                .on('pointerup', function(){this.alpha=1;})

        
        
        
    };
    
    
    return daysWinBG
};