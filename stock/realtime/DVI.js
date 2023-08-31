/**
 * @typedef {Object} DVI [주식] 실시간 시세 - 시간외단일가VI발동해제
 * @property {string} vi_gubun 구분(0:해제 1:정적발동 2:동적발동 3:정적&동적)(1)
 * @property {string} svi_recprice 정적VI발동기준가격(8)
 * @property {string} dvi_recprice 동적VI발동기준가격(8)
 * @property {string} vi_trgprice VI발동가격(8)
 * @property {string} shcode 단축코드(KEY)(6)
 * @property {string} ref_shcode 참조코드(미사용)(6)
 * @property {string} time 시간(6) 
*/
/** @typedef {(data:DVI)=>void} DVIFunc*/
/**
 * [주식] 실시간 시세 - 시간외단일가VI발동해제
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {DVIFunc} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("DVI",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - 시간외단일가VI발동해제 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("DVI",tr_key);
}
