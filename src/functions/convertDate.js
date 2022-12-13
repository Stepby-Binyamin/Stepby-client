export  function convertDate(date){
    //convert Date to number of days/weeks elpased
    if (!date) return ''
    date = new Date(date)
    const current = Date.now()
    const diff =  current - date.getTime()
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if(!(diffDays % 7)){
        const weeks= diffDays/7
        return {type:"w",time:weeks}
    }
     return   {type:"d",time:diffDays}

}
// const birthday = new Date('December 1, 2022 03:24:00')
// console.log("🚀 ~ file: convertDate.js ~ line 17 ~ birthday", convertDate(birthday))
