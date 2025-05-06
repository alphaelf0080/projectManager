//報價清單列表


const priceTypeList = ['影片類型','遊戲類型','其他類型']  

const priceElementTypeList = ['前製','影片','遊戲','素材','後期','網頁','工具','其他']  




function priceListEditWin(parent,x,y,w,h,scale){   
    
   // var countPrePage = 20
    
   // var deptData = JSON.parse(window.localStorage.getItem("deptData"));
   // var userData = JSON.parse(window.localStorage.getItem("userData"));
   // var userSearchFilter = JSON.parse(window.localStorage.getItem("userSearchFilter"));

 //   var userCount = userData.length
  //  var totalUserPages =  Math.ceil(userCount / countPrePage)
    //console.log('deptData',userData,userCount)
    parent.removeChild(parent.getChildByName("priceListEditWin_container"))

    //價目表主視窗
    var priceListEditWinBlock = new moveAbleWinBlockB(uiBaseContainer,x,y,w,h,'價目表',20,20,15,'0xffffff','priceListEditWin_container',1,'0x555555',1,'0x333333',1,1,1,'0x007e97',daysApp,screenW,screenH,true)
    priceListEditWinBlock.scale.set(scale)
   
    
    for(var i = 0;i<priceTypeList.length;i++){
        
      ///  console.log(i,priceTypeList[i])
        var winW = 400
        var posX = 200 + i*(winW+20)
        var posY = 40
        var princListBlock =  new priceListStaticBlockA(priceListEditWinBlock,posX,posY,winW,770,priceTypeList[i],20,20,15,'0xffffff','princListBlock_container',1,'0x7dacd0',4,'0x7dacd0',0,0.2,0.8,'0x7dacd0',daysApp,screenW,screenH,false)          //priceListStaticBlockA(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn)  

        
    };
    
    var addNewPriceBtn = new buildBtnScaleC(priceListEditWinBlock,5,35,80,25,3,'新增價目','0xffffff',12,1,'0x234a5a',1,1,'0x337676')
        addNewPriceBtn.on('mousedown', function(){
                            console.log('press 新增價目')
                            
                            var newPriceEditWin = new priceEditWin(priceListEditWinBlock,120,35,'new')
                           

                            //buildProjectAddWinC
                            })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //細項價格清單
    var priceElementListBtn = new buildBtnScaleC(priceListEditWinBlock,5,70,80,25,3,'單項清單','0xffffff',12,1,'0x234a5a',1,1,'0x337676')
        priceElementListBtn.on('mousedown', function(){
                                console.log('press 單項清單')
                                 $.post("/getPriceElementDB", {   //runAllAutoEvents


                                        }, function(data) {
                                            console.log('getPriceElementDB')
                                            //console.log(data)
                                            var priceElementDB = data[1]
                                            //var pricePrefDB = data[1]
                                           // console.log(pricePrefDB)


                                            window.localStorage.setItem("priceElementDB", JSON.stringify(priceElementDB));
                                          //  window.localStorage.setItem("userFavTaskDB", JSON.stringify(userFavTaskDB));

                                           // projState.text = data[1][0]
                                           // return_enName.text = data[1][1]


                                    })
                           // var newPriceEditWin = new priceEditWin(priceListEditWinBlock,150,35,'new')
   //  var priceElementListWin = new moveAbleWinBlockC(priceListEditWinBlock,30,30,800,800,"項目列表",20,20,16,'0x223322','priceElementListWin_container',1,'0x222222',5,'0x353535',1,1,0.6,'0x599ac2',daysApp,screenW,screenH,true)    
                            var priceElementListWin = new buildPriceElementListWin(priceListEditWinBlock,100,40,1200,760)

                            //buildProjectAddWinC
                            }) 
    

 
    
   // var projectSelectWin = new moveAbleWinBlockB(uiBaseContainer,x,y,w,h,'專案列表',20,20,15,'0xaaddff',containerName,1,'0x2c697f',5,'0x8ae0fe',0.2,0.2,1,'0x2c697f',daysApp,screenW,screenH,true)
     //   projectSelectWin.name = containerName
    
    
     //simpleBlock(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,borderWidth,borderColor,borderRect,fillColor,borderAlpha,fillAlpha,blockName){
/*
    var userSelFilterWin = new  simpleBlock(userEditWin,5,33,userEditWin.width-5,30,'labelText',20,20,14,'0xffffff',1,'0x454545',5,'0x454545',0,0,'userSelFilterWin')
    
   
    
    
    //顯示所有user
    var allUserFilterBtn = new buildBtnScaleC(userSelFilterWin, 0 , 0 , 80,20,6 ,'ALL' ,'0xffffff',11,1,'0x333333',1,0,'0x4c6272')

        allUserFilterBtn.on('mousedown', function(){
          
            pressFilterBtn(this)
        allUserFilterBtn.filterKey = 'all'

            
            
        });
    
    
    
    //新增所有user
    var  addNewUserBtn= new buildBtnScaleC(userSelFilterWin,userEditWin.width-105, 0,90,20,6,'新 增 帳 號','0x111111',12,1,'0x333333',1,0,'0x67e4aa')
        addNewUserBtn.on('mousedown', function(){
                console.log('新增帳號')
       // var newUserAddWin = new moveAbleWinBlock(uiBaseContainer,userEditWin.width + userEditWin.x,30,300,600,'新 增 帳 號',20,20,14,'0xffffff','newUserAddWin_container',1,'0x555555',5,'0x777777',1,1,'0x555555',daysApp,screenW,screenH,true)
        var userEditWin = new buildUserDetialEditWin(uiBaseContainer,775,40,this,'selUserData','add')
                
        
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
       // console.log(serarchKey)  
        
        if(serarchKey == "all"){
            var userEditMainWin = new buildUserEditMainWin(userEditWin,daysApp,5,90,895,795,30,30,'0x333333','0x555555','0x777777','0xffffff',14,userData)     

            
        }else{
              var filterUserData = userData.filter(function(item, index, array){
                      return item[38] == serarchKey
              });     

            console.log(filterUserData)  
        
   
        
            var userEditMainWin = new buildUserEditMainWin(userEditWin,daysApp,5,90,895,795,30,30,'0x333333','0x555555','0x777777','0xffffff',14,filterUserData)     
        };
         
         
         
         
        
    };
    
    
    var userListLabel_name = new buildBtnScaleC(userEditWin,5,60,120,25,2,'人 員 名 稱','0xffffff',13,1,'0x333333',1,1,'0x565656')
    var userListLabel_Sec = new buildBtnScaleC(userEditWin,126,60,120,25,2,'所 屬 單 位','0xffffff',13,1,'0x333333',1,1,'0x565656')
    var userListLabel_Role = new buildBtnScaleC(userEditWin,246,60,120,25,2,'擔 任 工 作','0xffffff',13,1,'0x333333',1,1,'0x565656')
    var userListLabel_Desc = new buildBtnScaleC(userEditWin,366,60,200,25,2,'人 員 描 述','0xffffff',13,1,'0x333333',1,1,'0x565656')
   // var userListLabel_SearchKey = new buildBtnScaleC(userEditWin,566,60,150,25,2,'搜 尋 過 濾','0xffffff',13,1,'0x333333',1,1,'0x565656')


    //buildUserEditMainWin(parent,selApp,x,y,w,h,unit_W,unit_H,mainBlockColor,nameBGColor,secBGColor,fontColor,fontSize)
    var userEditMainWin = new buildUserEditMainWin(userEditWin,daysApp,5,90,895,795,30,30,'0x333333','0x555555','0x777777','0xffffff',14,userData)
    
*/
    
    
    
    return priceListEditWinBlock
                                                           
                                            

};


//新增價目表編輯視窗
function priceEditWin(parent,x,y,mode){
    
    if(mode == 'new'){
        var priceID = 'none'  
        var priceName = '請輸入價目名稱'  
        var priceDesc = '請輸入價目內容說明'  
        var priceType = '請選擇價目類別'  
        var priceTotalPrice = '價目估價'  
        var priceTotalDays = '預估工期'  
        
        var priceListUpdateDay = '修改日期'  
        var priceListUpdateUser = '修改人員'  

        
        var btnAType = 'primary'
        var btnAText = '新增價目'

    }else{
        var priceID = 'none'  
        var priceName = '請輸入價目名稱'  
        var priceDesc = '請輸入價目內容說明' 
        var priceType = '請選擇價目類別'  
        var priceTotalPrice = '價目估價'  
        var priceTotalDays = '預估工期'  
        var priceListUpdateDay = '修改日期'  
        var priceListUpdateUser = '修改人員'  

        var btnAType = 'secondary'
        var btnAText = '修改價目'


    };
    
    var lableFontSize = 12
    var winWidth = 1300
    var winHeighth = 800
    
    
     
     console.log(filterElementList)
    
    //UI

    var priceEditWin = new moveAbleWinBlockC(parent,x,y,winWidth,winHeighth,"價目項目表",20,20,16,'0x223322','priceEditWin_container',1,'0x222222',5,'0x353535',1,1,0.6,'0x599ac2',daysApp,screenW,screenH,true)    

        priceEditWin.interactive = true;   
    
        priceEditWin.priceElementList = []  //方已選擇已點擊暫存
    
        priceEditWin.priceSelectedList = [] // 左方已選擇暫存

    
    var addNewPriceWinBG = new addWinBlockB(priceEditWin,5 ,30 ,300,750 ,'addNewPriceWinBG_container',1,'0x222222',5,'0x222222',1,0.5)  // 左方價目項目表 資訊欄
    
    var selectPriceFilterWinBG = new addWinBlockB(priceEditWin,5 + addNewPriceWinBG.width +5 ,30 ,900,60 ,'selectPriceFilterWinBG_container',1,'0x226622',5,'0x777777',0,0.5)

    var addNewPriceListWinBG = new addWinBlockB(priceEditWin,5 + addNewPriceWinBG.width +5 ,95,450,650 ,'addNewPriceListWinBG_container',1,'0x555555',5,'0x555555',1,0.5)  //左方當前價目列表
   
    var selectPriceListWinBG = new addWinBlockB(priceEditWin,5 + addNewPriceWinBG.width +5 +420 +35 ,95 ,450,650 ,'selectPriceListWinBG_container',1,'0x222222',5,'0x222222',1,0.5) //右方價目列表

    
    var RemovePriceElementToListBtn = new buildBtnScaleB(priceEditWin,5 + addNewPriceWinBG.width +5 ,755,450,25,'移除','primary')
        RemovePriceElementToListBtn.name = 'RemovePriceElementToListBtn'
    
    var AddPriceElementToListBtn = new buildBtnScaleB(priceEditWin,5 + addNewPriceWinBG.width +5 +420 +35  ,755,450,25,'新增','primary')
        AddPriceElementToListBtn.name = 'AddPriceElementToListBtn'
    
    
    
        //新增單價
        AddPriceElementToListBtn.on('mousedown', function(){
                                    console.log('新增單價',priceEditWin.priceElementList )
                                    
                                    addElementToNewPriceList(addNewPriceListWinBG,priceEditWin.priceElementList)
            
                                    priceEditWin.priceSelectedList = []
            
            
                                })
    
    
    
        //移除單價
        RemovePriceElementToListBtn.on('mousedown', function(){
                                    console.log('移除單價',priceEditWin.priceSelectedList )
                                    
                                  //  
            
            

                                     priceEditWin.priceElementList =  priceEditWin.priceElementList.filter(item => !priceEditWin.priceSelectedList.includes(item))
                                // !!! Read below about array.includes(...) support !!!

                                    addElementToNewPriceList(addNewPriceListWinBG,priceEditWin.priceElementList)
                                    console.log(priceEditWin.priceElementList)

            
                                    var elementListBGWin = selectPriceListWinBG.getChildByName("elementListBGWin_container")
            
                                              //  console.log(elementListBGWin)

            
                                 //   var elementSelManiBKList =  elementListBGWin.children.filter(function(item, index, array){
                                  //                          return item[2] === filterKey
                                  //          });   
               
                                     var elementRemoveList = elementListBGWin.children.filter(function(item, index, array){

                                            return  priceEditWin.priceSelectedList.includes(item.elementID)

                                        });   
            
                                    console.log(elementRemoveList)
                                    for(var i = 0 ; i <  elementRemoveList.length ; i++ ){
                                        elementRemoveList[i].tint ="0xffffff"
                                          
                                    }
            
            
            
                                })
    
    var editPriceTemplateBtn = new confirmBtnWithIcon(priceEditWin,winWidth -30,60,'0x333333','0x77aa77',1.7)
    var delPriceTemplateBtn = new deleteBtnWithIcon(priceEditWin,winWidth -30,120,'0x333333','0xee7777',1.7)

    
    
    //UI

    
    
        editPriceTemplateBtn.on('mousedown', function(){
                                console.log('editPriceTemplateBtn')
                                    
                                })
    
        delPriceTemplateBtn.on('mousedown', function(){
                                console.log('delPriceTemplateBtn')
                                    
                                })
    
    var filterElementList = new callPriceElementData('all')

    
    var priceElementListBlock = new buildPriceElementListINSelBlock(selectPriceListWinBG,0,0,filterElementList)  //呼叫選取項目

    
    
    
    
    //filter BTN
    var numCol = 10
    var iconWidth = 60
    var iconHeight = 20
    var addNewPriceElemenFiltert_All_Btn =  new buildBtnScaleC(selectPriceFilterWinBG,10,5 ,iconWidth,iconHeight,3,'ALL','0xffffff',13,1,'0x348d50',1,1,'0x348d50')

    
    for(var i = 0; i<priceElementTypeList.length ; i++){
        
            var btnText = priceElementTypeList[i]

            var posX = ((i+1)% numCol) * (iconWidth+5) +10 //+65
            var posY = (Math.floor((i+1)/ numCol))*(iconHeight+5) + 5//Math.floor((toIndex-i)/ numCol) *(iconWidth+20) +10
            
            
            var addNewPriceElemenFiltertBtn =  new buildBtnScaleC(selectPriceFilterWinBG,posX,posY ,iconWidth,iconHeight,3,btnText,'0xffffff',13,1,'0x344d50',1,1,'0x344d50')
                addNewPriceElemenFiltertBtn.filterType = priceElementTypeList[i]
                addNewPriceElemenFiltertBtn.btnText = btnText

                addNewPriceElemenFiltertBtn.on('mousedown', function(){
                            console.log('press ' + this.filterType)
                           // console.log(this)
                            callPriceElement(this.filterType)

                    /*
                            var filterElementList = priceElementDB.filter(function(item, index, array){
                                                            return item[2] === this.btnText
                                                    });   
                                console.log(filterElementList)
                                */
                                //var priceElementListBlock = new buildPriceElementListBlock(priceElementListWin,130,30,priceElementDB)  //初始化價格項目 (ALL)

                            //buildProjectAddWinC
                            }) 
        
          
                                         //buildBtnScaleC(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type)
    }; 
    
    //priceElementTypeList
    
    
    var blockStep = 30
    var priceSearchID_InputBox = new inputBoxWithLabelB(addNewPriceWinBG,10,40,70,70,2,'ID:',priceID,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceSearchID_InputBox.name = 'priceSearchID_InputBox'
        priceSearchID_InputBox.disabled = true    
    
    var priceListName_InputBox = new inputBoxWithLabelB(addNewPriceWinBG,10,80,70,200,2,'名稱:',priceName,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceListName_InputBox.name = 'priceListName_InputBox'
    
    var priceListDesc_InputBox = new inputBoxWithLabelB(addNewPriceWinBG,10,80 + blockStep * 1 ,70,200,2,'說明:',priceDesc,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceListDesc_InputBox.name = 'priceListDesc_InputBox'
    
    var priceListType_InputBox = new inputBoxWithLabelB(addNewPriceWinBG,10,80 + blockStep * 2 ,70,200,2,'類別:',priceType,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceListType_InputBox.name = 'priceListType_InputBox'
        priceListType_InputBox.disabled = true    
    
    
 

             
        priceListType_InputBox.interactive = true;
        priceListType_InputBox.buttonMode = true;
    

        priceListType_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                            console.log('priceListType_InputBox')
                               // var winW = 180
                                var winH = priceTypeList.length *25 + 70 +20
                   
                              // console.log(priceEditWin.position.x,priceEditWin.position.y,priceEditWin.width)
                                var posX = addNewPriceWinBG.position.x + winWidth +60
                                var posY = 75
                              
                                
                                var priceTypeSelWinBG = new moveAbleWinBlockC(uiBaseContainer,posX,posY,185,winH,'價目類型',20,20,16,'0xffffff','priceTypeSelWin_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    
                 
                                var priceTypeSelWin  = new buildOptionSelectWinA(priceTypeSelWinBG,0,0,185,winH,'價目類型',priceTypeList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,priceListType_InputBox,true,false)
               
                               // var openDaysSelWin  = new buildOptionSelectWinA(priceTypeSelWin,0,0,winW,winH,'任務類型',priceTypeList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,priceListType_InputBox,true,false)
                                                    //buildOptionSelectWinA(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,returnInputBox)
                                                  //  buildSelectionWinD(parent,x,y,w,h,tapeText,dataList,returnInputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})


    
    
    
    var priceListTotalPrice_InputBox = new inputBoxWithLabelB(addNewPriceWinBG,10,80 + blockStep * 3 ,70,200,2,'估價:',priceTotalPrice,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceListTotalPrice_InputBox.name = 'priceListTotalPrice_InputBox'
        priceListTotalPrice_InputBox.disabled = true    

   
    var priceListTotalWokingDays_InputBox = new inputBoxWithLabelB(addNewPriceWinBG,10,80 + blockStep * 4 ,70,200,2,'工期:',priceTotalDays,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceListTotalWokingDays_InputBox.name = 'priceListTotalWokingDays_InputBox'
        priceListTotalWokingDays_InputBox.disabled = true   
    
    var priceListUpdateDay_InputBox = new inputBoxWithLabelB(addNewPriceWinBG,10,80 + blockStep * 5 ,70,200,2,'修改日:',priceListUpdateDay,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceListUpdateDay_InputBox.name = 'priceListUpdateDay_InputBox'
        priceListUpdateDay_InputBox.disabled = true   
    
    var priceListUpdateUser_InputBox = new inputBoxWithLabelB(addNewPriceWinBG,10,80 + blockStep * 6 ,70,200,2,'修改人:',priceListUpdateUser,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceListUpdateUser_InputBox.name = 'priceListUpdateUser_InputBox'
        priceListUpdateUser_InputBox.disabled = true    
    
       // priceListName_InputBox.disabled = true  

   // taskSearchID_InputBox.children[2].position.x = 20
    //taskSearchID_InputBox.text = '0'
    
    
    var priceListAddBtn = new buildBtnScaleB(addNewPriceWinBG,10,350,200,25,btnAText,btnAType)
        priceListAddBtn.name = 'priceListAddBtn'
    
    
        priceListAddBtn.on('mousedown',function(){this.alpha=0.5;
                            console.log('新增價目')

                            console.log('右方選擇 【 加入 】 元件',priceEditWin.priceElementList)                      
                                                  
                            console.log('左方選擇 【 清除 】 元件',priceEditWin.priceSelectedList)    
                                                  
                                                  
                                                  
                            var d = new Date()
                           // var todayStriyjo4clcg =  String(new Date())
                            var toDayMDY = String(d.getMonth()+1) +','+ String(d.getDate()) +','+ String(d.getFullYear())

                            console.log(toDayMDY)
                                                  
                      
                            var currentAddPriceElementContainer = addNewPriceListWinBG.getChildByName("elementListBGWin_container")

                             console.log(currentAddPriceElementContainer)

                                    if( currentAddPriceElementContainer == null){
                                        console.log('無價目清單')   
                                    }else{

                                      //  console.log(currentAddPriceElementContainer.children)   
                                        
                                        var priceElementList = currentAddPriceElementContainer.children.filter(function(item, index, array){
                                                            return item.name === "elementSelManiBK"
                                            });   
               
                                         console.log(priceElementList)   
                                    };
                                                  
                            })
    
    
    
    
    
    
};




function callPriceElementData(filterKey){
    
      console.log('讀取報價資料庫')
     $.post("/getPriceElementDB", {   //runAllAutoEvents


            }, function(data) {
                console.log('getPriceElementDB')
                //console.log(data)
                var priceElementDB = data[1]



                window.localStorage.setItem("priceElementDB", JSON.stringify(priceElementDB));


        })

        if( filterKey == 'all'){
            
                var filterElementList  = JSON.parse(window.localStorage.getItem("priceElementDB"))

           }else{

                var priceElementDB = JSON.parse(window.localStorage.getItem("priceElementDB"))

                    var filterElementList = priceElementDB.filter(function(item, index, array){
                                                            return item[2] === filterKey
                                            });   
               
           };

       
      //  console.log(filterElementList)
    
        
        
 
                            
     return filterElementList
                       
                         
   //  var priceElementListWin = new buildPriceElementListWin(priceListEditWinBlock,100,40,1200,760)                        
    
};



function priceListStaticBlockA(parent,x,y,w,h,labelText,textX,textY,fontSize,fontColor,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha,darkAlpha,winTapeColor,selApp,screenW,screenH,closeBtn){   //創建視窗
   // console.log(fontColor)
    
    //deleteExitsted WinBlock
    
  //  parent.removeChild(parent.getChildByName(containerName))
    
    
    
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


    /*
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
    */

    
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

    /*
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
    

    */
    
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



//單項價目編輯視窗
function buildPriceElementListWin(parent,x,y,w,h){
    

    
    var priceElementDB = JSON.parse(window.localStorage.getItem("priceElementDB"))
    console.log(priceElementDB)
    var priceElementListWin = new moveAbleWinBlockC(parent,x,y,w,h,"項目列表",20,20,16,'0x223322','priceElementListWin_container',1,'0x222222',5,'0x353535',1,1,0.6,'0x599ac2',daysApp,screenW,screenH,true)    
    
    
    
    var priceElementListBlock = new buildPriceElementListBlock(priceElementListWin,130,30,priceElementDB)  //初始化價格項目 (ALL)
    
    
    var addNewPriceElementBtn = new buildBtnScaleC(priceElementListWin,10,40,90,25,3,'新增項目','0xffffff',13,1,'0x234a5a',1,1,'0x337676')
        addNewPriceElementBtn.on('mousedown', function(){
                            console.log('press 新增項目')
                            
                           // var newPriceEditWin = new priceEditWin(priceListEditWinBlock,150,35,'new')
   //  var priceElementListWin = new moveAbleWinBlockC(priceListEditWinBlock,30,30,800,800,"項目列表",20,20,16,'0x223322','priceElementListWin_container',1,'0x222222',5,'0x353535',1,1,0.6,'0x599ac2',daysApp,screenW,screenH,true)    
                            var priceElementEditWinBlock = new buildPriceElementEditWin(priceElementListWin,50,70,'none','new')

                            //buildProjectAddWinC
                            }) 
                             //   var newPriceEditWin = new priceEditWin(priceListEditWinBlock,150,35,'new
    
    
    
    
   // console.log(priceElementTypeList)
    
    var priceElementFilterBGWin = new addWinBlockB(priceElementListWin,5 ,80 ,93 ,priceElementTypeList.length *30 +35 ,'priceElementFilterBGWin_container',0,'0x779977',1,'0x779977',1,0.1)
    
    var addNewPriceElemenFiltertAllBtn = new buildBtnScaleC(priceElementFilterBGWin,7, 5 ,80,20,3,'ALL','0xffffff',13,1,'0x344d50',1,1,'0x344d50')

    for(var i = 0; i<priceElementTypeList.length ; i++){
        
            var btnText = priceElementTypeList[i]
            var addNewPriceElemenFiltertBtn =  new buildBtnScaleC(priceElementFilterBGWin,7,i*30 +5 +30 ,80,20,3,btnText,'0xffffff',13,1,'0x344d50',1,1,'0x344d50')
                addNewPriceElemenFiltertBtn.filterType = priceElementTypeList[i]
                addNewPriceElemenFiltertBtn.btnText = btnText

                addNewPriceElemenFiltertBtn.on('mousedown', function(){
                            console.log('press ' + this.filterType)
                           // console.log(this)
                            callPriceElement(this.filterType)

                    /*
                            var filterElementList = priceElementDB.filter(function(item, index, array){
                                                            return item[2] === this.btnText
                                                    });   
                                console.log(filterElementList)
                                */
                                //var priceElementListBlock = new buildPriceElementListBlock(priceElementListWin,130,30,priceElementDB)  //初始化價格項目 (ALL)

                            //buildProjectAddWinC
                            }) 
        
          
                                         //buildBtnScaleC(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type)
    }; 
    
    
    function callPriceElement(filterKey){
        
      //  console.log(filterKey)
      //  console.log(priceElementDB)
        var filterElementList = priceElementDB.filter(function(item, index, array){
                                                            return item[2] === filterKey
                                                    });   
        console.log(filterElementList)
        
        var priceElementListBlock = new buildPriceElementListBlock(priceElementListWin,130,30,filterElementList)  //呼叫選取項目
        
    }
    
    
    addNewPriceElemenFiltertAllBtn.on('mousedown', function(){
                            console.log('press ALL')
                            
 
                            var priceElementListBlock = new buildPriceElementListBlock(priceElementListWin,130,30,priceElementDB)  //初始化價格項目 (ALL)

                            //buildProjectAddWinC
                            }) 
    
    
    

    
};



//function buildPriceElementEditWin




function buildPriceElementListBlock(parent,x,y,selectPriceEmementList){
    
    console.log('buildPriceElementListBlock')
   // console.log(selectPriceEmementList)
    
    parent.removeChild(parent.getChildByName('elementListBGWin_container'))
    parent.removeChild(parent.getChildByName('barBGBlock'))
    parent.removeChild(parent.getChildByName('dragBarMask'))


    var allElementCount = selectPriceEmementList.length
    
    var elementBKH = 60
    var elementListBGWinWidth = 450
    var dragBKH = 720
    var lableFontSize = 12
    var barOutlineHeight = 720

   // var totalProjCount = myProjCount + teamProjCount + allProjCount
    var dragHeight = allElementCount * elementBKH + 20*3 + 10

    var elementListBGWin = new addWinBlockB(parent,x,y,elementListBGWinWidth-5,dragHeight,'elementListBGWin_container',0,'0xff0000',1,'0xaaffcc',1,0.1)
                             //addWinBlockB(parent,x,y,w,h,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha)
    var elementListBGWin_Mask =  new addWinBlockB(parent,x,y,elementListBGWinWidth+100,dragBKH,'elementListBGWin_Mask_container',0,'0xff0000',1,'0x00ff00',0,1)
        
      //  new addWinBlock(parent,x,y,elementListBGWinWidth,dragBKH,'',0,0,12,'0xffffff','elementListBGWin_Mask_container',0,'0xff0000',1,'0xffff00',0,1)
        elementListBGWin.mask = elementListBGWin_Mask
    
  //  var priceElementEditBGWin = new addWinBlockB(parent,x + elementListBGWinWidth +20 ,y,elementListBGWinWidth+100 ,barOutlineHeight,'priceElementEditBGWin_container',0,'0xff0000',1,'0xaaaaaa',1,0.1)

    
    
    
    
    
    for(var i = 0 ; i < allElementCount; i++){
        
       // console.log(allProjectList[i])
        var selElement =  selectPriceEmementList[i]
        var element_ID =  selElement[0]

        var element_Name = selElement[1]
        var element_Type = selElement[2]
        var element_Desc = selElement[3]

        var posX = 5
        var poxY = i * elementBKH 
        
        var totalPrice =   selElement[4]*selElement[5]*selElement[6] + selElement[8]*selElement[9]*selElement[10] + selElement[12]*selElement[13]*selElement[14] + selElement[17] + selElement[20]+ selElement[23]
        console.log(totalPrice)
        var elementBlock = new buildPriceElementBlock(elementListBGWin,posX,poxY,elementListBGWinWidth-16,elementBKH - 2,5,'0xffffff',15,'0xff0000',1,'0x83a5bd',0,1,element_Name,'0x123456',14,element_Desc,element_ID,element_Type,totalPrice,0.1)
   
    };
    
    if( allElementCount < 13   ){
        var dragBarHeight = barOutlineHeight -2
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( allElementCount * elementBKH))*barOutlineHeight
        
    };
    
     var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0x223344',0.7);
        barBGBlock.drawRoundedRect(0,0, 15,barOutlineHeight, 2);
        barBGBlock.endFill();      
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = x + elementListBGWinWidth //-20
        barBGBlock.y = y
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
        dragBarMask.x =  x + elementListBGWinWidth
        dragBarMask.y = y
        parent.addChild(dragBarMask)
        dragBar.mask = dragBarMask
    

   if( allElementCount < 13  ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    };  
    
    
    dragBar
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);


    function onDragStart(e) {

        
        var mouseposition = daysApp.renderer.plugins.interaction.mouse.global;  


        this.dragging = true;

        this.deltaPosY = mouseposition.y  



    }
    

    var elementWinTopY = y
    
    function onDragMove(e) {
        if(this.dragging == true){

            this.data = e.data;
           // console.log(this.position.y,this.getBounds().height)
            
            
            var newPosition =  daysApp.renderer.plugins.interaction.mouse.global//this.data.getLocalPosition(this.parent);
            var deltaY = newPosition.y -  this.deltaPosY
          //  console.log(newPosition.y,this.deltaPosY,deltaY)
            if(deltaY < 1){
                
                if(this.position.y < 1 ){
                 //   console.log('aaaaaa')
                    this.y = 1     
                    elementListBGWin.position.y = elementWinTopY  // 專案列表 回到最上方
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
                    elementListBGWin.position.y = elementWinTopY - elementListBGWin.height * (deltaY/(barOutlineHeight-1))
                    
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
        var newPosition =  daysApp.renderer.plugins.interaction.mouse.global
                    
        if(this.position.y < 1 ){
            this.y = 1     
            elementListBGWin.position.y = elementWinTopY
        }else if(this.position.y + this.getBounds().height > (barOutlineHeight-1)){
            this.y = (barOutlineHeight-1) -  this.getBounds().height      
            elementListBGWin.position.y = elementWinTopY- (Math.abs(allElementCount*elementBKH - (barOutlineHeight-1))) //60 + projListBGWin.height * (739/projListBGWin.height)
        }else{
           // this.y = newPosition.y - this.deltaPosY;   
                    
        };
            

    };
    
    
    
    
    
};






function buildPriceElementListINSelBlock(parent,x,y,selectPriceEmementList){   //全部單項價目
    
    console.log('buildPriceElementListBlock')
   // console.log(selectPriceEmementList)
    
    parent.removeChild(parent.getChildByName('elementListBGWin_container'))
    parent.removeChild(parent.getChildByName('barBGBlock'))
    parent.removeChild(parent.getChildByName('dragBarMask'))


    var allElementCount = selectPriceEmementList.length
    
    var elementBKH = 60
    var elementListBGWinWidth = parent.width-20
    var dragBKH = parent.height
    var lableFontSize = 12
    var barOutlineHeight = parent.height

   // var totalProjCount = myProjCount + teamProjCount + allProjCount
    var dragHeight = allElementCount * elementBKH + 20*3 + 10

    var elementListBGWin = new addWinBlockB(parent,x,y,elementListBGWinWidth-5,dragHeight,'elementListBGWin_container',0,'0xff0000',1,'0xaaffcc',1,0.1)
                             //addWinBlockB(parent,x,y,w,h,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha)
    var elementListBGWin_Mask =  new addWinBlockB(parent,x,y,elementListBGWinWidth+100,dragBKH,'elementListBGWin_Mask_container',0,'0xff0000',1,'0x00ff00',0,1)
        
      //  new addWinBlock(parent,x,y,elementListBGWinWidth,dragBKH,'',0,0,12,'0xffffff','elementListBGWin_Mask_container',0,'0xff0000',1,'0xffff00',0,1)
        elementListBGWin.mask = elementListBGWin_Mask
    
  //  var priceElementEditBGWin = new addWinBlockB(parent,x + elementListBGWinWidth +20 ,y,elementListBGWinWidth+100 ,barOutlineHeight,'priceElementEditBGWin_container',0,'0xff0000',1,'0xaaaaaa',1,0.1)

    
    
    
    
    
    for(var i = 0 ; i < allElementCount; i++){
        
       // console.log(allProjectList[i])
        var selElement =  selectPriceEmementList[i]
        var element_ID =  selElement[0]

        var element_Name = selElement[1]
        var element_Type = selElement[2]
        var element_Desc = selElement[3]

        var posX = 5
        var poxY = i * elementBKH 
        
        var totalPrice =   selElement[4]*selElement[5]*selElement[6] + selElement[8]*selElement[9]*selElement[10] + selElement[12]*selElement[13]*selElement[14] + selElement[17] + selElement[20]+ selElement[23]
        console.log(totalPrice)
        var elementBlock = new buildPriceElementBlockB(elementListBGWin,posX,poxY,elementListBGWinWidth-16,elementBKH - 2,5,'0xffffff',15,'0xff0000',1,'0x83a5bd',0,1,element_Name,'0x123456',14,element_Desc,element_ID,element_Type,totalPrice,0.1)
   
    };
    
    if( allElementCount < 13   ){
        var dragBarHeight = barOutlineHeight -2
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( allElementCount * elementBKH))*barOutlineHeight
        
    };
    
     var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0x223344',0.7);
        barBGBlock.drawRoundedRect(0,0, 15,barOutlineHeight, 2);
        barBGBlock.endFill();      
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = x + elementListBGWinWidth //-20
        barBGBlock.y = y
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
        dragBarMask.x =  x + elementListBGWinWidth
        dragBarMask.y = y
        parent.addChild(dragBarMask)
        dragBar.mask = dragBarMask
    

   if( allElementCount < 13  ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    };  
    
    
    dragBar
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);


    function onDragStart(e) {

        
        var mouseposition = daysApp.renderer.plugins.interaction.mouse.global;  


        this.dragging = true;

        this.deltaPosY = mouseposition.y  
        
        this.originalPosY = this.y
        
        elementListBGWin.originalY = elementListBGWin.position.y

        console.log(this.position.y,this.getBounds().height,elementListBGWin.y)

        console.log('deltaPosY',this.deltaPosY,this.y)
    }
    

    var elementWinTopY = 0//y
    
    function onDragMove(e) {
        if(this.dragging == true){

            this.data = e.data;
          //  console.log(this.position.y,this.getBounds().height)
            
            
            var newPosition =  daysApp.renderer.plugins.interaction.mouse.global//current mouse point position      //this.data.getLocalPosition(this.parent);
            var deltaY = newPosition.y -  this.deltaPosY   // compare with original position and newposition, that mouse point
            console.log( this.deltaPosY ,newPosition.y,deltaY,this.position.y)
            if(deltaY < 1){
                
                if(this.position.y < 1 ){
                   console.log('aaaaaa')
                    this.y = 1     
                    elementListBGWin.position.y = elementWinTopY  // 專案列表 回到最上方
                  //  console.log(projListBGWin.getBounds())
                }else{
                    console.log('bbbbbb')

                  this.y =this.originalPosY + deltaY // newPosition.y - this.deltaPosY;    
                //  elementListBGWin.position.y = elementWinTopY - elementListBGWin.height * (deltaY/739)
                    
                   elementListBGWin.position.y =   - (this.y /  (barOutlineHeight-this.getBounds().height-1))*elementListBGWin.height
                    
                   // elementListBGWin.position.y =  elementWinTopY + elementListBGWin.height * (deltaY/(barOutlineHeight-1)) //+ elementListBGWin.originalY

                }

                
            }else{
                
                if(this.position.y + this.getBounds().height > (barOutlineHeight-1)) {
                   console.log('33333333333')

                    //this.y = 739 -  this.getBounds().height        
                    //projListBGWin.position.y = 60 + projListBGWin.height-739
                }else{
                    
                   console.log('44444444444444444',deltaY) 
                    this.y = this.originalPosY + deltaY  //newPosition.y - this.deltaPosY;   
                   // elementListBGWin.position.y =  -(elementWinTopY + elementListBGWin.height * (deltaY/(barOutlineHeight-1))) //+ elementListBGWin.originalY
                   elementListBGWin.position.y =   - (this.y /  (barOutlineHeight-this.getBounds().height-1))*elementListBGWin.height

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
        var newPosition =  daysApp.renderer.plugins.interaction.mouse.global
                    
        if(this.position.y < 1 ){
            this.y = 1     
            elementListBGWin.position.y = elementWinTopY
        }else if(this.position.y + this.getBounds().height > (barOutlineHeight-1)){
            this.y = (barOutlineHeight-1) -  this.getBounds().height      
            elementListBGWin.position.y = elementWinTopY- (Math.abs(allElementCount*elementBKH - (barOutlineHeight-1))) //60 + projListBGWin.height * (739/projListBGWin.height)
        }else{
           // this.y = newPosition.y - this.deltaPosY;   
                    
        };
            

    };
    
    
    
    
    
};






//新增單項編輯室窗 單項價格工時編輯
function buildPriceElementEditWin(parent,x,y,elementData,mode){
    var pricePrefDB = JSON.parse(window.localStorage.getItem("pricePrefDB"))
    var priceElementDB = JSON.parse(window.localStorage.getItem("priceElementDB"))

    console.log(pricePrefDB)
    console.log(priceElementDB)
    console.log(elementData)


    if(mode == 'new'){
        var priceElementID = 'none'  
        var priceElementName = '請輸入項目名稱'  
        var priceElementDesc = '請輸入項目內容說明'  
        var priceElementType = '請選擇項目類別'  
        
        var priceElementManA = 1 
        var priceElementManHourA = 8
        var priceElementUnitPriceA = pricePrefDB[0][3]
        var priceElementUnitPriceUnitA  = pricePrefDB[0][2]

        var priceElementManB = 0 
        var priceElementManHourB = 0
        var priceElementUnitPriceB = pricePrefDB[1][3]
        var priceElementUnitPriceUnitB  = pricePrefDB[1][2]

        var priceElementManC = 0 
        var priceElementManHourC = 0
        var priceElementUnitPriceC = pricePrefDB[2][3]
        var priceElementUnitPriceUnitC  = pricePrefDB[2][2]

        var priceElementOtherA_desc =  pricePrefDB[3][4]
        var priceElementOtherA_price = pricePrefDB[3][3]
        var priceElementOtherA_PriceUnit = pricePrefDB[3][2]

        
        var priceElementOtherB_desc =  pricePrefDB[4][4]
        var priceElementOtherB_price = pricePrefDB[4][3]
        var priceElementOtherB_PriceUnit = pricePrefDB[4][2]
        
        var priceElementOtherC_desc =  pricePrefDB[5][4]
        var priceElementOtherC_price = pricePrefDB[5][3]
        var priceElementOtherC_PriceUnit = pricePrefDB[5][2]
         
        
        var btnAType = 'primary'
        var btnAText = '新增價目'

    }else{
        
        
        var priceElementID = elementData[0]
        var priceElementName =  elementData[1]
        var priceElementDesc =  elementData[3]
        var priceElementType =  elementData[2]
        
        var priceElementManA =  elementData[4]
        var priceElementManHourA = elementData[5]
        var priceElementUnitPriceA = elementData[6]
        var priceElementUnitPriceUnitA  = elementData[7]

        var priceElementManB =  elementData[8]
        var priceElementManHourB =  elementData[9]
        var priceElementUnitPriceB =  elementData[10]
        var priceElementUnitPriceUnitB  =  elementData[11]

        var priceElementManC = elementData[12]
        var priceElementManHourC = elementData[13]
        var priceElementUnitPriceC =  elementData[14]
        var priceElementUnitPriceUnitC  =  elementData[15]

        var priceElementOtherA_desc =  elementData[16]
        var priceElementOtherA_price = elementData[17]
        var priceElementOtherA_PriceUnit = elementData[18]

        
        var priceElementOtherB_desc =  elementData[19]
        var priceElementOtherB_price = elementData[20]
        var priceElementOtherB_PriceUnit = elementData[21]
        
        var priceElementOtherC_desc =  elementData[22]
        var priceElementOtherC_price = elementData[23]
        var priceElementOtherC_PriceUnit = elementData[24]
         

        var btnAType = 'secondary'
        var btnAText = '修改價目'

        
       


    };
    
    var lableFontSize = 12
    var winWidth = 720
    var winHeighth = 600
    console.log(parent,x,y,winWidth,winHeighth)
    var priceElementEditWin = new moveAbleWinBlockC(parent,x,y,winWidth,winHeighth,"單項價格工時編輯",20,20,16,'0x223322','priceElementEditWin_container',1,'0x222222',5,'0x353535',1,1,0.6,'0x599ac2',daysApp,screenW,screenH,true)    

        priceElementEditWin.interactive = true;    

    var blockStep = 30
    var priceElementSearchID_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,40,80,70,2,'ID:',priceElementID,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementSearchID_InputBox.name = 'priceElementSearchID_InputBox'
        priceElementSearchID_InputBox.disabled = true    
     
    var priceElementType_InputBox = new inputBoxWithLabelB(priceElementEditWin,200,40 ,80,150,2,'類別:',priceElementType,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementType_InputBox.name = 'priceElementType_InputBox'
        priceElementType_InputBox.disabled = true    
    
  
    var priceElementName_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,80,80,500,2,'名稱:',priceElementName,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementName_InputBox.name = 'priceElementName_InputBox'
    
    var priceElementDesc_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,80 + blockStep * 1 ,80,500,2,'說明:',priceElementDesc,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementDesc_InputBox.name = 'priceElementDesc_InputBox'
    

    var errMsg_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,80 + blockStep * 15 ,90,500,1,'錯誤訊息:',"",lableFontSize,'0xaaaaaa','0x999999',2,'0xaaaaaa',0.1,'0x353535','left')
        errMsg_InputBox.name = 'errMsg_InputBox'
    
    
    //人力成本A

    var priceElementManA_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,80 + blockStep * 4 ,100,80,2,'人力A(人):',priceElementManA,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementManA_InputBox.name = 'priceElementManA_InputBox'
       // priceElementMan_InputBox.disabled = true   
    
    
    var priceElementManHourA_InputBox = new inputBoxWithLabelB(priceElementEditWin,220,80 + blockStep * 4 ,100,80,2,'工時A(時):',priceElementManHourA,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementManHourA_InputBox.name = 'priceElementManHourA_InputBox'  
    
   
    
    var priceElementUnitPriceA_InputBox = new inputBoxWithLabelB(priceElementEditWin,420,80 + blockStep * 4 ,80,80,2,'成本A:',priceElementUnitPriceA,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementUnitPriceA_InputBox.name = 'priceElementUnitPriceA_InputBox'  
    
   
    var priceElementUnitPriceUnitA_InputBox = new inputBoxWithLabelB(priceElementEditWin,480,80 + blockStep * 4 ,110,60,2,'',priceElementUnitPriceUnitA,lableFontSize,'0xaaaaaa','0x111111',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementUnitPriceUnitA_InputBox.name = 'priceElementUnitPriceUnitA_InputBox'  
        priceElementUnitPriceUnitA_InputBox.disabled = true    
  
    
    //人力成本B
    var priceElementManB_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,80 + blockStep * 5 ,100,80,2,'人力B(人):',priceElementManB,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementManB_InputBox.name = 'priceElementManB_InputBox'
       // priceElementMan_InputBox.disabled = true   
    
    
    var priceElementManHourB_InputBox = new inputBoxWithLabelB(priceElementEditWin,220,80 + blockStep * 5 ,100,80,2,'工時B(時):',priceElementManHourB,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementManHourB_InputBox.name = 'priceElementManHourB_InputBox'  
    
   
    
    var priceElementUnitPriceB_InputBox = new inputBoxWithLabelB(priceElementEditWin,420,80 + blockStep * 5 ,80,80,2,'成本B:',priceElementUnitPriceB,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementUnitPriceB_InputBox.name = 'priceElementUnitPriceB_InputBox'  
    
    
    

    var priceElementUnitPriceUnitB_InputBox = new inputBoxWithLabelB(priceElementEditWin,480,80 + blockStep * 5 ,110,60,2,'',priceElementUnitPriceUnitB,lableFontSize,'0xaaaaaa','0x111111',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementUnitPriceUnitB_InputBox.name = 'priceElementUnitPriceUnitB_InputBox'  
        priceElementUnitPriceUnitB_InputBox.disabled = true   
   
    
    
    
    
    
    
      //人力成本C 
    
    
    var priceElementManC_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,80 + blockStep * 6 ,100,80,2,'人力C(人):',priceElementManC,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementManC_InputBox.name = 'priceElementManC_InputBox'
       // priceElementMan_InputBox.disabled = true   
    
    
    var priceElementManHourC_InputBox = new inputBoxWithLabelB(priceElementEditWin,220,80 + blockStep * 6 ,100,80,2,'工時C(時):',priceElementManHourC,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementManHourC_InputBox.name = 'priceElementManHourC_InputBox'  
    
   
    
    var priceElementUnitPriceC_InputBox = new inputBoxWithLabelB(priceElementEditWin,420,80 + blockStep * 6 ,80,80,2,'成本C:',priceElementUnitPriceC,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementUnitPriceC_InputBox.name = 'priceElementUnitPriceC_InputBox'  

    
    var priceElementUnitPriceUnitC_InputBox = new inputBoxWithLabelB(priceElementEditWin,480,80 + blockStep * 6 ,110,60,2,'',priceElementUnitPriceUnitC,lableFontSize,'0xaaaaaa','0x111111',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementUnitPriceUnitC_InputBox.name = 'priceElementUnitPriceUnitC_InputBox'  
        priceElementUnitPriceUnitC_InputBox.disabled = true        

    
    
    
    
    
    //其他支出A   
        
    var priceElementOtherA_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,80 + blockStep * 8 ,100,280,2,'支出A:',priceElementOtherA_desc,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementOtherA_InputBox.name = 'priceElementOtherA_InputBox'
       // priceElementMan_InputBox.disabled = true   
    
    var priceElementOtherA_price_InputBox = new inputBoxWithLabelB(priceElementEditWin,420,80 + blockStep *8 ,80,80,2,'支出A:',priceElementOtherA_price,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementOtherA_price_InputBox.name = 'priceElementOtherA_price_InputBox'  
    
    
    

    var priceElementOtherA_UnitA_InputBox = new inputBoxWithLabelB(priceElementEditWin,480,80 + blockStep * 8 ,110,60,2,'',priceElementOtherA_PriceUnit,lableFontSize,'0xaaaaaa','0x111111',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementOtherA_UnitA_InputBox.name = 'priceElementOtherA_UnitA_InputBox'  
        priceElementOtherA_UnitA_InputBox.disabled = true        
 
    
    
     
    //其他支出B  
        
    var priceElementOtherB_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,80 + blockStep * 9 ,100,280,2,'支出B:',priceElementOtherB_desc,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementOtherB_InputBox.name = 'priceElementOtherB_InputBox'
       // priceElementMan_InputBox.disabled = true   
    
    var priceElementOtherB_price_InputBox = new inputBoxWithLabelB(priceElementEditWin,420,80 + blockStep *9 ,80,80,2,'支出B:',priceElementOtherB_price,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementOtherB_price_InputBox.name = 'priceElementOtherB_price_InputBox'  
    
    
    

    var priceElementOtherB_UnitA_InputBox = new inputBoxWithLabelB(priceElementEditWin,480,80 + blockStep * 9 ,110,60,2,'',priceElementOtherB_PriceUnit,lableFontSize,'0xaaaaaa','0x111111',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementOtherB_UnitA_InputBox.name = 'priceElementOtherB_price_InputBox'  
        priceElementOtherB_UnitA_InputBox.disabled = true        
 
   
    
    
    //其他支出C  
        
    var priceElementOtherC_InputBox = new inputBoxWithLabelB(priceElementEditWin,20,80 + blockStep * 10 ,100,280,2,'支出C:',priceElementOtherC_desc,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementOtherC_InputBox.name = 'priceElementOtherC_InputBox'
       // priceElementMan_InputBox.disabled = true   
    
    var priceElementOtherC_price_InputBox = new inputBoxWithLabelB(priceElementEditWin,420,80 + blockStep *10 ,80,80,2,'支出C:',priceElementOtherC_price,lableFontSize,'0xaaaaaa','0xcccccc',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementOtherC_price_InputBox.name = 'priceElementOtherC_price_InputBox'  
    
    
    

    var priceElementOtherC_UnitA_InputBox = new inputBoxWithLabelB(priceElementEditWin,480,80 + blockStep * 10 ,110,60,2,'',priceElementOtherC_PriceUnit,lableFontSize,'0xaaaaaa','0x111111',2,'0xaaaaaa',0.1,'0x555555','center')
        priceElementOtherC_UnitA_InputBox.name = 'priceElementOtherC_UnitA_InputBox'  
        priceElementOtherC_UnitA_InputBox.disabled = true        
  
    
    
    
    
    
    
            
        priceElementType_InputBox.interactive = true;
        priceElementType_InputBox.buttonMode = true;

        priceElementType_InputBox.on('pointerover', function(){this.alpha=0.5;})
                       .on('pointerout', function(){this.alpha=1;})
                        .on('mousedown',function(){this.alpha=0.5;
                            console.log('priceListType_InputBox')
                               // var winW = 180
                                var winH = priceElementTypeList.length *25 + 70 +20
                   
                              // console.log(priceEditWin.position.x,priceEditWin.position.y,priceEditWin.width)
                                var posX = priceElementEditWin.position.x + winWidth +60
                                var posY = 80
                              
                                
                                var priceElementTypeSelWinBG = new moveAbleWinBlockC(uiBaseContainer,posX,posY,185,winH,'價目類型',20,20,16,'0xffffff','priceElementTypeSelWinBG_container',1,'0x222222',2,'0x353535',1,0,0.8,'0x5e7772',daysApp,screenW,screenH,true)    
                 
                                var priceElementTypeSelWin  = new buildOptionSelectWinA(priceElementTypeSelWinBG,0,0,185,winH,'價目類型',priceElementTypeList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,priceElementType_InputBox,true,false)
               
                               // var openDaysSelWin  = new buildOptionSelectWinA(priceTypeSelWin,0,0,winW,winH,'任務類型',priceTypeList,'0x88aacc','0x234a5a',12,150,1,30,25,170,daysApp,priceListType_InputBox,true,false)
                                                    //buildOptionSelectWinA(parent,x,y,w,h,tapeText,dataList,tapeColor,blockColor,fontSize,returnInputBox)
                                                  //  buildSelectionWinD(parent,x,y,w,h,tapeText,dataList,returnInputBox)
                                                  })
                        .on('pointerup', function(){this.alpha=1;})


    
 
    
    
    var priceElementAddBtn = new buildBtnScaleB(priceElementEditWin,20,560,100,25,btnAText,btnAType)
        priceElementAddBtn.searchID = priceElementID

        priceElementAddBtn.name = 'priceElementAddBtn'
        priceElementAddBtn.on('mousedown',function(){
                                                        console.log("新增項目")
                                                        console.log(this.searchID)
                                                        console.log(isNaN(priceElementManA_InputBox.text))
                                                       // var checkInputValue = parseInt(priceElementManA_InputBox.text) + parseInt(priceElementManHourA_InputBox.text) +parseInt(priceElementUnitPriceA_InputBox.text) + parseInt(priceElementManB_InputBox.text) + parseInt(priceElementManHourB_InputBox.text) +parseInt(priceElementUnitPriceB_InputBox.text) + parseInt(priceElementManC_InputBox.text) + parseInt(priceElementManHourC_InputBox.text) +parseInt(priceElementUnitPriceC_InputBox.text)
                                                       // console.log(checkInputValue)
                                                        if(isNaN(priceElementManA_InputBox.text) == false & isNaN(priceElementManHourA_InputBox.text ) == false & isNaN(priceElementUnitPriceA_InputBox.text ) == false
                                                           & isNaN(priceElementManB_InputBox.text) == false & isNaN(priceElementManHourB_InputBox.text ) == false & isNaN(priceElementUnitPriceB_InputBox.text ) == false
                                                            & isNaN(priceElementManC_InputBox.text) == false & isNaN(priceElementManHourC_InputBox.text ) == false & isNaN(priceElementUnitPriceC_InputBox.text ) == false & isNaN(priceElementOtherA_price_InputBox.text ) == false & isNaN(priceElementOtherB_price_InputBox.text ) == false & isNaN(priceElementOtherC_price_InputBox.text ) == false

                                                          ){
                                                            console.log('111111')
                                                            

                                                                if(mode == 'new'){
                                                                         $.post("/addNewPriceElement", {
                                                                                "name":priceElementName_InputBox.text,
                                                                                "elementType":priceElementType_InputBox.text,
                                                                                "desc":priceElementDesc_InputBox.text,
                                                                                "man_a":priceElementManA_InputBox.text,
                                                                                "hour_a":priceElementManHourA_InputBox.text,
                                                                                "price_a":priceElementUnitPriceA_InputBox.text,
                                                                                "unit_a":priceElementUnitPriceUnitA_InputBox.text,
                                                                                "man_b":priceElementManB_InputBox.text,
                                                                                "hour_b":priceElementManHourB_InputBox.text,
                                                                                "price_b":priceElementUnitPriceB_InputBox.text,
                                                                                "unit_b":priceElementUnitPriceUnitB_InputBox.text,
                                                                                "man_c":priceElementManC_InputBox.text,
                                                                                "hour_c":priceElementManHourC_InputBox.text,
                                                                                "price_c":priceElementUnitPriceC_InputBox.text,
                                                                                "unit_c":priceElementUnitPriceUnitC_InputBox.text,
                                                                                "other_a":priceElementOtherA_InputBox.text,
                                                                                "other_a_price":priceElementOtherA_price_InputBox.text,
                                                                                "other_a_unit":priceElementOtherA_UnitA_InputBox.text,
                                                                                "other_b":priceElementOtherB_InputBox.text,
                                                                                "other_b_price":priceElementOtherB_price_InputBox.text,
                                                                                "other_b_unit":priceElementOtherB_UnitA_InputBox.text,
                                                                                "other_c":priceElementOtherC_InputBox.text,
                                                                                "other_c_price":priceElementOtherC_price_InputBox.text,
                                                                                "other_c_unit":priceElementOtherC_UnitA_InputBox.text,
                                                                                }, function(data) {

                                                                                   console.log(data)
                                                                                    errMsg_InputBox.text = "已新增項目"
                                                                                    //errMsgBox.text = taskName_InputBox.text +'新增到我的任務'
                                                                            }); 

                                                                    

                                                                }else{
                                                                    
                                                                      
                                                                    
                                                                    
                                                                    var editPriceElementWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,400,200,'確 認 編 輯 視 窗',priceElementName_InputBox.text +' 儲存修改',13,'0x000000','editPriceElementConfirmWin_container',5,1,daysApp,screenW,screenH)    
                                                                    var editPriceElementWinBK = editPriceElementWin[0]
                                                                    var confirmBtn = editPriceElementWin[1]
                                                                       // console.log(editUserConfirmWin)
                                                                        editPriceElementWinBK.x = editPriceElementWinBK.x - 150
                                                                        editPriceElementWinBK.y = editPriceElementWinBK.y - 100
                                                                        
                                                                        confirmBtn.on('mousedown', function(){

                                                                           

                                                                        
                                                                                    $.post("/savePriceElementData", {   //runAllAutoEvents
                                                                                        "searchID":priceElementSearchID_InputBox.text,
                                                                                        "name":priceElementName_InputBox.text,
                                                                                        "elementType":priceElementType_InputBox.text,
                                                                                        "desc":priceElementDesc_InputBox.text,
                                                                                        "man_a":priceElementManA_InputBox.text,
                                                                                        "hour_a":priceElementManHourA_InputBox.text,
                                                                                        "price_a":priceElementUnitPriceA_InputBox.text,
                                                                                        "unit_a":priceElementUnitPriceUnitA_InputBox.text,
                                                                                        "man_b":priceElementManB_InputBox.text,
                                                                                        "hour_b":priceElementManHourB_InputBox.text,
                                                                                        "price_b":priceElementUnitPriceB_InputBox.text,
                                                                                        "unit_b":priceElementUnitPriceUnitB_InputBox.text,
                                                                                        "man_c":priceElementManC_InputBox.text,
                                                                                        "hour_c":priceElementManHourC_InputBox.text,
                                                                                        "price_c":priceElementUnitPriceC_InputBox.text,
                                                                                        "unit_c":priceElementUnitPriceUnitC_InputBox.text,
                                                                                        "other_a":priceElementOtherA_InputBox.text,
                                                                                        "other_a_price":priceElementOtherA_price_InputBox.text,
                                                                                        "other_a_unit":priceElementOtherA_UnitA_InputBox.text,
                                                                                        "other_b":priceElementOtherB_InputBox.text,
                                                                                        "other_b_price":priceElementOtherB_price_InputBox.text,
                                                                                        "other_b_unit":priceElementOtherB_UnitA_InputBox.text,
                                                                                        "other_c":priceElementOtherC_InputBox.text,
                                                                                        "other_c_price":priceElementOtherC_price_InputBox.text,
                                                                                        "other_c_unit":priceElementOtherC_UnitA_InputBox.text,

                                                                                            }, function(data) {
                                                                                                console.log(data)
                                                                                        uiBaseContainer.removeChild(uiBaseContainer.getChildByName('editPriceElementConfirmWin_container'))   

                                                                                        errMsgBox.text = '【' + priceElementName_InputBox.text +'】'+ ' 專案修改完成'

                                                                                        }) 

                                                           


                                                                            })

                                                                    
                                                                };

                                                        }else{
                                                            errMsg_InputBox.text = "人力成本數字錯誤，請檢查是否為整數"
                                                           // console.log('222222')
                                                            
                                                        }
                             
            
                                                    })
    
    
    
    
    if(mode == 'edit'){
        
         var priceElementDelBtn = new buildBtnScaleB(priceElementEditWin,540,560,100,25,'刪除項目','danger')   
         
             priceElementDelBtn.on('mousedown', function(){
                            
                            console.log(this.parent)
                            console.log(this.parent.parent)
                            var priceElementListWin_container = this.parent.parent

                            var delPriceElementConfirmWin =  new moveAbleConfirmBlock(uiBaseContainer,screenW/2,screenH/2,400,200,'確 認 刪 除 視 窗', priceElementName_InputBox.text +' 確認刪除',13,'0x000000','delPriceElementConfirmWin_container',5,1,daysApp,screenW,screenH)    
                            var delPriceElementConfirmWinWinBK = delPriceElementConfirmWin[0]
                            var confirmBtn = delPriceElementConfirmWin[1]
                               // console.log(editUserConfirmWin)
                                delPriceElementConfirmWinWinBK.x = delPriceElementConfirmWinWinBK.x - 150
                                delPriceElementConfirmWinWinBK.y = delPriceElementConfirmWinWinBK.y - 100
                               
                                confirmBtn.on('mousedown', function(){




                                            $.post("/deletePriceElementData", {   //runAllAutoEvents
                                                "searchID":priceElementSearchID_InputBox.text,
                         

                                                    }, function(data) {
                                                        console.log(data)
                                                uiBaseContainer.removeChild(uiBaseContainer.getChildByName('delPriceElementConfirmWin_container'))   

                                                errMsgBox.text = '【' + priceElementName_InputBox.text +'】'+ '已刪除'
                                                
                                                
                                                console.log(parent)
                                                parent.removeChild(parent.getChildByName('priceElementEditWin_container'))   

                                               // priceElementEditWin_container

                                                }) 




                                    })
                                    
             })
        
    }else{};
    
    //
    
    
    
};

//


//價格項目方塊

function buildPriceElementBlock(parent,x,y,w,h,r,fontColor,fontSize,borderColor,borderWidth,fillColor,borderAlpha,blockAlpha,elementNameText,secFontColor,secFontSize,elementDesc,elementID,elementType,totalPrice,heartAlpha){

  //  console.log(parent.parent)
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
    //projTitleText
    
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
    
    var priceFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: secFontSize ,
        fill:'0xffffff',
       // fontStyle: 'oblique',
        //fill: 'white',
       // align: 'right',
        letterSpacing: 1,
        fontStyle: 'normal',
        fontWeight: '200',
        wordWrap: true,
        wordWrapWidth: 600,
        });   
  
        //elementSelManiBK
    
    
    var elementSelManiBK =  new PIXI.Graphics(); //asset 主視窗
        elementSelManiBK.lineStyle(1, borderColor, borderAlpha);
        elementSelManiBK.beginFill(fillColor,blockAlpha);
        elementSelManiBK.drawRoundedRect(0,0, w,h, r);
        elementSelManiBK.endFill();
        elementSelManiBK.name = 'elementSelManiBK'
    
        elementSelManiBK.x = x
        elementSelManiBK.y = y

        parent.addChild(elementSelManiBK)

        elementSelManiBK.elementID = elementID
        elementSelManiBK.elementName = elementNameText

        elementSelManiBK.elementDesc = elementDesc
        elementSelManiBK.elementType = elementType
    
    

    
    
    //projTitleLabel_EN

    var elementName_Label = new PIXI.Text(elementNameText, fontStyle);
            
            
        elementSelManiBK.addChild(elementName_Label)


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        elementName_Label.pivot.y = elementName_Label.height/2;
        elementName_Label.x =10;
        elementName_Label.y =h/4;
    
        elementSelManiBK.addChild(elementName_Label)
    

    var elementDesc_text = new PIXI.Text(elementDesc, secFontStyle);
            
            


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        elementDesc_text.pivot.y = elementDesc_text.height/2;
        elementDesc_text.x =10;
        elementDesc_text.y =3*(h/4);
    
        elementSelManiBK.addChild(elementDesc_text)
    
    
    
    
    
   var elementPrice_text = new PIXI.Text("NTD " + totalPrice, priceFontStyle);
            
            


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        elementPrice_text.pivot.y = elementPrice_text.height/2;
        elementPrice_text.x =280;
        elementPrice_text.y =3*(h/4);
    
        elementSelManiBK.addChild(elementPrice_text)
     
    
    
    
//
      //  console.log(elementSelManiBK)    

        elementSelManiBK.interactive = true;
        elementSelManiBK.buttonMode = true;
        elementSelManiBK.on('pointerover', function(){this.children[0].tint="0xff8888"
                                              
                                                    
                                                     })
    
        elementSelManiBK
               .on('pointerout', function(){this.children[0].tint="0xffffff"
                                           
                                 
                                            

                                           })
               .on('pointerup',  function(){this.children[0].tint="0xffffff"})
               .on('mousedown', function(){ console.log(this)
                                          
                                            console.log(this.elementID)      
                                            console.log(this.elementName)     
                                            console.log(this.elementDesc)      

                                            console.log(this.elementType)     
                                           
                           
    


                                             console.log('open proj edit win')
                                            
                                            var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                                            if(userNameInput.text == '未登入'){
                                                                var loginUserName = 'none'
                                                            }else{
                                                                var loginUserName = userNameInput.text 
                                                            };
                                                        console.log(loginUserName)
                                            var priceElementListWin = parent.parent
                                            console.log(priceElementListWin)
                                            
                                            $.post("/getSelectElementDataFromDB", {  
                                                    'searchID':parseInt(this.elementID),
                                                 //   'userName':loginUserName,
                                                  //  'elementName' : this.elementName,
                                                  //  'elementType' : this.elementType,
                                                  //  'elementDesc' : this.elementDesc
                                                    }, function(data) {
                                                        console.log(data)
                                                        var priceElementData = data[2]
                                               //     console.log(this.)
                                                 //   var priceElementListWin = new moveAbleWinBlockC(parent,x,y,w,h,"項目列表",20,20,16,'0x223322','priceElementListWin_container',1,'0x222222',5,'0x353535',1,1,0.6,'0x599ac2',daysApp,screenW,screenH,true)    
    
                                                   // var priceElementListBlock = new buildPriceElementListBlock(priceElementListWin,130,30,priceElementDB)

                                                    
                                           
  
                                                    var priceElementEditWinBlock = new buildPriceElementEditWin(priceElementListWin,600,30, priceElementData ,'edit')
                                                    
                                                
                                                
                                                        // 專案內容頁面
                                                       // var projectEditWin = new  openProjectEditWinB(uiBaseContainer,360,40,1130,160,daysApp,selProjData,'edit',userFavProjList); 
                                                        //任務內容頁面
                                                      //  var taskSchListWin = new buildTaskSchListWinB(this,360,205,1130,635,taskData,taskStartTimeMs,taskEndTimeMs,projName,projSearchIndex,projCHName,elementType)
                                            });  
                                                        
                                          
                                          
              });

    
    
    
    
  
                               
    
        
return elementSelManiBK
    
};




//價格項目選擇方塊
function buildPriceElementBlockB(parent,x,y,w,h,r,fontColor,fontSize,borderColor,borderWidth,fillColor,borderAlpha,blockAlpha,elementNameText,secFontColor,secFontSize,elementDesc,elementID,elementType,totalPrice,heartAlpha){

  //  console.log(parent.parent)
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
    //projTitleText
    
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
    
    var priceFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: secFontSize ,
        fill:'0xffffff',
       // fontStyle: 'oblique',
        //fill: 'white',
       // align: 'right',
        letterSpacing: 1,
        fontStyle: 'normal',
        fontWeight: '200',
        wordWrap: true,
        wordWrapWidth: 600,
        });   
  
        //elementSelManiBK
    
    
    var elementSelManiBK =  new PIXI.Graphics(); //asset 主視窗
        elementSelManiBK.lineStyle(1, borderColor, borderAlpha);
        elementSelManiBK.beginFill(fillColor,blockAlpha);
        elementSelManiBK.drawRoundedRect(0,0, w,h, r);
        elementSelManiBK.endFill();
        elementSelManiBK.name = 'elementSelManiBK'
    
        elementSelManiBK.x = x
        elementSelManiBK.y = y

        parent.addChild(elementSelManiBK)

        elementSelManiBK.elementID = elementID
        elementSelManiBK.elementName = elementNameText

        elementSelManiBK.elementDesc = elementDesc
        elementSelManiBK.elementType = elementType
    
        elementSelManiBK.selected = false

    
    
    //projTitleLabel_EN

    var elementName_Label = new PIXI.Text(elementNameText, fontStyle);
            
            
        elementSelManiBK.addChild(elementName_Label)


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        elementName_Label.pivot.y = elementName_Label.height/2;
        elementName_Label.x =10;
        elementName_Label.y =h/4;
    
        elementSelManiBK.addChild(elementName_Label)
    

    var elementDesc_text = new PIXI.Text(elementDesc, secFontStyle);
            
            


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        elementDesc_text.pivot.y = elementDesc_text.height/2;
        elementDesc_text.x =10;
        elementDesc_text.y =3*(h/4);
    
        elementSelManiBK.addChild(elementDesc_text)
    
    
    
    
    
   var elementPrice_text = new PIXI.Text("NTD " + totalPrice, priceFontStyle);
            
            


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        elementPrice_text.pivot.y = elementPrice_text.height/2;
        elementPrice_text.x =280;
        elementPrice_text.y =3*(h/4);
    
        elementSelManiBK.addChild(elementPrice_text)
     
    
    
    
//
      //  console.log(elementSelManiBK)    
        var priceEditWin = parent.parent.parent
        
        var addNewPriceListWinBG = parent.parent.parent.getChildByName('addNewPriceListWinBG_container')

        elementSelManiBK.interactive = true;
        elementSelManiBK.buttonMode = true;
        elementSelManiBK.on('pointerover', function(){this.children[0].tint="0xff8888"
                                              
                                                    
                            })

        elementSelManiBK
               .on('pointerout', function(){this.children[0].tint="0xffffff"
                                           
                                 
                           

                                           })
               .on('pointerup',  function(){this.children[0].tint="0xffffff"})
               .on('mousedown', function(){ console.log(this)
                                          
                                            console.log(this.elementID)      
                                            console.log(this.elementName)     
                                            console.log(this.elementDesc)      

                                            console.log(this.elementType)     
                                           
                                            //console.log(parent.parent.parent)    // elementListBGWin_container
    
                                            console.log(priceEditWin.priceElementList)
                                            console.log(addNewPriceListWinBG)
                                           
                                            console.log(this.selected)     


                                             console.log('open proj edit win')
                                            
                                            var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                                            if(userNameInput.text == '未登入'){
                                                                var loginUserName = 'none'
                                                            }else{
                                                                var loginUserName = userNameInput.text 
                                                            };
                                                        console.log(loginUserName)
                                          //  var priceElementListWin = parent.parent
                                           // console.log(priceElementListWin)
                                           
                                           
                                            if(this.selected == true){
                                                console.log('aaaaaaaaaaa')
                                                this.selected = false;
                                                this.tint = '0xffffff';
                                                
                                                        function arrayRemove(arr, value) { 

                                                            return arr.filter(function(ele){ 
                                                                return ele != value; 
                                                            });
                                                        }

                                                        var result = arrayRemove(priceEditWin.priceElementList, this.elementID);
                                                
                                                
                                                priceEditWin.priceElementList = result
                                                
                                                
                                                
                                            }else{
                                                console.log('bbbbbbbbbbbb')
                                                this.selected = true;

                                                this.tint = '0xffff88' ;
                                                
                                                
                                                priceEditWin.priceElementList.push(this.elementID)
                                                
                                                
                                                
                                                
                                            };
                                           
                                           console.log(priceEditWin.priceElementList)
                                           /*
                                            
                                            $.post("/getSelectElementDataFromDB", {  
                                                    'searchID':parseInt(this.elementID),
                                          
                                                    }, function(data) {
                                                        console.log(data)
                                                        var priceElementData = data[2]
                               
                                                    
  
                                                //    var priceElementEditWinBlock = new buildPriceElementEditWin(priceElementListWin,600,30, priceElemtoentData ,'edit')
                                                    
                                               
                                            });  
                                          */              
                                          
                                          
              });


  
                               
    
        
return elementSelManiBK
    
};



// var addNewPriceListWinBG = new addWinBlockB(priceEditWin,5 + addNewPriceWinBG.width +5 ,95,450,650 ,'addNewPriceWinBG_container',1,'0x555555',5,'0x555555',1,0.5)  //左方當前價目列表

function addElementToNewPriceList(listWinBG,elementList){   
    
    console.log(listWinBG,elementList)
    
    var allElementList = new callPriceElementData('all')
    
    //console.log(filterElementList)
    
    
    
    var filterElementList = allElementList.filter(function(item, index, array){
                           // return item[0] in elementList

                               return elementList.includes(item[0])

                        });   
    
    
    
    
    console.log(filterElementList)
    
    var totalWorkingHours = 0
    var totalPrice = 0
    
    for(var  i = 0 ; i < filterElementList.length ; i++){
        
        totalWorkingHours = totalWorkingHours + filterElementList[i][4]*filterElementList[i][5] + filterElementList[i][8]*filterElementList[i][9] + filterElementList[i][12]*filterElementList[i][13]
        totalPrice =  totalPrice + filterElementList[i][4]*filterElementList[i][5]*filterElementList[i][6] + filterElementList[i][8]*filterElementList[i][9]*filterElementList[i][10] + filterElementList[i][12]*filterElementList[i][13]*filterElementList[i][14] +   filterElementList[i][17] +   filterElementList[i][20] +   filterElementList[i][23]
        
    }
    
    
    console.log(totalWorkingHours)
    
    console.log(totalPrice)

   // console.log(listWinBG.parent.parent.parent)
    console.log(uiBaseContainer)
    var priceEditWin_container = uiBaseContainer.getChildByName('priceListEditWin_container')

    console.log(priceEditWin_container)
    
    var  priceEditWin = priceEditWin_container.getChildByName('priceEditWin_container')

    console.log(priceEditWin)
    
    
    var addNewPriceWinBG = priceEditWin.getChildByName('addNewPriceWinBG_container')
    console.log(addNewPriceWinBG)
    
    var priceListTotalWokingDays_InputBox = addNewPriceWinBG.getChildByName('priceListTotalWokingDays_InputBox')
    
    var priceListTotalPrice_InputBox = addNewPriceWinBG.getChildByName('priceListTotalPrice_InputBox')
    
    
    console.log(priceListTotalWokingDays_InputBox)

    console.log(priceListTotalPrice_InputBox)
    
    
    priceListTotalWokingDays_InputBox.text = totalWorkingHours
    
    priceListTotalPrice_InputBox.text = totalPrice


    var addSelPriceElementWin =  new buildPriceElementListINAddBlock(listWinBG,0,0,filterElementList)
    
    
    
    
    
};




function buildPriceElementListINAddBlock(parent,x,y,selectPriceEmementList){  //已建立的清單
    
    console.log('buildPriceElementListINAddBlock')
   // console.log(selectPriceEmementList)
    
    parent.removeChild(parent.getChildByName('elementListBGWin_container'))
    parent.removeChild(parent.getChildByName('barBGBlock'))
    parent.removeChild(parent.getChildByName('dragBarMask'))


    var allElementCount = selectPriceEmementList.length
    
    var elementBKH = 60
    var elementListBGWinWidth = parent.width-20
    var dragBKH = parent.height
    var lableFontSize = 12
    var barOutlineHeight = parent.height

   // var totalProjCount = myProjCount + teamProjCount + allProjCount
    var dragHeight = allElementCount * elementBKH + 20*3 + 10

    var elementListBGWin = new addWinBlockB(parent,x,y,elementListBGWinWidth-5,dragHeight,'elementListBGWin_container',0,'0xff0000',1,'0xaaffcc',1,0.1)
                             //addWinBlockB(parent,x,y,w,h,containerName,borderWidth,borderColor,borderRect,winFillColor,borderAlpha,FillAlpha)
    var elementListBGWin_Mask =  new addWinBlockB(parent,x,y,elementListBGWinWidth+100,dragBKH,'elementListBGWin_Mask_container',0,'0xff0000',1,'0x00ff00',0,1)
      //  new addWinBlock(parent,x,y,elementListBGWinWidth,dragBKH,'',0,0,12,'0xffffff','elementListBGWin_Mask_container',0,'0xff0000',1,'0xffff00',0,1)
        elementListBGWin.mask = elementListBGWin_Mask
    
  //  var priceElementEditBGWin = new addWinBlockB(parent,x + elementListBGWinWidth +20 ,y,elementListBGWinWidth+100 ,barOutlineHeight,'priceElementEditBGWin_container',0,'0xff0000',1,'0xaaaaaa',1,0.1)

    
    
    
    
    
    for(var i = 0 ; i < allElementCount; i++){
        
       // console.log(allProjectList[i])
        var selElement =  selectPriceEmementList[i]
        var element_ID =  selElement[0]

        var element_Name = selElement[1]
        var element_Type = selElement[2]
        var element_Desc = selElement[3]

        var posX = 5
        var poxY = i * elementBKH 
        
        var totalPrice =   selElement[4]*selElement[5]*selElement[6] + selElement[8]*selElement[9]*selElement[10] + selElement[12]*selElement[13]*selElement[14] + selElement[17] + selElement[20]+ selElement[23]
        console.log(totalPrice)
        var elementBlock = new buildPriceElementInPriceListBlockB(elementListBGWin,posX,poxY,elementListBGWinWidth-16,elementBKH - 2,5,'0xffffff',15,'0xff0000',1,'0x83a5bd',0,1,element_Name,'0x123456',14,element_Desc,element_ID,element_Type,totalPrice,0.1)
   
    };
    
    if( allElementCount < 13   ){
        var dragBarHeight = barOutlineHeight -2
        
    }else{
        
        var dragBarHeight = (barOutlineHeight /( allElementCount * elementBKH))*barOutlineHeight
        
    };
    
     var barBGBlock = new PIXI.Graphics(); //asset 主視窗
        barBGBlock.lineStyle(0.5, '0x88ffff', 0.5);
        barBGBlock.beginFill('0x223344',0.7);
        barBGBlock.drawRoundedRect(0,0, 15,barOutlineHeight, 2);
        barBGBlock.endFill();      
        barBGBlock.name = 'barBGBlock'
        barBGBlock.x = x + elementListBGWinWidth //-20
        barBGBlock.y = y
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
        dragBarMask.x =  x + elementListBGWinWidth
        dragBarMask.y = y
        parent.addChild(dragBarMask)
        dragBar.mask = dragBarMask
    

   if( allElementCount < 13  ){
        barBGBlock.alpha = 0
        dragBar.interactive = false;
        dragBar.buttonMode = false;
    
        
    }else{
        
        barBGBlock.alpha = 1
  
        dragBar.interactive = true;
        dragBar.buttonMode = true;
    
        
    };  
    
    
    dragBar
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);


    function onDragStart(e) {

        
        var mouseposition = daysApp.renderer.plugins.interaction.mouse.global;  


        this.dragging = true;

        this.deltaPosY = mouseposition.y  
        
        this.originalPosY = this.y
        
        elementListBGWin.originalY = elementListBGWin.position.y

        console.log(this.position.y,this.getBounds().height,elementListBGWin.y)

        console.log('deltaPosY',this.deltaPosY,this.y)
    }
    

    var elementWinTopY = 0//y
    
    function onDragMove(e) {
        if(this.dragging == true){

            this.data = e.data;
          //  console.log(this.position.y,this.getBounds().height)
            
            
            var newPosition =  daysApp.renderer.plugins.interaction.mouse.global//current mouse point position      //this.data.getLocalPosition(this.parent);
            var deltaY = newPosition.y -  this.deltaPosY   // compare with original position and newposition, that mouse point
            console.log( this.deltaPosY ,newPosition.y,deltaY,this.position.y)
            if(deltaY < 1){
                
                if(this.position.y < 1 ){
                   console.log('aaaaaa')
                    this.y = 1     
                    elementListBGWin.position.y = elementWinTopY  // 專案列表 回到最上方
                  //  console.log(projListBGWin.getBounds())
                }else{
                    console.log('bbbbbb')

                  this.y =this.originalPosY + deltaY // newPosition.y - this.deltaPosY;    
                //  elementListBGWin.position.y = elementWinTopY - elementListBGWin.height * (deltaY/739)
                    
                   elementListBGWin.position.y =   - (this.y /  (barOutlineHeight-this.getBounds().height-1))*elementListBGWin.height
                    
                   // elementListBGWin.position.y =  elementWinTopY + elementListBGWin.height * (deltaY/(barOutlineHeight-1)) //+ elementListBGWin.originalY

                }

                
            }else{
                
                if(this.position.y + this.getBounds().height > (barOutlineHeight-1)) {
                   console.log('33333333333')

                    //this.y = 739 -  this.getBounds().height        
                    //projListBGWin.position.y = 60 + projListBGWin.height-739
                }else{
                    
                   console.log('44444444444444444',deltaY) 
                    this.y = this.originalPosY + deltaY  //newPosition.y - this.deltaPosY;   
                   // elementListBGWin.position.y =  -(elementWinTopY + elementListBGWin.height * (deltaY/(barOutlineHeight-1))) //+ elementListBGWin.originalY
                   elementListBGWin.position.y =   - (this.y /  (barOutlineHeight-this.getBounds().height-1))*elementListBGWin.height

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
        var newPosition =  daysApp.renderer.plugins.interaction.mouse.global
                    
        if(this.position.y < 1 ){
            this.y = 1     
            elementListBGWin.position.y = elementWinTopY
        }else if(this.position.y + this.getBounds().height > (barOutlineHeight-1)){
            this.y = (barOutlineHeight-1) -  this.getBounds().height      
            elementListBGWin.position.y = elementWinTopY- (Math.abs(allElementCount*elementBKH - (barOutlineHeight-1))) //60 + projListBGWin.height * (739/projListBGWin.height)
        }else{
           // this.y = newPosition.y - this.deltaPosY;   
                    
        };
            

    };
    
    
    
    
    
};



//已建立價目選擇方塊
function buildPriceElementInPriceListBlockB(parent,x,y,w,h,r,fontColor,fontSize,borderColor,borderWidth,fillColor,borderAlpha,blockAlpha,elementNameText,secFontColor,secFontSize,elementDesc,elementID,elementType,totalPrice,heartAlpha){

  //  console.log(parent.parent)
    //text style    timelineLabelInputStyle
    var allElementList = new callPriceElementData('all')

    var selecePriceElementData = allElementList.filter(function(item, index, array){
                       // return item[0] in elementList

                           return item[0] === elementID

                    });   
    
    
   // console.log(elementID)
  //  console.log(allElementList)

    console.log(selecePriceElementData)
    
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
    //projTitleText
    
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
    
    var priceFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: secFontSize ,
        fill:'0xffffff',
       // fontStyle: 'oblique',
        //fill: 'white',
       // align: 'right',
        letterSpacing: 1,
        fontStyle: 'normal',
        fontWeight: '200',
        wordWrap: true,
        wordWrapWidth: 600,
        });   
  
        //elementSelManiBK
    
    
    var elementSelManiBK =  new PIXI.Graphics(); //asset 主視窗
        elementSelManiBK.lineStyle(1, borderColor, borderAlpha);
        elementSelManiBK.beginFill(fillColor,blockAlpha);
        elementSelManiBK.drawRoundedRect(0,0, w,h, r);
        elementSelManiBK.endFill();
        elementSelManiBK.name = 'elementSelManiBK'
    
        elementSelManiBK.x = x
        elementSelManiBK.y = y

        parent.addChild(elementSelManiBK)

        elementSelManiBK.elementID = elementID
        elementSelManiBK.elementName = elementNameText

        elementSelManiBK.elementDesc = elementDesc
        elementSelManiBK.elementType = elementType
    
        elementSelManiBK.selected = false

    
    
    //projTitleLabel_EN

    var elementName_Label = new PIXI.Text(elementNameText, fontStyle);
            
            
        elementSelManiBK.addChild(elementName_Label)


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        elementName_Label.pivot.y = elementName_Label.height/2;
        elementName_Label.x =10;
        elementName_Label.y =h/4;
    
        elementSelManiBK.addChild(elementName_Label)
    

    var elementDesc_text = new PIXI.Text(elementDesc, secFontStyle);
            
            


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        elementDesc_text.pivot.y = elementDesc_text.height/2;
        elementDesc_text.x =10;
        elementDesc_text.y =3*(h/4);
    
        elementSelManiBK.addChild(elementDesc_text)
    
    
    
    
    
   var elementPrice_text = new PIXI.Text("NTD " + totalPrice, priceFontStyle);
            
            


       // projTitleLabel.pivot.x = projTitleLabel.width/2;
        elementPrice_text.pivot.y = elementPrice_text.height/2;
        elementPrice_text.x =280;
        elementPrice_text.y =3*(h/4);
    
        elementSelManiBK.addChild(elementPrice_text)
     
    
    
    
//
      //  console.log(elementSelManiBK)    
        var priceEditWin = parent.parent.parent
        
        var addNewPriceListWinBG = parent.parent.parent.getChildByName('addNewPriceListWinBG_container')

        elementSelManiBK.interactive = true;
        elementSelManiBK.buttonMode = true;
        elementSelManiBK.on('pointerover', function(){this.children[0].tint="0xff8888"
                                              
                                                    
                            })

        elementSelManiBK
               .on('pointerout', function(){this.children[0].tint="0xffffff"
                                           
                                 
                           

                                           })
               .on('pointerup',  function(){this.children[0].tint="0xffffff"})
               .on('mousedown', function(){// console.log(this)
                                          
                                           // console.log(this.elementID)      
                                           // console.log(this.elementName)     
                                           // console.log(this.elementDesc)      

                                           // console.log(this.elementType)     
                                           
                                            //console.log(parent.parent.parent)    // elementListBGWin_container
    
                                           // console.log(priceEditWin.priceElementList)
                                          //  console.log(addNewPriceListWinBG)
                                           
                                           // console.log(this.selected)     


                                           //  console.log('open proj edit win')
                                            
                                            var userNameInput = uiBaseContainer.getChildByName('userNameInput')
                                                            if(userNameInput.text == '未登入'){
                                                                var loginUserName = 'none'
                                                            }else{
                                                                var loginUserName = userNameInput.text 
                                                            };
                                                       // console.log(loginUserName)
                                          //  var priceElementListWin = parent.parent
                                           // console.log(priceElementListWin)
                                           
                                           
                                            if(this.selected == true){
                                                console.log('aaaaaaaaaaa')
                                                this.selected = false;
                                                this.tint = '0xffffff';
                                                
                                                        function arrayRemove(arr, value) { 

                                                            return arr.filter(function(ele){ 
                                                                return ele != value; 
                                                            });
                                                        }

                                                        var result = arrayRemove(priceEditWin.priceSelectedList, this.elementID);
                                                
                                                
                                                priceEditWin.priceSelectedList = result
                                                
                                            }else{
                                                console.log('bbbbbbbbbbbb')
                                                this.selected = true;

                                                this.tint = '0xff8888' ;
                                                
                                                
                                                priceEditWin.priceSelectedList.push(this.elementID)
                                                
                                                
                                            };
                                           
                                           console.log(priceEditWin.priceSelectedList)
                                           
                            
                                                        
                                          
                                          
              });


  
                               
    
        
return elementSelManiBK
    
};
