/**
 * @typedef {Object} S4_ [주식] 실시간 시세 - KOSPI기세
 * @property {string} sign 전일대비구분(1)
 * @property {string} change 전일대비(8)
 * @property {string} drate 등락율(6.2)
 * @property {string} price 현재가(8)
 * @property {string} opentime 시가시간(6)
 * @property {string} open 시가(8)
 * @property {string} hightime 고가시간(6)
 * @property {string} high 고가(8)
 * @property {string} lowtime 저가시간(6)
 * @property {string} low 저가(8)
 * @property {string} shcode 단축코드(6) 
*/
/** @typedef {(data:S4_)=>void} S4_Func*/
/**
 * [주식] 실시간 시세 - KOSPI기세
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {S4_Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.KOSPI기세 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("S4_",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - KOSPI기세 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.KOSPI기세_해제 = async(tr_key)=>{
    return await __ebestim.realdel("S4_",tr_key);
}
