const lib=require("k-lib-im");
/**
 * @typedef {Object} t1475 [주식] 시세 - 체결강도추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1475_OutBlock} t1475OutBlock
 * @property {Array<t1475_OutBlock1>} t1475OutBlock1
 */
/**
 * @typedef {Object} t1475_OutBlock [주식] 시세 - 체결강도추이 
 * @property {number} date 기준일자(8)
 * @property {number} time 기준시간(6)
 * @property {number} rankcnt 랭크카운터(3)
 */
/**
 * @typedef {Object} t1475_OutBlock1 [주식] 시세 - 체결강도추이 
 * @property {string} datetime 일자(10)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} todayvp 당일VP(8.2)
 * @property {number} ma5vp 5일MAVP(8.2)
 * @property {number} ma20vp 20일MAVP(8.2)
 * @property {number} ma60vp 60일MAVP(8.2)
 */
/**
 * [주식] 시세 - 체결강도추이 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} vptype 상승하락(1) - 시간별/일별 구분 0 : 시간별 1 : 일별
 * @param {number} datacnt 데이터개수(4) - 스페이스 입력시 최대 20개 데이터 조회됨.
 * @param {number} date 기준일자(8) - 다음 조회시 입력. 이전 조회시 OutBlock.date값 입력
 * @param {number} time 기준시간(6) - 다음 조회시 입력. 이전 조회시 OutBlock.time값 입력
 * @param {number} rankcnt 랭크카운터(3) - 미사용 필드.
 * @param {string} gubun 조회구분(1) - 일반 조회 : 0 차트 조회 : 1 OutBlock1의 volume 필드 값 구분함. 일반 : 누적거래량, 차트 : 체결량
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1475|null>}  실패시 null 반환
 */
 exports.체결강도추이 = async(shcode="",vptype="",datacnt=0,date=0,time=0,rankcnt=0,gubun="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1475",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1475InBlock":{
        "shcode":shcode,
        "vptype":vptype,
        "datacnt":datacnt,
        "date":date,
        "time":time,
        "rankcnt":rankcnt,
        "gubun":gubun
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