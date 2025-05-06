//imagePreviewSelectBox 圖案預覽方塊
function buildProjImagePreviewSelectBlock(parent,x,y,w,h,labelFontSize,labelFontColor,blockFillColor,blockBorderWidth,blockBorderColor,imageUrl,searchID,itemEN,itemCH,itemDesc,projType,projProcess,blockScale){
    
        //text style    timelineLabelInputStyle
    
    
    var ID_labelFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: labelFontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: labelFontColor, // gradient
        stroke: blockFillColor,
        strokeThickness: 0.5,
        dropShadow: false,
        dropShadowColor: '#666666',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
    
    var itemEN_labelFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: labelFontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: labelFontColor, // gradient
        stroke: blockFillColor,
        strokeThickness: 0.5,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    

    var itemCH_labelFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: labelFontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: labelFontColor, // gradient
        stroke: blockFillColor,
        strokeThickness: 0.5,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
   
    
    
    
    var blockBG =  new PIXI.Graphics(); //asset 主視窗
        blockBG.lineStyle(blockBorderWidth, blockBorderColor, 1);
        blockBG.beginFill(blockFillColor,1);
        blockBG.drawRoundedRect(0,0, w,h, 1);
        blockBG.endFill();
       // blockBG.name = listName

        blockBG.alpha = 1
        parent.addChild(blockBG)
        blockBG.x = x
        blockBG.y = y    
    
    
    if(projType == 'slot game'){
        var blockLabelA_color = '0xffff88'
    }else if(projType == 'pop game'){
        var blockLabelA_color = '0xffff88'
    }else if(projType == 'fishing'){
        var blockLabelA_color = '0xffff88'
    }else if(projType == 'CF'){
        var blockLabelA_color = '0x55ffff'
    }else{
        var blockLabelA_color = '0x33ff55'
    }
    
    var blockLabelA_BG =  new PIXI.Graphics(); //asset 主視窗
        blockLabelA_BG.lineStyle(1, blockLabelA_color, 1);
        blockLabelA_BG.beginFill(blockLabelA_color,1);
        blockLabelA_BG.drawRoundedRect(0,0, w/2,5, 1);
        blockLabelA_BG.endFill();
       // blockBG.name = listName
  
        blockLabelA_BG.alpha = 1
        blockBG.addChild(blockLabelA_BG)
        blockLabelA_BG.x = 0
        blockLabelA_BG.y =  0   
    
    
    
            
    var blockLabelB_BG =  new PIXI.Graphics(); //asset 主視窗
        blockLabelB_BG.lineStyle(blockBorderWidth, '0x55ff55', 1);
        blockLabelB_BG.beginFill('0x55ff55',1);
        blockLabelB_BG.drawRoundedRect(0,0, w/2,5, 1);
        blockLabelB_BG.endFill();
       // blockBG.name = listName

        blockLabelB_BG.alpha = 1
        blockBG.addChild(blockLabelB_BG)
        blockLabelB_BG.x = w/2
        blockLabelB_BG.y =  0   
    
    var ID_labelText = new PIXI.Text(searchID, ID_labelFontStyle);
            
            
       // blockBG.addChild(ID_labelText)

        ID_labelText.x = 5
    //    titleEN_labelText.pivot.y = titleEN_labelText.height/2
        ID_labelText.y = 8
    
    
    var titleEN_labelText = new PIXI.Text(itemEN, itemEN_labelFontStyle);
            
            
        blockBG.addChild(titleEN_labelText)

        titleEN_labelText.x = 5
    //    titleEN_labelText.pivot.y = titleEN_labelText.height/2
        titleEN_labelText.y = 8
    
        
    var titleCH_labelText = new PIXI.Text(itemCH, itemEN_labelFontStyle);
            
            
        blockBG.addChild(titleCH_labelText)

        titleCH_labelText.x = 5
      //  titleCH_labelText.pivot.y = titleCH_labelText.height/2
        titleCH_labelText.y = 28
    
    
    
    var imageBlock =  new PIXI.Graphics(); //asset 主視窗
        imageBlock.lineStyle(1, 0x000000, 0);
        imageBlock.beginFill('0x333333',1);
        imageBlock.drawRoundedRect(0,0, w-10,h-80, 1);
        imageBlock.endFill();
       // blockBG.name = listName

        imageBlock.alpha = 1
        blockBG.addChild(imageBlock)
        imageBlock.x = 5
        imageBlock.y = 50    
    
    blockBG.scale.set(blockScale)
    
    
    
        blockBG.interactive = true;
        blockBG.buttonMode = true;
        blockBG.on('pointerover', function(){this.tint='0xaaffff';})
                        .on('pointerout', function(){this.tint='0xffffff';})
                     //   .on('mousedown', selectOptionBtn)
                        .on('pointerup', function(){this.tint='0xffffff';})
        
      
    return blockBG
        
    
    
    
    
};



//buildBasicLineSelectBlock
//基本列表清單

function buildBasicLineSelectBlock(parent,x,y,w,h,fontSize,fontColor,listName,bgColor,bgBorderColor,blockFillColor,blockBorderWidth,blockBorderColor,id,taskName,taskUser,taskDesc,stDay,edDay,type,progress,blockScale){
    
    
    
    
    var blockBG =  new PIXI.Graphics(); //asset 主視窗
        blockBG.lineStyle(1, bgBorderColor, 1);
        blockBG.beginFill(bgColor,1);
        blockBG.drawRoundedRect(0,0, w,h, 1);
        blockBG.endFill();
        blockBG.name = listName

        blockBG.alpha = 1
        parent.addChild(blockBG)
        blockBG.x = x
        blockBG.y = y     
    
        

   // var id_W_String = String(rowB_W)+ 'px'
    
    var fontScale = String(fontSize) + 'pt'
    var smallFontScale = String(fontSize -2) + 'pt'
    
    var id_inputBox = new PIXI.TextInput({
        input: {
            fontSize: fontScale,
            padding:'2px',
            width: '30px',
            color:fontColor,
        }, 
         box: {
                default: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                focused: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                disabled: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
            }
        });
    
        id_inputBox.text = id
        id_inputBox.x = 2
        id_inputBox.pivot.y = id_inputBox.height/2
        id_inputBox.y = h/2 //+1
        id_inputBox.children[3].pivot.x =  id_inputBox.children[3].width/2 - id_inputBox.width/2
        id_inputBox.disabled = true
        id_inputBox.name = 'id_inputBox'
        blockBG.addChild(id_inputBox);  
    
    
    
        
    var taskName_inputBox = new PIXI.TextInput({
        input: {
             fontFamily: '微軟正黑體',
            fontStyle: 'normal',
            fontWeight: '100',
            fontSize: fontScale,
            padding:'2px',
            width: '150px',
            color:fontColor,
        }, 
         box: {
                default: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                focused: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                disabled: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
            }
        });
    
        taskName_inputBox.text = taskName
        taskName_inputBox.x = 2 + id_inputBox.width +2
        taskName_inputBox.pivot.y = id_inputBox.height/2
        taskName_inputBox.y = h/2 //+1
        taskName_inputBox.children[3].pivot.x = -5// taskName_inputBox.children[3].width/2 - taskName_inputBox.width/2
        taskName_inputBox.disabled = true
        taskName_inputBox.name = 'taskName_inputBox'

        blockBG.addChild(taskName_inputBox);  
    
    var user_inputBox = new PIXI.TextInput({
        input: {
            fontSize: fontScale,
            fontFamily: '微軟正黑體',
            fontStyle: 'normal',
            fontWeight: '100',
            padding:'2px',
            width: '80px',
            color:fontColor,
        }, 
         box: {
                default: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                focused: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                disabled: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
            }
        });
    
        user_inputBox.text = taskUser
        user_inputBox.x = 2 + id_inputBox.width +2 + taskName_inputBox.width +2
        user_inputBox.pivot.y = id_inputBox.height/2
        user_inputBox.y = h/2 //+1
        user_inputBox.children[3].pivot.x = -5// taskName_inputBox.children[3].width/2 - user_inputBox.width/2
        user_inputBox.disabled = true
        user_inputBox.name = 'user_inputBox'

        blockBG.addChild(user_inputBox);  
       
    
    var stDay_inputBox = new PIXI.TextInput({
        input: {
            fontSize: fontScale,
            fontFamily: '微軟正黑體',
            fontStyle: 'normal',
            fontWeight: '100',
            padding:'2px',
            width: '120px',
            color:fontColor,
        }, 
         box: {
                default: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                focused: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                disabled: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
            }
        });
    
        stDay_inputBox.text = stDay
        stDay_inputBox.x = 2 + id_inputBox.width +2 + taskName_inputBox.width +2 + user_inputBox.width +2
        stDay_inputBox.pivot.y = id_inputBox.height/2
        stDay_inputBox.y = h/2 //+1
        stDay_inputBox.children[3].pivot.x = -5// taskName_inputBox.children[3].width/2 - user_inputBox.width/2
        stDay_inputBox.disabled = true
        stDay_inputBox.name = 'stDay_inputBox'

        blockBG.addChild(stDay_inputBox);  
          
    var edDay_inputBox = new PIXI.TextInput({
        input: {
            fontSize: fontScale,
            fontFamily: '微軟正黑體',
            fontStyle: 'normal',
            fontWeight: '100',
            padding:'2px',
            width: '120px',
            color:fontColor,
        }, 
         box: {
                default: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                focused: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                disabled: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
            }
        });
    
        edDay_inputBox.text = edDay
        edDay_inputBox.x = 2 + id_inputBox.width +2 + taskName_inputBox.width +2 + user_inputBox.width +2 + stDay_inputBox.width +2
        edDay_inputBox.pivot.y = id_inputBox.height/2
        edDay_inputBox.y = h/2 //+1
        edDay_inputBox.children[3].pivot.x = -5// taskName_inputBox.children[3].width/2 - user_inputBox.width/2
        edDay_inputBox.disabled = true
        edDay_inputBox.name = 'edDay_inputBox'

        blockBG.addChild(edDay_inputBox);  

    
    var taskType_inputBox = new PIXI.TextInput({
        input: {
            fontSize: fontScale,
            fontFamily: '微軟正黑體',
            fontStyle: 'normal',
            fontWeight: '100',
            padding:'2px',
            width: '100px',
            color:fontColor,
        }, 
         box: {
                default: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                focused: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                disabled: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
            }
        });
    
        taskType_inputBox.text = type
        taskType_inputBox.x = 2 + id_inputBox.width +2 + taskName_inputBox.width +2 + user_inputBox.width +2 + stDay_inputBox.width +2 + edDay_inputBox.width +2
        taskType_inputBox.pivot.y = id_inputBox.height/2
        taskType_inputBox.y = h/2 //+1
        taskType_inputBox.children[3].pivot.x = -5// taskName_inputBox.children[3].width/2 - user_inputBox.width/2
        taskType_inputBox.disabled = true
        taskType_inputBox.name = 'taskType_inputBox'

        blockBG.addChild(taskType_inputBox);   
    
    
    
    var taskProgress_inputBox = new PIXI.TextInput({
        input: {
            fontSize: fontScale,
            fontFamily: '微軟正黑體',
            fontStyle: 'normal',
            fontWeight: '100',
            padding:'2px',
            width: '90px',
            color:fontColor,
        }, 
         box: {
                default: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                focused: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
                disabled: {fill: blockFillColor, rounded: 2, stroke: {color: blockBorderColor, width: 0}},
            }
        });
    
        taskProgress_inputBox.text = progress +' %'
        taskProgress_inputBox.x = 2 + id_inputBox.width +2 + taskName_inputBox.width +2 + user_inputBox.width +2 + stDay_inputBox.width +2 + edDay_inputBox.width +2 + taskType_inputBox.width +2
        taskProgress_inputBox.pivot.y = id_inputBox.height/2
        taskProgress_inputBox.y = h/2 //+1
        taskProgress_inputBox.children[3].pivot.x = -5// taskName_inputBox.children[3].width/2 - user_inputBox.width/2
        taskProgress_inputBox.disabled = true
        taskProgress_inputBox.name = 'taskProgress_inputBox'

        blockBG.addChild(taskProgress_inputBox);      
    
    
    
   var taskEditBtn_inputBox = new PIXI.TextInput({
        input: {
            fontSize: fontScale,
            fontFamily: '微軟正黑體',
            fontStyle: 'normal',
            fontWeight: '100',
            padding:'2px',
            width: '35px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0x66aaff', rounded: 2, stroke: {color: '0x66aaff', width: 0}},
                focused: {fill: '0x66aaff', rounded: 2, stroke: {color: '0x66aaff', width: 0}},
                disabled: {fill: '0x66aaff', rounded: 2, stroke: {color: '0x66aaff', width: 0}},
            }
        });
    
        taskEditBtn_inputBox.text = 'EDIT'
        taskEditBtn_inputBox.x = 2 + id_inputBox.width +2 + taskName_inputBox.width +2 + user_inputBox.width +2 + stDay_inputBox.width +2 + edDay_inputBox.width +2 + taskType_inputBox.width +2
        taskEditBtn_inputBox.pivot.y = id_inputBox.height/2
        taskEditBtn_inputBox.y = h/2 //+1
        taskEditBtn_inputBox.children[3].pivot.x = -5// taskName_inputBox.children[3].width/2 - user_inputBox.width/2
        taskEditBtn_inputBox.disabled = true
      
     
    //blockBG.addChild(taskEditBtn_inputBox);     
   /*  
    var taskDelBtn_inputBox = new PIXI.TextInput({
        input: {
            fontSize: fontScale,
            fontFamily: '微軟正黑體',
            fontStyle: 'normal',
            fontWeight: '100',
            padding:'2px',
            width: '35px',
            color:'0xffffff',
        }, 
         box: {
                default: {fill: '0xff8888', rounded: 2, stroke: {color: '0xff8888', width: 0}},
                focused: {fill: '0xff8888', rounded: 2, stroke: {color: '0xff8888', width: 0}},
                disabled: {fill: '0xff8888', rounded: 2, stroke: {color: '0xff8888', width: 0}},
            }
        });
    
        taskDelBtn_inputBox.text = 'DEL'
        taskDelBtn_inputBox.x = 2 + id_inputBox.width +2 + taskName_inputBox.width +2 + user_inputBox.width +2 + stDay_inputBox.width +2 + edDay_inputBox.width +2 + taskType_inputBox.width +2 + taskEditBtn_inputBox.width +2
        taskDelBtn_inputBox.pivot.y = id_inputBox.height/2
        taskDelBtn_inputBox.y = h/2 //+1
        taskDelBtn_inputBox.children[3].pivot.x = -5// taskName_inputBox.children[3].width/2 - user_inputBox.width/2
        taskDelBtn_inputBox.disabled = true
        taskDelBtn_inputBox.alpha = 0.1
        //blockBG.addChild(taskDelBtn_inputBox);     
            */ 
        blockBG.scale.set(blockScale)
    
    
    
        blockBG.interactive = true;
        blockBG.buttonMode = true;
        blockBG.on('pointerover', function(){this.alpha = 0.5;})
                        .on('pointerout', function(){this.alpha = 1;})
                     //   .on('mousedown', selectOptionBtn)
                        .on('pointerup', function(){this.alpha = 1;})
        

    return blockBG
        
    
    
};

//列標清單
function buildProjListPreviewSelectBlock(parent,x,y,w,h,labelFontSize,labelFontColor,blockFillColor,blockBorderWidth,blockBorderColor,imageUrl,searchID,itemEN,itemCH,itemDesc,projType,projProcess,blockScale){
    
        //text style    timelineLabelInputStyle
    
    
    var ID_labelFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: labelFontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: labelFontColor, // gradient
        stroke: blockFillColor,
        strokeThickness: 0.5,
        dropShadow: false,
        dropShadowColor: '#666666',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
    
    var itemEN_labelFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: labelFontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: labelFontColor, // gradient
        stroke: blockFillColor,
        strokeThickness: 0.5,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    

    var itemCH_labelFontStyle = new PIXI.TextStyle({
        fontFamily: '微軟正黑體',
        fontSize: labelFontSize,
        fontStyle: 'normal',
        fontWeight: '100',
        fill: labelFontColor, // gradient
        stroke: blockFillColor,
        strokeThickness: 0.5,
        dropShadow: false,
        dropShadowColor: '#333333',
        dropShadowBlur: 6,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 3,
        wordWrap: true,
        wordWrapWidth: 440,
        });
    
   
    
    
    
    var blockBG =  new PIXI.Graphics(); //asset 主視窗
        blockBG.lineStyle(blockBorderWidth, blockBorderColor, 1);
        blockBG.beginFill(blockFillColor,1);
        blockBG.drawRoundedRect(0,0, w,h, 1);
        blockBG.endFill();
       // blockBG.name = listName

        blockBG.alpha = 1
        parent.addChild(blockBG)
        blockBG.x = x
        blockBG.y = y    
    
   
    if(projType == 'slot game'){
        var blockLabelA_color = '0xffff88'
    }else if(projType == 'pop game'){
        var blockLabelA_color = '0xffff88'
    }else if(projType == 'fishing'){
        var blockLabelA_color = '0xffff88'
    }else if(projType == 'CF'){
        var blockLabelA_color = '0x55ffff'
    }else{
        var blockLabelA_color = '0x33ff55'
    }
    
    var blockLabelA_BG =  new PIXI.Graphics(); //asset 主視窗
        blockLabelA_BG.lineStyle(1, blockLabelA_color, 1);
        blockLabelA_BG.beginFill(blockLabelA_color,1);
        blockLabelA_BG.drawRoundedRect(0,0, 20,h, 1);
        blockLabelA_BG.endFill();
       // blockBG.name = listName
  
        blockLabelA_BG.alpha = 1
        blockBG.addChild(blockLabelA_BG)
        blockLabelA_BG.x = 0
        blockLabelA_BG.y =  0   
    
    
    
       
    var blockLabelB_BG =  new PIXI.Graphics(); //asset 主視窗
        blockLabelB_BG.lineStyle(blockBorderWidth, '0x555555', 0.5);
        blockLabelB_BG.beginFill('0x222222',1);
        blockLabelB_BG.drawRoundedRect(0,0,20,h, 1);
        blockLabelB_BG.endFill();
       // blockBG.name = listName

        blockLabelB_BG.alpha = 1
        blockBG.addChild(blockLabelB_BG)
        blockLabelB_BG.x = 21
        blockLabelB_BG.y =  0   
      
    var ID_labelText = new PIXI.Text(searchID, ID_labelFontStyle);
            
            
        //blockBG.addChild(ID_labelText)

        ID_labelText.x = 50
    //    titleEN_labelText.pivot.y = titleEN_labelText.height/2
        ID_labelText.y = 8
    
    
    var titleEN_labelText = new PIXI.Text(itemEN, itemEN_labelFontStyle);
            
            
        blockBG.addChild(titleEN_labelText)

        titleEN_labelText.x = 50
        titleEN_labelText.pivot.y = titleEN_labelText.height/2
        titleEN_labelText.y = h/4
    
        
    var titleCH_labelText = new PIXI.Text(itemCH, itemEN_labelFontStyle);
            
            
        blockBG.addChild(titleCH_labelText)

        titleCH_labelText.x = 50
        titleCH_labelText.pivot.y = titleCH_labelText.height/2
        titleCH_labelText.y = (h/4)*3
    
    
    

    blockBG.scale.set(blockScale)
    
};








// 含標籤的 inputbox
function buildRowInputList(parent,searchID,x,y,listW,listH,boxRound,bgColor,bgAlpha,fontPadding,fontSize,fontColor,rowA_strokeColor,rowA_W,rowA_boxColor,rowA_text,rowB_strokeColor,rowB_W,rowB_boxColor,rowB_text,rowC_strokeColor,rowC_W,rowC_boxColor,rowC_text,rowD_strokeColor,rowD_W,rowD_boxColor,rowD_text,listName){ // UI 標籤 + 輸入
    var fontScale = String(fontSize) + 'pt'
    


    //var inputBoxWString = String(inputBoxW) + 'px'
    var fontPaddingString = String(fontPadding) + 'px'
    var rowA_WString = String(rowA_W)+ 'px'
     
   // var inputTextLabel = new PIXI.Text(labelText, inputTextStyle);
 

      //  inputTextLabel.x = x
       // inputTextLabel.y = y//y//labelBtnIconA.height/2 pmLabelBtnInputPosData 
    
      //  parent.addChild(inputTextLabel) 
    var listBG =  new PIXI.Graphics(); //asset 主視窗
    listBG.lineStyle(1, '0xffffff', 0);
    listBG.beginFill(bgColor,bgAlpha);
    listBG.drawRoundedRect(0,0, listW,listH, 5);
    listBG.endFill();
    listBG.name = listName
    listBG.x = x
    listBG.y = y
    listBG.alpha = 1
    parent.addChild(listBG)
    listBG.x = x
    listBG.y = y

    var rowA_inputBox = new PIXI.TextInput({
    input: {
        fontSize: fontScale,
        padding:fontPaddingString,
        width: rowA_WString,
        color:fontColor,
    }, 
    box: {
            default: {fill: rowA_boxColor, rounded: boxRound, stroke: {color: rowA_strokeColor, width: 1}},
            focused: {fill: rowA_boxColor, rounded: boxRound, stroke: {color: rowA_strokeColor, width: 1}},
            disabled: {fill: rowA_boxColor, rounded: boxRound}
        }
    })
    rowA_inputBox.x = fontPadding
    rowA_inputBox.pivot.y = rowA_inputBox.height/2
    rowA_inputBox.y = listH/2
        
    rowA_inputBox.text = rowA_text
    listBG.addChild(rowA_inputBox);  
    rowA_inputBox.disabled = true

    
    
   // rowB info 
    var rowB_WString = String(rowB_W)+ 'px'

    
    var rowB_inputBox = new PIXI.TextInput({
    input: {
        fontSize: fontScale,
        padding:fontPaddingString,
        width: rowB_WString,
        color:fontColor,
    }, 
     box: {
            default: {fill: rowB_boxColor, rounded: boxRound, stroke: {color: rowB_strokeColor, width: 1}},
            focused: {fill: rowB_boxColor, rounded: boxRound, stroke: {color: rowB_strokeColor, width: 1}},
            disabled: {fill: rowB_boxColor, rounded: boxRound}
        }
    })
    rowB_inputBox.text = rowB_text
    rowB_inputBox.x = rowA_W + fontPadding *2
    rowB_inputBox.pivot.y = rowB_inputBox.height/2
    rowB_inputBox.y = listH/2
     rowB_inputBox.disabled = true
   
    listBG.addChild(rowB_inputBox);  
    
    
    
   // rowC info 
    var rowC_WString = String(rowC_W)+ 'px'

    
    var rowC_inputBox = new PIXI.TextInput({
    input: {
        fontSize: fontScale,
        padding:fontPaddingString,
        width: rowC_WString,
        color:fontColor,
    }, 
     box: {
            default: {fill: rowC_boxColor, rounded: boxRound, stroke: {color: rowC_strokeColor, width: 1}},
            focused: {fill: rowC_boxColor, rounded: boxRound, stroke: {color: rowC_strokeColor, width: 1}},
            disabled: {fill: rowC_boxColor, rounded: boxRound}
        }
    })
    rowC_inputBox.text = rowC_text
    rowC_inputBox.x = rowA_W +rowB_W+ fontPadding *3
    rowC_inputBox.pivot.y = rowC_inputBox.height/2
    rowC_inputBox.y = listH/2
    listBG.addChild(rowC_inputBox);  
    rowC_inputBox.disabled = true

    
   // rowD info 
    var rowD_WString = String(rowD_W)+ 'px'

    
    var rowD_inputBox = new PIXI.TextInput({
    input: {
        fontSize: fontScale,
        padding:fontPaddingString,
        width: rowD_WString,
        color:fontColor,
    }, 
     box: {
            default: {fill: rowD_boxColor, rounded: boxRound, stroke: {color: rowD_strokeColor, width: 1}},
            focused: {fill: rowD_boxColor, rounded: boxRound, stroke: {color: rowD_strokeColor, width: 1}},
            disabled: {fill: rowD_boxColor, rounded: boxRound}
        }
    })
    rowD_inputBox.text = rowD_text
    rowD_inputBox.x = rowA_W +rowB_W + rowC_W+ fontPadding *4
    rowD_inputBox.pivot.y = rowD_inputBox.height/2
    rowD_inputBox.y = listH/2
    listBG.addChild(rowD_inputBox);  
    
    rowD_inputBox.disabled = true

    
    //add btn icon

    var editBtnWidth = 50
    
    var editBtnInputBox = new PIXI.TextInput({
    input: {
        fontSize: fontScale,
        padding:fontPaddingString,
        width: String(editBtnWidth) +'px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0x007bff', rounded: 5, stroke: {color: '0x007bff', width: 1}},
            focused: {fill: '0x007bff', rounded: 5, stroke: {color: '0x007bff', width: 1}},
            disabled: {fill: '0x007bff', rounded: 5}
        }
    })
    editBtnInputBox.text = 'Edit '
    editBtnInputBox.x = rowA_W + rowB_W + rowC_W +  rowD_W +fontPadding *5
    
    editBtnInputBox.pivot.y = editBtnInputBox.height/2
    editBtnInputBox.y = listH/2
    editBtnInputBox.children[3].pivot.x = editBtnInputBox.children[3].width/2 - editBtnWidth/2

    listBG.addChild(editBtnInputBox);  
    
    
    editBtnInputBox.searchID = searchID
    editBtnInputBox.searchName = rowB_text
 
    
    editBtnInputBox.disabled = true
    
   
    editBtnInputBox.interactive = true;   // BTN
    editBtnInputBox.buttonMode = true;
    editBtnInputBox.on('pointerover', function(){this.tint="0xff0000";this.alpha = 0.5})
                   .on('pointerout', function(){this.tint="0xffffff";this.alpha = 1})
                   .on('pointerup',  function(){this.tint="0xffffff";this.alpha = 1})
    
    
    
    
    var delBtnInputBox = new PIXI.TextInput({
    input: {
        fontSize: fontScale,
        padding:fontPaddingString,
        width: String(editBtnWidth) +'px',
        color:'0xffffff',
    }, 
     box: {
            default: {fill: '0xdc3545', rounded: 5, stroke: {color: '0xdc3545', width: 1}},
            focused: {fill: '0xdc3545', rounded: 5, stroke: {color: '0xdc3545', width: 1}},
            disabled: {fill: '0xdc3545', rounded: 5}
        }
    })
    delBtnInputBox.text = 'Del '
    delBtnInputBox.x = rowA_W + rowB_W + rowC_W +  rowD_W + +editBtnWidth + fontPadding *6
    
    delBtnInputBox.pivot.y = editBtnInputBox.height/2
    delBtnInputBox.y = listH/2
    delBtnInputBox.children[3].pivot.x = delBtnInputBox.children[3].width/2 - editBtnWidth/2

    listBG.addChild(delBtnInputBox);  
    
    delBtnInputBox.searchID = searchID
    delBtnInputBox.searchName = rowB_text
    
    delBtnInputBox.disabled = true
    
   
    delBtnInputBox.interactive = true;   // BTN
    delBtnInputBox.buttonMode = true;
    delBtnInputBox.on('pointerover', function(){this.tint="0xff0000";this.alpha = 0.5})
                   .on('pointerout', function(){this.tint="0xffffff";this.alpha = 1})
                   .on('pointerup',  function(){this.tint="0xffffff";this.alpha = 1})
     
    
    
    
    return [listBG,rowA_text,rowB_text,rowC_text,rowD_text,searchID,editBtnInputBox,delBtnInputBox]
    
};


//var userTypeList = ['組員','主美','IM','專案負責人','技術','未指定']
//var userType = new getOptionGrp(userDataEditSession,20,390,'職 務 類 型:',userTypeList,3,110,'bg-dark','未指定')


