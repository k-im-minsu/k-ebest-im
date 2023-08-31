/**
 * @typedef {Object} NWS [기타] 실시간 시세 - 실시간뉴스제목패킷
 * @property {string} date 날짜(8)
 * @property {string} time 시간(6)
 * @property {string} id 뉴스구분자(2)
 * @property {string} realkey 키값(24)
 * @property {string} title 제목(300)
 * @property {string} code 단축종목코드(240)
 * @property {string} bodysize BODY길이(8) 
*/
/** @typedef {(data:NWS)=>void} NWSFunc*/
/**
 * [기타] 실시간 시세 - 실시간뉴스제목패킷
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {NWSFunc} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("NWS",tr_key,recv);
}
/**
 * [기타] 실시간 시세 - 실시간뉴스제목패킷 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("NWS",tr_key);
}
