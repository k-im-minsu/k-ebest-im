/**
 * @typedef {Object} US2 [주식] 실시간 시세 - (통합)우선호가
 * @property {string} offerho 매도호가(8)
 * @property {string} bidho 매수호가(8)
 * @property {string} shcode 단축코드(9) 
 * @property {string} ex_shcode 거래소별단축코드(10) 
*/
/** @typedef {(data:US2)=>void} US2Func*/
/**
 * [주식] 실시간 시세 - (통합)우선호가
 * @param {string} tr_key 단축코드 7자리 + 공백 3자리(U+6자리코드), (계좌등록/해제 일 경우 빈 문자열)
 * @param {US2Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("US2",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - (통합)우선호가 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("US2",tr_key);
}
