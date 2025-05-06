//
//
//
//
// cost preview window 
// 專案成本計算
//
//
//
//


//成本計算總視窗
function buildCostPreview(parent,x,y,w,h,projID,projName){
    
    console.log('buildCostPreview',projName,projID)
    
    parent.removeChild(parent.getChildByName("projCostPreviewWin_container"))
    
    var taskTypeData = JSON.parse(window.localStorage.getItem("taskTypeData"));
    
    console.log(taskTypeData)
    
    
    $.post("/calculateProjCost", {   //runAllAutoEvents
                                        'searchID':parseInt(projID),
          

                                    }, function(data) {
                                        console.log(data)
                                        var selProjTaskInfo = data[1]
                                        var selProjTaskDB = data[16]
                                        var taskTypeListDB = data[15]
                                        var taskWorkingTimeHourInfo = data[17]
                                        var taskWorkingTimeDataByUser = data[18]
                                        var taskUserList =  data[19]
                                       // console.log(selProjTaskDB)
                                        buildCostPreviewWin(selProjTaskInfo,selProjTaskDB,taskTypeListDB,taskWorkingTimeHourInfo,taskWorkingTimeDataByUser,taskUserList)

                                    }) 

   // var chiefArtistList = JSON.parse(window.localStorage.getItem("chiefArtistList"));

   // var imList = JSON.parse(window.localStorage.getItem("imList"));
   // var designerList = JSON.parse(window.localStorage.getItem("designerList"));
   // var projectTypeList = JSON.parse(window.localStorage.getItem("projectTypeList"));
    
    //console.log(getData)
    
    
  
    
    
    function buildCostPreviewWin(projInfo,taskInfo,taskTypeList,taskWorkingTimeHourList,userWorkingData,userList){
       
        console.log(taskWorkingTimeHourList) 
        var totalTaskCount = taskInfo.length
        var estimateStartDayString = projInfo['allTaskEstStartDay']
        var estimateEndDayString = projInfo['allTaskEstEndDay']
        var allTaskWorkingTimeStartDayString = projInfo['allTaskWorkingTimeStartDayString']
        var allTaskWorkingTimeEndDayString = projInfo['allTaskWorkingTimeEndDayString']
     
        
        var projCostPreviewWin = new moveAbleWinBlockC(uiBaseContainer,x,y,w,h,'專案成本',20,20,14,'0xffffff','projCostPreviewWin_container',1,'0x333333',2,'0x333333',1,1,0.7,'0x336699',daysApp,screenW,screenH,true)
            projCostPreviewWin.name = 'projCostPreviewWin_container'

        var selProjID_InputBox = new inputBoxWithLabelB(projCostPreviewWin,15,40,80,50,3,'專案 ID :',projID,12,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x222222','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            selProjID_InputBox.disabled = true
            selProjID_InputBox.name = 'selProjID_InputBox'


        var selProjName_InputBox = new inputBoxWithLabelB(projCostPreviewWin,180,40,95,200,3,'專案名稱 :',projName,12,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x222222','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            selProjName_InputBox.disabled = true
            selProjName_InputBox.name = 'selProjName_InputBox'

        
        var totalTaskNum_InputBox = new inputBoxWithLabelB(projCostPreviewWin,530,40,95,50,3,'任務總數 :',totalTaskCount,12,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x222222','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            totalTaskNum_InputBox.disabled = true
            totalTaskNum_InputBox.name = 'totalTaskNum_InputBox'

         
        var  taskTypeSelBtn = new buildBtnScaleF(projCostPreviewWin,10,80,120,25,6,'Noto Sans TC','300','任務分類成本','0x111111',14,1,'0x333333',1,0,'0x888888') //'0x67e4aa'

             taskTypeSelBtn.name = 'taskTypeSelBtn'

             taskTypeSelBtn.on('mousedown',function(){
                    console.log('點選任務分類成本')
                    projCostPreviewWin.removeChild(projCostPreviewWin.getChildByName("estimateCostWin"))

                    projCostPreviewWin.removeChild(projCostPreviewWin.getChildByName("userCostWin"))
                    projCostPreviewWin.addChild(estimateCostWin)

                 
                 
             })

         
        var  proUserBtn = new buildBtnScaleF(projCostPreviewWin,150,80,120,25,6,'Noto Sans TC','300','任務人力成本','0x111111',14,1,'0x333333',1,0,'0x888888') //'0x67e4aa'

             proUserBtn.name = 'proUserBtn'

             proUserBtn.on('mousedown',function(){
                    console.log('點選任務人次成本')

                    projCostPreviewWin.removeChild(projCostPreviewWin.getChildByName("estimateCostWin"))
                    projCostPreviewWin.removeChild(projCostPreviewWin.getChildByName("userCostWin"))
                    projCostPreviewWin.addChild(userCostWin)

                   // console.log(estimateCostWin)
             })

        
        
       // function buildTaskTypeCostMainWin(){
        //預估成本區塊
        var estimateCostWin =  new PIXI.Graphics();
            estimateCostWin.lineStyle(1, '0xffffff', 0);
            estimateCostWin.beginFill('0x222222',1);
            estimateCostWin.drawRoundedRect(0,0, 1270,630, 6);
            estimateCostWin.endFill();
            estimateCostWin.name = 'estimateCostWin'
            estimateCostWin.x = 10
            estimateCostWin.y = 110
            estimateCostWin.alpha = 1
            projCostPreviewWin.addChild(estimateCostWin)
        
        
        
        
        
            //右方圓餅圖底色
        var circleViewBlock =  new PIXI.Graphics();
            circleViewBlock.lineStyle(1, '0xffffff', 0);
            circleViewBlock.beginFill('0x33372e',1);
            circleViewBlock.drawRoundedRect(0,0,500,610, 6);
            circleViewBlock.endFill();
            circleViewBlock.name = 'circleViewBlock'
            circleViewBlock.x = 740
            circleViewBlock.y = 10
            circleViewBlock.alpha = 1
            estimateCostWin.addChild(circleViewBlock)
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        
        var  taskTypeBtn = new buildBtnScaleF(estimateCostWin,5,70,70,25,6,'Noto Sans TC','300','任務類別','0xffffff',15,1,'0x333333',1,0,'0x222222') //'0x67e4aa'

             taskTypeBtn.name = 'taskTypeBtn'


        var  taskHourBarBtn = new buildBtnScaleF(estimateCostWin,150,70,200,25,6,'Noto Sans TC','300','任務工時總計預覽','0xffffff',15,1,'0x333333',1,0,'0x222222') //'0x67e4aa'

             taskHourBarBtn.name = 'taskHourBarBtn'
  
        
        var  taskEstimateHourBtn = new buildBtnScaleF(estimateCostWin,533,70,70,25,6,'Noto Sans TC','300','預估工時','0xffffff',15,1,'0x333333',1,0,'0x222222') //'0x67e4aa'

             taskEstimateHourBtn.name = 'taskEstimateHourBtn'
  
        
        var  taskWorkingHourBtn = new buildBtnScaleF(estimateCostWin,613,70,70,25,6,'Noto Sans TC','300','實際工時','0xffffff',15,1,'0x333333',1,0,'0x222222') //'0x67e4aa'

             taskWorkingHourBtn.name = 'taskWorkingHourBtn'
  
         
        
        
        
        
        var stepHeight = 25
        posYCount = stepHeight *3
        
        var estimateStartDayString_InputBox = new inputBoxWithLabelB(estimateCostWin,10,10,100,100,3,'預估起始日 :',estimateStartDayString,12,'0x999999','0xcccccc',2,'0xffffff',0.1,'0x222222','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            estimateStartDayString_InputBox.disabled = true
            estimateStartDayString_InputBox.name = 'estimateStartDayString_InputBox'

                     
        var estimateEndDayString_InputBox = new inputBoxWithLabelB(estimateCostWin,10,10+stepHeight*1,100,100,3,'預估結束日 :',estimateEndDayString,12,'0x999999','0xcccccc',2,'0xffffff',0.1,'0x222222','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            estimateEndDayString_InputBox.disabled = true
            estimateEndDayString_InputBox.name = 'estimateEndDayString_InputBox'
        
        
        var workingTimeStartDayString_InputBox = new inputBoxWithLabelB(estimateCostWin,250,10,100,100,3,'執行起始日:',allTaskWorkingTimeStartDayString,12,'0x999999','0xcccccc',2,'0xaaffaa',0.1,'0x222222','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            workingTimeStartDayString_InputBox.disabled = true
            workingTimeStartDayString_InputBox.name = 'workingTimeStartDayString_InputBox'
 
        var workingTimeEndDayString_InputBox = new inputBoxWithLabelB(estimateCostWin,250,10+stepHeight*1,100,100,3,'執行結束日 :',allTaskWorkingTimeEndDayString,12,'0x999999','0xcccccc',2,'0xaaffaa',0.1,'0x222222','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            workingTimeEndDayString_InputBox.disabled = true
            workingTimeEndDayString_InputBox.name = 'workingTimeEndDayString_InputBox'
        
       

        
        
        

        tempTaskTypeIndexList = []
        var taskTypeExceptList = ['other','training','點選任務類型','check point']
        
        var estimateTaskBlockDefaultLength = 400
        
        var allEstimateTotalTime = 0
        var allTotalWorkingTime = 0 
        
        
        
        
        var allTaskInfoCollect = []

        for(var i = 0 ; i<taskTypeList.length;i++ ){
       // for(var i = 0 ; i<taskTypeList.length;i++ ){
            var taskTypeName = taskTypeList[i][1]
            var taskTypeSortIndex = taskTypeList[i][6]
            var taskTypeSortString = taskTypeList[i][7]
            var taskTypeCount = taskTypeList[i][8]
            var estimateBlockColor = '0x'+taskTypeList[i][5]
            
           // console.log(taskTypeName)
            //console.log(taskTypeName,taskTypeSortIndex,taskTypeSortString)
            
            var filterTaskType =  taskInfo.filter(function(item, index, array){
                                   // return item[0] == taskTypeSortIndex
                                    return item[14] == taskTypeName

                                    });   
            
            //var estimateBlockColor = '0x'+filterTaskType[0][5]
           // console.log(estimateBlockColor)
            var filterTaskWorkingTimeHourList=  taskWorkingTimeHourList.filter(function(item, index, array){
                                   // return item[0] == taskTypeSortIndex
                                    return item[4] == taskTypeName

                                    });   
            
            //console.log(filterTaskWorkingTimeHourList) 

            if(filterTaskType.length >0 & tempTaskTypeIndexList.includes(taskTypeName) == false){
                if(taskTypeCount == 0 ){//taskTypeExceptList.includes(taskTypeName) == true
                   
                }else{
                    tempTaskTypeIndexList.push(taskTypeName)
                    var totalEstimateWorkingDay = 0
                   // var taskID = filterTaskType[3]
                   // console.log('taskID',taskID)

                    for(var j = 0 ; j<filterTaskType.length ; j++ ){

                       totalEstimateWorkingDay =  totalEstimateWorkingDay + filterTaskType[j][2]

                    };

                    var totalWorkingTimeHourCount = 0
                    
                    for(var j = 0 ; j<filterTaskWorkingTimeHourList.length ; j++){
                      //  console.log(filterTaskWorkingTimeHourList[j]) 
                        totalWorkingTimeHourCount =  totalWorkingTimeHourCount + filterTaskWorkingTimeHourList[j][5] 
                        
                    };

                   // showTotalWorkingTime = Math.round(totalWorkingTimeHourCount)
                    //console.log(totalWorkingTimeHourCount,showTotalWorkingTime)

                    posYCount = posYCount + stepHeight 
                   // console.log(taskTypeSortIndex,filterTaskType.length,filterTaskType)   
                    var totalEstimateWorkingHour = totalEstimateWorkingDay * 9
                    if( totalEstimateWorkingHour >= 400){
                        var estimateTaskBlockLength  =  estimateTaskBlockDefaultLength  
                        var estimateTaskBlockColor = '0x777777'
                    }else{
                        
                        var estimateTaskBlockLength = (totalEstimateWorkingHour  /400)* estimateTaskBlockDefaultLength
                        var estimateTaskBlockColor = '0x777777'
                    };
                    
                   // console.log(totalWorkingTimeHourCount)
                    
                    if( totalWorkingTimeHourCount > totalEstimateWorkingHour){
                        var taskTypeWorkingTimeBlockLength  =  estimateTaskBlockDefaultLength  
                        var taskTypeWorkingTimeBlockColor = '0xcc6666'
                    }else{
                        
                        var taskTypeWorkingTimeBlockLength = (totalWorkingTimeHourCount  /totalEstimateWorkingHour)* estimateTaskBlockDefaultLength
                        var taskTypeWorkingTimeBlockColor = '0x99aa99'
                    }
                    
                    var estimateTask_InputBox = new inputBoxWithLabelB(estimateCostWin,10,posYCount,110,estimateTaskBlockLength,3,taskTypeName,'',10,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,estimateTaskBlockColor,'left')
                  //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
                        estimateTask_InputBox.disabled = true
                        estimateTask_InputBox.name = 'estimateTask_InputBox'
                        estimateTask_InputBox.alpha = 1
                    
                    var estimateTaskText_InputBox = new inputBoxWithLabelB(estimateCostWin,420,posYCount,110,80,3,'',"  "+totalEstimateWorkingHour +" 小時",10,'0xaaaaaa','0xcccccc',5,'0xaaaaaa',0.1,'0x333333','center')
                  //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
                        estimateTaskText_InputBox.disabled = true
                        estimateTaskText_InputBox.name = 'estimateTaskText_InputBox'
                        estimateTaskText_InputBox.alpha = 1

                    
                    var workingTime_InputBox = new inputBoxWithLabelB(estimateCostWin,10,posYCount,110,taskTypeWorkingTimeBlockLength,3,taskTypeName,"",10,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,taskTypeWorkingTimeBlockColor,'right')
                  //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
                        workingTime_InputBox.disabled = true
                        workingTime_InputBox.name = 'workingTime_InputBox'
                        workingTime_InputBox.alpha = 1

                    var workingTimeText_InputBox = new inputBoxWithLabelB(estimateCostWin,500,posYCount,110,80,3,'',"  "+totalWorkingTimeHourCount.toFixed(1) +" 小時",10,'0xaaaaaa','0xcccccc',5,'0xaaaaaa',0.1,'0x334433','center')
                  //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
                        workingTimeText_InputBox.disabled = true
                        workingTimeText_InputBox.name = 'workingTimeText_InputBox'
                        workingTimeText_InputBox.alpha = 1
                    
                    var labelColor_InputBox = new inputBoxWithLabelB(estimateCostWin,680,posYCount,10,20,3,'','',10,'0xaaaaaa','0xcccccc',5,'0xaaaaaa',0.1,estimateBlockColor,'center')
                  //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
                        labelColor_InputBox.disabled = true
                        labelColor_InputBox.name = 'labelColor_InputBox'
                        labelColor_InputBox.alpha = 1

                   // estimateBlockColor
                    allEstimateTotalTime = allEstimateTotalTime + totalEstimateWorkingHour
                    
                    allTotalWorkingTime  = allTotalWorkingTime  + totalWorkingTimeHourCount
                  //  console.log(taskTypeName)
                    var tempTaskTypeInfo = [taskTypeName,estimateBlockColor,totalEstimateWorkingHour,totalWorkingTimeHourCount]
                    allTaskInfoCollect.push(tempTaskTypeInfo)

                };  
            

            }; 
            
        };
        
        
        
      //  console.log(allTaskInfoCollect)
        
        var totalEstimateHours_InputBox = new inputBoxWithLabelB(estimateCostWin,500,570,100,100,3,'預估工時:',allEstimateTotalTime.toFixed(1) + ' 小時',12,'0x999999','0xcccccc',2,'0xaaffaa',0.1,'0x222222','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            totalEstimateHours_InputBox.disabled = true
            totalEstimateHours_InputBox.name = 'totalEstimateHours_InputBox'
 
        
        var totalWorkingTimeHours_InputBox = new inputBoxWithLabelB(estimateCostWin,500,590,100,100,3,'實際工時 :',allTotalWorkingTime.toFixed(1) + ' 小時',12,'0x999999','0xcccccc',2,'0xaaffaa',0.1,'0x222222','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            totalWorkingTimeHours_InputBox.disabled = true
            totalWorkingTimeHours_InputBox.name = 'totalWorkingTimeHours_InputBox'
        
        ////預估成本區塊
        
                
        
        
        
        
                      
        var estCircle_Label = new inputBoxWithLabelB(estimateCostWin,840,20,80,100,3,'預估工時','',12,'0xffffff','0xffffff',2,'0xaaaaaa',0.1,'0x33372e','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            estCircle_Label.disabled = true
            estCircle_Label.name = 'estCircle_Label'  
        
        
        
                             
        var workingTimeCircle_Label = new inputBoxWithLabelB(estimateCostWin,1060,20,80,100,3,'實際工時','',12,'0xffffff','0xffffff',2,'0xaaaaaa',0.1,'0x33372e','center')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            workingTimeCircle_Label.disabled = true
            workingTimeCircle_Label.name = 'workingTimeCircle_Label'  
         
        
        
        
        
        
        
        
        var estCircleInfo_InputBox = new inputBoxWithLabelB(estimateCostWin,780,270,80,300,3,'','',12,'0x999999','0xcccccc',2,'0xaaffaa',0.1,'0x33372e','left')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            estCircleInfo_InputBox.disabled = true
            estCircleInfo_InputBox.name = 'estCircleInfo_InputBox'
        
        
        
        
        
        
    //    var workingTimeCircleInfo_InputBox = new inputBoxWithLabelB(projCostPreviewWin,1000,400,80,200,3,'實際工時:','小時',12,'0x999999','0xcccccc',2,'0xaaffaa',0.1,'0x333333','left')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
       //     workingTimeCircleInfo_InputBox.disabled = true
       //     workingTimeCircleInfo_InputBox.name = 'workingTimeCircleInfo_InputBox'
        
           
        
        //預估工時圓餅圖
        var circleRotation = 0
        for(var i = 0 ; i< allTaskInfoCollect.length ; i++){
            
            var arcColor =  allTaskInfoCollect[i][1] 
   
            var estAngleRange = (allTaskInfoCollect[i][2]/allEstimateTotalTime)
            
            var circle = new PIXI.Graphics();

                circle.beginFill(arcColor,1);

                circle.moveTo(0,0).lineTo(50,0);

                circle.arc(0,0,100,0,Math.PI * estAngleRange *2);
                circle.endFill();

                circle.x = 870//+ i*100
                circle.y = 150
                estimateCostWin.addChild(circle);
                circle.rotation =circleRotation

                circleRotation = circleRotation + Math.PI * estAngleRange *2 
            
                circle.infoText =  allTaskInfoCollect[i][0] +' ,  預估 '+  allTaskInfoCollect[i][2] + ' 小時'      
                circle.interactive = true;
                circle.buttonMode = true;
                circle.on('pointerover', function(){this.tint="0xff8888"
                                                   
                                                    var estCircleInfo_InputBox = this.parent.getChildByName('estCircleInfo_InputBox')
                                                    //console.log(estCircleInfo_InputBox)
                                                        estCircleInfo_InputBox.text =" 預估工時 :"+ this.infoText
                                                   
                                                    
                                                  //  var workingTimeCircleInfo_InputBox = this.parent.getChildByName('workingTimeCircleInfo_InputBox')

                                                   //     workingTimeCircleInfo_InputBox.alpha = 0
                                                   })
                        .on('pointerout', function(){this.tint="0xffffff"})
                        .on('pointerup',  function(){this.tint="0xffffff"})
                        .on('mousedown',function(){ })
            
        };
        ////預估工時圓餅圖

        //實際工時圓餅圖
        var worKingTimeCircleRotation = 0
        
        for(var i = 0 ; i< allTaskInfoCollect.length ; i++){
            
            var arcColor =  allTaskInfoCollect[i][1] 
   
            var estAngleRange = (allTaskInfoCollect[i][3]/allTotalWorkingTime)
            
            var worKingTimeCircle = new PIXI.Graphics();

                worKingTimeCircle.beginFill(arcColor,1);

                worKingTimeCircle.moveTo(0,0).lineTo(50,0);

                worKingTimeCircle.arc(0,0,100,0,Math.PI * estAngleRange *2);
                worKingTimeCircle.endFill();

                worKingTimeCircle.x = 1100//+ i*100
                worKingTimeCircle.y = 150
                estimateCostWin.addChild(worKingTimeCircle);
                worKingTimeCircle.rotation =worKingTimeCircleRotation

                worKingTimeCircleRotation = worKingTimeCircleRotation + Math.PI * estAngleRange *2 
            
                worKingTimeCircle.infoText =  allTaskInfoCollect[i][0] +' ,  執行 '+  (allTaskInfoCollect[i][3]).toFixed(1) + ' 小時'      
                worKingTimeCircle.interactive = true;
                worKingTimeCircle.buttonMode = true;
                worKingTimeCircle.on('pointerover', function(){this.tint="0xff8888"
                                                   
                                                  //  var workingTimeCircleInfo_InputBox = this.parent.getChildByName('workingTimeCircleInfo_InputBox')
                                                  //  console.log(estCircleInfo_InputBox)
                                                   //     workingTimeCircleInfo_InputBox.text = this.infoText
                                                  //  var estCircleInfo_InputBox = this.parent.getChildByName('estCircleInfo_InputBox')
                                                    
                                                      //  estCircleInfo_InputBox.alpha = 0
                                                               
                                                    var estCircleInfo_InputBox = this.parent.getChildByName('estCircleInfo_InputBox')
                                                    //console.log(estCircleInfo_InputBox)
                                                        estCircleInfo_InputBox.text =" 實際工時 :"+ this.infoText          
                                                               

                                                   })
                        .on('pointerout', function(){this.tint="0xffffff"})
                        .on('pointerup',  function(){this.tint="0xffffff"})
                        .on('mousedown',function(){ })
            
        };
        
        
        
        
        //////// 人力 user 計算/////////////////////////////////////////////////    
        
        
        
        
        var userCostWin =  new PIXI.Graphics();
            userCostWin.lineStyle(1, '0xffffff', 0);
            userCostWin.beginFill('0x222222',1);
            userCostWin.drawRoundedRect(0,0, 1270,630, 6);
            userCostWin.endFill();
            userCostWin.name = 'userCostWin'
            userCostWin.x = 10
            userCostWin.y = 110
            userCostWin.alpha = 1
           // projCostPreviewWin.addChild(userCostWin)
        
        
        
        
        
            //右方圓餅圖底色
        var userCircleViewBlock =  new PIXI.Graphics();
            userCircleViewBlock.lineStyle(1, '0xffffff', 0);
            userCircleViewBlock.beginFill('0x4e5858',1);
            userCircleViewBlock.drawRoundedRect(0,0,500,310, 6);
            userCircleViewBlock.endFill();
            userCircleViewBlock.name = 'userCircleViewBlock'
            userCircleViewBlock.x = 740
            userCircleViewBlock.y = 10
            userCircleViewBlock.alpha = 1
            userCostWin.addChild(userCircleViewBlock)
        
                    //右下方資訊區
        var userInfoViewBlock =  new PIXI.Graphics();
            userInfoViewBlock.lineStyle(1, '0xffffff', 0);
            userInfoViewBlock.beginFill('0x4e5858',1);
            userInfoViewBlock.drawRoundedRect(0,0,500,300, 6);
            userInfoViewBlock.endFill();
            userInfoViewBlock.name = 'userInfoViewBlock'
            userInfoViewBlock.x = 740
            userInfoViewBlock.y = 325
            userInfoViewBlock.alpha = 1
            userCostWin.addChild(userInfoViewBlock)
        
        
                
        var  userNameBtn = new buildBtnScaleF(userCostWin,5,10,70,25,6,'Noto Sans TC','300','人員暱稱','0xffffff',15,1,'0x333333',1,0,'0x222222') //'0x67e4aa'

             userNameBtn.name = 'userNameBtn'


        var  userWorkingTimeBtn = new buildBtnScaleF(userCostWin,150,10,200,25,6,'Noto Sans TC','300','任務工時總計預覽','0xffffff',15,1,'0x333333',1,0,'0x222222') //'0x67e4aa'

             userWorkingTimeBtn.name = 'userWorkingTimeBtn'
  
        
        var  userTotalWorkingTimeBtn = new buildBtnScaleF(userCostWin,603,10,70,25,6,'Noto Sans TC','300','總工時','0xffffff',15,1,'0x333333',1,0,'0x222222') //'0x67e4aa'

             userTotalWorkingTimeBtn.name = 'userTotalWorkingTimeBtn'
  
        var  userWorkingTimeCircleLabel = new buildBtnScaleF(userCircleViewBlock,120,10,70,25,6,'Noto Sans TC','300','人力分配','0xffffff',15,1,'0x333333',1,0,'0x4e5858') //'0x67e4aa'

             userWorkingTimeCircleLabel.name = 'userWorkingTimeCircleLabel'
        
        
        
        
        var userWorkingTimeCircle_InputBox = new inputBoxWithLabelB(userCircleViewBlock,10,270,80,300,3,'','',12,'0x999999','0xcccccc',2,'0xaaffaa',0.1,'0x4e5858','left')
          //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            userWorkingTimeCircle_InputBox.disabled = true
            userWorkingTimeCircle_InputBox.name = 'userWorkingTimeCircle_InputBox'
          
        
        
        
        
  
      //  var  taskWorkingHourBtn = new buildBtnScaleF(userCostWin,613,70,70,25,6,'Noto Sans TC','300','實際工時','0xffffff',15,1,'0x333333',1,0,'0x222222') //'0x67e4aa'

        //     taskWorkingHourBtn.name = 'taskWorkingHourBtn'
  
        
        //,userWorkingData,userList
        
        var userCount = 0
        var userCircleRotation = 0

        for(var i=0 ; i<userList.length;i++ ){
            
            var userName = userList[i]    
        
            var selUserTaskData =  userWorkingData.filter(function(item, index, array){
                                    return item[2] == userName & item[5] != 0

                });   
            
          console.log(selUserTaskData.length,selUserTaskData)
            var userTotalWorkingTime = 0
            
            for(var j = 0 ; j <selUserTaskData.length ; j++ ){
                if(selUserTaskData[j][5] == 1  ){
                    userTotalWorkingTime = userTotalWorkingTime +  selUserTaskData[j][4]  
   
                }else{
                    userTotalWorkingTime = userTotalWorkingTime
                };
                  
            };
            
            if( selUserTaskData.length == 0){
                var userLabelColor = '0x333333' //'0x'+selUserTaskData[0][8]
            }else{
                var userLabelColor = '0x'+selUserTaskData[0][8]

            };
            
            
            var totalWorkingHourBlockDefaultLength = 450

           // var totalEstimateWorkingHour = totalEstimateWorkingDay * 9
                if( userTotalWorkingTime >= 360){
                    var userWorkingTimeBlockLength  =  totalWorkingHourBlockDefaultLength  
                    if( userTotalWorkingTime > 600){
                        var userWorkingTimeBlockColor = '0xffaaaa'
                        var fontColor = '0x111111'

                    }else{
                        var userWorkingTimeBlockColor = '0x997777'
                        var fontColor = '0xcccccc'

                    }
                }else{

                    var userWorkingTimeBlockLength = (userTotalWorkingTime  / 360)* totalWorkingHourBlockDefaultLength
                    var userWorkingTimeBlockColor = '0x777777'
                    var fontColor = '0xcccccc'

                };
                    
            if( selUserTaskData.length != 0){
                userCount = userCount +1
                var userLabelPosY = stepHeight*userCount +20
                      //  console.log(i,userName,userLabelPosY)

                var userNameLabel_inputBox = new inputBoxWithLabelB(userCostWin,10,userLabelPosY,110,userWorkingTimeBlockLength,3,userName,userTotalWorkingTime.toFixed(1) +' 小時',10,'0xaaaaaa',fontColor,2,'0xaaaaaa',1,userWorkingTimeBlockColor,'left')
                  //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
                    userNameLabel_inputBox.disabled = true
                    userNameLabel_inputBox.name = 'userNameLabel_inputBox'
                    userNameLabel_inputBox.alpha = 1
                    userNameLabel_inputBox.userName = userName
                    userNameLabel_inputBox.userAllTaskData = selUserTaskData

                    userNameLabel_inputBox.interactive = true;
                    userNameLabel_inputBox.buttonMode = true;
                    userNameLabel_inputBox.on('pointerover', function(){this.tint="0xff0000"
                                                                        this.alpha = 0.7

                                           
                                                       })
                            .on('pointerout', function(){this.tint="0xffffff"; this.alpha = 1})
                            .on('pointerup',  function(){this.tint="0xffffff"})
                            .on('mousedown',function(){
                        
                                    //userCostWin.addChild(userInfoViewBlock)
                        
                                                        var userInfoViewBlock = this.parent.getChildByName("userInfoViewBlock")
                                                            userInfoViewBlock.removeChild(userInfoViewBlock.getChildByName('userTaskInfoContainer'))
                                                        
                                                         //   this.parent.removeChild(userInfoViewBlock)
                                                       // console.log(userInfoViewBlock)
                                                       // for(var i = 0; i<userInfoViewBlock.children.length;i++){
                                                       //     console.log()    
                                                       //     userInfoViewBlock.removeChild(userInfoViewBlock.children[i])
                                                            
                                                       // }
                                                        
                                                        var userTaskInfoContainer = new PIXI.Container()
                                                            userTaskInfoContainer.name = "userTaskInfoContainer"
                                                            userInfoViewBlock.addChild(userTaskInfoContainer)
                                                            userTaskInfoContainer.x = 0
                                                            userTaskInfoContainer.y = 5
                        
                                                        var inputTextStyle = new PIXI.TextStyle({
                                                            fontFamily: 'Noto Sans TC',
                                                            //fontFamily: '微軟細明體',Noto Sans TC,微軟正黑體

                                                            fontSize: 10,
                                                            fontStyle: 'normal',
                                                            fontWeight: '200',
                                                            letterSpacing: 1,
                                                            fill: '0xcccccc', // gradient

                                                        });
                        
                                                        var userAllTaskInfo = this.userAllTaskData
                                                              //  console.log(this.userAllTaskData)
                                                        for(var k =0; k<userAllTaskInfo.length;k++){
                                                            var inputBoxPosY =  k *20 
                                                            var taskName = userAllTaskInfo[k][1]
                                                            var taskWorkingHours = userAllTaskInfo[k][4]

                                                            var taskStartString = convertMSC(userAllTaskInfo[k][6])
                                                            var taskEndString = convertMSC(userAllTaskInfo[k][7])
                                                            var taskShowInfo = taskName+ '  /  ' + taskWorkingHours.toFixed(1)+' 小時' +  '  /  ' + taskStartString + ' ' +'~'+' '+taskEndString

                                                            var userTaskInfoLabel = new PIXI.Text(taskShowInfo, inputTextStyle); 

                                                                userTaskInfoContainer.addChild(userTaskInfoLabel)

                                                                userTaskInfoLabel.x = 10
                                                                userTaskInfoLabel.y = inputBoxPosY

                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                //var selUserTaskWorkingTime_inputBox = new inputBoxWithLabelB(userTaskInfoContainer,10,inputBoxPosY,450,0,'',taskShowInfo,14,'0xffffff','0xffffff',2,'0x4e5858',0.1,'0x4e5858','left')
                                                                                                        //inputBoxWithLabelB(parent,x,y,boxX,inputBoxW,fontPadding,labelText,inputText,inputFontSize,labelTextColor,inputTextColor,boxRound,strokeColor,strokeWidth,fillColor,alignMode)
                                                                
                                                            };
                                                        
                                                    
                    
                                                        })

                
                
               var userTotalWorkingTime_InputBox = new inputBoxWithLabelB(userCostWin,490,userLabelPosY,100,100,3,'',userTotalWorkingTime.toFixed(1) + ' 小時',12,'0x999999','0xcccccc',2,'0xaaffaa',0.1,'0x333333','center')
              //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
                    userTotalWorkingTime_InputBox.disabled = true
                    userTotalWorkingTime_InputBox.name = 'userTotalWorkingTime_InputBox' 
                
                
               var userWorkingTimelLabelColor_InputBox = new inputBoxWithLabelB(userCostWin,685,userLabelPosY,10,20,3,'','',10,'0xaaaaaa','0xcccccc',5,'0xaaaaaa',0.1,userLabelColor,'center')
                  //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
                        userWorkingTimelLabelColor_InputBox.disabled = true
                        userWorkingTimelLabelColor_InputBox.name = 'userWorkingTimelLabelColor_InputBox'
                        userWorkingTimelLabelColor_InputBox.alpha = 1
 
  
                
 
               // var arcColor =  allTaskInfoCollect[i][1] 

                var userWorkingAngleRange = (userTotalWorkingTime/allTotalWorkingTime)

                var userCircle = new PIXI.Graphics();

                    userCircle.beginFill(userLabelColor,1);

                    userCircle.moveTo(0,0).lineTo(50,0);

                    userCircle.arc(0,0,100,0,Math.PI * userWorkingAngleRange *2);
                    userCircle.endFill();

                    userCircle.x = 170 //+ i*300
                    userCircle.y = 150
                    userCircleViewBlock.addChild(userCircle);
                    userCircle.rotation =userCircleRotation

                    userCircleRotation = userCircleRotation + Math.PI * userWorkingAngleRange *2 

                    userCircle.infoText =  userName  +' ,  總工時: '+  userTotalWorkingTime.toFixed(1) + ' 小時' + '  /  ' +  (userWorkingAngleRange*100 ).toFixed(1) + ' %'
                    userCircle.interactive = true;
                    userCircle.buttonMode = true;
                    userCircle.on('pointerover', function(){this.tint="0xff8888"

                                                        var userWorkingTimeCircle_InputBox = this.parent.getChildByName('userWorkingTimeCircle_InputBox')
                                                            userWorkingTimeCircle_InputBox.text =  this.infoText


                                           
                                                       })
                            .on('pointerout', function(){this.tint="0xffffff"})
                            .on('pointerup',  function(){this.tint="0xffffff"})
                            .on('mousedown',function(){ })

            
                
            }; 
            
            

           // console.log('selUserTaskData',selUserTaskData)
        
        
        };
        
        
        
        
        
        
        
        
        
        
    };
    
    

    
    
    
    
};




//成本計算總視窗
function userWorkingTimeListWinA(parent,x,y,w,h,userName){
    
    console.log('userWorkingTimeListWinA',userName)
   // getSelUserData(userName)
    //parent.removeChild(parent.getChildByName("projCostPreviewWin_container"))

    //var taskTypeData = JSON.parse(window.localStorage.getItem("taskTypeData"));
    
    var userWorkingTimeMainWin = new moveAbleWinBlockC(parent,x,y,w,h,'個人工時列表',20,20,14,'0xffffff','userWorkingTimeMainWin',1,'0x333333',2,'0x333333',1,1,0.7,'0x336699',daysApp,screenW,screenH,true)
            userWorkingTimeMainWin.name = 'userWorkingTimeMainWin'   
    
    console.log(userName)
    
    
    var today =  new Date()
    var todayMs =  new Date().valueOf();    
    var getMonth = today.getMonth() +1;
    var getYear = today.getFullYear()
    
    //console.log(Math.floor(getMonth/2))
     //   console.log(todayMs,getMonth,getYear) 
    //YMD
    var selStartDayString = String(getYear)  + ',' + String(Math.floor(getMonth/2)*2) + ',' + '1'
    console.log(selStartDayString) 
    
    
    var formMonthText = new PIXI.TextInput({
        input: {
            fontSize: 20,
            padding:'2px',
            width: '400px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x333333', rounded: 5, stroke: {color: '0x333333', width: 1}},
                focused: {fill: '0x333333', rounded: 5, stroke: {color: '0x333333', width: 1}},
                disabled: {fill: '0x333333', rounded: 5}
            }
        })

    userWorkingTimeMainWin.addChild(formMonthText)
    
    formMonthText.name = 'formMonthText'
   // console.log(Math.floor(1/2)) 
   // console.log(Math.floor(2/2)) 
   // console.log(Math.floor(3/2)) 
   // console.log(Math.floor(4/2)) 
    var monthList = [1,2,3,4,5,6,7,8,9,10,11,12]

    var startMonthList = [1,1,3,3,5,5,7,7,9,9,11,11]


   // var selMonthString = new Date(todayMs).getFullYear() + ' 年 ' + startMonthList[new Date(todayMs).getMonth()] + ' 月 ' + ' 1'+' 日 ' 
    

    formMonthText.x = 400
    formMonthText.y = 30
    
    userWorkingTimeMainWin.currentStartMonth = startMonthList[new Date(todayMs).getMonth()]
    userWorkingTimeMainWin.currentEndMonth = startMonthList[new Date(todayMs).getMonth()] +1
    userWorkingTimeMainWin.currentYear = new Date(todayMs).getFullYear()
    
    
    
   // var startMonthString = new Date(todayMs).getFullYear() + ' 年 ' + String(startMonthList[new Date(todayMs).getMonth()]) + ' 月 '// + ' 1'+' 日 ' 
   // var endMonthString = new Date(todayMs).getFullYear() + ' 年 ' +  String(startMonthList[new Date(todayMs).getMonth()]+1) + ' 月 '

    
    
        formMonthText.text =  String(userWorkingTimeMainWin.currentYear) +  ' 年 ' +  String(userWorkingTimeMainWin.currentStartMonth) + ' 月 ' + " ~ " + String(userWorkingTimeMainWin.currentYear) +  ' 年 '+ String(userWorkingTimeMainWin.currentEndMonth)+ ' 月 ' 
    
    //   var date = new Date(), y = date.getFullYear(), m = date.getMonth();
   // var firstDay = new Date(y, m - 1, 1);
   // var lastDay = new Date(y, m, 0);
    
    
    
    var lastDay = (new Date(userWorkingTimeMainWin.currentYear,userWorkingTimeMainWin.currentEndMonth , 0))//.getDate()
    var lastDayString = String(lastDay.getDate())
    var startMs = getSelDayMs(String(userWorkingTimeMainWin.currentYear) + ' 年 ' + String(userWorkingTimeMainWin.currentStartMonth) +  ' 月 ' + '1'+ ' 日 ')
    var endMs = getSelDayMs(String(userWorkingTimeMainWin.currentYear) + ' 年 ' + String(userWorkingTimeMainWin.currentEndMonth) +  ' 月 ' + lastDayString + ' 日 ') + 86400000 -1
    

    
       // console.log(startMs,endMs,lastDay.getDate())
     console.log(convertMSB( startMs ),convertMSB( endMs ))
    

        
         
    
    
    
    var pageUpCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 25,
        padding:'2px',
        width: '25px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x555555', rounded: 5, stroke: {color: '0x333333', width: 1}},
            focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x333333', width: 1}},
            disabled: {fill: '0x555555', rounded: 5}
        }
    })
    
    pageUpCtrBtnBox.text = '＜'
    pageUpCtrBtnBox.x = 260
    
    pageUpCtrBtnBox.children[3].pivot.x = 3
    pageUpCtrBtnBox.children[3].pivot.y = 2

    pageUpCtrBtnBox.y = 30
    pageUpCtrBtnBox.disabled =true
    userWorkingTimeMainWin.addChild(pageUpCtrBtnBox)   
    
    var pageDownCtrBtnBox = new PIXI.TextInput({
    input: {
        fontSize: 25,
        padding:'2px',
        width: '25px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x555555', rounded: 5, stroke: {color: '0x333333', width: 1}},
            focused: {fill: '0x555555', rounded: 5, stroke: {color: '0x333333', width: 1}},
            disabled: {fill: '0x555555', rounded: 5}
        }
    })
    
    pageDownCtrBtnBox.text = '＞'
    pageDownCtrBtnBox.x = 300
    
    pageDownCtrBtnBox.children[3].pivot.x = 1
    pageDownCtrBtnBox.children[3].pivot.y = 2

    pageDownCtrBtnBox.y = 30
    pageDownCtrBtnBox.disabled =true
    userWorkingTimeMainWin.addChild(pageDownCtrBtnBox)   
    
    
    pageUpCtrBtnBox.interactive = true;
    pageUpCtrBtnBox.buttonMode = true;
    pageUpCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
   
            .on('mousedown',function(){this.alpha=0.5;
                                       
                                       var userWorkingTimeMainWin = this.parent
                                       var formMonthText = userWorkingTimeMainWin.getChildByName("formMonthText")
                                       var selUser_InputBox =  userWorkingTimeMainWin.getChildByName("selUser_InputBox")
                                       
                                       if( userWorkingTimeMainWin.currentStartMonth == 1){
                                            userWorkingTimeMainWin.currentStartMonth = 11    
                                            userWorkingTimeMainWin.currentEndMonth = 12  

                                            userWorkingTimeMainWin.currentYear = userWorkingTimeMainWin.currentYear -1
                                           
                                       }else{
                                           userWorkingTimeMainWin.currentStartMonth = userWorkingTimeMainWin.currentStartMonth -2
                                           userWorkingTimeMainWin.currentEndMonth = userWorkingTimeMainWin.currentEndMonth -2   
                                           
                                       };
                                        formMonthText.text =  String(userWorkingTimeMainWin.currentYear) +  ' 年 ' +  String(userWorkingTimeMainWin.currentStartMonth) + ' 月 ' + " ~ " + String(userWorkingTimeMainWin.currentYear) +  ' 年 '+ String(userWorkingTimeMainWin.currentEndMonth) + ' 月 ' 

                                        var lastDay = (new Date(userWorkingTimeMainWin.currentYear,userWorkingTimeMainWin.currentEndMonth , 0))//.getDate()
                                        var lastDayString = String(lastDay.getDate())
                                        var startMs = getSelDayMs(String(userWorkingTimeMainWin.currentYear) + ' 年 ' + String(userWorkingTimeMainWin.currentStartMonth) +  ' 月 ' + '1'+ ' 日 ')
                                        var endMs = getSelDayMs(String(userWorkingTimeMainWin.currentYear) + ' 年 ' + String(userWorkingTimeMainWin.currentEndMonth) +  ' 月 ' + lastDayString + ' 日 ') + 86400000 -1
    
                                             console.log(convertMSB( startMs ),convertMSB( endMs ),selUser_InputBox.text)
                                            buildUserWorkingTimeListWin(selUser_InputBox.text,startMs,endMs)

    
                                            /*
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
                                            */
                                            
                                      })
                    .on('pointerup', function(){this.alpha=1;})
    
    pageDownCtrBtnBox.interactive = true;
    pageDownCtrBtnBox.buttonMode = true;
    pageDownCtrBtnBox.on('pointerover', function(){this.alpha=0.5;})
                     .on('pointerout', function(){this.alpha=1;})
                     .on('mousedown',function(){this.alpha=0.5;
                                            var userWorkingTimeMainWin = this.parent
                                            var formMonthText = userWorkingTimeMainWin.getChildByName("formMonthText")
                                            var selUser_InputBox =  userWorkingTimeMainWin.getChildByName("selUser_InputBox")

                                               if( userWorkingTimeMainWin.currentStartMonth == 11){
                                                    userWorkingTimeMainWin.currentStartMonth = 1  
                                                    userWorkingTimeMainWin.currentEndMonth = 2

                                                    userWorkingTimeMainWin.currentYear = userWorkingTimeMainWin.currentYear + 1

                                               }else{
                                                   userWorkingTimeMainWin.currentStartMonth = userWorkingTimeMainWin.currentStartMonth +2
                                                   userWorkingTimeMainWin.currentEndMonth = userWorkingTimeMainWin.currentEndMonth +2   

                                               };
                                                    formMonthText.text =  String(userWorkingTimeMainWin.currentYear) +  ' 年 ' +  String(userWorkingTimeMainWin.currentStartMonth) + ' 月 ' + " ~ " + String(userWorkingTimeMainWin.currentYear) +  ' 年 '+ String(userWorkingTimeMainWin.currentEndMonth)+ ' 月 ' 

                                                    var lastDay = (new Date(userWorkingTimeMainWin.currentYear,userWorkingTimeMainWin.currentEndMonth , 0))//.getDate()
                                                    var lastDayString = String(lastDay.getDate())
                                                    var startMs = getSelDayMs(String(userWorkingTimeMainWin.currentYear) + ' 年 ' + String(userWorkingTimeMainWin.currentStartMonth) +  ' 月 ' + '1'+ ' 日 ')
                                                    var endMs = getSelDayMs(String(userWorkingTimeMainWin.currentYear) + ' 年 ' + String(userWorkingTimeMainWin.currentEndMonth) +  ' 月 ' + lastDayString + ' 日 ') + 86400000 -1
    

                                                                 console.log(convertMSB( startMs ),convertMSB( endMs ),selUser_InputBox.text)
                                                    buildUserWorkingTimeListWin(selUser_InputBox.text,startMs,endMs)

                                                
                                                    /*
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
                                            */

                                      })
                     .on('pointerup', function(){this.alpha=1;})
    
    
    
    
    
    
    
    var selUser_InputBox = new inputBoxWithLabelB(userWorkingTimeMainWin,30,32,60,130,3,'人員 :',userName,12,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x334646','center')
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
                                                        
                                               
                                                       
                                                        
                                                       var winW = 190
                                                       var winH = 600
                                                     
                                                        var posX = 150
                                                        var posY = 80
                                 
                                                         //   var userData = JSON.parse(window.localStorage.getItem("userData"));

                                                        
                                                        var userWorkingDaySel = new openUserSelectWinInWorkingTimeWin(uiBaseContainer,posX,posY,winW,winH,selUser_InputBox,daysApp,userName,false)
                                                        
                                                       
                                                        //console.log(this.text)
                                                        })
                            .on('pointerup', function(){this.alpha=1;})

 
    /*
    $.post("/getUserWorkingTimeInRange", {   //runAllAutoEvents
                'userName':userName,


        }, function(data) {
                console.log(data)

                buildCuserWorkingTimeListWin()

        }) ;   
    
    
    function  buildCuserWorkingTimeListWin(){
     
        
    };
    
    */
   // buildUserWorkingTimeListWin(userName) 
};

function buildUserWorkingTimeListWin(user,startMs,endMs){
    console.log('buildUserWorkingTimeListWin',user,startMs,endMs)   

    console.log(convertMSB( startMs ),convertMSB( endMs ))
    //window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));
    var selUserDayOffDB = JSON.parse(window.localStorage.getItem("selUserDayOffDB"));
    var selUserDayOffPreDay = JSON.parse(window.localStorage.getItem("selUserDayOffPreDay"));

    console.log('selUserDayOffDB',selUserDayOffPreDay)   

    var holidaysMsList = JSON.parse(window.localStorage.getItem("holidaysMsList"));
    //console.log(holidaysMsList)
    var userWorkingTimeMainWin = uiBaseContainer.getChildByName("userWorkingTimeMainWin")
    userWorkingTimeMainWin.removeChild(userWorkingTimeMainWin.getChildByName("userWorkingTimeWinBlock"))

   // var userWorkingTimeWinBlock = userWorkingTimeMainWin.getChildByName("userWorkingTimeWinBlock")

    //console.log(userWorkingTimeMainWin) 
    var userWorkingTimeWinBlock =  new PIXI.Graphics();
        userWorkingTimeWinBlock.lineStyle(1, '0xffffff', 0);
        userWorkingTimeWinBlock.beginFill('0x222222',1);
        userWorkingTimeWinBlock.drawRoundedRect(0,0, 1380,630, 6);
        userWorkingTimeWinBlock.endFill();
        userWorkingTimeWinBlock.name = 'userWorkingTimeWinBlock'
        userWorkingTimeWinBlock.x = 10
        userWorkingTimeWinBlock.y = 110
        userWorkingTimeWinBlock.alpha = 1
        userWorkingTimeMainWin.addChild(userWorkingTimeWinBlock)


    
    var crossDays = Math.ceil((endMs - startMs) / 86400000)
  //  console.log(crossDays)
    var userWorkingBlockWidth = 20
    var userWorkingBlockHeight = 200
    
    
    // 工時說明
    var workingTimeText_InputBox = new PIXI.TextInput({
        input: {
            fontSize: 14,
            padding:'2px',
            width: '1000px',
            color:'0xcccccc',
        }, 
         box: {
                default: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                focused: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                disabled: {fill: '0x222222', rounded: 5}
            }
        })

        workingTimeText_InputBox.text = '工時說明'
        workingTimeText_InputBox.x = 30
        workingTimeText_InputBox.name = 'workingTimeText_InputBox'
       // dayTextBK.children[3].pivot.x = 3
       // dayTextBK.children[3].pivot.y = 2

        workingTimeText_InputBox.y = 600
        workingTimeText_InputBox.disabled =true
        userWorkingTimeWinBlock.addChild(workingTimeText_InputBox)   

    
    // 起始月份標籤
    var startMonthLabel = new PIXI.TextInput({
        input: {
            fontSize: 14,
            padding:'2px',
            width: '100px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                focused: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                disabled: {fill: '0x222222', rounded: 5}
            }
        })

        startMonthLabel.text = convertMSE(startMs)
        startMonthLabel.x = 30

       // dayTextBK.children[3].pivot.x = 3
       // dayTextBK.children[3].pivot.y = 2

        startMonthLabel.y = 350
        startMonthLabel.disabled =true
        userWorkingTimeWinBlock.addChild(startMonthLabel)   

    // 結束月份標籤
    var endMonthLabel = new PIXI.TextInput({
        input: {
            fontSize: 14,
            padding:'2px',
            width: '100px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                focused: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                disabled: {fill: '0x222222', rounded: 5}
            }
        })

        endMonthLabel.text = convertMSE(endMs)
        endMonthLabel.x = 650

       // dayTextBK.children[3].pivot.x = 3
       // dayTextBK.children[3].pivot.y = 2

        endMonthLabel.y = 350
        endMonthLabel.disabled =true
        userWorkingTimeWinBlock.addChild(endMonthLabel)   

    
    
    for(var i = 0 ; i<crossDays ; i++){
        
        var  checkWeekDay =  convertWeekDay( (startMs + 86400000*i) )
       //     console.log(checkWeekDay)
        if( checkWeekDay == 0 | checkWeekDay == 6){
            var dayBlockColor = '0xaa7777'    
            
        }else{
            
           // var dayBlockColor = '0x555555'    
            if(holidaysMsList.includes((startMs + 86400000*i)) == false){
                 var dayBlockColor = '0x555555'    
            }else{

                var dayBlockColor = '0xaa7777'    
            };
 
            
        };
        
        //selUserDayOffPreDay  user 請假資料
        
        var userWorkingDayBlock =  new PIXI.Graphics();
            userWorkingDayBlock.lineStyle(1, '0xffffff', 0);
            userWorkingDayBlock.beginFill(dayBlockColor,0.2);
            userWorkingDayBlock.drawRoundedRect(0,0, userWorkingBlockWidth, userWorkingBlockHeight, 1);
            userWorkingDayBlock.endFill();
            userWorkingDayBlock.name = 'block_'+ String( startMs + 86400000*i)
            userWorkingDayBlock.x = 30 + i*(userWorkingBlockWidth+1)
            userWorkingDayBlock.y = 600
            userWorkingDayBlock.pivot.y = userWorkingBlockHeight
            userWorkingDayBlock.alpha = 1
            userWorkingDayBlock.currentMs = startMs + 86400000*i
            userWorkingTimeWinBlock.addChild(userWorkingDayBlock)
        
        
        
        
        var textLabel = convertMSD( (startMs + 86400000*i ))
           // console.log(textLabel)
        
       // console.log(convertMSB(startMs + 86400000*i))
        
                          
        var currentDayOffDB = selUserDayOffPreDay.filter(function(item, index, array){
                              return item[0] == startMs + 86400000*i

                         });    
        if(currentDayOffDB.length >= 1){
            console.log(currentDayOffDB)          
            var currentDayOffOclockMs = currentDayOffDB[0][0]
            console.log(convertMSB(startMs + 86400000*i))    
            console.log(convertMSB(currentDayOffOclockMs),(currentDayOffDB[0][3]))    
            var dayOffBlockHeight =   ((currentDayOffDB[0][3])/9 )*userWorkingBlockHeight
            var userDayOffBlock =  new PIXI.Graphics();
                userDayOffBlock.lineStyle(1, '0xffffff', 1);
                userDayOffBlock.beginFill('0xffffff',1);
                userDayOffBlock.drawRoundedRect(0,0, userWorkingBlockWidth, dayOffBlockHeight, 1);
                userDayOffBlock.endFill();
                userDayOffBlock.name = 'block_'+ String( startMs + 86400000*i)
                userDayOffBlock.x = 30 + i*(userWorkingBlockWidth+1)
                userDayOffBlock.y = 600
                userDayOffBlock.pivot.y = dayOffBlockHeight
                userDayOffBlock.alpha = 1
                userDayOffBlock.currentMs = startMs + 86400000*i
                userWorkingTimeWinBlock.addChild(userDayOffBlock) 
            
                            
                var dayOffBlockTextLabel= new PIXI.TextInput({
                    input: {
                        fontSize: 12,
                        padding:'0px',
                        width: '15px',
                        color:'0x111111',
                    }, 
                     box: {
                            default: {fill: '0xffffff', rounded: 5, stroke: {color: '0xffffff', width: 1}},
                            focused: {fill: '0xffffff', rounded: 5, stroke: {color: '0xffffff', width: 1}},
                            disabled: {fill: '0xffffff', rounded: 5}
                        }
                    })
                   
                    dayOffBlockTextLabel.text = (currentDayOffDB[0][3])

                    dayOffBlockTextLabel.x = 5//30
                    dayOffBlockTextLabel.y = 0//20 + i*30 
                    dayOffBlockTextLabel.disabled =true
                    userDayOffBlock.addChild(dayOffBlockTextLabel)
                
            
            
            
                 /*       
                userWorkingTimeWinBlock.interactive = true;
                userWorkingTimeWinBlock.buttonMode = true;

                userWorkingTimeWinBlock.on('pointerover', function(){this.tint="0xff8888" 
                                                             //    workingTimeText_InputBox.text = this.info

                                                                })
                        .on('pointerout', function(){this.tint="0xffffff" })
                        .on('pointerup',  function(){this.tint="0xffffff"})
                        .on('mousedown', function(){ console.log('點選專案block')
                                                  //  workingTimeText_InputBox.text = this.info


                                                   })
            */

        }
        //console.log(convertMSB(startMs + 86400000*i))
        var dayTextBK = new PIXI.TextInput({
            input: {
                fontSize: 14,
                padding:'2px',
                width: '25px',
                color:'0xcccccc',
            }, 
             box: {
                    default: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                    focused: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                    disabled: {fill: '0x222222', rounded: 5}
                }
            })

            dayTextBK.text = textLabel
            dayTextBK.x = 30 + i*(userWorkingBlockWidth+1)

           // dayTextBK.children[3].pivot.x = 3
           // dayTextBK.children[3].pivot.y = 2

            dayTextBK.y = 370
            dayTextBK.disabled =true
            userWorkingTimeWinBlock.addChild(dayTextBK)   

    };


    
    

    if(user =='未登入'){
        
    }else{
        $.post("/getUserWorkingTimeInRange", {   //runAllAutoEvents
                'userName':user,
                'startMs':startMs,
                'endMs':endMs,


        }, function(data) {
                console.log(data)
            var startTimeMs = parseInt(data[10])
            var workingDayaData = data[9]
            var projDB = data[11]
            console.log(projDB)
                
           console.log(workingDayaData)

           //bulid proj sample block
            
            for(var i =0 ;i<projDB.length;i++){
                var projID = projDB[i][0]
                var projColor = projDB[i][1]
                var projEnName = projDB[i][2]
                var projCHName = projDB[i][3]
                var projChiefArtist = projDB[i][4]
                console.log(projID,projColor,projEnName,projCHName,projChiefArtist)
               
                  if( projColor == null){

                        var projSampleBlockColor = '0x555555'  

                    }else{

                        var projSampleBlockColor = '0x' + projColor

                    };
                    
               
                
                var projColorSampleBlock= new PIXI.TextInput({
                    input: {
                        fontSize: 12,
                        padding:'0px',
                        width: '80px',
                        color:'0xffffff',
                    }, 
                     box: {
                            default: {fill: projSampleBlockColor, rounded: 5, stroke: {color: projSampleBlockColor, width: 1}},
                            focused: {fill: projSampleBlockColor, rounded: 5, stroke: {color: projSampleBlockColor, width: 1}},
                            disabled: {fill: projSampleBlockColor, rounded: 5}
                        }
                    })
                   
                    projColorSampleBlock.text = ''

                    projColorSampleBlock.x = 30
                    projColorSampleBlock.y = 20 + i*30 
                    projColorSampleBlock.disabled =true
                    userWorkingTimeWinBlock.addChild(projColorSampleBlock)
                
                                
                var projNameBlock= new PIXI.TextInput({
                    input: {
                        fontSize: 14,
                        padding:'2px',
                        width: '600px',
                        color:'0xffffff',
                    }, 
                     box: {
                            default: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                            focused: {fill: '0x222222', rounded: 5, stroke: {color: '0x222222', width: 1}},
                            disabled: {fill: '0x222222', rounded: 5}
                        }
                    })
                   
                    projNameBlock.text = projCHName +'  /   '+ " 主美: " + projChiefArtist

                    projNameBlock.x = 140
                    projNameBlock.y = 20 + i*30 
                    projNameBlock.disabled =true
                    userWorkingTimeWinBlock.addChild(projNameBlock)
                
                
                    
            };
              
            
            
            for(var j = 0 ; j < workingDayaData.length ;j++){
                var workingTimeDayOclockMs = parseInt(Object.keys(workingDayaData[j])[0])
                var workingTimeData = workingDayaData[j][workingTimeDayOclockMs]
                var workingTimeDataKeys = Object.keys(workingTimeData)
                var selBlockPosX =((workingTimeDayOclockMs - startTimeMs)/86400000 )*(userWorkingBlockWidth+1) +30
                
                var selBlockPosY = 0
                
     



                
                
                
                
                
                
                
                
                for(var k = 0 ;k <workingTimeDataKeys.length; k++){
                    var projID =   parseInt(workingTimeDataKeys[k])
                    var projWorkingHours = workingTimeData[projID]
                    var selBlockHeight = (projWorkingHours / 9.0) * userWorkingBlockHeight
                    
 
                        
                    var selectProj = projDB.filter(function(item, index, array){
                                          return item[0] == projID

                                     });    
                    
                    
                    var selProjColor = '0x'+ selectProj[0][1]
                    
                   // console.log(selectProj,selectProj[0][1])
                    if(selectProj[0][1] == null){
                        
                        var projBlockColor = '0x555555'  
                        
                    }else{
                        
                        var projBlockColor = selProjColor
                        
                    }
                  //  

                    var dayProjWorkingBlock =  new PIXI.Graphics();
                        dayProjWorkingBlock.lineStyle(1, '0xffffff', 0);
                        dayProjWorkingBlock.beginFill(projBlockColor,0.5);
                        dayProjWorkingBlock.drawRoundedRect(0,0, userWorkingBlockWidth, selBlockHeight,2);
                        dayProjWorkingBlock.endFill();
                        dayProjWorkingBlock.name = 'dayblock_'+ String(workingTimeDayOclockMs)
                        dayProjWorkingBlock.info = convertMSA(workingTimeDayOclockMs) + '  /  ' +selectProj[0][3] + '  /  ' + projWorkingHours.toFixed(1) +' 小時'
                        dayProjWorkingBlock.x = selBlockPosX
                       // dayProjWorkingBlock.y = selBlockPosY// +400
                        dayProjWorkingBlock.pivot.y = selBlockHeight
                        dayProjWorkingBlock.y = -selBlockPosY +600//+selBlockHeight
                        dayProjWorkingBlock.alpha = 1
                        dayProjWorkingBlock.currentMs = workingTimeDayOclockMs
                        userWorkingTimeWinBlock.addChild(dayProjWorkingBlock)
                    
                        dayProjWorkingBlock.interactive = true;
                        dayProjWorkingBlock.buttonMode = true;
                    
                        dayProjWorkingBlock.on('pointerover', function(){this.tint="0xff8888" 
                                                                         workingTimeText_InputBox.text = this.info
                                                                        
                                                                        })
                                .on('pointerout', function(){this.tint="0xffffff" })
                                .on('pointerup',  function(){this.tint="0xffffff"})
                                .on('mousedown', function(){ console.log('點選專案block')
                                                            workingTimeText_InputBox.text = this.info
                                                                              
                                                  
                                                           })
                    
                    selBlockPosY = selBlockPosY+selBlockHeight

                 //   console.log(projID,projWorkingHours)
                    
                };
                
             //   console.log(workingTimeDayOclockMs,workingTimeData,workingTimeDataKeys)
                
                
            };
               // buildCuserWorkingTimeListWin()

        }) ;     
        
        
        
    };
    
    
    
    
};


// 人員工時清單人員選擇
function openUserSelectWinInWorkingTimeWin(parent,x,y,w,h,userInputBox,selApp,defaultUser,autoOpenDayOffWin){   //設定事件工作人員與工時
        console.log('openWorkingUserDaysSelect',autoOpenDayOffWin)
    
    var userData = JSON.parse(window.localStorage.getItem("userData"));
        console.log(defaultUser)
            console.log(userData)
        console.log(userSelFilterList)

    //openUserSelectWinDefaut

    var userSelFilter = $.cookie('userSelFilter')

    if(userSelFilter == undefined ){
            console.log('no select filter')
            var filterUserList =  userData      
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
    
    
    //console.log(filterUserList)

    
   //taskUserSelWin
    var userSelWinDefaut = new moveAbleWinBlockC(parent,x,y,w,h,'選擇人員',20,20,16,'0xffffff','workingUserSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',selApp,screenW,screenH,true)    

    var itemPreList = 5
    var btnWidth = 35
    var btnHeight = 20
                
    
    
    var openUserSelWin  = new buildUserSelectBasicA(userSelWinDefaut,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true)

    
    
                                          
    for(var i = 0; i< userSelFilterList.length ; i++){
                                                                  //  console.log(dataList) 


        var btnText = userSelFilterList[i]
        var btnPosX  =(i%itemPreList)*btnWidth +5 //+10
        var btnPosY = 35 + Math.floor(i/itemPreList)*btnHeight//+ optionBGBlockStartPosY
    //    console.log(btnText)
        var filterBtn = new buildBtnScaleC(userSelWinDefaut,btnPosX,btnPosY,btnWidth,btnHeight,3,btnText,'0xffffff',10,1,'0x234a5a',1,1,'0x668686')
            filterBtn.btnText = btnText

            filterBtn.interactive = true;
            filterBtn.buttonMode = true;
            filterBtn.on('pointerover', function(){this.alpha = 0.2;})
                     .on('pointerout', function(){this.alpha =1;})
                     .on('mousedown', function(){
                                    this.alpha = 1
                                    var filterKey = this.btnText


                                    if(filterKey == 'ALL'){
                                        var filterUserList =  userData  
                                    }else if(filterKey == 'My'){

                                    }else{
                                        var filterUserList = userData.filter(function(item, index, array){
                                            return item[38] == filterKey
                                        });    



                                    };

                                    console.log('選擇人員',defaultUser,'autoOpenDayOffWin',autoOpenDayOffWin)

                                    var openUserSelWin  = new buildUserSelectBasicA(userSelWinDefaut,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true)



                                    })







    };    

                                                      
      
                                
    /*

    if(autoOpenDayOffWin == true){
            var openUserSelWin  = new buildUserSelectFromTotalWin(userSelWinDefaut,0,0,w,h,'人員選擇',userData,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true,true)    

    }else if(autoOpenDayOffWin == false){
            var openUserSelWin  = new buildUserSelectFromTotalWin(userSelWinDefaut,0,0,w,h,'人員選擇',userData,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,true,true,false)    

             }

    
    */
    
    
    
    
};



//人員選擇視窗 基本
function buildUserSelectBasicA(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect){
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
                                console.log( returnInputBox.text)
            
                                if( autoClose == true){
                                   // console.log('autoClose True')
                                  //  parent.removeChild(parent.getChildByName("selectOpti_container"))
                                    var parentContainerName = parent.name
                                    
                                //    console.log(parent.parent.name)
                                   // console.log(parentContainerName)
                                  //   buildUserWorkingTimeListWin(this.text)
                                    parent.parent.removeChild(parent.parent.getChildByName(parentContainerName))
                                                 //    console.log()
                                   var userWorkingTimeMainWin = uiBaseContainer.getChildByName("userWorkingTimeMainWin")
                                 //  console.log(userWorkingTimeMainWin)
                                  // var formMonthText = userWorkingTimeMainWin.getChildByName("formMonthText")
        
                                   var lastDay = (new Date(userWorkingTimeMainWin.currentYear,userWorkingTimeMainWin.currentEndMonth , 0))//.getDate()
                                    var lastDayString = String(lastDay.getDate())
                                    var startMs = getSelDayMs(String(userWorkingTimeMainWin.currentYear) + ' 年 ' + String(userWorkingTimeMainWin.currentStartMonth) +  ' 月 ' + '1'+ ' 日 ')
                                    var endMs = getSelDayMs(String(userWorkingTimeMainWin.currentYear) + ' 年 ' + String(userWorkingTimeMainWin.currentEndMonth) +  ' 月 ' + lastDayString + ' 日 ') + 86400000 -1
    

                                                                 console.log(convertMSB( startMs ),convertMSB( endMs ))

                                   // getSelUserData(this.text)
                                    
                                      $.post("/getSelUserDayOffDB", {  
                                                'userName':this.text,

                                            }, function(data) {
                                              //  console.log(data)

                                                var errMsg = data[0]
                                               // var searchID = data[1]
                                                var userName = data[1]
                         
                                                var selUserDayOffDB =  data[2]
                                                var selUserDayOffPreDay =  data[3]

                                            //    console.log(selUserDayOffDB)
                                                  //  if(errMsg == 'the same name'){
                                                  //      errMsgBox.text = '專案名稱重複'
                                                  //  }else{
                                                    //    errMsgBox.text = '【' + projName + '】'+ ' 專案新增完成'

                                                   // }
                                                //var userEditWin = new buildUserDetialEditWin(uiBaseContainer,625,40,this,selUserData,'edit')

                                                //顯示現有工作日 
                                               // var userWorkingDaysWin = new buildDaysSelWinD(uiBaseContainer,930,40,500,820,1,'alpha',allReadyRangeDays,allWorkingRangeDays,allFinishRangeDays,allSubmitRangeDays,userDayOffDB,false) //pixiUI_layout

                                                window.localStorage.setItem("selUserDayOffPreDay", JSON.stringify(selUserDayOffPreDay));

                                                window.localStorage.setItem("selUserDayOffDB", JSON.stringify(selUserDayOffDB));
                                                buildUserWorkingTimeListWin(userName,startMs,endMs)
                                                parent.removeChild(parent.getChildByName(parentContainerName))

                                    })     
                                    
                                    

                                 

                                }else{
                                  //  console.log('autoClose False')

                                    
                                };
                                
                               // parent.removeChild(parent.getChildByName("selectOpti_container"))

            
                                    if(userSelect == true){
                                        
                                        var searchID = this.searchID
                                        var userName = this.text
                                        console.log('點選 user 2',searchID,userName) 


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
    


