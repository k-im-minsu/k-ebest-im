const lib=require("k-lib-im");
/**
 * @typedef {Object} t1662 [주식] 프로그램 - 시간대별프로그램매매추이_차트
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1662_OutBlock>} t1662OutBlock
 */
/**
 * @typedef {Object} t1662_OutBlock [주식] 프로그램 - 시간대별프로그램매매추이_차트 
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
 * @property {number} volume 거래량(12)
 */
/**
 * [주식] 프로그램 - 시간대별프로그램매매추이_차트 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 0#코스피 1#코스닥
 * @param {string} gubun1 금액수량구분(1) - 0:금액 1:수량
 * @param {string} gubun3 전일구분(1) - 0:당일 1:전일
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1662|null>}  실패시 null 반환
 */
 exports.시간대별프로그램매매추이_차트 = async(gubun="",gubun1="",gubun3="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1662",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1662InBlock":{
        "gubun":gubun,
        "gubun1":gubun1,
        "gubun3":gubun3
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