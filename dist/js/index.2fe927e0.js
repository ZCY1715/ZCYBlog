import{_ as z,u as A,a as G,b as j,I as K,d as U,C as x,T as Q,c as X}from"./index.e4dfa506.js";import{v as _,g as T,I as W,O as Y,r as k,o as d,c as f,e as g,y as n,B as t,b as r,F as C,D as P,t as I,J as E,K as L,G as O,E as Z,H as F,C as tt}from"./@vue.e5d9c594.js";import{u as et}from"./vue-router.c4c0b80c.js";import"./pinia.3e81e60e.js";import"./klrvzgtxnx.69bc7bfb.js";import"./wkaznsdfmu.6b017687.js";import"./cklkdnlwte.57af244b.js";import"./efoojpcevq.d4b891ea.js";import"./lxzuqcodrm.f5069e87.js";import"./usyumiltnz.f2f08c30.js";import"./uholkoccdg.4878ca50.js";import"./krwgylyztr.267c37e4.js";import"./hcrxwuafkg.400cca7a.js";import"./mmdqkpkapt.53d389c2.js";import"./hvmwivjykh.7112568f.js";import"./xghmozjpqx.58ce807a.js";import"./dufsarkyff.dca1d5a0.js";import"./znjftrikpo.e3e4fe15.js";import"./lumtummxhl.0a0b1051.js";import"./wvvjsqhjjo.04d44388.js";import"./tgjbvyezdy.38eb6219.js";import"./mltxpemlnu.e5e0122a.js";import"./ukblqhbiyn.7a1e6ea2.js";import"./befeiptzlj.8a37b6d2.js";import"./udhtuoxcaz.5b994bc4.js";import"./shaxeggukd.8d0e70ca.js";import"./blniydssrp.ea72bf67.js";import"./eatfkduwtk.7cf38363.js";import"./rxkdlhgdwi.b417b4bc.js";import"./lttfjwcqrx.1b4580a8.js";import"./ahqmvvvdwo.5f26ab0b.js";import"./grmayyixiv.235995c1.js";import"./rjljyeabjo.45139bf6.js";import"./uhmgtxtkbf.d2960ee1.js";import"./bidgohscdr.c1c6392e.js";import"./yjojsijtce.8ecb726b.js";import"./zuwlufcons.06aa1793.js";import"./fojpcsxpug.8d4e320f.js";import"./leimrehuhc.b01d237d.js";import"./dbtshcitiy.65535b34.js";import"./cqlprvvfgm.35f3de04.js";import"./dxzirddruk.0c931827.js";import"./cpulagbmpz.56b30ae2.js";import"./roifbhqqeh.6c747b62.js";import"./apirpmdhhj.f6411902.js";import"./keyqyigzhs.1123b457.js";import"./vpqnslatsp.2b4f7d97.js";import"./pkltweausy.da416640.js";import"./csevuhegvi.a4234e48.js";import"./gqngafiwgj.f54e7641.js";import"./llijkntdrn.3cd502d4.js";import"./dewttetioe.42a22ccc.js";import"./slzllwaqxg.5949e739.js";import"./uraswjbjvv.a3964e5d.js";import"./ovwhdydpxz.9a788b1e.js";import"./fvpsxjdnbk.65cec0a7.js";import"./arrgokyedw.f152b2e9.js";import"./dkbgjpeftg.50fea4c0.js";import"./zoyhwyienr.41b111bf.js";import"./yzphkaxnan.e1528a96.js";import"./jtpkncsmvl.4eb01b74.js";import"./rezrbhuekn.d45867c1.js";import"./pqekbkupua.a6d358b4.js";import"./jtfsrjpsaq.e798ed4c.js";import"./ntinfcihbf.1df7bcb5.js";import"./rcbuhngnjq.7571580c.js";import"./rnpwwmhiur.8929a177.js";import"./yuzynnynno.04808653.js";import"./bckieywgzh.07af469a.js";import"./suvbwcpmuk.89be5575.js";import"./iwdbiahqdd.286f54bb.js";import"./cbnuzlyecr.ac68312b.js";import"./bmkpetswwt.5d06b0c1.js";import"./pinia-plugin-persist.32a83e37.js";function ot(a,m){var l=null,s=null,i=null;let c=m.split(""),p=[];function v(){if(!c.length){clearInterval(l),i=setTimeout(()=>{s=setInterval(e,200)},3e3);return}p.push(c.shift()),a.innerText=p.join("")}function e(){if(!p.length){clearInterval(s),l=setInterval(v,100);return}c.unshift(p.pop()),a.innerText=p.join("")}return e(),()=>{l&&clearInterval(l),s&&clearInterval(s),i&&clearTimeout(i)}}const st="_container_1n8sz_3",nt="_bannerImg_1n8sz_15",rt="_arrowDown_1n8sz_27",at="_arrowDown_animation_1n8sz_1",it="_banner_wave_1_1n8sz_269",lt="_wave1_1n8sz_1",ct="_banner_wave_2_1n8sz_299",mt="_wave2_1n8sz_1",pt="_bannerMain_1n8sz_885",ut="_logoName_1n8sz_907",_t="_motto_1n8sz_977",dt={container:st,bannerImg:nt,arrowDown:rt,arrowDown_animation:at,banner_wave_1:it,wave1:lt,banner_wave_2:ct,wave2:mt,bannerMain:pt,logoName:ut,"animation-before":"_animation-before_1n8sz_1","animation-after":"_animation-after_1n8sz_1",motto:_t},gt=["date-text"],vt=r("span",null,"\u203B",-1),yt={__name:"Banner",setup(a){const m=A(),l=G(),s=_(()=>m.config.bannerImg||l()),i=_(()=>m.config.logoName||"\u0F3A\u06E3\u06D6\u795E\u06E3\u06D6\u0F12\u06E3\u4ED9\u06E3\u06D6\u0F3B"),[c,p]=j();function v(){c.value&&c.value.scrollTo({top:window.innerHeight})}const e=T(null),u=_(()=>m.config.motto||"\u541B\u5B50\u85CF\u5668\u4E8E\u8EAB\uFF0C\u5F85\u65F6\u800C\u52A8\uFF01");let w=null;W(()=>{w=ot(e.value,u.value)}),Y(()=>{w&&w()});const b=T(K()),B=T(null),N=T(null);return W(()=>{const o=N.value,$=B.value,y=o.getContext("2d");let h=95;function D(){const{width:M,height:q}=o;y.clearRect(0,0,M,q);const H=Math.floor(M/10),V=M/H;for(let S=0;S<H;S++)y.save(),y.translate(V*S,0),y.fillStyle="rgba(0,0,0,0.25)",y.fillRect(0,0,V*h/100,q),y.restore()}function R(){o.width=$.offsetWidth,o.height=$.offsetHeight,D()}const J=U(R,100);R(),window.addEventListener("resize",J)}),(o,$)=>{const y=k("Picture"),h=k("Arrow");return d(),f("div",{class:t(o.$style.container),ref_key:"containerRef",ref:B},[g(y,{src:n(s),class:t(o.$style.bannerImg)},null,8,["src","class"]),r("canvas",{ref_key:"shadesWindow",ref:N,style:{"pointer-events":"none",position:"absolute",top:"0",left:"0"}},null,512),b.value?(d(),f(C,{key:0},[r("div",{class:t(o.$style.banner_wave_1)},null,2),r("div",{class:t(o.$style.banner_wave_2)},null,2)],64)):P("",!0),r("div",{class:t(o.$style.bannerMain)},[r("div",{"date-text":n(i),class:t(o.$style.logoName)},I(n(i)),11,gt),r("div",{class:t(o.$style.motto)},[r("span",{ref_key:"mottoRef",ref:e},null,512),vt],2)],2),r("div",{class:t(o.$style.arrowDown),onClick:v},[r("span",null,[g(h)])],2)],2)}}},ft={$style:dt},wt=z(yt,[["__cssModules",ft]]),$t="/assets/webp/boy.5e4019fa.webp",bt="/assets/webp/girl.43e856f8.webp",ht="_container_33tby_3",It="_leftArrow_33tby_19",kt="_rightArrow_33tby_21",Nt="_pageNum_33tby_57",Pt="_targetPage_33tby_71",Bt={container:ht,leftArrow:It,rightArrow:kt,pageNum:Nt,targetPage:Pt},Tt=["onClick"],Ct={__name:"PageSwitch",props:{pageNums:Number},setup(a){const{pageNums:m}=a,l=A(),s=_(()=>l.pageIndex),i=_(()=>{const e=s.value;return[e-2,e-1,e,e+1,e+2].filter(u=>u>=1&&u<=m)}),[c,p]=j();function v(e){typeof e=="number"&&e<=m&&e>=1&&e!==s.value&&(l.pageIndex=e,c.value&&c.value.scrollTo({top:window.innerHeight}))}return(e,u)=>{const w=k("Arrow");return a.pageNums!==0?(d(),f("div",{key:0,class:t(e.$style.container)},[E(r("span",{class:t(e.$style.leftArrow),onClick:u[0]||(u[0]=()=>v(n(s)-1))},[g(w)],2),[[L,n(s)!==1]]),n(i).at(0)>1?(d(),f("span",{key:0,class:t(e.$style.pageNum)},"...",2)):P("",!0),(d(!0),f(C,null,O(n(i),b=>(d(),f("span",{onClick:()=>v(b),key:b,class:t([e.$style.pageNum,b===n(s)?e.$style.targetPage:""]),style:{"text-decoration":"underline"}},I(b),11,Tt))),128)),n(i).at(-1)<a.pageNums?(d(),f("span",{key:1,class:t(e.$style.pageNum)},"...",2)):P("",!0),E(r("span",{class:t(e.$style.rightArrow),onClick:u[1]||(u[1]=()=>v(n(s)+1))},[g(w)],2),[[L,n(s)!==a.pageNums]])],2)):P("",!0)}}},zt={$style:Bt},Dt=z(Ct,[["__cssModules",zt]]),Mt="_container_kr02j_3",St="_postImg_kr02j_13",At="_postDetail_kr02j_21",jt="_postTitle_kr02j_39",Rt="_publishTime_kr02j_65",qt="_description_kr02j_95",Ht="_reverseItem_kr02j_153",Vt="_imgBox_kr02j_169",Wt={container:Mt,postImg:St,postDetail:At,postTitle:jt,publishTime:Rt,description:qt,reverseItem:Ht,imgBox:Vt},Et={__name:"PostCard",props:{data:Object,index:Number},setup(a){const m=et(),l=s=>m.push({name:"DetailPage",params:{id:s}});return(s,i)=>{const c=k("Picture"),p=k("Date");return d(),f("div",{class:t([s.$style.container,a.index%2?s.$style.reverseItem:""])},[r("div",{class:t(s.$style.imgBox),onClick:i[0]||(i[0]=()=>l(a.data.id))},[g(c,{lazy:"",src:a.data.img,class:t(s.$style.postImg)},null,8,["src","class"])],2),r("div",{class:t(s.$style.postDetail)},[r("div",{class:t(s.$style.postTitle),onClick:i[1]||(i[1]=()=>l(a.data.id))},I(a.data.title),3),r("div",{class:t(s.$style.publishTime)},[g(p),Z(" "+I(a.data.publishTime),1)],2),r("div",{class:t(s.$style.description),onClick:i[2]||(i[2]=()=>l(a.data.id))},I(a.data.description),3),g(x,{data:a.data.categories},null,8,["data"]),g(Q,{data:a.data.tags},null,8,["data"])],2)],2)}}},Lt={$style:Wt},Ft=z(Et,[["__cssModules",Lt]]),Gt="_postContainer_q3o3i_3",Ot="_leftBar_q3o3i_19",Jt="_rightBar_q3o3i_21",Kt="_content_q3o3i_31",Ut="_invertImg_q3o3i_79",xt="_noPosts_q3o3i_105",Qt="_posts_q3o3i_121",Xt={postContainer:Gt,leftBar:Ot,rightBar:Jt,content:Kt,invertImg:Ut,noPosts:xt,posts:Qt},Yt={__name:"index",setup(a){const m=A(),[l,s]=X(),i=G(),c=_(()=>m.postSet.getMds().map($=>({...$,img:$.img||i(),description:$.description||"\u8FDB\u5165\u67E5\u770B\u8BE6\u60C5..."}))),p=_(()=>m.pageIndex),v=_(()=>{var o;return((o=m.config.post)==null?void 0:o.numInPage)||10}),e=_(()=>c.value.slice((p.value-1)*v.value,p.value*v.value)),u=_(()=>Math.ceil(c.value.length/v.value)),w=_(()=>c.value.length===0?"\u6682\u672A\u53D1\u5E03\u5185\u5BB9~":"\u6CA1\u6709\u66F4\u591A\u4E86~"),[b,B]=j(),N=_(()=>`--t: ${Math.max(60,B.value-window.innerHeight+200)}px;`);return(o,$)=>{const y=k("Picture");return d(),f(C,null,[g(wt),r("div",{class:t(o.$style.postContainer)},[r("div",{class:t(o.$style.leftBar)},[g(y,{src:n($t),class:t([n(l)?"":o.$style.invertImg]),style:F(n(N))},null,8,["src","class","style"])],2),r("div",{class:t(o.$style.content)},[r("div",{class:t(o.$style.posts)},[(d(!0),f(C,null,O(n(e),(h,D)=>(d(),tt(Ft,{index:D,data:h,key:h.id},null,8,["index","data"]))),128)),n(p)===n(u)||n(u)===0?(d(),f("div",{key:0,class:t(o.$style.noPosts)},I(n(w)),3)):P("",!0)],2),g(Dt,{pageNums:n(u)},null,8,["pageNums"])],2),r("div",{class:t(o.$style.rightBar)},[g(y,{src:n(bt),class:t([n(l)?"":o.$style.invertImg]),style:F(n(N))},null,8,["src","class","style"])],2)],2)],64)}}},Zt={$style:Xt},bo=z(Yt,[["__cssModules",Zt]]);export{bo as default};
