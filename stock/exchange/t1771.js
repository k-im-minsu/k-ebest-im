const lib=require("k-lib-im");
/**
 * @typedef {Object} t1771 [주식] 거래원 - 종목별회원사추이
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1771_OutBlock} t1771OutBlock
 * @property {Array<t1771_OutBlock2>} t1771OutBlock2
 */
/**
 * @typedef {Object} t1771_OutBlock [주식] 거래원 - 종목별회원사추이 
 * @property {number} cts_idx CTSIDX(4)
 */
/**
 * @typedef {Object} t1771_OutBlock2 [주식] 거래원 - 종목별회원사추이 
 * @property {string} traddate 날짜(8)
 * @property {string} tradtime 시간(8)
 * @property {number} price 현재가(8)
 * @property {string} sign 대비구분(1)
 * @property {number} change 대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} tradmdcha 매도(12)
 * @property {number} tradmscha 매수(12)
 * @property {number} tradmdval 매도대금(18)
 * @property {number} tradmsval 매수대금(18)
 * @property {number} tradmsscha 순매수(12)
 * @property {number} tradmttvolume 누적순매수(12)
 * @property {number} tradavg 평균단가(8)
 * @property {number} tradmttavg 누적평균단가(8)
 */
/**
 * [주식] 거래원 - 종목별회원사추이 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} tradno 거래원코드(3) - 거래원코드 t1764 를 조회한 후 t1764OutBlock 의 tradno 의 값을 사용
 * @param {string} gubun1 구분1(1) - 0 : 시간별 1 : 일별
 * @param {string} traddate1 거래원날짜1(8) - 일별 조회시 사용 OutBlock1.traddate >= InBlock.traddate1
 * @param {string} traddate2 거래원날짜2(8) - 일별 조회시 사용 OutBlock1.traddate <= InBlock.traddate2
 * @param {number} cts_idx CTSIDX(4) - 처음 조회시 Space 입력 다음 조회시 OutBlock의 cts_idx 값을 입력
 * @param {number} cnt 요청건수(3) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1771|null>}  실패시 null 반환
 */
 exports.종목별회원사추이 = async(shcode="",tradno="",gubun1="",traddate1="",traddate2="",cts_idx=0,cnt=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1771",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1771InBlock":{
        "shcode":shcode,
        "tradno":tradno,
        "gubun1":gubun1,
        "traddate1":traddate1,
        "traddate2":traddate2,
        "cts_idx":cts_idx,
        "cnt":cnt
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/exchange",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}