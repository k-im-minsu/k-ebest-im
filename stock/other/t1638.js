const lib=require("k-lib-im");
/**
 * @typedef {Object} t1638 [주식] 기타 - 종목별잔량_사전공시
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1638_OutBlock>} t1638OutBlock
 */
/**
 * @typedef {Object} t1638_OutBlock [주식] 기타 - 종목별잔량_사전공시 
 * @property {number} rank 순위(4)
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} sigatotrt 시총비중(6.2)
 * @property {number} obuyvol 순매수잔량(12)
 * @property {number} buyrem 매수잔량(12)
 * @property {number} psgvolume 매수공시수량(12)
 * @property {number} sellrem 매도잔량(12)
 * @property {number} pdgvolume 매도공시수량(12)
 * @property {number} sigatot 시가총액(20)
 * @property {string} shcode 종목코드(6)
 */
/**
 * [주식] 기타 - 종목별잔량_사전공시 (초당 1건 제한)
 * @param {string} gubun1 구분(1) - 1 : 코스피 2 : 코스닥
 * @param {string} shcode 종목코드(6) - 
 * @param {string} gubun2 정렬(1) - 1 : 시가총액비중 2 : 순매수잔량상위 3 : 순매수잔량하위 4 : 매수잔량 5 : 매수공시수량 6 : 매도잔량 7 : 매도공시수량
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1638|null>}  실패시 null 반환
 */
module.exports = async(gubun1="",shcode="",gubun2="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1638",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1638InBlock":{
        "gubun1":gubun1,
        "shcode":shcode,
        "gubun2":gubun2
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