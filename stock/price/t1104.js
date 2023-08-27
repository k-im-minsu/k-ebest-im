const lib=require("k-lib-im");
/**
 * @typedef {Object} t1104 [주식] 시세 - 주식현재가시세메모
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1104_OutBlock} t1104OutBlock
 * @property {Array<t1104_OutBlock1>} t1104OutBlock1
 */
/**
 * @typedef {Object} t1104_OutBlock [주식] 시세 - 주식현재가시세메모 
 * @property {string} nrec 출력건수(2)
 */
/**
 * @typedef {Object} t1104_OutBlock1 [주식] 시세 - 주식현재가시세메모 
 * @property {string} indx 인덱스(1)
 * @property {string} gubn 조건구분(1)
 * @property {string} vals 출력값(8)
 */
/**
 * [주식] 시세 - 주식현재가시세메모 (초당 3건 제한)
 * @param {string} code 종목코드(6) - 
 * @param {string} nrec 건수(2) - t1104InBlock1 의 개수
 * @param {string} indx 인덱스(1) - t1104InBlock1 의 Occurs Index(0부터 시작)
 * @param {string} gubn 조건구분(1) - 1:시세 2:최고저가 3:Pivot 4:이동평균선
 * @param {string} dat1 데이타1(1) - 1:시가 2:고가 3:저가 4:가중평균가
 * @param {string} dat2 데이타2(8) - 1:당일 2:전일
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1104|null>}  실패시 null 반환
 */
 exports.주식현재가시세메모 = async(code="",nrec="",indx="",gubn="",dat1="",dat2="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1104",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1104InBlock":{
    "t1104InBlock1":{
        "code":code,
        "nrec":nrec,
        "indx":indx,
        "gubn":gubn,
        "dat1":dat1,
        "dat2":dat2
       }
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/market-data",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}