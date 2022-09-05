const projects = [
   {
      _id: "12",
      name: "אתר תדמית מורכב",
      creatorId: "1234",
      client: {
         _id: "4567",
         clientName: "ברנקו וייס",
      },
      isTemplate: false,
      status: 'done', //'biz', 'client' , 'new' 
      lastApprove: new Date("25/08/2022"),
      isActive: true,
      steps: [
         {
            _id: Math.random(),
            index: 0,
            isCreatorApprove: false,
            name: "my first step",
            des: "a lkd ksd omc in,xzo bdhij lmasdo nlasdnk nlasdkn",
            status: 'done', //'biz', 'client' 
            approvedDate: new Date(),
            data: [{
               owner: 'biz',// 'client',
               type: 'pdf', // 'img' , 'file' , 'answer'
               title: 'description of pdf',
               content: 'files/blabla.pdf',
               index: 1,
               isRequired : true
            }]
         },]
   },
]

module.exports = { projects }