function getSelectProjectDataFromDB(searchID,return_searchID,return_enName,return_chName,return_stDay,return_edDay,return_chiefArtist,return_im,return_designer,return_projType,return_projDesc,return_au_day,return_cf_day,return_zip_day,return_test_day,return_proj_state){
    
    
   $.post("/getSelectProjectDataFromDB", {   //runAllAutoEvents
        'searchID':searchID,

            }, function(data) {
                //console.log(data)
        
                return_searchID.text = data[1][0]
                return_enName.text = data[1][1]
                return_chName.text = data[1][2]
                return_stDay.text = data[1][3]
                return_edDay.text = data[1][4]
                return_chiefArtist.text = data[1][5]
                return_im.text = data[1][6]
                return_designer.text = data[1][7]
                return_projType.text = data[1][8]
                return_projDesc.text = data[1][9]
                return_au_day.text = data[1][10]
                return_cf_day.text = data[1][11]
                return_zip_day.text = data[1][12]
                return_test_day.text = data[1][13]
                return_proj_state.text = data[1][14]


        }) 

    
    
};







function saveProjectEditToDB(searchID,en_name,ch_name,st_day,ed_day,chief_artist,im,designer,proj_type,proj_desc,audioRequestDay,CFRequestDay,zipDataRequestDay,alphaTestDataRequestDay,projState){
       
   // console.log(searchID,en_name,ch_name,st_day,ed_day,chief_artist,im,designer,proj_type,proj_desc,,audioRequestDay,CFRequestDay,zipDataRequestDay,alphaTestDataRequestDay,projState)
        /*
        $.post("/saveProjectEditToDB", {   //runAllAutoEvents
            'searchID':parseInt(searchID),
            'en_name':en_name,
            'ch_name':ch_name,
            'st_day':st_day,
            'ed_day':ed_day,
            'chief_artist':chief_artist,
            'im':im,
            'designer':designer,
            'proj_type':proj_type,
            'proj_desc':proj_desc,
            'au_day':audioRequestDay,
            'cf_day':CFRequestDay,
            'zip_day':zipDataRequestDay,
            'test_day':alphaTestDataRequestDay,
            'proj_state':projState

                }, function(data) {
                    console.log(data)



            }) 
    
    */
    
};






// Task


//新增Task
function addNewTaskToDB(projectSearchID,taskName,taskDesc,taskType,user_name,parentTask,st_day,ed_day){
    
   // console.log(projectSearchID,taskName,taskDesc,taskType,user_name,parentTask,st_day,ed_day)  
    if(parentTask == '未選擇'){
        var parentTaskID = 0
    }
      $.post("/addNewTaskToDB", {   //runAllAutoEvents
            'proj_id':parseInt(projectSearchID),
            'name':taskName,
            'task_desc':taskDesc,
            'task_type':taskType,
            'user_name':user_name,
            'parent_task':parentTaskID,
            'st_day':st_day,
            'ed_day':ed_day,

                }, function(data) {
                    console.log(data)



        }) 
    
    
    
    
    
    
};


function callSelProjTaskData(proj_id,filter){
       $.post("/getSelProjTaskDataFromDB", {   //runAllAutoEvents
            'proj_id':parseInt(proj_id),
                }, function(data) {
                var taskData = data[2]
                    console.log(data)
                   // buildTaskList(taskData,0,20)
                })  
        
        
};
