import{_ as g,u as B}from"./index.c61da04d.js";import{a as z}from"./vue-router.134d7d19.js";import{u as P}from"./useTitle.7375eefc.js";import{u as n,g as h,R as M,r as v,o as y,c as w,b as u,x as _,B as i,e as p,A as f,n as j,z as C,F as N}from"./@vue.01ebc98a.js";import"./pinia.f0778ef2.js";import"./uxzavjzqhu.b9877670.js";import"./wvefxqhkqb.6ffee35a.js";import"./tifosatkxs.6a39561a.js";import"./xdfzrjzrfn.870bc4fc.js";import"./ebszvgtdnn.11d2b3cb.js";import"./nlnlvyrnpe.3c9b2812.js";import"./xqvowwxknp.480a8ea3.js";import"./snufalqnob.1c192ce8.js";import"./qgdugdsnsd.aaa46019.js";import"./judmkhzrfn.326499df.js";import"./nftggdnqjp.a0016ef6.js";import"./exvctxcssq.eb2c7c9e.js";import"./uuosujmdkz.c3b398a3.js";import"./qowhqlxtvj.9389b825.js";import"./kisjkmolgi.b56ededf.js";import"./yfglidaxje.046ad66b.js";import"./ivisjlmbod.6cf02d80.js";import"./oruubivfhr.c468d21d.js";import"./yxzcacojwc.2c375091.js";import"./zeczbkxvwt.e0c2f257.js";import"./gvrzuojefn.d3cb51bf.js";import"./rmaoqpkrat.a5bc26ec.js";import"./hoxtcyfola.749e519e.js";import"./dsgcvorfcz.4cd88ba6.js";import"./qpkumbgmip.ca362353.js";import"./okdnktbpym.ec47f11b.js";import"./yzewcwqmbp.577544ae.js";import"./iqaktjtfcg.a4641d9a.js";import"./pbjrgfjslz.7daf38d7.js";import"./gvynhnqptk.e7bb054e.js";import"./uxyccbbtnb.347075c8.js";import"./vpurhfjxoy.7912dded.js";import"./klquggvddw.25cad5e5.js";import"./rceuctcpgq.afd4f1d6.js";import"./dapzikembo.57480a10.js";import"./xdsttvaeup.ca5a8ad7.js";import"./nkdtjpncco.ce48370f.js";import"./pikbljbicd.0f2d4374.js";import"./andjnruapc.9af1a0b4.js";import"./sxzqqrtmvc.464ec527.js";import"./ejeiwvwgwd.5d61dee0.js";import"./fvbskwjrgn.4093637c.js";import"./qyibdrfsiw.bc4283aa.js";import"./xexmezilhf.5545d248.js";import"./lcykfdbtte.c65e5ec6.js";import"./fmwmyrecqo.11c4aa73.js";import"./ihundeciic.b083b7c0.js";import"./lfxlowscnz.6e1888c2.js";import"./fwxdzzxszr.b1c904a6.js";import"./cduzcajfap.16785066.js";import"./wngbdgopgz.2961d5f8.js";import"./ruabyikamv.6db9bd59.js";import"./bknjyfdzng.f72d9fa0.js";import"./ainhnuzxju.46fc6d21.js";import"./anhbklbyld.1645f71f.js";import"./agvkuluewx.f335b1c7.js";import"./bruzejmdus.bf049ddb.js";import"./vhkadfinmf.bf634be6.js";import"./eukvxkbhaf.d964635e.js";import"./iwqqzfwmrl.3c7b0abf.js";import"./wgtkmhyhfh.3d9780d8.js";import"./xrwhhrkrye.259886c2.js";import"./zmqsptinjv.69f5fb53.js";import"./ylgomylkwd.b5577e2a.js";import"./lhhpetbjqe.59b494c1.js";import"./qbnoywispz.c769b952.js";import"./axymtvlzmh.c0a2f142.js";import"./dwyikvxxmi.aad2c54a.js";import"./dylyopjcbv.e8235293.js";import"./babkqjpelw.35979529.js";import"./nibdtpguhi.0c23e1ed.js";import"./lrjlpxcoeu.309d4e4e.js";import"./pinia-plugin-persist.32a83e37.js";const b="/assets/png/defaultBg.b301f270.png",k="_container_w0cuz_3",A="_img_w0cuz_15",F="_main_w0cuz_25",I="_title_w0cuz_49",R="_description_w0cuz_63",S={container:k,img:A,main:F,title:I,description:R},V={__name:"Banner",props:["data"],setup(d){const r=d,a=j("config"),c=n(()=>a.value.api.randomPoetry);function l(){return new Promise(o=>{fetch(c.value).then(m=>m.json()).then(m=>o(m.content))})}const t=h(r.data.description);M(async()=>{t.value||(t.value=await l())});const e=n(()=>r.data.title);P(e);const s=n(()=>r.data.img||b);return(o,m)=>{const $=v("Picture");return y(),w("div",{class:i(o.$style.container)},[u($,{lazy:"",src:_(s),class:i(o.$style.img)},null,8,["src","class"]),p("div",{class:i(o.$style.main)},[p("div",{class:i(o.$style.title)},f(_(e)),3),p("div",{class:i(o.$style.description)},f(t.value),3)],2)],2)}}},D={$style:S},E=g(V,[["__cssModules",D]]),T="_container_1jmvg_3",q="_wrap_1jmvg_17",x={container:T,wrap:q},G={__name:"index",setup(d){const r=B(),a=z(),c=n(()=>{const{name:t}=a,e=r.pagesInfo.find(s=>s.pageName===t);return{title:e.title,...e.config}}),l=n(()=>r.config);return C("config",l),(t,e)=>{const s=v("router-view");return y(),w(N,null,[u(E,{data:_(c)},null,8,["data"]),p("div",{class:i(t.$style.container)},[p("div",{class:i(t.$style.wrap)},[u(s)],2)],2)],64)}}},H={$style:x},fo=g(G,[["__cssModules",H]]);export{fo as default};
