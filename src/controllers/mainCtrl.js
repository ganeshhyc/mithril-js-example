var state = {
    model : {
        "showing" : 10,
        "rows_out_of" : 100,
        "starting_at_row" : 1,
        "data_table" : []
    },

    allData : [],
    
    createAllData : () => {
        let _temp = state.allData;
        state.allData = [];
        if(state.model.starting_at_row>0){
            for(let _i=0;_i<state.model.showing;_i++){
                if(state.model.data_table[state.model.starting_at_row+_i-1]!==undefined)
                    state.allData[_i] = state.model.data_table[+state.model.starting_at_row+_i-1];
            }
        }else{
            state.allData = _temp;
            alert("Check your input");
        }
    },

    changeShowing : (_val)=>{
        if(parseInt(_val)>=1&&parseInt(_val)<=parseInt(state.model.rows_out_of)){
            state.model.showing=parseInt(_val);
        }else if(parseInt(_val)>parseInt(state.model.rows_out_of)){
            state.model.showing = parseInt(state.model.rows_out_of);
            alert("No data left!");
        }
        else{
            state.model.starting_at_row=1;
        }
        state.createAllData();
    },

    changeRowsOutof : (_val)=>{
        
        if(parseInt(_val)<1){
            state.model.rows_out_of = 1;
            alert("No data left!");
        }
        else{
            state.model.rows_out_of=_val;
        }
        state.createData(state.model.data_table,state.model.rows_out_of);
        state.createAllData();
    },

    changeStartingAtRow : (_val)=>{
        if(parseInt(_val)>=1&&parseInt(_val)<=parseInt(state.model.rows_out_of)){
            state.model.starting_at_row=parseInt(_val);
        }else if(parseInt(_val)>parseInt(state.model.rows_out_of)){
            state.model.starting_at_row = parseInt(state.model.rows_out_of);
            alert("No data left!");
        }
        else{
            state.model.starting_at_row=1;
        }
        state.createAllData();
    },
    createData : (currentData,limit)=>{
        if(limit<currentData.length){
            return currentData.filter((_val,_key)=>_key<limit)
        }else{
            for(i=currentData.length;i<limit;i++)
                state.model.data_table.push({
                    "locn_nbr": Math.floor(1000 + Math.random() * 9000),
                    "online_ord_id":0,
                    "ksn_id":0,
                    "sku_prc_type_cd":0
                })
        }
    },

    nextData : ()=>{
        if(state.model.starting_at_row+1>state.model.rows_out_of){
            alert("No data left!")
        }else{
            if((state.model.showing + state.model.starting_at_row)>state.model.rows_out_of){
                state.model.showing--;
            }
            state.model.starting_at_row++;
        }
        state.createAllData();
    },
    
    prevData : ()=>{
        if((state.model.starting_at_row - 1)<1){
            alert("Check your input");
        }else{
            state.model.starting_at_row--;
        }
        state.createAllData();
    },

    forwardData : ()=>{
        if(state.model.starting_at_row+state.model.showing>state.model.rows_out_of){
            alert("No data left!")
        }else{
            state.model.starting_at_row+=state.model.showing;
        }
        state.createAllData();
    },
    
    backwordData : ()=>{
        if((state.model.starting_at_row-state.model.showing)<1){
            state.model.starting_at_row = 1;
        }else{
            state.model.starting_at_row-=state.model.showing;
        }
        state.createAllData();
    },

    lastData : ()=>{
        state.model.starting_at_row = state.model.rows_out_of - state.model.showing+1;
        state.createAllData();
    },
    
    firstData : ()=>{
        state.model.starting_at_row = 1;
        state.createAllData();
    }
}
state.createData(state.model.data_table,state.model.rows_out_of);
state.createAllData();