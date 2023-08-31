const lib=require("k-lib-im");
/**
 * @typedef {Object} t1305 [주식] 시세 - 기간별주가
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1305_OutBlock} t1305OutBlock
 * @property {Array<t1305_OutBlock1>} t1305OutBlock1
 */
/**
 * @typedef {Object} t1305_OutBlock [주식] 시세 - 기간별주가 
 * @property {number} cnt CNT(4)
 * @property {string} date 날짜(8)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1305_OutBlock1 [주식] 시세 - 기간별주가 
 * @property {string} date 날짜(8)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} close 종가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} diff_vol 거래증가율(10.2)
 * @property {number} chdegree 체결강도(6.2)
 * @property {number} sojinrate 소진율(6.2)
 * @property {number} changerate 회전율(6.2)
 * @property {number} fpvolume 외인순매수(12)
 * @property {number} covolume 기관순매수(12)
 * @property {string} shcode 종목코드(6)
 * @property {number} value 누적거래대금(단위:백만)(12)
 * @property {number} ppvolume 개인순매수(12)
 * @property {string} o_sign 시가대비구분(1)
 * @property {number} o_change 시가대비(8)
 * @property {number} o_diff 시가기준등락율(6.2)
 * @property {string} h_sign 고가대비구분(1)
 * @property {number} h_change 고가대비(8)
 * @property {number} h_diff 고가기준등락율(6.2)
 * @property {string} l_sign 저가대비구분(1)
 * @property {number} l_change 저가대비(8)
 * @property {number} l_diff 저가기준등락율(6.2)
 * @property {number} marketcap 시가총액(단위:백만)(12)
 */
/**
 * [주식] 시세 - 기간별주가 (초당 1건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {number} dwmcode 일주월구분(1) - 1#일, 2#주, 3#월
 * @param {string} date 날짜(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 date 값으로 설정
 * @param {number} idx IDX(4) - 사용안함(Space)
 * @param {number} cnt 건수(4) - 1 이상
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1305|null>}  실패시 null 반환
 */
module.exports = async(shcode="",dwmcode=0,date="",idx=0,cnt=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1305",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1305InBlock":{
        "shcode":shcode,
        "dwmcode":dwmcode,
        "date":date,
        "idx":idx,
        "cnt":cnt
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/market-data",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}