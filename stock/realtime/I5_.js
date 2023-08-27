/**
 * @typedef {Object} I5_ [주식] 실시간 시세 - 코스피ETF종목실시간NAV
 * @property {string} time 시간(8)
 * @property {string} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {string} change 전일대비(8)
 * @property {string} volume 누적거래량(12)
 * @property {string} navdiff NAV대비(9.2)
 * @property {string} nav NAV(9.2)
 * @property {string} navchange 전일대비(9.2)
 * @property {string} crate 추적오차(9.2)
 * @property {string} grate 괴리(9.2)
 * @property {string} jisu 지수(8.2)
 * @property {string} jichange 전일대비(8.2)
 * @property {string} jirate 전일대비율(8.2)
 * @property {string} shcode 단축코드(6) 
*/
/** @typedef {(data:I5_)=>void} I5_Func*/
/**
 * [주식] 실시간 시세 - 코스피ETF종목실시간NAV
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {I5_Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.코스피ETF종목실시간NAV = async(tr_key="",recv)=>{
    return await __ebestim.realadd("I5_",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - 코스피ETF종목실시간NAV 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.코스피ETF종목실시간NAV_해제 = async(tr_key)=>{
    return await __ebestim.realdel("I5_",tr_key);
}
