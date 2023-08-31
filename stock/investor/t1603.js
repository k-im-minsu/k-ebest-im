const lib=require("k-lib-im");
/**
 * @typedef {Object} t1603 [주식] 투자자 - 시간대별투자자매매추이상세
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1603_OutBlock} t1603OutBlock
 * @property {Array<t1603_OutBlock1>} t1603OutBlock1
 */
/**
 * @typedef {Object} t1603_OutBlock [주식] 투자자 - 시간대별투자자매매추이상세 
 * @property {number} cts_idx CTSIDX(4)
 * @property {string} cts_time CTSTIME(8)
 */
/**
 * @typedef {Object} t1603_OutBlock1 [주식] 투자자 - 시간대별투자자매매추이상세 
 * @property {string} time 시간(8)
 * @property {string} tjjcode 투자자구분(4)
 * @property {number} msvolume 매수수량(8)
 * @property {number} mdvolume 매도수량(8)
 * @property {number} msvalue 매수금액(12)
 * @property {number} mdvalue 매도금액(12)
 * @property {number} svolume 순매수수량(8)
 * @property {number} svalue 순매수금액(12)
 */
/**
 * [주식] 투자자 - 시간대별투자자매매추이상세 (초당 1건 제한)
 * @param {string} market 시장구분(1) - 1:코스피 2:코스닥 3:선물 4:콜옵션 5:풋옵션 6:ELW 7:ETF
 * @param {string} gubun1 투자자구분(1) - 1:개인 2:외인 3:기관계 4:증권 5:투신 6:은행 7:보험 8:종금 9:기금 A:국가 B:기타 C:사모펀드
 * @param {string} gubun2 전일분구분(1) - 0:당일 1:전일
 * @param {string} cts_time CTSTIME(8) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_time 값으로 설정
 * @param {number} cts_idx CTSIDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_idx 값으로 설정
 * @param {number} cnt 조회건수(3) - 020
 * @param {string} upcode 업종코드(3) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1603|null>}  실패시 null 반환
 */
module.exports = async(market="",gubun1="",gubun2="",cts_time="",cts_idx=0,cnt=0,upcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1603",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1603InBlock":{
        "market":market,
        "gubun1":gubun1,
        "gubun2":gubun2,
        "cts_time":cts_time,
        "cts_idx":cts_idx,
        "cnt":cnt,
        "upcode":upcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investor",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}