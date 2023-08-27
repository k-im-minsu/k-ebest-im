const lib=require("k-lib-im");
/**
 * @typedef {Object} t1427 [주식] 시세 - 상_하한가직전
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1427_OutBlock} t1427OutBlock
 * @property {Array<t1427_OutBlock1>} t1427OutBlock1
 */
/**
 * @typedef {Object} t1427_OutBlock [주식] 시세 - 상_하한가직전 
 * @property {number} cnt CNT(4)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1427_OutBlock1 [주식] 시세 - 상_하한가직전 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} diff_vol 거래증가율(10.2)
 * @property {number} lmtprice 상한가/하한가(8)
 * @property {number} rate 대비율(12.2)
 * @property {string} shcode 종목코드(6)
 * @property {number} jnilvolume 전일거래량(12)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} lmtdaycnt 연속(8)
 * @property {number} value 거래대금(12)
 * @property {number} total 시가총액(12)
 */
/**
 * [주식] 시세 - 상_하한가직전 (초당 1건 제한)
 * @param {string} qrygb 조회구분(1) - 1:20종목씩 조회 그외:전체조회
 * @param {string} gubun 구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} signgubun 상하한가구분(1) - 1:상한직전 2:하한직전
 * @param {number} diff 등락율(3) - 등락율 signgubun 이 '1'(상한직전)인 경우 diff 이상 signgubun 이 '1'(상한직전)인 경우 -diff 이하
 * @param {number} jc_num 대상제외(12) - 대상제외값(설정시 저장됨) Default:000000000000 000000000128(0x00000080):관리종목 000000000256(0x00000100):시장경보 000000000512(0x00000200):거래정지 000000016384(0x00004000):우선주 000002097152(0x00200000):증거금50/100 000004194304(0x00400000):증거금50 000008388608(0x00800000):증거금100 000016777216(0x01000000):정리매매 000067108864(0x04000000):투자유의 002147483648(0x80000000):불성실공시 ex) 관리종목, 시장경보 종목 제외시 : 000000000384( 128 + 256 )
 * @param {number} sprice 시작가격(8) - 현재가 >= sprice
 * @param {number} eprice 종료가격(8) - 현재가 <= eprice
 * @param {number} volume 거래량(12) - 거래량 >= volume
 * @param {number} idx IDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {string} jshex 전일상하한제외(1) - c' or 'C' 입력시 전일 상/하한가 제외
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1427|null>}  실패시 null 반환
 */
 exports.상_하한가직전 = async(qrygb="",gubun="",signgubun="",diff=0,jc_num=0,sprice=0,eprice=0,volume=0,idx=0,jshex="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1427",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1427InBlock":{
        "qrygb":qrygb,
        "gubun":gubun,
        "signgubun":signgubun,
        "diff":diff,
        "jc_num":jc_num,
        "sprice":sprice,
        "eprice":eprice,
        "volume":volume,
        "idx":idx,
        "jshex":jshex
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