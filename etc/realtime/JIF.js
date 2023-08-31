/**
 * @typedef {Object} JIF [기타] 실시간 시세 - 장운영정보
 * @property {string} jangubun 장구분(1)
 * @property {string} jstatus 장상태(2) 
*/
/** @typedef {(data:JIF)=>void} JIFFunc*/
/**
 * [기타] 실시간 시세 - 장운영정보
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {JIFFunc} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("JIF",tr_key,recv);
}
/**
 * [기타] 실시간 시세 - 장운영정보 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("JIF",tr_key);
}
