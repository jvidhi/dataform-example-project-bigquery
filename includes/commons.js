

function ageBucket(age){
    const age_clean = `cast ( ${age} as int64)`
    return `case 
        when ${age_clean} between 0 and 18 then "Under 18"
        else "Adult"
        end`;

}


module.exports ={
    ageBucket
};