const lib=require("k-lib-im");
/**
 * @typedef {Object} t1489 [주식] 상위종목 - 예상체결량상위조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1489_OutBlock} t1489OutBlock
 * @property {Array<t1489_OutBlock1>} t1489OutBlock1
 */
/**
 * @typedef {Object} t1489_OutBlock [주식] 상위종목 - 예상체결량상위조회 
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1489_OutBlock1 [주식] 상위종목 - 예상체결량상위조회 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 예상거래량(12)
 * @property {number} offerho 매도호가(8)
 * @property {number} bidho 매수호가(8)
 * @property {string} shcode 종목코드(6)
 * @property {number} jnilvolume 전일거래량(12)
 */
/**
 * [주식] 상위종목 - 예상체결량상위조회 (초당 1건 제한)
 * @param {string} gubun 거래소구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} jgubun 장구분(1) - 0:장전 1:장후
 * @param {string} jongchk 종목체크(12) - 대상제외값(설정시 저장됨) 증거금50 : 0x00400000 증거금100 : 0x00800000 증거금50/100 : 0x00200000 관리종목 : 0x00000080 시장경보 : 0x00000100 거래정지 : 0x00000200 우선주 : 0x00004000 투자유의 : 0x04000000 정리매매 : 0x01000000 불성실공시 : 0x80000000
 * @param {number} idx IDX(4) - 다음 조회시 사용 첫 조회시 Space
 * @param {number} yesprice 예상체결시작가격(8) - yesprice <= 예상체결가 인 종목
 * @param {number} yeeprice 예상체결종료가격(8) - 예상체결가 <= yeeprice 인 종목
 * @param {number} yevolume 예상체결량(12) - 예상체결량 >= yevolume 인 종목
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1489|null>}  실패시 null 반환
 */
 exports.예상체결량상위조회 = async(gubun="",jgubun="",jongchk="",idx=0,yesprice=0,yeeprice=0,yevolume=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1489",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1489InBlock":{
        "gubun":gubun,
        "jgubun":jgubun,
        "jongchk":jongchk,
        "idx":idx,
        "yesprice":yesprice,
        "yeeprice":yeeprice,
        "yevolume":yevolume
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