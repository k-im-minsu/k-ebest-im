module.exports=function(appkey,appsecretkey,ismoyee,usesocket){
    const WebSocket = require('ws');
const lib=require('k-lib-im')
const url='https://openapi.ls-sec.co.kr:8080';
const url_real='wss://openapi.ls-sec.co.kr:9443/websocket';
const url_realm='wss://openapi.ls-sec.co.kr:29443/websocket';
const getToken=async (isBearer=true)=>{
    if(__ebestim.expires_<=lib.time_tick()){
        var ok=true;
       /* if(__ebestim.expires_===0){
            if(fs.existsSync('./token.js')){
                var t= JSON.parse(fs.readFileSync('./token.js'));
                if(t.expires_&&t.expires_>lib.time_tick()){
                    Object.assign(__ebestim,t)
                    ok=false;
                }
            }
        }*/
        if(ok){
           token= await login();
            while(token===null){
               await lib.sleep(10000);
               token= await login();
            }
            token.expires_=lib.time_tick()+token.expires_in*1000-60000;
            Object.assign(__ebestim,token)
           // fs.writeFile('./token.json',JSON.stringify(token))
        }
    }
    if(isBearer){
        return 'Bearer '+token.access_token;
    }else{
        return token.access_token;
    }
}
const login= async()=>{
    const header={
        'content-type':'application/x-www-form-urlencoded'
    }
    const body={
        'grant_type':'client_credentials',
        'appkey':appkey,
        'appsecretkey':appsecretkey,
        'scope':'oob',
    }
  const result= await lib.http.post_urlencoded(url+'/oauth2/token',header,body);
  if(result.status===200){
   return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}
const logout= async()=>{
    if(token===null)return true;
    const header={
        'content-type':'application/x-www-form-urlencoded'
    }
    const body={
        'token_type_hint':'Bearer',
        'appkey':appkey,
        'appsecretkey':appsecretkey,
        'token':token.access_token,
    }
  const result= await lib.http.post_urlencoded(url+'/oauth2/revoke',header,body);
  if(result.status===200){
    return true;
  }else{
    console.log(result.status+" - "+await result.text());
    return false;
  }
}
const reconnect_interval=1000;
let socket;
var isconnect=false;
var result_event={}
if(usesocket){
    var connect=()=>{
        if(ismoyee){
            socket=new WebSocket(url_realm)
        }else{
            socket=new WebSocket(url_real)
        }
        socket.onopen =async ()=>{
            if(ismoyee){
                console.log('Log. 모의투자 소켓 연결');
            }else{
                console.log('Log. 실전투자 소켓 연결');
            }
            isconnect=true;
          const k=  Object.keys(result_event)
          for(var key of k){
            const j=k[key];
            const kk=Object.keys(j);
            for(var kkey of kk){
                if(!isconnect)return;
                const jj=j[kkey];
                socket.send(JSON.stringify({header:{
                    token:await getToken(),
                    tr_type:(jj.trkey.length===0)?'1':'3'
                },body:{
                    tr_cd:jj.trcode,
                    tr_key:jj.trkey
                }}));
            }
          }
        };
        socket.onmessage = function (event) {
            const j= JSON.parse(event.data)
            if(!j.body)return;
           const ev=result_event[j.header.tr_cd];
           if(ev){
            if(!j.header.tr_key)j.header.tr_key=''
            const event=ev[j.header.tr_key];
            if(event){
                event.ev(j.body);
            }
           }
        }
        socket.onclose = function(){
            if(isconnect){
                console.log("Log. 서버 웹소켓 연결 끊김, 연결 재시도...");
            }
            isconnect=false;
            setTimeout(connect, reconnect_interval);
        }
        socket.onerror = function(event){
            console.log(event)
        }
    }
    connect();
}

const realadd=async(trcode,trkey='',result)=>{
    if(!usesocket){
        console.log('Err. 실시간 소켓을 사용중이지 않습니다')
        return;
    }
    var ev=result_event[trcode];
    if(!ev){
        ev={};
        ev[trkey]={
            ev:result,
            trcode:trcode,
            trkey:trkey
        }
        result_event[trcode]=ev;
    }else{
        if(!ev[trkey]){
            ev[trkey]={
                ev:result,
                trcode:trcode,
                trkey:trkey
            }
        }else{
            console.log('Warn. 이미 등록된 tr_cd:'+ev[trkey].trcode+", tr_key:"+ev[trkey].trkey);
            return false;
        }
    }
    if(isconnect){
        socket.send(JSON.stringify({header:{
            token:await getToken(false),
            tr_type:(trkey.length===0)?'1':'3'
        },body:{
            tr_cd:trcode,
            tr_key:trkey
        }}));
    }
    return true;
}
const realdel=async(trcode,trkey='')=>{
    if(!usesocket){
        console.log('Err. 실시간 소켓을 사용중이지 않습니다')
        return false;
    }
    const ev=result_event[trcode];
    if(ev){
        if(ev[trkey]){
            delete ev[trkey];
        }
    }
    if(isconnect){
        socket.send(JSON.stringify({header:{
            token:await getToken(false),
            tr_type:(trkey.length===0)?'2':'4'
        },body:{
            tr_cd:trcode,
            tr_key:trkey
        }}));
    }
    return true;
}
global.__ebestim={expires_:0,get_token:getToken,url:url,realadd:realadd,realdel:realdel}
    return this;
};