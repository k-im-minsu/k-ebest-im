const lib=require("k-lib-im");
/**
 * @typedef {Object} t1633 [주식] 프로그램 - 기간별프로그램매매추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1633_OutBlock} t1633OutBlock
 * @property {Array<t1633_OutBlock1>} t1633OutBlock1
 */
/**
 * @typedef {Object} t1633_OutBlock [주식] 프로그램 - 기간별프로그램매매추이 
 * @property {string} date 날짜(8)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1633_OutBlock1 [주식] 프로그램 - 기간별프로그램매매추이 
 * @property {string} date 일자(8)
 * @property {number} jisu KP200(6.2)
 * @property {string} sign 대비구분(1)
 * @property {number} change 대비(6.2)
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
 * [주식] 프로그램 - 기간별프로그램매매추이 (초당 1건 제한)
 * @param {string} gubun 시장구분(1) - 0#거래소 1#코스닥
 * @param {string} gubun1 금액수량구분(1) - 0:금액 1:수량
 * @param {string} gubun2 수치누적구분(1) - 0#수치 1#누적
 * @param {string} gubun3 일주월구분(1) - 1#일 2#주 3#월
 * @param {string} fdate from일자(8) - 
 * @param {string} tdate to일자(8) - 
 * @param {string} gubun4 직전대비증감구분(1) - 0:Default 1:직전대비증감
 * @param {string} date 날짜(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 date 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1633|null>}  실패시 null 반환
 */
module.exports= async(gubun="",gubun1="",gubun2="",gubun3="",fdate="",tdate="",gubun4="",date="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1633",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1633InBlock":{
        "gubun":gubun,
        "gubun1":gubun1,
        "gubun2":gubun2,
        "gubun3":gubun3,
        "fdate":fdate,
        "tdate":tdate,
        "gubun4":gubun4,
        "date":date
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