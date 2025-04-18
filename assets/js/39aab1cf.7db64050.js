"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[929],{1900:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/12-11f590c826a5d021bf05e575b43df24a.png"},3048:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"GeneralSettings/deployment/appstore","title":"iOS App Deployment","description":"[//]: # (Header image showing App Store and Flutter logos side by side)","source":"@site/docs/GeneralSettings/deployment/appstore.md","sourceDirName":"GeneralSettings/deployment","slug":"/GeneralSettings/deployment/appstore","permalink":"/common_app_doc/GeneralSettings/deployment/appstore","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"generalSidebar","previous":{"title":"PlayStore deployment","permalink":"/common_app_doc/GeneralSettings/deployment/playstore"},"next":{"title":"Firebase Setup","permalink":"/common_app_doc/GeneralSettings/firebase"}}');var l=i(4848),r=i(8453);const t={sidebar_position:3},c="iOS App Deployment",o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"1. Developer Account Setup",id:"1-developer-account-setup",level:3},{value:"2. App Configuration",id:"2-app-configuration",level:3},{value:"Update pubspec.yaml",id:"update-pubspecyaml",level:4},{value:"3. Generate App Signing Certificate",id:"3-generate-app-signing-certificate",level:3},{value:"4. Build Your App",id:"4-build-your-app",level:3},{value:"5. App Store Connect Setup",id:"5-app-store-connect-setup",level:3},{value:"Create App Record",id:"create-app-record",level:4},{value:"Complete App Information",id:"complete-app-information",level:4},{value:"7. Production Release",id:"7-production-release",level:3},{value:"8. Post-Release Tasks",id:"8-post-release-tasks",level:3},{value:"Important Notes",id:"important-notes",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Need Help?",id:"need-help",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"ios-app-deployment",children:"iOS App Deployment"})}),"\n",(0,l.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(n.p,{children:"Before starting the iOS deployment process, ensure you have:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Apple Developer Account ($99/year)"}),"\n",(0,l.jsx)(n.li,{children:"Your Flutter app ready for release"}),"\n",(0,l.jsx)(n.li,{children:"Mac computer with Xcode installed"}),"\n",(0,l.jsxs)(n.li,{children:["Required assets:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"App icon (1024x1024 px)"}),"\n",(0,l.jsx)(n.li,{children:"Screenshots for different devices (iPhone, iPad)"}),"\n",(0,l.jsx)(n.li,{children:"Privacy policy URL"}),"\n",(0,l.jsx)(n.li,{children:"App description"}),"\n",(0,l.jsx)(n.li,{children:"Keywords"}),"\n",(0,l.jsx)(n.li,{children:"Support URL"}),"\n",(0,l.jsx)(n.li,{children:"Marketing URL (optional)"}),"\n",(0,l.jsx)(n.li,{children:"App Store Connect account setup"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"step-by-step-guide",children:"Step-by-Step Guide"}),"\n",(0,l.jsx)(n.h3,{id:"1-developer-account-setup",children:"1. Developer Account Setup"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Visit ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/programs/",children:"Apple Developer Program"})]}),"\n",(0,l.jsxs)(n.li,{children:["Enroll in the program:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Pay $99 annual fee"}),"\n",(0,l.jsx)(n.li,{children:"Complete organization verification"}),"\n",(0,l.jsx)(n.li,{children:"Set up payment profile"}),"\n",(0,l.jsx)(n.li,{children:"Provide contact information"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Configure App Store Connect:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Create app record"}),"\n",(0,l.jsx)(n.li,{children:"Set up basic information"}),"\n",(0,l.jsx)(n.li,{children:"Configure app capabilities"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"2-app-configuration",children:"2. App Configuration"}),"\n",(0,l.jsx)(n.p,{children:"Before building your app, update these files:"}),"\n",(0,l.jsx)(n.h4,{id:"update-pubspecyaml",children:"Update pubspec.yaml"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"version: 1.0.0+1  # Format: version_name+version_code\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Important Version Note:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["The version format is ",(0,l.jsx)(n.code,{children:"version_name+version_code"})," (e.g., ",(0,l.jsx)(n.code,{children:"1.0.0+1"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"version_name"})," (1.0.0): Represents the public version number shown to users"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"version_code"})," (1): Internal version number used by App Store"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"For every new release"}),", you MUST increment the ",(0,l.jsx)(n.code,{children:"version_code"})," by at least 1"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"3-generate-app-signing-certificate",children:"3. Generate App Signing Certificate"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Open Xcode"}),"\n",(0,l.jsx)(n.li,{children:"Go to Xcode \u2192 Settings \u2192 Accounts"}),"\n",(0,l.jsx)(n.li,{children:"Add your Apple ID"}),"\n",(0,l.jsxs)(n.li,{children:["Create certificates:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Development certificate"}),"\n",(0,l.jsx)(n.li,{children:"Distribution certificate"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Create provisioning profiles:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Development profile"}),"\n",(0,l.jsx)(n.li,{children:"App Store profile"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"4-build-your-app",children:"4. Build Your App"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Open terminal in project directory"}),"\n",(0,l.jsx)(n.li,{children:"Run command:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"flutter build ipa --release\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:["Optional flags:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--obfuscate"})," - To protect your code"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--split-debug-info"})," - For crash reporting"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Wait for build completion"}),"\n",(0,l.jsxs)(n.li,{children:["Find IPA file at: ",(0,l.jsx)(n.code,{children:"build/ios/ipa/YourApp.ipa"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"5-app-store-connect-setup",children:"5. App Store Connect Setup"}),"\n",(0,l.jsx)(n.h4,{id:"create-app-record",children:"Create App Record"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Log in to ",(0,l.jsx)(n.a,{href:"https://appstoreconnect.apple.com",children:"App Store Connect"})]}),"\n",(0,l.jsx)(n.li,{children:'Click "My Apps"'}),"\n",(0,l.jsx)(n.li,{children:'Click "+" to create new app'}),"\n",(0,l.jsxs)(n.li,{children:["Fill basic information:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"App name"}),"\n",(0,l.jsx)(n.li,{children:"Bundle ID"}),"\n",(0,l.jsx)(n.li,{children:"SKU"}),"\n",(0,l.jsx)(n.li,{children:"User Access"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Connect Setup",src:i(7556).A+"",width:"1920",height:"915"})}),"\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsx)(n.li,{children:"Choose or create Bundle ID:"}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"Bundle ID Creation can also be done automatically via Xcode if you enable automatic signing in your project settings."})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'Click "Certificates, Identifiers & Profiles" in Apple Developer portal'}),"\n",(0,l.jsx)(n.li,{children:'Go to "Identifiers" section'}),"\n",(0,l.jsx)(n.li,{children:'Click "+" to register new Bundle ID if needed'}),"\n",(0,l.jsx)(n.li,{children:"Format: com.companyname.appname (e.g., com.example.myapp)"}),"\n",(0,l.jsx)(n.li,{children:"Select capabilities required for your app"}),"\n",(0,l.jsx)(n.li,{children:"Register the Bundle ID"}),"\n",(0,l.jsx)(n.li,{children:"Use this Bundle ID in both Xcode and App Store Connect"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{alt:"App Store Connect Setup",src:i(9023).A+"",width:"1919",height:"912"}),"\n",(0,l.jsx)(n.img,{alt:"App Store Connect Setup",src:i(7478).A+"",width:"1920",height:"914"})]}),"\n",(0,l.jsx)(n.h4,{id:"complete-app-information",children:"Complete App Information"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["App Information:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Privacy Policy URL"}),"\n",(0,l.jsx)(n.li,{children:"Support URL"}),"\n",(0,l.jsx)(n.li,{children:"Marketing URL (optional)"}),"\n",(0,l.jsx)(n.li,{children:"App Store category"}),"\n",(0,l.jsx)(n.li,{children:"Age rating"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Connect Setup",src:i(9897).A+"",width:"1920",height:"917"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:["Pricing and Availability:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Price tier"}),"\n",(0,l.jsx)(n.li,{children:"Available territories"}),"\n",(0,l.jsx)(n.li,{children:"Release date"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Connect Setup",src:i(3314).A+"",width:"1920",height:"911"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:["App Store Screenshots:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'iPhone screenshots (6.5" Display)'}),"\n",(0,l.jsx)(n.li,{children:"iPad screenshots (if supported)"}),"\n",(0,l.jsx)(n.li,{children:"App Preview videos (optional)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Connect Setup",src:i(8341).A+"",width:"1920",height:"913"})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"App Description:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Name (30 characters max)"}),"\n",(0,l.jsx)(n.li,{children:"Subtitle (30 characters max)"}),"\n",(0,l.jsx)(n.li,{children:"Keywords (100 characters max)"}),"\n",(0,l.jsx)(n.li,{children:"Description (4000 characters max)"}),"\n",(0,l.jsx)(n.li,{children:"What's New in This Version"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"App Review Information"}),"\n",(0,l.jsx)(n.p,{children:"i. Contact Information:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"First name"}),"\n",(0,l.jsx)(n.li,{children:"Last name"}),"\n",(0,l.jsx)(n.li,{children:"Phone number"}),"\n",(0,l.jsx)(n.li,{children:"Email address"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"ii. Demo Account (if login required):"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Username/email"}),"\n",(0,l.jsx)(n.li,{children:"Password"}),"\n",(0,l.jsx)(n.li,{children:"Any special instructions"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"iii. Notes for Review Team:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"App functionality description"}),"\n",(0,l.jsx)(n.li,{children:"Special setup instructions"}),"\n",(0,l.jsx)(n.li,{children:"Test account details"}),"\n",(0,l.jsx)(n.li,{children:"Known issues or clarifications"}),"\n",(0,l.jsx)(n.li,{children:"Beta/sandbox environment details"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Connect Setup",src:i(6334).A+"",width:"1920",height:"911"})}),"\n",(0,l.jsxs)(n.ol,{start:"7",children:["\n",(0,l.jsx)(n.li,{children:"App Privacy"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Enter privacy policy URL"}),"\n",(0,l.jsxs)(n.li,{children:["You need to complete data collection process. If your app requires any data collection then you will need to select respective options.\n",(0,l.jsx)(n.img,{alt:"App Store Connect Setup",src:i(7467).A+"",width:"1920",height:"914"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"7-production-release",children:"7. Production Release"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Open the iOS folder in Xcode."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"In the project navigator, select Runner under Targets, then go to the Signing & Capabilities tab. Sign in with your Apple Developer account."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Submission",src:i(5831).A+"",width:"1920",height:"1000"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Update the version and build number."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Submission",src:i(1900).A+"",width:"1920",height:"999"})}),"\n",(0,l.jsx)(n.p,{children:"Then, go to the Build Settings tab, scroll down, and update the values for FLUTTER_BUILD_NAME and FLUTTER_BUILD_NUMBER."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Submission",src:i(4165).A+"",width:"1920",height:"999"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Select Any iOS Device as the target."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Submission",src:i(3738).A+"",width:"1920",height:"1080"})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"To upload the app to the App Store, go to Product > Archive. Once the archive is complete, you can proceed with the upload."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Submission",src:i(5651).A+"",width:"1920",height:"1080"})}),"\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsx)(n.li,{children:'Log in to App Store Connect, select the build you uploaded from Xcode, and click "Add for Review" to submit it for review.'}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"App Store Submission",src:i(3688).A+"",width:"1673",height:"510"})}),"\n",(0,l.jsx)(n.h3,{id:"8-post-release-tasks",children:"8. Post-Release Tasks"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Monitor app performance"}),"\n",(0,l.jsx)(n.li,{children:"Track user feedback"}),"\n",(0,l.jsx)(n.li,{children:"Address bug reports"}),"\n",(0,l.jsx)(n.li,{children:"Plan updates"}),"\n",(0,l.jsx)(n.li,{children:"Maintain compliance"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Keep certificates and provisioning profiles safe"}),"\n",(0,l.jsx)(n.li,{children:"Ensure app complies with App Store guidelines"}),"\n",(0,l.jsx)(n.li,{children:"Test thoroughly before submission"}),"\n",(0,l.jsx)(n.li,{children:"Keep version numbers updated"}),"\n",(0,l.jsx)(n.li,{children:"Monitor review status"}),"\n",(0,l.jsx)(n.li,{children:"Back up all signing certificates"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,l.jsx)(n.p,{children:"Common issues and solutions:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Build Fails"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Check Flutter version"}),"\n",(0,l.jsx)(n.li,{children:"Update dependencies"}),"\n",(0,l.jsx)(n.li,{children:"Verify Xcode version"}),"\n",(0,l.jsx)(n.li,{children:"Check signing configuration"}),"\n",(0,l.jsx)(n.li,{children:"Validate bundle identifier"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Upload Issues"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Verify certificates"}),"\n",(0,l.jsx)(n.li,{children:"Check version number"}),"\n",(0,l.jsx)(n.li,{children:"Validate assets"}),"\n",(0,l.jsx)(n.li,{children:"Confirm bundle size"}),"\n",(0,l.jsx)(n.li,{children:"Check API compatibility"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Review Rejection"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Read rejection reasons"}),"\n",(0,l.jsx)(n.li,{children:"Make necessary changes"}),"\n",(0,l.jsx)(n.li,{children:"Update compliance"}),"\n",(0,l.jsx)(n.li,{children:"Resubmit with updates"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"need-help",children:"Need Help?"}),"\n",(0,l.jsx)(n.p,{children:"If you encounter issues:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Check ",(0,l.jsx)(n.a,{href:"https://flutter.dev/docs/deployment/ios",children:"Flutter Documentation"})]}),"\n",(0,l.jsxs)(n.li,{children:["Visit ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/documentation/",children:"Apple Developer Documentation"})]}),"\n",(0,l.jsx)(n.li,{children:"Consult Flutter community"}),"\n",(0,l.jsxs)(n.li,{children:["Review ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/app-store/review/guidelines/",children:"App Store Guidelines"})]}),"\n",(0,l.jsx)(n.li,{children:"Contact Apple Developer Support"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Remember: First deployment may take longer. Subsequent updates will be faster."})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},3314:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/7-e863d1bf70848b2c4b37126053f58995.png"},3688:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/16-35974c1e214a893ac8097e94aed55ef2.png"},3738:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/14-6f94d6e86410a26b0d09e7dd12c8ae5e.png"},4165:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/13-80c832fa6a53c152c5d216c800693712.png"},5651:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/15-3f484b377a268f6047e06b3aa2bd94b1.png"},5831:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/11-570a29b75fbe525311bfe1352c844c05.png"},6334:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/10-daa811a46ce844697b20eb76350464b6.png"},7467:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/6-3b00bb087e1e14d72ad95a8d9d13a271.png"},7478:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/3-51bb15d134035350704e9c93739f27a4.png"},7556:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/1-383814911b5bac1305291d778a4da023.png"},8341:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/8-92f33ba993b944cf8be6f86e2d7cb5cf.png"},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(6540);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}},9023:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/2-3f09d64d46eb18bfd18993950654156d.png"},9897:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/4-3307b6d1d584fe9b103786127c0e437d.png"}}]);