function insertHeartIcon(parent,x,y,scale){
    
        
    var addMyFavContainer = new PIXI.Container()
        addMyFavContainer.name = "addMyFavContainer"
        parent.addChild(addMyFavContainer)
        addMyFavContainer.x = x
        addMyFavContainer.y = y
        addMyFavContainer.scale.set(scale);
        addMyFavContainer.currentState = false  
    
    
    
    
    var heartIconRing = new PIXI.Graphics();
        heartIconRingPosData = [[1.63, 8.61], [5.75, 4.88], [8.9, 1.57], [10.93, -1.57], [11.64, -4.77], [11.15, -7.29], [9.79, -9.32], [7.76, -10.68], [5.24, -11.17], [3.76, -11.0], [2.36, -10.52], [1.08, -9.75], [0.0, -8.73], [-1.08, -9.75], [-2.36, -10.52], [-3.76, -11.0], [-5.24, -11.17], [-7.76, -10.68], [-9.79, -9.32], [-11.15, -7.29], [-11.64, -4.77], [-10.93, -1.57], [-8.9, 1.57], [-5.75, 4.88], [-1.63, 8.61], [0.0, 10.24]];
        heartIconRing.lineStyle(2, 0xffffff, 0.5);
        heartIconRing.beginFill(0xffaaaa, 0);
        heartIconRing.moveTo(heartIconRingPosData[0][0], heartIconRingPosData[0][1]);
        for(i=1;i<heartIconRingPosData.length;i++){heartIconRing.lineTo(heartIconRingPosData[i][0], heartIconRingPosData[i][1]);};
        heartIconRing.lineTo(heartIconRingPosData[0][0], heartIconRingPosData[0][1]);
        heartIconRing.alpha = 1;
       // heartIconRing.pivot.x = heartIconRing.width/2;
       // heartIconRing.pivot.y = heartIconRing.height/2;
        heartIconRing.x =0;
        heartIconRing.y =0;
        heartIconRing.name="heartIconRing";
        //heartIconRing.scale.set(scale);

        addMyFavContainer.addChild(heartIconRing)

        var heartIcon = new PIXI.Graphics();
        heartIconPosData = [[1.63, 8.61], [5.75, 4.88], [8.9, 1.57], [10.93, -1.57], [11.64, -4.77], [11.15, -7.29], [9.79, -9.32], [7.76, -10.68], [5.24, -11.17], [3.76, -11.0], [2.36, -10.52], [1.08, -9.75], [0.0, -8.73], [-1.08, -9.75], [-2.36, -10.52], [-3.76, -11.0], [-5.24, -11.17], [-7.76, -10.68], [-9.79, -9.32], [-11.15, -7.29], [-11.64, -4.77], [-10.93, -1.57], [-8.9, 1.57], [-5.75, 4.88], [-1.63, 8.61], [0.0, 10.24]];
        heartIcon.lineStyle(0, 0xffffff, 0);
        heartIcon.beginFill(0xff7777, 1);
        heartIcon.moveTo(heartIconPosData[0][0], heartIconPosData[0][1]);
        for(i=1;i<heartIconPosData.length;i++){heartIcon.lineTo(heartIconPosData[i][0], heartIconPosData[i][1]);};
        heartIcon.lineTo(heartIconPosData[0][0], heartIconPosData[0][1]);
        heartIcon.alpha = 0.1;
       // heartIcon.pivot.x = heartIcon.width/2;
       // heartIcon.pivot.y = heartIcon.height/2;
        heartIcon.x =0;
        heartIcon.y =0;
        heartIcon.name="heartIcon";
        heartIcon.scale.set(1);

        addMyFavContainer.addChild(heartIcon)    


        heartIcon.interactive = true;
        heartIcon.buttonMode = true;
        heartIcon.on('pointerover', function(){this.tint='0xffaaaa';})
                            .on('pointerout', function(){this.tint='0xffffff';})
    
        return heartIcon
                       
};





const btnBasePosData = [[-12.0, -10.8], [-10.8, -12.0], [10.8, -12.0], [12.0, -10.8], [12.0, 10.8], [10.8, 12.0], [-10.8, 12.0], [-12.0, 10.8]];




// dataBase Edit Tool，資料庫編輯工具
function dbEditBtnWithIcon(parent,x,y,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
        var drawCmd = new PIXI.Graphics();
        var drawLinePosData  = [[-7.3, 7.29], [-7.36, 7.18], [-7.37, 7.03], [-6.48, 3.45], [-6.45, 3.35], [-6.4, 3.26], [1.74, -4.87], [4.88, -1.71], [-3.19, 6.36], [-3.28, 6.44], [-3.38, 6.49], [-6.88, 7.34], [-7.03, 7.37], [-7.13, 7.37], [-7.21, 7.34]];


            drawCmd.lineStyle(1, 0xffffff, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
        var drawLinePosData2  = [[2.66, -5.79], [3.89, -7.0], [4.14, -7.14], [4.37, -7.24], [4.63, -7.32], [4.93, -7.34], [5.22, -7.31], [5.51, -7.2], [5.82, -7.04], [7.07, -5.81], [7.26, -5.46], [7.37, -5.06], [7.37, -4.7], [7.3, -4.35], [7.13, -3.98], [5.8, -2.62]];

         
            drawCmd.moveTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);
            for(i=1;i<drawLinePosData2.length;i++){drawCmd.lineTo(drawLinePosData2[i][0], drawLinePosData2[i][1]);};
            drawCmd.lineTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
           // drawCmd.x =x;
           // drawCmd.y =y;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(0.8);


            btnBase.addChild(drawCmd) 

    

    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選userBTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};




// user 編輯工具
function userEditBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
        var drawCmd = new PIXI.Graphics();
        var drawLinePosData =  [[0.0, -10.86], [1.51, -10.62], [2.87, -9.93], [3.95, -8.85], [4.64, -7.49], [4.88, -5.98], [4.64, -4.47], [3.95, -3.11], [2.87, -2.03], [1.51, -1.34], [-0.0, -1.1], [-1.51, -1.34], [-2.87, -2.03], [-3.95, -3.11], [-4.64, -4.47], [-4.88, -5.98], [-4.64, -7.49], [-3.95, -8.85], [-2.87, -9.93], [-1.51, -10.62]];

            drawCmd.lineStyle(1, 0xffffff, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
        var drawLinePosData2 = [[0.0, -0.3], [2.72, 0.13], [5.17, 1.38], [7.12, 3.32], [8.37, 5.78], [8.8, 8.5], [8.37, 10.9], [7.12, 10.9], [5.17, 10.9], [2.72, 10.9], [0.0, 10.9], [-2.72, 10.9], [-5.17, 10.9], [-7.12, 10.9], [-8.37, 10.9], [-8.8, 8.5], [-8.37, 5.78], [-7.12, 3.32], [-5.17, 1.38], [-2.72, 0.13]];
         
            drawCmd.moveTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);
            for(i=1;i<drawLinePosData2.length;i++){drawCmd.lineTo(drawLinePosData2[i][0], drawLinePosData2[i][1]);};
            drawCmd.lineTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
           // drawCmd.x =x;
           // drawCmd.y =y;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(0.8);


            btnBase.addChild(drawCmd) 

    

    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選userBTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};



// 專案編輯工具
function projEditBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
    var drawCmd = new PIXI.Graphics();


        var drawLinePosData = [[-7.0, -9.61], [-6.19, -9.48], [-5.47, -9.11], [-4.89, -8.53], [-4.52, -7.81], [-4.39, -7.0], [-4.52, -6.19], [-4.89, -5.47], [-5.47, -4.89], [-6.19, -4.52], [-7.0, -4.39], [-7.81, -4.52], [-8.53, -4.89], [-9.11, -5.47], [-9.48, -6.19], [-9.61, -7.0], [-9.48, -7.81], [-9.11, -8.53], [-8.53, -9.11], [-7.81, -9.48]];



        drawCmd.lineStyle(1, iconColor, 0);
        drawCmd.beginFill(iconColor, 1);


        drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
        drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        drawCmd.alpha = 1;



        var drawLinePosData2 = [[-7.0, -2.61], [-6.19, -2.48], [-5.47, -2.11], [-4.89, -1.53], [-4.52, -0.81], [-4.39, 0.0], [-4.52, 0.81], [-4.89, 1.53], [-5.47, 2.11], [-6.19, 2.48], [-7.0, 2.61], [-7.81, 2.48], [-8.53, 2.11], [-9.11, 1.53], [-9.48, 0.81], [-9.61, 0.0], [-9.48, -0.81], [-9.11, -1.53], [-8.53, -2.11], [-7.81, -2.48]];

        drawCmd.moveTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);
        for(i=1;i<drawLinePosData2.length;i++){drawCmd.lineTo(drawLinePosData2[i][0], drawLinePosData2[i][1]);};
        drawCmd.lineTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);






        var drawLinePosData3 = [[-7.0, 4.39], [-6.19, 4.52], [-5.47, 4.89], [-4.89, 5.47], [-4.52, 6.19], [-4.39, 7.0], [-4.52, 7.81], [-4.89, 8.53], [-5.47, 9.11], [-6.19, 9.48], [-7.0, 9.61], [-7.81, 9.48], [-8.53, 9.11], [-9.11, 8.53], [-9.48, 7.81], [-9.61, 7.0], [-9.48, 6.19], [-9.11, 5.47], [-8.53, 4.89], [-7.81, 4.52]];


        drawCmd.moveTo(drawLinePosData3[0][0], drawLinePosData3[0][1]);
        for(i=1;i<drawLinePosData3.length;i++){drawCmd.lineTo(drawLinePosData3[i][0], drawLinePosData3[i][1]);};
        drawCmd.lineTo(drawLinePosData3[0][0], drawLinePosData3[0][1]);


        var drawLinePosData4 = [[-3.22, -9.27], [10.15, -9.27], [10.15, -4.73], [-3.22, -4.73]];

    
        drawCmd.moveTo(drawLinePosData4[0][0], drawLinePosData4[0][1]);
        for(i=1;i<drawLinePosData4.length;i++){drawCmd.lineTo(drawLinePosData4[i][0], drawLinePosData4[i][1]);};
        drawCmd.lineTo(drawLinePosData4[0][0], drawLinePosData4[0][1]);


    
        var drawLinePosData5 = [[-3.22, -2.27], [10.15, -2.27], [10.15, 2.27], [-3.22, 2.27]];

    
        drawCmd.moveTo(drawLinePosData5[0][0], drawLinePosData5[0][1]);
        for(i=1;i<drawLinePosData5.length;i++){drawCmd.lineTo(drawLinePosData5[i][0], drawLinePosData5[i][1]);};
        drawCmd.lineTo(drawLinePosData5[0][0], drawLinePosData5[0][1]);


    
        var drawLinePosData6 = [[-3.22, 4.73], [10.15, 4.73], [10.15, 9.27], [-3.22, 9.27]];

    
        drawCmd.moveTo(drawLinePosData6[0][0], drawLinePosData6[0][1]);
        for(i=1;i<drawLinePosData6.length;i++){drawCmd.lineTo(drawLinePosData6[i][0], drawLinePosData6[i][1]);};
        drawCmd.lineTo(drawLinePosData6[0][0], drawLinePosData6[0][1]);

        //drawCmd.pivot.x = drawCmd.width/2;
        //drawCmd.pivot.y = drawCmd.height/2;
       // drawCmd.x =x;
       // drawCmd.y =y;
        drawCmd.name="drawCmd";
        drawCmd.scale.set(0.8);

        btnBase.addChild(drawCmd) 


    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 project BTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    


    
    return btnBaseCover     
    
    
    
    
};



// Task 編輯工具
function taskEditBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
      //  btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
    var drawCmd = new PIXI.Graphics();


    var drawLinePosData = [[6.3, -9.19], [-8.22, -9.19], [-9.19, -8.22], [-9.19, 8.22], [-8.22, 9.19], [8.22, 9.19], [9.19, 8.22], [9.19, -7.3], [7.24, -4.22], [7.24, 6.27], [6.27, 7.24], [-6.27, 7.24], [-7.24, 6.27], [-7.24, -6.27], [-6.27, -7.24], [4.95, -7.24]];



        drawCmd.lineStyle(1, iconColor, 0);
        drawCmd.beginFill(iconColor, 1);


        drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
        drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        drawCmd.alpha = 1;



        var drawLinePosData2 = [[8.38, -10.4], [0.01, 2.43], [-3.08, -3.39], [-4.98, -3.29], [-0.98, 4.36], [1.0, 4.46], [10.16, -10.3]];


        drawCmd.moveTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);
        for(i=1;i<drawLinePosData2.length;i++){drawCmd.lineTo(drawLinePosData2[i][0], drawLinePosData2[i][1]);};
        drawCmd.lineTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);




        //drawCmd.pivot.x = drawCmd.width/2;
        //drawCmd.pivot.y = drawCmd.height/2;
       // drawCmd.x =x;
       // drawCmd.y =y;
        drawCmd.name="drawCmd";
        drawCmd.scale.set(0.8);

        btnBase.addChild(drawCmd) 


    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
      //  btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 task BTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};



// login Icon Btn 
function loginBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var drawCmd = new PIXI.Graphics();
    
    var drawLinePosData = [[-12.0, -3.57], [-12.0, -10.8], [-10.8, -12.0], [10.8, -12.0], [12.0, -10.8], [12.0, 10.8], [10.8, 12.0], [-10.8, 12.0], [-12.0, 10.8], [-12.0, 3.57], [0.0, 3.57], [0.0, 7.14], [7.14, 0.0], [0.0, -7.14], [0.0, -3.57]];
    
        drawCmd.lineStyle(1, fillColor, 0);
        drawCmd.beginFill(fillColor, 1);
    
        drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
        drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        drawCmd.alpha = 1;
       // drawCmd.pivot.x = drawCmd.width/2;
      //  drawCmd.pivot.y = drawCmd.height/2;
        drawCmd.x =x;
        drawCmd.y =y;
        drawCmd.name="drawCmd";
        drawCmd.scale.set(scale);
        parent.addChild(drawCmd)    

    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBaseCover.x =x;
       // btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";

        btnBaseCover.noteA = "點選 login BTN"
        drawCmd.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
 
    
};




// logoutIcon Btn 
function logoutBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var drawCmd = new PIXI.Graphics();
    
    var drawLinePosData = [[-12.0, 0.0], [-12.0, -10.8], [-10.8, -12.0], [10.8, -12.0], [12.0, -10.8], [12.0, 10.8], [10.8, 12.0], [-10.8, 12.0], [-12.0, 10.8], [-12.0, 0.0], [-4.86, 7.14], [-4.86, 3.57], [7.14, 3.57], [7.14, -3.57], [-4.86, -3.57], [-4.86, -7.14], [-12.0, 0.0]];
    
        drawCmd.lineStyle(1, fillColor, 0);
        drawCmd.beginFill(fillColor, 1);
    
        drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
        drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        drawCmd.alpha = 1;
       // drawCmd.pivot.x = drawCmd.width/2;
      //  drawCmd.pivot.y = drawCmd.height/2;
        drawCmd.x =x;
        drawCmd.y =y;
        drawCmd.name="drawCmd";
        drawCmd.scale.set(scale);
        parent.addChild(drawCmd)    

    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBaseCover.x =x;
       // btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";

        btnBaseCover.noteA = "點選 logout BTN"
        drawCmd.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
  
    
};




// 新增物件 icon btn
function addBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
   var drawCmd = new PIXI.Graphics();
   var drawLinePosData = [[-6.76, 0.0], [-6.73, -0.33], [-6.64, -0.64], [-6.49, -0.92], [-6.29, -1.18], [-6.04, -1.39], [-5.76, -1.54], [-5.46, -1.63], [-5.13, -1.66], [-1.63, -1.66], [-1.63, -5.13], [-1.61, -5.46], [-1.52, -5.76], [-1.37, -6.04], [-1.16, -6.29], [-0.91, -6.49], [-0.64, -6.64], [-0.33, -6.73], [0.0, -6.76], [0.34, -6.73], [0.65, -6.64], [0.93, -6.49], [1.18, -6.29], [1.38, -6.04], [1.52, -5.76], [1.61, -5.46], [1.63, -5.13], [1.63, -1.66], [5.13, -1.66], [5.46, -1.63], [5.76, -1.54], [6.04, -1.39], [6.29, -1.18], [6.49, -0.92], [6.64, -0.64], [6.73, -0.33], [6.76, 0.0], [6.73, 0.33], [6.64, 0.64], [6.49, 0.91], [6.29, 1.16], [6.04, 1.37], [5.76, 1.52], [5.46, 1.6], [1.63, 1.63], [1.63, 5.13], [1.6, 5.46], [1.52, 5.76], [1.37, 6.04], [1.16, 6.29], [0.91, 6.49], [0.64, 6.64], [0.33, 6.73], [0.0, 6.76], [-0.33, 6.73], [-0.64, 6.64], [-0.91, 6.49], [-1.16, 6.29], [-1.37, 6.04], [-1.52, 5.76], [-1.61, 5.46], [-1.63, 5.13], [-1.63, 1.63], [-5.13, 1.63], [-5.46, 1.6], [-5.76, 1.52], [-6.04, 1.37], [-6.29, 1.16], [-6.49, 0.91], [-6.64, 0.64], [-6.73, 0.33]];
            drawCmd.lineStyle(1, iconColor, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
            drawCmd.x =0;
            drawCmd.y =0;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1);

        btnBase.addChild(drawCmd)    



    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        //btnBaseCover.x =x;
       // btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 新增物件BTN"
        btnBase.addChild(btnBaseCover)    
       
        //btnBaseCover.scale.set(scale);

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};





// confirm icon btn
function confirmBtnWithIcon(parent,x,y,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
        var btnCirclePosData = [[-10.04, -3.26], [-8.54, -6.2], [-6.2, -8.54], [-3.26, -10.04], [0.0, -10.55], [3.26, -10.04], [6.2, -8.54], [8.54, -6.2], [10.04, -3.26], [10.55, 0.0], [10.04, 3.26], [8.54, 6.2], [6.2, 8.54], [3.26, 10.04], [0.0, 10.55], [-3.26, 10.04], [-6.2, 8.54], [-8.54, 6.2], [-10.04, 3.26], [-10.55, 0.0]];

        btnBase.lineStyle(1, fillColor, 2);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        for(i=1;i<btnCirclePosData.length;i++){btnBase.lineTo(btnCirclePosData[i][0], btnCirclePosData[i][1]);};
        btnBase.lineTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    var drawCmd = new PIXI.Graphics();
    var drawLinePosData = [[-5.83, -1.74], [-5.46, -1.77], [-5.23, -1.69], [-1.89, 1.66], [5.33, -5.4], [5.65, -5.51], [5.87, -5.39], [7.35, -3.97], [7.39, -3.61], [7.34, -3.36], [-1.54, 5.53], [-1.86, 5.53], [-2.22, 5.45], [-7.25, 0.42], [-7.35, 0.1], [-7.35, -0.26]];
            drawCmd.lineStyle(1, iconColor, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
            drawCmd.x =0;
            drawCmd.y =0;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1);

        btnBase.addChild(drawCmd)    



    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        for(i=1;i<btnCirclePosData.length;i++){btnBaseCover.lineTo(btnCirclePosData[i][0], btnCirclePosData[i][1]);};
        btnBaseCover.lineTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        btnBaseCover.alpha = 0.0001;

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        //btnBaseCover.x =x;
       // btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 confirm BTN"
        btnBase.addChild(btnBaseCover)    
       
        //btnBaseCover.scale.set(scale);

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};

    


// confirm icon btn
function deleteBtnWithIcon(parent,x,y,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
        var btnCirclePosData = [[-10.04, -3.26], [-8.54, -6.2], [-6.2, -8.54], [-3.26, -10.04], [0.0, -10.55], [3.26, -10.04], [6.2, -8.54], [8.54, -6.2], [10.04, -3.26], [10.55, 0.0], [10.04, 3.26], [8.54, 6.2], [6.2, 8.54], [3.26, 10.04], [0.0, 10.55], [-3.26, 10.04], [-6.2, 8.54], [-8.54, 6.2], [-10.04, 3.26], [-10.55, 0.0]];

        btnBase.lineStyle(1, fillColor, 2);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        for(i=1;i<btnCirclePosData.length;i++){btnBase.lineTo(btnCirclePosData[i][0], btnCirclePosData[i][1]);};
        btnBase.lineTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    var drawCmd = new PIXI.Graphics();
    var drawLinePosData = [[-5.26, -4.23], [-5.32, -4.48], [-5.24, -4.99], [-5.0, -5.34], [-4.59, -5.59], [-2.77, -5.59], [-2.82, -5.85], [-2.69, -6.43], [-2.42, -6.81], [-2.04, -7.09], [-1.7, -7.25], [1.71, -7.25], [2.32, -7.09], [2.7, -6.75], [2.89, -6.21], [2.95, -5.83], [2.93, -5.59], [4.49, -5.59], [5.02, -5.3], [5.24, -4.93], [5.34, -4.45], [5.11, -4.08], [-5.07, -4.08]];
            drawCmd.lineStyle(1, iconColor, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
   var drawLinePosData = [[-4.57, -3.47], [4.52, -3.43], [4.83, -3.25], [4.18, 6.21], [3.96, 6.71], [3.67, 7.03], [3.25, 7.25], [-3.07, 7.27], [-3.47, 7.16], [-3.79, 6.95], [-4.13, 6.37], [-4.83, -3.07], [-4.78, -3.31]];
 
            drawCmd.lineStyle(1, iconColor, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
   var drawLinePosData = [[-2.87, -2.14], [-2.77, -2.29], [-2.58, -2.4], [-2.35, -2.31], [-2.26, -2.13], [-2.02, 5.5], [-2.12, 5.66], [-2.33, 5.76], [-2.5, 5.71], [-2.63, 5.53]];
 
            drawCmd.lineStyle(1, fillColor, 0);
            drawCmd.beginFill(fillColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
   var drawLinePosData = [[-0.33, -2.15], [-0.23, -2.3], [-0.03, -2.4], [0.2, -2.3], [0.29, -2.12], [0.29, 5.51], [0.18, 5.67], [-0.03, 5.76], [-0.2, 5.7], [-0.33, 5.52]];
    
            drawCmd.lineStyle(1, fillColor, 0);
            drawCmd.beginFill(fillColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
   var drawLinePosData = [[2.23, -2.16], [2.34, -2.3], [2.54, -2.39], [2.77, -2.29], [2.85, -2.11], [2.65, 5.52], [2.54, 5.68], [2.32, 5.76], [2.16, 5.7], [2.03, 5.52]];
            
            drawCmd.lineStyle(1, fillColor, 0);
            drawCmd.beginFill(fillColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);

    
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
            drawCmd.x =0;
            drawCmd.y =0;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1);

        btnBase.addChild(drawCmd)    



    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        for(i=1;i<btnCirclePosData.length;i++){btnBaseCover.lineTo(btnCirclePosData[i][0], btnCirclePosData[i][1]);};
        btnBaseCover.lineTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        btnBaseCover.alpha = 0.0001;

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        //btnBaseCover.x =x;
       // btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 confirm BTN"
        btnBase.addChild(btnBaseCover)    
       
        //btnBaseCover.scale.set(scale);

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};






// nextPage icon 圓形 下一頁
function pageChangeSelBtn(parent,x,y,w,h,r,iconColor,fillColor,scale,type){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
       // btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
       // for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
       // btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.drawCircle(0, 0, 13);

    
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    var drawCmd = new PIXI.Graphics();
    if(type == "next"){
        var drawLinePosData = [[-3.14, 4.89], [-3.14, -4.89], [-3.11, -5.02], [-3.03, -5.13], [-2.92, -5.19], [-2.67, -5.2], [5.81, -0.27], [5.9, -0.18], [5.96, -0.07], [5.96, 0.07], [5.9, 0.18], [5.81, 0.27], [-2.67, 5.16], [-2.79, 5.2], [-2.92, 5.19], [-3.03, 5.13], [-3.11, 5.02]];
        
        var btnNote ="下一頁"
  
    }else if(type == "end"){
        
        var drawLinePosData = [[-5.01, 5.16], [-5.13, 5.2], [-5.26, 5.19], [-5.37, 5.13], [-5.45, 5.02], [-5.48, 4.89], [-5.48, -4.89], [-5.45, -5.02], [-5.37, -5.13], [-5.26, -5.19], [-5.13, -5.2], [-5.01, -5.16], [3.47, -0.27], [3.46, -5.36], [3.49, -5.45], [3.55, -5.51], [3.64, -5.54], [4.89, -5.54], [4.98, -5.51], [5.04, -5.45], [5.06, -5.36], [5.06, 5.36], [5.04, 5.45], [4.98, 5.51], [4.89, 5.54], [3.64, 5.54], [3.55, 5.51], [3.49, 5.45], [3.46, 5.36], [3.47, 0.27]];
        var btnNote ="最終頁"


        
    }else if(type == "pre"){
        var drawLinePosData = [[3.14, -4.89], [3.14, 4.89], [3.11, 5.02], [3.03, 5.13], [2.92, 5.19], [2.67, 5.2], [-5.81, 0.27], [-5.9, 0.18], [-5.96, 0.07], [-5.96, -0.07], [-5.9, -0.18], [-5.81, -0.27], [2.67, -5.16], [2.79, -5.2], [2.92, -5.19], [3.03, -5.13], [3.11, -5.02]];
        var btnNote ="上一頁"

    }else if(type == "begin"){
        var  drawLinePosData = [[5.01, -5.16], [5.13, -5.2], [5.26, -5.19], [5.37, -5.13], [5.45, -5.02], [5.48, -4.89], [5.48, 4.89], [5.45, 5.02], [5.37, 5.13], [5.26, 5.19], [5.13, 5.2], [5.01, 5.16], [-3.47, 0.27], [-3.46, 5.36], [-3.49, 5.45], [-3.55, 5.51], [-3.64, 5.54], [-4.89, 5.54], [-4.98, 5.51], [-5.04, 5.45], [-5.06, 5.36], [-5.06, -5.36], [-5.04, -5.45], [-4.98, -5.51], [-4.89, -5.54], [-3.64, -5.54], [-3.55, -5.51], [-3.49, -5.45], [-3.46, -5.36], [-3.47, -0.27]];
        var btnNote ="最前頁"

    }else if(type == "now"){
        
        var drawLinePosData = [[-4.37, 4.86], [-4.52, 4.83], [-4.66, 4.76], [-4.76, 4.66], [-4.83, 4.52], [-4.86, 4.37], [-4.86, -4.37], [-4.83, -4.52], [-4.76, -4.66], [-4.66, -4.76], [-4.52, -4.83], [-4.37, -4.86], [4.37, -4.86], [4.52, -4.83], [4.66, -4.76], [4.76, -4.66], [4.83, -4.52], [4.86, -4.37], [4.86, 4.37], [4.83, 4.52], [4.76, 4.66], [4.66, 4.76], [4.52, 4.83], [4.37, 4.86]];
         var btnNote ="當前頁"

        
    }
            drawCmd.lineStyle(1, iconColor, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
            drawCmd.x =0;
            drawCmd.y =0;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1);

        btnBase.addChild(drawCmd)    



    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
       // btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
       // for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
       // btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.drawCircle(0, 0, 13);

        btnBaseCover.alpha = 0.0001;

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        //btnBaseCover.x =x;
       // btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = btnNote
        btnBase.addChild(btnBaseCover)    
       
        //btnBaseCover.scale.set(scale);

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};


// price Icon Btn 
function priceListEditBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
        var drawCmd = new PIXI.Graphics();
        var drawLinePosData = [[-3.94, 2.13], [-3.94, 2.13], [-1.49, 2.13], [-1.46, 2.59], [-1.38, 2.98], [-1.23, 3.3], [-1.03, 3.55], [-0.79, 3.74], [-0.51, 3.88], [-0.2, 3.96], [0.13, 3.99], [0.44, 3.97], [0.7, 3.9], [0.93, 3.79], [1.12, 3.64], [1.27, 3.46], [1.38, 3.24], [1.44, 3.01], [1.46, 2.75], [1.45, 2.54], [1.42, 2.35], [1.38, 2.18], [1.32, 2.02], [1.23, 1.88], [1.13, 1.75], [1.0, 1.63], [0.85, 1.52], [0.67, 1.41], [0.23, 1.19], [-0.61, 0.84], [-1.57, 0.38], [-2.3, -0.07], [-2.6, -0.34], [-3.1, -0.95], [-3.41, -1.71], [-3.52, -2.63], [-3.42, -3.46], [-3.12, -4.19], [-2.64, -4.81], [-2.0, -5.3], [-1.63, -5.49], [-1.22, -5.63], [-0.79, -5.74], [-0.32, -5.81], [-0.32, -7.47], [0.93, -7.47], [0.93, -5.79], [1.37, -5.69], [1.79, -5.56], [2.17, -5.39], [2.85, -4.92], [3.37, -4.29], [3.57, -3.92], [3.85, -3.09], [3.92, -2.62], [3.94, -2.13], [1.49, -2.13], [1.47, -2.55], [1.29, -3.2], [0.94, -3.64], [0.46, -3.86], [-0.13, -3.86], [-0.59, -3.69], [-0.9, -3.34], [-1.05, -2.88], [-1.06, -2.43], [-0.93, -1.97], [-0.75, -1.72], [-0.47, -1.48], [0.17, -1.13], [1.01, -0.76], [1.96, -0.29], [2.69, 0.17], [3.26, 0.73], [3.68, 1.41], [3.81, 1.81], [3.91, 2.73], [3.82, 3.58], [3.52, 4.31], [3.31, 4.64], [3.05, 4.92], [2.43, 5.4], [2.06, 5.58], [1.66, 5.73], [1.23, 5.83], [0.77, 5.9], [0.77, 7.47], [-0.48, 7.47], [-0.48, 5.9], [-0.94, 5.83], [-1.39, 5.72], [-2.21, 5.39], [-2.58, 5.15], [-3.21, 4.54], [-3.68, 3.72], [-3.82, 3.24], [-3.91, 2.71]];

            drawCmd.lineStyle(1, 0xffffff, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
   
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
           // drawCmd.x =x;
           // drawCmd.y =y;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1);


            btnBase.addChild(drawCmd) 

    

    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選userBTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};





// userLogin Icon Btn 
function userLoginBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
        var drawCmd = new PIXI.Graphics();
        var drawLinePosData = [[-10.26, -3.45], [-10.27, -6.87], [-10.01, -8.21], [-9.29, -9.29], [-8.21, -10.01], [-6.86, -10.28], [6.85, -10.28], [7.89, -10.12], [8.81, -9.69], [9.54, -9.01], [10.05, -8.11], [10.26, -7.23], [10.28, 6.91], [10.01, 8.22], [9.29, 9.29], [8.22, 10.01], [6.91, 10.27], [-6.91, 10.27], [-8.2, 10.02], [-9.27, 9.31], [-9.99, 8.26], [-10.27, 6.98], [-10.27, 3.46], [-8.09, 3.46], [-8.09, 6.82], [-7.95, 7.47], [-7.59, 7.88], [-6.82, 8.09], [6.84, 8.09], [7.36, 8.0], [7.76, 7.75], [8.01, 7.35], [8.1, 6.83], [8.07, -7.08], [7.85, -7.66], [7.45, -7.96], [6.89, -8.09], [-6.82, -8.1], [-7.39, -7.99], [-7.85, -7.64], [-8.08, -7.07], [-8.09, -3.45]];

            drawCmd.lineStyle(1, 0xffffff, 0);
            drawCmd.beginFill(iconColor, 1);
    
    
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
               
        drawCmd.moveTo(-7.84, -2.34);

        var drawLinePosData = [[-7.84, -2.34], [1.35, -2.36], [1.37, -4.95], [7.84, 0.0], [1.37, 4.95], [1.37, 2.35], [-7.84, 2.35]];
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
          //  drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
    
            drawCmd.lineStyle(1, 0xffffff, 0);
            drawCmd.beginFill(iconColor, 1);
    
    
    
    
   
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
           // drawCmd.x =x;
           // drawCmd.y =y;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1);


            btnBase.addChild(drawCmd) 

    

    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 userLoginBTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};


// 編輯工具icon btn

function toolEditBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
   // console.log(parent)
    

    var btnBase = new PIXI.Graphics();
  //  var btnBasePosData = [[-12.0, -10.8], [-10.8, -12.0], [10.8, -12.0], [12.0, -10.8], [12.0, 10.8], [10.8, 12.0], [-10.8, 12.0], [-12.0, 10.8]];
    btnBase.lineStyle(1, '0x557799', 0);
    btnBase.beginFill(fillColor, 1);
    btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
    for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
    btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
    btnBase.alpha = 1;
    btnBase.scale.set(scale);

   // btnBase.pivot.x = btnBase.width/2;
   // btnBase.pivot.y = btnBase.height/2;
    
    btnBase.x =x;
    btnBase.y =y;
    btnBase.name="btnBase";

    parent.addChild(btnBase)    

    
    
    
    
    
    var toolEditIcon = new PIXI.Graphics();
    
 
    
    var toolEditIconPosData =  [[-2.12, 9.31], [-1.59, 10.29], [-1.06, 11.27], [1.06, 11.27], [1.59, 10.29], [2.12, 9.31], [3.76, 8.77], [4.76, 9.26], [5.77, 9.74], [7.48, 8.49], [7.33, 7.39], [7.18, 6.29], [8.2, 4.89], [9.29, 4.69], [10.39, 4.49], [11.04, 2.47], [10.27, 1.67], [9.51, 0.86], [9.51, -0.86], [10.27, -1.67], [11.04, -2.47], [10.39, -4.49], [9.29, -4.69], [8.2, -4.89], [7.18, -6.29], [7.33, -7.39], [7.48, -8.49], [5.77, -9.74], [4.76, -9.26], [3.76, -8.77], [2.12, -9.31], [1.59, -10.29], [1.06, -11.27], [-1.06, -11.27], [-1.59, -10.29], [-2.12, -9.31], [-3.76, -8.77], [-4.76, -9.26], [-5.77, -9.74], [-7.48, -8.49], [-7.33, -7.39], [-7.18, -6.29], [-8.2, -4.89], [-9.29, -4.69], [-10.39, -4.49], [-11.04, -2.47], [-10.27, -1.67], [-9.51, -0.86], [-9.51, 0.86], [-10.27, 1.67], [-11.04, 2.47], [-10.39, 4.49], [-9.29, 4.69], [-8.2, 4.89], [-7.18, 6.29], [-7.33, 7.39], [-7.48, 8.49], [-5.77, 9.74], [-4.76, 9.26], [-3.76, 8.77]];

    
    var centerHole =[[-0.69, 4.36], [0.69, 4.36], [2.0, 3.93], [3.12, 3.12], [3.93, 2.0], [4.36, 0.69], [4.36, -0.69], [3.93, -2.0], [3.12, -3.12], [2.0, -3.93], [0.69, -4.36], [-0.69, -4.36], [-2.0, -3.93], [-3.12, -3.12], [-3.93, -2.0], [-4.36, -0.69], [-4.36, 0.69], [-3.93, 2.0], [-3.12, 3.12], [-2.0, 3.93]];


    
    
    toolEditIcon.lineStyle(1, iconColor, 0);
    
    toolEditIcon.beginFill(iconColor, 1);
    toolEditIcon.moveTo(toolEditIconPosData[0][0], toolEditIconPosData[0][1]);
    for(i=1;i<toolEditIconPosData.length;i++){toolEditIcon.lineTo(toolEditIconPosData[i][0], toolEditIconPosData[i][1]);};
    toolEditIcon.lineTo(toolEditIconPosData[0][0], toolEditIconPosData[0][1]);

    
    //toolEditIcon.lineStyle(1, 0xffffff, 0);
    toolEditIcon.beginFill(fillColor, 1);
    toolEditIcon.moveTo(centerHole[0][0], centerHole[0][1]);
    for(i=1;i<centerHole.length;i++){toolEditIcon.lineTo(centerHole[i][0], centerHole[i][1]);};
    toolEditIcon.lineTo(centerHole[0][0], centerHole[0][1]);
    toolEditIcon.alpha = 1;
    toolEditIcon.scale.set(0.8);

  //  toolEditIcon.pivot.x = toolEditIcon.width/2;
   // toolEditIcon.pivot.y = toolEditIcon.height/2;
   // toolEditIcon.x =x //- scale;
   // toolEditIcon.y =y //- scale;
    toolEditIcon.name="toolEditIcon";


    btnBase.addChild(toolEditIcon) 
    
    var btnBaseCover = new PIXI.Graphics();
    
    btnBaseCover.lineStyle(1, '0xaaaaff', 0);
    btnBaseCover.beginFill('0x5555aa', 1);
    btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
    for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
    btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
    btnBaseCover.alpha = 0.0001;
  //  btnBaseCover.scale.set(scale);

   // btnBase.pivot.x = btnBase.width/2;
   // btnBase.pivot.y = btnBase.height/2;
    
   // btnBaseCover.x =x;
   // btnBaseCover.y =y;
    btnBaseCover.name="btnBaseCover";
    btnBaseCover.noteA = "點選工具BTN"
    btnBase.addChild(btnBaseCover)    

    btnBaseCover.interactive = true;
    btnBaseCover.buttonMode = true;
    
    
    btnBaseCover.on('pointerover', function(){this.tint="0xffffff";
                                          this.alpha = 0.5
                                                    })
                .on('pointerout', function(){
                                        this.alpha = 0
                                                })
                .on('pointerup', function(){
                                        this.alpha = 0

                                              })
        /*
                .on('mousedown', function(){
                                      //  console.log('click tool btn')
                                        console.log(this.noteA)

                                     //   this.alpha = 0.5

                                              })
                                              */
    
    
    return btnBaseCover  
    
    
};



// set holiday Btn Icon Btn 
function setHolidayBtnWithIcon(parent,x,y,descText,fontSize,fontColor,iconColor,fillColor,scale){
   // console.log(parent)
    
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
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
        var drawCmd = new PIXI.Graphics();
        var drawLinePosData = [[-2.91, 8.08], [0.7, 8.08], [4.32, 8.08], [7.93, 8.08], [8.16, 7.92], [8.25, 7.73], [8.22, 7.53], [8.06, 7.29], [7.72, 6.95], [7.36, 6.64], [6.97, 6.36], [6.56, 6.1], [5.81, 5.71], [5.04, 5.38], [4.23, 5.13], [3.41, 4.94], [3.2, 4.88], [3.06, 4.79], [2.96, 4.64], [2.9, 4.44], [2.8, 4.05], [2.68, 3.65], [2.55, 3.26], [2.42, 2.86], [2.52, 2.84], [2.62, 2.83], [2.73, 2.82], [2.85, 2.82], [3.05, 2.86], [3.24, 2.93], [3.4, 3.04], [3.55, 3.19], [3.57, 3.22], [3.6, 3.24], [3.63, 3.25], [3.66, 3.27], [3.68, 3.24], [3.7, 3.2], [3.71, 3.16], [3.72, 3.13], [3.73, 3.11], [3.73, 3.09], [3.72, 3.06], [3.72, 3.04], [3.62, 2.7], [3.39, 2.46], [3.07, 2.33], [2.67, 2.32], [2.69, 2.3], [2.72, 2.28], [2.74, 2.26], [2.76, 2.24], [3.12, 2.08], [3.49, 2.0], [3.86, 2.01], [4.24, 2.14], [4.29, 2.16], [4.34, 2.18], [4.39, 2.18], [4.44, 2.2], [4.44, 2.14], [4.43, 2.08], [4.43, 2.03], [4.41, 1.98], [4.12, 1.57], [3.7, 1.31], [3.21, 1.22], [2.72, 1.32], [2.68, 1.34], [2.65, 1.36], [2.61, 1.38], [2.57, 1.39], [2.76, 1.2], [2.98, 1.05], [3.22, 0.95], [3.49, 0.9], [3.53, 0.89], [3.57, 0.87], [3.61, 0.84], [3.65, 0.82], [3.64, 0.78], [3.62, 0.75], [3.6, 0.72], [3.58, 0.7], [3.07, 0.47], [2.53, 0.48], [2.04, 0.71], [1.68, 1.14], [1.66, 1.19], [1.64, 1.24], [1.62, 1.3], [1.59, 1.36], [1.37, 1.22], [1.13, 1.13], [0.89, 1.09], [0.64, 1.11], [0.29, 1.21], [-0.0, 1.39], [-0.23, 1.63], [-0.4, 1.96], [-0.41, 2.0], [-0.4, 2.03], [-0.4, 2.07], [-0.39, 2.11], [-0.35, 2.11], [-0.31, 2.11], [-0.27, 2.11], [-0.23, 2.1], [-0.2, 2.09], [-0.17, 2.07], [-0.14, 2.06], [-0.11, 2.04], [0.12, 1.95], [0.36, 1.91], [0.6, 1.9], [0.87, 1.94], [0.79, 1.96], [0.73, 1.97], [0.67, 1.98], [0.62, 1.99], [0.19, 2.18], [-0.13, 2.52], [-0.33, 2.95], [-0.35, 3.42], [-0.33, 3.49], [-0.3, 3.55], [-0.27, 3.62], [-0.24, 3.69], [-0.19, 3.63], [-0.15, 3.58], [-0.1, 3.53], [-0.06, 3.48], [0.18, 3.17], [0.52, 2.94], [0.9, 2.79], [1.28, 2.76], [1.25, 2.78], [1.21, 2.8], [1.18, 2.82], [1.15, 2.83], [0.88, 3.07], [0.75, 3.4], [0.75, 3.75], [0.91, 4.06], [0.93, 4.08], [0.96, 4.09], [0.99, 4.11], [1.02, 4.12], [1.03, 4.1], [1.05, 4.07], [1.06, 4.04], [1.07, 4.01], [1.08, 3.95], [1.08, 3.9], [1.09, 3.84], [1.1, 3.79], [1.21, 3.53], [1.38, 3.31], [1.6, 3.16], [1.83, 3.09], [1.95, 3.49], [2.04, 3.89], [2.1, 4.3], [2.13, 4.73], [0.93, 4.66], [-0.26, 4.7], [-1.44, 4.83], [-2.62, 5.07], [-2.32, 2.96], [-1.7, 0.98], [-0.78, -0.87], [0.43, -2.61], [0.52, -2.55], [0.6, -2.48], [0.67, -2.42], [0.74, -2.35], [1.15, -1.78], [1.38, -1.18], [1.43, -0.53], [1.27, 0.16], [1.26, 0.21], [1.26, 0.27], [1.28, 0.33], [1.31, 0.37], [1.35, 0.39], [1.41, 0.4], [1.47, 0.4], [1.52, 0.38], [2.08, -0.05], [2.44, -0.68], [2.56, -1.4], [2.4, -2.09], [2.27, -2.31], [2.11, -2.51], [1.93, -2.7], [1.71, -2.88], [1.76, -2.87], [1.8, -2.87], [1.84, -2.86], [1.86, -2.85], [2.62, -2.46], [3.25, -1.96], [3.76, -1.33], [4.12, -0.56], [4.17, -0.36], [4.21, -0.15], [4.24, 0.05], [4.28, 0.26], [4.3, 0.32], [4.33, 0.37], [4.38, 0.42], [4.42, 0.45], [4.47, 0.45], [4.53, 0.43], [4.58, 0.39], [4.63, 0.35], [4.69, 0.28], [4.75, 0.2], [4.8, 0.12], [4.85, 0.03], [5.05, -0.39], [5.18, -0.83], [5.23, -1.28], [5.22, -1.75], [5.08, -2.44], [4.82, -3.05], [4.41, -3.57], [3.86, -4.01], [3.75, -4.07], [3.64, -4.14], [3.52, -4.2], [3.39, -4.26], [3.42, -4.26], [3.45, -4.26], [3.46, -4.26], [3.48, -4.26], [4.15, -4.11], [4.75, -3.85], [5.29, -3.48], [5.75, -2.97], [5.82, -2.9], [5.89, -2.85], [5.96, -2.83], [6.06, -2.84], [6.14, -2.89], [6.18, -2.95], [6.2, -3.03], [6.21, -3.12], [6.2, -3.62], [6.09, -4.1], [5.91, -4.56], [5.64, -4.98], [5.09, -5.6], [4.45, -6.02], [3.71, -6.24], [2.87, -6.25], [2.74, -6.23], [2.61, -6.2], [2.48, -6.17], [2.34, -6.14], [2.34, -6.17], [2.33, -6.18], [2.33, -6.2], [2.33, -6.22], [2.3, -6.91], [2.12, -7.54], [1.79, -8.1], [1.31, -8.59], [0.68, -9.01], [0.0, -9.26], [-0.72, -9.33], [-1.47, -9.23], [-1.56, -9.2], [-1.64, -9.16], [-1.7, -9.1], [-1.73, -9.0], [-1.72, -8.91], [-1.67, -8.84], [-1.6, -8.79], [-1.52, -8.75], [-1.34, -8.65], [-1.16, -8.55], [-0.99, -8.44], [-0.82, -8.33], [-0.46, -8.0], [-0.16, -7.62], [0.08, -7.21], [0.27, -6.75], [0.25, -6.76], [0.24, -6.78], [0.22, -6.79], [0.21, -6.81], [-0.26, -7.31], [-0.8, -7.68], [-1.41, -7.9], [-2.09, -7.98], [-2.79, -7.92], [-3.43, -7.72], [-4.01, -7.38], [-4.51, -6.89], [-4.55, -6.83], [-4.57, -6.77], [-4.58, -6.7], [-4.57, -6.65], [-4.53, -6.62], [-4.47, -6.6], [-4.4, -6.58], [-4.34, -6.58], [-4.08, -6.59], [-3.82, -6.6], [-3.56, -6.6], [-3.31, -6.59], [-2.73, -6.47], [-2.21, -6.24], [-1.73, -5.94], [-1.28, -5.56], [-1.11, -5.39], [-0.95, -5.21], [-0.81, -5.01], [-0.69, -4.8], [-0.7, -4.8], [-0.72, -4.81], [-0.73, -4.82], [-0.74, -4.83], [-1.7, -5.3], [-2.63, -5.2], [-3.38, -4.68], [-3.81, -3.91], [-3.82, -3.84], [-3.81, -3.78], [-3.79, -3.71], [-3.76, -3.67], [-3.71, -3.65], [-3.65, -3.65], [-3.58, -3.67], [-3.53, -3.69], [-3.27, -3.85], [-3.01, -3.96], [-2.73, -4.04], [-2.43, -4.07], [-1.93, -4.06], [-1.46, -3.95], [-1.02, -3.75], [-0.62, -3.43], [-0.68, -3.38], [-0.74, -3.33], [-0.8, -3.27], [-0.85, -3.22], [-1.66, -2.4], [-2.38, -1.51], [-3.03, -0.57], [-3.63, 0.41], [-4.39, 1.85], [-5.06, 3.33], [-5.64, 4.85], [-6.15, 6.39], [-6.23, 6.66], [-6.34, 6.92], [-6.49, 7.16], [-6.68, 7.37], [-6.8, 7.54], [-6.81, 7.72], [-6.74, 7.89], [-6.59, 8.03], [-6.57, 8.04], [-6.56, 8.06], [-6.54, 8.07], [-6.53, 8.08]];

            drawCmd.lineStyle(1, 0xffffff, 0);
            drawCmd.beginFill(iconColor, 1);
    
    
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
               

    
    
    
   
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
           // drawCmd.x =x;
           // drawCmd.y =y;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1);


            btnBase.addChild(drawCmd) 

        


    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 假日設定"
        btnBase.addChild(btnBaseCover)    
    
    //說明文字
    var btnDescText = new PIXI.Text(descText, fontStyle);
            
            
        parent.addChild(btnDescText)
        btnDescText.name = 'btnDescText'
        btnDescText.x = 60
        btnDescText.y = y
        btnDescText.alpha = 0

       // btnDescText.pivot.y = btnDescText.height/2
       // btnDescText.y = btnBaseCover.height/2 - fontSize/2//15
    
    
    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                           //   this.alpha = 0.5
                                            console.log(this.parent)
                                            this.parent.parent.getChildByName('btnDescText').alpha = 1
                                                        })
                    .on('pointerout', function(){
                                         //   this.alpha = 0
                                            this.parent.parent.getChildByName('btnDescText').alpha = 0

                                                    })
                    .on('pointerup', function(){
                                         //   this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                        //    this.alpha = 0.5

                                                  })


    
    
    
    
    
    
    
    return btnBaseCover     
    
    
    
    
};


// set change DataBase URL
function changeDataBaseURLBtnWithIcon(parent,x,y,descText,fontSize,fontColor,iconColor,fillColor,scale){
   // console.log(parent)
    
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
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
        var drawCmd = new PIXI.Graphics();
        var drawLinePosData = [[-7.05, -4.71], [-9.17, -4.71], [-9.17, 1.53], [-9.14, 2.05], [-9.06, 2.54], [-8.91, 2.98], [-8.71, 3.38], [-8.45, 3.74], [-8.15, 4.06], [-7.8, 4.33], [-7.4, 4.55], [-6.97, 4.72], [-6.5, 4.84], [-6.0, 4.92], [-5.46, 4.94], [-4.93, 4.92], [-4.43, 4.84], [-3.96, 4.72], [-3.53, 4.55], [-3.14, 4.33], [-2.79, 4.06], [-2.49, 3.74], [-2.24, 3.38], [-2.03, 2.98], [-1.89, 2.54], [-1.8, 2.05], [-1.77, 1.53], [-1.77, -4.71], [-3.9, -4.71], [-3.9, 1.53], [-3.93, 1.94], [-4.0, 2.29], [-4.12, 2.59], [-4.3, 2.82], [-4.52, 3.0], [-4.79, 3.13], [-5.1, 3.21], [-5.46, 3.24], [-6.16, 3.13], [-6.65, 2.81], [-6.95, 2.28], [-7.05, 1.53]];

            drawCmd.lineStyle(1, 0xffffff, 0);
            drawCmd.beginFill(iconColor, 1);
    
    
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
               
        var drawLinePosData = [[-0.98, 4.93], [-0.98, -1.6], [1.89, -1.59], [2.23, -1.55], [2.54, -1.48], [2.83, -1.38], [3.09, -1.25], [3.31, -1.1], [3.51, -0.92], [3.67, -0.71], [3.8, -0.48], [3.89, -0.22], [3.95, 0.06], [3.97, 0.37], [3.95, 0.71], [3.89, 1.01], [3.8, 1.28], [3.67, 1.52], [3.51, 1.73], [3.31, 1.91], [3.08, 2.08], [2.81, 2.22], [4.2, 4.93], [2.64, 4.93], [1.46, 2.6], [0.48, 2.6], [0.48, 4.93]];
    
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);

        var drawLinePosData = [[6.46, -1.6], [5.0, -1.6], [5.0, 4.93], [9.26, 4.93], [9.26, 3.76], [6.46, 3.76]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
        var drawLinePosData = [[1.52, -0.42], [1.75, -0.41], [1.95, -0.36], [2.12, -0.29], [2.25, -0.18], [2.36, -0.05], [2.44, 0.11], [2.49, 0.29], [2.5, 0.5], [2.49, 0.7], [2.44, 0.88], [2.36, 1.04], [2.25, 1.17], [2.11, 1.28], [1.95, 1.36], [1.75, 1.4], [1.52, 1.42], [0.49, 1.42], [0.49, -0.42]];
         
            drawCmd.beginFill(fillColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    

            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
           // drawCmd.x =x;
           // drawCmd.y =y;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1);


            btnBase.addChild(drawCmd) 

        


    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 更改URL"
        btnBase.addChild(btnBaseCover)    
    
    //說明文字
    var urlBtnDescText = new PIXI.Text(descText, fontStyle);
            
            
        parent.addChild(urlBtnDescText)
        urlBtnDescText.name = 'urlBtnDescText'
        urlBtnDescText.x = 60
        urlBtnDescText.y = y
        urlBtnDescText.alpha = 0

       // btnDescText.pivot.y = btnDescText.height/2
       // btnDescText.y = btnBaseCover.height/2 - fontSize/2//15
    
    
    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                           //   this.alpha = 0.5
                                            console.log(this.parent)
                                            this.parent.parent.getChildByName('urlBtnDescText').alpha = 1
                                                        })
                    .on('pointerout', function(){
                                         //   this.alpha = 0
                                            this.parent.parent.getChildByName('urlBtnDescText').alpha = 0

                                                    })
                    .on('pointerup', function(){
                                         //   this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                        //    this.alpha = 0.5

                                                  })


    
    
    
    
    
    
    
    return btnBaseCover     
    
    
    
    
};




// user 編輯工具

function allUserEditBtnWithIcon(parent,x,y,descText,fontSize,fontColor,iconColor,fillColor,scale){
   // console.log(parent)
    
    
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
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    var drawCmd = new PIXI.Graphics();
    var drawLinePosData =  [[0.0, -10.86], [1.51, -10.62], [2.87, -9.93], [3.95, -8.85], [4.64, -7.49], [4.88, -5.98], [4.64, -4.47], [3.95, -3.11], [2.87, -2.03], [1.51, -1.34], [-0.0, -1.1], [-1.51, -1.34], [-2.87, -2.03], [-3.95, -3.11], [-4.64, -4.47], [-4.88, -5.98], [-4.64, -7.49], [-3.95, -8.85], [-2.87, -9.93], [-1.51, -10.62]];

        drawCmd.lineStyle(1, 0xffffff, 0);
        drawCmd.beginFill(iconColor, 1);
        drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
        drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);

    var drawLinePosData2 = [[0.0, -0.3], [2.72, 0.13], [5.17, 1.38], [7.12, 3.32], [8.37, 5.78], [8.8, 8.5], [8.37, 10.9], [7.12, 10.9], [5.17, 10.9], [2.72, 10.9], [0.0, 10.9], [-2.72, 10.9], [-5.17, 10.9], [-7.12, 10.9], [-8.37, 10.9], [-8.8, 8.5], [-8.37, 5.78], [-7.12, 3.32], [-5.17, 1.38], [-2.72, 0.13]];

        drawCmd.moveTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);
        for(i=1;i<drawLinePosData2.length;i++){drawCmd.lineTo(drawLinePosData2[i][0], drawLinePosData2[i][1]);};
        drawCmd.lineTo(drawLinePosData2[0][0], drawLinePosData2[0][1]);
        drawCmd.alpha = 1;
       // drawCmd.pivot.x = drawCmd.width/2;
       // drawCmd.pivot.y = drawCmd.height/2;
       // drawCmd.x =x;
       // drawCmd.y =y;
        drawCmd.name="drawCmd";
        drawCmd.scale.set(0.8);


        btnBase.addChild(drawCmd) 

 

    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 更改URL"
        btnBase.addChild(btnBaseCover)    
    
    //說明文字
    var allUserEditBtnDescText = new PIXI.Text(descText, fontStyle);
            
            
        parent.addChild(allUserEditBtnDescText)
        allUserEditBtnDescText.name = 'allUserEditBtnDescText'
        allUserEditBtnDescText.x = 60
        allUserEditBtnDescText.y = y
        allUserEditBtnDescText.alpha = 0

       // btnDescText.pivot.y = btnDescText.height/2
       // btnDescText.y = btnBaseCover.height/2 - fontSize/2//15
    
    
    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                           //   this.alpha = 0.5
                                            console.log(this.parent)
                                            this.parent.parent.getChildByName('allUserEditBtnDescText').alpha = 1
                                                        })
                    .on('pointerout', function(){
                                         //   this.alpha = 0
                                            this.parent.parent.getChildByName('allUserEditBtnDescText').alpha = 0

                                                    })
                    .on('pointerup', function(){
                                         //   this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                        //    this.alpha = 0.5

                                                  })


    
    
    
    
    
    
    
    return btnBaseCover     
    
    
    
    
    
};





















function costPreviewWithIcon(parent,x,y,iconColor,fillColor,scale){
   // console.log(parent)
    
    
    var btnBase = new PIXI.Graphics();
        var btnCirclePosData = [[-10.04, -3.26], [-8.54, -6.2], [-6.2, -8.54], [-3.26, -10.04], [0.0, -10.55], [3.26, -10.04], [6.2, -8.54], [8.54, -6.2], [10.04, -3.26], [10.55, 0.0], [10.04, 3.26], [8.54, 6.2], [6.2, 8.54], [3.26, 10.04], [0.0, 10.55], [-3.26, 10.04], [-6.2, 8.54], [-8.54, 6.2], [-10.04, 3.26], [-10.55, 0.0]];

        btnBase.lineStyle(1, fillColor, 2);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        for(i=1;i<btnCirclePosData.length;i++){btnBase.lineTo(btnCirclePosData[i][0], btnCirclePosData[i][1]);};
        btnBase.lineTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    var drawCmd = new PIXI.Graphics();
    var drawLinePosData = [[-3.94, 2.13], [-3.94, 2.13], [-1.49, 2.13], [-1.46, 2.59], [-1.38, 2.98], [-1.23, 3.3], [-1.03, 3.55], [-0.79, 3.74], [-0.51, 3.88], [-0.2, 3.96], [0.13, 3.99], [0.44, 3.97], [0.7, 3.9], [0.93, 3.79], [1.12, 3.64], [1.27, 3.46], [1.38, 3.24], [1.44, 3.01], [1.46, 2.75], [1.45, 2.54], [1.42, 2.35], [1.38, 2.18], [1.32, 2.02], [1.23, 1.88], [1.13, 1.75], [1.0, 1.63], [0.85, 1.52], [0.67, 1.41], [0.23, 1.19], [-0.61, 0.84], [-1.57, 0.38], [-2.3, -0.07], [-2.6, -0.34], [-3.1, -0.95], [-3.41, -1.71], [-3.52, -2.63], [-3.42, -3.46], [-3.12, -4.19], [-2.64, -4.81], [-2.0, -5.3], [-1.63, -5.49], [-1.22, -5.63], [-0.79, -5.74], [-0.32, -5.81], [-0.32, -7.47], [0.93, -7.47], [0.93, -5.79], [1.37, -5.69], [1.79, -5.56], [2.17, -5.39], [2.85, -4.92], [3.37, -4.29], [3.57, -3.92], [3.85, -3.09], [3.92, -2.62], [3.94, -2.13], [1.49, -2.13], [1.47, -2.55], [1.29, -3.2], [0.94, -3.64], [0.46, -3.86], [-0.13, -3.86], [-0.59, -3.69], [-0.9, -3.34], [-1.05, -2.88], [-1.06, -2.43], [-0.93, -1.97], [-0.75, -1.72], [-0.47, -1.48], [0.17, -1.13], [1.01, -0.76], [1.96, -0.29], [2.69, 0.17], [3.26, 0.73], [3.68, 1.41], [3.81, 1.81], [3.91, 2.73], [3.82, 3.58], [3.52, 4.31], [3.31, 4.64], [3.05, 4.92], [2.43, 5.4], [2.06, 5.58], [1.66, 5.73], [1.23, 5.83], [0.77, 5.9], [0.77, 7.47], [-0.48, 7.47], [-0.48, 5.9], [-0.94, 5.83], [-1.39, 5.72], [-2.21, 5.39], [-2.58, 5.15], [-3.21, 4.54], [-3.68, 3.72], [-3.82, 3.24], [-3.91, 2.71]];
            drawCmd.lineStyle(1, iconColor, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
            drawCmd.x =0;
            drawCmd.y =0;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1);

        btnBase.addChild(drawCmd)    



    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        for(i=1;i<btnCirclePosData.length;i++){btnBaseCover.lineTo(btnCirclePosData[i][0], btnCirclePosData[i][1]);};
        btnBaseCover.lineTo(btnCirclePosData[0][0], btnCirclePosData[0][1]);
        btnBaseCover.alpha = 0.0001;

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        //btnBaseCover.x =x;
       // btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 cost preview BTN"
        btnBase.addChild(btnBaseCover)    
       
        //btnBaseCover.scale.set(scale);

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    .on('mousedown', function(){
                                          //  console.log('click tool btn')
                                            console.log(this.noteA)

                                            this.alpha = 0.5

                                                  })


    
    return btnBaseCover     
    
    
    
    
};


// 月報表ICON
function reportPreviewIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
    console.log('reportPreviewIcon')
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
    var drawCmd = new PIXI.Graphics();


        var drawLinePosData =  [[-8.01, 7.69], [-8.01, 6.96], [-7.02, 6.96], [-7.02, -7.51], [-3.32, -7.51], [-3.32, 6.96], [-2.12, 6.96], [-2.12, -4.1], [1.49, -4.1], [1.49, 6.96], [2.77, 6.96], [2.77, -0.75], [6.4, -0.75], [6.4, 6.96], [7.68, 6.96], [7.68, 7.69]];


        drawCmd.lineStyle(1, iconColor, 0);
        drawCmd.beginFill(iconColor, 1);


        drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
        drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
        drawCmd.alpha = 1;




        //drawCmd.pivot.x = drawCmd.width/2;
        //drawCmd.pivot.y = drawCmd.height/2;
       // drawCmd.x =x;
       // drawCmd.y =y;
        drawCmd.name="drawCmd";
        drawCmd.scale.set(1);

        btnBase.addChild(drawCmd) 


    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 project BTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    


    
    return btnBaseCover     
    
    
    
    
};



// Task 說明編輯工具ICON
function taskTypeInfoEditIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
    console.log('taskInfoEditIcon')
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
        var drawCmd = new PIXI.Graphics();


        var drawLinePosData = [[1.32, -3.8], [2.35, -4.86], [-3.99, -4.86], [-4.61, -4.78], [-5.09, -4.54], [-5.42, -4.24], [-5.69, -3.83], [-5.82, -3.46], [-5.84, -3.12], [-5.84, 3.97], [-5.76, 4.51], [-5.54, 4.86], [-5.2, 5.18], [-4.89, 5.42], [-4.5, 5.58], [-4.05, 5.65], [2.99, 5.65], [3.55, 5.52], [3.94, 5.3], [4.2, 5.08], [4.4, 4.77], [4.59, 4.41], [4.67, 4.06], [4.67, -1.62], [3.6, -0.54], [3.6, 3.83], [3.49, 4.08], [3.32, 4.38], [2.98, 4.56], [-3.98, 4.56], [-4.2, 4.51], [-4.47, 4.39], [-4.67, 4.18], [-4.78, 3.96], [-4.78, -3.0], [-4.74, -3.27], [-4.66, -3.47], [-4.47, -3.66], [-4.2, -3.8]];


            drawCmd.lineStyle(1, iconColor, 0);
            drawCmd.beginFill(iconColor, 1);


            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);

        var drawLinePosData  = [[3.52, -4.84], [-1.35, 0.07], [-1.83, 1.91], [-1.8, 2.04], [-1.69, 2.11], [0.19, 1.63], [5.07, -3.26]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);

    
        var drawLinePosData  = [[3.94, -5.26], [4.12, -5.41], [4.28, -5.49], [4.57, -5.59], [4.87, -5.59], [5.19, -5.51], [5.4, -5.38], [5.63, -5.17], [5.76, -4.98], [5.84, -4.66], [5.85, -4.36], [5.8, -4.14], [5.72, -3.96], [5.59, -3.8], [5.51, -3.68]];


            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);

    
    
        drawCmd.alpha = 1;




        //drawCmd.pivot.x = drawCmd.width/2;
        //drawCmd.pivot.y = drawCmd.height/2;
       // drawCmd.x =x;
       // drawCmd.y =y;
        drawCmd.name="drawCmd";
        drawCmd.scale.set(1.4);

        btnBase.addChild(drawCmd) 


    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 project BTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    


    
    return btnBaseCover     
    
    
    
    
};




// 日曆ICON
function calendearIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
    console.log('taskInfoEditIcon')
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
        var drawCmd = new PIXI.Graphics();


        var drawLinePosData = [[-4.42, -5.48], [-6.02, -5.48], [-6.32, -5.36], [-6.49, -5.18], [-6.61, -4.99], [-6.71, -4.79], [-6.71, 5.96], [-6.6, 6.19], [-6.42, 6.42], [-6.17, 6.55], [-5.87, 6.61], [5.96, 6.61], [6.27, 6.52], [6.49, 6.37], [6.63, 6.19], [6.72, 5.92], [6.72, -4.82], [6.62, -5.07], [6.51, -5.23], [6.32, -5.36], [6.11, -5.48], [4.52, -5.48], [4.52, -3.76], [4.42, -3.52], [4.3, -3.4], [4.13, -3.23], [3.86, -3.11], [3.59, -3.08], [3.26, -3.08], [3.02, -3.17], [2.74, -3.29], [2.59, -3.5], [2.48, -3.7], [2.39, -3.88], [2.39, -5.47], [-2.29, -5.47], [-2.29, -3.91], [-2.34, -3.68], [-2.45, -3.46], [-2.64, -3.26], [-2.85, -3.13], [-3.35, -3.04], [-3.7, -3.1], [-3.96, -3.23], [-4.19, -3.42], [-4.35, -3.73], [-4.41, -3.88], [-4.41, -5.47]];


            drawCmd.lineStyle(1, iconColor, 1);
            drawCmd.beginFill(iconColor, 0.1);


            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
    
     
    
            drawCmd.lineStyle(0.2, iconColor, 1);
            drawCmd.beginFill(iconColor,1);


        var drawLinePosData = [[-3.57, -6.56], [-3.73, -6.49], [-3.83, -6.38], [-3.91, -6.24], [-3.95, -6.12], [-3.95, -4.05], [-3.93, -3.87], [-3.86, -3.74], [-3.78, -3.64], [-3.66, -3.57], [-3.56, -3.52], [-3.09, -3.52], [-2.95, -3.58], [-2.88, -3.64], [-2.8, -3.75], [-2.73, -3.89], [-2.73, -6.11], [-2.76, -6.27], [-2.83, -6.39], [-2.93, -6.47], [-3.1, -6.56], [-3.53, -6.56]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
        var drawLinePosData = [[3.19, -6.56], [3.04, -6.49], [2.93, -6.38], [2.86, -6.24], [2.81, -6.12], [2.81, -4.05], [2.84, -3.87], [2.91, -3.74], [2.99, -3.64], [3.11, -3.57], [3.21, -3.52], [3.68, -3.52], [3.82, -3.58], [3.88, -3.64], [3.96, -3.75], [4.04, -3.89], [4.04, -6.11], [4.01, -6.27], [3.93, -6.39], [3.84, -6.47], [3.66, -6.56], [3.24, -6.56]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
   
    
    
    //block 1
       var drawLinePosData = [[0.34, -1.01], [0.34, 0.51], [2.11, 0.51], [2.11, -1.01], [0.4, -1.01]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
     
        //block 2
       var drawLinePosData = [[2.87, -1.01], [2.87, 0.51], [4.64, 0.51], [4.64, -1.01], [2.93, -1.01]];


            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
         //block 3
       var drawLinePosData = [[-4.7, 1.19], [-4.7, 2.71], [-2.93, 2.71], [-2.93, 1.19], [-4.65, 1.19]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
       
    //block 4
       var drawLinePosData = [[-2.17, 1.19], [-2.17, 2.71], [-0.4, 2.71], [-0.4, 1.19], [-2.12, 1.19]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
         //block 5
       var drawLinePosData = [[0.34, 1.19], [0.34, 2.71], [2.11, 2.71], [2.11, 1.19], [0.4, 1.19]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
     
    
             //block 6
       var drawLinePosData = [[2.87, 1.19], [2.87, 2.71], [4.64, 2.71], [4.64, 1.19], [2.93, 1.19]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
                 //block 7
       var drawLinePosData = [[-4.7, 3.34], [-4.7, 4.87], [-2.93, 4.87], [-2.93, 3.34], [-4.65, 3.34]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
                 //block 8
       var drawLinePosData = [[-2.17, 3.34], [-2.17, 4.87], [-0.4, 4.87], [-0.4, 3.34], [-2.12, 3.34]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
                 //block 9
       var drawLinePosData = [[0.34, 3.34], [0.34, 4.87], [2.11, 4.87], [2.11, 3.34], [0.4, 3.34]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
                 //block 10
       var drawLinePosData = [[2.87, 3.34], [2.87, 4.87], [4.64, 4.87], [4.64, 3.34], [2.93, 3.34]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
    
 /*
    
        var drawLinePosData  = [[3.94, -5.26], [4.12, -5.41], [4.28, -5.49], [4.57, -5.59], [4.87, -5.59], [5.19, -5.51], [5.4, -5.38], [5.63, -5.17], [5.76, -4.98], [5.84, -4.66], [5.85, -4.36], [5.8, -4.14], [5.72, -3.96], [5.59, -3.8], [5.51, -3.68]];


            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);

    */
    
        drawCmd.alpha = 1;




        //drawCmd.pivot.x = drawCmd.width/2;
        //drawCmd.pivot.y = drawCmd.height/2;
       // drawCmd.x =x;
       // drawCmd.y =y;
        drawCmd.name="drawCmd";
        drawCmd.scale.set(1.4);

        btnBase.addChild(drawCmd) 


    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 project BTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    


    
    return btnBaseCover     
    
    
    
    
};




// 甘特圖ICON
function ganttIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
    console.log('taskInfoEditIcon')
    
    
    var btnBase = new PIXI.Graphics();
      //  var btnBasePosData = [[-11.01, 12.23], [-12.23, 11.01], [-12.23, -11.01], [-11.01, -12.23], [11.01, -12.23], [12.23, -11.01], [12.23, 11.01], [11.01, 12.23]];
        btnBase.lineStyle(1, '0x557799', 0);
        btnBase.beginFill(fillColor, 1);
        btnBase.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBase.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBase.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBase.alpha = 1;
        btnBase.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

        btnBase.x =x;
        btnBase.y =y;
        btnBase.name="btnBase";

        parent.addChild(btnBase)    

    
    
        var drawCmd = new PIXI.Graphics();

            drawCmd.lineStyle(0.5, iconColor, 1);
            drawCmd.beginFill(iconColor, 1);

        var drawLinePosData = [[-7.29, -6.56], [-7.29, -3.68], [-3.01, -3.68], [-3.01, -6.56], [-7.23, -6.56]];




            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
    
        var drawLinePosData = [[-3.04, 0.29], [-3.04, 3.17], [1.25, 3.17], [1.25, 0.29], [-2.98, 0.29]];





            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
            drawCmd.lineStyle(0.5, iconColor, 1);
            drawCmd.beginFill(iconColor, 0);
    
        var drawLinePosData = [[-3.02, -3.13], [-3.02, -0.26], [7.31, -0.26], [7.31, -3.13], [-2.96, -3.13]];

            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    

       var drawLinePosData = [[1.32, 3.74], [1.32, 6.62], [6.99, 6.62], [6.99, 3.74], [1.38, 3.74]];


            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
     

    
        drawCmd.alpha = 1;




        //drawCmd.pivot.x = drawCmd.width/2;
        //drawCmd.pivot.y = drawCmd.height/2;
       // drawCmd.x =x;
       // drawCmd.y =y;
        drawCmd.name="drawCmd";
        drawCmd.scale.set(1.4);

        btnBase.addChild(drawCmd) 


    var btnBaseCover = new PIXI.Graphics();
    
        btnBaseCover.lineStyle(1, '0xaaaaff', 0);
        btnBaseCover.beginFill('0x5555aa', 1);
        btnBaseCover.moveTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        for(i=1;i<btnBasePosData.length;i++){btnBaseCover.lineTo(btnBasePosData[i][0], btnBasePosData[i][1]);};
        btnBaseCover.lineTo(btnBasePosData[0][0], btnBasePosData[0][1]);
        btnBaseCover.alpha = 0.0001;
       // btnBaseCover.scale.set(scale);

       // btnBase.pivot.x = btnBase.width/2;
       // btnBase.pivot.y = btnBase.height/2;

       // btnBaseCover.x =x;
        //btnBaseCover.y =y;
        btnBaseCover.name="btnBaseCover";
        btnBaseCover.noteA = "點選 project BTN"
        btnBase.addChild(btnBaseCover)    

        btnBaseCover.interactive = true;
        btnBaseCover.buttonMode = true;

        btnBaseCover.on('pointerover', function(){//this.tint="0xffffff";
                                              this.alpha = 0.5
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 0
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 0

                                                  })
                    


    
    return btnBaseCover     
    
    
    
    
};


