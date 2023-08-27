/**
 * @typedef {Object} B7_ [주식] 실시간 시세 - ETF호가잔량
 * @property {string} hotime 호가시간(6)
 * @property {string} lp_offerho1 LP매도호가수량1(9)
 * @property {string} lp_bidho1 LP매수호가수량1(9)
 * @property {string} lp_offerho2 LP매도호가수량2(9)
 * @property {string} lp_bidho2 LP매수호가수량2(9)
 * @property {string} lp_offerho3 LP매도호가수량3(9)
 * @property {string} lp_bidho3 LP매수호가수량3(9)
 * @property {string} lp_offerho4 LP매도호가수량4(9)
 * @property {string} lp_bidho4 LP매수호가수량4(9)
 * @property {string} lp_offerho5 LP매도호가수량5(9)
 * @property {string} lp_bidho5 LP매수호가수량5(9)
 * @property {string} lp_offerho6 LP매도호가수량6(9)
 * @property {string} lp_bidho6 LP매수호가수량6(9)
 * @property {string} lp_offerho7 LP매도호가수량7(9)
 * @property {string} lp_bidho7 LP매수호가수량7(9)
 * @property {string} lp_offerho8 LP매도호가수량8(9)
 * @property {string} lp_bidho8 LP매수호가수량8(9)
 * @property {string} lp_offerho9 LP매도호가수량9(9)
 * @property {string} lp_bidho9 LP매수호가수량9(9)
 * @property {string} lp_offerho10 LP매도호가수량10(9)
 * @property {string} lp_bidho10 LP매수호가수량10(9)
 * @property {string} shcode 단축코드(6)
 * @property {string} offerho1 매도호가1(7)
 * @property {string} bidho1 매수호가1(7)
 * @property {string} offerrem1 매도호가잔량1(9)
 * @property {string} bidrem1 매수호가잔량1(9)
 * @property {string} offerho2 매도호가2(7)
 * @property {string} bidho2 매수호가2(7)
 * @property {string} offerrem2 매도호가잔량2(9)
 * @property {string} bidrem2 매수호가잔량2(9)
 * @property {string} offerho3 매도호가3(7)
 * @property {string} bidho3 매수호가3(7)
 * @property {string} offerrem3 매도호가잔량3(9)
 * @property {string} bidrem3 매수호가잔량3(9)
 * @property {string} offerho4 매도호가4(7)
 * @property {string} bidho4 매수호가4(7)
 * @property {string} offerrem4 매도호가잔량4(9)
 * @property {string} bidrem4 매수호가잔량4(9)
 * @property {string} offerho5 매도호가5(7)
 * @property {string} bidho5 매수호가5(7)
 * @property {string} offerrem5 매도호가잔량5(9)
 * @property {string} bidrem5 매수호가잔량5(9)
 * @property {string} offerho6 매도호가6(7)
 * @property {string} bidho6 매수호가6(7)
 * @property {string} offerrem6 매도호가잔량6(9)
 * @property {string} bidrem6 매수호가잔량6(9)
 * @property {string} offerho7 매도호가7(7)
 * @property {string} bidho7 매수호가7(7)
 * @property {string} offerrem7 매도호가잔량7(9)
 * @property {string} bidrem7 매수호가잔량7(9)
 * @property {string} offerho8 매도호가8(7)
 * @property {string} bidho8 매수호가8(7)
 * @property {string} offerrem8 매도호가잔량8(9)
 * @property {string} bidrem8 매수호가잔량8(9)
 * @property {string} offerho9 매도호가9(7)
 * @property {string} bidho9 매수호가9(7)
 * @property {string} offerrem9 매도호가잔량9(9)
 * @property {string} bidrem9 매수호가잔량9(9)
 * @property {string} offerho10 매도호가10(7)
 * @property {string} bidho10 매수호가10(7)
 * @property {string} offerrem10 매도호가잔량10(9)
 * @property {string} bidrem10 매수호가잔량10(9)
 * @property {string} totofferrem 총매도호가잔량(9)
 * @property {string} totbidrem 총매수호가잔량(9)
 * @property {string} donsigubun 동시호가구분(1)
 * @property {string} alloc_gubun 배분적용구분(1) 
*/
/** @typedef {(data:B7_)=>void} B7_Func*/
/**
 * [주식] 실시간 시세 - ETF호가잔량
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {B7_Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.ETF호가잔량 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("B7_",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - ETF호가잔량 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.ETF호가잔량_해제 = async(tr_key)=>{
    return await __ebestim.realdel("B7_",tr_key);
}
