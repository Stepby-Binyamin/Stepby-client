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
            name: "פגישת התנעה ואפיון",
            des: "a lkd ksd omc in,xzo bdhij lmasdo nlasdnk nlasdkn",
            status: 'done', //'biz', 'client' 
            approvedDate: new Date(),
            data: [{
               owner: 'biz',// 'client',
               type: 'pdf', // 'img' , 'file' , 'answer'
               title: 'description of pdf',
               content: 'files/blabla.pdf',
               index: 1,
               isRequired: true
            }]
         },         {
            _id: Math.random(),
            index: 1,
            isCreatorApprove: false,
            name: "איסוף הרשאות ומתחרים",
            des: `לפני שמדליקים מבערים, הזדמנות חשובה להסתכל על אתרים דומים או מתחרים חשובים - ולשתף איתנו את הטוב הזה, ככה שנוכל להעמיק ולייצר את האתר הנכון והטוב ביותר.
            אפשר להעלות קבצים (צילומי מסך), או להוסיף קישורים לאתרים הרלוונטים.
            ברגע שסיימתם, ליחצו למטה על כפתור האישור.`,
            status: 'done', //'biz', 'client' 
            approvedDate: new Date(),
            data: [{
               owner: 'biz',// 'client',
               type: 'img', // 'img' , 'file' , 'answer'
               title: 'איסוף מידע הוא כלי חשוב (מקור: שאטרסטוק)',
               content: '/images/pic.png',
               index: 1,
               isRequired : true
            }]
         },         {
            _id: Math.random(),
            index: 2,
            isCreatorApprove: false,
            name: "אפיון ומרכיבי ניווט",
            des: `בשלב זה אני מתמקד ביסודות של כל האתר - הניווט והדף הראשי. 
            בהתאם לנקודות שעלו בפגישת ההתנעה שקיימנו, אני מוודא שמרכיבי הניווט יניעו את הגולשים למקום הנכון ויאפשרו גישה נוחה לניווט החופשי.
            השלב הזה צפוי לקחת בין 6-8 ימי עבודה, אלא אם דיברנו בפירוש על לוחות זמנים אחרים.
            בקובץ המצורף תוכלו לראות דוגמא לאפיון והסבר על 3 הנקודות שחשוב שתתמקדו בהן כשאשלח את לכם את קבצי האפיון.`,
            status: 'client', //'biz', 'client' 
            approvedDate: new Date(),
            data: [{
               owner: 'biz',// 'client',
               type: 'pdf', // 'img' , 'file' , 'answer'
               title: 'אפיון ודוגמאות ששווה לראות',
               content: 'files/blabla.pdf',
               index: 1,
               isRequired : false
            }]
         },]
   },
]
const categoris=[{name:"עיצוב אתרים",id:1},{name:"עיצוב פנים",id:2},{name:"שיווק דיגיטלי",id:3},{name:"אימון כושר גופני",id:4}]

module.exports = { projects,categoris }
