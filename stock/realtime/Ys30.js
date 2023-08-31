/**
 * @typedef {Object} Ys30 [주식] 실시간 시세 - ELW예상체결 
*/
/** @typedef {(data:Ys30)=>void} Ys30Func*/
/**
 * [주식] 실시간 시세 - ELW예상체결
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {Ys30Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("Ys30",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - ELW예상체결 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("Ys30",tr_key);
}
