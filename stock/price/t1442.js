const lib=require("k-lib-im");
/**
 * @typedef {Object} t1442 [주식] 시세 - 신고_신저가
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1442_OutBlock} t1442OutBlock
 * @property {Array<t1442_OutBlock1>} t1442OutBlock1
 */
/**
 * @typedef {Object} t1442_OutBlock [주식] 시세 - 신고_신저가 
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1442_OutBlock1 [주식] 시세 - 신고_신저가 
 * @property {string} shcode 종목코드(6)
 * @property {string} hname 종목명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} pastprice 이전가(8)
 * @property {string} pastsign 이전가대비구분(1)
 * @property {number} pastchange 이전가대비(8)
 * @property {number} pastdiff 이전가대비율(6.2)
 */
/**
 * [주식] 시세 - 신고_신저가 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} type1 신고신저(1) - 0:신고 1:신저
 * @param {string} type2 기간(1) - 0#전일 1#5일 2#10일 3#20일 4#60일 5#90일 6#52주 7#년중
 * @param {string} type3 유지여부(1) - 0:일시돌파 1:돌파유지
 * @param {number} jc_num 대상제외(12) - 대상제외값(설정시 저장됨) 증거금50 : 0x00400000 증거금100 : 0x00800000 증거금50/100 : 0x00200000 관리종목 : 0x00000080 시장경보 : 0x00000100 거래정지 : 0x00000200 우선주 : 0x00004000 투자유의 : 0x04000000 정리매매 : 0x01000000 불성실공시 : 0x80000000
 * @param {number} sprice 시작가격(8) - 현재가 >= sprice
 * @param {number} eprice 종료가격(8) - 현재가 <= eprice
 * @param {number} volume 거래량(12) - 거래량 >= volume
 * @param {number} idx IDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {number} jc_num2 대상제외2(12) - 기본 => 000000000000 상장지수펀드 => 000000000001 선박투자회사 => 000000000002 스펙 => 000000000004 ETN => 000000000008(0x00000008) 투자주의 => 000000000016(0x00000010) 투자위험 => 000000000032(0x00000020) 위험예고 => 000000000064(0x00000040) 담보불가 => 000000000128(0x00000080) 두개 이상 제외시 해당 값을 합산한다.
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1442|null>}  실패시 null 반환
 */
 exports.신고_신저가 = async(gubun="",type1="",type2="",type3="",jc_num=0,sprice=0,eprice=0,volume=0,idx=0,jc_num2=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1442",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1442InBlock":{
        "gubun":gubun,
        "type1":type1,
        "type2":type2,
        "type3":type3,
        "jc_num":jc_num,
        "sprice":sprice,
        "eprice":eprice,
        "volume":volume,
        "idx":idx,
        "jc_num2":jc_num2
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