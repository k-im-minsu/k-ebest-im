const lib=require("k-lib-im");
/**
 * @typedef {Object} t8450 [주식] 시세 - (통합)주식현재가호가조회2 API용
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t8450_OutBlock} t8450OutBlock
 */
/**
 * @typedef {Object} t8450_OutBlock [주식] 시세 - (통합)주식현재가호가조회2 API용 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} jnilclose 전일종가(기준가)(8)
 * @property {number} offerho1 매도호가1(8)
 * @property {number} bidho1 매수호가1(8)
 * @property {number} offerrem1 매도호가수량1(12)
 * @property {number} bidrem1 매수호가수량1(12)
 * @property {number} offerho2 매도호가2(8)
 * @property {number} bidho2 매수호가2(8)
 * @property {number} offerrem2 매도호가수량2(12)
 * @property {number} bidrem2 매수호가수량2(12)
 * @property {number} offerho3 매도호가3(8)
 * @property {number} bidho3 매수호가3(8)
 * @property {number} offerrem3 매도호가수량3(12)
 * @property {number} bidrem3 매수호가수량3(12)
 * @property {number} offerho4 매도호가4(8)
 * @property {number} bidho4 매수호가4(8)
 * @property {number} offerrem4 매도호가수량4(12)
 * @property {number} bidrem4 매수호가수량4(12)
 * @property {number} offerho5 매도호가5(8)
 * @property {number} bidho5 매수호가5(8)
 * @property {number} offerrem5 매도호가수량5(12)
 * @property {number} bidrem5 매수호가수량5(12)
 * @property {number} offerho6 매도호가6(8)
 * @property {number} bidho6 매수호가6(8)
 * @property {number} offerrem6 매도호가수량6(12)
 * @property {number} bidrem6 매수호가수량6(12)
 * @property {number} offerho7 매도호가7(8)
 * @property {number} bidho7 매수호가7(8)
 * @property {number} offerrem7 매도호가수량7(12)
 * @property {number} bidrem7 매수호가수량7(12)
 * @property {number} offerho8 매도호가8(8)
 * @property {number} bidho8 매수호가8(8)
 * @property {number} offerrem8 매도호가수량8(12)
 * @property {number} bidrem8 매수호가수량8(12)
 * @property {number} offerho9 매도호가9(8)
 * @property {number} bidho9 매수호가9(8)
 * @property {number} offerrem9 매도호가수량9(12)
 * @property {number} bidrem9 매수호가수량9(12)
 * @property {number} offerho10 매도호가10(8)
 * @property {number} bidho10 매수호가10(8)
 * @property {number} offerrem10 매도호가수량10(12)
 * @property {number} bidrem10 매수호가수량10(12)
 * @property {number} offer 매도호가수량합(12)
 * @property {number} bid 매수호가수량합(12)
 * @property {string} hotime 수신시간(8)
 * @property {number} yeprice 예상체결가격(8)
 * @property {number} yevolume 예상체결수량(12)
 * @property {string} yesign 예상체결전일구분(1)
 * @property {number} yechange 예상체결전일대비(8)
 * @property {number} yediff 예상체결등락율(6.2)
 * @property {number} tmoffer 시간외매도잔량(12)
 * @property {number} tmbid 시간외매수잔량(12)
 * @property {string} ho_status 동시구분(1)
 * @property {string} shcode 단축코드(6)
 * @property {number} uplmtprice 상한가(8)
 * @property {number} dnlmtprice 하한가(8)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} nxt_offerrem1 NXT매도호가수량1(12)
 * @property {number} nxt_bidrem1 NXT매수호가수량1(12)
 * @property {number} nxt_offerrem2 NXT매도호가수량2(12)
 * @property {number} nxt_bidrem2 NXT매수호가수량2(12)
 * @property {number} nxt_offerrem3 NXT매도호가수량3(12)
 * @property {number} nxt_bidrem3 NXT매수호가수량3(12)
 * @property {number} nxt_offerrem4 NXT매도호가수량4(12)
 * @property {number} nxt_bidrem4 NXT매수호가수량4(12)
 * @property {number} nxt_offerrem5 NXT매도호가수량5(12)
 * @property {number} nxt_bidrem5 NXT매수호가수량5(12)
 * @property {number} nxt_offerrem6 NXT매도호가수량6(12)
 * @property {number} nxt_bidrem6 NXT매수호가수량6(12)
 * @property {number} nxt_offerrem7 NXT매도호가수량7(12)
 * @property {number} nxt_bidrem7 NXT매수호가수량7(12)
 * @property {number} nxt_offerrem8 NXT매도호가수량8(12)
 * @property {number} nxt_bidrem8 NXT매수호가수량8(12)
 * @property {number} nxt_offerrem9 NXT매도호가수량9(12)
 * @property {number} nxt_bidrem9 NXT매수호가수량9(12)
 * @property {number} nxt_offerrem10 NXT매도호가수량10(12)
 * @property {number} nxt_bidrem10 NXT매수호가수량10(12)
 * @property {number} nxt_offer NXT매도호가수량(12)
 * @property {number} nxt_bid NXT매수호가수량(12)
 * @property {number} nxt_yeprice NXT예상체결가격(12)
 * @property {number} nxt_yevolume NXT예상체결수량(12)
 * @property {string} nxt_yesign NXT예상체결전일구분(1)
 * @property {number} nxt_yechange NXT예상체결전일대비(8)
 * @property {number} nxt_yediff NXT예상체결등락율(6.2)
 * @property {string} nxt_ho_status NXT동시구분(1)
 * @property {number} unx_offerrem1 통합매도호가수량1(12)
 * @property {number} unx_bidrem1 통합매수호가수량1(12)
 * @property {number} unx_offerrem2 통합매도호가수량2(12)
 * @property {number} unx_bidrem2 통합매수호가수량2(12)
 * @property {number} unx_offerrem3 통합매도호가수량3(12)
 * @property {number} unx_bidrem3 통합매수호가수량3(12)
 * @property {number} unx_offerrem4 통합매도호가수량4(12)
 * @property {number} unx_bidrem4 통합매수호가수량4(12)
 * @property {number} unx_offerrem5 통합매도호가수량5(12)
 * @property {number} unx_bidrem5 통합매수호가수량5(12)
 * @property {number} unx_offerrem6 통합매도호가수량6(12)
 * @property {number} unx_bidrem6 통합매수호가수량6(12)
 * @property {number} unx_offerrem7 통합매도호가수량7(12)
 * @property {number} unx_bidrem7 통합매수호가수량7(12)
 * @property {number} unx_offerrem8 통합매도호가수량8(12)
 * @property {number} unx_bidrem8 통합매수호가수량8(12)
 * @property {number} unx_offerrem9 통합매도호가수량9(12)
 * @property {number} unx_bidrem9 통합매수호가수량9(12)
 * @property {number} unx_offerrem10 통합매도호가수량10(12)
 * @property {number} unx_bidrem10 통합매수호가수량10(12)
 * @property {number} unx_offer 통합매도호가수량합(12)
 * @property {number} unx_bid 통합매수호가수량합(12)
 * @property {number} krx_midprice KRX중간가격(8)
 * @property {number} krx_offermidsumrem KRX매도중간가잔량합계수량(9)
 * @property {number} krx_bidmidsumrem KRX매수중간가잔량합계수량(9)
 * @property {number} nxt_midprice NXT중간가격(8)
 * @property {number} nxt_offermidsumrem NXT매도중간가잔량합계수량(9)
 * @property {number} nxt_bidmidsumrem NXT매수중간가잔량합계수량(9)
 * @property {string} ex_shcode 거래소별단축코드(10)
 * @property {number} krx_midsumrem KRX중간가잔량합계수량(9)
 * @property {string} krx_midsumremgubun KRX중간가잔량구분(''없음'1'매도'2'매수)(1)
 * @property {number} nxt_midsumrem NXT중간가잔량합계수량(9)
 * @property {string} nxt_midsumremgubun NXT중간가잔량구분(''없음'1'매도'2'매수)(1)
 */
/**
 * [주식] 시세 - (통합)주식현재가호가조회2 API용 (초당 3건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} exchgubun 거래소구분코드(1) - K:KRX N:NXT U:통합 그외 입력값은 KRX로 처리
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t8450|null>}  실패시 null 반환
 */
module.exports = async(shcode="",exchgubun="K",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t8450",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t8450InBlock":{
        "shcode":shcode,
        "exchgubun":exchgubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/market-data",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}