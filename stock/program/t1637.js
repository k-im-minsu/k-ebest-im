const lib=require("k-lib-im");
/**
 * @typedef {Object} t1637 [주식] 프로그램 - 종목별프로그램매매추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1637_OutBlock} t1637OutBlock
 * @property {Array<t1637_OutBlock1>} t1637OutBlock1
 */
/**
 * @typedef {Object} t1637_OutBlock [주식] 프로그램 - 종목별프로그램매매추이 
 * @property {number} cts_idx IDXCTS(4)
 */
/**
 * @typedef {Object} t1637_OutBlock1 [주식] 프로그램 - 종목별프로그램매매추이 
 * @property {string} date 일자(8)
 * @property {string} time 시간(6)
 * @property {number} price 현재가(8)
 * @property {string} sign 대비구분(1)
 * @property {number} change 대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} svalue 순매수금액(15)
 * @property {number} offervalue 매도금액(15)
 * @property {number} stksvalue 매수금액(15)
 * @property {number} svolume 순매수수량(12)
 * @property {number} offervolume 매도수량(12)
 * @property {number} stksvolume 매수수량(12)
 * @property {string} shcode 종목코드(6)
 * @property {string} ex_shcode 거래소별단축코드(10)
 */
/**
 * [주식] 프로그램 - 종목별프로그램매매추이 (초당 1건 제한)
 * @param {string} gubun1 수량금액구분(0:수량1:금액)(1) - 
 * @param {string} gubun2 시간일별구분(0:시간1:일자)(1) - 
 * @param {string} shcode 종목코드(6) - 
 * @param {string} date 일자(8) - 일별 연속 조회시에 이전 조회한 OutBlock1의 마지막 Row의 date 값으로 설정
 * @param {string} time 시간(6) - 시간별 연속 조회시에 이전 조회한 OutBlock1의 마지막 Row의 time 값으로 설정
 * @param {number} cts_idx IDXCTS(9999:차트)(4) - 차트 조회시에만 9999로 입력
 * @param {string} exchgubun 거래소구분코드(1)
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1637|null>}  실패시 null 반환
 */
module.exports = async(gubun1="",gubun2="",shcode="",date="",time="",cts_idx=0,exchgubun="K",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1637",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1637InBlock":{
        "gubun1":gubun1,
        "gubun2":gubun2,
        "shcode":shcode,
        "date":date,
        "time":time,
        "cts_idx":cts_idx,
        "exchgubun":exchgubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/program",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}