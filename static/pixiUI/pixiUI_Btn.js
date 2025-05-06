
function basicBtn(parent,x,y,btnW,btnH,fontSize,btnText,borderWidth,btnBorderColor,btnFillColor,textColor,btnRectR,type,leftSpace,disabled){
    
    var fontSizeInput = String(fontSize) +'px'
    var btnWidth = String(btnW) +'px'
    var fontPadding = String(parseInt(fontSize/4))+'px'
    
   // console.log(fontPadding)
    input = new PIXI.TextInput({
    input: {
        fontSize: fontSizeInput,
        padding: fontPadding,
        width: btnWidth ,
        color: textColor
    },
    box: {
        default: {fill: btnFillColor, rounded: btnRectR, stroke: {color: btnBorderColor, width: borderWidth}},
        focused: {fill: btnFillColor, rounded: btnRectR, stroke: {color: btnBorderColor, width: borderWidth}},
        disabled: {fill: 0x333333, rounded: btnRectR}
    }
    })

    input.placeholder = btnText
    input.x = x 
    input.y = y
    input.pivot.x = input.width/2
    input.pivot.y = input.height/2
    input.children[3].pivot.x = -leftSpace
    parent.addChild(input)  
   // console.log(input.children)
    input.disabled = disabled
    
    input.interactive = true;
    input.buttonMode = true;
    input.on('pointerover', function(){this.children[0].tint="0xff8888"})
           .on('pointerout', function(){this.children[0].tint="0xffffff"})
           .on('pointerup',  function(){this.children[0].tint="0xffffff"})
          // .on('mousedown', function(){ console.log(this)})



    
    
    
    
    return input

};



// pop up btn win

function popUpBtnWinA(parent,x,y,w,h,r,borderColor,borderAlpha,fillColor,fillAlpha,btnBorderColor,btnBorderAlpha,btnFillColor,btnFillAlpha,fontSize,fontColor,btnText,btnName){
    
        parent.removeChild(parent.getChildByName(btnName))
    
    
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
    
    
    var popUpWin =  new PIXI.Graphics(); //asset 主視窗
        popUpWin.lineStyle(1, borderColor, borderAlpha);
        popUpWin.beginFill(fillColor,fillAlpha);
        popUpWin.drawRoundedRect(0,0, w,h, r);
        popUpWin.endFill();
        popUpWin.name = btnName
    
        popUpWin.x = x
        popUpWin.y = y

        parent.addChild(popUpWin)
    
    var btnA = new PIXI.Graphics(); //asset 主視窗
        btnA.lineStyle(1, btnBorderColor, btnBorderAlpha);
        btnA.beginFill(btnFillColor,btnFillAlpha);
        btnA.drawRoundedRect(0,0, w-4,h-4, r);
        btnA.endFill();
        btnA.name = 'btnA'
    
        btnA.pivot.x = btnA.width/2;
        btnA.pivot.y = btnA.height/2;

    
        btnA.x = popUpWin.width/2
        btnA.y = popUpWin.height/2

        popUpWin.addChild(btnA)
    
    
    
    var btnText = new PIXI.Text(btnText, fontStyle);
            
            


        btnText.pivot.x = btnText.width/2;
        btnText.pivot.y = btnText.height/2;
        btnText.x = btnA.width/2
        btnText.y = btnA.height/2
    
        btnA.addChild(btnText)
    
    
    
        btnA.interactive = true;
        btnA.buttonMode = true;
        btnA.on('pointerover', function(){this.children[0].tint="0xff8888"
                                                     
                                                 //   var popBtnWin =  new popUpBtnWinA(this,this.width,0,40,40,5,'0xff0000',0,'0x4f6a7d',1,'0x7298b3',1,'0x8ae0fe',1,13,'0x112222','Edit')  
                                                     
                                                     })
               .on('pointerout', function(){this.children[0].tint="0xffffff"
                                           
                                               //this.removeChild(this.getChildByName('popUpWin'))

                                           })
               .on('pointerup',  function(){this.children[0].tint="0xffffff"})
              // .on('mousedown', function(){ console.log('tttttt')})

    return btnA
    
};




// 含標籤的 inputbox
function inputBoxWithLabel(parent,x,y,boxX,inputBoxW,fontPadding,labelText,inputText,inputFontSize,labelTextColor,inputTextColor,boxRound,strokeColor,strokeWidth,fillColor){ // UI 標籤 + 輸入
    var fontScale = String(inputFontSize) + 'pt'
    
    var inputTextStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        //fontFamily: '細明體',

        fontSize: fontScale,
        fontStyle: 'normal',
        fontWeight: '100',
        letterSpacing: 1,
        fill: labelTextColor, // gradient
      //  stroke: labelTextColor,
       // strokeThickness: 0,
      //  dropShadow: false,
      //  dropShadowColor: '#333333',
      //  dropShadowBlur: 6,
       // dropShadowAngle: Math.PI / 6,
       // dropShadowDistance: 3,
       // wordWrap: true,
       // wordWrapWidth: 440,
    });
    
   // console.log(parent)
    var inputBoxWString = String(inputBoxW) + 'px'
    var fontPaddingString = String(fontPadding) + 'px'
                
       
    var inputTextLabel = new PIXI.Text(labelText, inputTextStyle);
 

        inputTextLabel.x = x
        inputTextLabel.y = y//y//labelBtnIconA.height/2 pmLabelBtnInputPosData 
    
        parent.addChild(inputTextLabel) 
    
    var facusedColor = '0xffffff'

    var inputBox = new PIXI.TextInput({
    input: {
        fontSize: inputFontSize+2,
        padding:fontPaddingString,
        width: inputBoxWString,
        color:inputTextColor,
        //align: 'right',
    }, 
     box: {
            default: {fill: fillColor, rounded: boxRound, stroke: {color: strokeColor, width: strokeWidth}},
            focused: {fill: facusedColor, rounded: boxRound, stroke: {color: facusedColor, width: strokeWidth}},
            disabled: {fill: fillColor, rounded: boxRound}
        }
    })
    inputBox.text = inputText
    inputBox.x = x + boxX 
    inputBox.y = y - fontPadding-2
   // console.log(inputBox)
   // inputBox.children[3].pivot.x = -(inputBoxW/2)  + inputBox.children[3].width/2 + fontPadding
    inputBox.children[3].pivot.x = -fontPadding

    inputBox.scale.set(1)

    parent.addChild(inputBox);  
    
    return inputBox
    
};





// 含標籤的 inputbox B  多對齊模式
function inputBoxWithLabelB(parent,x,y,boxX,inputBoxW,fontPadding,labelText,inputText,inputFontSize,labelTextColor,inputTextColor,boxRound,strokeColor,strokeWidth,fillColor,alignMode){ // UI 標籤 + 輸入
   // console.log(alignMode)
    
    var fontScale = String(inputFontSize ) + 'pt'
    
    var inputTextStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        //fontFamily: '微軟細明體',Noto Sans TC,微軟正黑體

        fontSize: fontScale,
        fontStyle: 'normal',
        fontWeight: '200',
        letterSpacing: 1,
        fill: labelTextColor, // gradient
      //  stroke: labelTextColor,
       // strokeThickness: 0,
      //  dropShadow: false,
      //  dropShadowColor: '#333333',
      //  dropShadowBlur: 6,
       // dropShadowAngle: Math.PI / 6,
       // dropShadowDistance: 3,
       // wordWrap: true,
       // wordWrapWidth: 440,
    });
    
   // console.log(parent)
    var inputBoxWString = String(inputBoxW) + 'px'
    var fontPaddingString = String(fontPadding) + 'px'
                
       
    var inputTextLabel = new PIXI.Text(labelText, inputTextStyle);
 

        inputTextLabel.x = x
        inputTextLabel.y = y//y//labelBtnIconA.height/2 pmLabelBtnInputPosData 
    
        parent.addChild(inputTextLabel) 
    
    var facusedColor = '0xffffff'

    var inputBox = new PIXI.TextInput({
    input: {
        fontSize: inputFontSize+2,
       // padding:fontPaddingString,
        width: inputBoxWString,
        color:inputTextColor,
       // align: 'right',
    },// 
     box: {
            default: {fill: fillColor, rounded: boxRound, stroke: {color: strokeColor, width: strokeWidth}},
            focused: {fill: facusedColor, rounded: boxRound, stroke: {color: facusedColor, width: strokeWidth}},
            disabled: {fill: fillColor, rounded: boxRound}
        }
    })
    inputBox.text = inputText
    inputBox.pivot.y = inputBox.height/2
    inputBox.x = x + boxX 
    inputBox.y = y + inputBox.height/2//- fontPadding//-2
   // console.log(inputBox)
   // inputBox.children[3].pivot.x = -(inputBoxW/2)  + inputBox.children[3].width/2 + fontPadding
   // inputBox.children[3].pivot.x = -fontPadding
    
    if(alignMode == 'center'){
       
        inputBox.children[3].pivot.x = -(inputBoxW/2)  + inputBox.children[3].width/2
    
    }else if(alignMode == 'left'){
       
        inputBox.children[3].pivot.x =  -5  
            
    }else if(alignMode == 'right'){
        
        inputBox.children[3].pivot.x = -inputBoxW + inputBox.children[3].width +2  //inputBoxW 
    };

    inputBox.scale.set(1)
    parent.addChild(inputBox);  
   // console.log(inputBox.children[2])

    return inputBox
    
};


// 含標籤的 inputbox C  多對齊模式
function inputBoxWithLabelC(parent,x,y,boxX,inputBoxW,fontPadding,labelText,inputText,inputFontSize,labelTextColor,inputTextColor,boxRound,strokeColor,strokeWidth,fillColor,alignMode){ // UI 標籤 + 輸入
   // console.log(alignMode)
    
    var fontScale = String(inputFontSize ) + 'pt'
    
    var inputTextStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        //fontFamily: '微軟細明體',Noto Sans TC,微軟正黑體

        fontSize: fontScale,
        fontStyle: 'normal',
        fontWeight: '200',
        letterSpacing: 1,
        fill: labelTextColor, // gradient
      //  stroke: labelTextColor,
       // strokeThickness: 0,
      //  dropShadow: false,
      //  dropShadowColor: '#333333',
      //  dropShadowBlur: 6,
       // dropShadowAngle: Math.PI / 6,
       // dropShadowDistance: 3,
       // wordWrap: true,
       // wordWrapWidth: 440,
    });
    
   // console.log(parent)
    var inputBoxWString = String(inputBoxW) + 'px'
    var fontPaddingString = String(fontPadding) + 'px'
                
       
    var inputTextLabel = new PIXI.Text(labelText, inputTextStyle);
 

        inputTextLabel.x = x
        inputTextLabel.y = y//y//labelBtnIconA.height/2 pmLabelBtnInputPosData 
    
        parent.addChild(inputTextLabel) 
    
    var facusedColor = '0xffffff'

    var inputBox = new PIXI.TextInput({
    input: {
        fontSize: inputFontSize+2,
       // padding:fontPaddingString,
        width: inputBoxWString,
        color:inputTextColor,
       // align: 'right',
    },// 
     box: {
            default: {fill: fillColor, rounded: boxRound, stroke: {color: strokeColor, width: strokeWidth}},
            focused: {fill: facusedColor, rounded: boxRound, stroke: {color: facusedColor, width: strokeWidth}},
            disabled: {fill: fillColor, rounded: boxRound}
        }
    })
    inputBox.text = inputText
    inputBox.pivot.y = inputBox.height/2
    inputBox.x = x + boxX 
    inputBox.y = y + inputBox.height/2-3//- fontPadding//-2
   // console.log(inputBox)
   // inputBox.children[3].pivot.x = -(inputBoxW/2)  + inputBox.children[3].width/2 + fontPadding
   // inputBox.children[3].pivot.x = -fontPadding
    
    if(alignMode == 'center'){
       
        inputBox.children[3].pivot.x = -(inputBoxW/2)  + inputBox.children[3].width/2
    
    }else if(alignMode == 'left'){
       
        inputBox.children[3].pivot.x =  -5  
            
    }else if(alignMode == 'right'){
        
        inputBox.children[3].pivot.x = -inputBoxW + inputBox.children[3].width +2  //inputBoxW 
    };

    inputBox.scale.set(1)
    parent.addChild(inputBox);  
   // console.log(inputBox.children[2])

    return inputBox
    
};

// 含標籤的 inputbox D  多對齊模式
function sampleLabel(parent,x,y,boxX,inputBoxW,fontPadding,labelText,inputText,inputFontSize,labelTextColor,inputTextColor,boxRound,strokeColor,strokeWidth,fillColor,alignMode,scale,blockAlpha){ // UI 標籤 + 輸入
   // console.log(alignMode)
    
    var fontScale = String(inputFontSize ) + 'pt'
    
    var inputTextStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        //fontFamily: '微軟細明體',Noto Sans TC,微軟正黑體

        fontSize: fontScale,
        fontStyle: 'normal',
        fontWeight: '200',
        letterSpacing: 1,
        fill: labelTextColor, // gradient
      //  stroke: labelTextColor,
       // strokeThickness: 0,
      //  dropShadow: false,
      //  dropShadowColor: '#333333',
      //  dropShadowBlur: 6,
       // dropShadowAngle: Math.PI / 6,
       // dropShadowDistance: 3,
       // wordWrap: true,
       // wordWrapWidth: 440,
    });
    
   // console.log(parent)
    var inputBoxWString = String(inputBoxW) + 'px'
    var fontPaddingString = String(fontPadding) + 'px'
                
       
    var inputTextLabel = new PIXI.Text(labelText, inputTextStyle);
 

        inputTextLabel.x = x
        inputTextLabel.y = y//y//labelBtnIconA.height/2 pmLabelBtnInputPosData 
    
        parent.addChild(inputTextLabel) 
    
    var facusedColor = '0xffffff'

    var inputBox = new PIXI.TextInput({
    input: {
        fontSize: inputFontSize+2,
       // padding:fontPaddingString,
        width: inputBoxWString,
        color:inputTextColor,
       // align: 'right',
    },// 
     box: {
            default: {fill: fillColor, rounded: boxRound, stroke: {color: strokeColor, width: strokeWidth/2}},
            focused: {fill: fillColor, rounded: boxRound, stroke: {color: strokeColor, width: strokeWidth/2}},
            disabled: {fill: fillColor, rounded: boxRound, stroke: {color: strokeColor, width: strokeWidth/2}}
        }
    })
    inputBox.text = inputText
    inputBox.pivot.y = inputBox.height/2
    inputBox.x = x + boxX 
    inputBox.y = y + inputBox.height/2-3//- fontPadding//-2
    inputBox.alpha = blockAlpha
   // console.log(inputBox)
   // inputBox.children[3].pivot.x = -(inputBoxW/2)  + inputBox.children[3].width/2 + fontPadding
   // inputBox.children[3].pivot.x = -fontPadding
    
    if(alignMode == 'center'){
       
        inputBox.children[3].pivot.x = -(inputBoxW/2)  + inputBox.children[3].width/2
    
    }else if(alignMode == 'left'){
       
        inputBox.children[3].pivot.x =  -5  
            
    }else if(alignMode == 'right'){
        
        inputBox.children[3].pivot.x = -inputBoxW + inputBox.children[3].width +2  //inputBoxW 
    };

    inputBox.scale.set(scale)
    parent.addChild(inputBox);  
   // console.log(inputBox.children[2])

    return inputBox
    
};
//var userTypeList = ['組員','主美','IM','專案負責人','技術','未指定']
//var userType = new getOptionGrp(userDataEditSession,20,390,'職 務 類 型:',userTypeList,3,110,'bg-dark','未指定')

function buildOptionGrpBtn(parent,x,y,grpName,optionList,optionWidth,rowCount,rowWidth,defaultSel,fontSize,optionFontSize,labelColor,optionColor){
    var fontSizeString = String(fontSize) +'pt'
    var optionFontSizeString = String(optionFontSize) +'pt'
    var optionGrpList = []
    var optionGrpContainer = new PIXI.Container()
        optionGrpContainer.name = "optionGrpContainer"
        parent.addChild(optionGrpContainer)
        optionGrpContainer.x = x
        optionGrpContainer. y = y

    //console.log(optionList)
    if(optionList.length == null | optionList==null){var optionCount = 0}else{var optionCount = optionList.length}
    //console.log(optionCount)
    var inputTextStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSizeString ,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: labelColor, // gradient
        stroke: labelColor,
        strokeThickness: 0.1,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
    });
    
        
    var inputDescSmallTextStyle = new PIXI.TextStyle({
        
        fontFamily: '微軟正黑體',
        fontSize: optionFontSizeString,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: optionColor, // gradient
        stroke: optionColor,
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 60,
    });
     
    var pmAssetTypeOptionGrpLabel = new PIXI.Text(grpName, inputTextStyle);

        optionGrpContainer.addChild(pmAssetTypeOptionGrpLabel) 
    var assetCountPreRow = Math.ceil(optionCount/rowCount)
  //  console.log(assetCountPreRow)
    for(i=0;i<optionCount;i++){
        
        var pmOptionBg = new PIXI.Graphics();

        pmOptionBg.lineStyle(1, 0xffffff, 1);
        pmOptionBg.beginFill(0x555555,0.6);
        pmOptionBg.drawCircle(0, 0, 10);
        pmOptionBg.endFill();
        
        
        pmOptionBg.lineStyle(1, 0xffffff, 0.1);
        pmOptionBg.beginFill(0xff8888,0.1);
        pmOptionBg.drawRoundedRect(-14,-14, optionWidth, 28, 12);
        pmOptionBg.endFill();
        
        
        
        pmOptionBg.name =optionList[i]
        pmOptionBg.selCheck = 'optionBG' 
        pmOptionBg.x = Math.floor(i/assetCountPreRow)*rowWidth +40//40 
        pmOptionBg. y = (i%assetCountPreRow)*30+50//i*30 +50
        optionGrpContainer.addChild(pmOptionBg)  
        
        var pmOptionSelBtn = new PIXI.Graphics();
        
        pmOptionSelBtn.lineStyle(1, 0xffffff, 0);
        pmOptionSelBtn.beginFill(0xff9999,1);
        pmOptionSelBtn.drawCircle(0, 0, 7);
        pmOptionSelBtn.endFill();
        pmOptionSelBtn.alpha = 0.1
        pmOptionSelBtn.name = 'optionSelBtn'//optionList[i]
        pmOptionSelBtn.assetType = optionList[i]
        
        optionGrpList.push(pmOptionSelBtn)
        
        pmOptionBg.assetType = optionList[i]

       // pmOptionSelBtn.x = 0
       // pmOptionSelBtn. y = i*30 +50
        pmOptionBg.addChild(pmOptionSelBtn)  
        if(optionList[i] == defaultSel){
            console.log('defau;t selection');
            pmOptionSelBtn.alpha = 1
        }
        
        var optionText = new PIXI.Text(optionList[i], inputDescSmallTextStyle);
        optionText.x = 20
        optionText.pivot.y = optionText.height/2
       // optionText. y = i*30 +40

        pmOptionBg.addChild(optionText)    

        pmOptionBg.interactive = true;
        pmOptionBg.buttonMode = true;
        pmOptionBg.on('pointerover', function(){this.tint='0xffaaaa';})
                        .on('pointerout', function(){this.tint='0xffffff';})
                        .on('mousedown', selectOptionBtn)
                        .on('pointerup', function(){this.tint='0xffffff';})
        
        
        
    };
    
    function selectOptionBtn(){
       // optionGrpContainer
        optionGrpContainer.assetType = this.assetType
       // console.log(optionGrpContainer)
       // console.log(this.assetType)
      //  console.log(this.parent)
        let allChildren = this.parent.children
       // console.log(allChildren)
        var allOptionBG = allChildren.filter(function(item, index, array){
                return item.selCheck === 'optionBG'      // 取得 所有名稱為 optionBG 的optionBG
        });
        
      //  console.log(allOptionBG,allOptionBG.length)
        
        for(n=0;n<allOptionBG.length;n++){
            
           allOptionBG[n].getChildByName('optionSelBtn') .alpha = 0
            
            
        }
        
        this.getChildByName('optionSelBtn').alpha = 1
       // console.log(this)
        this.parent.currentSet = this.assetType
       // console.log(this.parent)

    }
  //  pmOptionBg.x = x
  //  pmOptionBg.y = y
    
    
    
    
    return optionGrpContainer
  
};



function buildOptionGrp_B_Btn(parent,x,y,grpName,optionList,optionWidth,rowCount,rowWidth,defaultSel,fontSize,optionFontSize,labelColor,optionColor,bgColor,bgAlpha,optionScale){
    var fontSizeString = String(fontSize) +'pt'
    var optionFontSizeString = String(optionFontSize) +'pt'
    var optionGrpList = []
    var optionGrpContainer = new PIXI.Container()
        optionGrpContainer.name = "optionGrpContainer"
        parent.addChild(optionGrpContainer)
        optionGrpContainer.x = x
        optionGrpContainer. y = y

    //console.log(optionList)
    if(optionList.length == null | optionList==null){var optionCount = 0}else{var optionCount = optionList.length}
    //console.log(optionCount)
    var inputTextStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSizeString ,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: labelColor, // gradient
        stroke: bgColor,
        strokeThickness: 0.1,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: false,
        wordWrapWidth: 440,
    });
    
        
    var inputDescSmallTextStyle = new PIXI.TextStyle({
        
        fontFamily: '微軟正黑體',
        fontSize: optionFontSizeString,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: optionColor, // gradient
        stroke: bgColor,
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: false,
        wordWrapWidth: 60,
    });
     
    var pmAssetTypeOptionGrpLabel = new PIXI.Text(grpName, inputTextStyle);

        optionGrpContainer.addChild(pmAssetTypeOptionGrpLabel) 
    var assetCountPreRow = Math.ceil(optionCount/rowCount)
  //  console.log(assetCountPreRow)
    for(i=0;i<optionCount;i++){
        
        var pmOptionBg = new PIXI.Graphics();

        pmOptionBg.lineStyle(1, 0xffffff, 1);
        pmOptionBg.beginFill(0x555555,0.6);
        pmOptionBg.drawCircle(0, 0, 10);
        pmOptionBg.endFill();
        
        
        pmOptionBg.lineStyle(1, 0xffffff, 0.1);
        pmOptionBg.beginFill(bgColor,bgAlpha);
        pmOptionBg.drawRoundedRect(-14,-14, optionWidth, 28, 12);
        pmOptionBg.endFill();
        
        
        
        pmOptionBg.name =optionList[i]
        pmOptionBg.selCheck = 'optionBG' 
        pmOptionBg.x = Math.floor(i/assetCountPreRow)*rowWidth +40 +pmAssetTypeOptionGrpLabel.width//40 
       // pmOptionBg.pivot.y =  -pmOptionBg.height/2
        pmOptionBg.y = (i%assetCountPreRow)*30 + pmAssetTypeOptionGrpLabel.height/2//+50//i*30 +50
        optionGrpContainer.addChild(pmOptionBg)  
        
        var pmOptionSelBtn = new PIXI.Graphics();
        
        pmOptionSelBtn.lineStyle(1, 0xffffff, 0);
        pmOptionSelBtn.beginFill(0xff9999,1);
        pmOptionSelBtn.drawCircle(0, 0, 7);
        pmOptionSelBtn.endFill();
        pmOptionSelBtn.alpha = 0.1
        pmOptionSelBtn.name = 'optionSelBtn'//optionList[i]
        pmOptionSelBtn.assetType = optionList[i]
        
        optionGrpList.push(pmOptionSelBtn)
        
        pmOptionBg.assetType = optionList[i]

       // pmOptionSelBtn.x = 0
       // pmOptionSelBtn. y = i*30 +50
        pmOptionBg.addChild(pmOptionSelBtn)  
        if(optionList[i] == defaultSel){
            console.log('default selection');
            pmOptionSelBtn.alpha = 1
        }
        
        var optionText = new PIXI.Text(optionList[i], inputDescSmallTextStyle);
        optionText.x = 20
        optionText.pivot.y = optionText.height/2
       // optionText. y = i*30 +40

        pmOptionBg.addChild(optionText)    

        pmOptionBg.interactive = true;
        pmOptionBg.buttonMode = true;
        pmOptionBg.on('pointerover', function(){this.tint='0xffaaaa';})
                        .on('pointerout', function(){this.tint='0xffffff';})
                        .on('mousedown', selectOptionBtn)
                        .on('pointerup', function(){this.tint='0xffffff';})
        
        
        
    };
    
    function selectOptionBtn(){
       // optionGrpContainer
        optionGrpContainer.assetType = this.assetType
       // console.log(optionGrpContainer)
       // console.log(this.assetType)
      //  console.log(this.parent)
        let allChildren = this.parent.children
       // console.log(allChildren)
        var allOptionBG = allChildren.filter(function(item, index, array){
                return item.selCheck === 'optionBG'      // 取得 所有名稱為 optionBG 的optionBG
        });
        
      //  console.log(allOptionBG,allOptionBG.length)
        
        for(n=0;n<allOptionBG.length;n++){
            
           allOptionBG[n].getChildByName('optionSelBtn') .alpha = 0
            
            
        }
        
        this.getChildByName('optionSelBtn').alpha = 1
       // console.log(this)
        this.parent.currentSet = this.assetType
       // console.log(this.parent)

    }
  //  pmOptionBg.x = x
  //  pmOptionBg.y = y
    
    optionGrpContainer.assetType  = defaultSel
    optionGrpContainer.scale.set(optionScale)
    
    return optionGrpContainer
  
};


function buildMultiSelOptionGrpBtn(parent,x,y,grpName,optionList,optionWidth,rowCount,rowWidth,defaultSel,fontSize,optionFontSize,labelColor,optionColor,bgColor,bgAlpha,optionScale){
    var fontSizeString = String(fontSize) +'pt'
    var optionFontSizeString = String(optionFontSize) +'pt'
    var optionGrpList = []
    var optionGrpContainer = new PIXI.Container()
        optionGrpContainer.name = "optionGrpContainer"
        parent.addChild(optionGrpContainer)
        optionGrpContainer.x = x
        optionGrpContainer. y = y

    //console.log(optionList)
    if(optionList.length == null | optionList==null){var optionCount = 0}else{var optionCount = optionList.length}
    //console.log(optionCount)
    var inputTextStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSizeString ,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: labelColor, // gradient
        stroke: bgColor,
        strokeThickness: 0.1,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: false,
        wordWrapWidth: 440,
    });
    
        
    var inputDescSmallTextStyle = new PIXI.TextStyle({
        
        fontFamily: '微軟正黑體',
        fontSize: optionFontSizeString,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: optionColor, // gradient
        stroke: bgColor,
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: false,
        wordWrapWidth: 60,
    });
     
    var pmAssetTypeOptionGrpLabel = new PIXI.Text(grpName, inputTextStyle);

        optionGrpContainer.addChild(pmAssetTypeOptionGrpLabel) 
    var assetCountPreRow = Math.ceil(optionCount/rowCount)
  //  console.log(assetCountPreRow)
    for(i=0;i<optionCount;i++){
        
        var pmOptionBg = new PIXI.Graphics();

        pmOptionBg.lineStyle(1, 0xffffff, 1);
        pmOptionBg.beginFill(0x555555,0.6);
        pmOptionBg.drawCircle(0, 0, 10);
        pmOptionBg.endFill();
        
        
        pmOptionBg.lineStyle(1, 0xffffff, 0.1);
        pmOptionBg.beginFill(bgColor,bgAlpha);
        pmOptionBg.drawRoundedRect(-14,-14, optionWidth, 28, 12);
        pmOptionBg.endFill();
        
        
        
        pmOptionBg.name =optionList[i]
        pmOptionBg.selCheck = 'optionBG' 
        pmOptionBg.x = Math.floor(i/assetCountPreRow)*rowWidth +40 +pmAssetTypeOptionGrpLabel.width//40 
       // pmOptionBg.pivot.y =  -pmOptionBg.height/2
        pmOptionBg.y = (i%assetCountPreRow)*30 + pmAssetTypeOptionGrpLabel.height/2//+50//i*30 +50
        optionGrpContainer.addChild(pmOptionBg)  
        
        var pmOptionSelBtn = new PIXI.Graphics();
        
        pmOptionSelBtn.lineStyle(1, 0xffffff, 0);
        pmOptionSelBtn.beginFill(0xff9999,1);
        pmOptionSelBtn.drawCircle(0, 0, 7);
        pmOptionSelBtn.endFill();
        pmOptionSelBtn.alpha = 0.1
        pmOptionSelBtn.name = 'optionSelBtn'//optionList[i]
        pmOptionSelBtn.assetType = optionList[i]
        
        optionGrpList.push(pmOptionSelBtn)
        
        pmOptionBg.assetType = optionList[i]

       // pmOptionSelBtn.x = 0
       // pmOptionSelBtn. y = i*30 +50
        pmOptionBg.addChild(pmOptionSelBtn)  
        if(optionList[i] == defaultSel){
            console.log('defau;t selection');
            pmOptionSelBtn.alpha = 1
        }
        
        var optionText = new PIXI.Text(optionList[i], inputDescSmallTextStyle);
        optionText.x = 20
        optionText.pivot.y = optionText.height/2
       // optionText. y = i*30 +40

        pmOptionBg.addChild(optionText)    

        pmOptionBg.interactive = true;
        pmOptionBg.buttonMode = true;
        pmOptionBg.on('pointerover', function(){this.tint='0xffaaaa';})
                        .on('pointerout', function(){this.tint='0xffffff';})
                        .on('mousedown', selectOptionBtn)
                        .on('pointerup', function(){this.tint='0xffffff';})
        
        
        
    };
    
    function selectOptionBtn(){
        console.log('btn',this,this.getChildByName('optionSelBtn').alpha)
       // optionGrpContainer
        optionGrpContainer.assetType = this.assetType
       // console.log(optionGrpContainer)
       // console.log(this.assetType)
      //  console.log(this.parent)
        let allChildren = this.parent.children
       // console.log(allChildren)
        var allOptionBG = allChildren.filter(function(item, index, array){
                return item.selCheck === 'optionBG'      // 取得 所有名稱為 optionBG 的optionBG
        });
        

        
        if( this.getChildByName('optionSelBtn').alpha == 1){
            
            this.getChildByName('optionSelBtn').alpha = 0.1 
        }else if( this.getChildByName('optionSelBtn').alpha == 0.1){
            this.getChildByName('optionSelBtn').alpha = 1    
        };
        
              //  console.log(allOptionBG,allOptionBG.length)
       // assetEnableList = []
        /*
        for(n=0;n<allOptionBG.length;n++){
       //     
         //  allOptionBG[n].getChildByName('optionSelBtn') .alpha = 0
            if( allOptionBG[n].getChildByName('optionSelBtn') .alpha = 0.1){
                
            }else if(allOptionBG[n].getChildByName('optionSelBtn') .alpha = 1){
                
                assetEnableList.push(allOptionBG[n].assetType)   
                
            }
            
            
        };
        */
       // optionGrpContainer.multiSelOption = assetEnableList
        
       // this.getChildByName('optionSelBtn').alpha = 1
       // console.log(this)
      //  this.parent.currentSet = this.assetType
       // console.log(this.parent)

    //return assetEnableList
    
    }
  //  pmOptionBg.x = x
  //  pmOptionBg.y = y
    
    optionGrpContainer.assetType  = defaultSel
    optionGrpContainer.scale.set(optionScale)
  //  console.log(optionGrpContainer)
    return optionGrpContainer
    
    
};

function buildWinControlBtn(parent){ //視窗上的控制鈕 拖曳，關閉，最小化
    
    console.log('closeBtn',parent.name)
    
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
    
    closeIconBtn.x = parent.width - 13
    closeIconBtn.y =  15

    parent.addChild(closeIconBtn)
    
    //console.log(parent)
    closeIconBtn.interactive = true;
    closeIconBtn.buttonMode = true;
    closeIconBtn.on('pointerover', function(){this.tint='0xffaaaa';})
                        .on('pointerout', function(){this.tint='0xffffff';})
                        .on('mousedown', function(){
                            console.log(this.parent)
                            //this.parent.scale.set(0.001)
                            //this.parent.alpha = 0
                            var parentName = this.parent.name
                            console.log(parentName)
                            this.parent.parent.removeChild(this.parent.parent.getChildByName(parentName))
        
                            console.log('close win', parentName)
                            
                            })
                        .on('pointerup', function(){this.tint='0xffffff';})
        
    
    
    
};




function buildBtnScaleA(parent,x,y,w,h,btnText,type){
    
    var btnTextStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: '12pt',
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '#ffffff', // gradient
        stroke: '#ffffff',
        strokeThickness: 0,
        dropShadow: true,
        dropShadowColor: '#333333',
        dropShadowBlur: 2,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance:2,
        wordWrap: false,
        wordWrapWidth: 440,
    });
    
    var btnText = new PIXI.Text(btnText, btnTextStyle);
        btnText.pivot.x = btnText.width/2// -1
    
        btnText.pivot.y = btnText.height/2// -1

    
    var btnIconWidth = btnText.width +20
    var btnIconHeight = btnText.height +10
  
    var btnIcon =  new PIXI.Graphics(); //asset 主視窗
        if(type == 'primary'){
            var btnColor  = '0x007bff'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'
            var lineWidth = 1
        }else if(type == 'secondary'){
            var btnColor  = '0x6c757d'
            var btnOutlineColor = '0x6c757d'
            var tintColor = '0xffaaaa'
            var lineWidth = 1


        }else if(type == 'success'){
            var btnColor  = '0x28a745'
            var btnOutlineColor = '0x28a745'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'info'){
            var btnColor  = '0x17a2b8'
            var btnOutlineColor = '0x17a2b8'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'warning'){
            var btnColor  = '0xffc107'
            var btnOutlineColor = '0xffc107'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'danger'){
            var btnColor  = '0xdc3545'
            var btnOutlineColor = '0xdc3545'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'primary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'secondary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0xcccccc'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'projList outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0x8ae0fe'
            var tintColor = '0xffaaaa'
            var lineWidth = 0.5

        }else if(type == 'define'){
            
            var btnColor  = '0xffffff'
            var btnOutlineColor = '0xffffff'
            var tintColor = '0xffffff'
            var lineWidth = 1

            
        }
    
    
    
    
    
        btnIcon.lineStyle(lineWidth, btnOutlineColor, 1);
        btnIcon.beginFill(btnColor,1);
        btnIcon.drawRoundedRect(0,0, w,h, 5);
        btnIcon.endFill();
        btnIcon.name = 'btnIcon'
        btnText.x = btnIcon.width/2
        btnText.y = btnIcon.height/2 +1
      //  btnIcon.pivot = btnIcon.width/2
        parent.addChild(btnIcon)
        btnIcon.addChild(btnText)
    
      //  btnText.x = btnIcon.width/2

    btnIcon.x = x
    btnIcon.y = y 
        
    btnIcon.interactive = true;   // BTN
    btnIcon.buttonMode = true;
    btnIcon.on('pointerover', function(){ this.alpha = 0.5})
                   .on('pointerout', function(){ this.alpha = 1})
                   .on('pointerup',  function(){this.alpha = 1})
            
                                          //      console.log('close win')
                                               // parent.alpha = 0
                                            //    console.log(pixiUIApp)
      //  pixiUIApp.renderer.resize(10, 10)
                                                //parent.parent.removeChild(parent.parent.getChildByName("newProjWinRectBGA"))
                                          //      }else if(mode == 'submit'){
                                            //    console.log('submit date to DB')
                                            //    }})

    return btnIcon
    
};

function buildBtnScaleB(parent,x,y,w,h,btnText,type){   // pointOver no alpha change
    
    var btnTextStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: '11pt',
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '#ffffff', // gradient
        stroke: '#ffffff',
        strokeThickness: 0,
       // dropShadow: true,
       // dropShadowColor: '#333333',
       // dropShadowBlur: 2,
       // dropShadowAngle: Math.PI / 6,
       // dropShadowDistance:2,
        wordWrap: false,
        wordWrapWidth: 440,
    });
    
    var btnText = new PIXI.Text(btnText, btnTextStyle);
        btnText.pivot.x = btnText.width/2// -1
    
        btnText.pivot.y = btnText.height/2// -1

    
    var btnIconWidth = btnText.width +20
    var btnIconHeight = btnText.height +10
  
    var btnIcon =  new PIXI.Graphics(); //asset 主視窗
        if(type == 'primary'){
            var btnColor  = '0x007bff'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'
        }else if(type == 'secondary'){
            var btnColor  = '0x6c757d'
            var btnOutlineColor = '0x6c757d'
            var tintColor = '0xffaaaa'


        }else if(type == 'success'){
            var btnColor  = '0x28a745'
            var btnOutlineColor = '0x28a745'
            var tintColor = '0xffaaaa'

        }else if(type == 'info'){
            var btnColor  = '0x17a2b8'
            var btnOutlineColor = '0x17a2b8'
            var tintColor = '0xffaaaa'

        }else if(type == 'warning'){
            var btnColor  = '0xffc107'
            var btnOutlineColor = '0xffc107'
            var tintColor = '0xffaaaa'

        }else if(type == 'danger'){
            var btnColor  = '0xdc3545'
            var btnOutlineColor = '0xdc3545'
            var tintColor = '0xffaaaa'

        }else if(type == 'primary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'

        }else if(type == 'secondary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0xcccccc'
            var tintColor = '0xffaaaa'

        }else if(type == 'define'){
            
            var btnColor  = '0xffffff'
            var btnOutlineColor = '0xffffff'
            var tintColor = '0xffffff'

            
        }else{
            
            var btnColor  = type
            var btnOutlineColor = type
            var tintColor = type

            
            
            
            
        }
    
    
    
    
    
        btnIcon.lineStyle(1, btnOutlineColor, 1);
        btnIcon.beginFill(btnColor,1);
        btnIcon.drawRoundedRect(0,0, w,h, 5);
        btnIcon.endFill();
        btnIcon.name = 'btnIcon'
        btnText.x = btnIcon.width/2
        btnText.y = btnIcon.height/2 +1
      //  btnIcon.pivot = btnIcon.width/2
        parent.addChild(btnIcon)
        btnIcon.addChild(btnText)
    
      //  btnText.x = btnIcon.width/2

    btnIcon.x = x
    btnIcon.y = y 
        
    btnIcon.interactive = true;   // BTN
    btnIcon.buttonMode = true;
    btnIcon.on('pointerover', function(){this.alpha = 0.5 })
                   .on('pointerout', function(){this.alpha = 1})
                   .on('pointerup',  function(){this.alpha = 1})
            
                                          //      console.log('close win')
                                               // parent.alpha = 0
                                            //    console.log(pixiUIApp)
      //  pixiUIApp.renderer.resize(10, 10)
                                                //parent.parent.removeChild(parent.parent.getChildByName("newProjWinRectBGA"))
                                          //      }else if(mode == 'submit'){
                                            //    console.log('submit date to DB')
                                            //    }})

    return btnIcon
    
};






function buildBtnScaleC(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type){   // pointOver no                 buildBtnScaleC(parent,160,120,60,23,2,'今 日','0xffffff',12,1,'0xffffff',1,1,'secondary') ,countText,countTextColor,countTextSize,

    

    

  
    var btnIcon =  new PIXI.Graphics(); //asset 主視窗
        if(type == 'primary'){
            var btnColor  = '0x007bff'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'

        }else if(type == 'secondary'){
            var btnColor  = '0x6c757d'
            var btnOutlineColor = '0x6c757d'
            var tintColor = '0xffaaaa'


        }else if(type == 'success'){
            var btnColor  = '0x28a745'
            var btnOutlineColor = '0x28a745'
            var tintColor = '0xffaaaa'

        }else if(type == 'info'){
            var btnColor  = '0x17a2b8'
            var btnOutlineColor = '0x17a2b8'
            var tintColor = '0xffaaaa'

        }else if(type == 'warning'){
            var btnColor  = '0xffc107'
            var btnOutlineColor = '0xffc107'
            var tintColor = '0xffaaaa'

        }else if(type == 'danger'){
            var btnColor  = '0xdc3545'
            var btnOutlineColor = '0xdc3545'
            var tintColor = '0xffaaaa'

        }else if(type == 'primary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'

        }else if(type == 'secondary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0xcccccc'
            var tintColor = '0xffaaaa'

        }else if(type == 'define'){
            
            var btnColor  = '0xffffff'
            var btnOutlineColor = '0xffffff'
            var tintColor = '0xffffff'

            
        }else{
            
            var btnColor  = type
            var btnOutlineColor = borderColor
            var tintColor = type

            
            
            
        }
       // var  setFontSize = fontSize
    var btnTextStyle = new PIXI.TextStyle({
       // fontFamily: '微軟正黑體',
         fontFamily: 'Noto Sans TC',
        fontSize: fontSize,
        fontStyle: 'normal',
        fontWeight: '300',
        fill: textColor, // gradient
        stroke: btnColor,
        //strokeThickness: 0.5,

        });
    
    
    

    
    
    var btnText = new PIXI.Text(btnText, btnTextStyle);
        btnText.pivot.x = btnText.width/2// -1
    
        btnText.pivot.y = btnText.height/2// -1


    
    
    
    var btnIconWidth = btnText.width +20
    var btnIconHeight = btnText.height +10
    
        btnIcon.lineStyle(borderWidth, btnOutlineColor, borderAlpha);
        btnIcon.beginFill(btnColor,bgAlpha);
        btnIcon.drawRoundedRect(0,0, w,h, r);
        btnIcon.endFill();
        btnIcon.name = 'btnIcon'
      //  btnIcon.filterKey = btnText
        btnText.x = btnIcon.width/2
        btnText.y = btnIcon.height/2 +1
      //  btnIcon.pivot = btnIcon.width/2
        parent.addChild(btnIcon)
        btnIcon.addChild(btnText)
    
      //  btnText.x = btnIcon.width/2


    
    
    
    btnIcon.x = x
    btnIcon.y = y 
    btnIcon.text = btnText
    btnIcon.interactive = true;   // BTN
    btnIcon.buttonMode = true;
    btnIcon.on('pointerover', function(){this.alpha = 0.5 })
                  .on('pointerout', function(){this.alpha = 1})
                   .on('pointerup',  function(){this.alpha = 1})
            
                                          //      console.log('close win')
                                               // parent.alpha = 0
                                            //    console.log(pixiUIApp)
      //  pixiUIApp.renderer.resize(10, 10)
                                                //parent.parent.removeChild(parent.parent.getChildByName("newProjWinRectBGA"))
                                          //      }else if(mode == 'submit'){
                                            //    console.log('submit date to DB')
                                            //    }})

    return btnIcon
    
};



function buildBtnScaleD(parent,x,y,w,h,r,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,countText,countTextColor,countTextSize,type,iconScale){   // pointOver no                 buildBtnScaleC(parent,160,120,60,23,2,'今 日','0xffffff',12,1,'0xffffff',1,1,'secondary')

    

    

  
    var btnIcon =  new PIXI.Graphics(); //asset 主視窗
        if(type == 'primary'){
            var btnColor  = '0x007bff'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'

        }else if(type == 'secondary'){
            var btnColor  = '0x6c757d'
            var btnOutlineColor = '0x6c757d'
            var tintColor = '0xffaaaa'


        }else if(type == 'success'){
            var btnColor  = '0x28a745'
            var btnOutlineColor = '0x28a745'
            var tintColor = '0xffaaaa'

        }else if(type == 'info'){
            var btnColor  = '0x17a2b8'
            var btnOutlineColor = '0x17a2b8'
            var tintColor = '0xffaaaa'

        }else if(type == 'warning'){
            var btnColor  = '0xffc107'
            var btnOutlineColor = '0xffc107'
            var tintColor = '0xffaaaa'

        }else if(type == 'danger'){
            var btnColor  = '0xdc3545'
            var btnOutlineColor = '0xdc3545'
            var tintColor = '0xffaaaa'

        }else if(type == 'primary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'

        }else if(type == 'secondary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0xcccccc'
            var tintColor = '0xffaaaa'

        }else if(type == 'define'){
            
            var btnColor  = '0xffffff'
            var btnOutlineColor = '0xffffff'
            var tintColor = '0xffffff'

            
        }else{
            
            var btnColor  = type
            var btnOutlineColor = borderColor
            var tintColor = type

            
            
            
        }
       // var  setFontSize = fontSize
    var btnTextStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: fontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: textColor, // gradient
        stroke: btnColor,
        strokeThickness: 0.5,

        });
    
    
    
    var countTextStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: countTextSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: countTextColor, // gradient
        stroke: btnColor,
        strokeThickness: 0.5,

        });
    
    
    var btnText = new PIXI.Text(btnText, btnTextStyle);
        btnText.pivot.x = btnText.width/2// -1
    
        btnText.pivot.y = btnText.height/2// -1


    
    
    
    var btnIconWidth = btnText.width +20
    var btnIconHeight = btnText.height +10
    
        btnIcon.lineStyle(borderWidth, btnOutlineColor, borderAlpha);
        btnIcon.beginFill(btnColor,bgAlpha);
        btnIcon.drawRoundedRect(0,0, w,h, r);
        btnIcon.endFill();
        btnIcon.name = 'btnIcon'
        btnText.x = btnIcon.width/2
        btnText.y = btnIcon.height/2 +1
      //  btnIcon.pivot = btnIcon.width/2
        parent.addChild(btnIcon)
        btnIcon.addChild(btnText)
    
      //  btnText.x = btnIcon.width/2

    var countText = new PIXI.Text(countText, countTextStyle);
        countText.pivot.x = countText.width/2// -1
    
        countText.pivot.y = countText.height/2// -1
        countText.y = btnIcon.height/2 +1
        countText.x = btnIcon.width -20
        btnIcon.addChild(countText)
    
    
    
    btnIcon.scale.set(iconScale)
    
    btnIcon.x = x
    btnIcon.y = y 
        
    btnIcon.interactive = true;   // BTN
    btnIcon.buttonMode = true;
    btnIcon.on('pointerover', function(){this.alpha = 0.5 })
                  .on('pointerout', function(){this.alpha = 1})
                   .on('pointerup',  function(){this.alpha = 1})
            
                                          //      console.log('close win')
                                               // parent.alpha = 0
                                            //    console.log(pixiUIApp)
      //  pixiUIApp.renderer.resize(10, 10)
                                                //parent.parent.removeChild(parent.parent.getChildByName("newProjWinRectBGA"))
                                          //      }else if(mode == 'submit'){
                                            //    console.log('submit date to DB')
                                            //    }})

    return btnIcon
    
};


function buildBtnScaleE(parent,x,y,w,h,btnText,type){
    
    var btnTextStyle = new PIXI.TextStyle({
        fontFamily: 'Noto Sans TC',
        fontSize: '12pt',
        fontStyle: 'normal',
        fontWeight: '100',
        fill: '#ffffff', // gradient
        stroke: '#ffffff',
        strokeThickness: 0,
        dropShadow: true,
        dropShadowColor: '#333333',
        dropShadowBlur: 2,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance:2,
        wordWrap: false,
        wordWrapWidth: 440,
    });
    
    var btnText = new PIXI.Text(btnText, btnTextStyle);
        btnText.pivot.x = btnText.width/2// -1
    
        btnText.pivot.y = btnText.height/2// -1

    
    var btnIconWidth = btnText.width +20
    var btnIconHeight = btnText.height +10
  
    var btnIcon =  new PIXI.Graphics(); //asset 主視窗
        if(type == 'primary'){
            var btnColor  = '0x007bff'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'
            var lineWidth = 1
        }else if(type == 'secondary'){
            var btnColor  = '0x6c757d'
            var btnOutlineColor = '0x6c757d'
            var tintColor = '0xffaaaa'
            var lineWidth = 1


        }else if(type == 'success'){
            var btnColor  = '0x28a745'
            var btnOutlineColor = '0x28a745'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'info'){
            var btnColor  = '0x17a2b8'
            var btnOutlineColor = '0x17a2b8'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'warning'){
            var btnColor  = '0xffc107'
            var btnOutlineColor = '0xffc107'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'danger'){
            var btnColor  = '0xdc3545'
            var btnOutlineColor = '0xdc3545'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'primary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'secondary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0xcccccc'
            var tintColor = '0xffaaaa'
            var lineWidth = 1

        }else if(type == 'projList outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0x8ae0fe'
            var tintColor = '0xffaaaa'
            var lineWidth = 0.5

        }else if(type == 'define'){
            
            var btnColor  = '0xffffff'
            var btnOutlineColor = '0xffffff'
            var tintColor = '0xffffff'
            var lineWidth = 1

            
        }
    
    
    
    
    
        btnIcon.lineStyle(lineWidth, btnOutlineColor, 1);
        btnIcon.beginFill(btnColor,1);
        btnIcon.drawRoundedRect(0,0, w,h, 5);
        btnIcon.endFill();
        btnIcon.name = 'btnIcon'
        btnText.x = btnIcon.width/2
        btnText.y = btnIcon.height/2 +1
      //  btnIcon.pivot = btnIcon.width/2
        parent.addChild(btnIcon)
        btnIcon.addChild(btnText)
    
      //  btnText.x = btnIcon.width/2

    btnIcon.x = x
    btnIcon.y = y 
        
    btnIcon.interactive = true;   // BTN
    btnIcon.buttonMode = true;
    btnIcon.on('pointerover', function(){ this.alpha = 0.5})
                   .on('pointerout', function(){ this.alpha = 1})
                   .on('pointerup',  function(){this.alpha = 1})
            
                                          //      console.log('close win')
                                               // parent.alpha = 0
                                            //    console.log(pixiUIApp)
      //  pixiUIApp.renderer.resize(10, 10)
                                                //parent.parent.removeChild(parent.parent.getChildByName("newProjWinRectBGA"))
                                          //      }else if(mode == 'submit'){
                                            //    console.log('submit date to DB')
                                            //    }})

    return btnIcon
    
};


function buildBtnScaleF(parent,x,y,w,h,r,fontFamilyText,textWeight,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type){   // pointOver no                 buildBtnScaleC(parent,160,120,60,23,2,'今 日','0xffffff',12,1,'0xffffff',1,1,'secondary') ,countText,countTextColor,countTextSize,

    

    

  
    var btnIcon =  new PIXI.Graphics(); //asset 主視窗
        if(type == 'primary'){
            var btnColor  = '0x007bff'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'

        }else if(type == 'secondary'){
            var btnColor  = '0x6c757d'
            var btnOutlineColor = '0x6c757d'
            var tintColor = '0xffaaaa'


        }else if(type == 'success'){
            var btnColor  = '0x28a745'
            var btnOutlineColor = '0x28a745'
            var tintColor = '0xffaaaa'

        }else if(type == 'info'){
            var btnColor  = '0x17a2b8'
            var btnOutlineColor = '0x17a2b8'
            var tintColor = '0xffaaaa'

        }else if(type == 'warning'){
            var btnColor  = '0xffc107'
            var btnOutlineColor = '0xffc107'
            var tintColor = '0xffaaaa'

        }else if(type == 'danger'){
            var btnColor  = '0xdc3545'
            var btnOutlineColor = '0xdc3545'
            var tintColor = '0xffaaaa'

        }else if(type == 'primary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'

        }else if(type == 'secondary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0xcccccc'
            var tintColor = '0xffaaaa'

        }else if(type == 'define'){
            
            var btnColor  = '0xffffff'
            var btnOutlineColor = '0xffffff'
            var tintColor = '0xffffff'

            
        }else{
            
            var btnColor  = type
            var btnOutlineColor = borderColor
            var tintColor = type

            
            
            
        }
       // var  setFontSize = fontSize
    var btnTextStyle = new PIXI.TextStyle({
       // fontFamily: '微軟正黑體',
         fontFamily: fontFamilyText,//'Noto Sans TC',
        fontSize: fontSize,
        //fontStyle: 'normal',
        fontWeight: textWeight,
        fill: textColor, // gradient
       // stroke: btnColor,
       // strokeThickness: 0.5,

        });
    
    
    

    
    
    var btnText = new PIXI.Text(btnText, btnTextStyle);
        btnText.pivot.x = btnText.width/2// -1
    
        btnText.pivot.y = btnText.height/2// -1


    
    
    
    var btnIconWidth = btnText.width +20
    var btnIconHeight = btnText.height +10
    
        btnIcon.lineStyle(borderWidth, btnOutlineColor, borderAlpha);
        btnIcon.beginFill(btnColor,bgAlpha);
        btnIcon.drawRoundedRect(0,0, w,h, r);
        btnIcon.endFill();
        btnIcon.name = 'btnIcon'
      //  btnIcon.filterKey = btnText
        btnText.x = btnIcon.width/2
        btnText.y = btnIcon.height/2 +1
      //  btnIcon.pivot = btnIcon.width/2
        parent.addChild(btnIcon)
        btnIcon.addChild(btnText)
    
      //  btnText.x = btnIcon.width/2


    
    
    
    btnIcon.x = x
    btnIcon.y = y 
    btnIcon.text = btnText
    btnIcon.interactive = true;   // BTN
    btnIcon.buttonMode = true;
    btnIcon.on('pointerover', function(){this.alpha = 0.5 })
                  .on('pointerout', function(){this.alpha = 1})
                   .on('pointerup',  function(){this.alpha = 1})
            
                                          //      console.log('close win')
                                               // parent.alpha = 0
                                            //    console.log(pixiUIApp)
      //  pixiUIApp.renderer.resize(10, 10)
                                                //parent.parent.removeChild(parent.parent.getChildByName("newProjWinRectBGA"))
                                          //      }else if(mode == 'submit'){
                                            //    console.log('submit date to DB')
                                            //    }})

    return btnIcon
    
};



function buildBtnScaleG(parent,x,y,w,h,r,fontFamilyText,textWeight,btnText,textColor,fontSize,bgAlpha,borderColor,borderWidth,borderAlpha,type){   // pointOver no                 buildBtnScaleC(parent,160,120,60,23,2,'今 日','0xffffff',12,1,'0xffffff',1,1,'secondary') ,countText,countTextColor,countTextSize,

    

    

  
    var btnIcon =  new PIXI.Graphics(); //asset 主視窗
        if(type == 'primary'){
            var btnColor  = '0x007bff'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'

        }else if(type == 'secondary'){
            var btnColor  = '0x6c757d'
            var btnOutlineColor = '0x6c757d'
            var tintColor = '0xffaaaa'


        }else if(type == 'success'){
            var btnColor  = '0x28a745'
            var btnOutlineColor = '0x28a745'
            var tintColor = '0xffaaaa'

        }else if(type == 'info'){
            var btnColor  = '0x17a2b8'
            var btnOutlineColor = '0x17a2b8'
            var tintColor = '0xffaaaa'

        }else if(type == 'warning'){
            var btnColor  = '0xffc107'
            var btnOutlineColor = '0xffc107'
            var tintColor = '0xffaaaa'

        }else if(type == 'danger'){
            var btnColor  = '0xdc3545'
            var btnOutlineColor = '0xdc3545'
            var tintColor = '0xffaaaa'

        }else if(type == 'primary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0x007bff'
            var tintColor = '0xffaaaa'

        }else if(type == 'secondary outline'){
            var btnColor  = '0x333333'
            var btnOutlineColor = '0xcccccc'
            var tintColor = '0xffaaaa'

        }else if(type == 'define'){
            
            var btnColor  = '0xffffff'
            var btnOutlineColor = '0xffffff'
            var tintColor = '0xffffff'

            
        }else{
            
            var btnColor  = type
            var btnOutlineColor = borderColor
            var tintColor = type

            
            
            
        }
       // var  setFontSize = fontSize
    var btnTextStyle = new PIXI.TextStyle({
       // fontFamily: '微軟正黑體',
         fontFamily: fontFamilyText,//'Noto Sans TC',
        fontSize: fontSize,
        //fontStyle: 'normal',
        fontWeight: textWeight,
        fill: textColor, // gradient
       // stroke: btnColor,
       // strokeThickness: 0.5,

        });
    
    
    

    
    
    var btnText = new PIXI.Text(btnText, btnTextStyle);
        btnText.pivot.x = btnText.width/2// -1
    
        btnText.pivot.y = btnText.height/2// -1


    
    
    
    var btnIconWidth = btnText.width +20
    var btnIconHeight = btnText.height +10
    
        btnIcon.lineStyle(borderWidth, btnOutlineColor, borderAlpha);
        btnIcon.beginFill(btnColor,bgAlpha);
        btnIcon.drawRoundedRect(0,0, w,h, r);
        btnIcon.endFill();
        btnIcon.name = 'btnIcon'
      //  btnIcon.filterKey = btnText
        btnText.x = btnIcon.width/2
        btnText.y = btnIcon.height/2 +1
      //  btnIcon.pivot = btnIcon.width/2
        parent.addChild(btnIcon)
        btnIcon.addChild(btnText)
    
      //  btnText.x = btnIcon.width/2


    
    
    
    btnIcon.x = x
    btnIcon.y = y 
    btnIcon.text = btnText
  //  btnIcon.interactive = true;   // BTN
   // btnIcon.buttonMode = true;
    /*
    btnIcon.on('pointerover', function(){this.alpha = 0.5 })
                  .on('pointerout', function(){this.alpha = 1})
                   .on('pointerup',  function(){this.alpha = 1})
     */       
                                          //      console.log('close win')
                                               // parent.alpha = 0
                                            //    console.log(pixiUIApp)
      //  pixiUIApp.renderer.resize(10, 10)
                                                //parent.parent.removeChild(parent.parent.getChildByName("newProjWinRectBGA"))
                                          //      }else if(mode == 'submit'){
                                            //    console.log('submit date to DB')
                                            //    }})

    return btnIcon
    
};


function buildInputBoxBtn(parent,x,y,w,h,fontSize,btnText,fontColor,type){

    if(type == 'primary'){
            var btnColor  = '0x007bff'
            var btnOutline = '0x007bff'
        }else if(type == 'secondary'){
            var btnColor  = '0x6c757d'
            var btnOutline = '0x6c757d'
        }else if(type == 'success'){
            var btnColor  = '0x28a745'
            var btnOutline = '0x28a745'
        }else if(type == 'info'){
            var btnColor  = '0x17a2b8'
            var btnOutline = '0x17a2b8'
        }else if(type == 'warning'){
            var btnColor  = '0xffc107'
            var btnOutline = '0xffc107'
        }else if(type == 'danger'){
            var btnColor  = '0xdc3545'
            var btnOutline = '0xdc3545'
        }else if(type == 'white_outline'){
            var btnColor  = '0x333333'
            var btnOutline = '0xeeeeee'
        }
    
    
   var inputBoxW = String(w) +'px'
   var fontSizeString = String(fontSize) + 'pt'

   var smallBTN = new PIXI.TextInput({
        input: {
            fontSize: fontSizeString,
            padding: '2px',
            width: inputBoxW,
            color:fontColor,
        }, 
         box: {
                default: {fill: btnColor, rounded: 3, stroke: {color: btnOutline, width: 0.5}},
                focused: {fill: btnColor, rounded: 3, stroke: {color: btnOutline, width: 0.5}},
                disabled: {fill: btnColor, rounded: 3, stroke: {color: btnOutline, width: 0.5}}
            }
        })
        smallBTN.text = btnText

        smallBTN.children[3].pivot.x = smallBTN.children[3].width/2 -w/2
        smallBTN.x = x

        //smallBTN.pivot.y = smallBTN.height/2
        smallBTN.y = y
        parent.addChild(smallBTN);  
        smallBTN.disabled = true 
    


        smallBTN.interactive = true;   // BTN
        smallBTN.buttonMode = true;
        smallBTN.on('pointerover', function(){this.tint="0xffaaaa",this.alpha = 0.3})
                       .on('pointerout', function(){this.tint="0xffffff",this.alpha = 1})
                       .on('pointerup',  function(){this.tint="0xffffff",this.alpha = 1})
                     //  .on('mousedown',function(){if(mode == 'cancel'){
                                              //      console.log('close win')
                                                   // parent.alpha = 0
                                                //    console.log(pixiUIApp)
          //  pixiUIApp.renderer.resize(10, 10)
                                                    //parent.parent.removeChild(parent.parent.getChildByName("newProjWinRectBGA"))
                                              //      }else if(mode == 'submit'){
                                                //    console.log('submit date to DB')
                                                //    }})

        return smallBTN

};




function arrowCtrBtn(parent,x,y,r,w,h,bgColor,iconColor){   //建立 控制 BTN
    
    
    var pageCtrBoxBG =  new PIXI.Graphics(); //btn BG
        pageCtrBoxBG.lineStyle(1, bgColor, 0);
        pageCtrBoxBG.beginFill(bgColor,0);
        pageCtrBoxBG.drawRoundedRect(0,0, w, h, 5);
        pageCtrBoxBG.endFill();
        pageCtrBoxBG.name = 'pageCtrBoxBG'
        parent.addChild(pageCtrBoxBG)  
        pageCtrBoxBG.alpha = 1
    
    var pageCtrBox =  new PIXI.Graphics(); //btn box
        pageCtrBox.lineStyle(1, bgColor, 0);
        pageCtrBox.beginFill(bgColor,1);
        pageCtrBox.drawRoundedRect(0,0, w, h, 5);
        pageCtrBox.endFill();
        pageCtrBox.name = 'pageCtrBox'
        pageCtrBoxBG.addChild(pageCtrBox)  
        pageCtrBox.alpha = 1
    
     var pageCtrBoxRing =  new PIXI.Graphics(); //btn box ring
        pageCtrBoxRing.lineStyle(1, iconColor, 1);
        pageCtrBoxRing.beginFill(bgColor,0);
        pageCtrBoxRing.drawRoundedRect(0,0, w, h, 5);
        pageCtrBoxRing.endFill();
        pageCtrBoxRing.name = 'pageCtrBoxRing'
        pageCtrBoxBG.addChild(pageCtrBoxRing)  
        pageCtrBoxRing.alpha =0

     
    var pageCtnIcon = new PIXI.Graphics();  //btn icon
        pageCtnIcon.lineStyle(1, iconColor, 0);
        pageCtnIcon.beginFill(iconColor,0.3);
        pageCtnIcon.moveTo(-10.21, 5.89);
        pageCtnIcon.lineTo(10.21, 5.89);
        pageCtnIcon.lineTo(0.0, -11.79);

        pageCtnIcon.alpha = 1;
       // pmNextPageIcon.pivot.x = -pmNextPageIcon.width/2;
     //   pmNextPageIcon.pivot.y = -pmNextPageIcon.height/2;
        pageCtnIcon.x =pageCtrBox.width/2;
        pageCtnIcon.y =pageCtrBox.height/2;
        pageCtnIcon.name="pageCtnIcon";
       // pageCtnIcon.scale.set(1.2);
       // pageCtnIcon.rotation = 1.57
        pageCtrBoxBG.addChild(pageCtnIcon)  
    

    
    
    
        pageCtrBoxBG.pivot.x =w/2
        pageCtrBoxBG.pivot.y =h/2

        pageCtrBoxBG.x = x
        pageCtrBoxBG.y = y
        pageCtrBoxBG.rotation = parseFloat(r/(180.0/Math.PI))
    
        pageCtrBoxBG.interactive = true;
        pageCtrBoxBG.buttonMode = true;
        pageCtrBoxBG.on('pointerover', function(){this.getChildByName('pageCtrBoxRing').tint="0xff7777";
                                                    this.getChildByName('pageCtrBoxRing').alpha =1;
                                                    this.getChildByName('pageCtnIcon').tint="0xff7777";
                                                    })
                .on('pointerout', function(){this.getChildByName('pageCtrBoxRing').tint=="0xffffff";
                                                this.getChildByName('pageCtrBoxRing').alpha =0;
                                                this.getChildByName('pageCtnIcon').tint="0xffffff";
                                                })
                .on('pointerup', function(){this.getChildByName('pageCtrBoxRing').tint="0xffffff";
                                            this.getChildByName('pageCtrBoxRing').alpha =0;
                                             this.getChildByName('pageCtnIcon').tint="0xffffff";
                                              })
    
    
        
    
        return pageCtrBoxBG
    
    
};


function pageCtrBtnGrp(parent,x,y,w,h,containerName,labelText,labelTextColor,bgColor,bgLineColor,bgRound,arrowColor,box_W,boxColor,fontColor,fontSize,scale,currentPage,totalPages){   //建立 控制 BTN
    
    var pageCtrGrpContainer = new PIXI.Container()
        pageCtrGrpContainer.name = containerName;
        parent.addChild(pageCtrGrpContainer)

    
    
    
    var pageCtrBoxBG =  new PIXI.Graphics(); //btn BG
        pageCtrBoxBG.lineStyle( 1, bgLineColor,1);
        pageCtrBoxBG.beginFill(bgColor,1);
        pageCtrBoxBG.drawRoundedRect(0,0, w, h, bgRound);
        pageCtrBoxBG.endFill();
        pageCtrBoxBG.name = 'pageCtrBoxBG'
        pageCtrGrpContainer.addChild(pageCtrBoxBG)  
        pageCtrBoxBG.alpha = 1
        pageCtrGrpContainer.x = x
        pageCtrGrpContainer.y = y
    
    
    
    var labelFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '200',
        fill: labelTextColor, // gradient
        stroke: labelTextColor,
        strokeThickness: 0.2,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
    var grpLabelText = new PIXI.Text(labelText, labelFontStyle);
            
            
        pageCtrBoxBG.addChild(grpLabelText)

        grpLabelText.x = 10
        grpLabelText.pivot.y = grpLabelText.height/2
        grpLabelText.y =  pageCtrBoxBG.height/2 -5

    
    
    

    
    var pageCtnLIconOL = new PIXI.Graphics();  //btn icon
        pageCtnLIconOL.lineStyle(3, '0xffffff', 1);
        pageCtnLIconOL.beginFill(arrowColor,0);
        pageCtnLIconOL.moveTo(-10.21, 5.89);
        pageCtnLIconOL.lineTo(10.21, 5.89);
        pageCtnLIconOL.lineTo(0.0, -11.79);
        pageCtnLIconOL.lineTo(-10.21, 5.89);


        pageCtnLIconOL.alpha = 0;
       // pageCtnLIconOL.pivot.x = -pageCtnLIconOL.width/2;
        pageCtnLIconOL.pivot.y = -pageCtnLIconOL.height/2;
        pageCtnLIconOL.rotation  = parseFloat(270/(180.0/Math.PI))

        pageCtnLIconOL.x = 9 + grpLabelText.width +20
        pageCtnLIconOL.y = pageCtrBoxBG.height/2  //+3// +2;
        pageCtnLIconOL.name="pageCtnLIconOL";
       // pageCtnIcon.scale.set(1.2);
       // pageCtnIcon.rotation = 1.57
        pageCtrBoxBG.addChild(pageCtnLIconOL)  
    
   var pageCtnLIcon = new PIXI.Graphics();  //btn icon
        pageCtnLIcon.lineStyle(1, arrowColor,0);
        pageCtnLIcon.beginFill(arrowColor,1);
        pageCtnLIcon.moveTo(-10.21, 5.89);
        pageCtnLIcon.lineTo(10.21, 5.89);
        pageCtnLIcon.lineTo(0.0, -11.79);
        pageCtnLIcon.lineTo(-10.21, 5.89);

        pageCtnLIcon.rotation  = parseFloat(270/(180.0/Math.PI))

        pageCtnLIcon.alpha = 1;
       // pageCtnLIcon.pivot.x =  -pageCtnLIcon.width/2;
        pageCtnLIcon.pivot.y =  -pageCtnLIcon.height/2;
        pageCtnLIcon.x = 10 + grpLabelText.width +20
        pageCtnLIcon.y = pageCtrBoxBG.height/2;
        pageCtnLIcon.name="pageCtnLIcon";
       // pageCtnIcon.scale.set(1.2);
       // pageCtnIcon.rotation = 1.57
        pageCtrBoxBG.addChild(pageCtnLIcon)  
    
    
    var pageCtnLIconOR = new PIXI.Graphics();  //btn icon
        pageCtnLIconOR.lineStyle(3, '0xffffff', 1);
        pageCtnLIconOR.beginFill(arrowColor,0);
        pageCtnLIconOR.moveTo(-10.21, 5.89);
        pageCtnLIconOR.lineTo(10.21, 5.89);
        pageCtnLIconOR.lineTo(0.0, -11.79);
        pageCtnLIconOR.lineTo(-10.21, 5.89);


        pageCtnLIconOR.alpha = 0;
       // pageCtnLIconOL.pivot.x = -pageCtnLIconOL.width/2;
        pageCtnLIconOR.pivot.y = -pageCtnLIconOR.height/2;
        pageCtnLIconOR.rotation  = parseFloat(90/(180.0/Math.PI))

        pageCtnLIconOR.x = 50 + grpLabelText.width +20
        pageCtnLIconOR.y =   pageCtrBoxBG.height/2 -1 //+3// +2;
        pageCtnLIconOR.name="pageCtnLIconOR";
       // pageCtnIcon.scale.set(1.2);
       // pageCtnIcon.rotation = 1.57
        pageCtrBoxBG.addChild(pageCtnLIconOR)   
    
    
    var pageCtnRIcon = new PIXI.Graphics();  //btn icon
        pageCtnRIcon.lineStyle(1, arrowColor,0);
        pageCtnRIcon.beginFill(arrowColor,1);
        pageCtnRIcon.moveTo(-10.21, 5.89);
        pageCtnRIcon.lineTo(10.21, 5.89);
        pageCtnRIcon.lineTo(0.0, -11.79);
        pageCtnRIcon.lineTo(-10.21, 5.89);

        pageCtnRIcon.rotation  = parseFloat(90/(180.0/Math.PI))

        pageCtnRIcon.alpha = 1;
       // pageCtnLIcon.pivot.x =  -pageCtnLIcon.width/2;
        pageCtnRIcon.pivot.y =  -pageCtnLIcon.height/2;
        pageCtnRIcon.x = 49 + grpLabelText.width +20
        pageCtnRIcon.y = pageCtrBoxBG.height/2 -1;
        pageCtnRIcon.name="pageCtnRIcon";
       // pageCtnIcon.scale.set(1.2);
       // pageCtnIcon.rotation = 1.57
        pageCtrBoxBG.addChild(pageCtnRIcon)  
      
    var fontSizeString = String(fontSize) + 'pt'
    var inputBoxW = String(box_W) +'px'
    
    var currentCountInputBox = new PIXI.TextInput({
        input: {
            fontSize: fontSizeString,
            padding: '4px',
            width: inputBoxW,
            color:fontColor,
        }, 
         box: {
                default: {fill: boxColor, rounded: 3, stroke: {color: boxColor, width: 1}},
                focused: {fill: boxColor, rounded: 3, stroke: {color: boxColor, width: 1}},
                disabled: {fill: boxColor, rounded: 3}
            }
        })
        currentCountInputBox.text = currentPage

        currentCountInputBox.x = 70 + grpLabelText.width +20
        currentCountInputBox.children[3].pivot.x = currentCountInputBox.children[3].width/2 -box_W/2

        currentCountInputBox.pivot.y = currentCountInputBox.height/2
        currentCountInputBox.y = pageCtrBoxBG.height/2
        pageCtrBoxBG.addChild(currentCountInputBox);  
        currentCountInputBox.disabled = true

     var totalCountInputBox = new PIXI.TextInput({
        input: {
            fontSize: fontSizeString,
            padding: '4px',
            width: inputBoxW,
            color:fontColor,
        }, 
         box: {
                default: {fill: boxColor, rounded: 3, stroke: {color: boxColor, width: 1}},
                focused: {fill: boxColor, rounded: 3, stroke: {color: boxColor, width: 1}},
                disabled: {fill: boxColor, rounded: 3}
            }
        })
        totalCountInputBox.text = totalPages

        totalCountInputBox.x = 70 + currentCountInputBox.width + 30 + grpLabelText.width +20
        totalCountInputBox.children[3].pivot.x = totalCountInputBox.children[3].width/2 -box_W/2

        totalCountInputBox.pivot.y = totalCountInputBox.height/2
        totalCountInputBox.y = pageCtrBoxBG.height/2
        pageCtrBoxBG.addChild(totalCountInputBox);  
        totalCountInputBox.disabled = true
    
    var fontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '200',
        fill: labelTextColor, // gradient
        stroke: labelTextColor,
        strokeThickness: 1,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
    var winLabelText = new PIXI.Text('/', fontStyle);
            
            
        pageCtrBoxBG.addChild(winLabelText)

        winLabelText.x = 80 + currentCountInputBox.width + grpLabelText.width +20
        winLabelText.pivot.y = winLabelText.height/2
        winLabelText.y =  pageCtrBoxBG.height/2 -5
    
    
    pageCtrBoxBG.scale.set(scale)
    

    //btn event
    
    pageCtnLIcon.interactive = true;
    pageCtnLIcon.buttonMode = true;
    pageCtnLIcon.on('pointerover', function(){pageCtnLIconOL.tint="0xffffff";
                                              pageCtnLIconOL.alpha =1;
                                              this.alpha = 0.5

                                                        })
                    .on('pointerout', function(){
                                            pageCtnLIconOL.alpha =0;
                                            this.alpha = 1
                                                    })
                    .on('pointerup', function(){
                                            pageCtnLIconOL.alpha =0;
                                            this.alpha = 1
                                                  })


    
    pageCtnRIcon.interactive = true;
    pageCtnRIcon.buttonMode = true;
    pageCtnRIcon.on('pointerover', function(){pageCtnLIconOR.tint="0xffffff";
                                              pageCtnLIconOR.alpha =1;
                                              this.alpha = 0.5

                                                        })
                    .on('pointerout', function(){
                                            pageCtnLIconOR.alpha =0;
                                            this.alpha = 1
                                                    })
                    .on('pointerup', function(){
                                            pageCtnLIconOR.alpha =0;
                                            this.alpha = 1
                                                  })
                 

                                                
    currentCountInputBox.interactive = true;
   // pageCtnRIcon.buttonMode = true;
    currentCountInputBox.on('pointerover', function(){pageCtnLIconOR.tint="0xffffff";
                                              this.alpha = 1
                                                        })
                    .on('pointerout', function(){
                                            this.alpha = 1
                                                    })
                    .on('pointerup', function(){
                                            this.alpha = 1

                                                  })
                    .on('mousedown', function(){
                                            this.alpha = 1

                                                  })

     currentCountInputBox.on('keydown', keycode => {
                                    if(keycode == 13){
                                        console.log('press enter')
                                    }else{console.log('not enter')}
                                                    })

    

    
    return [pageCtrBoxBG,pageCtnLIcon,pageCtnRIcon,currentCountInputBox,totalCountInputBox]
    
 
};



// 過濾物件 icon btn
function filterBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
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
    var drawLinePosData = [[-4.6, -5.0], [-4.76, -4.97], [-4.88, -4.89], [-4.96, -4.76], [-4.99, -4.61], [-4.91, -3.81], [-4.66, -3.05], [-4.26, -2.36], [-3.72, -1.76], [-2.0, -0.24], [-1.81, -0.02], [-1.66, 0.23], [-1.57, 0.51], [-1.54, 0.8], [-1.54, 4.61], [-1.48, 4.82], [-1.33, 4.95], [-1.14, 5.0], [-0.93, 4.93], [1.37, 3.4], [1.45, 3.33], [1.5, 3.26], [1.54, 3.17], [1.55, 3.07], [1.55, 0.8], [1.58, 0.51], [1.67, 0.23], [1.82, -0.02], [2.01, -0.24], [3.73, -1.76], [4.27, -2.36], [4.67, -3.05], [4.92, -3.81], [5.0, -4.61], [4.97, -4.76], [4.89, -4.89], [4.77, -4.97], [4.61, -5.0]];
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
            drawCmd.scale.set(1.2);

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
        btnBaseCover.noteA = "點選 過濾物件 BTN"
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



// 重製按鈕物件 icon btn
function reSetBtnWithIcon(parent,x,y,w,h,r,iconColor,fillColor,scale){
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
    var drawLinePosData  = [[-7.0, 0.0], [-6.87, 1.37], [-6.47, 2.68], [-5.82, 3.89], [-4.95, 4.95], [-3.89, 5.82], [-2.68, 6.47], [-1.37, 6.87], [0.0, 7.0], [1.37, 6.87], [2.68, 6.47], [3.89, 5.82], [4.95, 4.95], [5.82, 3.89], [6.47, 2.68], [6.87, 1.37], [7.0, -0.0], [6.87, -1.37], [6.47, -2.68], [5.82, -3.89], [4.95, -4.95], [3.89, -5.82], [2.68, -6.47], [1.37, -6.87], [0.0, -7.0], [0.0, -9.0], [-5.2, -6.0], [-0.0, -3.0], [0.0, -5.0], [0.98, -4.9], [1.91, -4.62], [2.78, -4.16], [3.54, -3.54], [4.16, -2.78], [4.62, -1.91], [4.9, -0.98], [5.0, -0.0], [4.9, 0.98], [4.62, 1.91], [4.16, 2.78], [3.54, 3.54], [2.78, 4.16], [1.91, 4.62], [0.98, 4.9], [0.0, 5.0], [-0.98, 4.9], [-1.91, 4.62], [-2.78, 4.16], [-3.54, 3.54], [-4.16, 2.78], [-4.62, 1.91], [-4.9, 0.98], [-5.0, -0.0]];

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
            drawCmd.scale.set(1.2);

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
        btnBaseCover.noteA = "點選 過濾物件 BTN"
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



// 回溯歷史按鈕 icon btn
function historyBtnWithIconA(parent,x,y,w,h,r,iconColor,fillColor,scale){
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
    var drawLinePosData =  [[-6.28, 3.03], [-8.53, 0.0], [-7.0, 0.0], [-6.87, -1.37], [-6.47, -2.68], [-5.82, -3.89], [-4.95, -4.95], [-3.89, -5.82], [-2.68, -6.47], [-1.37, -6.87], [0.0, -7.0], [1.37, -6.87], [2.68, -6.47], [3.89, -5.82], [4.95, -4.95], [5.82, -3.89], [6.47, -2.68], [6.87, -1.37], [7.0, -0.0], [6.87, 1.37], [6.47, 2.68], [5.82, 3.89], [4.95, 4.95], [3.89, 5.82], [2.68, 6.47], [1.37, 6.87], [0.0, 7.0], [-1.37, 6.87], [-2.68, 6.47], [-3.89, 5.82], [-4.95, 4.95], [-3.89, 3.89], [-3.06, 4.57], [-2.1, 5.08], [-1.07, 5.39], [0.0, 5.5], [1.07, 5.39], [2.1, 5.08], [3.06, 4.57], [3.89, 3.89], [4.57, 3.06], [5.08, 2.1], [5.39, 1.07], [5.5, -0.0], [5.39, -1.07], [5.08, -2.1], [4.57, -3.06], [3.89, -3.89], [3.06, -4.57], [2.1, -5.08], [1.07, -5.39], [0.0, -5.5], [-1.07, -5.39], [-2.1, -5.08], [-3.06, -4.57], [-3.89, -3.89], [-4.57, -3.06], [-5.08, -2.1], [-5.39, -1.07], [-5.5, 0.0], [-4.03, 0.0]];

            drawCmd.lineStyle(1, iconColor, 0);
            drawCmd.beginFill(iconColor, 1);
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
    var drawLinePosData = [[-0.5, -3.02], [-0.5, 0.51], [2.49, 2.39], [3.02, 1.55], [0.5, -0.04], [0.5, -3.02]];
            drawCmd.moveTo(drawLinePosData[0][0], drawLinePosData[0][1]);
            for(i=1;i<drawLinePosData.length;i++){drawCmd.lineTo(drawLinePosData[i][0], drawLinePosData[i][1]);};
            drawCmd.lineTo(drawLinePosData[0][0], drawLinePosData[0][1]);
    
            drawCmd.alpha = 1;
           // drawCmd.pivot.x = drawCmd.width/2;
           // drawCmd.pivot.y = drawCmd.height/2;
            drawCmd.x =0;
            drawCmd.y =0;
            drawCmd.name="drawCmd";
            drawCmd.scale.set(1.2);

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
        btnBaseCover.noteA = "點選 歷史按鈕"
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