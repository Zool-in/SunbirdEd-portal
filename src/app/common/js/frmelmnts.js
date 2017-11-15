'use strict';
angular.module('playerApp.frmelmnts', [])
  .constant('frmelmnts', {"en":{"btn":{"add":"ADD","yes":"YES","no":"NO","ok":"OK","cancel":"CANCEL","save":"SAVE","resume":"RESUME","update":"UPDATE","clear":"CLEAR","publish":"PUBLISH","reject":"REJECT","tryagain":"TRY AGAIN","close":"CLOSE","accept":"ACCEPT","discard":"DISCARD","startcreating":"START CREATING","tcyes":"Yes","tcno":"No","edit":"EDIT","submit":"SUBMIT","download":"DOWNLOAD","apply":"APPLY","reset":"RESET","smplcsv":"DOWNLOAD SAMPLE CSV","uploadorgscsv":"UPLOAD ORGANIZATIONS CSV","uploadusrscsv":"UPLOAD USERS CSV","chksts":"CHECK STATUS","approve":"APPROVE","tcok":"Ok","viewless":"VIEW LESS","viewmore":"VIEW MORE","finish":"FINISH","signup":"SIGN UP","login":"LOGIN","back":"BACK","anncmntgotit":"GOT IT","anncmntconfirmrecipients":"CONFIRM RECIPIENTS","anncmntpreview":"PREVIEW ANNOUNCEMENT","anncmntsendanncmnt":"SEND ANNOUNCEMENT","anncmntselectrecipients":"SELECT RECIPIENTS","anncmntdtlsview":"VIEW"},"bdge":{"course":"Course"},"lbl":{"tcyes":"Yes","tcno":"No","tcfrom":"From","tcto":"To","title":"Title","description":"Description","takenote":"TAKE NOTE","addnote":"ADD NOTE","mynotebook":"My Notebook","mynotes":"My Notes","search":"Search","edit":"Edit","delete":"Delete","deletenote":"Delete Note","yes":"YES","no":"NO","insertimage":"Insert Image","textbook":"Book","textbookdescription":"Build books using study material for an interesting learning experience.","course":"Course","coursedescription":"Design courses using books, collections and study material. Courses are for a duration, to achieve an objective.","lesson":"Study Material","lessondescription":"Create different study materials like story, game, activity, audio, video, using the inbuilt authoring tools.","collection":"Collection","collectiondescription":"Compile study material of your choice.","lessonplandescription":"Frame lesson plans with structured sections for an efficient learning experience.","lessonplan":"Lesson Plan","contentupload":"Upload Content","contentuploaddescription":"You can upload content here.","createlessontext":"Create Study Material","name":"Name","lessonfillater":"These details can be filled when adding content to study material.","createcollection":"Create Collection","collectionfillater":"These details can be filled when adding content to collection.","createtextbook":"Create Book","bookfillater":"These details can be filled when adding content to book.","createlessonplan":"Create Lesson Plan","lpfilllater":"These details can be filled when adding content to lesson plan.","designcourse":"Design Course","coursefilllater":"These details can be filled when adding content to create course.","author":"Author","medium":"Medium","class":"Class","subject":"Subject","lastupdate":"Last update","createdon":"Created On","status":"Status","flaggedreason":"Flagged reason","flaggedby":"Flagged by","flaggeddescription":"Flagged Description","contentinformation":"Content Information","concept":"Concepts","curriculum":"Curriculum","agreeandproceedtext":"All content created and uploaded here will be licensed under CC-BY 4.0.","deletecontent":"Delete Content","deleteconfirm":"Are you sure to delete this content?","deletepublishedcontent":"Retire Content","deletepublishedconfirm":"Retire myself from the content(s)?","viewworkspace":"View your workspace","resourcetype":"Resource Type","experience":"Experience","worktitle":"Occupation / Work Title","designation":"Designation","organization":"Organization","subjectstaught":"Subject(s) taught","iscurrentjob":"Is this your current job","address":"Address","seladdresstype":"Select Address Type","permanent":"Permanent","current":"Current","addressline1":"Address Line 1","addressline2":"Address Line 2","city":"City","state":"State","country":"Country","pincode":"Pin Code","education":"Education","degree":"Degree","yop":"Year of Passing","institute":"Institution Name","grade":"Grade","percentage":"Percentage","board":"Board/University","addlInfo":"Additional Information","email":"Email ID","phone":"Phone number","gender":"Gender","language":"Language(s) known","birthdate":"Birthdate (dd/mm/yyyy)","subjects":"Subjects of expertise","contents":"Contents","currentlocation":"Current location","grades":"Grades","socialmedia":"Social media","facebook":"Facebook","twitter":"Twitter","linkedIn":"LinkedIn","blog":"Blog","whatwentwrong":"What went wrong?","whatwentwrongdesc":"Let us know what went wrong, please mention the exact reasons so that we review this as soon as possible and address this issue super fast. Thanks for your feedback!","contentname":"CONTENT NAME","selectreason":"SELECT A REASON","share":"Share","<<<<<<<":"HEAD","sharelink":"Share by the link - ","batchname":"BATCH NAME","":"======",">>>>>>>":"upstream/announcement","aboutbatch":"ABOUT THIS BATCH","startdate":"START DATE","enddate":"END DATE","natureofbatch":"BATCH TYPE","bacthmembers":"MEMBERS IN THE BATCH","batchmentors":"MENTORS IN THE BATCH","batchparticipants":"SELECTED PARTICIPANTS","batchselmentors":"SELECTED MENTORS","inactive":"Inactive","active":"Active","blocked":"Blocked","retired":"Retired","filters":"Filters","filterby":"Filter by","sort":"Sort","chkuploadsts":"Check Upload Status","upldfile":"Uploaded File","processid":"Process ID","provider":"Provider","extlid":"External Id","orgid":"OrgId","successres":"Success Results","failres":"Failure Results","confmblk":"Are you sure to Block","selrole":"Select Role","org":"Org","assgnbdge":"Assign Badge","cnfmassgn":"Do you want to assign","orgtypes":"Org Types","addorgtype":"Add Org Type","updateorgtype":"Update Org Type","confirmblock":"Are you sure to Block","confirmassign":"Do you want to assign","jobProfile":"Experience","avatar":"Profile picture","profileSummary":"Profile description","firstName":"First name","lastName":"Last name","skillTags":"Skill Tags","addSkills":"Add Skills","username":"User Name","password":"Password","phonenumber":"Phone Number","dob":"Date Of Birth","lang":"Language","languages":"Bengali,English,Gujarati,Hindi,Kannada,Marathi,Punjabi,Tamil,Telugu","page":"Page","tryagain":"Try Again","close":"Close","createnewanncmnt":"Create New Announcement","createnewanncmntdesc":"Fill in all the required fields to create the announcement.","selectrecipient":"Select Announcement Recipients","selectrecipientdesc":"Select groups who should receive the announcement.","confirmrecipient":"Confirm Announcement Recipients","confirmrecipientdesc":"Review and confirm your announcement recipients.","previewanncmnt":"Preview Announcement","previewanncmntdesc":"This is how your announcement will look.","anncmntstep":"STEP","anncmnttitle":"TITLE","anncmntfrom":"FROM","anncmntfromDesc":"Please enter announcement from","anncmnttype":"ANNOUNCEMENT TYPE","anncmntdesc":"DESCRIPTION (OPTIONAL)","anncmntlink":"URL / WEB LINK","anncmntaddlink":"Add URL/web link","anncmntaddlinkdesc":"(For example, you can link a Google Form)","anncmntaddmorelink":"Add Another URL/web link","anncmntuploadfile":"UPLOAD ATTACHMENT","anncmntsent":"Announcement Sent!","anncmntsentdesc":"Your announcement has been sent to all your recipients. View all your announcement from the Announcement Dashboard.","anncmntdtlsweblinks":"Weblinks","anncmntdtlsattachments":"Attachments","anncmntdtlssenton":"Sent on","anncmntcancel":"Are you sure you want to stop creating this announcement","anncmntcanceldesc":"You will lose your work if you close this announcement","summary":"Summary","readless":"Read Less ...","readmore":"... Read More","location":"Location","socialmedialinks":"Social Media Links"},"scttl":{"todo":"To Do","myworkspace":"My Workspace","contributions":"Contributions","badges":"Badges","instructions":"Instructions :","blkuser":"Block User","signup":"Sign Up"},"tab":{"home":"Home","courses":"Courses","resources":"Library","community":"Community","profile":"Profile"},"drpdn":{"male":"Male","female":"Female","transgender":"Transgender"},"prmpt":{"enterphoneno":"Enter 10 digit phone number with country code","search":"Search courses, library","curriculum":"Curriculum","medium":"Medium","subject":"Subjects","grades":"Grades","contenttypes":"Content Types","concepts":"Concepts","orgtype":"Org Type","deletenote":"Are you sure to delete this note?","userlocation":"Location","roles":"Roles"},"intxt":{"t0001":"Search for notes or title","t0002":"ADD YOUR COMMENT"},"alt":{"sortby":"Sort ascending or descending order","filter":"Filter"},"instn":{"t0001":"You can add or upload details of up to 200 users at a time in one csv file","t0002":"You can add or upload details of up to 200 organizations at a time in one csv file","t0003":"'firstName', 'email', 'userName', 'password' fields are mandatory.","t0004":"If 'provider' is given, 'emailVerified' and 'phoneVerified' should be set to true. Else, they should be set to false.","t0005":"'roles', 'grade', 'language' and 'subject' can take multiple values. Sample format of list fields:  ENGLISH,HINDI .","t0006":"Date of birth ('dob') field format is YYYY-MM-DD, e.g.: 1992-10-12.","t0007":"The OrgName column is mandatory. Enter organization name in this column","t0008":"If the organization is a tenant (like state), then it should be marked as a root org. I.e. 'isRootOrg' should be set as true, else it should be false.","t0009":"'channel' value is required if 'isRootOrg' is true.","t0010":"'contactDetail' should be in json format . eg:[{'address':'address','phone':'xxxxxxxx','fax':'xxxxx'}].","t0011":"You can track progress with process ID","t0012":"Please save the Process ID for your reference .You can track progress with process ID","t0013":"Download the csv file for reference","t0014":"CSV Columns:","t0015":"Upload Organizations","t0016":"Upload Users","t0017":"'externalId' and 'provider' are mutually necessary, i.e. either both the values should be provided or not provided together.","t0018":"Flag course as inappropriate","t0019":"Flag content as inappropriate","t0020":"Start typing to add a skill","t0021":"Enter each organization's name in a separate row","t0022":"Entering details in all other columns is optional:","t0023":"isRootOrg: Valid value for this column is True","t0024":"channel: Unique ID provided during master organization creation","t0025":"externalId: Unique ID associated with each organization in the administrating  organization’s repository","t0026":"provider: Channel ID of the administrator organization","t0027":"description: Details describing  the organization","t0028":"homeUrl: Organization’s homepage url","t0029":"orgCode: Organization’s unique code, if any,","t0030":"orgType: Type of organization, such as, NGO, primary school, secondary school etc","t0031":"preferredLanguage: Language preferences for the organization, if any","t0032":"contactDetail: Organization’s phone number and email ID. Details should be entered within single quotes. For example: ‘Phonenumber’: ‘1234567890’","t0033":"The following columns are mandatory:","t0034":"FirstName: The user’s first name","t0035":"Email: The user’s verified email ID","t0036":"UserName: The unique name assigned to the user  by the organization. For example, unique username for Ravikumar could be RaviK and for Mohan Shetty could be MohanS etc.UserName and FirstName should not be the same.","t0037":"Password: a unique password should be provided for each user by the organization administrator","t0038":"All other columns are optional. These columns include information about the user such as:","t0039":"Phone","t0040":"Role: Of the user on the portal, whether the user is a creator or reviewer","t0041":"Grade: Classes taught by the user","t0042":"Location: User’s place of location of the user","t0043":"DOB: User’s date of birth, the value should be entered in DD-MM-YYYY format","t0044":"Gender: User’s gender","t0045":"Language: Languages known and preferred by the user","t0046":"Profile summary: User’s profile summary","t0047":"Subject: Taught by the user","t0048":"Columns titled emailVerified, phoneVerfied and provider are conditionally mandatory. Value for emailVerfied and phoneVerified should be True, if details are provided for provider","t0049":"Please enter relevant title for this announcement (Max: 100 chars)","t0050":"Select organization/department that has sent the announcement","t0051":"Announcement type","t0052":"Please enter description for this announcement (Max: 1200 chars)","t0053":"Enter web url"},"snav":{"start":"Create","draft":"Draft","inreview":"Review Submissions","published":"Published","alluploads":"All Uploads","upForReview":"Up For Review","flagged":"Flagged","limitedPublishing":"Limited Publishing"},"pgttl":{"takeanote":"Take a note"},"lnk":{"viewall":"View All","profile":"Profile","workSpace":"Workspace","logout":"Logout","dashboard":"Admin dashboard","announcement":"Announcement dashboard","myactivity":"My Activity","coursebacthes":"Course Batches","imglnkmsg":"http://example.com/images/diagram.jpg optional title"}},"ta":{"btn":{"add":"ADD","yes":"YES","no":"NO","ok":"OK","cancel":"CANCEL","save":"SAVE","resume":"RESUME","update":"UPDATE","clear":"CLEAR","publish":"PUBLISH","reject":"REJECT","tryagain":"TRY AGAIN","close":"CLOSE","accept":"ACCEPT","discard":"DISCARD","startcreating":"START CREATING","tcyes":"Yes","tcno":"No","edit":"EDIT","submit":"SUBMIT","download":"DOWNLOAD","apply":"APPLY","reset":"RESET","smplcsv":"DOWNLOAD SAMPLE CSV","uploadorgscsv":"UPLOAD ORGANIZATIONS CSV","uploadusrscsv":"UPLOAD USERS CSV","chksts":"CHECK STATUS","approve":"APPROVE","tcok":"Ok","viewless":"VIEW LESS","viewmore":"VIEW MORE","finish":"FINISH","signup":"SIGN UP","login":"LOGIN","back":"BACK","anncmntgotit":"GOT IT","anncmntconfirmrecipients":"CONFIRM RECIPIENTS","anncmntpreview":"PREVIEW ANNOUNCEMENT","anncmntsendanncmnt":"SEND ANNOUNCEMENT","anncmntselectrecipients":"SELECT RECIPIENTS","anncmntdtlsview":"VIEW"},"bdge":{"course":"Course"},"lbl":{"tcyes":"Yes","tcno":"No","tcfrom":"From","tcto":"To","title":"Title","description":"Description","takenote":"TAKE NOTE","addnote":"ADD NOTE","mynotebook":"My Notebook","mynotes":"My Notes","search":"Search","edit":"Edit","delete":"Delete","deletenote":"Delete Note","yes":"YES","no":"NO","insertimage":"Insert Image","textbook":"Book","textbookdescription":"Build books using study material for an interesting learning experience.","course":"Course","coursedescription":"Design courses using books, collections and study material. Courses are for a duration, to achieve an objective.","lesson":"Study Material","lessondescription":"Create different study materials like story, game, activity, audio, video, using the inbuilt authoring tools.","collection":"Collection","collectiondescription":"Compile study material of your choice.","lessonplandescription":"Frame lesson plans with structured sections for an efficient learning experience.","lessonplan":"Lesson Plan","contentupload":"Upload Content","contentuploaddescription":"You can upload content here.","createlessontext":"Create Study Material","name":"Name","lessonfillater":"These details can be filled when adding content to study material.","createcollection":"Create Collection","collectionfillater":"These details can be filled when adding content to collection.","createtextbook":"Create Book","bookfillater":"These details can be filled when adding content to book.","createlessonplan":"Create Lesson Plan","lpfilllater":"These details can be filled when adding content to lesson plan.","designcourse":"Design Course","coursefilllater":"These details can be filled when adding content to create course.","author":"Author","medium":"Medium","class":"Class","subject":"Subject","lastupdate":"Last update","createdon":"Created on","status":"Status","flaggedreason":"Flagged reason","flaggedby":"Flagged by","flaggeddescription":"Flagged Description","contentinformation":"Content Information","concept":"Concepts","curriculum":"Curriculum","agreeandproceedtext":"All content created and uploaded here will be licensed under CC-BY 4.0.","deletecontent":"Delete Content","deleteconfirm":"Are you sure to delete this content?","viewworkspace":"View your workspace","resourcetype":"Resource Type","experience":"Experience","worktitle":"Occupation / Work Title","designation":"Designation","organization":"Organization","subjectstaught":"Subject(s) taught","iscurrentjob":"Is this your current job","address":"Address","seladdresstype":"Select Address Type","permanent":"Permanent","current":"Current","addressline1":"Address Line 1","addressline2":"Address Line 2","city":"City","state":"State","country":"Country","pincode":"Pin code","education":"Education","degree":"Degree","yop":"Year of passing","institute":"Institution Name","grade":"Grade","percentage":"Percentage","board":"Board/University","addlInfo":"Additional Information","email":"Email ID","phone":"Phone number","gender":"Gender","language":"Language(s) known","birthdate":"Birthdate (dd/mm/yyyy)","subjects":"Subjects of expertise","contents":"Contents","currentlocation":"Current location","grades":"Grades","socialmedia":"Social media","facebook":"Facebook","twitter":"Twitter","linkedIn":"LinkedIn","blog":"Blog","whatwentwrong":"What went wrong?","whatwentwrongdesc":"Let us know what went wrong, please mention the exact reasons so that we review this as soon as possible and address this issue super fast. Thanks for your feedback!","contentname":"CONTENT NAME","selectreason":"SELECT A REASON","share":"Share","sharelink":"Share by the link -","batchname":"NAME OF BATCH","aboutbatch":"ABOUT THIS BATCH","startdate":"START DATE","enddate":"END DATE","natureofbatch":"NATURE OF BATCH","bacthmembers":"MEMBERS IN THE BATCH","batchmentors":"MENTORS IN THE BATCH","batchparticipants":"SELECTED PARTICIPANTS","batchselmentors":"SELECTED MENTORS","inactive":"Inactive","active":"Active","blocked":"Blocked","retired":"Retired","filters":"Filters","filterby":"Filter by","sort":"Sort","chkuploadsts":"Check Upload Status","upldfile":"Uploaded File","processid":"Process ID","provider":"Provider","extlid":"External Id","orgid":"OrgId","successres":"Success Results","failres":"Failure Results","confmblk":"Are you sure to Block","selrole":"Select Role","org":"Org","assgnbdge":"Assign Badge","cnfmassgn":"Do you want to assign","orgtypes":"Org Types","addorgtype":"Add Org Type","updateorgtype":"Update Org Type","confirmblock":"Are you sure to Block","confirmassign":"Do you want to assign","jobProfile":"experience","avatar":"profile picture","profileSummary":"profile description","firstName":"first name","lastName":"last name","deletepublishedcontent":"Retire Content","deletepublishedconfirm":"Retire myself from the content(s)?","<<<<<<<":"HEAD","":"======",">>>>>>>":"upstream/announcement","skillTags":"Skill Tags","addSkills":"Add Skills","username":"User Name","password":"Password","phonenumber":"Phone Number","dob":"Date Of Birth","lang":"Language","languages":"Bengali,English,Gujarati,Hindi,Kannada,Marathi,Punjabi,Tamil,Telugu","page":"Page","tryagain":"Try Again","close":"Close","createnewanncmnt":"Create New Announcement","createnewanncmntdesc":"Fill in all the required fields to create the announcement.","selectrecipient":"Select Announcement Recipients","selectrecipientdesc":"Select groups who should receive the announcement.","confirmrecipient":"Confirm Announcement Recipients","confirmrecipientdesc":"Review and confirm your announcement recipients.","previewanncmnt":"Preview Announcement","previewanncmntdesc":"This is how your announcement will look.","anncmntstep":"STEP","anncmnttitle":"TITLE","anncmntfrom":"FROM","anncmntfromDesc":"Please enter announcement from","anncmnttype":"ANNOUNCEMENT TYPE","anncmntdesc":"DESCRIPTION (OPTIONAL)","anncmntlink":"URL / WEB LINK","anncmntaddlink":"Add URL/web link","anncmntaddlinkdesc":"(For example, you can link a Google Form)","anncmntaddmorelink":"Add Another URL/web link","anncmntuploadfile":"UPLOAD ATTACHMENT","anncmntsent":"Announcement Sent!","anncmntsentdesc":"Your announcement has been sent to all your recipients. View all your announcement from the Announcement Dashboard.","anncmntdtlsweblinks":"Weblinks","anncmntdtlsattachments":"Attachments","anncmntdtlssenton":"Sent on","anncmntcancel":"Are you sure you want to stop creating this announcement","anncmntcanceldesc":"You will lose your work if you close this announcement","summary":"Summary","readless":"Read Less ...","readmore":"... Read More","location":"Location","socialmedialinks":"Social Media Links"},"scttl":{"todo":"To Do","myworkspace":"My Workspace","contributions":"Contributions","badges":"Badges","instructions":"Instructions :","blkuser":"Block User","signup":"Sign Up"},"tab":{"home":"முகப்பு","courses":"படிப்புகள்","resources":"நூலகம்","community":"சமூக","profile":"விவரம்"},"drpdn":{"male":"Male","female":"Female","transgender":"Transgender"},"prmpt":{"enterphoneno":"Enter 10 digit phone number with country code","search":"Search courses, library","curriculum":"Curriculum","medium":"Medium","subject":"Subjects","grades":"Grades","contenttypes":"Content Types","concepts":"Concepts","orgtype":"Org Type","deletenote":"Are you sure to delete this note?","userlocation":"Location","roles":"Roles"},"intxt":{"t0001":"Search for notes or title","t0002":"ADD YOUR COMMENT"},"alt":{"sortby":"Sort ascending or descending order","filter":"Filter"},"instn":{"t0001":"Only upto 200 users can be uploaded with each csv file","t0002":"Only upto 200 organizations can be uploaded with each csv file","t0003":"'firstName', 'email', 'userName', 'password' fields are mandatory.","t0004":"If 'provider' is given, 'emailVerified' and 'phoneVerified' should be set to true. Else, they should be set to false.","t0005":"'roles', 'grade', 'language' and 'subject' can take multiple values. Sample format of list fields:  ENGLISH,HINDI .","t0006":"Date of birth ('dob') field format is YYYY-MM-DD, e.g.: 1992-10-12.","t0007":"Organization name ('orgName') is mandatory","t0008":"If the organization is a tenant (like state), then it should be marked as a root org. I.e. 'isRootOrg' should be set as true, else it should be false.","t0009":"'channel' value is required if 'isRootOrg' is true.","t0010":"'contactDetail' should be in json format . eg:[{'address':'address','phone':'xxxxxxxx','fax':'xxxxx'}].","t0011":"You can track progress with process ID","t0012":"Please save the Process ID for your reference .You can track progress with process ID","t0013":"Download the sample csv for reference.","t0014":"CSV Columns:","t0015":"Upload Organizations","t0016":"Upload Users","t0017":"'externalId' and 'provider' are mutually necessary, i.e. either both the values should be provided or not provided together.","t0018":"Flag course as inappropriate","t0019":"Flag content as inappropriate","t0020":"Start typing to add a skill","t0021":"Enter each organization's name in a separate row","t0022":"Entering details in all other columns is optional:","t0023":"isRootOrg: Valid value for this column is True","t0024":"channel: Unique ID provided during master organization creation","t0025":"externalId: Unique ID associated with each organization in the administrating  organization’s repository","t0026":"provider: Channel ID of the administrator organization","t0027":"description: Details describing  the organization","t0028":"homeUrl: Organization’s homepage url","t0029":"orgCode: Organization’s unique code, if any,","t0030":"orgType: Type of organization, such as, NGO, primary school, secondary school etc","t0031":"preferredLanguage: Language preferences for the organization, if any","t0032":"contactDetail: Organization’s phone number and email ID. Details should be entered within single quotes. For example: ‘Phonenumber’: ‘1234567890’","t0033":"The following columns are mandatory:","t0034":"FirstName: The user’s first name","t0035":"Email: The user’s verified email ID","t0036":"UserName: The unique name assigned to the user  by the organization. For example, unique username for Ravikumar could be RaviK and for Mohan Shetty could be MohanS etc.UserName and FirstName should not be the same.","t0037":"Password: a unique password should be provided for each user by the organization administrator","t0038":"All other columns are optional. These columns include information about the user such as:","t0039":"Phone","t0040":"Role: Of the user on the portal, whether the user is a creator or reviewer","t0041":"Grade: Classes taught by the user","t0042":"Location: User’s place of location of the user","t0043":"DOB: User’s date of birth, the value should be entered in DD-MM-YYYY format","t0044":"Gender: User’s gender","t0045":"Language: Languages known and preferred by the user","t0046":"Profile summary: User’s profile summary","t0047":"Subject: Taught by the user","t0048":"Columns titled emailVerified, phoneVerfied and provider are conditionally mandatory. Value for emailVerfied and phoneVerified should be True, if details are provided for provider","t0049":"Please enter relevant title for this announcement (Max: 100 chars)","t0050":"Select organization/department that has sent the announcement","t0051":"Announcement type","t0052":"Please enter description for this announcement (Max: 1200 chars)","t0053":"Enter web url"},"snav":{"start":"Create","draft":"Draft","inreview":"Review Submissions","published":"Published","alluploads":"All Uploads","upForReview":"Up For Review","flagged":"Flagged","limitedPublishing":"Limited Publishing"},"pgttl":{"takeanote":"Take a note"},"lnk":{"viewall":"View All","profile":"Profile","workSpace":"Workspace","logout":"Logout","dashboard":"Admin dashboard","myactivity":"My Activity","coursebacthes":"Course Batches","imglnkmsg":"http://example.com/images/diagram.jpg optional title","announcement":"Announcement dashboard"}},"te":{"btn":{"add":"ADD","yes":"YES","no":"NO","ok":"OK","cancel":"CANCEL","save":"SAVE","resume":"RESUME","update":"UPDATE","clear":"CLEAR","publish":"PUBLISH","reject":"REJECT","tryagain":"TRY AGAIN","close":"CLOSE","accept":"ACCEPT","discard":"DISCARD","startcreating":"START CREATING","tcyes":"Yes","tcno":"No","edit":"EDIT","submit":"SUBMIT","download":"DOWNLOAD","apply":"APPLY","reset":"RESET","smplcsv":"DOWNLOAD SAMPLE CSV","uploadorgscsv":"UPLOAD ORGANIZATIONS CSV","uploadusrscsv":"UPLOAD USERS CSV","chksts":"CHECK STATUS","approve":"APPROVE","tcok":"Ok","viewless":"VIEW LESS","viewmore":"VIEW MORE","finish":"FINISH","signup":"SIGN UP","login":"LOGIN","back":"BACK","anncmntgotit":"GOT IT","anncmntconfirmrecipients":"CONFIRM RECIPIENTS","anncmntpreview":"PREVIEW ANNOUNCEMENT","anncmntsendanncmnt":"SEND ANNOUNCEMENT","anncmntselectrecipients":"SELECT RECIPIENTS","anncmntdtlsview":"VIEW"},"bdge":{"course":"Course"},"lbl":{"tcyes":"Yes","tcno":"No","tcfrom":"From","tcto":"To","title":"Title","description":"Description","takenote":"TAKE NOTE","addnote":"ADD NOTE","mynotebook":"My Notebook","mynotes":"My Notes","search":"Search","edit":"Edit","delete":"Delete","deletenote":"Delete Note","yes":"YES","no":"NO","insertimage":"Insert Image","textbook":"Book","textbookdescription":"Build books using study material for an interesting learning experience.","course":"Course","coursedescription":"Design courses using books, collections and study material. Courses are for a duration, to achieve an objective.","lesson":"Study Material","lessondescription":"Create different study materials like story, game, activity, audio, video, using the inbuilt authoring tools.","collection":"Collection","collectiondescription":"Compile study material of your choice.","lessonplandescription":"Frame lesson plans with structured sections for an efficient learning experience.","lessonplan":"Lesson Plan","contentupload":"Upload Content","contentuploaddescription":"You can upload content here.","createlessontext":"Create Study Material","name":"Name","lessonfillater":"These details can be filled when adding content to study material.","createcollection":"Create Collection","collectionfillater":"These details can be filled when adding content to collection.","createtextbook":"Create Book","bookfillater":"These details can be filled when adding content to book.","createlessonplan":"Create Lesson Plan","lpfilllater":"These details can be filled when adding content to lesson plan.","designcourse":"Design Course","coursefilllater":"These details can be filled when adding content to create course.","author":"Author","medium":"Medium","class":"Class","subject":"Subject","lastupdate":"Last update","createdon":"Created on","status":"Status","flaggedreason":"Flagged reason","flaggedby":"Flagged by","flaggeddescription":"Flagged Description","contentinformation":"Content Information","concept":"Concepts","curriculum":"Curriculum","agreeandproceedtext":"All content created and uploaded here will be licensed under CC-BY 4.0.","deletecontent":"Delete Content","deleteconfirm":"Are you sure to delete this content?","viewworkspace":"View your workspace","resourcetype":"Resource Type","experience":"Experience","worktitle":"Occupation / Work Title","designation":"Designation","organization":"Organization","subjectstaught":"Subject(s) taught","iscurrentjob":"Is this your current job","address":"Address","seladdresstype":"Select Address Type","permanent":"Permanent","current":"Current","addressline1":"Address Line 1","addressline2":"Address Line 2","city":"City","state":"State","country":"Country","pincode":"Pin code","education":"Education","degree":"Degree","yop":"Year of passing","institute":"Institution Name","grade":"Grade","percentage":"Percentage","board":"Board/University","addlInfo":"Additional Information","email":"Email ID","phone":"Phone number","gender":"Gender","language":"Language(s) known","birthdate":"Birthdate (dd/mm/yyyy)","subjects":"Subjects of expertise","contents":"Contents","currentlocation":"Current location","grades":"Grades","socialmedia":"Social media","facebook":"Facebook","twitter":"Twitter","linkedIn":"LinkedIn","blog":"Blog","whatwentwrong":"What went wrong?","whatwentwrongdesc":"Let us know what went wrong, please mention the exact reasons so that we review this as soon as possible and address this issue super fast. Thanks for your feedback!","contentname":"CONTENT NAME","selectreason":"SELECT A REASON","share":"Share","sharelink":"Share by the link -","batchname":"NAME OF BATCH","aboutbatch":"ABOUT THIS BATCH","startdate":"START DATE","enddate":"END DATE","natureofbatch":"NATURE OF BATCH","bacthmembers":"MEMBERS IN THE BATCH","batchmentors":"MENTORS IN THE BATCH","batchparticipants":"SELECTED PARTICIPANTS","batchselmentors":"SELECTED MENTORS","inactive":"Inactive","active":"Active","blocked":"Blocked","retired":"Retired","filters":"Filters","filterby":"Filter by","sort":"Sort","chkuploadsts":"Check Upload Status","upldfile":"Uploaded File","processid":"Process ID","provider":"Provider","extlid":"External Id","orgid":"OrgId","successres":"Success Results","failres":"Failure Results","confmblk":"Are you sure to Block","selrole":"Select Role","org":"Org","assgnbdge":"Assign Badge","cnfmassgn":"Do you want to assign","orgtypes":"Org Types","addorgtype":"Add Org Type","updateorgtype":"Update Org Type","confirmblock":"Are you sure to Block","confirmassign":"Do you want to assign","jobProfile":"experience","avatar":"profile picture","profileSummary":"profile description","firstName":"first name","lastName":"last name","deletepublishedcontent":"Retire Content","deletepublishedconfirm":"Retire myself from the content(s)?","<<<<<<<":"HEAD","":"======",">>>>>>>":"upstream/announcement","skillTags":"Skill Tags","addSkills":"Add Skills","username":"User Name","password":"Password","phonenumber":"Phone Number","dob":"Date Of Birth","lang":"Language","languages":"Bengali,English,Gujarati,Hindi,Kannada,Marathi,Punjabi,Tamil,Telugu","page":"Page","tryagain":"Try Again","close":"Close","createnewanncmnt":"Create New Announcement","createnewanncmntdesc":"Fill in all the required fields to create the announcement.","selectrecipient":"Select Announcement Recipients","selectrecipientdesc":"Select groups who should receive the announcement.","confirmrecipient":"Confirm Announcement Recipients","confirmrecipientdesc":"Review and confirm your announcement recipients.","previewanncmnt":"Preview Announcement","previewanncmntdesc":"This is how your announcement will look.","anncmntstep":"STEP","anncmnttitle":"TITLE","anncmntfrom":"FROM","anncmntfromDesc":"Please enter announcement from","anncmnttype":"ANNOUNCEMENT TYPE","anncmntdesc":"DESCRIPTION (OPTIONAL)","anncmntlink":"URL / WEB LINK","anncmntaddlink":"Add URL/web link","anncmntaddlinkdesc":"(For example, you can link a Google Form)","anncmntaddmorelink":"Add Another URL/web link","anncmntuploadfile":"UPLOAD ATTACHMENT","anncmntsent":"Announcement Sent!","anncmntsentdesc":"Your announcement has been sent to all your recipients. View all your announcement from the Announcement Dashboard.","anncmntdtlsweblinks":"Weblinks","anncmntdtlsattachments":"Attachments","anncmntdtlssenton":"Sent on","anncmntcancel":"Are you sure you want to stop creating this announcement","anncmntcanceldesc":"You will lose your work if you close this announcement","summary":"Summary","readless":"Read Less ...","readmore":"... Read More","location":"Location","socialmedialinks":"Social Media Links"},"scttl":{"todo":"To Do","myworkspace":"My Workspace","contributions":"Contributions","badges":"Badges","instructions":"Instructions :","blkuser":"Block User","signup":"Sign Up"},"tab":{"home":"హోమ్","courses":"కోర్సులు","resources":"లైబ్రరీ","community":"సంఘం","profile":"ప్రొఫైల్"},"drpdn":{"male":"Male","female":"Female","transgender":"Transgender"},"prmpt":{"enterphoneno":"Enter 10 digit phone number with country code","search":"Search courses, library","curriculum":"Curriculum","medium":"Medium","subject":"Subjects","grades":"Grades","contenttypes":"Content Types","concepts":"Concepts","orgtype":"Org Type","deletenote":"Are you sure to delete this note?","userlocation":"Location","roles":"Roles"},"intxt":{"t0001":"Search for notes or title","t0002":"ADD YOUR COMMENT"},"alt":{"sortby":"Sort ascending or descending order","filter":"Filter"},"instn":{"t0001":"Only upto 200 users can be uploaded with each csv file","t0002":"Only upto 200 organizations can be uploaded with each csv file","t0003":"'firstName', 'email', 'userName', 'password' fields are mandatory.","t0004":"If 'provider' is given, 'emailVerified' and 'phoneVerified' should be set to true. Else, they should be set to false.","t0005":"'roles', 'grade', 'language' and 'subject' can take multiple values. Sample format of list fields:  ENGLISH,HINDI .","t0006":"Date of birth ('dob') field format is YYYY-MM-DD, e.g.: 1992-10-12.","t0007":"Organization name ('orgName') is mandatory","t0008":"If the organization is a tenant (like state), then it should be marked as a root org. I.e. 'isRootOrg' should be set as true, else it should be false.","t0009":"'channel' value is required if 'isRootOrg' is true.","t0010":"'contactDetail' should be in json format . eg:[{'address':'address','phone':'xxxxxxxx','fax':'xxxxx'}].","t0011":"You can track progress with process ID","t0012":"Please save the Process ID for your reference .You can track progress with process ID","t0013":"Download the sample csv for reference.","t0014":"CSV Columns:","t0015":"Upload Organizations","t0016":"Upload Users","t0017":"'externalId' and 'provider' are mutually necessary, i.e. either both the values should be provided or not provided together.","t0018":"Flag course as inappropriate","t0019":"Flag content as inappropriate","t0020":"Start typing to add a skill","t0021":"Enter each organization's name in a separate row","t0022":"Entering details in all other columns is optional:","t0023":"isRootOrg: Valid value for this column is True","t0024":"channel: Unique ID provided during master organization creation","t0025":"externalId: Unique ID associated with each organization in the administrating  organization’s repository","t0026":"provider: Channel ID of the administrator organization","t0027":"description: Details describing  the organization","t0028":"homeUrl: Organization’s homepage url","t0029":"orgCode: Organization’s unique code, if any,","t0030":"orgType: Type of organization, such as, NGO, primary school, secondary school etc","t0031":"preferredLanguage: Language preferences for the organization, if any","t0032":"contactDetail: Organization’s phone number and email ID. Details should be entered within single quotes. For example: ‘Phonenumber’: ‘1234567890’","t0033":"The following columns are mandatory:","t0034":"FirstName: The user’s first name","t0035":"Email: The user’s verified email ID","t0036":"UserName: The unique name assigned to the user  by the organization. For example, unique username for Ravikumar could be RaviK and for Mohan Shetty could be MohanS etc.UserName and FirstName should not be the same.","t0037":"Password: a unique password should be provided for each user by the organization administrator","t0038":"All other columns are optional. These columns include information about the user such as:","t0039":"Phone","t0040":"Role: Of the user on the portal, whether the user is a creator or reviewer","t0041":"Grade: Classes taught by the user","t0042":"Location: User’s place of location of the user","t0043":"DOB: User’s date of birth, the value should be entered in DD-MM-YYYY format","t0044":"Gender: User’s gender","t0045":"Language: Languages known and preferred by the user","t0046":"Profile summary: User’s profile summary","t0047":"Subject: Taught by the user","t0048":"Columns titled emailVerified, phoneVerfied and provider are conditionally mandatory. Value for emailVerfied and phoneVerified should be True, if details are provided for provider","t0049":"Please enter relevant title for this announcement (Max: 100 chars)","t0050":"Select organization/department that has sent the announcement","t0051":"Announcement type","t0052":"Please enter description for this announcement (Max: 1200 chars)","t0053":"Enter web url"},"snav":{"start":"Create","draft":"Draft","inreview":"Review Submissions","published":"Published","alluploads":"All Uploads","upForReview":"Up For Review","flagged":"Flagged","limitedPublishing":"Limited Publishing"},"pgttl":{"takeanote":"Take a note"},"lnk":{"viewall":"View All","profile":"Profile","workSpace":"Workspace","logout":"Logout","dashboard":"Admin dashboard","myactivity":"My Activity","coursebacthes":"Course Batches","imglnkmsg":"http://example.com/images/diagram.jpg optional title","announcement":"Announcement dashboard"}}});
