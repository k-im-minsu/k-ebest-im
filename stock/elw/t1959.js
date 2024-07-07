const lib=require("k-lib-im");
/**
 * @typedef {Object} t1959 [주식] ELW - LP대상종목정보조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1959_OutBlock1>} t1959OutBlock1
 */
/**
 * @typedef {Object} t1959_OutBlock1 [주식] ELW - LP대상종목정보조회 
 * @property {string} shcode 종목코드(6)
 * @property {string} hname 종목명(40)
 * @property {string} price 현재가(12)
 * @property {string} sign 부호(1)
 * @property {string} change 대비(12)
 * @property {number} rate 등락율(5.2)
 * @property {string} volume 누적거래량(12)
 * @property {string} value 누적거래대금(12)
 * @property {string} lp_gb LP주문가능여부(4)
 * @property {string} lp_mem_nm1 LP회원사명1(20)
 * @property {string} lp_mem_nm2 LP회원사명2(20)
 * @property {string} lp_mem_nm3 LP회원사명3(20)
 * @property {string} lp_mem_nm4 LP회원사명4(20)
 * @property {string} lp_mem_nm5 LP회원사명5(20)
 * @property {string} lp_min_qty LP최소호가수량(10)
 * @property {string} lp_st_date LP시작일(8)
 * @property {string} lp_end_date LP종료일(8)
 * @property {number} lp_spread LP스프레드(5.2)
 */
/**
 * [주식] ELW - LP대상종목정보조회 (초당 2건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1959|null>}  실패시 null 반환
 */
module.exports = async(shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1959",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1959InBlock":{
        "shcode":shcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}