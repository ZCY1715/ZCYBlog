const l=(s,e)=>{const t=s.storage||sessionStorage,a=s.key||e.$id;if(s.paths){const r=s.paths.reduce((i,n)=>(i[n]=e.$state[n],i),{});t.setItem(a,JSON.stringify(r))}else t.setItem(a,JSON.stringify(e.$state))};var S=({options:s,store:e})=>{var t,a,r,i;if((t=s.persist)!=null&&t.enabled){const n=[{key:e.$id,storage:sessionStorage}],c=(r=(a=s.persist)==null?void 0:a.strategies)!=null&&r.length?(i=s.persist)==null?void 0:i.strategies:n;c.forEach(o=>{const g=o.storage||sessionStorage,u=o.key||e.$id,d=g.getItem(u);d&&(e.$patch(JSON.parse(d)),l(o,e))}),e.$subscribe(()=>{c.forEach(o=>{l(o,e)})})}};export{S as i};