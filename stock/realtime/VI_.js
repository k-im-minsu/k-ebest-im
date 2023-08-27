/**
 * @typedef {Object} VI_ [주식] 실시간 시세 - VI발동해제
 * @property {string} time 시간(6)
 * @property {string} jisu 예상지수(8.2)
 * @property {string} sign 예상전일대비구분(1)
 * @property {string} change 예상전일비(8.2)
 * @property {string} drate 예상등락율(6.2)
 * @property {string} cvolume 예상체결량(8)
 * @property {string} volume 누적거래량(8)
 * @property {string} value 예상거래대금(8)
 * @property {string} upcode 업종코드(3) 
*/
/** @typedef {(data:VI_)=>void} VI_Func*/
/**
 * [주식] 실시간 시세 - VI발동해제
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {VI_Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.VI발동해제 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("VI_",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - VI발동해제 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.VI발동해제_해제 = async(tr_key)=>{
    return await __ebestim.realdel("VI_",tr_key);
}
