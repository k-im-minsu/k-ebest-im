const lib=require("k-lib-im");
/**
 * @typedef {Object} t3341 [주식] 투자정보 - 재무순위종합
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t3341_OutBlock} t3341OutBlock
 * @property {Array<t3341_OutBlock1>} t3341OutBlock1
 */
/**
 * @typedef {Object} t3341_OutBlock [주식] 투자정보 - 재무순위종합 
 * @property {number} cnt CNT(4)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t3341_OutBlock1 [주식] 투자정보 - 재무순위종합 
 * @property {number} rank 순위(4)
 * @property {string} hname 기업명(20)
 * @property {number} salesgrowth 매출액증가율(12)
 * @property {number} operatingincomegrowt 영업이익증가율(12)
 * @property {number} ordinaryincomegrowth 경상이익증가율(12)
 * @property {number} liabilitytoequity 부채비율(12)
 * @property {number} enterpriseratio 유보율(12)
 * @property {number} eps EPS(12)
 * @property {number} bps BPS(12)
 * @property {number} roe ROE(12)
 * @property {string} shcode 종목코드(6)
 * @property {number} per PER(13.2)
 * @property {number} pbr PBR(13.2)
 * @property {number} peg PEG(13.2)
 */
/**
 * [주식] 투자정보 - 재무순위종합 (초당 1건 제한)
 * @param {string} gubun 시장구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} gubun1 순위구분(1:매출액증가율2:영업이익증가율 3:세전계속이익증가율4:부채비율5:유보율 6:EPS7:BPS8:ROE9:PERa:PBRb:PEG)(1) - 1#매출액증가율 2#영업이익증가율 3#세전계속이익증가율 4#부채비율 5#유보율 6#EPS 7#BPS 8#ROE 9#PER : 오름차순 a#PBR : 오름차순 b#PEG : 오름차순
 * @param {string} gubun2 대비구분(1) - 1 고정
 * @param {number} idx IDX(4) - idx 첫조회시 space 연속조회시 Outblock의 idx 값 세팅
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t3341|null>}  실패시 null 반환
 */
module.exports= async(gubun="",gubun1="",gubun2="",idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t3341",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t3341InBlock":{
        "gubun":gubun,
        "gubun1":gubun1,
        "gubun2":gubun2,
        "idx":idx
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