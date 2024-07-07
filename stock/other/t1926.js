const lib=require("k-lib-im");
/**
 * @typedef {Object} t1926 [주식] 기타 - 종목별신용정보
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1926_OutBlock} t1926OutBlock
 */
/**
 * @typedef {Object} t1926_OutBlock [주식] 기타 - 종목별신용정보 
 * @property {number} ynvolume 융자신규수량(8)
 * @property {number} ysvolume 융자상환수량(8)
 * @property {number} yjvolume 융자잔고수량(8)
 * @property {number} yvchange 융자수량대비(8)
 * @property {number} ygrate 융자공여율(9.2)
 * @property {number} yjrate 융자잔고율(9.2)
 * @property {number} ynprice 융자신규금액(8)
 * @property {number} ysprice 융자상환금액(8)
 * @property {number} yjprice 융자잔고금액(8)
 * @property {number} yachange 융자금액대비(8)
 * @property {number} dnvolume 대주신규수량(8)
 * @property {number} dsvolume 대주상환수량(8)
 * @property {number} djvolume 대주잔고수량(8)
 * @property {number} dvchange 대주수량대비(8)
 * @property {number} dgrate 대주공여율(9.2)
 * @property {number} djrate 대주잔고율(9.2)
 * @property {number} dnprice 대주신규금액(8)
 * @property {number} dsprice 대주상환금액(8)
 * @property {number} djprice 대주잔고금액(8)
 * @property {number} dachange 대주금액대비(8)
 * @property {string} mmdate 결제일(8)
 * @property {number} close 결제일종가(8)
 * @property {number} volume 결제일거래량(10)
 * @property {number} value 결제일거래대금(12)
 * @property {number} pr5days 주가5일증가율(9.2)
 * @property {number} pr20days 주가20일증가율(9.2)
 * @property {number} yj5days 융자5일증가율(9.2)
 * @property {number} yj20days 융자20일증가율(9.2)
 * @property {number} dj5days 대주5일증가율(9.2)
 * @property {number} dj20days 대주20일증가율(9.2)
 */
/**
 * [주식] 기타 - 종목별신용정보 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1926|null>}  실패시 null 반환
 */
module.exports = async(shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1926",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1926InBlock":{
        "shcode":shcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/etc",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}