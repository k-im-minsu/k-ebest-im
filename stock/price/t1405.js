const lib=require("k-lib-im");
/**
 * @typedef {Object} t1405 [주식] 시세 - 투자경고_매매정지_정리매매조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1405_OutBlock} t1405OutBlock
 * @property {Array<t1405_OutBlock1>} t1405OutBlock1
 */
/**
 * @typedef {Object} t1405_OutBlock [주식] 시세 - 투자경고_매매정지_정리매매조회 
 * @property {string} cts_shcode 종목코드_CTS(6)
 */
/**
 * @typedef {Object} t1405_OutBlock1 [주식] 시세 - 투자경고_매매정지_정리매매조회 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {string} date 지정일(8)
 * @property {string} edate 해제일(8)
 * @property {string} shcode 종목코드(6)
 */
/**
 * [주식] 시세 - 투자경고_매매정지_정리매매조회 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 0:전체, 1:코스피, 2:코스닥
 * @param {string} jongchk 종목체크(1) - 1 : 투자경고, 2 : 매매정지, 3 : 정리매매, 4 : 투자주의, 5 : 투자위험, 6 : 위험예고, 7 : 단기과열지정, 8 : 이상급등종목, 9 : 상장주식수 부족
 * @param {string} cts_shcode 종목코드_CTS(6) - 처음 조회시는 Space, 연속 조회시에 이전 조회한 OutBlock의 cts_shcode 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1405|null>}  실패시 null 반환
 */
module.exports = async(gubun="",jongchk="",cts_shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1405",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1405InBlock":{
        "gubun":gubun,
        "jongchk":jongchk,
        "cts_shcode":cts_shcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/market-data",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}