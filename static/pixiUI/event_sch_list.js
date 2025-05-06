
//任務編輯器
/*
const taskTypeDataB =  {
        'design':"設計",
        'concept art':"概念",
        '2D graphic':"平面",
        'modeling':"模型",
        'texture':"材質",
        'animation':"動畫",
        'storyboard':"腳本",
        '2D animation':"動畫",
        'layout':"構圖",
        'lighting':"燈光",
        'compositing':"合成",
        'rendering':"算圖",
        'effect':"特效",
        'spine event':"spine",
        'babylon event':"babylon",
        'rigging':"綁定",
        'research':"研究",
        'simulation':"模擬",

   
    
    };
*/

function buildTaskEditWin(parent,x,y,w,h,selApp,selTaskName,selTaskData,mode,favTask){ //任務編輯器
    console.log('buildTaskEditWin')
    
    
    console.log(mode)

    var taskTypeData = JSON.parse(window.localStorage.getItem("taskTypeData"));
    
        console.log(taskTypeData)

    var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    var userSearchFilter = JSON.parse(window.localStorage.getItem("userSearchFilter"));

    var userData = JSON.parse(window.localStorage.getItem("userData"));
    console.log(deptData)
    var lableFontSize = 10
   // console.log(userData)
    
    var taskTypeList = []
    for (var i =0; i<taskTypeData.length;i++ ){
        taskTypeList.push(taskTypeData[i][1])
        };
    

    
    
    if( mode == 'edit'){
        
        var winTitleText =  selTaskData[1] +' 任務編輯'   
        var taskName = selTaskData[1]
        var taskID = selTaskData[0]
        var projSearchIndex = selTaskData[2]
        var taskType = selTaskData[11]
        var taskDesc = selTaskData[9]
        var parentTask = selTaskData[3]
        var taskUser = selTaskData[4]
        var taskCurrentProcess = selTaskData[12]
        
        
        var taskST_day = selTaskData[5]
        var taskED_day = selTaskData[6]
        
        var taskReal_ST_day = selTaskData[21]
        var taskReal_ED_day = selTaskData[22]
        var taskRequest_day = selTaskData[23]
        var taskReferenceURL = selTaskData[7]
        var taskOutputURL = selTaskData[8]
        var taskEX1 = selTaskData[14]
        var btnAText = '確認編輯'
        var btnAType = 'primary'

        //var taskData = selTaskData
        //var projSearchIndex = selTaskData[2]
        
    }else if(mode == 'add'){
        var dayDate = new Date()

        var selYear = dayDate.getFullYear()
        var selMonth = dayDate.getMonth() +1
        var selDay = dayDate.getDate() 
    
        var winTitleText = "新增任務" 
        var taskName = '輸入任務名稱'
        var taskID =  '無須輸入'
        var projSearchIndex = selTaskData

        var taskType = '點選任務類型'
        var taskDesc = '輸入任務描述'
        var parentTask = '選擇上層任務'
        var taskUser = '選擇執行人員'
        var taskCurrentProcess =  '準備中'
        
        var taskST_day =  selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        var taskED_day =  selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        
        
        var taskReal_ST_day ='實際開始日期'
        var taskReal_ED_day = '實際結束日期'
        var taskRequest_day = '需求日期'

        var taskReferenceURL = '輸入參考資料路徑'
        var taskOutputURL = '輸入輸出資料路徑'
        var taskEX1 = '輸入備註說明'
        var btnAText = '確認新增'
        var btnAType = 'primary'

      //  var taskData = ''

    };
    
   // moveAbleWinBlockB
    var taskEditWin = new moveAbleWinBlockC(uiBaseContainer,x,y,w,h,winTitleText,20,20,16,'0x223322','taskEditWin_container',1,'0x222222',5,'0x353535',1,1,0.6,'0x8cc4d7',selApp,screenW,screenH,true)    
    
    taskEditWin.interactive = true;
    
        
    
    var taskSearchID_InputBox = new inputBoxWithLabelB(taskEditWin,10,35,60,50,2,'Task ID:',taskID,lableFontSize,'0xcccccc','0x333333',2,'0xcccccc',0.1,'0x999999','center')
        taskSearchID_InputBox.name = 'taskSearchID_InputBox'
       // taskSearchID_InputBox.children[2].position.x = 20
        //taskSearchID_InputBox.text = '0'
        taskSearchID_InputBox.disabled = true    
            
    var parentProjSearchID_InputBox = new inputBoxWithLabelB(taskEditWin,140,35,60,50,2,'專案 ID:',projSearchIndex,lableFontSize,'0xcccccc','0x333333',2,'0xcccccc',0.1,'0x999999','center')
        parentProjSearchID_InputBox.name = 'parentProjSearchID_InputBox'

        //parentProjSearchID_InputBox.text = proj_id
        parentProjSearchID_InputBox.disabled = true 
    

    var taskType_InputBox = new inputBoxWithLabelB(taskEditWin,260,70,80,130,3,'任務類型 :',taskType,lableFontSize,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x555555','center')
        //taskType_InputBox.text = ''
        taskType_InputBox.disabled = true   
        taskType_InputBox.name = 'taskType_InputBox'

            
    
            
        taskType_InputBox.interactive = true;
        taskType_InputBox.buttonMode = true;
    

        taskType_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                                 //  console.log(taskTypeList,taskType_InputBox)
                                var winW = 180
                                var winH = taskTypeList.length *25 + 70
                   
                               // console.log(taskEditWin.position.x,taskEditWin.position.y) taskTypeData taskTypeList
                                var posX = taskEditWin.position.x + w +20
                                var posY = taskEditWin.position.y
                                var pojTypeSelWin = new moveAbleWinBlockC(uiBaseContainer,posX,posY,winW,winH,'任務類型選擇',20,20,16,'0xffffff','pojTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    
                                
                                console.log('任務類型選擇')
                                                   
                                var openDaysSelWin  = new buildTaskTypeSelectWinA(pojTypeSelWin,0,0,winW,winH,'任務類型',taskTypeData,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,taskType_InputBox,true,false)
                                                    //buildOptionSelectWinA(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,returnInputBox)
                                                  //  buildSelectionWinD(parent,x,y,w,h,tapeText,dataList,returnInputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})





    
    var myFavTaskSetBtn = new insertHeartIcon(taskEditWin,460,45,1)
    
    var taskHistoryBtn = new historyBtnWithIconA(taskEditWin,430,45,20,20,5,'0xaaffff','0x353535',1.2)

    
        taskHistoryBtn.on('mousedown',function(){this.alpha=0.5;
                             
                              console.log('點選修改紀錄')

                                $.post("/loadTaskHistoryData", {
                                  'task_id':taskSearchID_InputBox.text,

                                        }, function(data) {
                                                console.log(data)
                                    
                                        var historyData =  data[3]
                                        
                                        var reSortHistoryData = historyData.sort(function (a, b) {
                                                return parseInt(a[16]) < parseInt(b[16]) ? 1 : -1;
                                        }); 
                                        
                                       // 1655971634
                                       // console.log(getSelDayMs(16559716340000))

                                        console.log(historyData)
                                    
                                          //  var selYear = dayDate.getFullYear()
      //  var selMonth = dayDate.getMonth() +1
       // var selDay = dayDate.getDate() 
       // var taskST_day =  selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
      //  var taskED_day =  selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        
                                  //  errMsgBox.text = '【' + taskName_InputBox.text +'】'+ ' 任務刪除完成'

                                   // uiBaseContainer.removeChild(uiBaseContainer.getChildByName('delProjConfirmWin_container'))   
                                  //  uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   


                                 //   taskDeleteBlock.alpha = 1

                      //  console.log(taskTypeList,taskType_InputBox)
                                        var winW = 250
                                        var winH = 500 //+ 70

                                       // console.log(taskEditWin.position.x,taskEditWin.position.y)
                                        var posX = taskEditWin.position.x + w + 5
                                        var posY = taskEditWin.position.y
                                        var taskHisSelWin = new moveAbleWinBlockE(uiBaseContainer,posX,posY,winW,winH,'修改紀錄選擇',20,20,15,'0xffffff','taskHisSelWin_container',1,'0x222222',2,'0x353535',0,0.8,0.8,'0x353535',daysApp,screenW,screenH,true)    
                                                            //    (parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,tapeAlpha,winTapeColor,selApp,screenW,screenH,closeBtn)
                                        var taskHistorySelTime_input = new inputBoxWithLabelB(taskHisSelWin,10,50,80,150,0,'修改時間:','選擇修改時間',11,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
                                            taskHistorySelTime_input.name = 'taskHistorySelTime_input'

                                         var dataList = []
                                         for(var i = 0 ; i < historyData .length ;i++){
                                            // var modifyTime = new Date(historyData[i][16]*1000)
                                             var selTimeMs =   new Date(historyData[i][16]*1000)   
                                             var loginUser = historyData[i][0]
                                         //   var selYear = selTimeMs.getFullYear()
                                          //  var selMonth = selTimeMs.getMonth() +1
                                         //   var selDay = selTimeMs.getDate() 
                                         //    var selHour = selTimeMs.getHours()
                                          //   var selMinutes = selTimeMs.getMinutes()
                                             console.log(selTimeMs)

                                            var modifyTime =  loginUser + '  /  '  +  String(selTimeMs).split(' ')[1] +   '  ' +  String(selTimeMs).split(' ')[2] +'  '+  String(selTimeMs).split(' ')[4]
                                           // console.log(String(selTimeMs).split(' '))
                                            dataList.push(modifyTime)  

                                             
                                             
                                         }
                                        console.log(dataList)
                                        var optionSel = new buildOptionSelectWinB(taskHisSelWin,10,60,230,420,'tapeText',dataList,'0x88aacc','0x234a5a',13,215,1,10,25,10,daysApp,taskHistorySelTime_input,historyData,false,false)       
                                        }) ;

                        //    var priceTypeSelWin  = new buildOptionSelectWinA(priceTypeSelWinBG,0,0,185,winH,'價目類型',priceTypeList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,priceListType_InputBox,true,false)

                                //  buildOptionSelectWinB(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,returnInputBox,autoClose,userSelect)              
                              //  var openDaysSelWin  = new buildOptionSelectWinA(pojTypeSelWin,0,0,winW,winH,'任務類型',taskTypeList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,taskType_InputBox,true,false)
                                                    //buildOptionSelectWinA(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,returnInputBox)
                                                  //  buildSelectionWinD(parent,x,y,w,h,tapeText,dataList,returnInputBox)
                            })
    
    
    
    
    
    if(favTask.includes(taskID) == true){
        //console.log()
        myFavTaskSetBtn.alpha = 1 

    }; 

    
    
        myFavTaskSetBtn.on('mousedown', function(){    
                                    
                                    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                    
                                    var loginID = userNameInput.text
                                        console.log(this)       
                                 //   console.log(gameID)    
                                    if(loginID == "未登入" ){
                                        errMsgBox.text = "請先登入"
                                    }else{
                                        if(this.alpha == 0.1){
                                             this.alpha = 1
                                            console.log('加入我的任務')
                                            
                                            $.post("/addFavTaskToUserFav", {
                                                "user_name":loginID,
                                                "task_id":taskSearchID_InputBox.text,
                                                "task_name":taskName_InputBox.text,

                                                
                                                }, function(data) {

                                                   console.log(data)
                                              
                                                    errMsgBox.text = taskName_InputBox.text +'新增到我的任務'
                                                }); 
                                            
                                            
                                            
                                        }else{
                                           // var loginID = pixiInfoApp.stage.getChildByName('container_loginContainer').getChildByName('loginIDText')

                                            this.alpha = 0.1
                                            console.log(loginID)
                                            console.log('取消我的任務')
                                                
                                                $.post("/removeFavTaskFromUserFav", {
                                                   "user_name":loginID,
                                                    "task_id":taskSearchID_InputBox.text,
                                                    "task_name":taskName_InputBox.text,
                                                }, function(data) {

                                                   console.log(data)
                                                    errMsgBox.text = taskName_InputBox.text +'由我的任務移除'
                                                  // if(errMsg == 'remove done'){
                                                 //      projErrorMessage.text = projectNameInput.text  + "已由我的專案中移除"
                                                  //     heartIcon.alpha = 0.1
                                                  // };
                                                }); 
                                            
                                            
                                        }

                                    }
                                
                                })
    
    
    
    
    
    
    

    
    
    var taskName_InputBox = new inputBoxWithLabelB(taskEditWin,10,105,80,380,3,'任務名稱 :',taskName,lableFontSize,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x777777','center')
        taskName_InputBox.name = 'taskName_InputBox'
        //taskName_InputBox.disabled = true   
       // taskName_InputBox.text = ''
    
    var taskDesc_InputBox = new inputBoxWithLabelB(taskEditWin,10,130,80,380,3,'任務說明 :',taskDesc,lableFontSize,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x777777','center')
       // taskDesc_InputBox.text = ''
        taskDesc_InputBox.name = 'taskDesc_InputBox'
        //taskDesc_InputBox.disabled = true   


      
    
     
    var parentTask_InputBox = new inputBoxWithLabelB(taskEditWin,10,270,80,380,3,'',parentTask,lableFontSize,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x555555','center')
     //   parentTask_InputBox.text = ''
        parentTask_InputBox.disabled = true   
        parentTask_InputBox.name = 'parentTask_InputBox'
        parentTask_InputBox.alpha = 1

    
    
    
    
    var taskUser_InputBox = new inputBoxWithLabelB(taskEditWin,10,70,80,130,3,'執行人員 :',taskUser,lableFontSize,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x555555','center')
      //  taskUser_InputBox.text = ''
        taskUser_InputBox.disabled = true   
        taskUser_InputBox.name = 'taskUser_InputBox'

        taskUser_InputBox.interactive = true;
        taskUser_InputBox.buttonMode = true;

    
        taskUser_InputBox.on('pointerover', function(){this.alpha=0.5;})
                            .on('pointerout', function(){this.alpha=1;})
                            .on('mousedown',function(){this.alpha=0.5;
                                                       console.log('執行人員選擇2')
                                                       
                                                        console.log(userNameList)
                                                        console.log(userData)
                                                        console.log(userSelFilterList) 

                                                       var winW = 190
                                                       var winH = h//userNameList.length *25 + 70

                                                       // console.log(taskEditWin.position.x,taskEditWin.position.y)
                                                        var posX = taskEditWin.position.x + w +5 //+20
                                                        var posY = taskEditWin.position.y 
                                                       var editWin = uiBaseContainer.getChildByName("taskEditWin_container")
                                                       var editWinStartDay_InputBox = editWin.getChildByName("startDay_InputBox")
                                                       var editWinEndDay_InputBox = editWin.getChildByName("endDay_InputBox")
                                                       editWinStartDay_InputBox.text = startDay_InputBox.text
                                                       editWinEndDay_InputBox.text = endDay_InputBox.text
                                                        var userWorkingDaySel = new openWorkingUserDaysSelect(uiBaseContainer,posX,posY,winW,winH,userSelFilterList,userData,taskUser_InputBox,editWinStartDay_InputBox,editWinEndDay_InputBox,selApp)
                    
                                              })
                            .on('pointerup', function(){this.alpha=1;})


    
    
    
    var processList = ['準備中','進行中','已完成','已提交']
    
    
    var taskProcess_InputBox = new inputBoxWithLabelB(taskEditWin,260,35,50,90,3,'進度 :',taskCurrentProcess,lableFontSize,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x557755','center')
       // taskProcess_InputBox.text = ''
        taskProcess_InputBox.disabled = true   
        taskProcess_InputBox.name = 'taskProcess_InputBox'

        taskProcess_InputBox.interactive = true;
        taskProcess_InputBox.buttonMode = true;
    
        taskProcess_InputBox.on('pointerover', function(){this.alpha=0.5;})
                            .on('pointerout', function(){this.alpha=1;})
                            .on('mousedown',function(){this.alpha=0.5;
                                                        console.log('任務進度狀態選擇')
                         //   var openDaysSelWin  = new buildSelectionWinB(uiBaseContainer,taskEditWin.x +taskEditWin.width,taskEditWin.y,580,120,'進度狀態選擇',processList,taskProcess_InputBox)
                                var openTaskProcessSelWin  = new buildOptionSelectWinA(taskEditWin,520,0,185,h-5,'目前進度',processList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,taskProcess_InputBox,false,false)

                                              // buildSelectionWin(uiBaseContainer,x-600,50,600,800,'選擇主美',userNameList,artistSel_inputBox)
                                              })
                            .on('pointerup', function(){this.alpha=1;})


    
    var startDay_InputBox = new inputBoxWithLabelB(taskEditWin,10,160,80,130,3,'起始日期 :',taskST_day,lableFontSize,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x555555','center')
      //  startDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        startDay_InputBox.disabled = true
        startDay_InputBox.name = 'startDay_InputBox'

    
    var endDay_InputBox = new inputBoxWithLabelB(taskEditWin,260,160,80,130,3,'結束日期 :',taskED_day,lableFontSize,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x555555','center')
       // endDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        endDay_InputBox.disabled = true
        endDay_InputBox.name = 'endDay_InputBox'

    
        startDay_InputBox.interactive = true;
        startDay_InputBox.buttonMode = true;
        startDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                      

                                                   // var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,taskEditWin.x +taskEditWin.width,280, 600,800,startDay_InputBox)
                                                    var openDaysSelWin = new buildDaysSelWinForTaskEditor(uiBaseContainer,850, 40,startDay_InputBox,realStartDay_InputBox,0.8,true)

                                                    
                                                    
                                                  })
                        .on('pointerup', function(){this.alpha=1;})


        endDay_InputBox.interactive = true;
        endDay_InputBox.buttonMode = true;
        endDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                       
                                                  // var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,taskEditWin.x +taskEditWin.width,280, 600,800,endDay_InputBox)
                                                   var openDaysSelWin = new buildDaysSelWinForTaskEditor(uiBaseContainer,850, 40,endDay_InputBox,realEndDay_InputBox,0.8,true)


                                          })
                        .on('pointerup', function(){this.alpha=1;})


    
        
        var realStartDay_InputBox = new inputBoxWithLabelB(taskEditWin,10,185,80,130,3,'實際起始 :',taskReal_ST_day,lableFontSize,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x555555','center')
          //  realStartDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            realStartDay_InputBox.disabled = true
            realStartDay_InputBox.name = 'realStartDay_InputBox'


        var realEndDay_InputBox = new inputBoxWithLabelB(taskEditWin,260,185,80,130,3,'實際結束 :',taskReal_ED_day,lableFontSize,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x555555','center')
           // realEndDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
            realEndDay_InputBox.disabled = true
            realEndDay_InputBox.name = 'realEndDay_InputBox'

        /*
        if(mode == 'add'){
       
            
            
            
        }else{
        
 
        };
    
        
       // realStartDay_InputBox.interactive = true;
       // realStartDay_InputBox.buttonMode = true;
        realStartDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                      

                                                   // var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,taskEditWin.x +taskEditWin.width,280, 600,800,realStartDay_InputBox)
                                                    var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,1055, 305,realStartDay_InputBox,0.7,true)

                                                    
                                                  })
                        .on('pointerup', function(){this.alpha=1;})


      //  realEndDay_InputBox.interactive = true;
       // realEndDay_InputBox.buttonMode = true;
        realEndDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                       
                                                   //var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,taskEditWin.x +taskEditWin.width,280, 600,800,realEndDay_InputBox)
                                                   var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,1055,305,realEndDay_InputBox,0.7,true)


                                          })
                        .on('pointerup', function(){this.alpha=1;})
    
    
        */
    
    
    
    var requestDay_InputBox = new inputBoxWithLabelB(taskEditWin,10,300,80,130,3,'',taskRequest_day,lableFontSize,'0xffffff','0xcccccc',2,'0xffffff',0.1,'0x555555','center')
      //  requestDay_InputBox.text = ''//selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        requestDay_InputBox.disabled = true
        requestDay_InputBox.name = 'requestDay_InputBox'
        requestDay_InputBox.alpha = 0
    
     //   requestDay_InputBox.interactive = true;
    //    requestDay_InputBox.buttonMode = true;
        requestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                       
                                                  // var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,taskEditWin.x +taskEditWin.width,280, 600,800,requestDay_InputBox)
                                                    var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,1055, 305,requestDay_InputBox,0.7,true)


                                          })
                        .on('pointerup', function(){this.alpha=1;})
    

    
    
    
    
    
        
    var taskReferenceURL_InputBox = new inputBoxWithLabelB(taskEditWin,10,340,80,380,3,'參考資料 :',taskReferenceURL,lableFontSize,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x777777','left')
       // taskReferenceURL_InputBox.text = ''
        taskReferenceURL_InputBox.name = 'taskReferenceURL_InputBox'
        //taskReferenceURL_InputBox.disabled = true
    
    var taskOutputURL_InputBox = new inputBoxWithLabelB(taskEditWin,10,365,80,380,3,'輸出位置 :',taskOutputURL,lableFontSize,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x777777','left')
       // taskOutputURL_InputBox.text = ''
        taskOutputURL_InputBox.name = 'taskOutputURL_InputBox'
       // taskOutputURL_InputBox.disabled = true

    var taskExt1_InputBox = new inputBoxWithLabelB(taskEditWin,10,390,80,380,3,'備註說明 :',taskEX1,lableFontSize,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x777777','left')
      //  taskExt1_InputBox.text = '備註說明'
        taskExt1_InputBox.name = 'taskExt1_InputBox'
       // taskExt1_InputBox.disabled = true

   
    
    //任務實際工時編輯
    
    
    if(mode == 'edit'){
        
            var taskRealWorkingDayEditBtn = new buildBtnScaleB(taskEditWin,260,220,200,25,'設定實際工時',btnAType)
                taskRealWorkingDayEditBtn.name = 'taskRealWorkingDayEditBtn'

                taskRealWorkingDayEditBtn.on('mousedown', function(){
                    
                    
                                    var todayMs =  new Date().valueOf();
    
                    
                                    var realWoringDayEditWin = new buildRealWorkingTimeWin(600,40,1,false,taskUser_InputBox.text,taskID,taskName,projSearchIndex,todayMs)

                                        })     
    }
    



    
    
    var taskEditBtn = new buildBtnScaleB(taskEditWin,360,460,100,25,btnAText,btnAType)
        taskEditBtn.name = 'taskEditBtn'
   
    
    
        taskEditBtn.on('mousedown', function(){
                if(mode == 'edit'){
                    
                    
                        var taskScheduleListWin = uiBaseContainer.getChildByName("taskScheduleListWin_container")
                        var taskSchListwinBG =  taskScheduleListWin.getChildByName("taskSchListwinBG")
                        
                        
                        $.cookie('taskSchListwinBG_posX', taskSchListwinBG.position.x , { expires: 14 });
                        $.cookie('taskSchListwinBG_posY', taskSchListwinBG.position.y , { expires: 14 });
                        $.cookie('lastProjID', projSearchIndex , { expires: 14 });

                        console.log(projSearchIndex,taskSchListwinBG)
   
                    
                        var taskEditConfirmGrp =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'確 認 編 輯 視 窗','確認專案: '+ taskName_InputBox.text +' 儲存修改',14,'0x000000','taskEditConfirmGrp_container',5,1,daysApp,screenW,screenH)    
                        var taskEditConfirmWinBK = taskEditConfirmGrp[0]
                        var confirmBtn = taskEditConfirmGrp[1]
                        var canclBtn = taskEditConfirmGrp[2]
                       // console.log(editUserConfirmWin)
                                    taskEditConfirmWinBK.x = taskEditConfirmWinBK.x - 150
                                    taskEditConfirmWinBK.y = taskEditConfirmWinBK.y - 100

                        confirmBtn.on('mousedown', function(){

                                var chechDeltaTimeA =  (getSelDayMs(endDay_InputBox.text)) - (getSelDayMs(startDay_InputBox.text))
                                           //    console.log(realEndDay_InputBox.text)
                                if( realStartDay_InputBox.text == '實際開始日期' || realEndDay_InputBox.text =="實際結束日期" ){
                                    var chechDeltaTimeB = 1
                                }else{
                                    var chechDeltaTimeB =  ( getSelDayMs(realEndDay_InputBox.text)) - (getSelDayMs(realStartDay_InputBox.text))

                                };
                      
                                console.log(chechDeltaTimeA,chechDeltaTimeB)

                                if(chechDeltaTimeA <0){

                                        errMsgBox.text = taskName +' 結束時間比開始時間早，請修正日期(event_001)'
                                }else if(chechDeltaTimeA  == 0){
                                        errMsgBox.text = taskName +' 開始時間 與 結束時間同日，已編輯完成(event_001_2)' 
                                        editTaskDataTODB()
                                }else if(chechDeltaTimeA > 0){

                                        if(chechDeltaTimeB > 0){

                                                editTaskDataTODB()
                                                 errMsgBox.text = taskName +'  已編輯完成(event_002)'


                                        }else if(realEndDay_InputBox.text == "" & realStartDay_InputBox.text ==""  ){

                                                editTaskDataTODB()
                                                  errMsgBox.text = taskName +' 無實際執行日期 已編輯完成(event_003)'    


                                        }else if(chechDeltaTimeB <= 0){

                                            errMsgBox.text = taskName +' 實際結束時間比實際開始時間早，請修正日期(event_004)'    
                                        } else{


                                             errMsgBox.text = taskName +' 實際執行時間日期錯誤(event_005)' 
                                        };



                                };
                            
                            
                      

                                
                                 uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskHisSelWin_container'))   

                        });   

                        canclBtn.on('mousedown', function(){

                            uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditConfirmGrp_container'))   

                        });


                        function editTaskDataTODB(){

                                console.log(realStartDay_InputBox.text)
                                                        console.log(realEndDay_InputBox.text)
                              //  console.log(requestDay_InputBox.text)
                                var currentTimeMs = parseInt(getTodayMs()/1000)
                                var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                    if(userNameInput.text == '未登入'){
                                        var loginUserName = 'none'
                                    }else{
                                        var loginUserName = userNameInput.text 
                                    };
                            
                                $.post("/editSelTask", {   //runAllAutoEvents
                                            'id':parseInt(taskSearchID_InputBox.text),
                                            'proj_id':parseInt(parentProjSearchID_InputBox.text),
                                            'name':taskName_InputBox.text,
                                            'parent_task':parentTask_InputBox.text,
                                            'user_name':taskUser_InputBox.text,
                                            'st_day':startDay_InputBox.text,
                                            'ed_day':endDay_InputBox.text,
                                            'ref':taskReferenceURL_InputBox.text,
                                            'output':taskOutputURL_InputBox.text,
                                            'task_desc':taskDesc_InputBox.text,
                                            'task_type':taskType_InputBox.text,
                                            'progress_desc':taskProcess_InputBox.text,
                                            'progress_percent':0,//taskProcess_InputBox.text,
                                            'task_ext1':taskExt1_InputBox.text,
                                            'real_st_day':realStartDay_InputBox.text,
                                            'real_ed_day':realEndDay_InputBox.text,
                                            'request_day':requestDay_InputBox.text,
                                            'change_time':currentTimeMs,
                                            'login':loginUserName


                                        }, function(data) {
                                            console.log(data)

                                            
                                            errMsgBox.text =  '  已編輯完成'
                                            uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   
                                            uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditConfirmGrp_container'))   

                                                    var currentTaskWinData = JSON.parse(window.localStorage.getItem("currentTaskWinData"));

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

                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   
                                                        
                                                        });  

                                    
                                    
                                        }) ;

                        };

                    }else if(mode == 'add'){
                             
                        console.log('add new task')      
                        var currentTimeMs = parseInt(getTodayMs()/1000)
    
                        var deltaTime = checkDetaTime(startDay_InputBox.text,endDay_InputBox.text)    
                        var userNameInput = uiBaseContainer.getChildByName('userNameInput')

                       // console.log(deltaTime)  
                            if(userNameInput.text == '未登入'){
                                        var loginUserName = 'none'
                                    }else{
                                        var loginUserName = userNameInput.text 
                                };
                        
                        if( deltaTime >= 0){
                       // console.log('1111111');
                            $.post("/addNewTaskToDB_B", {   //新增任務到資料庫
                                
                                    'proj_id':parseInt(parentProjSearchID_InputBox.text),
                                    'name':taskName_InputBox.text,
                                    'task_desc':taskDesc_InputBox.text,
                                    'task_type':taskType_InputBox.text,
                                    'user_name':taskUser_InputBox.text,
                                    'parent_task':0,   // 無作用，之後增加
                                    'st_day':startDay_InputBox.text,
                                    'ed_day':endDay_InputBox.text,
                                    'ref':taskReferenceURL_InputBox.text,
                                    'output':taskOutputURL_InputBox.text,
                                    'progress_desc':taskProcess_InputBox.text,
                                    'progress_percent':0,// 無作用，之後增加
                                    'task_ext1':taskExt1_InputBox.text,
                                    'real_st_day':realStartDay_InputBox.text,
                                    'real_ed_day':realEndDay_InputBox.text,
                                    'request_day':requestDay_InputBox.text,
                                    'change_time':currentTimeMs,
                                    'login':loginUserName

                                    }, function(data) {
                                            console.log(data)
                                        var errMsg = data[0]
                                     if(errMsg == 'task existed'){

                                            errMsgBox.text = taskName_InputBox.text  + ' 名稱已存在。' 

                                     }else if(errMsg == 'add task success'){

                                            errMsgBox.text = taskName_InputBox.text  + '新增完成' 
                                     }

                                
                                    var currentTaskWinData = JSON.parse(window.localStorage.getItem("currentTaskWinData"));
                                    //var currentTaskData = JSON.parse(window.localStorage.getItem("currentTaskData"));

                
                
                
                                   // console.log(currentTaskWinData)
                                    //console.log(currentTaskData)
                                 //   console.log(currentTaskWinData['listMode'])

                
                                
                

    

                                
                                
                                                    //刷新表單
                                                    
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

                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   
                                                        });  
                                
                                                        
                                
                                
                                
                                
                                
                                    })        
                        }else{
                            errMsgBox.text = '結束時間比開始時間早，請修正日期'
                        };   
                        
                        
                             
                    };


        
        });
   
    if( mode == 'edit') {
        console.log('刪 除 任 務')   
        // var delProjBtn = new buildInputBoxBtn(taskEditWin,20,460,100,25,11,'刪 除 任 務','0xffffff','danger')//taskEditWin.width-150
            var delProjBtn = new buildBtnScaleB(taskEditWin,20,460,100,25,'刪除任務','danger')
                delProjBtn.name = 'delProjBtn'
         
         
         
            delProjBtn.projSearchIndex = parentProjSearchID_InputBox.text
            
            delProjBtn.on('mousedown', function(){
            var taskScheduleListWin =     uiBaseContainer.getChildByName('taskScheduleListWin_container')  
              //  console.log(taskScheduleListWin)
            var taskLabelBlockWin =    taskScheduleListWin.getChildByName('taskLabelBlockWin')
              //  console.log(taskLabelBlockWin)
                
            var selTaskBlock =  taskLabelBlockWin.getChildByName( 'taskBlock_' + String(taskSearchID_InputBox.text))
              //  console.log(selTaskBlock)

             //   console.log(parentProjSearchID_InputBox.text,taskSearchID_InputBox.text)
            var taskDeleteBlock  =  selTaskBlock.getChildByName( 'taskDeleteBlock' + String(taskSearchID_InputBox.text))
            
                console.log(taskDeleteBlock)

            var delProjConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'確 認 刪 除 任 務 視 窗',taskName_InputBox.text +' 確認刪除',14,'0x000000','delProjConfirmWin_container',5,1,daysApp,screenW,screenH)   
            
                var delProjConfirmYes = delProjConfirmWin[1]
                var delProjConfirmNo = delProjConfirmWin[2]

                      delProjConfirmYes.on('mousedown', function(){
                                                                    console.log('確認刪除任務')
                                                                    
                                                                    $.post("/deleteTaskFromDB", {
                                                                      'proj_id':parentProjSearchID_InputBox.text,
                                                                      'task_id':taskSearchID_InputBox.text,
                                                                      'task_name':taskName_InputBox.text,

                                                                                }, function(data) {
                                                                                    console.log(data)
                                                                        errMsgBox.text = '【' + taskName_InputBox.text +'】'+ ' 任務刪除完成'

                                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('delProjConfirmWin_container'))   
                                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   

                                                                        
                                                                        taskDeleteBlock.alpha = 1
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        


                                                                    }) ;
                                                                    

                                                });

                        delProjConfirmNo.on('mousedown', function(){
                                                                    console.log('取消刪除任務')
                                                                    errMsgBox.text = '任務【' + taskName_InputBox.text +'】'+ ' 取消刪除'

                        })



                    });



        
        
    }
   
   // return [taskEditWin ,darkBG]
    
    
    
    
};


function openWorkingUserDaysSelect(parent,x,y,w,h,userSelFilter,userData,userInputBox,returnStartDay_inputBox,returnEndDay_inputBox,selApp){   //設定事件工作人員與工時
        console.log('openWorkingUserDaysSelect')
    var taskUserSelWin = new moveAbleWinBlockC(parent,x,y,w,h,'執行人員選擇',20,20,16,'0xffffff','workingUserSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',selApp,screenW,screenH,true)    

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
                                                                                                
                                                                                            }
                                                                                            //console.log(returnStartDay_inputBox,returnEndDay_inputBox)
                                                                                            var openUserSelWin  = new buildUserSelectWinA(taskUserSelWin,0,0,w,h,'人員選擇',filterUserList,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,returnStartDay_inputBox,returnEndDay_inputBox,false,true)

                                                                                           // var projSelBKGroup = new buildProjSelWinA(projectSelectWin,0,0,w,h,filterUserList,selApp)

                                                                                           // console.log(filterKey,filterUserList)

                                                                                            })
                                                                
                                                                                        .on('pointerup', function(){this.alpha = 1;})   






                                                            };    

                                                        

                                


                                                    //人員選擇 
                                                    console.log(returnStartDay_inputBox,returnEndDay_inputBox)
                                                    var openUserSelWin  = new buildUserSelectWinA(taskUserSelWin,0,0,w,h,'人員選擇',userData,'0x88aacc','0x234a5a',12,150,1,30,25,170,selApp,userInputBox,returnStartDay_inputBox,returnEndDay_inputBox,false,true)    
    
    
    
    
};


//下方任務排程列表
function buildTaskSchListWinB(btn,x,y,w,h,taskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndexID,projChName,projType,selUser,defaultFliterType,defaultFilterSel,listMode){
    console.log('buildTaskSchListWin')
    //console.log('projType',projType)
    
   // console.log(convertMSB( taskStartTimeMs ),convertMSB( taskEndTimeMs ))
   
  //  var selProjWorkingTimeDB = JSON.parse(window.localStorage.getItem("selProjWorkingTimeDB"));  
  //   console.log(selProjWorkingTimeDB)
    
    var userPrefSet = JSON.parse(window.localStorage.getItem("userPrefSet"));

    var taskTypeData = JSON.parse(window.localStorage.getItem("taskTypeData"));
    var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    var userSearchFilter = JSON.parse(window.localStorage.getItem("userSearchFilter"));
    var userSelFilterList = ['ALL','GA','GAD','AU','TA','WMD']
    var userData = JSON.parse(window.localStorage.getItem("userData"));

    var jobPositionList = JSON.parse(window.localStorage.getItem("jobPositionDB"));

    
    
    var lastProjID = parseInt($.cookie('lastProjID'))
    
    if(lastProjID == projSearchIndexID){  //確認是否跟上次瀏覽的為同一專案
        var currentEventFilter = $.cookie('currentEventFilter')
        console.log(lastProjID,currentEventFilter)
        listMode = currentEventFilter   //  回應上次所選過濾類型
        var cookieMode = true //  回應是否讀取cookie資料
        
    }else{
        var cookieMode = false

        console.log('與上次瀏覽專案不同')
 
    };

   // console.log(lastProjID,projSearchIndexID)
    
    
    
   // var selEventTypeFilter = '未指定'
        
    var toDayMDY = getTodayStringMDY()
    var todayMs = new Date(toDayMDY).valueOf();  
    var taskCount = taskData.length
   // console.log(listMode)


    var allEndTimeMsList = []
    
    for(var i = 0 ; i< taskData.length ;i++){//抓取任務最後時間
        
       // console.log(getSelDayMs(taskData[][6]))
        allEndTimeMsList.push(getSelDayMs(taskData[i][6]))  
       // allEndTimeMsList.push(111)  
        
    };
    
    allEndTimeMsList.sort(function(a, b){return b-a});//抓取任務最後時間
    
   // var lastDayTime
    
    
    
   // console.log(allEndTimeMsList)
    
    
    var sortDataByTime =       taskData.sort(function (a, b) {
                return getSelDayMs(a[5]) > getSelDayMs(b[5]) ? 1 : -1;
        });  
    
  //  console.log(sortDataByTime)
    
    
    if(listMode ==""){
        listMode = "時間▼"
        var resortTaskData = taskData.sort(function (a, b) {
                return getSelDayMs(a[5]) > getSelDayMs(b[5]) ? 1 : -1;
            
            
            
        });  
    }else if(listMode =="時間▼"){
        
         var resortTaskData = taskData.sort(function (a, b) {
                return getSelDayMs(a[5]) > getSelDayMs(b[5]) ? 1 : -1;
             
             
    
        });  
        
             
    }else if(listMode =="時間▲"){
        
        
         var resortTaskData = taskData.sort(function (a, b) {
                return getSelDayMs(a[5]) < getSelDayMs(b[5]) ? 1 : -1;
             
    
        });  
        
             
    }else if(listMode =="人員"){
        
        var resortTaskData = taskData.sort(function (a, b) {
                return  a[4].localeCompare(b[4]);
            
            
    
        });   
        
             
    }else if(listMode =="類型"){
         var resortTaskData = taskData.sort(function (a, b) {
                return  a[11].localeCompare(b[11]);
        });   
              
    }else if(listMode =="addNewTask"){
         var resortTaskData = taskData.sort(function (a, b) {
               return a[24] < b[24] ? 1 : -1;
        });   
    
    };
    
    ;
    
        
    window.localStorage.setItem("currentTaskData", JSON.stringify(taskData));
    
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


    // console.log(resortTaskData)
   
    /*
    var resortTaskData =  taskData.sort(function(a,b){
        return b.number-a.number || b.rating.average-a.rating.average
        }).filter(function(a,b,c){return !b || c[b-1].number != a.number});
    
    console.log(resortTaskData)
*/
    
    uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskScheduleListWin_container'))   

    
    if( taskStartTimeMs == 'none' | taskEndTimeMs == 'none'){
      //  console.log('no Task____________________________________________________1')
       // var duration = 45

        var duration = 120
        
        var startDayMs = todayMs //- 45*86400000
        var endDayMs = todayMs + 44*86400000
        var pointDaysFromStartDay = todayMs//(todayMs - startDayMs)/86400000

        
    }else if( todayMs > taskEndTimeMs ){
        //var duration = ((todayMs -taskEndTimeMs)/86400000) + ( taskEndTimeMs - taskStartTimeMs) /86400000   +   45
        var duration = ((todayMs -taskEndTimeMs)/86400000) + ( taskEndTimeMs - taskStartTimeMs) /86400000   +   120

        var startDayMs = taskStartTimeMs
        var endDayMs = todayMs + 44*86400000
        var pointDaysFromStartDay = todayMs//(todayMs - startDayMs)/86400000
        
     //   console.log('task end day before today____________________________________________2',startDayMs,endDayMs,pointDaysFromStartDay)

        
        
    }else if(   taskStartTimeMs  >  todayMs   ){
       //   console.log('task day after today')
   
        //var duration = ((taskStartTimeMs -todayMs)/86400000) +  ( taskEndTimeMs - taskStartTimeMs) /86400000  + 45   
       
        var duration = ((taskStartTimeMs -todayMs)/86400000) +  ( taskEndTimeMs - taskStartTimeMs) /86400000  + 120   
      
        var startDayMs = todayMs
        var endDayMs = taskEndTimeMs
        var pointDaysFromStartDay = todayMs//(todayMs - startDayMs)/86400000


    //    console.log('task start day after today_______________________________________________3',startDayMs,endDayMs,pointDaysFromStartDay)


       
       
    }else{
                  
     
        var startDayMs = taskStartTimeMs
        var endDayMs = taskEndTimeMs +  45*86400000
        var pointDaysFromStartDay = todayMs//(todayMs - startDayMs)/86400000

        //console.log(allEndTimeMsList[0])
       // var duration =( (taskEndTimeMs -taskStartTimeMs)/86400000) + 45
       // var duration =( (allEndTimeMsList[0] -taskStartTimeMs)/86400000) + 10 //抓取任務最後時間
        var duration =( (allEndTimeMsList[0] -taskStartTimeMs)/86400000) + 90 //抓取任務最後時間

        
        
       // console.log('today between task_______________________________________________4',startDayMs,endDayMs,pointDaysFromStartDay)

    };
    
    
    

    
   // console.log(pointDaysFromStartDay)
    var taskCount = taskData.length
    var projSearchIndex = btn.searchIndex
   // var winTitle = '任 務 排 程 列 表    ' +  projName +'  /  '+projChName 
    var winTitle = ''

    var taskScheduleListWin = new moveAbleWinBlockE(uiBaseContainer,x,y,w,h,winTitle,20,20,13,'0xffffff','taskScheduleListWin_container',1,'0xaaaaaa',2,'0x3f453f',0.1,1,1,'0x2b3732',daysApp,screenW,screenH,true)
                                //moveAbleWinBlockB(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,tapeAlpha,winTapeColor,selApp,screenW,screenH,closeBtn)
    
    
    taskScheduleListWin.name = 'taskScheduleListWin_container'
   
    taskScheduleListWin.interactive = true;
    
    var eventListPlan = ['時間▼','時間▲','人員','類型']
    var itemPreList = 4 
    var btnWidth = 45
    var btnHeight = 20
    
    
    for(var i = 0; i< eventListPlan.length ; i++){
          //  console.log(dataList) 


            var btnText = eventListPlan[i]
            var btnPosX  =(i%itemPreList)*btnWidth +5
            //userSelectBK.children[3].pivot.x = -optionBK_width/2  + userSelectBK.children[3].width/2  
          //  userSelectBK.children[3].x =userNameBK_Width/2
            var btnPosY = 33+ Math.floor(i/itemPreList)*btnHeight//+ optionBGBlockStartPosY
           // userSelectBK.disabled = true
           // projectSelectWin.addChild(userSelectBK)

           // buildBtnScaleC(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type)
            var filterBtn = new buildBtnScaleC(taskScheduleListWin,btnPosX,btnPosY,btnWidth,btnHeight,3,btnText,'0xffffff',11,1,'0x234a5a',1,1,'0x668686')
            filterBtn.btnText = btnText

            filterBtn.interactive = true;
            filterBtn.buttonMode = true;
          //  console.log(userSelectBK.height)
            if(btnText == listMode){
                filterBtn.tint = '0xff7777'
   
            }else{
                filterBtn.tint = '0xffffff'
 
                
            };
        
            filterBtn.on('pointerover', function(){this.alpha = 0.2;})
                                .on('pointerout', function(){this.alpha =1;})
                                .on('mousedown', function(){
                                    this.alpha = 1

                                    var filterKey = this.btnText
                                
                                    console.log(filterKey)
                                    var currentTaskWinData = JSON.parse(window.localStorage.getItem("currentTaskWinData"));
                                    var currentTaskData = JSON.parse(window.localStorage.getItem("currentTaskData"));

                                    $.cookie('currentEventFilter', filterKey , { expires: 14 });
                                    $.cookie('lastProjID', projSearchIndexID , { expires: 14 });

                                   // var currentEventFilter = $.cookie('currentEventFilter')
                                    //projSearchIndexID currentProjID
                                   // console.log(currentEventFilter)
                                    
                                    console.log(currentTaskWinData)
                                    console.log(currentTaskData)
                                    console.log(currentTaskWinData['listMode'])

                
                                
                

                                var taskSchListWin = new buildTaskSchListWinB(this,currentTaskWinData['x'],currentTaskWinData['y'],currentTaskWinData['w'],currentTaskWinData['h'],currentTaskData,currentTaskWinData['taskStartTimeMs'],currentTaskWinData['taskEndTimeMs'],currentTaskWinData['projName'],currentTaskWinData['projSearchIndexID'],currentTaskWinData['projChName'],currentTaskWinData['projType'],currentTaskWinData['selUser'],currentTaskWinData['defaultFliterType'],currentTaskWinData['defaultFilterSel'],filterKey)

                                    //var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,selUserTypeTaskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,userName,'user',userName,'')

    
                                    //var taskSchWinGrp =  new buildTaskSchListViewB(taskScheduleListWin,daysApp,dayBGW,dayBGH,duration,taskData,startDayMs,pointDaysFromStartDay,todayMs,projSearchIndexID)

                                    //var taskListBlock = new buildTaskSelBlockLick(taskLabelBlockWin,parent,0,0,taskData,selApp,taskLabelBlockWin,taskSchListwinBG,projSearchIndexID)

                                    /*
                                    var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
                                     console.log(allProjectList)

                                    if(filterKey == 'All'){
                                        var filterProjsList =  allProjectList  
                                    }else if(filterKey == 'My'){

                                    }else{
                                        var filterProjsList = allProjectList.filter(function(item, index, array){
                                            return item[8] == filterKey
                                        });    
                                    }


                                    var projSelBKGroup = new buildProjSelWinA(projectSelectWin,0,0,w,h,filterProjsList,selApp)

                                    console.log(projectSelectWin)
                                        */
                                    })
                                .on('pointerup', function(){this.alpha = 1;})   


    



        };    
    

    var userSelFilter = new inputBoxWithLabelB(taskScheduleListWin,10,5,50,60,1,'人員:','',11,'0xffffff','0xcccccc',4,'0x6c868a',0.5,'0x6c868a','center')
        userSelFilter.disabled = true    
        userSelFilter.name = 'userSelFilter'
    
       // userSelFilter.text = selUser
        userSelFilter.interactive = true;
        userSelFilter.buttonMode = true;
    

        userSelFilter.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                        console.log('userSelFilter')
                                        console.log(userNameList)
                                        console.log(userData)
                                        console.log(userSelFilterList) 
                                            
                                           var winW = 190
                                           var winH = h//userNameList.length *25 + 70

                                           // console.log(taskEditWin.position.x,taskEditWin.position.y)
                                            var posX =600// taskEditWin.position.x + w +5 //+20
                                            var posY = 200//taskEditWin.position.y 
                               
                                            var userWorkingDaySel = new openWorkingUserDaysSelectB(uiBaseContainer,posX,posY,winW,winH,userSelFilterList,userData,userSelFilter,daysApp)
                                                   
                                            
                                                   
                                                   
                                                   
                                                   
                                                  })
                        .on('pointerup', function(){this.alpha=1;})

    
    var userResetBtn = new reSetBtnWithIcon(taskScheduleListWin,130,15,20,20,5,'iconColor','0x8cf6fa',0.9)

         userResetBtn.on('mousedown',function(){this.alpha=0.5
                                                //this.tint ='oxff0000';
                                       

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
                                                        var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,taskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,'','none','none','時間▼')

                                                      //  uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   
                                                        }); 
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 })
    
    /*
    
    
                        var currentTaskWinData = JSON.parse(window.localStorage.getItem("currentTaskWinData"));
                                    var currentTaskData = JSON.parse(window.localStorage.getItem("currentTaskData"));

                
                
                
                                    console.log(currentTaskWinData)
                                    console.log(currentTaskData)
                                    console.log(currentTaskWinData['listMode'])

                
                                
                

                                var taskSchListWin = new buildTaskSchListWinB(this,currentTaskWinData['x'],currentTaskWinData['y'],currentTaskWinData['w'],currentTaskWinData['h'],currentTaskData,currentTaskWinData['taskStartTimeMs'],currentTaskWinData['taskEndTimeMs'],currentTaskWinData['projName'],currentTaskWinData['projSearchIndexID'],currentTaskWinData['projChName'],currentTaskWinData['projType'],currentTaskWinData['selUser'],currentTaskWinData['defaultFliterType'],currentTaskWinData['defaultFilterSel'],filterKey)
    */
    
    
    var taskTypeList = []
    for (var i =0; i<taskTypeData.length;i++ ){
        taskTypeList.push(taskTypeData[i][1])
        };
    
    
    
    
    
    
    var jobTypeSelFilter = new inputBoxWithLabelB(taskScheduleListWin,170,5,50,80,1,'類型:','',11,'0xffffff','0xcccccc',4,'0x6c868a',0.5,'0x6c868a','center') //工作類型選擇

        jobTypeSelFilter.name = 'jobTypeSelFilter'
    
        jobTypeSelFilter.disabled = true    

        jobTypeSelFilter.interactive = true;
        jobTypeSelFilter.buttonMode = true;
    
    
    

        //jobTypeSelFilter.text = selUser

    

        jobTypeSelFilter.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                        console.log('jobTypeSelFilter')
                                        console.log(taskTypeList )
                                    //    console.log(userData)
                                      //  console.log(userSelFilterList) 
                                            
                                           var winW = 190
                                           var winH = h//userNameList.length *25 + 70

                                           // console.log(taskEditWin.position.x,taskEditWin.position.y)
                                            var posX =750// taskEditWin.position.x + w +5 //+20
                                            var posY = 200//taskEditWin.position.y 
                               
                                            var userWorkingDaySel = new openWorkingUserDaysSelectC(uiBaseContainer,posX,posY,winW,winH,taskTypeList,jobTypeSelFilter,daysApp)
                                                   
                                            
                                                   
                                                   
                                                   
                                                   
                                                  })
                        .on('pointerup', function(){this.alpha=1;}) 
    
    
    
    
    
    var typeResetBtn = new reSetBtnWithIcon(taskScheduleListWin,310,15,20,20,5,'iconColor','0x8cf6fa',0.9)
      typeResetBtn.on('mousedown',function(){this.alpha=0.5
                                                //this.tint ='oxff0000';
                                       

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
                                                        var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,taskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,'','none','none','類型')

                                                      //  uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   
                                                        }); 
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 })
    
    var userTypeSelFilter = new inputBoxWithLabelB(taskScheduleListWin,350,5,50,80,1,'技能:','',11,'0xffffff','0xcccccc',4,'0x6c868a',0.5,'0x6c868a','center') //工作類型選擇

        userTypeSelFilter.name = 'userTypeSelFilter'
    
        userTypeSelFilter.disabled = true    

        userTypeSelFilter.interactive = true;
        userTypeSelFilter.buttonMode = true;
    
    
    
        userTypeSelFilter.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                    console.log('userTypeSelFilter')
                                    console.log( jobPositionList)
                                //    console.log(userData)
                                  //  console.log(userTypeList) 
                                                
                                       var winW = 190
                                       var winH = h//userNameList.length *25 + 70

                                       // console.log(taskEditWin.position.x,taskEditWin.position.y)
                                        var posX =950// taskEditWin.position.x + w +5 //+20
                                        var posY = 200//taskEditWin.position.y 

                                        var userWorkingDaySel = new openWorkingUserDaysSelectD(uiBaseContainer,posX,posY,winW,winH,userData,jobPositionList,userTypeSelFilter,daysApp)






                                              })
                    .on('pointerup', function(){this.alpha=1;}) 

    
    
    var renewWorkingTimeBtn = new inputBoxWithLabelB(taskScheduleListWin,700,5,50,80,1,'','更新工時',11,'0xffffff','0x111111',4,'0x6c868a',0.5,'0xcc868a','center') //工作類型選擇

        renewWorkingTimeBtn.name = 'renewWorkingTimeBtn'
    
        renewWorkingTimeBtn.disabled = true    

        renewWorkingTimeBtn.interactive = true;
        renewWorkingTimeBtn.buttonMode = true;
    
    
        renewWorkingTimeBtn.on('pointerover', function(){this.alpha=0.5;})
                    .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                               console.log('更新工時')
                                               var delProjConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'更新工時',' 確認更新所有進行中的公時至今日?',14,'0x000000','delProjConfirmWin_container',5,1,daysApp,screenW,screenH)   
            
                                               var delProjConfirmYes = delProjConfirmWin[1]
                                               var delProjConfirmNo = delProjConfirmWin[2]
                                                    delProjConfirmYes.on('mousedown', function(){
                                                                        console.log('確任更新工時')
                                                          
                                                                        runReNewWorkingDATA()
                                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('delProjConfirmWin_container'))   

                        

                                                                    }) ;
                                               
                                               
                                                //runReNewWorkingDATA()
                                               
                                               
                                                function runReNewWorkingDATA(){
                                                        var projectEditWin =  uiBaseContainer.getChildByName('projectEditWin_container')
                                                        var ProjectInfoWin =  projectEditWin.getChildByName('ProjectInfoWin')
                                                        var selProjStateOptionBtnGrp =  ProjectInfoWin.getChildByName('selProjStateOptionBtnGrp')
                                                        var newProj_searchID_InputBox =  ProjectInfoWin.getChildByName('newProj_searchID_InputBox')
                                                        var projState = selProjStateOptionBtnGrp.text
                                                        var projID = newProj_searchID_InputBox.text

                                                        if(projState == '進行中'){
                                                            var toDayMS  =  new Date().valueOf();
                                                            var toDayOclockMS = (Math.floor(toDayMS/86400000))*86400000 - 8 * 60*60*1000
                                                         //   console.log(convertMSB(toDayOclockMS))
                                                            
                                                            var todayMs =  new Date().valueOf();
                                                            var currentHour = (Math.floor((todayMs - toDayOclockMS)/(30*60*1000)))*(30*60*1000)
                                                            var currentHalfTimeMs = toDayOclockMS + currentHour
                                                          //  console.log( convertMSB( toDayOclockMS + currentHour))
                                                            if(currentHalfTimeMs >= (toDayOclockMS + 18 * 60*60*1000) ){
                                                                
                                                                 currentHalfTimeMs = toDayOclockMS + 18 * 60*60*1000
                                                            }else{
                                                                
                                                                 currentHalfTimeMs = toDayOclockMS + currentHour

                                                            }


                                                            console.log(selProjStateOptionBtnGrp.text,newProj_searchID_InputBox.text)
                                                            $.post("/reNewSelProjWorkingTime", {  

                                                                'searchID':projID,
                                                                'todayMs':String(currentHalfTimeMs)

                                                            }, function(data) {


                                                                console.log(data)
                                                                var renewProjID = data[1]
                                                     
                                                                var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                                                    if(userNameInput.text == '未登入'){
                                                                        var loginUserName = 'none'
                                                                    }else{
                                                                        var loginUserName = userNameInput.text 
                                                                    };


                                                                var projectEditWin =  uiBaseContainer.getChildByName('projectEditWin_container')
                                                                var ProjectInfoWin =  projectEditWin.getChildByName('ProjectInfoWin')
                                                                var newProjEN_name_InputBox =  ProjectInfoWin.getChildByName('newProjEN_name_InputBox')
                                                                var newProjCH_name_InputBox =  ProjectInfoWin.getChildByName('newProjCH_name_InputBox')
                                                                var projectTypeSel_inputBox =  ProjectInfoWin.getChildByName('projectTypeSel_inputBox')


                                                              //  console.log(loginUserName)
                                                                //更新列表
                                                                $.post("/getSelectProjectDataFromDB", {  
                                                                        'searchID':parseInt(renewProjID),
                                                                        'userName':loginUserName,
                                                                        'proj_name' : newProjEN_name_InputBox.text,
                                                                        'projType' :  projectTypeSel_inputBox.text,
                                                                        'projNameCH' : newProjCH_name_InputBox.text
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

                                                                            window.localStorage.setItem("selProjWorkingTimeDB", JSON.stringify(selProjWorkingTimeDB));  // 設定未登入休假資料


                                                                            console.log(selProjWorkingTimeDB)
                                                                            // 專案內容頁面
                                                                            var projectEditWin = new  openProjectEditWinB(uiBaseContainer,360,40,1130,160,daysApp,selProjData,'edit',userFavProjList); 

                                                                            //任務內容頁面
                                                                            var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,taskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,'','none','none','時間▼')

                                                

                                                                    });  


                                                                 /////更新列表

                                                            }); 
                                                        };

                                                }
                                                 
                                                
                                              })
                    .on('pointerup', function(){this.alpha=1;}) 

    
    
    
    
    
     
    var skillResetBtn = new reSetBtnWithIcon(taskScheduleListWin,490,15,20,20,5,'iconColor','0x8cf6fa',0.9)
      skillResetBtn.on('mousedown',function(){this.alpha=0.5
                                                //this.tint ='oxff0000';
                                       

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
                                                        var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,taskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,projType,'','none','none','人員')

                                                      //  uiBaseContainer.removeChild(uiBaseContainer.getChildByName('taskEditWin_container'))   
                                                        }); 
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 })
    
    
    
  //  console.log(defaultFliterType,defaultFilterSel)
     
   if(defaultFliterType == 'none'){
        userSelFilter.text =    ''
        jobTypeSelFilter.text =    ''
        userTypeSelFilter.text =    ''

    }else if(defaultFliterType == 'user'){
        userSelFilter.text =   defaultFilterSel
        jobTypeSelFilter.text =    ''
        userTypeSelFilter.text =    ''

    }else if(defaultFliterType == 'jobType'){
        userSelFilter.text =    ''
        jobTypeSelFilter.text =    defaultFilterSel
        userTypeSelFilter.text =    ''
    }else if(defaultFliterType == 'userType'){
      userSelFilter.text =    ''
        jobTypeSelFilter.text =    ''
        userTypeSelFilter.text =    defaultFilterSel
    };
     
       
    var eventInfoBlock = new inputBoxWithLabelB(taskScheduleListWin,180,640,20,930,1,'','',11,'0xffffff','0xaaaaaa',4,'0x333333',0.5,'0x333333','left') //task 資訊欄位

        eventInfoBlock.name = 'eventInfoBlock'
    
        eventInfoBlock.disabled = true    

       // eventInfoBlock.interactive = true;
       // eventInfoBlock.buttonMode = true;
      
    
    var totalTaskLabel = new inputBoxWithLabelB(taskScheduleListWin,60,70,75,50,1,'任務總數:',taskCount,11,'0xffffff','0xcccccc',4,'0x2b3732',0.5,'0x2b3732','center')
                            //inputBoxWithLabelB(parent,x,y,boxX,inputBoxW,fontPadding,labelText,inputText,inputFontSize,labelTextColor,inputTextColor,boxRound,strokeColor,strokeWidth,fillColor,alignMode)

    
    
    
    var schListControlPanelBK =   new PIXI.Graphics();    // 上方時間區底圖視窗
        schListControlPanelBK.lineStyle(1, '0xffffff',0);
        schListControlPanelBK.beginFill('0x568888',0.5);
    
       // daysInfoBlockBGWin.drawRoundedRect(0,0,w,60, 2);
        schListControlPanelBK.drawRoundedRect(0,0,160,26, 12);

        schListControlPanelBK.endFill();
        schListControlPanelBK.name = 'schListControlPanelBK'
        schListControlPanelBK.x = 930

        schListControlPanelBK.y = 0//-65
        schListControlPanelBK.alpha = 1
    
        taskScheduleListWin.addChild(schListControlPanelBK)
    
    
    
    //控制按鈕區
    var todayBtn = new pageChangeSelBtn(schListControlPanelBK,80,13,25,25,2,'0xadf0e1','0x68ccb5',0.8,'now')

    var nextMonthBtn = new pageChangeSelBtn(schListControlPanelBK,110,13,25,25,2,'0xadf0e1','0x68ccb5',0.8,'next')
    var endMonthBtn = new pageChangeSelBtn(schListControlPanelBK,140,13,25,25,2,'0xadf0e1','0x68ccb5',0.8,'end')

    var preMonthBtn = new pageChangeSelBtn(schListControlPanelBK,50,13,25,25,2,'0xadf0e1','0x68ccb5',0.8,'pre')
    var beginMonthBtn = new pageChangeSelBtn(schListControlPanelBK,20,13,25,25,2,'0xadf0e1','0x68ccb5',0.8,'begin')

    

    
    
    
    //var addTaskBtn = new addBtnWithIcon(taskScheduleListWin,30,60,50,50,5,'0x2a3b50','0x85b4b3',1 )
    var addTaskBtn = new addBtnWithIcon(taskScheduleListWin,25,78,50,50,5,'0xadf0e1','0x55aacc',1.2 )

   // var filterTaskBtn = new filterBtnWithIcon(taskScheduleListWin,100,15,50,50,5,'0xadf0e1','0x285c55',0.9 )

        addTaskBtn.projSearchIndex = projSearchIndexID
        addTaskBtn.on('mousedown', function(){ console.log('addNewTaskBtn',projSearchIndexID)
                                        
                                         
                                                var addNewTaskWin = new buildTaskEditWin(uiBaseContainer,360,40,480,500,daysApp,'taskName',projSearchIndexID,'add',[])

                                                })
    
    
    var dayBGW = 25
    var dayBGH = 30
    
    var taskSchWinGrp =  new buildTaskSchListViewB(taskScheduleListWin,daysApp,dayBGW,dayBGH,duration,taskData,startDayMs,pointDaysFromStartDay,todayMs,projSearchIndexID,listMode,cookieMode)
    
    var daysInfoBlockBGWin = taskSchWinGrp[0]   //上方日期區域
    var todayPosX = daysInfoBlockBGWin.position.x
    var taskSchListwinBG = taskSchWinGrp[1] //左方task列表
    var taskLabelBlockWin = taskSchWinGrp[2]   //下方task 時程列表
    var topTaskPosY = taskLabelBlockWin.position.y

    console.log(projType)
    if( projType == "CF"){
        
        
       var  filterTypeList = ['concept art','storyboard','modeling','texture','rigging','layout','animation','lighting','rendering','compositing','effect','未指定']

    }else{
        var  filterTypeList = ['未指定','背景','符號','腳色','特效']
   
    };
    
    todayBtn.on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log('到今天日期位置')
                                          //  console.log(todayPosX,topTaskPosY)
                                           // console.log(taskSchWinGrp[1].position)
                                          //  console.log(taskSchWinGrp[2].position)
                                            daysInfoBlockBGWin.position.x = todayPosX   //復歸到今天日期
                                            taskSchListwinBG.position.x = todayPosX
                                            taskLabelBlockWin.position.y = topTaskPosY //到最上方task
                                            taskSchListwinBG.position.y = topTaskPosY //到最上方task

        
                                          //  this.alpha = 0.5

                                        });
    
    
    
    nextMonthBtn.on('mousedown', function(){
        
                                            console.log('後三十天位置')
                                            console.log(todayPosX,topTaskPosY)
                                            console.log(daysInfoBlockBGWin.position.x,daysInfoBlockBGWin.width)
                                               
        
                    
                                                        
                                                        if(  200 - daysInfoBlockBGWin.position.x  +  dayBGW * 35 + dayBGW * 30 > daysInfoBlockBGWin.width){
                                            
                                                            
                                                            daysInfoBlockBGWin.position.x =  200   -  daysInfoBlockBGWin.width + dayBGW * 35 + 280
                                                            taskSchListwinBG.position.x =  200   -  taskSchListwinBG.width + dayBGW * 35 + 280
                                                            console.log('1111111111111111111')
                                                            console.log( daysInfoBlockBGWin.position.x)

                                                        }else{
                                                            console.log('3333333333333333333333')
                                                            daysInfoBlockBGWin.position.x =  daysInfoBlockBGWin.position.x - dayBGW * 30 
                                                            taskSchListwinBG.position.x =  taskSchListwinBG.position.x - dayBGW * 30 


                                                        };

                                               
        
                                            });
    
    
    
    
    preMonthBtn.on('mousedown', function(){
      
                                            console.log('前三十天位置')
                                            console.log(todayPosX,topTaskPosY)
                                            console.log(daysInfoBlockBGWin.position.x,daysInfoBlockBGWin.width)
                                                if(daysInfoBlockBGWin.position.x + dayBGW * 30 <= 200){
                                                    console.log('1111111111111111111111')
                                                    daysInfoBlockBGWin.position.x = daysInfoBlockBGWin.position.x + dayBGW * 30 
                                                    taskSchListwinBG.position.x = taskSchListwinBG.position.x + dayBGW * 30 

                                                }else{
                                                    
                                                    console.log('22222222222222222222222')
                                                    daysInfoBlockBGWin.position.x = 200
                                                    taskSchListwinBG.position.x = 200

                                                    console.log( daysInfoBlockBGWin.position.x)

                                                }
    
                                            });
    
    //var selFilterBtnGrp = new buildOptionGrp_B_Btn(taskScheduleListWin,50,-50,'任務類型 :',filterTypeList,130,10,140,selEventTypeFilter,12,10,'0xffffff','0xffffff','0x333333',0.5,0.6)

    
    
    beginMonthBtn.on('mousedown', function(){
      
                                            console.log('第一天位置')
                                            console.log(todayPosX,topTaskPosY)
                                            console.log(daysInfoBlockBGWin.position.x,daysInfoBlockBGWin.width)
                                            daysInfoBlockBGWin.position.x = 200
                                            taskSchListwinBG.position.x = 200
        
        
    
                                            });  
    
    
   endMonthBtn.on('mousedown', function(){
      
                                            console.log('任務最後一天位置')
                                            console.log(todayPosX,topTaskPosY)
                                            console.log(daysInfoBlockBGWin.position.x,daysInfoBlockBGWin.width)
                                           // daysInfoBlockBGWin.position.x = 200
                                            //taskSchListwinBG.position.x = 200
                                            console.log(startDayMs,pointDaysFromStartDay,taskStartTimeMs,taskEndTimeMs)
                                            if(taskEndTimeMs == 'none'){
                                                
                                            }else{
                                                var moveDistance = ((taskEndTimeMs - startDayMs)/86400000)*dayBGW
                                                daysInfoBlockBGWin.position.x = 200 - moveDistance + dayBGW *30
                                                taskSchListwinBG.position.x = 200 - moveDistance + dayBGW *30

                                            }
    
                                            });   
    
    
};








function buildTaskSchListViewB(parent,selApp,dayBGW,dayBGH,duration,taskData,startDayMs,pointDaysFromStartDay,todayMs,projSearchIndexID,listMode,cookieMode){   //task 時間表主視窗
    var selProjWorkingTimeDB = JSON.parse(window.localStorage.getItem("selProjWorkingTimeDB"));  

    console.log('task 時間表主視窗______________________',listMode,cookieMode)
   // console.log('selProjWorkingTimeDB',selProjWorkingTimeDB)

   // var dayBGW = 30
   // var dayBGH = 20
    var getDay = new Date(startDayMs)

    var toDayData = new Date(todayMs)
   // console.log(getDay,toDayData)
   // console.log(projSearchIndexID)

  //  console.log(duration,startDayMs,pointDaysFromStartDay)
    var taskCount =  taskData.length
    
    var moveToTodayDeltaDays = (todayMs - startDayMs)/86400000
  //  console.log(moveToTodayDeltaDays)
    
    var w = duration * dayBGW
    
    if( taskCount * dayBGH <= 560 ){var h = 560}else{ var h = taskCount * dayBGH}
    
    
    var dayTextFontStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '200',
        fill: '0xffffff', // gradient
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
        fontFamily: '微軟正黑體',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '200',
        fill: '0xffffff', // gradient
        stroke: '0xcccccc',
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        }); 
    
    
    
    var projNameFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xaaaaaa', // gradient
        stroke: '0xaaaaaa',
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        }); 
    
    
        

    
    
    var projDaysRangeFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xaacccc', // gradient
        stroke: '0x111111',
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });    
       
    
    
    
    
 
   var daysInfoBlockBGWin =   new PIXI.Graphics();    // 上方時間區底圖視窗
        daysInfoBlockBGWin.lineStyle(0.1, '0xffffff', 0.1);
        daysInfoBlockBGWin.beginFill('0x232323',1);
    
       // daysInfoBlockBGWin.drawRoundedRect(0,0,w,60, 2);
        daysInfoBlockBGWin.drawRoundedRect(0,0,w,65, 2);

        daysInfoBlockBGWin.endFill();
        daysInfoBlockBGWin.name = 'daysInfoBlockBGWin'
        daysInfoBlockBGWin.x = 200

        daysInfoBlockBGWin.y = 35//-65
        daysInfoBlockBGWin.alpha = 1
    
    

    
    
    var daysInfoBlockBGWin_mask =   new PIXI.Graphics();    // 上方時間區底圖視窗
        daysInfoBlockBGWin_mask.lineStyle(1, '0xffffff', 1);
        daysInfoBlockBGWin_mask.beginFill('0xff0000',1);
        daysInfoBlockBGWin_mask.drawRoundedRect(0,0,930,635, 2);
        daysInfoBlockBGWin_mask.endFill();
        daysInfoBlockBGWin_mask.name = 'daysInfoBlockBGWin_mask'
        daysInfoBlockBGWin_mask.x = 200
        daysInfoBlockBGWin_mask.y = 0//-65
      //  daysInfoBlockBGWin_mask.alpha = 1
    
    
      //  daysInfoBlockBGWin.mask  = daysInfoBlockBGWin_mask



    var taskSchListwinBG =  new PIXI.Graphics();     // 下方甘特圖視窗
        taskSchListwinBG.lineStyle(1, '0xffffff', 0);
        taskSchListwinBG.beginFill('0x334455',1);
        taskSchListwinBG.drawRoundedRect(0,0,w,h +700, 2);
        taskSchListwinBG.endFill();
        taskSchListwinBG.name = 'taskSchListwinBG'   //projSchListwinBG
        taskSchListwinBG.x = 200
        taskSchListwinBG.y = 105//80
        taskSchListwinBG.alpha = 1
            parent.addChild(taskSchListwinBG) //winBG

      //  console.log(projSchListwinBG.y,projSchListwinBG.pivot.y,projSchListwinBG.height)
    
    var taskSchListwinBG_Mask =  new PIXI.Graphics();     // 下方甘特圖視窗
        taskSchListwinBG_Mask.lineStyle(1, '0xff0000', 1);
        taskSchListwinBG_Mask.beginFill('0xff0000',1);
        taskSchListwinBG_Mask.drawRoundedRect(0,0,930,530, 1);
        taskSchListwinBG_Mask.endFill();
        taskSchListwinBG_Mask.name = 'taskSchListwinBG_Mask'
        taskSchListwinBG_Mask.x = 200
        taskSchListwinBG_Mask.y = 105
        taskSchListwinBG_Mask.alpha = 1
    
        parent.addChild(taskSchListwinBG_Mask)
    
    
    
    
        parent.addChild(daysInfoBlockBGWin)
        parent.addChild(daysInfoBlockBGWin_mask)
        daysInfoBlockBGWin.mask  = daysInfoBlockBGWin_mask
        taskSchListwinBG.mask  = taskSchListwinBG_Mask
       // parent.addChild(daysInfoBlockBGWin_mask)
       // daysInfoBlockBGWin.mask  = daysInfoBlockBGWin_mask
     //   taskSchListwinBG.mask = projSchListwinBG_Mask
    
    
       
   var projDurationTextBlockWin =  new PIXI.Graphics();    //

        projDurationTextBlockWin.lineStyle(1, '0xffffff', 0);
        projDurationTextBlockWin.beginFill('0x66ffff',0.02);
        projDurationTextBlockWin.drawRoundedRect(0,0,300,h +700, 2);
        projDurationTextBlockWin.endFill();
        projDurationTextBlockWin.name = 'projDurationTextBlockWin'
        projDurationTextBlockWin.x = 0
      //  projDurationTextBlockWin.y = -160
        projDurationTextBlockWin.alpha =0
       // parent.addChild(projDurationTextBlockWin)

  /*
    var projDurationTextBlockWin_mask =  new PIXI.Graphics();   // 左方專案時間範圍底圖視窗
    
        projDurationTextBlockWin_mask.lineStyle(1, '0xffffff', 0);
        projDurationTextBlockWin_mask.beginFill('0xff0000',1);
        projDurationTextBlockWin_mask.drawRoundedRect(0,0,350,530,  2);
        projDurationTextBlockWin_mask.endFill();
        projDurationTextBlockWin_mask.name = 'projDurationTextBlockWin_mask'
        projDurationTextBlockWin_mask.x =0
        projDurationTextBlockWin_mask.y = 105
        parent.addChild(projDurationTextBlockWin_mask)
*/
       // projDurationTextBlockWin_mask.alpha = 1
       // projDurationTextBlockWin.mask = projDurationTextBlockWin_mask
    
       
    var taskLabelBlockWin =  new PIXI.Graphics();    // 左方任務名稱底圖視窗
    
        taskLabelBlockWin.lineStyle(1, '0xffffff', 0);
        taskLabelBlockWin.beginFill('0x666666',0);
        taskLabelBlockWin.drawRoundedRect(0,0,200,h +700 , 2);
        taskLabelBlockWin.endFill();
        taskLabelBlockWin.name = 'taskLabelBlockWin'
        taskLabelBlockWin.x =30
        taskLabelBlockWin.y = 105//-65     projLabelBlockWin
        taskLabelBlockWin.alpha = 1
        parent.addChild(taskLabelBlockWin)
    
       // taskLabelBlockWin.mask = projDurationTextBlockWin_mask //左方任務欄4.位 mask
    
      
    var taskLabelBlockWin_mask =  new PIXI.Graphics();    // 左方專案名稱底圖視窗MASK
    
        taskLabelBlockWin_mask.lineStyle(1, '0xffffff', 0);
        taskLabelBlockWin_mask.beginFill('0xff0000',1);
        taskLabelBlockWin_mask.drawRoundedRect(0,0,1130,530,  2);
        taskLabelBlockWin_mask.endFill();
        taskLabelBlockWin_mask.name = 'taskLabelBlockWin_mask'
        taskLabelBlockWin_mask.x = 0
        taskLabelBlockWin_mask.y = 105
        taskLabelBlockWin_mask.alpha = 1
        parent.addChild(taskLabelBlockWin_mask)
    
      
        taskLabelBlockWin.mask = taskLabelBlockWin_mask
 
    
    // 日期方塊
    
    //buildScheduleDaysLsit(parent,x,y,startDayMs,duration,blockW,blockH)
    var schDaysBlock = new buildScheduleDaysLsit(daysInfoBlockBGWin,0,0,todayMs,startDayMs,duration,dayBGW,dayBGH)
   
     
  
    
    //建立左方任務方塊
    var taskListBlock = new buildTaskSelBlockLick(taskLabelBlockWin,parent,0,0,taskData,selApp,taskLabelBlockWin,taskSchListwinBG,projSearchIndexID,startDayMs)
   
    
    //建立右下方任務方塊
    var taskScheduleList = new buildTaskScheduleList(taskSchListwinBG,0,0,taskData,25,25,startDayMs)
    
   // taskSchListwinBG.interactive = true;

    //console.log(taskData)
   // console.log(moveToTodayDeltaDays,dayBGW)

   // console.log(daysInfoBlockBGWin.position.x)
   // daysInfoBlockBGWin.position.x = daysInfoBlockBGWin.position.x-500
    if(moveToTodayDeltaDays >= 0){
        daysInfoBlockBGWin.position.x = daysInfoBlockBGWin.position.x - moveToTodayDeltaDays *dayBGW
        taskSchListwinBG.position.x = taskSchListwinBG.position.x - moveToTodayDeltaDays *dayBGW
    }
   //     console.log(moveToTodayDeltaDays,dayBGW)
   // threePanelDragEvent(taskSchListwinBG,daysInfoBlockBGWin,taskLabelBlockWin,daysApp,taskData,940,560,200,90,projSearchIndexID)
    
    
    console.log(taskSchListwinBG.position.x,taskSchListwinBG.position.y)
      
    if( cookieMode == true){
        console.log('cookieMode True')

        var taskSchListwinBG_posX = parseInt($.cookie('taskSchListwinBG_posX'))
        var taskSchListwinBG_posY =  parseInt($.cookie('taskSchListwinBG_posY'))
        console.log(taskSchListwinBG_posX,taskSchListwinBG_posY)
        
        daysInfoBlockBGWin.position.x = taskSchListwinBG_posX //日期方塊
        
        taskSchListwinBG.position.x = taskSchListwinBG_posX //甘特圖方塊

        taskSchListwinBG.position.y = taskSchListwinBG_posY //甘特圖方塊
        
        taskLabelBlockWin.position.y = taskSchListwinBG_posY //任務列表方塊
      //  daysInfoBlockBGWin.x = taskSchListwinBG_posX
       // var startPosX = -300
      //  var startPosY = -100

        //daysInfoBlockBGWin.position.x = taskSchListwinBG_posX
       // taskLabelBlockWin.position.y = taskSchListwinBG_posY
       // threePanelDragEvent(taskSchListwinBG,daysInfoBlockBGWin,taskLabelBlockWin,daysApp,taskData,940,560,200,90,projSearchIndexID,cookieMode)


    }else{
        console.log('cookieMode False')
        taskSchListwinBG.position.y = 105
        taskLabelBlockWin.position.y = 105

       /// threePanelDragEvent(taskSchListwinBG,daysInfoBlockBGWin,taskLabelBlockWin,daysApp,taskData,940,560,200,90,projSearchIndexID,cookieMode)

        
    };
    
    
    threePanelDragEvent(taskSchListwinBG,daysInfoBlockBGWin,taskLabelBlockWin,daysApp,taskData,940,560,200,90,projSearchIndexID)

    return [daysInfoBlockBGWin,taskSchListwinBG,taskLabelBlockWin]
    
    
};

//drag 事件

function threePanelDragEvent(mainDragBlock,topMoveBlock,leftMoveBlock,selApp,taskData,dragW,dragH,originalX,originalY,projID){
    
  //  mainDragBlock.position.x = 2000
    
    mainDragBlock.interactive = true;
   // var selectedTarget
        
    mainDragBlock.on('pointerdown', onDragStart)
                 .on('pointerup', onDragEnd)
                 .on('pointerupoutside', onDragEnd)
                 .on('pointermove', onDragMove);

   // mainDragBlock.on('pointerdown', onDragStart);
    
  //  var dragW = 940
    //var dragH = 560
    var lastProjID = $.cookie('lastProjID')

    
    if(projID ==lastProjID ){
        var cookieMode = true
        
    }else{
        
       var cookieMode = false
 
        
    };
    
    
    
    function onDragStart(e) {
    // Show that the bunny can now be dragged.
   // e.target.alpha = 0.5;
   // var selectedTarget = e.target;
      console.log(this.position.x,this.position.y,projID,cookieMode)
  
    var mouseposition = selApp.renderer.plugins.interaction.mouse.global;  
    this.mouseStartPosX = mouseposition.x
    this.mouseStartPosY = mouseposition.y
        
    this.dragging = true; 
        
        
        
     /*   
        
    if(cookieMode == true){
            var taskSchListwinBG_posX = parseInt($.cookie('taskSchListwinBG_posX'))
            var taskSchListwinBG_posY = parseInt($.cookie('taskSchListwinBG_posY'))
              console.log(taskSchListwinBG_posX,taskSchListwinBG_posY)
      
            this.startX = taskSchListwinBG_posX//this.position.x 
            this.startY =taskSchListwinBG_posX// this.position.y 
                      console.log('cookieModeTrue',cookieMode,this.position.x,this.position.y)

        
    }else{

        this.startX = this.position.x 
        this.startY = this.position.y   
      console.log('cookieModeFalse',cookieMode,this.position.x,this.position.y)

    };
  
  */

        
            this.startX = this.position.x 
            this.startY = this.position.y 

    // Start listening to dragging on the stage
   // selectedTarget.on('pointermove', onDragMove);
        
       // console.log(e)
    }
    
    
    //下方排程表工作區域起始座標 (200,95)
    
    
    function onDragMove(e) {
      //  var selectedTarget = e.target;
        if(this.dragging == true ){
            
           // console.log('on move',this.position.x)  
            
            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;
            
     
           // console.log(this.position.x,this.position.y)

            var mouseDeltaX = mouseposition.x - this.mouseStartPosX
            
            var mouseDeltaY = mouseposition.y - this.mouseStartPosY
            
            

           // console.log(mouseDeltaX)
           // this.position.x  = this.startX + mouseDeltaX
          //  this.position.y  = this.startY + mouseDeltaY
            
            if( this.position.x > 200){
                
                        //this.position.x = 200
                                       
                      // topMoveBlock.position.x = 200
                                       
                }else if(940 - this.position.x +210> this.width){
                    this.position.x = 940 - this.width  +210
                    topMoveBlock.position.x =  940 - this.width  +210
                }else{
                  this.position.x  = this.startX + mouseDeltaX
                    topMoveBlock.position.x  = this.startX + mouseDeltaX

            };
            
            
            
            if(taskData.length <22){
             //   console.log('aaaaaaaaaaaaa')
                  this.position.y  = 105
                  leftMoveBlock.position.y  = 105
                
            }else{
                
                /*
                if(this.position.y > 105){
                                        this.position.y = 105
                                        leftMoveBlock.position.y = 105
                    }else if(560 - this.position.y + 82 > this.height){
                         this.position.y = 560 - this.height  + 82
                         leftMoveBlock.position.y = 560 - this.height  + 82

                    }else{
                         this.position.y  = this.startY + mouseDeltaY
                         leftMoveBlock.position.y  = this.startY + mouseDeltaY

                    }
                */
                
                
                
                if(this.position.y > 105){
                     //    this.position.y = 105
                     //   leftMoveBlock.position.y = 105
                    
                    
                }else{
                    
                    if(560 - this.position.y + 82 > this.height){
                          this.position.y = 560 - this.height  + 82
                         leftMoveBlock.position.y = 560 - this.height  + 82

                    }else{
                        
                        this.position.y  = this.startY + mouseDeltaY
                         leftMoveBlock.position.y  = this.startY + mouseDeltaY  
                        
                    }  
                    
                    
                };

                
            }
        
            
            //this.position.y  = this.startY + mouseDeltaY

            
            
            
           // selectedTarget.toLocal(e.global, null, selectedTarget.position);
            
            
         //   console.log(this.position.x,this.position.y,this.width,this.height )
            
        };
        


    
    };
    
    
    function onDragEnd(e) {
        console.log('onDragEnd')
        var selectedTarget = e.target;
        // Restore the original bunny alpha.
       // selectedTarget.alpha = 1;
        this.dragging = false;
        
        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

        if( this.position.x > 200){this.position.x = 200
                    topMoveBlock.position.x = 200
           
                }else if(940 - this.position.x +210> this.width){
                    this.position.x = 940 - this.width  +210
                    topMoveBlock.position.x =  940 - this.width  +210

                    
                }else{
                  //this.position.x  = this.startX + mouseDeltaX
  
        };
        
        if(taskData.length <22){
                console.log('aaaaaaaaaaaaa')
                  this.position.y  = 105
                  leftMoveBlock.position.y  = 105
        }else{
                    
            if(this.position.y > 105){
                                    this.position.y = 105
                                    leftMoveBlock.position.y = 105

                    }else if(560 - this.position.y + 82 > this.height){
                                this.position.y = 560 - this.height  + 82
                                leftMoveBlock.position.y = 105

                    }else{
                       //  this.position.y  = this.startY + mouseDeltaY
            };
            
        };
        
       // $.cookie('currentEventFilter', filterKey , { expires: 14 });
        var taskSchListwinBG =  mainDragBlock
     //   console.log(taskSchListwinBG,taskSchListwinBG.position.x,taskSchListwinBG.position.y)
            $.cookie('taskSchListwinBG_posX', taskSchListwinBG.position.x , { expires: 14 });
            $.cookie('taskSchListwinBG_posY', taskSchListwinBG.position.y , { expires: 14 });
            $.cookie('lastProjID', projID , { expires: 14 });

        
            var currentEventFilter = $.cookie('currentEventFilter')
            var lastProjID = $.cookie('lastProjID')

            var taskSchListwinBG_posX = $.cookie('taskSchListwinBG_posX')
            var taskSchListwinBG_posY = $.cookie('taskSchListwinBG_posY')
            
            
            console.log(currentEventFilter,lastProjID,taskSchListwinBG,taskSchListwinBG_posX,taskSchListwinBG_posY)
        // Stop listening to dragging on the stage
    }
 
};


//建立左方事件方塊
function buildTaskSelBlockLick(parent,parentWinBlock,x,y,taskData,selApp,taskLabelBG,taskSchListBG,projSearchIndexID,startDayMs){   
    console.log('buildTaskSelBlockLick____________________________1',projSearchIndexID,startDayMs)
    var taskTypeData = JSON.parse(window.localStorage.getItem("taskTypeData"));
    // 儲存現有的taskData 到暫存

    var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
  //  console.log(allProjectList)
    var parentWinBlock = parentWinBlock
    
    
    var taskLabelFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xffffff', // gradient
      //  wordWrap: true,
      //  wordWrapWidth: 20,
        //stroke: '0xaaaaaa',
       // strokeThickness: 0.2,
       // dropShadow: false,
       // dropShadowColor: '#333333',
      //  dropShadowBlur: 6,
      //  dropShadowAngle: Math.PI / 6,
     //   dropShadowDistance: 3,

        }); 
    
    
    
    
    var taskTypeFontStyle  = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: 12,
        fill:'0x000000',
        align: 'left',
        fontWeight:200,
        });
    
    
            
    var taskUserFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xaaaaaa', // gradient
      //  wordWrap: true,
      //  wordWrapWidth: 20,
        //stroke: '0xaaaaaa',
       // strokeThickness: 0.2,
       // dropShadow: false,
       // dropShadowColor: '#333333',
      //  dropShadowBlur: 6,
      //  dropShadowAngle: Math.PI / 6,
     //   dropShadowDistance: 3,

        }); 
    
    var taskUserFontStyleC = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '200',
        fill: '0xaaffaa', // gradient
      //  wordWrap: true,
      //  wordWrapWidth: 20,
        //stroke: '0xaaaaaa',
       // strokeThickness: 0.2,
       // dropShadow: false,
       // dropShadowColor: '#333333',
      //  dropShadowBlur: 6,
      //  dropShadowAngle: Math.PI / 6,
     //   dropShadowDistance: 3,

        }); 
    
    var taskBKH = 23
    
    var taskCount =  taskData.length
   
   // console.log(parentWinBlock)

    
    
    var barOutlineHeight = 530
    
    if(taskCount <= 21){
        var dragBarHeight = 528
        
        var taskBlockWidth =  150//185
            
        var taskBlockPosX = 20// -25
        
        var taskUserPosX =165// 195
   
        
    }else{
        
        
       var dragBarHeight = (21/taskCount)*528
       
       var taskBlockWidth = 150//160 

       var taskBlockPosX = 20//0
       
       var taskUserPosX = 165

       
    };
    
    var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0x223344',0.7);
        barBGBlock.drawRoundedRect(0,0, 20,barOutlineHeight, 2);
        barBGBlock.endFill();      
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = 2
        barBGBlock.y = 103
    
        if(taskCount <= 21){
           
            
        }else{
          //  parentWinBlock.addChild(barBGBlock)
          

        };
    
    
    
    
    
    
    

    //拖曳方塊
   var dragBar = new PIXI.Graphics(); //asset 主視窗
        dragBar.lineStyle(0.5, '0x88ffff', 0.0);
        dragBar.beginFill('0x445566',1);
        dragBar.drawRoundedRect(0,0, 18,dragBarHeight, 2);
        dragBar.endFill();      
        dragBar.name = 'dragBar'
        dragBar.x = 1
        dragBar.y = 1
        barBGBlock.addChild(dragBar)




   var dragBarMask = new PIXI.Graphics(); //asset 主視窗
        dragBarMask.lineStyle(0.5, '0x88ffff', 0);
        dragBarMask.beginFill('0xffffff',1);
        dragBarMask.drawRoundedRect(0,0, 20,barOutlineHeight, 2);
        dragBarMask.endFill();      
        dragBarMask.name = 'dragBarMask'
        dragBarMask.x = 2
        dragBarMask.y = 103
        parentWinBlock.addChild(dragBarMask)
        dragBar.mask = dragBarMask 

   if( taskCount < 22  ){
       // barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
     //   barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    };  
    
   // dragBar.boundY = blockW.y -optionBGBlockStartPosY
 //  console.log(projListBGWin.position.y,projListBGWin.height) 
  //  dragBar.projBlockHeight = projListBGWin.getBounds().height

    dragBar
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);


    function onDragStart(e) {


        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;  


        this.dragging = true;
       // console.log(this.position,mouseposition,this.getBounds())
       // var deltaPosY = mouseposition.y -  this.boundY -this.position.y
        this.deltaPosY = mouseposition.y  


       // console.log(barBGBlock.height,this.height)

         //   barBGBlock

        };




    function onDragMove(e) {
            if(this.dragging == true){

                this.data = e.data;
               // console.log(this.position.y,this.getBounds().height)
                var projWinTopPosY = 105

                var newPosition =  selApp.renderer.plugins.interaction.mouse.global//this.data.getLocalPosition(this.parent);
                var deltaY = newPosition.y -  this.deltaPosY
                
              //  console.log(newPosition.y,this.deltaPosY,deltaY)
                
                if(deltaY < 1){

                    if(this.position.y < 1 ){
                     //   console.log('aaaaaa')
                        this.y = 1     
                        taskLabelBG.position.y = projWinTopPosY  // 專案列表 回到最上方
                        taskSchListBG.position.y = projWinTopPosY 
                    }else{
                     //   console.log('bbbbbb')

                      this.y = newPosition.y - this.deltaPosY;    
                    }


                }else{

                    if(this.position.y + this.getBounds().height > (barOutlineHeight-1)) {
    
                    }else{

                        this.y = newPosition.y - this.deltaPosY;   
                        taskLabelBG.position.y = projWinTopPosY - taskLabelBG.height * (deltaY/(barOutlineHeight-1))
                        taskSchListBG.position.y = projWinTopPosY - taskSchListBG.height * (deltaY/(barOutlineHeight-1))

                    }  


                };


            };




        };


    function onDragEnd(e) {
            console.log('onDragEnd')
            var selectedTarget = e.target;
            var projWinTopPosY = 105
           // selectedTarget.alpha = 1;
            this.dragging = false;

           // var mouseposition = selApp.renderer.plugins.interaction.mouse.global;
            var newPosition =  selApp.renderer.plugins.interaction.mouse.global

            console.log(this.position.y,this.getBounds().height,taskLabelBG.position.y,taskLabelBG.height,taskSchListBG.position.y,taskSchListBG.height)
            
            if(this.position.y < 1 ){
                console.log('end_________1')
                this.y = 1     
                taskLabelBG.position.y = projWinTopPosY
                taskSchListBG.position.y = projWinTopPosY

            }else if(this.position.y + this.getBounds().height > (barOutlineHeight-1)){
                console.log('end_________2')

                this.y = (barOutlineHeight-1) -  this.getBounds().height      
                //taskLabelBG.position.y = projWinTopPosY- (Math.abs(taskCount*taskBKH - (barOutlineHeight-1))) //60 + projListBGWin.height * (739/projListBGWin.height)
                
                taskLabelBG.position.y = projWinTopPosY -(taskLabelBG.height - 640) 
                taskSchListBG.position.y = projWinTopPosY -(taskSchListBG.height - 640) 

            }else{
                console.log('end_________3')

               // this.y = newPosition.y - this.deltaPosY;   

            };


    };

    console.log(taskTypeData)

    console.log(taskData)
    
    console.log(taskCount)

    var currentTimeMs = parseInt(getTodayMs()/1000)
    
    for(var i = 0 ; i < taskCount ; i++){
   //     console.log( taskData[i])
        var taskLabeText = taskData[i][1]
        var taskUserTextString = taskData[i][4]
        var taskSearchIndex = taskData[i][0]
        var projSearchIndex =  taskData[i][2] 
        var taskState = taskData[i][12] 
        var taskStTime =  taskData[i][5]
        var taskEdTime =  taskData[i][6]
        var taskChangeTime = taskData[i][24]
        var taskType =  taskData[i][11]
            console.log(taskData[i][0])

       // console.log(currentTimeMs,taskChangeTime)
      //  var taskStartDay = new Date(String(taskStTime.split(" ")[2])+',' +String( taskStTime.split(" ")[4])+','+ String(taskStTime.split(" ")[0]));
      //  var taskEndDay = new Date(String(taskEdTime.split(" ")[2])+',' +String( taskEdTime.split(" ")[4])+','+ String(taskEdTime.split(" ")[0]));
       
       var selProjData = allProjectList.filter(function(item, index, array){

                               return item[0] === projSearchIndex

                            });   

        var currentTaskProjName = selProjData[0][2]
       //console.log(currentTaskProjName)
       
       
        
      //  console.log('222222222222222222222222',projSearchIndex,projSearchIndexID)
        if(taskState == "準備中"){
         //   console.log("任務準備中")
           var taskBlodkColor = '0x333333'
           var taskBlockTextColor = '0xffffff'
           var taskEditBtnColor = '0x66ccdd'
           var taskEditBtnAlpha = 1

        }else if(taskState == "進行中"){
          //  console.log("任務進行中")
            var taskBlodkColor = '0x445544'
            var taskBlockTextColor = '0xffffff'
            var taskEditBtnColor = '0x66ccdd'
            var taskEditBtnAlpha = 1

        }else if(taskState == "已完成"){
          //  console.log("任務已完成")
            var taskBlodkColor = '0x777777'
           var taskBlockTextColor = '0x333333'
            var taskEditBtnColor = '0x116688'
           var taskEditBtnAlpha = 0.5

        }else if(taskState == "已提交"){
          //  console.log("任務已提交")
            var taskBlodkColor = '0x777777'
           var taskBlockTextColor = '0x333333'
            var taskEditBtnColor = '0x116688'
           var taskEditBtnAlpha = 0.5

        };
        
        
        
        var taskLabelFontStyleB = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: taskBlockTextColor, // gradient


        }); 
    
        
        
        
        if(projSearchIndex != projSearchIndexID){
            
            var taskBlodkColor = '0xaa7777'      
            
        };
        
                
        if((currentTimeMs - taskChangeTime)<600){
            
            var taskBlodkColor = '0xaaaaaa'      
            
        };
       // console.log(taskTypeData[i])

       // console.log(taskTypeData[i][0])
       // console.log(taskTypeData[i][11])

    
        var selTaskType = taskTypeData.filter(function(item, index, array){

                        return item[1] === taskType

        }); 
         
    
        
        //selTaskType = taskTypeData
     //   console.log(selTaskType)
        
        
        var taskTypeInput = selTaskType[0][2]
   
        var taskTypeBlockColor = '0x'+ selTaskType[0][5]
    
        

        
        

        var taskBlock =  new PIXI.Graphics();   
            taskBlock.lineStyle(1, '0xffffff', 0);
            taskBlock.beginFill(taskBlodkColor,1);
            taskBlock.drawRoundedRect(0,0,taskBlockWidth,23, 2);



            taskBlock.name = 'taskBlock_' + String(taskSearchIndex)
            taskBlock.x = taskBlockPosX
            taskBlock.y = i*25
            taskBlock.searchTaskIndex = taskSearchIndex
            parent.addChild(taskBlock)    
        
        
        var taskTypeBlock =  new PIXI.Graphics();   
            taskTypeBlock.lineStyle(1, '0xffffff', 0);
            taskTypeBlock.beginFill(taskTypeBlockColor,1);
            taskTypeBlock.drawRoundedRect(0,0,40,23, 2);



            taskTypeBlock.name = 'taskTypeBlock' + String(taskSearchIndex)
            taskTypeBlock.x = -40
            taskTypeBlock.y = i*25
          
           // taskBlock.addChild(taskTypeBlock)    
            parent.addChild(taskTypeBlock)    
    
            taskTypeBlock.taskStTime = getSelDayMs(taskStTime) //taskStTime 
            taskTypeBlock.interactive = true;
            taskTypeBlock.buttonMode = true;
                
            taskTypeBlock.on('pointerover', function(){this.tint="0x00ffff"})
               .on('pointerout', function(){this.tint="0xffffff"})
               .on('pointerup',  function(){this.tint="0xffffff"})
               .on('mousedown', function(){ 
                                            console.log(this.taskStTime)
                                            console.log(startDayMs)
                                            var taskScheduleListWin = uiBaseContainer.getChildByName('taskScheduleListWin_container')
                                            var daysInfoBlockBGWin = taskScheduleListWin.getChildByName('daysInfoBlockBGWin')

                                            var taskSchListwinBG = taskScheduleListWin.getChildByName('taskSchListwinBG')

    
                                            var moveRange = ((this.taskStTime - startDayMs)/86400000) * 25
                                            
                                          //  console.log(moveRange)
                                           // console.log(convertMSB( this.taskStTime ))
                                            
                                         //   console.log(moveRange)
                                            daysInfoBlockBGWin.position.x = 200-moveRange//
                                            taskSchListwinBG.position.x = 200-moveRange//
                                           // console.log(daysInfoBlockBGWin)
                                           // console.log(taskSchListwinBG)
                
                                            })

        
        
        
       
        //任務置中按鈕
        var taskWorkingTimeEditBtn =  new PIXI.Graphics();   
            taskWorkingTimeEditBtn.lineStyle(1, '0xffffff', 0);
            taskWorkingTimeEditBtn.beginFill(taskEditBtnColor,taskEditBtnAlpha);
            taskWorkingTimeEditBtn.drawRoundedRect(0,0,18,23, 2);



            taskWorkingTimeEditBtn.name = 'goToCenterBtn' + String(taskSearchIndex)
            taskWorkingTimeEditBtn.x = 1
            taskWorkingTimeEditBtn.y = i*25
            taskWorkingTimeEditBtn.interactive = true;
            taskWorkingTimeEditBtn.buttonMode = true;
            parent.addChild(taskWorkingTimeEditBtn)    
        
            taskWorkingTimeEditBtn.taskUser = taskData[i][4]
            taskWorkingTimeEditBtn.taskID = taskData[i][0]
            taskWorkingTimeEditBtn.taskName = taskData[i][1]
            taskWorkingTimeEditBtn.projID =  taskData[i][2]

           // console.log(taskData[i])
        

        
        
        
        
        
        
        
                
            taskWorkingTimeEditBtn.on('pointerover', function(){this.tint="0xff8888"})
               .on('pointerout', function(){this.tint="0xffffff"})
               .on('pointerup',  function(){this.tint="0xffffff"})
               .on('mousedown', function(){ 
                                            console.log(this.taskUser,this.taskID,this.taskName,this.projID)
                
                                                  $.post("/getSelTaskWorkingTime", {  
                                                    'taskID':this.taskID,
                                                    'userName':this.taskUser,
                                                    'taskID':this.taskID,
                                                    'taskName':this.taskName,
                                                    'projID':this.projID,

                                                    }, function(data) {
                                                                    console.log(data)
                                                        var workingTimeList = data[2]
                                                        var userName =  data[1][2]
                                                        var taskID =  data[1][0]
                                                        var projID =  data[1][1]
                                                        var taskName =  data[1][3]

                                                      
                                                      if(workingTimeList.length == 0){
                                                           var workingTimeStartMs =  new Date().valueOf();

                                                                console.log('1',workingTimeStartMs)


                                                      }else{
                                                           var workingTimeStartMs = parseInt(workingTimeList[0][4])
                                                               console.log('2',workingTimeStartMs)


                                                      };
                                                      
                                                      if( userName == '選擇執行人員'){
                                                             errMsgBox.text = '無執行人員'
                                                      }else{
                                                          
                                                            var realWoringDayEditWin = new buildRealWorkingTimeWin(600,40,1,false,userName,taskID,taskName,projID,workingTimeStartMs) 
                                                      }
                                                      


                                                    }); 

                
                
                
                                            })

        
        
        
        
        
        //人員顯示方塊
        var taskBlock_ext =  new PIXI.Graphics();   
            taskBlock_ext.lineStyle(1, '0xaaffaa', 0.0);
            taskBlock_ext.beginFill('0x99aa88',0.3);
            taskBlock_ext.drawRoundedRect(0,0,80,23, 5);
            taskBlock_ext.x = 150
            taskBlock_ext.scale.set(1)
           // taskBlock_ext.y = i*25
            taskBlock_ext.name = 'taskBlock_ext' + String(taskSearchIndex)
            taskBlock_ext.alpha = 1
          //  taskBlock.addChild(taskBlock_ext)
        
         //   console.log(taskBlock_ext)
        
        
        
        
        
        
        
        
        var taskDeleteBlock =  new PIXI.Graphics();   
            taskDeleteBlock.lineStyle(1, '0xaaffaa', 0.0);
            taskDeleteBlock.beginFill('0xff6666',1);
           // taskDeleteBlock.drawRoundedRect(0,0,80,23, 5);
            taskDeleteBlock.beginFill('0xff6666',1);

            taskDeleteBlock.drawRoundedRect(0,0,taskBlockWidth+1200,1, 0);
            taskDeleteBlock.pivot.y = taskDeleteBlock.height/2
            taskDeleteBlock.x = 0
            taskDeleteBlock.y = taskBlock.height/2

            taskDeleteBlock.scale.set(1,0.3)
            taskDeleteBlock.name = 'taskDeleteBlock' + String(taskSearchIndex)
        
        
            taskDeleteBlock.alpha = 0
            taskBlock.addChild(taskDeleteBlock)    

        
        
           // console.log(taskBlock)
        var taskUserBlock =  new PIXI.Graphics();   
            taskUserBlock.lineStyle(0.5, taskBlodkColor, 1);
            taskUserBlock.beginFill(taskBlodkColor,0.2);
            taskUserBlock.drawRoundedRect(0,0,930,23, 2);

            taskUserBlock.endFill();
            taskUserBlock.name = 'taskUserBlock_'+ String(taskSearchIndex)
            taskUserBlock.x = 160
            taskUserBlock.y = i*25
            taskUserBlock.alpha = 0
            parent.addChild(taskUserBlock)    

        /*
        var taskUserWorkingDaysBlock =  new PIXI.Graphics();   
            taskUserWorkingDaysBlock.lineStyle(0.5, '0xffffff', 0);
            taskUserWorkingDaysBlock.beginFill(taskBlodkColor,0.2);
            taskUserWorkingDaysBlock.drawRoundedRect(0,0,1000,23, 2);

            taskUserWorkingDaysBlock.endFill();
            taskUserWorkingDaysBlock.name = 'taskUserWorkingDaysBlock_'+ String(taskSearchIndex)
            taskUserWorkingDaysBlock.x = 270
            taskUserWorkingDaysBlock.y = i*25
            taskUserWorkingDaysBlock.alpha = 0

            parent.addChild(taskUserWorkingDaysBlock)    
        
        */
       // console.log(taskLabeText,taskLabeText.length)
      //  console.log(taskLabelFontStyle)
        
       // if (taskLabeText.length >= 10){
        //    var taskLabelScale = 0.9
      //  }else{
       //     var taskLabelScale = 1

       // }
       // 
        

        
        
        var taskLabelText = new PIXI.Text(taskLabeText.slice(0,14), taskLabelFontStyleB);


            taskLabelText.pivot.x = taskLabelText.width/2
            taskLabelText.pivot.y = taskLabelText.height/2
            //console.log( dayText.weight/2)
            taskLabelText.x =80 //- dayText.weight/2
            taskLabelText.y =taskBlock.height/2
            //taskLabelText.scale.set(0.95)
        
        
            if( taskLabelText.width >= 110){
                 taskLabelText.scale.set( 1)    
               // taskLabelText.scale.set( 110/taskLabelText.width)   
            }else{
                taskLabelText.scale.set( 1)    
            }
           
            taskBlock.addChild(taskLabelText)
    
        var taskUserText = new PIXI.Text(taskUserTextString, taskUserFontStyle);


           // taskUserText.pivot.x = taskUserText.width/2
            taskUserText.pivot.y = taskUserText.height/2
            //console.log( dayText.weight/2)
            taskUserText.x =20//taskUserBlock.width/2 //- dayText.weight/2
            taskUserText.y =taskUserBlock.height/2
            //taskLabelText.scale.set(0.95)
            if( taskUserText.width >= 60){
                taskUserText.scale.set( 60/taskUserText.width)   
            }else{
                taskUserText.scale.set( 1)    
            }
        
           // taskUserBlock.addChild(taskUserText)
        
        
        var taskUserTextB = new PIXI.Text(taskUserTextString, taskUserFontStyleC);


           // taskUserText.pivot.x = taskUserText.width/2
            taskUserTextB.pivot.y = taskUserTextB.height/2
            //console.log( dayText.weight/2)
            taskUserTextB.x =taskUserPosX -10//taskUserBlock.width/2 //- dayText.weight/2
            taskUserTextB.y =taskUserTextB.height/2 +5
            //taskLabelText.scale.set(0.95)
            if( taskUserTextB.width >= 60){
                taskUserTextB.scale.set( 60/taskUserTextB.width)   
            }else{
                taskUserTextB.scale.set( 1)    
            }
        
            taskBlock.addChild(taskUserTextB)


        
       // console.log(taskTypeData[taskType])
        
        

       // console.log(selTaskType[0])
        // console.log(selTaskType,selTaskType[0][2])
      
        
   

        var taskTypeText = new PIXI.Text(taskTypeInput, taskTypeFontStyle);


           // taskTypeText.pivot.x = -taskTypeText.width/2
            taskTypeText.pivot.y = taskTypeText.height/2
            //console.log( dayText.weight/2)
            taskTypeText.x =12//taskUserBlock.width/2 //- dayText.weight/2
            taskTypeText.y =taskTypeText.height/2 +5
            //taskLabelText.scale.set(0.95)
           // if( taskTypeText.width >= 60){
           //     taskTypeText.scale.set( 60/taskTypeText.width)   
           // }else{
           //     taskTypeText.scale.set( 1)    
          //  }
        
            taskTypeBlock.addChild(taskTypeText)
        
        
        
          //  taskBlock_ext.addChild(taskUserTextB)
        
        var taskStartDayText = new PIXI.Text(taskStTime + ' ~ ', taskUserFontStyle);


           // taskStartDayText.pivot.x = taskStartDayText.width/2
            taskStartDayText.pivot.y = taskStartDayText.height/2
            //console.log( dayText.weight/2)
            taskStartDayText.x = 50//taskUserBlock.width/2 //- dayText.weight/2
            taskStartDayText.y =taskUserBlock.height/2
            //taskLabelText.scale.set(0.95)

        
            taskUserBlock.addChild(taskStartDayText)
        
        
        var taskEndDayText = new PIXI.Text(taskEdTime, taskUserFontStyle);


           // taskStartDayText.pivot.x = taskStartDayText.width/2
            taskEndDayText.pivot.y = taskStartDayText.height/2
            //console.log( dayText.weight/2)
            taskEndDayText.x = 220//taskUserBlock.width/2 //- dayText.weight/2
            taskEndDayText.y =taskUserBlock.height/2
            //taskLabelText.scale.set(0.95)

        
            taskUserBlock.addChild(taskEndDayText)
        
        
        /*
        
        console.log(taskProcessRangeDays)
                
        var timeLineBK = new PIXI.Graphics();

            timeLineBK.lineStyle(1, '0xffffff', 0);
            timeLineBK.beginFill('0x883434',1);
            timeLineBK.drawRect(0, 0,  25 * taskProcessRangeDays,5);
            timeLineBK.endFill();

            timeLineBK.name = 'timeLineBK'
            
            timeLineBK.x = 100


            timeLineBK.y = 25 * i
        
        
            taskSchListwinBG.addChild(timeLineBK)

        
        
        
        */
        
        var taskLabeText = taskData[i][1] //taskLabeText taskName taskLabelBlockWin 
        
      //  console.log(taskLabeText)
        // buildBtnScaleC(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type)
      //  var taskNameBlockBtn = new buildBtnScaleC(taskLabelBlockWin,5,i *(dayBGH),140,dayBGH-2,1,taskLabeText,'0xffffff',14,1,'0xff555555',1,1,'0x345323')
        
        var eventInfoBlock = parent.parent.getChildByName('eventInfoBlock')
        //console.log(taskData[i])
        taskBlock.projSearchIndex = taskData[i][2]
        taskBlock.taskID = taskData[i][0]
        taskBlock.taskName = taskLabeText
        taskBlock.workingUser =  taskData[i][4]
        taskBlock.taskDesc = taskData[i][9]
        
        taskBlock.currentTaskProjName = currentTaskProjName
        if(projSearchIndex != projSearchIndexID){
                                                          
            taskBlock.cuttentProj = false
        }else{
            taskBlock.cuttentProj = true

        }
                                                   
        taskBlock.interactive = true;   // BTN
        taskBlock.buttonMode = true; 

        taskBlock.on('pointerover', function(){this.alpha = 0.5 
                                              //  this.buttonMode = false;
                                                     //  this.interactive = false;   // BTN
                                               
                                             //  console.log('taskBlock pointerover')//taskBlock

                                                var selTaskUserBlock = this.parent.getChildByName('taskUserBlock_' + String(this.searchTaskIndex))
                                                
                                                
                                                
                                                
                                             //   var taskDeleteBlock = this.getChildByName('taskDeleteBlock')
                                             //   taskDeleteBlock.alpha = 1
                                                
                                                var selTaskUserWorkingDaysBlock = this.parent.getChildByName('taskUserWorkingDaysBlock_' + String(this.searchTaskIndex))
                                                    selTaskUserBlock.alpha = 1
                                                  //  selTaskUserWorkingDaysBlock.alpha =  1   
                                                 var selTaskBlock_ext =  this.getChildByName('taskBlock_ext' + String(this.searchTaskIndex))
                                                 eventInfoBlock.text = this.taskName + ' / ' + this.workingUser + ' / ' + this.currentTaskProjName + ' / ' + this.taskDesc
                                                   // taskBlock_ext.tint = "0xff8888"
                                                      //   selTaskBlock_ext.scale.set(1)

                                               
                                                   // selTaskUserBlock.interactive = true;   // BTN
                                                   // selTaskUserBlock.buttonMode = true;
                                               
                                                  //  selTaskUserBlock.on('pointerover', function(){
                                                        
                                                        //   console.log('selTaskBlock_ext',this)

                                                        
                                                        
                                                  //  })
                                               
                                               
                                               
                                               

                                              })
                      .on('pointerout', function(){this.alpha = 1
                                                //  this.buttonMode = true;
                                               //   this.interactive = true;   // BTN

                                                   var selTaskUserBlock = this.parent.getChildByName('taskUserBlock_' + String(this.searchTaskIndex))
                                                   var selTaskUserWorkingDaysBlock = this.parent.getChildByName('taskUserWorkingDaysBlock_' + String(this.searchTaskIndex))
                                                   // selTaskUserBlock.alpha = 0
                                                   // selTaskUserWorkingDaysBlock.alpha =  0
                                                    var selTaskBlock_ext =  this.getChildByName('taskBlock_ext' + String(this.searchTaskIndex))
                                                  
                                                  //  var taskDeleteBlock = this.getChildByName('taskDeleteBlock')
                                                  //  taskDeleteBlock.alpha =0  
                                                            
                              
                                                        


                                                           selTaskUserBlock.alpha = 0
                                                       //     selTaskUserWorkingDaysBlock.alpha =  0
                                                    

                                                 
                                                    
                                                    
                                                    
                                                  })
        
        
                       .on('pointerup',  function(){this.alpha = 1})

        taskBlock.on('mousedown', function(){console.log('call taskSchListwin 2')
                                                         var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                                          //  console.log(projSearchIndex,projSearchIndexID)
                                                            if(this.cuttentProj == false ){
                                                          

                                                                }else{
                                                   
                                                                    $.post("/getSelTaskDataFromDB", {   //runAllAutoEvents
                                                                    'proj_id':parseInt(this.projSearchIndex),
                                                                    'task_id' : parseInt(this.taskID),
                                                                    'name' : this.taskName,
                                                                    'user_name':userNameInput.text
                                                                    }, function(data) {
                                                                  //  var taskData = data[2]
                                                                        console.log(data)
                                                                    var taskName = data[3]
                                                                    var selTaskData = data[4]
                                                                    var favTask = data[5]
                                                                    var taskEditWin = new buildTaskEditWin(uiBaseContainer,360,40,480,500,daysApp,taskName,selTaskData,'edit',favTask)
                                                                
                                                                
                                                                })  

                                                            };

                                          


                                                         });    
        
        
        
    };
    
    
        console.log(parent,parent.name,parent.x,parent.y)

    
};



//建立日期時間方塊
function buildScheduleDaysLsit(parent,x,y,todayMs,startDayMs,duration,blockW,blockH){
    
    var holidaysMsList = JSON.parse(window.localStorage.getItem("holidaysMsList"));

    
   // console.log(holidaysMsList)
    var dayTextFontStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 13,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0xbbfbfb', // gradient
       // stroke: '0x6789aa',
        //strokeThickness: 0.2,
       // dropShadow: false,
       // dropShadowColor: '#333333',
       // dropShadowBlur: 6,
       // dropShadowAngle: Math.PI / 6,
       // dropShadowDistance: 3,
       // wordWrap: true,
       // wordWrapWidth: 440,
        });
    
    var monthTextFontStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '200',
        fill: '0xcccccc', // gradient
       // stroke: '0x6789aa',
        //strokeThickness: 0.2,
       // dropShadow: false,
       // dropShadowColor: '#333333',
       // dropShadowBlur: 6,
       // dropShadowAngle: Math.PI / 6,
       // dropShadowDistance: 3,
       // wordWrap: true,
       // wordWrapWidth: 440,
        });
    
     var weekDayTextFontStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 11,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '0x99aa99', // gradient
       // stroke: '0x6789aa',
        //strokeThickness: 0.2,
       // dropShadow: false,
       // dropShadowColor: '#333333',
       // dropShadowBlur: 6,
       // dropShadowAngle: Math.PI / 6,
       // dropShadowDistance: 3,
       // wordWrap: true,
       // wordWrapWidth: 440,
        });   
    
    for(var i = 0 ; i < duration ; i++){

        var selDayMs = startDayMs + i* 86400000
        var selDayString = new Date(selDayMs).getDate()
        
       // console.log(selDayString)
        //var selMonthString = new Date(selDayMs).getFullYear() + ' 年 ' +monthList[new Date(selDayMs).getMonth()]
        //  var selWeekDayString =weekDaysList[new Date(selDayMs).getDay()]

        //  var selYearString = new Date(selDayMs).getFullYear() + ' 年 '
    

        var weekDaysList = ["日","一","二","三","四","五","六"]
        var monthList = [" 1 月"," 2 月"," 3 月"," 4 月"," 5 月"," 6 月"," 7 月"," 8 月"," 9 月","10 月","11 月","12 月"]



        //var selMonthString = new Date(selDayMs).getFullYear() + ' 年 ' +monthList[new Date(selDayMs).getMonth()]
        var selMonth = new Date(selDayMs).getMonth()
        var selMonthString = monthList[selMonth]

        var selWeekDayString =weekDaysList[new Date(selDayMs).getDay()]
 
        var selYearString = new Date(selDayMs).getFullYear() + ' 年 '
       // console.log(monthList[new Date(selDayMs).getMonth()])
         //      console.log(selYearString)
        var daysInMonth = new Date(new Date(selDayMs).getFullYear(), selMonth +1, 0).getDate();
        var selFullYeatMonthString = selYearString + selMonthString

      //  console.log(selMonthString,daysInMonth)
        
        if( selWeekDayString == '日' ||  selWeekDayString == '六'){
                var blockBGColor = '0xaaaaaa'   
                var blockFillH = blockH +10//+600
                var dayBlockAlpha = 0.5
                var holidayBlockAlpha = 0.1

        }else if(selWeekDayString == '一'){
              var blockBGColor = '0x333333'       
                var blockFillH = blockH  +10 
                var dayBlockAlpha = 0.5
                var holidayBlockAlpha = 0

        }else if(selWeekDayString == '二'){
                var blockBGColor = '0x353535'       
                var blockFillH = blockH  +10
                var dayBlockAlpha = 0.5
                var holidayBlockAlpha = 0

        }else if(selWeekDayString == '三'){
                var blockBGColor = '0x3a3a3a'       
                var blockFillH = blockH  +10
                var dayBlockAlpha = 0.5
                var holidayBlockAlpha = 0

        }else if(selWeekDayString == '四'){
                var blockBGColor = '0x3f3f3f'       
                var blockFillH = blockH  +10
                var dayBlockAlpha = 0.5
                var holidayBlockAlpha = 0

        }else if(selWeekDayString == '五'){
                var blockBGColor = '0x454545'       
                var blockFillH = blockH +10
                var dayBlockAlpha = 0.5
                var holidayBlockAlpha = 0

        }else if( selDayMs == todayMs){
                var blockBGColor = '0x335533'       
                var blockFillH = blockH +10
                var dayBlockAlpha = 0.5
                var holidayBlockAlpha = 0

        }else{

                var blockBGColor = '0x333333'   
                var blockFillH = blockH+5 
                var dayBlockAlpha = 0.5
                var holidayBlockAlpha = 0

        };
        
        
        
        
        if(selDayString == 1){
            
           
        var monthBlock =  new PIXI.Graphics();   
            var monthBKW = daysInMonth * blockW
            monthBlock.lineStyle(1, '0x111111', 0);
            
            if(selMonth%2 == 0){
                monthBlock.beginFill('0x333333',1);    
            }else{
                
                monthBlock.beginFill('0x555555',1);    

            }
            
            monthBlock.drawRoundedRect(0,0,monthBKW,25, 1);
        
        
        
            monthBlock.endFill();
            monthBlock.name = 'monthBlock'
           // dayBlock.pivot.y  =  dayBlock.height
            monthBlock.x = i* blockW
            monthBlock.y = 0
            parent.addChild(monthBlock)  
            
        var monthText = new PIXI.Text(selFullYeatMonthString, monthTextFontStyle);


            monthText.pivot.x = monthText.width/2
            monthText.pivot.y = monthText.height/2
            //console.log( dayText.weight/2)
            monthText.x =60
            monthText.y =blockH/2 -3

            monthBlock.addChild(monthText)
            
            
            
            
        }else{
            
            
        }
    
        var toDayMDY = getTodayStringMDY()
        var todayMs = new Date(toDayMDY).valueOf();  
        
        
        if(i%2 == 0){
            
            var dayGridFillColor = '0x667688'
            
        }else if(i%2 == 1){
            
            var dayGridFillColor = '0x668698'
            
        };
        
        if(selDayMs == todayMs ){
            var blockBGColor = '0xaaffaa'       
            var dayGridFillColor = '0xaaaaaa'
            var blockFillH = blockH +10
           // console.log('11111111111111111111111111111111111111111111111111111111111111111111')
        };
        
        if( holidaysMsList.includes(selDayMs) == true ){
          //  console.log('selDayMs',selDayMs)
            var blockBGColor = '0xffaaaa'       
            var dayGridFillColor = '0xcc8888'
            var dayGridFillAlpha = 0.1

        }else{
        //  console.log('selDayMs','none')
              var dayGridFillAlpha = 0.1

        };

        
        
        var dayBlock =  new PIXI.Graphics();   
            dayBlock.lineStyle(1, '0x111111', 0);
            dayBlock.beginFill(blockBGColor,dayBlockAlpha);
            dayBlock.drawRoundedRect(0,0,blockW,blockFillH, 1);
        
        
        
            dayBlock.endFill();
            dayBlock.name = 'dayBlock'
           // dayBlock.pivot.y  =  dayBlock.height
            dayBlock.x = i* blockW
            dayBlock.y = 25
            parent.addChild(dayBlock)

        //console.log(i%2)
        
        var holidayBlock = new PIXI.Graphics();   
            holidayBlock.lineStyle(1, '0x111111', 0);
            holidayBlock.beginFill('0x888888',holidayBlockAlpha);
            holidayBlock.drawRoundedRect(0,0,blockW,1000, 0);
        
        
        
            holidayBlock.endFill();
            holidayBlock.name = 'holidayBlock'
           // dayBlock.pivot.y  =  dayBlock.height
            holidayBlock.x = 0//i* blockW
            holidayBlock.y = 40//100
            dayBlock.addChild(holidayBlock)
        
        
        
        
        var dayGridBlock =  new PIXI.Graphics();   
            dayGridBlock.lineStyle(0.3, dayGridFillColor,0.0);
            dayGridBlock.beginFill(dayGridFillColor,dayGridFillAlpha);
            dayGridBlock.drawRoundedRect(0,0,blockW,600, 1);
        
        
        
            dayGridBlock.endFill();
            dayGridBlock.name = 'dayGridBlock'
           // dayBlock.pivot.y  =  dayBlock.height
            dayGridBlock.x = 00//i* blockW
            dayGridBlock.y = 43
            dayBlock.addChild(dayGridBlock) 
        
           // console.log('selDayString',selDayString)

        var dayText = new PIXI.Text(selDayString, dayTextFontStyle);


            dayText.pivot.x = dayText.width/2
            dayText.pivot.y = dayText.height/2
            //console.log( dayText.weight/2)
            dayText.x =blockW/2 - 3//- dayText.weight/2
            dayText.y =blockH/2 -6

            dayBlock.addChild(dayText)

        var weekDayText = new PIXI.Text(selWeekDayString, weekDayTextFontStyle);


            weekDayText.pivot.x = dayText.width/2
            weekDayText.pivot.y = dayText.height/2
            //console.log( dayText.weight/2)
            weekDayText.x =blockW/2 + 3//- dayText.weight/2
            weekDayText.y =blockH/2 + 11

            dayBlock.addChild(weekDayText)

        


    };      
    
    
    
       console.log(parent,parent.name,parent.x,parent.y)

        
};


//建立時間排程表  實際工時表
function buildTaskScheduleList(parent,x,y,taskData,blockW,blockH,startDayMs){
    var holidaysMsList = JSON.parse(window.localStorage.getItem("holidaysMsList"));
    var selProjWorkingTimeDB = JSON.parse(window.localStorage.getItem("selProjWorkingTimeDB"));  
    //console.log(selProjWorkingTimeDB)
   // console.log(taskData)

    var taskCount =  taskData.length
    var workingDayTextFontStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '200',
        fill: '0xffffff', // gradient
       // stroke: '0x6789aa',
        //strokeThickness: 0.2,
       // dropShadow: false,
       // dropShadowColor: '#333333',
       // dropShadowBlur: 6,
       // dropShadowAngle: Math.PI / 6,
       // dropShadowDistance: 3,
       // wordWrap: true,
       // wordWrapWidth: 440,
        });
    for(var i = 0 ; i < taskCount ; i++){
        
        var taskLabeText = taskData[i][1]
        var taskUserText = taskData[i][4]
        
        
        var taskSearchIndex = taskData[i][0]
    
        var taskStTime =  taskData[i][5]
        var taskEdTime =  taskData[i][6]
        var taskID = taskData[i][0]
       // console.log(taskID)
        var taskStartDay = new Date(String(taskStTime.split(" ")[2])+',' +String( taskStTime.split(" ")[4])+','+ String(taskStTime.split(" ")[0]));
        var taskEndDay = new Date(String(taskEdTime.split(" ")[2])+',' +String( taskEdTime.split(" ")[4])+','+ String(taskEdTime.split(" ")[0]));
        
        var taskStartDayMs = taskStartDay.valueOf()
              //  console.log(taskStartDayMs)

        var taskEndDayMs = taskEndDay.valueOf()
        
        
        var taskProcessRangeDays = (taskEndDayMs-taskStartDayMs)/86400000 +1
        var taskBlockStartPosX = (taskStartDayMs-startDayMs)/86400000
    //    console.log(taskStTime,taskEdTime,taskUserText)
        
        
      
        var selTaskWorkingTimeData = selProjWorkingTimeDB.filter(function(item, index, array){
                                                  return item[1] == taskID

                                             }); 
        
        //console.log(selTaskWorkingTimeData)

        var realTaskStTime = taskData[i][21]
        var realTaskEDTime = taskData[i][22]
        var realTaskStartDay = new Date(String(realTaskStTime.split(" ")[2])+',' +String( realTaskStTime.split(" ")[4])+','+ String(realTaskStTime.split(" ")[0]));
        var realTaskEndDay = new Date(String(realTaskEDTime.split(" ")[2])+',' +String( realTaskEDTime.split(" ")[4])+','+ String(realTaskEDTime.split(" ")[0]));
        var realTaskStartDayMs = realTaskStartDay.valueOf()
        var realTaskEndDayMs = realTaskEndDay.valueOf()
        var realTaskProcessRangeDays = (realTaskEndDayMs-realTaskStartDayMs)/86400000 +1

        var realTaskBlockStartPosX = (realTaskStartDayMs-startDayMs)/86400000
 
        
        
        var taskRequestTime = taskData[i][23]
        var taskRequestDay = new Date(String(taskRequestTime.split(" ")[2])+',' +String( taskRequestTime.split(" ")[4])+','+ String(taskRequestTime.split(" ")[0]));
       // console.log(taskRequestTime,taskRequestDay)

        var taskRequestDayMs = taskRequestDay.valueOf()
        var taskRequestDayPosX = (taskRequestDayMs-startDayMs)/86400000

        
       
        var projSearchIndex =  taskData[i][2]  
        var taskState = taskData[i][12] 
        
        

        if(taskState == "準備中"){
          //  console.log("任務準備中")
           var taskBlodkColor = '0x666666'

        }else if(taskState == "進行中"){
         //   console.log("任務進行中")
            var taskBlodkColor = '0xaaaa88'

        }else if(taskState == "已完成"){
          //  console.log("任務已完成")
            var taskBlodkColor = '0x88aa88'

        }else if(taskState == "已提交"){
          //  console.log("任務已提交")
            var taskBlodkColor = '0x8888aa'

        };
        
      //  console.log(taskProcessRangeDays)
                
      
        var workingDaysBlock =  new PIXI.Graphics();   
            workingDaysBlock.lineStyle(1, '0xffff88',0.2);
            workingDaysBlock.beginFill(taskBlodkColor,1);
            workingDaysBlock.drawRoundedRect(0,0,taskProcessRangeDays *25 ,20, 5);
        
        
        
            workingDaysBlock.endFill();
            workingDaysBlock.name = 'workingDaysBlock'
            workingDaysBlock.pivot.y  =  workingDaysBlock.height/2
            workingDaysBlock.x = taskBlockStartPosX * blockW
            workingDaysBlock.y = i* blockH + blockH/2
            workingDaysBlock.alpha = 0.8
        
            parent.addChild(workingDaysBlock) 
        
            var workingDayTextString = taskUserText+" " + taskStTime +" ~ " + taskEdTime
            var workingDayText = new PIXI.Text(workingDayTextString, workingDayTextFontStyle);
       //     console.log( workingDayTextString,workingDayText)
            workingDayText.name = 'workingDayText'
           // workingDayText.pivot.x = workingDayText.width/2
            workingDayText.pivot.y = workingDayText.height/2
            //console.log( dayText.weight/2)
            workingDayText.x =10
            workingDayText.y =workingDaysBlock.height/2// -3
            workingDayText.alpha = 0
            workingDaysBlock.addChild(workingDayText)
        
       // console.log(taskStartDayMs) 
        
        var weekDaysList = ["日","一","二","三","四","五","六"]


        for(var j = 0 ; j < taskProcessRangeDays ; j++){
            var unitDayMs = taskStartDayMs + j*86400000
            var selWeekDayString =weekDaysList[new Date(unitDayMs).getDay()]

            if( holidaysMsList.includes(unitDayMs) == true ||  selWeekDayString == '日' ||  selWeekDayString == '六'){
               // console.log('unitDayMs',unitDayMs,selWeekDayString)
                    var unitDayBlockColor = '0xffaaaa'
                    var unitDayBlockAlpha = 0.0
                    var unitDayBlockBorderAlpha = 0

                }else{
               //     console.log('unitDayMs','none')
                    var unitDayBlockColor = '0xaaccff'
                    var unitDayBlockAlpha = 0.5
                    var unitDayBlockBorderAlpha = 0.2
                    var workingDayUnityBlock =  new PIXI.Graphics();    
                        workingDayUnityBlock.lineStyle(1, '0xaaccff',unitDayBlockBorderAlpha);
                        workingDayUnityBlock.beginFill(unitDayBlockColor,unitDayBlockAlpha);
                        workingDayUnityBlock.drawRoundedRect(0,0,25 ,20, 2);
                        workingDaysBlock.addChild(workingDayUnityBlock)
                        workingDayUnityBlock.x = j*25

                };

            
            

               // workingDayText.y =0

        }
        
        
        // 工作單位日
      //  var workingDayUnityBlock =  new PIXI.Graphics(); 
        
        
        
        
        
        
        //
            workingDaysBlock.interactive = true;   // BTN
            workingDaysBlock.buttonMode = true;
      
            workingDaysBlock.on('pointerover', function(){this.alpha=1;      var workingDayText = this.getChildByName('workingDayText') ;  workingDayText.alpha = 1  })
                            .on('pointerout', function(){this.alpha=0.5; var workingDayText = this.getChildByName('workingDayText') ;  workingDayText.alpha =0  })
                       
                            .on('pointerup', function(){this.alpha=0.5; var workingDayText = this.getChildByName('workingDayText') ;  workingDayText.alpha = 0  })

        
        /*
        var realWorkingDaysBlock =  new PIXI.Graphics();   
            realWorkingDaysBlock.lineStyle(1, '0x225522',0);
            realWorkingDaysBlock.beginFill('0x225522',0.3);
            realWorkingDaysBlock.drawRoundedRect(0,0,realTaskProcessRangeDays *25 ,blockH/3, 1);
        
        
        
            realWorkingDaysBlock.endFill();
            realWorkingDaysBlock.name = 'realWorkingDaysBlock'
            realWorkingDaysBlock.pivot.y  =  realWorkingDaysBlock.height/2
            realWorkingDaysBlock.x = realTaskBlockStartPosX * blockW
            realWorkingDaysBlock.y = i* blockH + 2*blockH/3
            realWorkingDaysBlock.alpha = 1
                   parent.addChild(realWorkingDaysBlock) 

            //建立實際工作格數
            for(var k = 0 ; k  <realTaskProcessRangeDays ; k++){
                var realWorkUnitDayMs = realTaskStartDayMs + k*86400000

                var selWeekDayString =weekDaysList[new Date(realWorkUnitDayMs).getDay()]
               // console.log(selWeekDayString)
                if( holidaysMsList.includes(realWorkUnitDayMs) == true ||  selWeekDayString == '日' ||  selWeekDayString == '六'){
               // console.log('unitDayMs',unitDayMs,selWeekDayString)
                    var realWokUnitDayBlockColor = '0xffaaaa'
                    var realWokUnitDayBlockAlpha = 0.0
                    var realWokUnitDayBlockBorderAlpha = 0

                }else{
               //     console.log('unitDayMs','none')
                    var realWokUnitDayBlockColor = '0xaaffaa'
                    var realWokUnitDayBlockAlpha = 0.5
                    var realWokUnitDayBlockBorderAlpha = 0.3
                    var realWorkingDayUnityBlock =  new PIXI.Graphics();    
                        realWorkingDayUnityBlock.lineStyle(1,realWokUnitDayBlockColor,realWokUnitDayBlockBorderAlpha);
                        realWorkingDayUnityBlock.beginFill(realWokUnitDayBlockColor,0.3);
                        realWorkingDayUnityBlock.drawRoundedRect(0,0,25 ,10, 15);
                        realWorkingDayUnityBlock.x = k*25// realTaskBlockStartPosX + k*25
                       // realWorkingDayUnityBlock.y = -10//i //- 10//i* blockH + 2*blockH/3 -10

                
                        realWorkingDaysBlock.addChild(realWorkingDayUnityBlock)

                };
              
            };
        */

        //建立實際工作格數 第二版
        
       // console.log(selTaskWorkingTimeData,selTaskWorkingTimeData.length)
        if( selTaskWorkingTimeData.length == 0){
            
        }else{
             //取得實際工時資料
            
            for(var k = 0; k < selTaskWorkingTimeData.length ; k++ ){
                
                var workingTimeStartMS = parseInt(selTaskWorkingTimeData[k][4])
                var workingTimeEndMS = parseInt(selTaskWorkingTimeData[k][5])
                var workingTimeTotalTime = selTaskWorkingTimeData[k][9]
                var workingTimePriorityID = selTaskWorkingTimeData[k][8]

                if( workingTimePriorityID == 1 ){
                    var workingTimeBlockPosY = i* blockH + blockH/6 +8
                    var workingTimeBlockColor = "0x75bdff"

                }else if( workingTimePriorityID == 2 ){
                    var workingTimeBlockPosY = i* blockH + blockH/6 +8 //+ 1*blockH/3 -1
                    var workingTimeBlockColor = "0xfffb95"  

                }else if( workingTimePriorityID == 3 ){
                    var workingTimeBlockPosY = i* blockH + blockH/6 +8//+ 2*blockH/3 -1
                    var workingTimeBlockColor = "0x64a157"  

                }else{
                    
                    
                };
                
                var  workingTimeStartTimsDayMs = (Math.floor(workingTimeStartMS/86400000))*86400000 - 8 * 60*60*1000
                var  workingTimeEndTimeDayOclockMs = (Math.floor(workingTimeEndMS/86400000))*86400000 - 8 * 60*60*1000
                var  workingTimeEndTimsDayMs = (Math.ceil(workingTimeEndMS/86400000))*86400000 - 8 * 60*60*1000 -1
                var  workingTimeCrossDays = Math.ceil((workingTimeEndTimsDayMs -workingTimeStartTimsDayMs) / 86400000)    
               // console.log(workingTimeStartMS,workingTimeEndMS,workingTimeStartTimsDayMs,workingTimeEndTimeDayOclockMs,workingTimeEndTimsDayMs,workingTimeCrossDays)    

                
                //console.log(convertMSB( workingTimeStartTimsDayMs ),convertMSB( startDayMs ))
                
                var workingTimeBlockStartPosX = (workingTimeStartTimsDayMs-startDayMs)/86400000

                var workingTimeBlock =  new PIXI.Graphics();   
                    workingTimeBlock.lineStyle(0.5, workingTimeBlockColor,0.7);
                    workingTimeBlock.beginFill(workingTimeBlockColor,0);
                    workingTimeBlock.drawRoundedRect(0,0,workingTimeCrossDays *25 ,20, 1);



                    workingTimeBlock.endFill();
                    workingTimeBlock.name = 'workingTimeBlock'
                    workingTimeBlock.pivot.y  =  workingTimeBlock.height/2
                    workingTimeBlock.x = workingTimeBlockStartPosX * blockW
                
                    workingTimeBlock.y = workingTimeBlockPosY
                    workingTimeBlock.alpha = 1
                    parent.addChild(workingTimeBlock)    

                    //設定工時區塊，分日
                
                    if( workingTimeCrossDays == 1){
                           console.log(convertMSB( workingTimeStartMS ),convertMSB( workingTimeStartTimsDayMs ))   
                            var deltaPosX = (((workingTimeStartMS - ( workingTimeStartTimsDayMs + 9 * 60*60*1000))/(60*60*1000))/9) * 25
                            var workTimeBlockLength = ((((workingTimeEndMS -workingTimeStartMS ))/(60*60*1000))/9) * 25
                            var dayWorkingTimeBlock =  new PIXI.Graphics();   
                                dayWorkingTimeBlock.lineStyle(1, workingTimeBlockColor,0.3);
                                dayWorkingTimeBlock.beginFill(workingTimeBlockColor,0.7);
                                dayWorkingTimeBlock.drawRoundedRect(0,0, workTimeBlockLength ,20, 1);



                                dayWorkingTimeBlock.endFill();
                                dayWorkingTimeBlock.name = 'dayWorkingTimeBlock'
                                //dayWorkingTimeBlock.pivot.y  =  workingTimeBlock.height/2
                                dayWorkingTimeBlock.x = deltaPosX

                                //workingTimeBlock.y = workingTimeBlockPosY
                                dayWorkingTimeBlock.alpha = 1
                                workingTimeBlock.addChild(dayWorkingTimeBlock)        

                    }else if( workingTimeCrossDays == 2){
                            
                            
                            var deltaPosX = (((workingTimeStartMS - ( workingTimeStartTimsDayMs + 9 * 60*60*1000))/(60*60*1000))/9) * 25
                            var workTimeBlockHours =  (( workingTimeStartTimsDayMs + 18 * 60*60*1000) - workingTimeStartMS)/ (60*60*1000) +( workingTimeEndMS - (workingTimeEndTimeDayOclockMs + 9*60*60*1000))/ (60*60*1000)
                            var workTimeBlockLength = workTimeBlockHours/9 *25     
                                
                            var dayWorkingTimeBlock =  new PIXI.Graphics();   
                                                        dayWorkingTimeBlock.lineStyle(1, workingTimeBlockColor,0.3);
                                                        dayWorkingTimeBlock.beginFill(workingTimeBlockColor,0.7);
                                                        dayWorkingTimeBlock.drawRoundedRect(0,0, workTimeBlockLength ,20, 1);



                                                        dayWorkingTimeBlock.endFill();
                                                        dayWorkingTimeBlock.name = 'dayWorkingTimeBlock'
                                                        //dayWorkingTimeBlock.pivot.y  =  workingTimeBlock.height/2
                                                        dayWorkingTimeBlock.x = deltaPosX

                                                        //workingTimeBlock.y = workingTimeBlockPosY
                                                        dayWorkingTimeBlock.alpha = 1
                                                        workingTimeBlock.addChild(dayWorkingTimeBlock)        
                             
                             
                             
                    }else if( workingTimeCrossDays > 2){
                        
                        for(var d = 0; d<workingTimeCrossDays ; d++ ){
                            
                            if(d == 0){
                                var deltaPosX = (((workingTimeStartMS - ( workingTimeStartTimsDayMs + 9 * 60*60*1000))/(60*60*1000))/9) * 25
                                var workTimeBlockHours =  (( workingTimeStartTimsDayMs + 18 * 60*60*1000) - workingTimeStartMS)/ (60*60*1000) 
                                var workTimeBlockLength = workTimeBlockHours/9 *25   
                                var dayWorkingTimeBlockAlpha = 0.7
                            }else if( d > 0 & d < (workingTimeCrossDays-1)){
                                var deltaPosX = 25 * d
                                var workTimeBlockLength =  25   
                                var currentDayMs = workingTimeStartTimsDayMs + d * 86400000
                               // console.log(convertMSB( currentDayMs ))
                                if( convertWeekDay( currentDayMs ) == 0 | convertWeekDay( currentDayMs ) == 6){
                                    var dayWorkingTimeBlockAlpha = 0  
                                        
                                }else{
                                     var dayWorkingTimeBlockAlpha = 0.7
                                }

                            }else if(d == (workingTimeCrossDays-1) ){
                                var deltaPosX = 25 * d 
                                var workTimeBlockHours =  ( workingTimeEndMS - (workingTimeEndTimeDayOclockMs + 9*60*60*1000))/ (60*60*1000)
                                var workTimeBlockLength = workTimeBlockHours/9 *25 
                                var dayWorkingTimeBlockAlpha = 0.7

                            };
                        
                            
                            var dayWorkingTimeBlock =  new PIXI.Graphics();   
                                dayWorkingTimeBlock.lineStyle(1, workingTimeBlockColor,0.3);
                                dayWorkingTimeBlock.beginFill(workingTimeBlockColor,dayWorkingTimeBlockAlpha);
                                dayWorkingTimeBlock.drawRoundedRect(0,0, workTimeBlockLength ,20, 1);



                                dayWorkingTimeBlock.endFill();
                                dayWorkingTimeBlock.name = 'dayWorkingTimeBlock'
                                //dayWorkingTimeBlock.pivot.y  =  workingTimeBlock.height/2
                                dayWorkingTimeBlock.x = deltaPosX

                                //workingTimeBlock.y = workingTimeBlockPosY
                                dayWorkingTimeBlock.alpha = 1
                                workingTimeBlock.addChild(dayWorkingTimeBlock)        


                        };    
                        
                    };
                
                /*
                    for(var d = 0 ; d < workingTimeCrossDays; d ++ ){
                        if( d == 0){
                         

                        }else if(workingTimeCrossDays == 2){

                        }else if(workingTimeCrossDays > 2){

                        };    
                        
                        
                        
                        
                    }
                    */

                
                
            }

            /*
            var workingTimeBlockStartPosX = (workingTimeStartTimsDayMs-startDayMs)/86400000

            var workingTimeBlock =  new PIXI.Graphics();   
            workingTimeBlock.lineStyle(1, '0x225522',1);
            workingTimeBlock.beginFill('0x225522',1);
            workingTimeBlock.drawRoundedRect(0,0,workingTimeCrossDays *25 ,blockH/3, 1);
        

        
            workingTimeBlock.endFill();
            workingTimeBlock.name = 'workingTimeBlock'
            workingTimeBlock.pivot.y  =  workingTimeBlock.height/2
            workingTimeBlock.x = workingTimeBlockStartPosX * blockW
            workingTimeBlock.y = i* blockH + 2*blockH/3
            workingTimeBlock.alpha = 1
                   parent.addChild(workingTimeBlock)    
                   
           */        
                   
            
        }


        
        };
    console.log(parent,parent.name,parent.x,parent.y)

    
};