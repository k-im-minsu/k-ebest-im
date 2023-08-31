const lib=require("k-lib-im");
/**
 * @typedef {Object} t1441 [주식] 상위종목 - 등락율상위
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1441_OutBlock} t1441OutBlock
 * @property {Array<t1441_OutBlock1>} t1441OutBlock1
 */
/**
 * @typedef {Object} t1441_OutBlock [주식] 상위종목 - 등락율상위 
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1441_OutBlock1 [주식] 상위종목 - 등락율상위 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} offerrem1 매도잔량(12)
 * @property {number} offerho1 매도호가(12)
 * @property {number} bidho1 매수호가(12)
 * @property {number} bidrem1 매수잔량(12)
 * @property {number} updaycnt 연속(4)
 * @property {number} jnildiff 전일등락율(6.2)
 * @property {string} shcode 종목코드(6)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} voldiff 거래량대비율(8.2)
 * @property {number} value 거래대금(15)
 * @property {number} total 시가총액(12)
 */
/**
 * [주식] 상위종목 - 등락율상위 (초당 1건 제한)
 * @param {string} gubun1 구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} gubun2 상승하락(1) - 0: 상승률 1: 하락률 2: 보합
 * @param {string} gubun3 당일전일(1) - 0: 당일 1: 전일
 * @param {number} jc_num 대상제외(12) - 대상제외값 증거금50 : 0x00400000 증거금100 : 0x00800000 증거금50/100 : 0x00200000 관리종목 : 0x00000080 시장경보 : 0x00000100 거래정지 : 0x00000200 우선주 : 0x00004000 투자유의 : 0x04000000 정리매매 : 0x01000000 불성실공시 : 0x80000000
 * @param {number} sprice 시작가격(8) - 현재가 >= sprice
 * @param {number} eprice 종료가격(8) - 현재가 <= eprice
 * @param {number} volume 거래량(12) - 거래량 >= volume
 * @param {number} idx IDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {number} jc_num2 대상제외2(12) - 기본 => 000000000000 상장지수펀드 => 000000000001 선박투자회사 => 000000000002 스펙 => 000000000004 ETN => 000000000008(0x00000008) 투자주의 => 000000000016(0x00000010) 투자위험 => 000000000032(0x00000020) 위험예고 => 000000000064(0x00000040) 담보불가 => 000000000128(0x00000080) 두개 이상 제외시 해당 값을 합산한다.
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1441|null>}  실패시 null 반환
 */
module.exports= async(gubun1="",gubun2="",gubun3="",jc_num=0,sprice=0,eprice=0,volume=0,idx=0,jc_num2=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1441",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1441InBlock":{
        "gubun1":gubun1,
        "gubun2":gubun2,
        "gubun3":gubun3,
        "jc_num":jc_num,
        "sprice":sprice,
        "eprice":eprice,
        "volume":volume,
        "idx":idx,
        "jc_num2":jc_num2
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/high-item",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}