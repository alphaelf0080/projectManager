//建立排程視窗    
 /*   
function buildScheduleListWin(parent,x,y,w,h){
    var userPrefSet = JSON.parse(window.localStorage.getItem("userPrefSet"));
    console.log('buildScheduleListWin',userPrefSet,userPrefSet.length)
    if( userPrefSet.length == 0){
         var selProj_list_filter = '全部'   
        
        var selProj_Type_filter =  '未指定'
    }else{
        var tempSelProj_list_filter = userPrefSet[3]
        var tempSelProj_Type_filter = userPrefSet[4]

         console.log(userPrefSet,tempSelProj_list_filter,tempSelProj_Type_filter)

        if(tempSelProj_list_filter == 'none'){
          //  console.log('aaaaaaaaaa')
            var selProj_list_filter = '全部'

        }else{
           //  console.log('bbbbbbbbb')
            var selProj_list_filter = userPrefSet[3]  

        };

        if(tempSelProj_Type_filter  == 'none'){
           //  console.log('cccccccc')
           var selProj_Type_filter =  '未指定'
        }else{
                    console.log('ddddddddddd')

            var selProj_Type_filter = userPrefSet[4]

        };    
        
        
    }
    

    
     console.log(selProj_list_filter,selProj_Type_filter)

    
    var scheduleListWin = new moveAbleWinBlock(uiBaseContainer,x,y,w,h,'排程列表',20,20,14,'0xffffff','scheduleList_container',1,'0xaaaaaa',2,'0x333333',1,1,'0x667777',daysApp,screenW,screenH,true)
        scheduleListWin.name = 'scheduleList_container'
   
    
   // scheduleListWin.interactiveMousewheel = true
   // scheduleListWin.on('mousewheel', (delta, event) => {
   //    console.log('asdasdsadsds')
   // })

    
    var  filterTypeList = ['全部','最近15個專案','最近30個專案','最近100個專案','執行中','準備中','已完成','結案','需求日期','專案開始日期','專案結束日期','我的專案']
    
   // var  projectTypeList = ['全部','CF','slot game','pop game','fishing','需求日期','專案開始日期','專案結束日期','我的專案']
    var projectTypeList = JSON.parse(window.localStorage.getItem("projectTypeList"));

    
    


   
    
    
    var selFilterBtnGrp = new buildOptionGrp_B_Btn(scheduleListWin,50,40,'執行狀況選擇 :',filterTypeList,130,13,140,selProj_list_filter,12,10,'0xffffff','0xffffff','0x333333',0.5,0.9)
    
        selFilterBtnGrp.assetType = selProj_list_filter
        console.log(selFilterBtnGrp,selProj_list_filter)

   // var selprojectTypeFilterBtnGrp = new buildMultiSelOptionGrpBtn(scheduleListWin,160,80,'專案類型選擇 :',projectTypeList,130,10,140,'未指定',12,10,'0xffffff','0xffffff','0x333333',0.5,0.9)

    var selprojectTypeFilterBtnGrp = new buildOptionGrp_B_Btn(scheduleListWin,50,80,'專案類型選擇 :',projectTypeList,130,10,140,selProj_Type_filter,12,10,'0xffffff','0xffffff','0x333333',0.5,0.9)

    
    
    var runtimeState = selFilterBtnGrp.assetType
    var initialProjTypeSelList = selProj_Type_filter
    console.log(runtimeState)
    var getProjectDataFromDB_RealTime = new getProjectDataFromDBRealTime(scheduleListWin,runtimeState,initialProjTypeSelList)
    

       // selFilterBtnGrp.assetType = '最近30個專案''
      //  console.log(selFilterBtnGrp.assetType)
        selFilterBtnGrp.interactive = true;
        selFilterBtnGrp.buttonMode = true;
        selFilterBtnGrp.on('mousedown', function(){//console.log(selFilterBtnGrp.assetType)
                                var allChildren = selprojectTypeFilterBtnGrp.children
                                var allOptionBG = allChildren.filter(function(item, index, array){
                                        return item.selCheck === 'optionBG'      // 取得 所有名稱為 optionBG 的optionBG
                                });
                                //console.log(allOptionBG)
                                var filterSelList = []
                                for(n=0;n<allOptionBG.length;n++){
                                   //     
                                     //  allOptionBG[n].getChildByName('optionSelBtn') .alpha = 0
                                        if( allOptionBG[n].getChildByName('optionSelBtn') .alpha == 0.1){

                                        }else if(allOptionBG[n].getChildByName('optionSelBtn') .alpha == 1){

                                            filterSelList.push(allOptionBG[n].assetType)   

                                        }


                                    }; 

                              // console.log(filterSelList,runtimeState)   
                                var runtimeState = selFilterBtnGrp.assetType
                                var getProjectDataFromDB_RealTime = new getProjectDataFromDBRealTime(scheduleListWin,runtimeState,selprojectTypeFilterBtnGrp.assetType)   

                              //  console.log(uiBaseContainer.children)
                                var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                               // console.log(userNameInput.text)
                                if( userNameInput.text == "登入"){
                                    console.log('未登入帳號，未有選擇執行狀況')
                                    
                                }else{
                                    
                                    var loginUserName = userNameInput.text  
                                    console.log('已登入帳號，讀取選擇執行狀況',loginUserName)
                                    
                                        
                                   $.post("/storeUserFav", {   //runAllAutoEvents
                                            'userName':loginUserName,
                                            'proj_list_filter' :selFilterBtnGrp.assetType,
                                            'proj_type_filter' :selprojectTypeFilterBtnGrp.assetType

                                            }, function(data) {
                                                console.log(data)

                                               // projState.text = data[1][0]
                                               // return_enName.text = data[1][1]

                                    
                                    })

                                    
                                    
                                }
                                
            
            
            
                        });


        selprojectTypeFilterBtnGrp.interactive = true;
        selprojectTypeFilterBtnGrp.buttonMode = true;
        selprojectTypeFilterBtnGrp.on('mousedown', function(){console.log(selprojectTypeFilterBtnGrp)
                                    var allChildren = this.children
                                    var allOptionBG = allChildren.filter(function(item, index, array){
                                            return item.selCheck === 'optionBG'      // 取得 所有名稱為 optionBG 的optionBG
                                    });
                                    //console.log(allOptionBG)
                                    var runtimeState = selFilterBtnGrp.assetType
                                    var filterSelList = []
                                    for(n=0;n<allOptionBG.length;n++){
                                       //     
                                         //  allOptionBG[n].getChildByName('optionSelBtn') .alpha = 0
                                            if( allOptionBG[n].getChildByName('optionSelBtn') .alpha == 0.1){

                                            }else if(allOptionBG[n].getChildByName('optionSelBtn') .alpha == 1){

                                                filterSelList.push(allOptionBG[n].assetType)   

                                            }


                                        }; 
                                                          
                                   console.log(filterSelList,runtimeState)                           
                                                          
                                                              
                                                              
                                                              
                                                              
                                  var getProjectDataFromDB_RealTime = new getProjectDataFromDBRealTime(scheduleListWin,runtimeState,selprojectTypeFilterBtnGrp.assetType)   
                                  
                                   var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                               // console.log(userNameInput.text)
                                    if( userNameInput.text == "登入"){
                                        console.log('未登入帳號，未有選擇執行狀況')

                                    }else{

                                        var loginUserName = userNameInput.text  
                                        console.log('已登入帳號，讀取選擇執行狀況',loginUserName)


                                       $.post("/storeUserFav", {   //runAllAutoEvents
                                                'userName':loginUserName,
                                                'proj_list_filter' :selFilterBtnGrp.assetType,
                                                'proj_type_filter' :selprojectTypeFilterBtnGrp.assetType

                                                }, function(data) {
                                                    console.log(data)

                                                   // projState.text = data[1][0]
                                                   // return_enName.text = data[1][1]


                                        })

                                  
                                    }
                                  
                                })

    
    
    
    
    
};
 */   
/*
function getProjectDataFromDBRealTime(parent,filter,selprojectTypeFilter){
    
    
    console.log('getProjectDataFromDBRealTime',filter,selprojectTypeFilter)   
    
    var duration = 800//days    //顯示區間總天數
    var blockW = 30
   // var blockH = 30
   // console.log(projectsDataDB)

    var toDayMDY = getTodayStringMDY()
    var toDayMs = new Date(toDayMDY).valueOf();  

    var startDayMs = toDayMs - 86400000*400
    
    var pointDaysFromStartDay = (toDayMs - startDayMs)/86400000
    
   var goTodayBtn = new buildBtnScaleC(parent,160,120,60,23,2,'今 日','0xffffff',12,1,'0xffffff',1,1,'secondary')
        goTodayBtn.name = 'goTodayBtn'
    
    
    if(filter == '最近30個專案'){
        var filterType = 'last30'
        var blockH = 30

    }else if(filter =='最近100個專案'){
        var filterType = 'last100'  
        var blockH = 30

             
    }else if(filter == '最近15個專案'){
        var filterType = 'last15'        
        var blockH = 30

     }else if(filter == '全部'){
        var filterType = 'all'        
        var blockH = 30

     }else if(filter == '準備中'){
        var filterType = '準備中'        
        var blockH = 30

     }else if(filter == '執行中'){
        var filterType = '執行中'        
        var blockH = 30

     }else if(filter == '已完成'){
        var filterType = '已完成'        
        var blockH = 30

     }else if(filter == '結案'){
        var filterType = '結案'        
        var blockH = 30

     }else if(filter == '需求日期'){
        var filterType = '需求日期'        
        var blockH = 30

     }else if(filter == '專案開始日期'){
        var filterType = '專案開始日期'        
        var blockH = 30

     }else if(filter == '專案結束日期'){
        var filterType = '專案結束日期'        
        var blockH = 30

     }else if(filter == '我的專案'){
        var filterType = 'myProj'        
        var blockH = 30

     }
     //var allTypeFilter = '未指定'

    
    if(selprojectTypeFilter =="未指定"){
        var projTypeFilterString  = 'all'
    }else if( selprojectTypeFilter == "部門專案"){
        var projTypeFilterString  = 'all'    
             
             
    } else{
        var projTypeFilterString  = selprojectTypeFilter
        
    }
    
    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
    
    if(userNameInput == '登入'){
        var loginUserName =  'none'
    }else{
        var loginUserName = userNameInput.text
    }
    
    
    
    
    $.post("/getProjectsDataFromDB", {   //runAllAutoEvents
        'filter':filterType,
        'projTypeFilterList': projTypeFilterString,
        'loginUserName':loginUserName
        
    }, function(data) {
        
        console.log(data)
        var filterData = data[2]
        var projectCount = filterData.length
        
        
                                //buildProjSchListWin(parent,selApp,name,x,y,w,h,dayBGW,dayBGH,startDayMs,duration,currentDayMs,projData,blockScale,blockColor,fontSize,blockScale)
        var projSchListBG = new buildProjSchListWin(parent,daysApp,'projSchListBG',160,240,duration * blockW, projectCount * (blockH),blockW,blockH,startDayMs,duration,toDayMs,filterData,'0x333333',12)
        
        var projSchListwinBG = projSchListBG[0]
        var daysInfoBlockBGWin = projSchListBG[1]
       // var projSchListwinBG = projSchListBG[2]
        
        goTodayBtn.on('mousedown', function(){console.log('goTodayBtn')
            daysInfoBlockBGWin.pivot.x = (pointDaysFromStartDay-7) * blockW                   
            projSchListwinBG.pivot.x = (pointDaysFromStartDay-7) * blockW                                       
                                         });
   
        
        
    
    });
   
};
*/

    
//專案編輯視窗   
function buildProjectEditWin(parent,x,y,w,h,searchID){
   
    console.log('buildProjectEditWin')
    parent.removeChild(parent.getChildByName("projectEditWin_container"))
    // 專案選擇 底層可移動視窗
    
    var chiefArtistList = JSON.parse(window.localStorage.getItem("chiefArtistList"));

    var imList = JSON.parse(window.localStorage.getItem("imList"));
    var designerList = JSON.parse(window.localStorage.getItem("designerList"));
    var projectTypeList = JSON.parse(window.localStorage.getItem("projectTypeList"));
    

     
        

     
    
    //console.log(getData)
    
    
    var projectEditWin = new moveAbleWinBlock(uiBaseContainer,x,y,w,h,'專案編輯',20,20,14,'0xffffff','projectEditWin_container',1,'0x888888',2,'0x888888',1,1,'0x334444',daysApp,screenW,screenH,true)
        projectEditWin.name = 'projectEditWin_container'


   
    

    var ProjectImagePreviewWin = new buildSimpletBlock(projectEditWin,0,30,w,100,1,'0x333333',1)
        ProjectImagePreviewWin.name = 'ProjectImagePreviewWin'
 
    var myFavSetBtn = new insertHeartIcon(ProjectImagePreviewWin,20,20,1)
                            //buildSimpletBlock(parent,x,y,w,h,blockScale,blockColor,blockScale)
 
    
    var ProjectInfoWin = new buildSimpletBlock(projectEditWin,0,30+ProjectImagePreviewWin.height +2,w,550,1,'0x555555',1)
        ProjectInfoWin.name = 'ProjectInfoWin'
      
    var ProjectStateWin = new buildSimpletBlock(projectEditWin,0,30+ProjectImagePreviewWin.height +2 + ProjectInfoWin.height +2,w,210,1,'0x556666',1)
        ProjectStateWin.name = 'ProjectStateWin'
 
    var newProj_searchID_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,10,70,210,3,'ID:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        newProj_searchID_InputBox.text = 'ID' 
        newProj_searchID_InputBox.disabled = true 
    
    var newProjEN_name_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,40,70,210,3,'英文名稱:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        newProjEN_name_InputBox.text = 'project English name'
        newProjEN_name_InputBox.disabled = true 

    var newProjCH_name_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,70,70,210,3,'中文名稱:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        newProjCH_name_InputBox.text = '專案中文名稱' 
    
    
      
    var startDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,100,70,210,3,'起始日期:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        startDay_InputBox.disabled = true
    
    
    
     
    
    var endDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,130,70,210,3,'結束日期:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // endDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        endDay_InputBox.disabled = true

    
        startDay_InputBox.interactive = true;
        startDay_InputBox.buttonMode = true;
        startDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                                   var posX = x -470
                                                    var posY = y + 10

                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,posX, posY, 600,800,startDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})


        endDay_InputBox.interactive = true;
        endDay_InputBox.buttonMode = true;
        endDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                                  var posX = x -470
                                                    var posY = y + 10

                                                   var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,posX, posY, 600,800,endDay_InputBox)

                                          })
                        .on('pointerup', function(){this.alpha=1;})

    
    
    
    
    
    
    var chiefArtistSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,10,160,70,210,3,'主 美:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        chiefArtistSel_inputBox.text = "未選擇"
        chiefArtistSel_inputBox.disabled = true

        chiefArtistSel_inputBox.interactive = true;
        chiefArtistSel_inputBox.buttonMode = true;
        chiefArtistSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;

                                                   buildSelectionWin(uiBaseContainer,x-600,50,600,800,'選擇主美',chiefArtistList,chiefArtistSel_inputBox,false)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})



    
    
    
 
    var IMSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,10,190,70,210,3,'IM:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        IMSel_inputBox.text = "未選擇"
        IMSel_inputBox.disabled = true
        IMSel_inputBox.interactive = true;
        IMSel_inputBox.buttonMode = true;

        IMSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                                buildSelectionWin(uiBaseContainer,x-600,50,600,800,'選擇IM',imList,IMSel_inputBox,false)

                                              })
                    .on('pointerup', function(){this.alpha=1;})

    var desinerSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,10,220,70,210,3,'企 劃:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        desinerSel_inputBox.text = "未選擇"
        desinerSel_inputBox.disabled = true
        desinerSel_inputBox.interactive = true;
        desinerSel_inputBox.buttonMode = true;

        desinerSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                              buildSelectionWin(uiBaseContainer,x-600,50,600,800,'選擇企劃',designerList,desinerSel_inputBox,false)
                                              })
                    .on('pointerup', function(){this.alpha=1;})   

  
    var projectTypeSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,10,250,70,210,3,'專案類型:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        projectTypeSel_inputBox.text = "未選擇"
        projectTypeSel_inputBox.disabled = true
        projectTypeSel_inputBox.interactive = true;
        projectTypeSel_inputBox.buttonMode = true;

        projectTypeSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                              buildSelectionWin(uiBaseContainer,x-600,50,600,800,'選擇專案類型',projectTypeList,projectTypeSel_inputBox,false)
                                              })
                    .on('pointerup', function(){this.alpha=1;})   
    
    var projDesc_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,280,70,210,3,'專案描述:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        projDesc_InputBox.text = '專案描述' 
    
    
    
    
    
    
    var audioRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,320,70,210,3,'AU 需求:','',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        audioRequestDay_InputBox.disabled = true
    
        
        audioRequestDay_InputBox.interactive = true;
        audioRequestDay_InputBox.buttonMode = true;
        audioRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                                   var posX = x -470
                                                    var posY = y + 10

                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,posX, posY, 600,800,audioRequestDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    var CFRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,350,70,210,3,'CF 需求:','',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        CFRequestDay_InputBox.disabled = true
    
        CFRequestDay_InputBox.disabled = true
    
        
        CFRequestDay_InputBox.interactive = true;
        CFRequestDay_InputBox.buttonMode = true;
        CFRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                                   var posX = x -470
                                                    var posY = y + 10

                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,posX, posY, 600,800,CFRequestDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    var zipDataRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,380,70,210,3,'封包 需求:','',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        zipDataRequestDay_InputBox.disabled = true
    
            
        zipDataRequestDay_InputBox.interactive = true;
        zipDataRequestDay_InputBox.buttonMode = true;
        zipDataRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                                   var posX = x -470
                                                    var posY = y + 10

                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,posX, posY, 600,800,zipDataRequestDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    
        
    
    var alphaTestDataRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,410,70,210,3,'上線 需求:','',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        alphaTestDataRequestDay_InputBox.disabled = true
                  
        alphaTestDataRequestDay_InputBox.interactive = true;
        alphaTestDataRequestDay_InputBox.buttonMode = true;
        alphaTestDataRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                                   var posX = x -470
                                                    var posY = y + 10

                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,posX, posY, 600,800,alphaTestDataRequestDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    
 //   var projState_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,440,70,210,3,'專案狀態:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
     //   projState_InputBox.text = '準備中' 
    //    projState_InputBox.disabled = true
    

    var selProjStateOptionBtnGrp = new inputBoxWithLabel(ProjectInfoWin,10,440,70,210,3,'專案狀態:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        selProjStateOptionBtnGrp.text = "未選擇"
        selProjStateOptionBtnGrp.disabled = true
        selProjStateOptionBtnGrp.interactive = true;
        selProjStateOptionBtnGrp.buttonMode = true;

        selProjStateOptionBtnGrp.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                              // buildSelectionWinB(parent,x,y,w,h,tapeText,dataList,returnInputBox)
                                                buildSelectionWinB(uiBaseContainer,x-600,50,600,150,'專案狀態',['準備中','進行中','已完成','結案'],selProjStateOptionBtnGrp)

                                              })
                    .on('pointerup', function(){this.alpha=1;})

    

                                                           // projectSelectWin.projType = selProjStateOptionBtnGrp.assetType
                                                           /// var toSelIndexNUm =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[0]
                                                          //  var sortedProjectList =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[1]

                                                           // var showListArea = new getProjList(projectSelectWin,0,0,w,h,sortedProjectList, projectSelectWin.previewType,projectSelectWin.projType,projectSelectWin.sortFilter,0,toSelIndexNUm)


                                                          
                                                    
    
    
    
   
    //buildInputBoxBtn(parent,x,y,w,h,fontSize,btnText,fontColor,type)
    var editProjBtn = new buildInputBoxBtn(ProjectInfoWin,10,500,100,20,11,'確認編輯','0xffffff','white_outline')

    
    
            editProjBtn.on('mousedown', function(){
                      //  console.log(this)   
                                 //     moveAbleConfirmBlock(parent,x,y,w,h,labelText,fontSize,fontColor,containerName,borderRect,FillAlpha,selApp,screenW,screenH)
                        var editUserConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'確 認 編 輯 視 窗','確認專案: '+newProjEN_name_InputBox.text +' 儲存修改',14,'0x000000','userEdirConfirmWin_container',5,1,daysApp,screenW,screenH)    
                        var editUserConfirmWinBK = editUserConfirmWin[0]
                        var confirmBtn = editUserConfirmWin[1]
                       // console.log(editUserConfirmWin)
                        editUserConfirmWinBK.x = editUserConfirmWinBK.x - 150
                        editUserConfirmWinBK.y = editUserConfirmWinBK.y - 100

                        confirmBtn.on('mousedown', function(){
                                        //console.log(this)
                            
                                        saveProjectEditToDB(newProj_searchID_InputBox.text,newProjEN_name_InputBox.text,newProjCH_name_InputBox.text,startDay_InputBox.text,endDay_InputBox.text,chiefArtistSel_inputBox.text,IMSel_inputBox.text,desinerSel_inputBox.text,projectTypeSel_inputBox.text,projDesc_InputBox.text,audioRequestDay_InputBox.text,CFRequestDay_InputBox.text,zipDataRequestDay_InputBox.text,alphaTestDataRequestDay_InputBox.text,selProjStateOptionBtnGrp.text)
                                    })

    
            
            
            
                        })
    
    
    
    var addTasKBtn = new buildInputBoxBtn(ProjectInfoWin,180,500,100,20,11,'New Task','0xffffff','white_outline')
       .on('mousedown', function(){
            console.log('press add task')
                var winW = 400
                var winH = 500
           
                var projectSelWin_container = uiBaseContainer.getChildByName("projectSelWin_container")
               // projectSelWin_container.buttonMode = false
                         //  projectSelWin_container.renderable = false

                              // console.log(projectSelWin_container)
                var projectEN_name = newProjEN_name_InputBox.text
                var projectCH_name = newProjCH_name_InputBox.text
                var project_SearchID = newProj_searchID_InputBox.text

                var openAddTasktWin  =  new buildAddTaskWin(uiBaseContainer,screenW/2-winW/2, screenH/2-winH/2,winW,winH,projectEN_name,projectCH_name,project_SearchID)
           
                openAddTasktWin.interactive = true;

           
            })
    //getSelectProjectDataFromDB(searchID,return_searchID,return_enName,return_chName,return_stDay,return_edDay,return_chiefArtist,return_im,return_designer,return_projType,return_projDesc){

    getSelectProjectDataFromDB(searchID,newProj_searchID_InputBox,newProjEN_name_InputBox,newProjCH_name_InputBox,startDay_InputBox,endDay_InputBox,chiefArtistSel_inputBox,IMSel_inputBox,desinerSel_inputBox,projectTypeSel_inputBox,projDesc_InputBox,audioRequestDay_InputBox,CFRequestDay_InputBox,zipDataRequestDay_InputBox,alphaTestDataRequestDay_InputBox,selProjStateOptionBtnGrp)  //source  from callDataFromDB

    
    
    
    var projWorkDays_InputBox = new inputBoxWithLabel(ProjectStateWin,10,10,80,100,3,'工作日數:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        projWorkDays_InputBox.text = '工作日數' 
        projWorkDays_InputBox.disabled = true
    
    var projWorkMenHours_InputBox = new inputBoxWithLabel(ProjectStateWin,10,40,80,100,3,'總人力工時:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        projWorkMenHours_InputBox.text = '人力工時' 
        projWorkMenHours_InputBox.disabled = true
    
    var projTaskList_InputBox = new inputBoxWithLabel(ProjectStateWin,10,70,80,100,3,'Task 總數:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        projTaskList_InputBox.text = 'Task 清單' 
        projTaskList_InputBox.disabled = true
    
    var projUsersList_InputBox = new inputBoxWithLabel(ProjectStateWin,10,100,80,100,3,'人員清單:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        projUsersList_InputBox.text = '人員清單' 
        projUsersList_InputBox.disabled = true
    
    var projState_InputBox = new inputBoxWithLabel(ProjectStateWin,10,130,80,100,3,'專案狀態:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        projState_InputBox.text = '準備中' 
        projState_InputBox.disabled = true
    

                         
    
    
    //insertHeartIcon(parent,x,y,scale)
      /* 
    
    var createNewProjBtn = new buildBtnScaleA(projectAddWin,20,480,120,30,'新增專案','secondary outline')
        createNewProjBtn.name = 'createNewProjBtn'
        createNewProjBtn.on('mousedown', function(){
                            console.log('press新增專案')
                            var newProjEN_Name = newProjEN_name_InputBox.text
                            var newProjCH_Name = newProjCH_name_InputBox.text
                            var newProj_startDay = startDay_InputBox.text
                            var newProj_endDay = endDay_InputBox.text
                            var newProj_chiefArtist = chiefArtistSel_inputBox.text
                            var newProj_IM = IMSel_inputBox.text
                            var newProj_designer = desinerSel_inputBox.text
                            var newProj_type = projectTypeSel_inputBox.text
                            var newProj_desc = newProjDesc_InputBox.text
                           // console.log(newProjEN_Name,newProjCH_Name,newProj_startDay,newProj_endDay,newProj_chiefArtist,newProj_IM,newProj_designer,newProj_type)

                                       
                                 
                             $.post("/addNewProjectTODB", {
                                    'newProjEN_Name': newProjEN_Name,
                                    'newProjCH_Name': newProjCH_Name,
                                    'newProj_startDay': newProj_startDay,
                                    'newProj_endDay': newProj_endDay,
                                    'newProj_chiefArtist': newProj_chiefArtist,
                                    'newProj_IM': newProj_IM,
                                    'newProj_designer': newProj_designer,
                                    'newProj_type': newProj_type,
                                    'newProj_desc': newProj_desc
                                    },
                                    function(data) {
                                        console.log("feedback", data)
                                 
                                        var errMsg = data[0]
                                        if(errMsg == 'the same name'){
                                            console.log('asdsadsadsad')
                                            errMsgBox.text = '已有同樣名稱專案，請改其他名稱'
                                        }
                   
                                        })
                            errMsgBox.text = '新增專案' + newProjEN_Name + "完成"
                            });   

    
    */

};
    
  
//專案選擇列表B
function buildPorjSelWinB(parent,selApp,x,y,w,h,userPrefSet,allProjectList,containerName){
    
    parent.removeChild(parent.getChildByName(containerName))   

    
    var chiefArtistList = JSON.parse(window.localStorage.getItem("chiefArtistList"));

    var imList = JSON.parse(window.localStorage.getItem("imList"));
    var designerList = JSON.parse(window.localStorage.getItem("designerList"));
    var projectTypeList = JSON.parse(window.localStorage.getItem("projectTypeList"));
    var userFavProjDB = JSON.parse(window.localStorage.getItem("userFavProjDB"));
    var userFavTaskDB = JSON.parse(window.localStorage.getItem("userFavTaskDB"));

   // var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
    console.log('allProjectList',allProjectList)
    console.log('userPrefSet',userPrefSet)
    console.log('userPrefSet',userFavProjDB)
    console.log('userPrefSet',userFavTaskDB)

    var projectSelectWin = new moveAbleWinBlockB(uiBaseContainer,x,y,w,h,'專案列表',20,20,15,'0xaaddff',containerName,1,'0x2c697f',5,'0x8ae0fe',0.2,0.2,1,'0x2c697f',daysApp,screenW,screenH,true)
        projectSelectWin.name = containerName
    
    
    var addBtnA = new addBtnWithIcon(projectSelectWin,13,42,50,50,5,'0x2a3b50','0x85b4b3',1 ) //buildProjectAddWin

    var filterBtnA = new filterBtnWithIcon(projectSelectWin,220,42,50,50,5,'0x2a3b50','0x85b4b3',1 )

    var myProjCount = userFavProjDB.length
    
    var teamProjCount = 0 

    var allProjCount = allProjectList.length
    
    var projBKH = 40
    
    var dragBKH = 740
    
    var totalProjCount = myProjCount + teamProjCount + allProjCount
    var dragHeight = totalProjCount * projBKH + 20*3 + 50

    var projListBGWin = new addWinBlock(projectSelectWin,0,60,w,dragHeight,'',0,0,12,'0xffffff','projListBGWin_container',0,'0xff0000',1,'0x00ff00',0,0.0)
    
    var projListBGWinMask = new addWinBlock(projectSelectWin,0,60,w+200,dragBKH,'',0,0,12,'0xffffff','projListBGWin_container',0,'0xff0000',1,'0xffff00',0,1)
        projListBGWin.mask = projListBGWinMask
    
    
    if (myProjCount == 0){ var myProjBtnH = 0 ; var myProjScale = 0 ;var myProjBtnSpace = 0  }else{ var myProjBtnH = 20;var myProjScale = 1;var myProjBtnSpace = 40};
    
    
    
    // 我的專案列表
    var myProjBtn = new buildBtnScaleD(projListBGWin,2,5,w-4,myProjBtnH,2,'My Project','0xb0feff',12,1,'0xb0feff',0.5,1,myProjCount,'0x111111',12,'0x31748b',myProjScale)
    for(var i = 0 ; i < myProjCount; i++){
        
        var myProjID =  userFavProjDB[i][0]
        var myProjName_EN = userFavProjDB[i][1]
        var myProjName_CH = userFavProjDB[i][2]
        var projType = userFavProjDB[i][8]

      //  console.log(projType)
        var posX = 5
        var poxY = myProjBtn.y +25 + i * projBKH
        var projBlock = new buildProjSelBlock(projListBGWin,posX,poxY,290,projBKH-2,5,'0xffffff',10,'0xff0000',1,'0xc3d59f',0,1,myProjName_EN,'0x123456',14,myProjName_CH,myProjID,projType,1)
   
    };
    
    
    
    
    
    
    if (teamProjCount == 0){ var teamProjBtnH = 0 ; var teamProjBtnScale = 0 ;var teamProjBtnpace = 0  }else{ var teamProjBtnH = 20; var teamProjBtnScale = 1;var teamProjBtnpace = 30};

    var teamProjBtn = new buildBtnScaleD(projListBGWin,2,  myProjBtn.y +  (myProjCount)*40 + myProjBtnSpace,w-4,teamProjBtnH,2,'Team Project','0xb0feff',12,1,'0xb0feff',0.5,1,teamProjCount,'0x111111',12,'0x31748b',teamProjBtnScale)
     
    // 全部專案列表

    var allProjBtn = new buildBtnScaleD(projListBGWin,2, teamProjBtn.y + (teamProjCount)*40 + teamProjBtnpace ,w-4,20,2,'All Project','0xb0feff',12,1,'0xb0feff',0.5,1,allProjCount,'0x111111',12,'0x31748b',1)
    
    
    
    
    
    for(var i = 0 ; i < allProjCount; i++){
        
       // console.log(allProjectList[i])
        var projID =  allProjectList[i][0]

        var projName_EN = allProjectList[i][1]
        var projName_CH = allProjectList[i][2]
        var projType = allProjectList[i][8]
        var posX = 5
        var poxY = allProjBtn.y + 25 + i * projBKH 
       
        var projBlock = new buildProjSelBlock(projListBGWin,posX,poxY,290,projBKH - 2,5,'0xffffff',10,'0xff0000',1,'0x83a5bd',0,1,projName_EN,'0x123456',14,projName_CH,projID,projType,0.1)
   
    };
    
    
    
    
    
    
    
    projListBGWin.interactive = true;
    projListBGWin
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
    
   // console.log('dayBGH',dayBGH)
    //if(dayBGH == 30){ var dragHeight  = 450 }else if(dayBGH == 20){ var dragHeight  = 599}
    
    
    
  //  var projListBGWinMask = new addWinBlock(projectSelectWin,700,60,w,dragHeight,'',0,0,12,'0xffffff','projListBGWin_container',0,'0xff0000',1,'0x00ffff',0,1)

    
    function onDragStart(event) {
      //  console.log('onDragStart','x:',this.x,'y:',this.y,'px',this.pivot.x,'py',this.pivot.y,'w',this.width,'h',this.height)
      //  console.log('dragHeight',dragHeight)

        this.data = event.data;
        //this.alpha = 0.5;
        this.dragging = true;
        
        var mouseposition = selApp.renderer.plugins.interaction.mouse.global;

      //  this.posY = this.y
        this.startPosX = this.x

        this.startPosY = this.y
        this.startPivotX = this.pivot.x
        this.startPivotY = this.pivot.y

      //  this.pivot.x = this.x //(this.x-mouseposition.x)/2
       // this.pivot.y =  //(this.y-mouseposition.y)/2

        this.mouseStartPosX = mouseposition.x

        this.mouseStartPosY = mouseposition.y
       // console.log(this)

      //  console.log(this.startPosX ,this.startPosY )
        
       // console.log(mouseposition.x ,mouseposition.y )

    };
    
    
    addBtnA.on('mousedown', function(){
                            console.log('press新增專案')
                            var addProjWin = new buildProjectAddWinC(uiBaseContainer,300,300,500,800)      
                            
                            console.log(uiBaseContainer)
                            
                            //buildProjectAddWinC
                            })
                                       
                                 
                           
    
    

    function onDragEnd() {

        this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;

        if( this.pivot.x <= 0){  
            this.pivot.x = 0
          //  daysInfoBlockBGWin.pivot.x = 0
        }else if(this.pivot.x > (this.width -1530)){


        };
        
        
        
        
        
        if( this.pivot.y < 0){
                   // this.pivot.x = this.startPivotX + (mouseposition.x -this.mouseStartPosX)  
                 //   console.log('aaaaaaaaa')
                    this.pivot.y = 0
            
        }else if(this.pivot.y > (this.height - dragBKH)){
             if(totalProjCount <=15){
            
                this.pivot.y = 0

             }else{
                 
               this.pivot.y = this.height - dragBKH

             
                 
             }
                  

       
        }
        
        

        
    };
    
    function onDragMove() {
       
        if (this.dragging) {

            var mouseposition = selApp.renderer.plugins.interaction.mouse.global;


            
            if(Math.abs(mouseposition.x -this.mouseStartPosX) >= Math.abs(mouseposition.y -this.mouseStartPosY) ){
                if( this.pivot.x < 0){

                    this.pivot.x = 0
                }else if(this.pivot.x > (this.width -1530)){

  
                }else{

 

                }

                
            }else{
    
                if( this.pivot.y < 0){
                    this.pivot.y = 0
                  //  console.log('up')

     
                }else if(this.pivot.y > (this.height - dragBKH)){  //dragHeight
                  //  console.log('down')
                    this.pivot.y =this.height - dragBKH//dayBGH*projectCount

                }else{
                   // this.pivot.x = this.startPivotX + (mouseposition.x -this.mouseStartPosX)  
                   this.pivot.y = this.startPivotY + (mouseposition.y -this.mouseStartPosY)   
                  // projLabelBlockWin.pivot.y = this.startPivotY + (mouseposition.y -this.mouseStartPosY)   

                }
                
                
            }
    
        }
        
    };

    

    
    
};


//專案選擇列表C
function buildPorjSelWinC(parent,selApp,x,y,w,h,userPrefSet,projectList,containerName,mode){
    console.log('buildPorjSelWinC',mode)
    parent.removeChild(parent.getChildByName(containerName))   

    
    var chiefArtistList = JSON.parse(window.localStorage.getItem("chiefArtistList"));
    // im 清單讀取
    var imList = JSON.parse(window.localStorage.getItem("imList"));
    // 企劃 清單讀取
    var designerList = JSON.parse(window.localStorage.getItem("designerList"));
    
    // 專案類型 清單讀取
    var projectTypeList = JSON.parse(window.localStorage.getItem("projectTypeList"));
    // user專案 清單讀取
    var userFavProjDB = JSON.parse(window.localStorage.getItem("userFavProjDB"));
    // user任務 清單讀取
    var userFavTaskDB = JSON.parse(window.localStorage.getItem("userFavTaskDB"));
   // console.log(userData) 
    
    
    
    if(mode == 'all'){
        var projectList = JSON.parse(window.localStorage.getItem("allProjectList"));

        console.log(allProjectList)

    }else if(mode == 'dept'){
            var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
 
                                   
            var selUserDB = JSON.parse(window.localStorage.getItem("selUserDB"));
            var userData = JSON.parse(window.localStorage.getItem("userData"));
                                   // console.log(userData) 

                                  //  console.log(selUserDB) 

            var deptUserList = userData.filter(function(item, index, array){
                                        return item[38] == selUserDB[38]
                });    
                                    
                                    console.log(deptUserList) 
                                    
            var allDeptUserNameList = []
            for(var i = 0 ; i<deptUserList.length; i++){
                allDeptUserNameList.push(deptUserList[i][2])  

                }

                                    
             var projectList = allProjectList.filter(function(item, index, array){
                //return item[5] in ['貓頭','阿麵','逸倫','gaga','alpha','sandy']

                return allDeptUserNameList.includes(item[5])


            }); 
        
            console.log(projectList)
             
             
    };
    

    var btnWidth = 68
    var btnHeight = 19

    var projectSelectWin = new moveAbleWinBlockB(uiBaseContainer,x,y,w,h,'專案列表',20,20,15,'0xaaddff',containerName,1,'0x2c697f',5,'0x8ae0fe',0.2,0.2,1,'0x2c697f',daysApp,screenW,screenH,true)
        projectSelectWin.name = containerName
    
    
  //  var addBtnA = new addBtnWithIcon(projectSelectWin,20,43,40,40,5,'0x2a3b50','0x85b4b3',0.8 ) //buildProjectAddWin
    var addProjBtnA = new buildBtnScaleC(projectSelectWin,210,35,btnWidth,btnHeight,3,'新增專案','0xffffff',12,1,'0x234a5a',1,1,'0x337676')

  //  var filterBtnA = new filterBtnWithIcon(projectSelectWin,220,42,50,50,5,'0x2a3b50','0x85b4b3',1 )

   // var myProjCount = userFavProjDB.length
    
   // var teamProjCount = 0 
    /*
        addBtnA.on('mousedown', function(){
                            console.log('press新增專案')    
            
                            var addProjWin = new buildProjectAddWinC(uiBaseContainer,300,300,500,800)      
                            
                          //  console.log(uiBaseContainer)
                            
                            //buildProjectAddWinC
                            })
   */
        addProjBtnA.on('mousedown', function(){
                            console.log('press 新增專案 B')
                           // var addProjWin = new buildProjectAddWinC(uiBaseContainer,300,300,500,800)      
                            console.log(uiBaseContainer)
                            console.log(winList)
            
                          //  uiBaseContainer.removeChild(uiBaseContainer.getChildByName("btnBase"))   

                           // uiBaseContainer.removeChild(uiBaseContainer.getChildByName("projectSelWin_container"))   
                           // uiBaseContainer.removeChild(uiBaseContainer.getChildByName("projectEditWin_container"))   
                           // uiBaseContainer.removeChild(uiBaseContainer.getChildByName("taskScheduleListWin_container"))   
                                for(var item in winList ){
                                                  //  console.log(winList[item])
                                        if( winList[item] == 'projectSelWin_container'){}else{uiBaseContainer.removeChild(uiBaseContainer.getChildByName(winList[item]))}
                                };       

                            var addProjWin = new buildProjectAddWinC(uiBaseContainer,350,40,500,800)      

                            
                            //buildProjectAddWinC
                            })
        /*
        filterBtnA.on('mousedown', function(){
                            console.log('點選專案過濾器')
                            
                                                        
                            var winW = 180
                            var projFilterLst = ['All','My']
                            
                            for(var i = 0; i < projectTypeList.length ; i++){
                                projFilterLst.push(projectTypeList[i])  
                                
                            }
                            
                            var winH =( projFilterLst.length + 1) *25 + 70

                          //  var projTypeSelWin = new moveAbleWinBlockF(uiBaseContainer,350,40,winW,winH,'專案類型選擇',20,20,13,'0xffffff','projTypeSelWin_container',1,'0x2a3b50',2,'0x2a3b50',1,1,'0x2a3b50',daysApp,screenW,screenH,true)    
                              
                            //moveAbleWinBlock(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,winTapeColor,selApp,screenW,screenH,closeBtn)
                        //   var openDaysSelWin  = new projFillterSel(projTypeSelWin,0,0,winW,winH,'任務類型',projFilterLst,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,false,false)
                                             
                            // buildOptionSelectWinC(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,optionBK_width,itemPreList,optionBGBlockStartPosY,optionBlockHeight,barPosX,selApp,autoClose,userSelect)                
                                             


                          //  projTypeSelWin.interactive = true; 
                            
                            
                            })
        */
       
    
    // 類型按鈕 all my + projFilterLst start ---------------------------------------------------
    var projFilterLst = ['All','My']
    var itemPreList = 4 //每列幾個選項
    for(var i = 0; i < projectTypeList.length ; i++){
        projFilterLst.push(projectTypeList[i])  

    };
    
    for(var i = 0; i< projFilterLst.length ; i++){
      //  console.log(dataList) 
       

        var btnText = projFilterLst[i]
        var btnPosX  =(i%itemPreList)*btnWidth +5
        //userSelectBK.children[3].pivot.x = -optionBK_width/2  + userSelectBK.children[3].width/2  
      //  userSelectBK.children[3].x =userNameBK_Width/2
        var btnPosY = 61 + Math.floor(i/itemPreList)*btnHeight//+ optionBGBlockStartPosY
       // userSelectBK.disabled = true
       // projectSelectWin.addChild(userSelectBK)
        
       // buildBtnScaleC(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type)
        var filterBtn = new buildBtnScaleC(projectSelectWin,btnPosX,btnPosY,btnWidth,btnHeight,3,btnText,'0xffffff',11,1,'0x234a5a',1,1,'0x668686')
        filterBtn.name = 'projFilterBtn'
        filterBtn.btnText = btnText
   
        filterBtn.interactive = true;
        filterBtn.buttonMode = true;
      //  console.log(userSelectBK.height)
        filterBtn.on('pointerover', function(){this.alpha = 0.2;})
                            .on('pointerout', function(){this.alpha =1;})
                            .on('mousedown', function(){
                                this.alpha = 1
                               // this.tint = '0xff0000'
                                //找出所有過濾按鈕
                                var projFilterBtnList = this.parent.children.filter(function(item, index, array){
                                        return item['name'] == "projFilterBtn"
                                    });    
                                
                                console.log(projFilterBtnList)
                                //所有過濾按鈕顏色回復
                                for(var i = 0 ; i <projFilterBtnList.length ; i++){
                                    projFilterBtnList[i].tint = '0xffffff'    
                                    
                                };
            
                                //所選過濾按鈕顏色設定
            
     
        
            
            

                                this.tint = '0x33aaff'

                                var filterKey = this.btnText
                                console.log(filterKey)
                                var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
                                 console.log(allProjectList)
                        
                                //依照起始日期排列
                                /*
                                allProjectList.sort(function(a, b) {
                                      var keyA = new Date(a.updated_at),
                                          keyB = new Date(b.updated_at);
                                      // Compare the 2 dates
                                      if (keyA < keyB) return -1;
                                      if (keyA > keyB) return 1;
                                      return 0;
                                });

                                */
            
                                
                                if(filterKey == 'All'){
                                    var filterProjsList =  allProjectList  
                                }else if(filterKey == 'My'){
                                             
                                }else if(filterKey == '部門專案'){
                                        console.log('部門專案') 
                                    
                                    
                                    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                    if(userNameInput.text == '未登入'){
                                        var loginUserName = 'none'
                                        var filterProjsList =  allProjectList  
                                            errMsgBox.text = "請先登入"

                                       // var projSelWin = new buildPorjSelWinC(uiBaseContainer,daysApp,40,40,300,800,userPrefSet,allProjectList,'projectSelWin_container','all')

                                    }else{
                                        var loginUserName = userNameInput.text 

                                        var selUserDB = JSON.parse(window.localStorage.getItem("selUserDB"));
                                        var userData = JSON.parse(window.localStorage.getItem("userData"));
                                       // console.log(userData) 

                                      //  console.log(selUserDB) 

                                        var deptUserList = userData.filter(function(item, index, array){
                                            return item[38] == selUserDB[38]
                                        });    

                                        console.log(deptUserList) 

                                        var allDeptUserNameList = []
                                        for(var i = 0 ; i<deptUserList.length; i++){
                                            allDeptUserNameList.push(deptUserList[i][2])  

                                        }


                                         var filterProjsList = allProjectList.filter(function(item, index, array){
                                            //return item[5] in ['貓頭','阿麵','逸倫','gaga','alpha','sandy']

                                            return allDeptUserNameList.includes(item[5])


                                        }); 
                                        
                                       // var projSelWin = new buildPorjSelWinC(uiBaseContainer,daysApp,40,40,300,800,userPrefSet,allProjectList,'projectSelWin_container','dept')

                                    };

                                    
                                    
                                    
    
                                   // console.log(allProjectList) 

                                   // console.log(filterProjsList) 

                                    
                                }else{
                                    var filterProjsList = allProjectList.filter(function(item, index, array){
                                        return item[8] == filterKey
                                    });    
                                }
                        
            
                                var projSelBKGroup = new buildProjSelWinA(projectSelectWin,0,0,w,h,filterProjsList,selApp)

                                console.log(projectSelectWin)

                                })
                            .on('pointerup', function(){this.alpha = 1;})   
        
       
        
        
        
        
    };    
    // 類型按鈕 all my + projFilterLst  end -------------------------------------------------------------------
    
    var projSelBKGroup = new buildProjSelWinA(projectSelectWin,0,0,w,h,projectList,selApp)
    

    
};


function buildProjSelWinA(parent,x,y,w,h,projectList,selApp){
    
    parent.removeChild(parent.getChildByName('projListBGWin_container'))   
    parent.removeChild(parent.getChildByName('barBGBlock'))   

    
    var projCount = projectList.length
    
    console.log('buildProjSelWinA')
    
    var projBKH = 40
    
    var dragBKH = 700
    
    var projWinTopPosY = 100
    
    if(projCount < 19){ var blockWidth = 285 }else{var blockWidth = 270}
    
    console.log(blockWidth)

    var dragHeight = projCount * projBKH + 20*3 + 50   
    
    var projListBGWin = new addWinBlock(parent,0,projWinTopPosY,w,dragHeight,'',0,0,12,'0xffffff','projListBGWin_container',0,'0xff0000',1,'0x00ff00',0,0.0)
    
    var projListBGWinMask = new addWinBlock(parent,0,projWinTopPosY,w+200,dragBKH,'',0,0,12,'0xffffff','projListBGWinMask_container',0,'0xff0000',1,'0xffff00',0,1)
        projListBGWin.mask = projListBGWinMask
    console.log(parent)   
    var barOutlineHeight = 700
   // var dragBarHeight
    if( projCount < 19   ){
        var dragBarHeight = barOutlineHeight -2
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( projCount * projBKH))*barOutlineHeight
        
    };
        
    for(var i = 0 ; i < projCount; i++){
        
       // console.log(allProjectList[i])
        var projID =  projectList[i][0]

        var projName_EN = projectList[i][1]
        var projName_CH = projectList[i][2]
        var projType = projectList[i][8]
        var posX = 5
        var poxY =  i * projBKH 
       
        var projBlock = new buildProjSelBlock(projListBGWin,posX,poxY,blockWidth,projBKH - 2,5,'0xffffff',10,'0xff0000',1,'0x83a5bd',0,1,projName_EN,'0x123456',14,projName_CH,projID,projType,0.1)
   
    };
    

    
    var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0x223344',0.7);
        barBGBlock.drawRoundedRect(0,0, 15,barOutlineHeight, 2);
        barBGBlock.endFill();      
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = 281
        barBGBlock.y = 100
        parent.addChild(barBGBlock)
    
    var dragBar =  new PIXI.Graphics(); //asset 主視窗
        dragBar.lineStyle(1, '0xffffff', 0);
        dragBar.beginFill('0x88ffff',0.3);
        dragBar.drawRoundedRect(0,0, 13,dragBarHeight, 2);
        dragBar.endFill();
        dragBar.name = 'optionBGBlock'
        dragBar.x = 1//barPosX
        dragBar.y = 1//optionBGBlockStartPosX
        barBGBlock.addChild(dragBar)
    
    var dragBarMask = new PIXI.Graphics(); //asset 主視窗
        dragBarMask.lineStyle(0.5, '0x88ffff', 0);
        dragBarMask.beginFill('0xffffff',1);
        dragBarMask.drawRoundedRect(0,0, 15,barOutlineHeight, 2);
        dragBarMask.endFill();      
        dragBarMask.name = 'dragBarMask'
        dragBarMask.x = 281
        dragBarMask.y = 100
        parent.addChild(dragBarMask)
        dragBar.mask = dragBarMask
    

   if( projCount < 18  ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
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

    }
    

    
    
    function onDragMove(e) {
        if(this.dragging == true){

            this.data = e.data;
           // console.log(this.position.y,this.getBounds().height)
            
            
            var newPosition =  selApp.renderer.plugins.interaction.mouse.global//this.data.getLocalPosition(this.parent);
            var deltaY = newPosition.y -  this.deltaPosY
          //  console.log(newPosition.y,this.deltaPosY,deltaY)
            if(deltaY < 1){
                
                if(this.position.y < 1 ){
                 //   console.log('aaaaaa')
                    this.y = 1     
                    projListBGWin.position.y = projWinTopPosY  // 專案列表 回到最上方
                  //  console.log(projListBGWin.getBounds())
                }else{
                 //   console.log('bbbbbb')

                  this.y = newPosition.y - this.deltaPosY;    
                //  projListBGWin.position.y = 60 - projListBGWin.height * (deltaY/739)
                }

                
            }else{
                
                if(this.position.y + this.getBounds().height > (barOutlineHeight-1)) {
                  // console.log('33333333333')

                    //this.y = 739 -  this.getBounds().height        
                    //projListBGWin.position.y = 60 + projListBGWin.height-739
                }else{
                    
                  // console.log('44444444444444444',deltaY) 
                    this.y = newPosition.y - this.deltaPosY;   
                    projListBGWin.position.y = projWinTopPosY - projListBGWin.height * (deltaY/(barOutlineHeight-1))
                    
                 //   console.log(projListBGWin.position.y)
                }  
                 
                
            };
   
            
        };
        


    
    };
    
    
    function onDragEnd(e) {
        console.log('onDragEnd')
        var selectedTarget = e.target;
        // Restore the original bunny alpha.
       // selectedTarget.alpha = 1;
        this.dragging = false;
        
       // var mouseposition = selApp.renderer.plugins.interaction.mouse.global;
        var newPosition =  selApp.renderer.plugins.interaction.mouse.global
                    
        if(this.position.y < 1 ){
            this.y = 1     
            projListBGWin.position.y = projWinTopPosY
        }else if(this.position.y + this.getBounds().height > (barOutlineHeight-1)){
            this.y = (barOutlineHeight-1) -  this.getBounds().height      
            projListBGWin.position.y = projWinTopPosY- (Math.abs(projCount*projBKH - (barOutlineHeight-1))) //60 + projListBGWin.height * (739/projListBGWin.height)
        }else{
           // this.y = newPosition.y - this.deltaPosY;   
                    
        };
            

    };
    
    
    
    
};


function buildProjSelBlock(parent,x,y,w,h,r,fontColor,fontSize,borderColor,borderWidth,fillColor,borderAlpha,blockAlpha,projTitleText,secFontColor,secFontSize,secText,projID,projType,heartAlpha){
        //text style    timelineLabelInputStyle
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSize ,
        fill:fontColor,
       // fontStyle: 'oblique',
        //fill: 'white',
      //  align: 'left',
        letterSpacing: 0,
       // lineJoin:'bevel',
       // stroke:'white',
        //strokeThickness:5
        });
    
    
    
    
      var fontStyleB =  {
        fontFamily: 'Nunito',
          fontSize: 12 ,
        fill:fontColor,
        align: 'left',
        };
            
            
    
    var secFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: secFontSize,
        fill:secFontColor,
       // fontStyle: 'oblique',
        //fill: 'white',
        align: 'left',
        letterSpacing: 2,
       // lineJoin:'bevel',
       // stroke:'white',
        //strokeThickness:5
        });   
  
    var secFontStyleB  = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: secFontSize +2,
        fill:secFontColor,
        align: 'left',
        fontWeight:500,
        });
    
    
    
    
    
    var projSelMainBlock =  new PIXI.Graphics(); //asset 主視窗
        projSelMainBlock.lineStyle(1, borderColor, borderAlpha);
        projSelMainBlock.beginFill(fillColor,blockAlpha);
        projSelMainBlock.drawRoundedRect(0,0, w-60,h, r);
        projSelMainBlock.endFill();
        projSelMainBlock.name = 'projSelMainBlock'
    
        projSelMainBlock.x = x
        projSelMainBlock.y = y

        parent.addChild(projSelMainBlock)

        projSelMainBlock.projID = projID
        projSelMainBlock.projNameEN = projTitleText

        projSelMainBlock.projNameCH = secText
        projSelMainBlock.projType = projType
    
    
    var projStateBlock =  new PIXI.Graphics(); //asset 主視窗
        projStateBlock.lineStyle(1, borderColor, borderAlpha);
        projStateBlock.beginFill(fillColor,blockAlpha);
        projStateBlock.drawRoundedRect(0,0, 70,h, r);
        projStateBlock.endFill();
        projStateBlock.name = 'projSelMainBlock'
    
        projStateBlock.x = x + projSelMainBlock.width -7
        projStateBlock.y = y

        parent.addChild(projStateBlock)

        projStateBlock.projID = projID
        projStateBlock.projNameEN = projTitleText

        projStateBlock.projNameCH = secText
        projStateBlock.projType = projType
    
    
    
    //var projTitleLabel_EN = new PIXI.Text(projTitleText, fontStyle);

    var projTitleLabel_EN = new PIXI.Text(projTitleText, fontStyleB);
            
            
        projSelMainBlock.addChild(projTitleLabel_EN)


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        projTitleLabel_EN.pivot.y = projTitleLabel_EN.height/2;
        projTitleLabel_EN.x =10;
        projTitleLabel_EN.y =h/4;
    
        projSelMainBlock.addChild(projTitleLabel_EN)
    
    //var projTitleLabel_CH = new PIXI.Text(secText, secFontStyle);
            
    var projTitleLabel_CH = new PIXI.Text(secText, secFontStyleB);
            
            


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        projTitleLabel_CH.pivot.y = projTitleLabel_CH.height/2;
        projTitleLabel_CH.x =10;
        projTitleLabel_CH.y =3*(h/4);
    
        projSelMainBlock.addChild(projTitleLabel_CH)
//
      //  console.log(projSelMainBlock)    

        projSelMainBlock.interactive = true;
        projSelMainBlock.buttonMode = true;
        projSelMainBlock.on('pointerover', function(){this.children[0].tint="0xff8888"
                                                   //  console.log(this.x,this.y)
                                                      
                                                   // console.log(this.parent)
                                                 
                                                    
                                                     })
    
        
        projSelMainBlock.on('pointerout', function(){this.children[0].tint="0xffffff"
                                           
                                              // this.removeChild(this.getChildByName('popUpWin'))
                                               //this.parent.removeChild(this.parent.getChildByName('popUpWin'))
                         

                                            
                                            

                                           })
               .on('pointerup',  function(){this.children[0].tint="0xffffff"})
               .on('mousedown', function(){// console.log(this)
                                          
                                           // console.log(this.projID)      
                                            //console.log(this.projNameEN)      
                                           // console.log(this.projType)      

                                             console.log('open proj edit win')
                                            var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                                            if(userNameInput.text == '未登入'){
                                                                var loginUserName = 'none'
                                                            }else{
                                                                var loginUserName = userNameInput.text 
                                                            };
                                                      //  console.log(loginUserName)

                                                console.log(this.projID,loginUserName,this.projNameEN,this.projType,this.projNameCH)
            
                                            $.post("/getSelectProjectDataFromDB", {  
                                                    'searchID':parseInt(this.projID),
                                                    'userName':loginUserName,
                                                    'proj_name' : this.projNameEN,
                                                    'projType' : this.projType,
                                                    'projNameCH' : this.projNameCH
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

                                                      //  console.log(projSearchIndex)
                                                            console.log(userNameInput.text) 
                                                           if(userNameInput.text == '未登入'){
                                                                var loginUserName = 'none'
                                                            }else{
                                                                var loginUserName = userNameInput.text 
                                                                     $.post("/renewUserFav", {   //runAllAutoEvents
                                                                    'userName':loginUserName,
                                                                    'mode' :'proj',
                                                                    'current_proj' :parseInt(projSearchIndex)

                                                                    }, function(data) {
                                                                        console.log(data)


                                                            })
                                                                
                                                                
                                                                
                                                            }; 
                                           
                                                            
                                                        
                                                        
                                                    });  
                                                        
                                          
                                          
              });

    
    
    
    
    var heartIcon = new insertHeartIcon(projStateBlock,30 ,projStateBlock.height/2,1)
        heartIcon.alpha = heartAlpha
        heartIcon.searchID = projID
        heartIcon.projNameEN = projTitleText
    
    /*
        if(userFavProjList.includes(projSearchIndex) == true){
            console.log()
            heartIcon.alpha = 1 

        }; 
    */
    
                            //buildSimpletBlock(parent,x,y,w,h,blockScale,blockColor,blockScale)
          heartIcon.on('mousedown', function(){    
                                    
                                    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                    
                                    var loginID = userNameInput.text
                                  //  console.log(loginID.text)       
                                 //   console.log(gameID)    
                                    if(loginID == "未登入" ){
                                        errMsgBox.text = "請先登入"
                                    }else{
                                        if(heartIcon.alpha == 0.1){
                                             heartIcon.alpha = 1
                                            console.log('加入我的專案')
                                           
                                            $.post("/addFavProjToUserFav", {
                                                "user_name":loginID,
                                                "projectSearchID":this.searchID,

                                                }, function(data) {

                                                   console.log(data)
                                              
                                                    errMsgBox.text = this.projNameEN +'新增到我的專案'
                                                }); 
                                            
                                        }else{
                                           // var loginID = pixiInfoApp.stage.getChildByName('container_loginContainer').getChildByName('loginIDText')

                                            heartIcon.alpha = 0.1
                                            console.log(loginID)
                                            console.log('取消我的專案')
                                                
                                                $.post("/removeFavProjFromUserFav", {
                                                    "user_name":loginID,
                                                    "projectSearchID":this.searchID,
                                                }, function(data) {

                                                   console.log(data)
                                                    errMsgBox.text =  this.projNameEN +'由我的專案移除'
                                                  // if(errMsg == 'remove done'){
                                                 //      projErrorMessage.text = projectNameInput.text  + "已由我的專案中移除"
                                                  //     heartIcon.alpha = 0.1
                                                  // };
                                                }); 
                                            
                                            
                                        }

                                    }
                                
                                })
                               
    
        
return projSelMainBlock
    
};







    
//專案選擇視窗
function buildProjectSelectWin(parent,x,y,w,h){
    parent.removeChild(parent.getChildByName("projectSelWin_container"))

    var allProjectList = JSON.parse(window.localStorage.getItem("allProjectList"));
    var userPrefSet = JSON.parse(window.localStorage.getItem("userPrefSet"));
    var projectTypeList = JSON.parse(window.localStorage.getItem("projectTypeList"));
    
    console.log(userPrefSet)
    
    var projType_filter =  userPrefSet['projType_filter']
    var previewType =  userPrefSet['previewType']
    var sortFilter =  userPrefSet['sortFilter']
    
    
    

   // var projType_filter =  userPrefSet['projType_filter']

    //console.log(projType_filter)
    
    // 專案選擇 底層可移動視窗
    var projectSelectWin = new moveAbleWinBlock(uiBaseContainer,x,y,w,h,'專案列 表',20,20,14,'0xffffff','projectSelWin_container',1,'0x555555',5,'0x555555',1,1,'0x334444',daysApp,screenW,screenH,true)
        projectSelectWin.name = 'projectSelWin_container'
    
    projectSelectWin.previewType = previewType
    projectSelectWin.sortFilter = sortFilter
    projectSelectWin.projType = projType_filter


    var initial_toIndexNum = checkProjToIndexNum(projectSelectWin,allProjectList,0)[0]
    var sortedProjectList =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[1]
    console.log(initial_toIndexNum)
    
    var selProjTypeOptionBtnGrp = new buildOptionGrp_B_Btn(projectSelectWin,20,60,'類 型 :',projectTypeList,110,5,120,projType_filter,12,10,'0xffffff','0xffffff','0x333333',0.5,0.9)
        selProjTypeOptionBtnGrp.interactive = true;
        selProjTypeOptionBtnGrp.buttonMode = true;
        selProjTypeOptionBtnGrp.on('mousedown', function(){console.log(selProjTypeOptionBtnGrp.assetType)
                                                            projectSelectWin.projType = selProjTypeOptionBtnGrp.assetType
                                                            var toSelIndexNUm =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[0]
                                                            var sortedProjectList =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[1]

                                                            var showListArea = new getProjList(projectSelectWin,0,0,w,h,sortedProjectList, projectSelectWin.previewType,projectSelectWin.projType,projectSelectWin.sortFilter,0,toSelIndexNUm)


                                                          
                                                          })
                
    var selSortTypeOptionBtnGrp = new buildOptionGrp_B_Btn(projectSelectWin,20,100,'排 序 :',['字母','時間','My'],100,5,110,sortFilter,12,11,'0xffffff','0xffffff','0x333333',0.5,0.9)
        selSortTypeOptionBtnGrp.interactive = true;
        selSortTypeOptionBtnGrp.buttonMode = true;
        selSortTypeOptionBtnGrp.on('mousedown', function(){console.log(selSortTypeOptionBtnGrp.assetType)
                                                            projectSelectWin.sortFilter = selSortTypeOptionBtnGrp.assetType
                                                           var toSelIndexNUm =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[0]
                                                            var sortedProjectList =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[1]

                                                            var showListArea = new getProjList(projectSelectWin,0,0,w,h,sortedProjectList, projectSelectWin.previewType,projectSelectWin.projType,projectSelectWin.sortFilter,0,toSelIndexNUm)


                                                          })
                     
    var selPreviewTypeOptionBtnGrp = new buildOptionGrp_B_Btn(projectSelectWin,20,140,'顯 示 :',['列表','大圖','小圖'],100,5,110,previewType,12,11,'0xffffff','0xffffff','0x333333',0.5,0.9)
        selPreviewTypeOptionBtnGrp.interactive = true;
        selPreviewTypeOptionBtnGrp.buttonMode = true;
        selPreviewTypeOptionBtnGrp.on('mousedown', function(){console.log(selPreviewTypeOptionBtnGrp.assetType)
                                                              
                                                        
                                                              
                                                            projectSelectWin.previewType = selPreviewTypeOptionBtnGrp.assetType
                                                           // var previewType =  projectSelectWin.previewType
                                                            
                                                            var toSelIndexNUm =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[0]
                                                            var sortedProjectList =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[1]

                                                            //    console.log(toIndexNUm)
                                                            var showListArea = new getProjList(projectSelectWin,0,0,w,h,sortedProjectList, projectSelectWin.previewType,projectSelectWin.projType,projectSelectWin.sortFilter,0,toSelIndexNUm)

                                                             
                                                             })
                         


    var ProjectSelectWin_listArea = new buildSimpletBlock(projectSelectWin,10,170,w-20,h-220,1,'0x444444',1)
    ProjectSelectWin_listArea.name = 'ProjectSelectWin_listArea'

                                         



    var showListArea = new getProjList(projectSelectWin,0,0,w,h,sortedProjectList,previewType,projType_filter,sortFilter,0,initial_toIndexNum)
                         //getProjList(parent,x,y,w,h,projDataList,previewType,projType_filter,filter,fromIndex,toIndex)
                                        
        
};
    
    
    


//專案編輯室窗
function openProjectEditWin(parent,x,y,w,h,selApp,selProjData,mode,userFavProjList){
    var chiefArtistList = JSON.parse(window.localStorage.getItem("chiefArtistList"));

    var imList = JSON.parse(window.localStorage.getItem("imList"));
    var designerList = JSON.parse(window.localStorage.getItem("designerList"));
    var projectTypeList = JSON.parse(window.localStorage.getItem("projectTypeList"));
 
    
    var userPrefSet = JSON.parse(window.localStorage.getItem("userPrefSet"));

    console.log(userPrefSet,userFavProjList)
   // console.log(selProjData)

 
     // var ProjectImagePreviewWin = new buildSimpletBlock(projectEditWin,0,30,w,100,1,'0x333333',1)
       // ProjectImagePreviewWin.name = 'ProjectImagePreviewWin'
    
    if(mode == 'edit'){
        
        var projSearchIndex = selProjData[0]
        var projName = selProjData[1]
        var projCHName = selProjData[2]
        var projST_day = selProjData[3]
        var projED_day = selProjData[4]
        var projChiefArtist = selProjData[5]
        var projIM = selProjData[6]
        var projDesigner = selProjData[7]
        var projType = selProjData[8]
        var projDesc = selProjData[9]
        var projAU_RequestDay = selProjData[10]
        var projCF_RequestDay = selProjData[11]
        var projZip_RequestDay = selProjData[12]
        var projPublic_RequestDay = selProjData[13]
        var projState = selProjData[14]
        var winTitle = projName +' 專案編輯'

        
        var btnBoxTextA = '確認專案編輯'
        var btnBoxTypeA = 'white_outline'
       // var heartIconAlpha = 
    }else if(mode == 'add'){
        

        var dayDate = new Date()

        var selYear = dayDate.getFullYear()
        var selMonth = dayDate.getMonth() +1
        var selDay = dayDate.getDate() 
    

        var projectSearchIndex =   '' 
        var projName = ''
        var projCHName = ''

        var projST_day =  selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        var projED_day =  selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        var projChiefArtist = ''
        var projIM = ''
        var projDesigner = ''
        var projType = '未指定'
        var projDesc = '專案描述'
        var projAU_RequestDay = ''
        var projCF_RequestDay = ''
        var projZip_RequestDay = ''
        var projPublic_RequestDay = ''
        var projState = '準備中'
        var btnBoxTextA = '確認新增專案'
        var btnBoxTypeA = 'primary'
        var winTitle = '新增專案'

        
    };
    

    
    var projectEditWin = new moveAbleWinBlock(parent,x,y,w,h,winTitle,20,20,14,'0xffffff','projectEditWin_container',1,'0x222222',5,'0x353535',1,1,'0x222222',selApp,screenW,screenH,true)    
    
    projectEditWin.interactive = true;
 
   // var projectEditWin = new moveAbleWinBlock(parent,x,y,w,h,winTitle,20,20,14,'0xffffff','projectEditWin_container',1,'0x222222',5,'0x353535',1,1,'0x222222',selApp,screenW,screenH,true)    

    
    
    
    
    
    var heartIcon = new insertHeartIcon(projectEditWin,projectEditWin.width -30 ,50,1)
    
        if(userFavProjList.includes(projSearchIndex) == true){
            console.log()
            heartIcon.alpha = 1 

        }; 
    

                            //buildSimpletBlock(parent,x,y,w,h,blockScale,blockColor,blockScale)
          heartIcon.on('mousedown', function(){    
                                    
                                    var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                    
                                    var loginID = userNameInput.text
                                  //  console.log(loginID.text)       
                                 //   console.log(gameID)    
                                    if(loginID == "未登入" ){
                                        errMsgBox.text = "請先登入"
                                    }else{
                                        if(heartIcon.alpha == 0.1){
                                             heartIcon.alpha = 1
                                            console.log('加入我的專案')
                                            
                                            $.post("/addFavProjToUserFav", {
                                                "user_name":loginID,
                                                "projectSearchID":newProj_searchID_InputBox.text,

                                                }, function(data) {

                                                   console.log(data)
                                              
                                                    errMsgBox.text = newProjEN_name_InputBox.text +'新增到我的專案'
                                                }); 
                                            
                                        }else{
                                           // var loginID = pixiInfoApp.stage.getChildByName('container_loginContainer').getChildByName('loginIDText')

                                            heartIcon.alpha = 0.1
                                            console.log(loginID)
                                            console.log('取消我的專案')
                                            
                                                $.post("/removeFavProjFromUserFav", {
                                                    "user_name":loginID,
                                                    "projectSearchID":newProj_searchID_InputBox.text,
                                                }, function(data) {

                                                   console.log(data)
                                                    errMsgBox.text = newProjEN_name_InputBox.text +'由我的專案移除'
                                                  // if(errMsg == 'remove done'){
                                                 //      projErrorMessage.text = projectNameInput.text  + "已由我的專案中移除"
                                                  //     heartIcon.alpha = 0.1
                                                  // };
                                                }); 
                                            
                                            
                                        }

                                    }
                                
                                })

    
    var ProjectInfoWin = new buildSimpletBlock(projectEditWin,0,80,w,600,1,'0x555555',1)
        ProjectInfoWin.name = 'ProjectInfoWin'
      
    var newProj_searchID_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,10,70,210,3,'ID:',projSearchIndex,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // newProj_searchID_InputBox.text = 'ID' 
        newProj_searchID_InputBox.disabled = true 
    
    var newProjEN_name_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,40,70,210,3,'英文名稱:',projName,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // newProjEN_name_InputBox.text = 'project English name'
        newProjEN_name_InputBox.disabled = true 

    var newProjCH_name_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,70,70,210,3,'中文名稱:',projCHName,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
      //  newProjCH_name_InputBox.text = '專案中文名稱' 
    
    
      
    var startDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,100,70,210,3,'起始日期:',projST_day,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        startDay_InputBox.disabled = true
    
    
    
     
    
    var endDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,130,70,210,3,'結束日期:',projED_day,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // endDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        endDay_InputBox.disabled = true

    
        startDay_InputBox.interactive = true;
        startDay_InputBox.buttonMode = true;
        startDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                        
                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,startDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})


        endDay_InputBox.interactive = true;
        endDay_InputBox.buttonMode = true;
        endDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                     
                                                   var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,endDay_InputBox)

                                          })
                        .on('pointerup', function(){this.alpha=1;})

    
    
    
    
    
    
    var chiefArtistSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,10,160,70,210,3,'主 美:',projChiefArtist,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // chiefArtistSel_inputBox.text = "未選擇"
        chiefArtistSel_inputBox.disabled = true

        chiefArtistSel_inputBox.interactive = true;
        chiefArtistSel_inputBox.buttonMode = true;
        chiefArtistSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;

                                                   buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,800,'選擇主美',chiefArtistList,chiefArtistSel_inputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})



    
    
    
 
    var IMSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,10,190,70,210,3,'IM:',projIM,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
     //   IMSel_inputBox.text = "未選擇"
        IMSel_inputBox.disabled = true
        IMSel_inputBox.interactive = true;
        IMSel_inputBox.buttonMode = true;

        IMSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                                buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,800,'選擇IM',imList,IMSel_inputBox,false)

                                              })
                    .on('pointerup', function(){this.alpha=1;})

    var desinerSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,10,220,70,210,3,'企 劃:',projDesigner,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
      //  desinerSel_inputBox.text = "未選擇"
        desinerSel_inputBox.disabled = true
        desinerSel_inputBox.interactive = true;
        desinerSel_inputBox.buttonMode = true;

        desinerSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                              buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,800,'選擇企劃',designerList,desinerSel_inputBox,false)
                                              })
                    .on('pointerup', function(){this.alpha=1;})   

  
    var projectTypeSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,10,250,70,210,3,'專案類型:',projType,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // projectTypeSel_inputBox.text = "未選擇"
        projectTypeSel_inputBox.disabled = true
        projectTypeSel_inputBox.interactive = true;
        projectTypeSel_inputBox.buttonMode = true;

        projectTypeSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                               console.log('projectTypeSel_inputBox')
                                              buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,800,'選擇專案類型',projectTypeList,projectTypeSel_inputBox,false)
                                              })
                    .on('pointerup', function(){this.alpha=1;})   
    
    var projDesc_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,280,70,210,3,'專案描述:',projDesc,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        //projDesc_InputBox.text = '專案描述' 
    
    
    
    
    
    
    var audioRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,320,70,210,3,'AU 需求:',projAU_RequestDay,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        audioRequestDay_InputBox.disabled = true
    
        
        audioRequestDay_InputBox.interactive = true;
        audioRequestDay_InputBox.buttonMode = true;
        audioRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                         
                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,audioRequestDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    var CFRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,350,70,210,3,'CF 需求:',projCF_RequestDay,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        CFRequestDay_InputBox.disabled = true
    
    
        
        CFRequestDay_InputBox.interactive = true;
        CFRequestDay_InputBox.buttonMode = true;
        CFRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                         
                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,CFRequestDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    var zipDataRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,380,70,210,3,'封包 需求:',projZip_RequestDay,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        zipDataRequestDay_InputBox.disabled = true
    
            
        zipDataRequestDay_InputBox.interactive = true;
        zipDataRequestDay_InputBox.buttonMode = true;
        zipDataRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                        
                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,zipDataRequestDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    
        
    
    var alphaTestDataRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,410,70,210,3,'上線 需求:',projPublic_RequestDay,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        alphaTestDataRequestDay_InputBox.disabled = true
                  
        alphaTestDataRequestDay_InputBox.interactive = true;
        alphaTestDataRequestDay_InputBox.buttonMode = true;
        alphaTestDataRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                      

                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,alphaTestDataRequestDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    
 //   var projState_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,440,70,210,3,'專案狀態:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
     //   projState_InputBox.text = '準備中' 
    //    projState_InputBox.disabled = true
    

    var selProjStateOptionBtnGrp = new inputBoxWithLabel(ProjectInfoWin,10,440,70,210,3,'專案狀態:',projState,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // selProjStateOptionBtnGrp.text = "未選擇"
        selProjStateOptionBtnGrp.disabled = true
        selProjStateOptionBtnGrp.interactive = true;
        selProjStateOptionBtnGrp.buttonMode = true;

        selProjStateOptionBtnGrp.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                              // buildSelectionWinB(parent,x,y,w,h,tapeText,dataList,returnInputBox)
                                                buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,150,'專案狀態',['準備中','進行中','已完成','結案'],selProjStateOptionBtnGrp)

                                              })
                    .on('pointerup', function(){this.alpha=1;})

    

                                                           // projectSelectWin.projType = selProjStateOptionBtnGrp.assetType
                                                           /// var toSelIndexNUm =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[0]
                                                          //  var sortedProjectList =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[1]

                                                           // var showListArea = new getProjList(projectSelectWin,0,0,w,h,sortedProjectList, projectSelectWin.previewType,projectSelectWin.projType,projectSelectWin.sortFilter,0,toSelIndexNUm)
    if(mode == 'add'){
        
        newProjEN_name_InputBox.disabled = false                                   
        newProjCH_name_InputBox.disabled = false                                      
        
    };
    
    
        
    var editProjBtn = new buildInputBoxBtn(ProjectInfoWin,10,500,150,25,11,btnBoxTextA,'0xffffff',btnBoxTypeA)

    
    
        editProjBtn.on('mousedown', function(){
                      //  console.log(this)   
                        
            
                        if(mode == 'edit'){
                            
                            var editProjrConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'確 認 編 輯 視 窗','確認專案: '+newProjEN_name_InputBox.text +' 儲存修改',14,'0x000000','editProjrConfirmWin_container',5,1,daysApp,screenW,screenH)    
                            var editProjrConfirmWinBK = editProjrConfirmWin[0]
                            var confirmBtn = editProjrConfirmWin[1]
                               // console.log(editUserConfirmWin)
                                editProjrConfirmWinBK.x = editProjrConfirmWinBK.x - 150
                                editProjrConfirmWinBK.y = editProjrConfirmWinBK.y - 100
                    
                                confirmBtn.on('mousedown', function(){
                            
                                        var deltaDays = checkDetaTime(startDay_InputBox.text,endDay_InputBox.text)
                                        
                                        if( deltaDays < 0){
                                            
                                             errMsgBox.text = '結束時間比開始時間早，請修正日期'
                                        }else{
                                            
                                                    $.post("/saveProjectEditToDB", {   //runAllAutoEvents
                                                        'searchID':parseInt(newProj_searchID_InputBox.text),
                                                        'en_name':newProjEN_name_InputBox.text,
                                                        'ch_name':newProjCH_name_InputBox.text,
                                                        'st_day':startDay_InputBox.text,
                                                        'ed_day':endDay_InputBox.text,
                                                        'chief_artist':chiefArtistSel_inputBox.text,
                                                        'im':IMSel_inputBox.text,
                                                        'designer':desinerSel_inputBox.text,
                                                        'proj_type':projectTypeSel_inputBox.text,
                                                        'proj_desc':projDesc_InputBox.text,
                                                        'au_day':audioRequestDay_InputBox.text,
                                                        'cf_day':CFRequestDay_InputBox.text,
                                                        'zip_day':zipDataRequestDay_InputBox.text,
                                                        'test_day':alphaTestDataRequestDay_InputBox.text,
                                                        'proj_state':selProjStateOptionBtnGrp.text

                                                            }, function(data) {
                                                                console.log(data)
                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('editProjrConfirmWin_container'))   

                                                        errMsgBox.text = '【' + newProjEN_name_InputBox.text +'】'+ ' 專案修改完成'

                                                        }) 

                                           // console.log(newProj_searchID_InputBox.text,newProjEN_name_InputBox.text,newProjCH_name_InputBox.text,startDay_InputBox.text,endDay_InputBox.text,chiefArtistSel_inputBox.text,IMSel_inputBox.text,desinerSel_inputBox.text,projectTypeSel_inputBox.text,projDesc_InputBox.text,audioRequestDay_InputBox.text,CFRequestDay_InputBox.text,zipDataRequestDay_InputBox.text,alphaTestDataRequestDay_InputBox.text,selProjStateOptionBtnGrp.text)
                                            
                                        };
                            
               
                                    })

        
                            
                        }else if(mode == 'add'){
                            console.log('新增專案')
                            $.post("/addNewProjectTODB_B", {   //runAllAutoEvents
                                                        //'searchID':parseInt(newProj_searchID_InputBox.text),
                                                        'en_name':newProjEN_name_InputBox.text,
                                                        'ch_name':newProjCH_name_InputBox.text,
                                                        'st_day':startDay_InputBox.text,
                                                        'ed_day':endDay_InputBox.text,
                                                        'chief_artist':chiefArtistSel_inputBox.text,
                                                        'im':IMSel_inputBox.text,
                                                        'designer':desinerSel_inputBox.text,
                                                        'proj_type':projectTypeSel_inputBox.text,
                                                        'proj_desc':projDesc_InputBox.text,
                                                        'au_day':audioRequestDay_InputBox.text,
                                                        'cf_day':CFRequestDay_InputBox.text,
                                                        'zip_day':zipDataRequestDay_InputBox.text,
                                                        'test_day':alphaTestDataRequestDay_InputBox.text,
                                                        'proj_state':selProjStateOptionBtnGrp.text

                                                        }, function(data) {
                                                        console.log(data)
                                                        var errMsg = data[0]
                                                        var projSearchIndex = data[1]
                                                        var projName = data[2]
                                                            if(errMsg == 'the same name'){
                                                                errMsgBox.text = '專案名稱重複'
                                                            }else{
                                                                errMsgBox.text = '【' + projName + '】'+ ' 專案新增完成'

                                                            }
                                                      

                                                        }) 
 
                            
                            
                            
                            //addNewProjectTODB
                        };
            

            
            
            
                    });                                                    
                                                    
    var delProjBtn = new buildInputBoxBtn(ProjectInfoWin,10,550,150,25,11,'刪 除 專 案','0xffffff','danger')
        delProjBtn.projSearchIndex
          
        delProjBtn.on('mousedown', function(){
        var delProjConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'確 認 刪 除 專 案 視 窗',newProjEN_name_InputBox.text +' 確認刪除',14,'0x000000','delProjConfirmWin_container',5,1,daysApp,screenW,screenH)    
            var delProjConfirmYes = delProjConfirmWin[1]
            var delProjConfirmNo = delProjConfirmWin[2]
            
                  delProjConfirmYes.on('mousedown', function(){
                                                                console.log('確認刪除專案')

                                                                $.post("/delSelectProjFromDB", {

                                                                  'projID':newProj_searchID_InputBox.text,
                                                                  'projName':newProjEN_name_InputBox.text,

                                                                            }, function(data) {
                                                                                console.log(data)
                                                                    errMsgBox.text = '【' + newProjEN_name_InputBox.text +'】'+ ' 專案刪除完成'

                                                                    uiBaseContainer.removeChild(uiBaseContainer.getChildByName('delProjConfirmWin_container'))   
                                                                    
                                                                }) ;


                                            });
    
                    delProjConfirmNo.on('mousedown', function(){
                                                                console.log('取消刪除專案')
                                                                errMsgBox.text = '【' + newProjEN_name_InputBox.text +'】'+ ' 取消刪除'

                    })
                        
                        
                        
                });
    
    
};



function openProjectEditWinB(parent,x,y,w,h,selApp,selProjData,mode,userFavProjList){
    var chiefArtistList = JSON.parse(window.localStorage.getItem("chiefArtistList"));

    var imList = JSON.parse(window.localStorage.getItem("imList"));
    var designerList = JSON.parse(window.localStorage.getItem("designerList"));
    var projectTypeList = JSON.parse(window.localStorage.getItem("projectTypeList"));
 
    
    var userPrefSet = JSON.parse(window.localStorage.getItem("userPrefSet"));

    console.log(userPrefSet,userFavProjList)
    console.log(selProjData)

 
     // var ProjectImagePreviewWin = new buildSimpletBlock(projectEditWin,0,30,w,100,1,'0x333333',1)
       // ProjectImagePreviewWin.name = 'ProjectImagePreviewWin'
    
    if(mode == 'edit'){
        
        var projSearchIndex = selProjData[0]
        var projName = selProjData[1]
        var projCHName = selProjData[2]
        var projST_day = selProjData[3]
        var projED_day = selProjData[4]
        var projChiefArtist = selProjData[5]
        var projIM = selProjData[6]
        var projDesigner = selProjData[7]
        var projType = selProjData[8]
        var projDesc = selProjData[9]
        var projAU_RequestDay = selProjData[10]
        var projCF_RequestDay = selProjData[11]
        var projZip_RequestDay = selProjData[12]
        var projPublic_RequestDay = selProjData[13]
        var projState = selProjData[14]
        var winTitle = projName +' 專案編輯'
        var sampleColor = selProjData[16]
        
        var btnBoxTextA = '確認專案編輯'
        var btnBoxTypeA = 'white_outline'
       // var heartIconAlpha = 
    }else if(mode == 'add'){
        

        var dayDate = new Date()

        var selYear = dayDate.getFullYear()
        var selMonth = dayDate.getMonth() +1
        var selDay = dayDate.getDate() 
    

        var projectSearchIndex =   '' 
        var projName = ''
        var projCHName = ''

        var projST_day =  selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        var projED_day =  selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        var projChiefArtist = ''
        var projIM = ''
        var projDesigner = ''
        var projType = '未指定'
        var projDesc = '專案描述'
        var projAU_RequestDay = ''
        var projCF_RequestDay = ''
        var projZip_RequestDay = ''
        var projPublic_RequestDay = ''
        var projState = '準備中'
        var btnBoxTextA = '確認新增專案'
        var btnBoxTypeA = 'primary'
        var winTitle = '新增專案'
        var sampleColor = '888888'

        
    };
    

    
    var projectEditWin = new moveAbleWinBlockB(parent,x,y,w,h,winTitle,20,20,15,'0xffffff','projectEditWin_container',1,'0x739aab',5,'0x353535',1,1,1,'0x739aab',daysApp,screenW,screenH,true)    
   // moveAbleWinBlockB(uiBaseContainer,x,y,w,h,'專案列表',20,20,12,'0xaaddff','projectSelWin_container',1,'0x2c697f',5,'0x8ae0fe',0.2,0.2,1,'0x2c697f',daysApp,screenW,screenH,true)
    projectEditWin.interactive = true;
     
    

    
    
    
    
    var ProjectInfoWinB = new buildSimpletBlockB(projectEditWin,620,30,200,130,1,'0x40a890',1,1)
        ProjectInfoWinB.name = 'ProjectInfoWinB'
    
    var ProjectInfoWinC = new buildSimpletBlockB(projectEditWin,820,30,250,130,1,'0x516c75',1,1)
        ProjectInfoWinC.name = 'ProjectInfoWinC'
    
    var ProjectInfoWin = new buildSimpletBlockB(projectEditWin,0,30,620,130,1,'0x395d69',1,1)
        ProjectInfoWin.name = 'ProjectInfoWin'
      

      
    
    
    
    
    
    
    var newProj_searchID_InputBox = new inputBoxWithLabel(ProjectInfoWin,630,100,50,130,3,'ID:',projSearchIndex,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x3777777')
       // newProj_searchID_InputBox.text = 'ID' 
        newProj_searchID_InputBox.name = 'newProj_searchID_InputBox'

        newProj_searchID_InputBox.disabled = true 
    
    var newProjEN_name_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,10,70,210,3,'英文名稱:',projName,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // newProjEN_name_InputBox.text = 'project English name'
        //newProjEN_name_InputBox.disabled = true 
        newProjEN_name_InputBox.name = 'newProjEN_name_InputBox'
    var newProjCH_name_InputBox = new inputBoxWithLabel(ProjectInfoWin,330,10,70,210,3,'中文名稱:',projCHName,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        newProjCH_name_InputBox.name = 'newProjCH_name_InputBox'
    
      //  newProjCH_name_InputBox.text = '專案中文名稱' 
    var projectTypeSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,10,40,70,210,3,'專案類型:',projType,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // projectTypeSel_inputBox.text = "未選擇"
        projectTypeSel_inputBox.disabled = true
        projectTypeSel_inputBox.interactive = true;
        projectTypeSel_inputBox.buttonMode = true;
        projectTypeSel_inputBox.name = 'projectTypeSel_inputBox'
    
    
        projectTypeSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                               console.log('projectTypeSel_inputBox')
                                               
                                               var winW = 180
                                               var winH = projectTypeList.length *25 + 70
                                               
                                              var projTypeSelWin = new moveAbleWinBlockC(uiBaseContainer,660,40,winW,winH,'專案類型選擇',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    
                                               
                                             // var selWinH = projectTypeList.length *30
                                             var openDaysSelWin  = new buildOptionSelectWinA(projTypeSelWin,0,0,winW,winH,'任務類型',projectTypeList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,projectTypeSel_inputBox,true,false)
                                             
                                             
                                             


                                                projTypeSelWin.interactive = true;
    
                                              
                                              
                                              })
                    .on('pointerup', function(){this.alpha=1;})   
    
    var projDesc_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,100,70,210,3,'專案描述:',projDesc,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        //projDesc_InputBox.text = '專案描述' 
    
      
    var startDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,70,70,210,3,'起始日期:',projST_day,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        startDay_InputBox.disabled = true
    
       // console.log(startDay_InputBox)
    
     
    
    var endDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,330,70,70,210,3,'結束日期:',projED_day,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // endDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        endDay_InputBox.disabled = true

    
        startDay_InputBox.interactive = true;
        startDay_InputBox.buttonMode = true;
        startDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                        
                                                    var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,440, 170,startDay_InputBox,0.7,true)
                                                    
                                                    
                                                  })
                        .on('pointerup', function(){this.alpha=1;})


        endDay_InputBox.interactive = true;
        endDay_InputBox.buttonMode = true;
        endDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                     
                                                   var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,760, 170,endDay_InputBox,0.7,true)

                                          })
                        .on('pointerup', function(){this.alpha=1;})

    
    var projSampColor_inputBox = new inputBoxWithLabel(ProjectInfoWin,330,100,70,210,3,'代表色號:',sampleColor,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // endDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
       // projSampColor_inputBox.disabled = true
    
        projSampColor_inputBox.name = 'projSampColor_inputBox'
    
    
    var chiefArtistSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,630,10,50,130,3,'主 美:',projChiefArtist,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x223322')
       // chiefArtistSel_inputBox.text = "未選擇"
        chiefArtistSel_inputBox.disabled = true

        chiefArtistSel_inputBox.interactive = true;
        chiefArtistSel_inputBox.buttonMode = true;
        chiefArtistSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;

                                                  // buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,800,'選擇主美',chiefArtistList,chiefArtistSel_inputBox)
                                                   
                                                   
                                                  var winW = 180
                                                   var winH = chiefArtistList.length *25 + 70

                                                  var chiefArtistSelWin = new moveAbleWinBlockC(uiBaseContainer,790,40,winW,winH,'主美選擇',20,20,16,'0xffffff','chiefArtistSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                                                 // var selWinH = projectTypeList.length *30
                                                 var openDaysSelWin  = new buildOptionSelectWinA(chiefArtistSelWin,0,0,winW,winH,'主美選擇',chiefArtistList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,chiefArtistSel_inputBox,true,true)

                                                   
                                                   
                                                   
                                                  })
                        .on('pointerup', function(){this.alpha=1;})



    
    
    
 
    var IMSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,630,40,50,130,3,'IM:',projIM,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x223322')
     //   IMSel_inputBox.text = "未選擇"
        IMSel_inputBox.disabled = true
        IMSel_inputBox.interactive = true;
        IMSel_inputBox.buttonMode = true;

        IMSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                               // buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,800,'選擇IM',imList,IMSel_inputBox,false)
                                               
                                               
                                                                                               
                                                  var winW = 180
                                                   var winH = imList.length *25 + 70

                                                  var chiefArtistSelWin = new moveAbleWinBlockC(uiBaseContainer,790,40,winW,winH,'IM 選擇',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                                                 // var selWinH = projectTypeList.length *30
                                                 var openDaysSelWin  = new buildOptionSelectWinA(chiefArtistSelWin,0,0,winW,winH,'IM 選擇',imList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,IMSel_inputBox,true,true)
                                               
                                               

                                              })
                    .on('pointerup', function(){this.alpha=1;})

    var desinerSel_inputBox = new inputBoxWithLabel(ProjectInfoWin,630,70,50,130,3,'企 劃:',projDesigner,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x223322')
      //  desinerSel_inputBox.text = "未選擇"
        desinerSel_inputBox.disabled = true
        desinerSel_inputBox.interactive = true;
        desinerSel_inputBox.buttonMode = true;

        desinerSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                            //  buildSelectionWinC(uiBaseContainer,ProjectInfoWin.width+x,y,600,800,'選擇企劃',designerList,desinerSel_inputBox,false)
                                               
                                                   var winW = 180
                                                   var winH = designerList.length *25 + 70

                                                  var chiefArtistSelWin = new moveAbleWinBlockC(uiBaseContainer,790,40,winW,winH,'企劃選擇',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                                                 // var selWinH = projectTypeList.length *30
                                                 var openDaysSelWin  = new buildOptionSelectWinA(chiefArtistSelWin,0,0,winW,winH,'企劃選擇',designerList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,desinerSel_inputBox,true,true) 
                                               
                                               
                                              })
                    .on('pointerup', function(){this.alpha=1;})   

  

    
    
    
    
    
    
    var audioRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,830,10,70,150,3,'AU 需求:',projAU_RequestDay,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        audioRequestDay_InputBox.disabled = true
    
        
        audioRequestDay_InputBox.interactive = true;
        audioRequestDay_InputBox.buttonMode = true;
        audioRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                         
                                                 //   var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,audioRequestDay_InputBox)
                                                    
                                                    var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,1140, 210,audioRequestDay_InputBox,0.7,true)

                                                    
                                                    
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    var CFRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,830,40,70,150,3,'CF 需求:',projCF_RequestDay,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        CFRequestDay_InputBox.disabled = true
    
    
        
        CFRequestDay_InputBox.interactive = true;
        CFRequestDay_InputBox.buttonMode = true;
        CFRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                         
                                                   // var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,CFRequestDay_InputBox)
                                                    var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,1140, 210,CFRequestDay_InputBox,0.7,true)

                                                    
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    var zipDataRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,830,70,70,150,3,'封包 需求:',projZip_RequestDay,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        zipDataRequestDay_InputBox.disabled = true
    
            
        zipDataRequestDay_InputBox.interactive = true;
        zipDataRequestDay_InputBox.buttonMode = true;
        zipDataRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                        
                                                   // var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,zipDataRequestDay_InputBox)
                                                    var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,1140, 210,zipDataRequestDay_InputBox,0.7,true)
 
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    
        
    
    var alphaTestDataRequestDay_InputBox = new inputBoxWithLabel(ProjectInfoWin,830,100,70,150,3,'上線 需求:',projPublic_RequestDay,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        alphaTestDataRequestDay_InputBox.disabled = true
                  
        alphaTestDataRequestDay_InputBox.interactive = true;
        alphaTestDataRequestDay_InputBox.buttonMode = true;
        alphaTestDataRequestDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                      

                                                  //  var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,ProjectInfoWin.width+x,y, 600,800,alphaTestDataRequestDay_InputBox)
                                                    var openDaysSelWin = new buildDaysSelWinB(uiBaseContainer,1140, 210,alphaTestDataRequestDay_InputBox,0.7,true)

                                                    
                                                  })
                        .on('pointerup', function(){this.alpha=1;})
    
    
 //   var projState_InputBox = new inputBoxWithLabel(ProjectInfoWin,10,440,70,210,3,'專案狀態:','xxxx',10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
     //   projState_InputBox.text = '準備中' 
    //    projState_InputBox.disabled = true
    

    var selProjStateOptionBtnGrp = new inputBoxWithLabel(ProjectInfoWin,330,40,70,210,3,'專案狀態:',projState,10,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
       // selProjStateOptionBtnGrp.text = "未選擇"
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
                    .on('pointerup', function(){this.alpha=1;})

    

                                                           // projectSelectWin.projType = selProjStateOptionBtnGrp.assetType
                                                           /// var toSelIndexNUm =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[0]
                                                          //  var sortedProjectList =  checkProjToIndexNum(projectSelectWin,allProjectList,0)[1]

                                                           // var showListArea = new getProjList(projectSelectWin,0,0,w,h,sortedProjectList, projectSelectWin.previewType,projectSelectWin.projType,projectSelectWin.sortFilter,0,toSelIndexNUm)
    if(mode == 'add'){
        
        newProjEN_name_InputBox.disabled = false                                   
        newProjCH_name_InputBox.disabled = false                                      
        
    };
    
    var editProjBtn = new confirmBtnWithIcon(ProjectInfoWin,1100,30,'0x333333','0x77aa77',1.2)
    
    var costPreviewBtn = new costPreviewWithIcon(ProjectInfoWin,1100,70,'0x333333','0x77aaaa',1.2)
    
        costPreviewBtn.on('mousedown',function(){
                                                var costPreviewWin = new buildCostPreview(uiBaseContainer,100,50,1300,800,newProj_searchID_InputBox.text,newProjCH_name_InputBox.text)
                                                this.alpha=0.5;})
//buildCostPreview(parent,x,y,w,h,projID)
    var delProjBtn = new deleteBtnWithIcon(ProjectInfoWin,1100,110,'0x333333','0xee7777',1.2)

        
    //var editProjBtn = new buildInputBoxBtn(ProjectInfoWin,10,500,150,25,11,btnBoxTextA,'0xffffff',btnBoxTypeA)

    
    
        editProjBtn.on('mousedown', function(){
                      //  console.log(this)   
                        
            
                        if(mode == 'edit'){
                            console.log('專案編輯確認')
                            var editProjrConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'確 認 編 輯 視 窗','確認專案: '+newProjEN_name_InputBox.text +' 儲存修改',14,'0x000000','editProjrConfirmWin_container',5,1,daysApp,screenW,screenH)    
                            var editProjrConfirmWinBK = editProjrConfirmWin[0]
                            var confirmBtn = editProjrConfirmWin[1]
                               // console.log(editUserConfirmWin)
                                editProjrConfirmWinBK.x = editProjrConfirmWinBK.x - 150
                                editProjrConfirmWinBK.y = editProjrConfirmWinBK.y - 100
                    
                                confirmBtn.on('mousedown', function(){
                            
                                        var deltaDays = checkDetaTime(startDay_InputBox.text,endDay_InputBox.text)
                                        
                                        if( deltaDays < 0){
                                            
                                             errMsgBox.text = '結束時間比開始時間早，請修正日期'
                                        }else{
                                            
                                                    $.post("/saveProjectEditToDB", {   //runAllAutoEvents
                                                        'searchID':parseInt(newProj_searchID_InputBox.text),
                                                        'en_name':newProjEN_name_InputBox.text,
                                                        'ch_name':newProjCH_name_InputBox.text,
                                                        'st_day':startDay_InputBox.text,
                                                        'ed_day':endDay_InputBox.text,
                                                        'chief_artist':chiefArtistSel_inputBox.text,
                                                        'im':IMSel_inputBox.text,
                                                        'designer':desinerSel_inputBox.text,
                                                        'proj_type':projectTypeSel_inputBox.text,
                                                        'proj_desc':projDesc_InputBox.text,
                                                        'au_day':audioRequestDay_InputBox.text,
                                                        'cf_day':CFRequestDay_InputBox.text,
                                                        'zip_day':zipDataRequestDay_InputBox.text,
                                                        'test_day':alphaTestDataRequestDay_InputBox.text,
                                                        'proj_state':selProjStateOptionBtnGrp.text,
                                                        'color':projSampColor_inputBox.text

                                                            }, function(data) {
                                                                console.log(data)
                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('editProjrConfirmWin_container'))   

                                                        errMsgBox.text = '【' + newProjEN_name_InputBox.text +'】'+ ' 專案修改完成'

                                                        }) 

                                           // console.log(newProj_searchID_InputBox.text,newProjEN_name_InputBox.text,newProjCH_name_InputBox.text,startDay_InputBox.text,endDay_InputBox.text,chiefArtistSel_inputBox.text,IMSel_inputBox.text,desinerSel_inputBox.text,projectTypeSel_inputBox.text,projDesc_InputBox.text,audioRequestDay_InputBox.text,CFRequestDay_InputBox.text,zipDataRequestDay_InputBox.text,alphaTestDataRequestDay_InputBox.text,selProjStateOptionBtnGrp.text)
                                            
                                        };
                            
               
                                    })

        
                            
                        }else if(mode == 'add'){
                            console.log('新增專案')
                            $.post("/addNewProjectTODB_B", {   //runAllAutoEvents
                                                        //'searchID':parseInt(newProj_searchID_InputBox.text),
                                                        'en_name':newProjEN_name_InputBox.text,
                                                        'ch_name':newProjCH_name_InputBox.text,
                                                        'st_day':startDay_InputBox.text,
                                                        'ed_day':endDay_InputBox.text,
                                                        'chief_artist':chiefArtistSel_inputBox.text,
                                                        'im':IMSel_inputBox.text,
                                                        'designer':desinerSel_inputBox.text,
                                                        'proj_type':projectTypeSel_inputBox.text,
                                                        'proj_desc':projDesc_InputBox.text,
                                                        'au_day':audioRequestDay_InputBox.text,
                                                        'cf_day':CFRequestDay_InputBox.text,
                                                        'zip_day':zipDataRequestDay_InputBox.text,
                                                        'test_day':alphaTestDataRequestDay_InputBox.text,
                                                        'proj_state':selProjStateOptionBtnGrp.text

                                                        }, function(data) {
                                                        console.log(data)
                                                        var errMsg = data[0]
                                                        var projSearchIndex = data[1]
                                                        var projName = data[2]
                                                            if(errMsg == 'the same name'){
                                                                errMsgBox.text = '專案名稱重複'
                                                            }else{
                                                                errMsgBox.text = '【' + projName + '】'+ ' 專案新增完成'

                                                            }
                                                      

                                                        }) 
 
                            
                            
                            
                            //addNewProjectTODB
                        };
            

            
            
            
                    });                                                    
                                                    
   // var delProjBtn = new buildInputBoxBtn(ProjectInfoWin,10,550,150,25,11,'刪 除 專 案','0xffffff','danger')
        delProjBtn.projSearchIndex
          
        delProjBtn.on('mousedown', function(){
        var delProjConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,300,200,'確 認 刪 除 專 案 視 窗',newProjEN_name_InputBox.text +' 確認刪除',14,'0x000000','delProjConfirmWin_container',5,1,daysApp,screenW,screenH)    
            var delProjConfirmYes = delProjConfirmWin[1]
            var delProjConfirmNo = delProjConfirmWin[2]
            
                  delProjConfirmYes.on('mousedown', function(){
                                                                console.log('確認刪除專案')

                                                                $.post("/delSelectProjFromDB", {

                                                                  'projID':newProj_searchID_InputBox.text,
                                                                  'projName':newProjEN_name_InputBox.text,

                                                                            }, function(data) {
                                                                                console.log(data)
                                                                    errMsgBox.text = '【' + newProjEN_name_InputBox.text +'】'+ ' 專案刪除完成'

                                                                    uiBaseContainer.removeChild(uiBaseContainer.getChildByName('delProjConfirmWin_container'))   
                                                                    
                                                                }) ;


                                            });
    
                    delProjConfirmNo.on('mousedown', function(){
                                                                console.log('取消刪除專案')
                                                                errMsgBox.text = '【' + newProjEN_name_InputBox.text +'】'+ ' 取消刪除'

                    })
                        
                        
                        
                });
    
    
};




//專案選擇視窗


//新增專案視窗
//新增專案視窗
function buildProjectAddWinC(parent,x,y,w,h){
    console.log('buildProjectAddWinC')
    //var userNameList = JSON.parse(window.localStorage.getItem("userNameList"));
    var chiefArtistList = JSON.parse(window.localStorage.getItem("chiefArtistList"));

    var imList = JSON.parse(window.localStorage.getItem("imList"));
    var designerList = JSON.parse(window.localStorage.getItem("designerList"));
    var projectTypeList = JSON.parse(window.localStorage.getItem("projectTypeList"));

   // var deptData = JSON.parse(window.localStorage.getItem("deptData"));
    
    
    parent.removeChild(parent.getChildByName("projectAddWin_container"))

    var projectAddWin = new moveAbleWinBlock(uiBaseContainer,x,y,400,550,'新 增 專 案',20,20,14,'0xffffff','projectAddWin_container',1,'0x555555',5,'0x777777',1,1,'0x555555',daysApp,screenW,screenH,true)
        projectAddWin.name = 'projectAddWin_container'
    
    
    var newProjEN_name_InputBox = new inputBoxWithLabel(projectAddWin,20,50,100,250,3,'英文名稱:','xxxx',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        newProjEN_name_InputBox.text = 'new_project_name'
    
    var newProjCH_name_InputBox = new inputBoxWithLabel(projectAddWin,20,90,100,250,3,'中文名稱:','xxxx',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        newProjCH_name_InputBox.text = '新增專案中文名稱' 
    
    var dayDate = new Date()
    
    var selYear = dayDate.getFullYear()
    var selMonth = dayDate.getMonth() +1
    var selDay = dayDate.getDate() 
    
    var startDay_InputBox = new inputBoxWithLabel(projectAddWin,20,130,100,250,3,'起始日期:','xxxx',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        startDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        startDay_InputBox.disabled = true
    
    var endDay_InputBox = new inputBoxWithLabel(projectAddWin,20,170,100,250,3,'結束日期:','xxxx',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        endDay_InputBox.text = selYear + " 年 "+ selMonth + ' 月 ' + selDay + ' 日 '
        endDay_InputBox.disabled = true


        startDay_InputBox.interactive = true;
        startDay_InputBox.buttonMode = true;
        startDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                                   var posX = projectAddWin.x +projectAddWin.width
                                                    var posY = projectAddWin.y

                                                    var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,posX, posY, 600,800,startDay_InputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})


        endDay_InputBox.interactive = true;
        endDay_InputBox.buttonMode = true;
        endDay_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                                                  var posX = projectAddWin.x +projectAddWin.width
                                                    var posY = projectAddWin.y

                                                   var openDaysSelWin = new buildDaysSelWin(uiBaseContainer,posX, posY, 600,800,endDay_InputBox)

                                          })
                        .on('pointerup', function(){this.alpha=1;})

    
    
    var chiefArtistSel_inputBox = new inputBoxWithLabel(projectAddWin,20,210,100,250,3,'主 美:','xxxx',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        chiefArtistSel_inputBox.text = "未選擇"
        chiefArtistSel_inputBox.disabled = true

        chiefArtistSel_inputBox.interactive = true;
        chiefArtistSel_inputBox.buttonMode = true;
        chiefArtistSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;

                                                 //  buildSelectionWin(uiBaseContainer,800,100,600,800,'選擇主美',chiefArtistList,chiefArtistSel_inputBox,false)
                                                         
                                                    var winW = 180
                                                   var winH = chiefArtistList.length *25 + 70

                                                  var chiefArtistSelWin = new moveAbleWinBlockC(uiBaseContainer,790,40,winW,winH,'主美選擇',20,20,16,'0xffffff','chiefArtistSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                                                 // var selWinH = projectTypeList.length *30
                                                 var openDaysSelWin  = new buildOptionSelectWinA(chiefArtistSelWin,0,0,winW,winH,'主美選擇',chiefArtistList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,chiefArtistSel_inputBox,true,true)
    
                                                  
                                                  
                                                  
                                                  })
    
          
    
    
                        .on('pointerup', function(){this.alpha=1;})



    
    
    
    
    var IMSel_inputBox = new inputBoxWithLabel(projectAddWin,20,250,100,250,3,'IM:','xxxx',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        IMSel_inputBox.text = "未選擇"
        IMSel_inputBox.disabled = true
        IMSel_inputBox.interactive = true;
        IMSel_inputBox.buttonMode = true;

        IMSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                                                                                                          
                                                  var winW = 180
                                                   var winH = imList.length *25 + 70

                                                  var chiefArtistSelWin = new moveAbleWinBlockC(uiBaseContainer,790,40,winW,winH,'IM 選擇',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                                                 // var selWinH = projectTypeList.length *30
                                                 var openDaysSelWin  = new buildOptionSelectWinA(chiefArtistSelWin,0,0,winW,winH,'IM 選擇',imList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,IMSel_inputBox,true,true)
                                               

                                              })
                    .on('pointerup', function(){this.alpha=1;})
    
    
    
    
    
    
    
    
    

    var desinerSel_inputBox = new inputBoxWithLabel(projectAddWin,20,290,100,250,3,'企 劃:','xxxx',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        desinerSel_inputBox.text = "未選擇"
        desinerSel_inputBox.disabled = true
        desinerSel_inputBox.interactive = true;
        desinerSel_inputBox.buttonMode = true;

        desinerSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                            //  buildSelectionWin(uiBaseContainer,800,100,600,800,'選擇企劃',designerList,desinerSel_inputBox,false)
                                               
                                               
                                                                               
                                                   var winW = 180
                                                   var winH = designerList.length *25 + 70

                                                  var chiefArtistSelWin = new moveAbleWinBlockC(uiBaseContainer,790,40,winW,winH,'企劃選擇',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    

                                                 // var selWinH = projectTypeList.length *30
                                                 var openDaysSelWin  = new buildOptionSelectWinA(chiefArtistSelWin,0,0,winW,winH,'企劃選擇',designerList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,desinerSel_inputBox,true,true) 
                                               
                                               
                                                 
                                                 
                                               
                                               
                                               
                                               
                                              })
                    .on('pointerup', function(){this.alpha=1;})   

  
    var projectTypeSel_inputBox = new inputBoxWithLabel(projectAddWin,20,330,100,250,3,'專案類型:','xxxx',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        projectTypeSel_inputBox.text = "未選擇"
        projectTypeSel_inputBox.disabled = true
        projectTypeSel_inputBox.interactive = true;
        projectTypeSel_inputBox.buttonMode = true;

        projectTypeSel_inputBox.on('pointerover', function(){this.alpha=0.5;})
                   .on('pointerout', function(){this.alpha=1;})
                    .on('mousedown',function(){this.alpha=0.5;
                                             // buildSelectionWin(uiBaseContainer,800,100,600,800,'選擇專案類型',projectTypeList,projectTypeSel_inputBox,false)
                                               
                                                              var winW = 180
                                               var winH = projectTypeList.length *25 + 70
                                               
                                              var projTypeSelWin = new moveAbleWinBlockC(uiBaseContainer,660,40,winW,winH,'專案類型選擇',20,20,16,'0xffffff','projTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    
                                               
                                             // var selWinH = projectTypeList.length *30
                                             var openDaysSelWin  = new buildOptionSelectWinA(projTypeSelWin,0,0,winW,winH,'任務類型',projectTypeList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,projectTypeSel_inputBox,true,false)
                                             
                                              
                                               
                                               
                                               
                                               
                                               
                                              })
                    .on('pointerup', function(){this.alpha=1;})   
    
    var newProjDesc_InputBox = new inputBoxWithLabel(projectAddWin,20,370,100,250,3,'專案描述:','xxxx',12,'0xffffff','0xcccccc',3,'0xffffff',0.1,'0x333333')
        newProjDesc_InputBox.text = '專案描述' 
    
    
    
    
    var createNewProjBtn = new buildBtnScaleA(projectAddWin,20,480,120,30,'新增專案','secondary outline')
        createNewProjBtn.name = 'createNewProjBtn'
        createNewProjBtn.on('mousedown', function(){
                            console.log('press新增專案')
                            var newProjEN_Name = newProjEN_name_InputBox.text
                            var newProjCH_Name = newProjCH_name_InputBox.text
                            var newProj_startDay = startDay_InputBox.text
                            var newProj_endDay = endDay_InputBox.text
                            var newProj_chiefArtist = chiefArtistSel_inputBox.text
                            var newProj_IM = IMSel_inputBox.text
                            var newProj_designer = desinerSel_inputBox.text
                            var newProj_type = projectTypeSel_inputBox.text
                            var newProj_desc = newProjDesc_InputBox.text
                           // console.log(newProjEN_Name,newProjCH_Name,newProj_startDay,newProj_endDay,newProj_chiefArtist,newProj_IM,newProj_designer,newProj_type)

                                       
                                 
                             $.post("/addNewProjectTODB", {
                                    'newProjEN_Name': newProjEN_Name,
                                    'newProjCH_Name': newProjCH_Name,
                                    'newProj_startDay': newProj_startDay,
                                    'newProj_endDay': newProj_endDay,
                                    'newProj_chiefArtist': newProj_chiefArtist,
                                    'newProj_IM': newProj_IM,
                                    'newProj_designer': newProj_designer,
                                    'newProj_type': newProj_type,
                                    'newProj_desc': newProj_desc
                                    },
                                    function(data) {
                                        console.log("feedback", data)
                                 
                                        var errMsg = data[0]
                                        if(errMsg == 'the same name'){
                                            console.log('asdsadsadsad')
                                            errMsgBox.text = '已有同樣名稱專案，請改其他名稱'
                                        }
                   
                                        })
                            errMsgBox.text = '新增專案' + newProjEN_Name + "完成"
                            });   

    
    
    
    
};
    
 

    
    
    

