## 이베스트 투자증권 OPEN API Library
이베스트의 Open API(RESTful) 사용을 간단히 하기 위한 node.js 모듈입니다  

----
  
### 1. 초기화

    const ebest=require('k-ebest-im')({AppKey},{AppSecretKey},{모의투자여부},{실시간사용여부});  
  
AppKey - 이베스트 open api 발급 키  
AppSecretKey - 이베스트 open api 발급 비밀 키  
모의투자여부 - [(false)/true] true일때 웹소켓 주소 모의투자 서버로 사용  
실시간사용여부 - [false/(true)] 웹소켓 연결을 사용할지 여부(실시간 사용시 true)  
  
### 2. tr 요청

    ...(1.)  
    const tr = await ebest.주식.시세.주식분별주가조회('005930','1','',10);  
    if(tr!==null){//null이면 실패  
        for(var obj of tr.t1302OutBlock1){//배열 데이터  
            console.log(obj.close);//종가  
        }  
    }  

### 3. 실시간 요청

    ...(1.)  
    const sub=await ebest.주식.실시간.KOSPI체결.등록('005930',(data)=>{  
        //등록 후 체결이 있을경우 함수 실행  
        console.log(obj.price);//현재가  
    });  
    console.log(sub);//실시간 등록 성공 여부  
    const unsub=await ebest.주식.실시간.KOSPI체결.해제('005930');  
    console.log(unsub);//실시간 해제 성공 여부  

실시간 해제시에는 등록했을때의 동일 키 사용 필수