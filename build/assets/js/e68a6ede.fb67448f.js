"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13],{459:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"GeneralSettings/packagename","title":"Package Name Addition","description":"\ud83d\udccc Importance of a Unique Package Name","source":"@site/docs/GeneralSettings/packagename.md","sourceDirName":"GeneralSettings","slug":"/GeneralSettings/packagename","permalink":"/GeneralSettings/packagename","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"generalSidebar","previous":{"title":"Setup Flutter","permalink":"/GeneralSettings/setupFlutter"},"next":{"title":"App Icon Setup","permalink":"/GeneralSettings/appicon"}}');var t=a(4848),c=a(8453);const r={sidebar_position:9},s="Package Name Addition",o={},d=[{value:"\ud83d\udccc Importance of a Unique Package Name",id:"-importance-of-a-unique-package-name",level:2},{value:"\ud83d\udd39 How to Structure a Good Package Name",id:"-how-to-structure-a-good-package-name",level:3},{value:"Best Practices:",id:"best-practices",level:4},{value:"\ud83d\udd04 How to Change the Package Name",id:"-how-to-change-the-package-name",level:2},{value:"Manual Method",id:"manual-method",level:3},{value:"Automated Method",id:"automated-method",level:3},{value:"1\ufe0f\u20e3 Add Dependency",id:"1\ufe0f\u20e3-add-dependency",level:4},{value:"2\ufe0f\u20e3 Run Command",id:"2\ufe0f\u20e3-run-command",level:4},{value:"\ud83d\udea8 Important Note",id:"-important-note",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"package-name-addition",children:"Package Name Addition"})}),"\n",(0,t.jsx)(n.h2,{id:"-importance-of-a-unique-package-name",children:"\ud83d\udccc Importance of a Unique Package Name"}),"\n",(0,t.jsx)(n.p,{children:"A package name uniquely identifies your app on the Play Store and App Store. It must be unique to avoid conflicts during publishing and installation. If you don\u2019t change the package name in the provided code, your app will use the default one, which is already in use. This will cause publishing errors and potential installation conflicts on devices."}),"\n",(0,t.jsx)(n.h3,{id:"-how-to-structure-a-good-package-name",children:"\ud83d\udd39 How to Structure a Good Package Name"}),"\n",(0,t.jsx)(n.p,{children:"A package name typically follows a reverse domain format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"com.<yourcompany>.<yourapp>\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['If your company is "WRTeam" and your app is "eSchool," a good package name would be:',"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"com.wrteam.eschool\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"best-practices",children:"Best Practices:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use only ",(0,t.jsx)(n.strong,{children:"lowercase letters"})," and ",(0,t.jsxs)(n.strong,{children:["dots (",(0,t.jsx)(n.code,{children:"."}),") as separators"]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Avoid ",(0,t.jsx)(n.strong,{children:"special characters, spaces, or uppercase letters"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Ensure it matches across ",(0,t.jsx)(n.strong,{children:"Android"}),", ",(0,t.jsx)(n.strong,{children:"iOS"}),", and ",(0,t.jsx)(n.strong,{children:"Firebase"})," for consistency."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"-how-to-change-the-package-name",children:"\ud83d\udd04 How to Change the Package Name"}),"\n",(0,t.jsx)(n.h3,{id:"manual-method",children:"Manual Method"}),"\n",(0,t.jsx)(n.p,{children:"You can manually search and replace the package name across your project files:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"AndroidManifest.xml"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"build.gradle"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Info.plist"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ios/Runner.xcodeproj/project.pbxproj"})}),"\n",(0,t.jsxs)(n.li,{children:["Rename the package structure inside ",(0,t.jsx)(n.code,{children:"android/app/src/main/java/com/yourpackage/"})]}),"\n",(0,t.jsx)(n.li,{children:"Any other occurrences in your Flutter project."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"automated-method",children:"Automated Method"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"change_app_package_name"})," package to simplify the process."]}),"\n",(0,t.jsx)(n.h4,{id:"1\ufe0f\u20e3-add-dependency",children:"1\ufe0f\u20e3 Add Dependency"}),"\n",(0,t.jsxs)(n.p,{children:["Include the following in your ",(0,t.jsx)(n.code,{children:"pubspec.yaml"})," under ",(0,t.jsx)(n.code,{children:"dev_dependencies"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"dev_dependencies:\n  change_app_package_name: any\n"})}),"\n",(0,t.jsx)(n.h4,{id:"2\ufe0f\u20e3-run-command",children:"2\ufe0f\u20e3 Run Command"}),"\n",(0,t.jsxs)(n.p,{children:["Execute the following command in your terminal, replacing ",(0,t.jsx)(n.code,{children:"<NEW_NAME_GOES_HERE>"})," with your desired package name:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"dart run change_app_package_name:main <NEW_NAME_GOES_HERE>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command will automatically update the package name for both ",(0,t.jsx)(n.strong,{children:"Android"})," and ",(0,t.jsx)(n.strong,{children:"iOS"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"packagename",src:a(6519).A+"",width:"1920",height:"956"})}),"\n",(0,t.jsx)(n.h3,{id:"-important-note",children:"\ud83d\udea8 Important Note"}),"\n",(0,t.jsx)(n.p,{children:"If the package name is also used in the configuration files of your Flutter code, you must update those manually to avoid conflicts."}),"\n",(0,t.jsxs)(n.p,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Final Check:"})," Ensure your package name is updated correctly across all files before proceeding with development or publishing."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},6519:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/packagename1-b2cf329b65f87ff3dfa6ffb36713cd16.png"},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var i=a(6540);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);