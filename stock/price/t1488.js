const lib=require("k-lib-im");
/**
 * @typedef {Object} t1488 [주식] 시세 - 예상체결가등락율상위조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1488_OutBlock} t1488OutBlock
 * @property {Array<t1488_OutBlock1>} t1488OutBlock1
 */
/**
 * @typedef {Object} t1488_OutBlock [주식] 시세 - 예상체결가등락율상위조회 
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1488_OutBlock1 [주식] 시세 - 예상체결가등락율상위조회 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} offerrem 매도잔량(12)
 * @property {number} offerho 매도호가(8)
 * @property {number} bidho 매수호가(8)
 * @property {number} bidrem 매수잔량(12)
 * @property {number} cnt 연속일수(4)
 * @property {string} shcode 종목코드(6)
 * @property {string} jkrate 증거금율(3)
 * @property {number} jnilvolume 전일거래량(12)
 */
/**
 * [주식] 시세 - 예상체결가등락율상위조회 (초당 2건 제한)
 * @param {string} gubun 거래소구분(1) - 0:전체 1:코스피 2:코스닥
 * @param {string} sign 상하락구분(1) - 1:상승 2:하락
 * @param {string} jgubun 장구분(1) - 1:장전 2:장후 3:직전대비
 * @param {string} jongchk 종목체크(12) - 대상제외값 0x00000080:관리종목 0x00000100:시장경보 0x00000200:거래정지 0x00004000:우선주 0x00200000:증거금50/100 0x00400000:증거금50 0x00800000:증거금100 0x01000000:정리매매 0x04000000:투자유의 0x80000000:불성실공시
 * @param {number} idx IDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {string} volume 거래량(1) - 전체#0 1만주이상#1 5만주이상#2 10만주이상#3 50만주이상#4 백만주이상#5
 * @param {number} yesprice 예상체결시작가격(8) - yesprice <= 예상체결가 인 종목
 * @param {number} yeeprice 예상체결종료가격(8) - 예상체결가 <= yeeprice 인 종목
 * @param {number} yevolume 예상체결량(12) - 예상체결량 >= yevolume 인 종목
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1488|null>}  실패시 null 반환
 */
 exports.예상체결가등락율상위조회 = async(gubun="",sign="",jgubun="",jongchk="",idx=0,volume="",yesprice=0,yeeprice=0,yevolume=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1488",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1488InBlock":{
        "gubun":gubun,
        "sign":sign,
        "jgubun":jgubun,
        "jongchk":jongchk,
        "idx":idx,
        "volume":volume,
        "yesprice":yesprice,
        "yeeprice":yeeprice,
        "yevolume":yevolume
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