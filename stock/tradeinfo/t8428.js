const lib=require("k-lib-im");
/**
 * @typedef {Object} t8428 [주식] 투자정보 - 증시주변자금추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t8428_OutBlock} t8428OutBlock
 * @property {Array<t8428_OutBlock1>} t8428OutBlock1
 */
/**
 * @typedef {Object} t8428_OutBlock [주식] 투자정보 - 증시주변자금추이 
 * @property {string} date 날짜CTS(8)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t8428_OutBlock1 [주식] 투자정보 - 증시주변자금추이 
 * @property {string} date 일자(8)
 * @property {number} jisu 지수(7.2)
 * @property {string} sign 대비구분(1)
 * @property {number} change 대비(6.2)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} custmoney 고객예탁금_억원(12)
 * @property {number} yecha 예탁증감_억원(12)
 * @property {number} vol 회전율(6.2)
 * @property {number} outmoney 미수금_억원(12)
 * @property {number} trjango 신용잔고_억원(12)
 * @property {number} futymoney 선물예수금_억원(12)
 * @property {number} stkmoney 주식형_억원(8)
 * @property {number} mstkmoney 혼합형_억원(주식)(8)
 * @property {number} mbndmoney 혼합형_억원(채권)(8)
 * @property {number} bndmoney 채권형_억원(8)
 * @property {number} bndsmoney 필러(구.단기채권)(8)
 * @property {number} mmfmoney MMF_억원(주식)(8)
 */
/**
 * [주식] 투자정보 - 증시주변자금추이 (초당 1건 제한)
 * @param {string} fdate from일자(8) - 출력 기간의 시작일
 * @param {string} tdate to일자(8) - 출력 기간의 종료일
 * @param {string} gubun 구분(1) - 1:예탁금 2:수익증권
 * @param {string} key_date 날짜(8) - 다음 조회시 사용함. 다음 조회시 OutBlock의 date 필드값 입력. 처음 조회시 Space
 * @param {string} upcode 업종코드(3) - 001:코스피 301:코스닥
 * @param {number} cnt 조회건수(3) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t8428|null>}  실패시 null 반환
 */
module.exports= async(fdate="",tdate="",gubun="",key_date="",upcode="",cnt=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t8428",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t8428InBlock":{
        "fdate":fdate,
        "tdate":tdate,
        "gubun":gubun,
        "key_date":key_date,
        "upcode":upcode,
        "cnt":cnt
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investinfo",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}