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
      lastApprove: new Date("08/25/2022"),
      isActive: true,
      steps: [
         {
            _id: Math.random(),
            index: 0,
            isCreatorApprove: false,
            name: "פגישת התנעה ואפיון",
            des: "a lkd ksd omc in,xzo bdhij lmasdo nlasdnk nlasdkn",
            status:  'biz', //'client' 
            isDone: true,
            approvedDate: new Date(),
            data: [{
               owner: 'biz',// 'client',
               type: 'pdf', // 'img' , 'file' , 'answer'
               title: 'description of pdf',
               content: 'files/blabla.pdf',
               index: 1,
               isRequired: true
            }]
         }, {
            _id: Math.random(),
            index: 1,
            isCreatorApprove: false,
            name: "איסוף הרשאות ומתחרים",
            des: `לפני שמדליקים מבערים, הזדמנות חשובה להסתכל על אתרים דומים או מתחרים חשובים - ולשתף איתנו את הטוב הזה, ככה שנוכל להעמיק ולייצר את האתר הנכון והטוב ביותר.
            אפשר להעלות קבצים (צילומי מסך), או להוסיף קישורים לאתרים הרלוונטים.
            ברגע שסיימתם, ליחצו למטה על כפתור האישור.`,
            status: 'biz', //'biz', 'client' 
            approvedDate: new Date(),
            data: [{
               owner: 'biz',// 'client',
               type: 'img', // 'img' , 'file' , 'answer'
               title: 'איסוף מידע הוא כלי חשוב (מקור: שאטרסטוק)',
               content: '/images/pic.png',
               index: 1,
               isRequired: true
            }]
         }, {
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
               isRequired: false
            }]
         },]
   }, {
      _id: "13",
      name: "אתר תדמית פשוט",
      creatorId: "1234",
      client: {
         _id: "4599",
         clientName: "מרכז הצדקה",
      },
      isTemplate: false,
      status: 'client', //'biz', 'client' , 'new' 
      lastApprove: new Date("08/03/2022"),
      isActive: true,
      steps: [
         {
            _id: Math.random(),
            index: 0,
            isCreatorApprove: false,
            name: "חתימה על חוזה",
            des: "a lkd ksd omc in,xzo bdhij lmasdo nlasdnk nlasdkn",
            status: 'client', //'biz', 'client' 
            approvedDate: new Date(),
            data: [{
               owner: 'biz',// 'client',
               type: 'pdf', // 'img' , 'file' , 'answer'
               title: 'description of pdf',
               content: 'files/blabla.pdf',
               index: 1,
               isRequired: true
            }]
         }, {
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
               owner: 'client',// 'client',
               type: 'img', // 'img' , 'file' , 'answer'
               title: 'איסוף מידע הוא כלי חשוב (מקור: שאטרסטוק)',
               content: '/images/pic.png',
               index: 1,
               isRequired: true
            }]
         }, {
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
               isRequired: false
            }]
         },]
   }, { // SHAUL - PLEASE DONT CHANGE INFO ON THIS _id and STEPS OR DATA, 
      //IM USING THIS DATA FOR TESTING
      _id: "14",
      name: "אתר תדמית פשוט",
      creatorId: "1234",
      client: {
         _id: "34567",
         clientName: 'טכנולוגיות בעמ',
      },
      isTemplate: false,
      status: 'biz', //'biz', 'client' , 'new' 
      lastApprove: new Date("08/27/2022"),
      isActive: true,
      steps: [
         {
            _id: Math.random(),
            index: 0,
            isCreatorApprove: false,
            name: "פגישת התנעה ואפיון",
            des: "a lkd ksd omc in,xzo bdhij lmasdo nlasdnk nlasdkn",
            status: 'client', //'biz', 'client' 
            approvedDate: new Date(),
            data: [{
               owner: 'biz',// 'client',
               type: 'pdf', // 'img' , 'file' , 'answer'
               title: 'description of pdf',
               content: 'files/blabla.pdf',
               index: 1,
               isRequired: true
            }]
         }, {
            _id: Math.random(),
            index: 1,
            isCreatorApprove: false,
            name: "איסוף הרשאות ומתחרים",
            des: `לפני שמדליקים מבערים, הזדמנות חשובה להסתכל על אתרים דומים או מתחרים חשובים - ולשתף איתנו את הטוב הזה, ככה שנוכל להעמיק ולייצר את האתר הנכון והטוב ביותר.
            אפשר להעלות קבצים (צילומי מסך), או להוסיף קישורים לאתרים הרלוונטים.
            ברגע שסיימתם, ליחצו למטה על כפתור האישור.`,
            status: 'biz', //'biz', 'client' 
            approvedDate: new Date(),
            data: [{
               owner: 'biz',// 'client',
               type: 'img', // 'img' , 'file' , 'answer'
               title: 'איסוף מידע הוא כלי חשוב (מקור: שאטרסטוק)',
               content: '/images/pic.png',
               index: 1,
               isRequired: true
            },
            {
               owner: 'biz',// 'client',
               type: 'pdf', // 'img' , 'file' , 'answer'
               title: 'מה זה ״השראות ומתחרים״ בכלל?',
               content: 'לצפייה בקובץ לוחצים כאן',
               index: 2,
               isRequired: true
            }, {
               owner: 'biz',// 'client',
               type: 'file', // 'img' , 'file' , 'answer'
               title: 'מי המתחרה העיקרי שלך באינטרנט?',
               content: '',
               index: 3,
               isRequired: true
            }, {
               owner: 'biz',// 'client',
               type: 'answer', // 'img' , 'file' , 'answer'
               title: 'העלאת צילומי מסך של מתחרים טובים',
               content: 'מגבלת נפח: 4Mb',
               index: 4,
               isRequired: true
            }]
         }, {
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
               isRequired: false
            }]
         },]
   },
   {
      _id: "11",
      name: "אתר תדמית פשוט",
      creatorId: "1234",
      client: {
         _id: "34567",
         clientName: 'טכנולוגיות בעמ',
      },
      isTemplate: false,
      status: 'biz', //'biz', 'client' , 'new' 
      lastApprove: new Date("08/09/2022"),
      isActive: true,
      steps: [
         {
            _id: Math.random(),
            index: 0,
            isCreatorApprove: false,
            name: "פגישת התנעה ואפיון",
            des: "a lkd ksd omc in,xzo bdhij lmasdo nlasdnk nlasdkn",
            status: 'client', //'biz', 'client' 
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
               isRequired: true
            },
            {
               owner: 'biz',// 'client',
               type: 'pdf', // 'img' , 'file' , 'answer'
               title: 'מה זה ״השראות ומתחרים״ בכלל?',
               content: 'לצפייה בקובץ לוחצים כאן',
               index: 2,
               isRequired: true
            }, {
               owner: 'biz',// 'client',
               type: 'file', // 'img' , 'file' , 'answer'
               title: 'מי המתחרה העיקרי שלך באינטרנט?',
               content: '',
               index: 3,
               isRequired: true
            }, {
               owner: 'biz',// 'client',
               type: 'answer', // 'img' , 'file' , 'answer'
               title: 'העלאת צילומי מסך של מתחרים טובים',
               content: 'מגבלת נפח: 4Mb',
               index: 4,
               isRequired: true
            }]
         }, {
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
               isRequired: false
            }]
         },]
   },
]
const categories = [{ name: "עיצוב אתרים", id: 1 }, { name: "עיצוב פנים", id: 2 }, { name: "שיווק דיגיטלי", id: 3 }, { name: "אימון כושר גופני", id: 4 }]

module.exports = { projects, categories }
