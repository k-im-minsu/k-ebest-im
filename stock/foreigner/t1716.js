const lib=require("k-lib-im");
/**
 * @typedef {Object} t1716 [주식] 외인/기관 - 외인기관종목별동향2
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1716_OutBlock>} t1716OutBlock
 */
/**
 * @typedef {Object} t1716_OutBlock [주식] 외인/기관 - 외인기관종목별동향2 
 * @property {string} date 일자(8)
 * @property {number} close 종가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} krx_0008 거래소_개인(12)
 * @property {number} krx_0018 거래소_기관(12)
 * @property {number} krx_0009 거래소_외국인(12)
 * @property {number} pgmvol 프로그램(12)
 * @property {number} fsc_listing 금감원_외인보유주식수(12)
 * @property {number} fsc_sjrate 금감원_소진율(6.2)
 * @property {number} fsc_0009 금감원_외국인(12)
 * @property {number} gm_volume 공매도수량(12)
 * @property {number} gm_value 공매도대금(12)
 */
/**
 * [주식] 외인/기관 - 외인기관종목별동향2 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} gubun 구분(0:일간순매수1:기간누적순매수)(1) - 0:일간순매수 1:기간내누적순매수
 * @param {string} fromdt 시작일자(8) - YYYYMMDD
 * @param {string} todt 종료일자(8) - YYYYMMDD
 * @param {number} prapp PR감산적용율(3) - 프로그램매매 감산 적용율 - %단위
 * @param {string} prgubun PR적용구분(0:적용안함1:적용)(1) - 0:미적용 1:적용
 * @param {string} orggubun 기관적용(1) - 0:미적용 1:적용
 * @param {string} frggubun 외인적용(1) - 0:미적용 1:적용
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1716|null>}  실패시 null 반환
 */
module.exports = async(shcode="",gubun="",fromdt="",todt="",prapp=0,prgubun="",orggubun="",frggubun="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1716",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1716InBlock":{
        "shcode":shcode,
        "gubun":gubun,
        "fromdt":fromdt,
        "todt":todt,
        "prapp":prapp,
        "prgubun":prgubun,
        "orggubun":orggubun,
        "frggubun":frggubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/frgr-itt",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}