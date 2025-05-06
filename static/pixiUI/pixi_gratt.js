///// pixi 甘特圖 


function builtProjGrattGraph(parent,x,y,w,h,projectID,projName,scale){
    
    console.log('builtProjGrattGraph 創建所選取專案甘特圖',projectID)
    
    
    parent.removeChild(parent.getChildByName("projGratt_container"))
    
   // var userData = JSON.parse(window.localStorage.getItem("userData"));
    

   // console.log(userNameList)

    //價目表主視窗
    var projGratt_container = new moveAbleWinBlockC(uiBaseContainer,x,y,w,h,projName +' 甘特圖',20,20,16,'0xffffff','projGratt_container',1,'0x555555',5,'0x333333',1,1,0.6,'0x3670ad',daysApp,screenW,screenH,true)    

        projGratt_container.scale.set(scale)
   
    
    
    var leftAreaWidth =400
    var headAreaHeight = 80
    
     
    var headAreaBK =   new PIXI.Graphics();    // 上方抬頭區
        headAreaBK.lineStyle(0.1, '0xffffff', 0.1);
        headAreaBK.beginFill('0xaaffaa',1);

       // daysInfoBlockBGWin.drawRoundedRect(0,0,w,60, 2);
        headAreaBK.drawRoundedRect(0,0,w-2,headAreaHeight, 2);

        headAreaBK.endFill();
        headAreaBK.name = 'headAreaBK'
        headAreaBK.x = 1

        headAreaBK.y = 26
        headAreaBK.alpha = 1


        projGratt_container.addChild(headAreaBK)

    var leftAreaBK =   new PIXI.Graphics();    // 左方任務列表區
        leftAreaBK.lineStyle(0.1, '0xffffff', 0.1);
        leftAreaBK.beginFill('0xaaffff',1);

       // daysInfoBlockBGWin.drawRoundedRect(0,0,w,60, 2);
        leftAreaBK.drawRoundedRect(0,0,leftAreaWidth,h-headAreaHeight-26-2, 2);

        leftAreaBK.endFill();
        leftAreaBK.name = 'headAreaBK'
        leftAreaBK.x = 1

        leftAreaBK.y = 26 + headAreaHeight +1
        leftAreaBK.alpha = 1


        projGratt_container.addChild(leftAreaBK) 

    var rightAreaBK =   new PIXI.Graphics();    // 左方任務列表區
        rightAreaBK.lineStyle(0.1, '0xffffff', 0.1);
        rightAreaBK.beginFill('0xffffaa',1);

       // daysInfoBlockBGWin.drawRoundedRect(0,0,w,60, 2);
       // rightAreaBK.drawRoundedRect(0,0,w-400-1,h-80-26-2, 2);
        rightAreaBK.drawRoundedRect(0,0,w-leftAreaWidth-3,h-headAreaHeight-26-2, 2);

        rightAreaBK.endFill();
        rightAreaBK.name = 'rightAreaBK'
        //rightAreaBK.x = w+400+1
        rightAreaBK.x = leftAreaWidth+2

        rightAreaBK.y = 26 + headAreaHeight +1
        rightAreaBK.alpha = 1


        projGratt_container.addChild(rightAreaBK)  
        
    
       

    
};



