const lib=require("k-lib-im");
/**
 * @typedef {Object} t3518 [주식] 투자정보 - 해외실시간지수
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t3518_OutBlock} t3518OutBlock
 * @property {Array<t3518_OutBlock1>} t3518OutBlock1
 */
/**
 * @typedef {Object} t3518_OutBlock [주식] 투자정보 - 해외실시간지수 
 * @property {string} cts_date CTS_DATE(8)
 * @property {string} cts_time CTS_TIME(6)
 */
/**
 * @typedef {Object} t3518_OutBlock1 [주식] 투자정보 - 해외실시간지수 
 * @property {string} date 일자(8)
 * @property {string} time 시간(8)
 * @property {number} open 시가(9.4) - ※ 종목종류별 가격 소수점 자리수 - S(해외지수) : 9.2 - F(해외선물) : 9.2 - R(환율/금리) : 9.4
 * @property {number} high 고가(9.4) - ※ 종목종류별 가격 소수점 자리수 - S(해외지수) : 9.2 - F(해외선물) : 9.2 - R(환율/금리) : 9.4
 * @property {number} low 저가(9.4) - ※ 종목종류별 가격 소수점 자리수 - S(해외지수) : 9.2 - F(해외선물) : 9.2 - R(환율/금리) : 9.4
 * @property {number} price 현재가(9.4)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(9.4)
 * @property {number} uprate 등락율(9.4)
 * @property {number} volume 누적거래량(12)
 * @property {number} bidho 매수호가(9.4)
 * @property {number} offerho 매도호가(9.4)
 * @property {number} bidrem 매수잔량(12)
 * @property {number} offerrem 매도잔량(12)
 * @property {string} kind 종목종류(1)
 * @property {string} symbol SYMBOL(16)
 * @property {string} exid EXID(4)
 * @property {string} kodate 한국일자(8)
 * @property {string} kotime 한국시간(8)
 */
/**
 * [주식] 투자정보 - 해외실시간지수 (초당 1건 제한)
 * @param {string} kind 종목종류(1) - S:해외지수 F:해외선물 R:환율/금리
 * @param {string} symbol SYMBOL(16) - 
 * @param {number} cnt 입력건수(4) - 
 * @param {string} jgbn 조회구분(1) - 0:일 1:주 2:월 3:분 4:틱
 * @param {number} nmin N분(3) - jgbn이 3인 경우에 n분
 * @param {string} cts_date CTS_DATE(8) - 다음 조회시 OutBlock의 cts_date 입력 처음 조회시 스페이스
 * @param {string} cts_time CTS_TIME(6) - 다음 조회시 OutBlock의 cts_time 입력 처음 조회시 스페이스
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t3518|null>}  실패시 null 반환
 */
module.exports = async(kind="",symbol="",cnt=0,jgbn="",nmin=0,cts_date="",cts_time="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t3518",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t3518InBlock":{
        "kind":kind,
        "symbol":symbol,
        "cnt":cnt,
        "jgbn":jgbn,
        "nmin":nmin,
        "cts_date":cts_date,
        "cts_time":cts_time
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investinfo",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}