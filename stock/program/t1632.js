const lib=require("k-lib-im");
/**
 * @typedef {Object} t1632 [주식] 프로그램 - 시간대별프로그램매매추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1632_OutBlock} t1632OutBlock
 * @property {Array<t1632_OutBlock1>} t1632OutBlock1
 */
/**
 * @typedef {Object} t1632_OutBlock [주식] 프로그램 - 시간대별프로그램매매추이 
 * @property {string} date 날짜CTS(8)
 * @property {string} time 시간CTS(6)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1632_OutBlock1 [주식] 프로그램 - 시간대별프로그램매매추이 
 * @property {string} time 시간(6)
 * @property {number} k200jisu KP200(6.2)
 * @property {string} sign 대비구분(1)
 * @property {number} change 대비(6.2)
 * @property {number} k200basis BASIS(6.2)
 * @property {number} tot3 전체순매수(12)
 * @property {number} tot1 전체매수(12)
 * @property {number} tot2 전체매도(12)
 * @property {number} cha3 차익순매수(12)
 * @property {number} cha1 차익매수(12)
 * @property {number} cha2 차익매도(12)
 * @property {number} bcha3 비차익순매수(12)
 * @property {number} bcha1 비차익매수(12)
 * @property {number} bcha2 비차익매도(12)
 */
/**
 * [주식] 프로그램 - 시간대별프로그램매매추이 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 0#거래소 1#코스닥
 * @param {string} gubun1 금액수량구분(1) - 0:금액 1:수량
 * @param {string} gubun2 직전대비증감(1) - 1:직전대비증감
 * @param {string} gubun3 전일구분(1) - 1:전일분
 * @param {string} date 일자(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 date 값으로 설정
 * @param {string} time 시간(6) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 time 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1632|null>}  실패시 null 반환
 */
module.exports= async(gubun="",gubun1="",gubun2="",gubun3="",date="",time="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1632",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1632InBlock":{
        "gubun":gubun,
        "gubun1":gubun1,
        "gubun2":gubun2,
        "gubun3":gubun3,
        "date":date,
        "time":time
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/program",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}