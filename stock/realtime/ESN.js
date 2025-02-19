/**
 * @typedef {Object} ESN [주식] 실시간 시세 - 뉴ELW투자지표민감도
 * @property {string} time 시간(6)
 * @property {string} theoryprice 장중이론가(10.2)
 * @property {string} delt 델타(7.6)
 * @property {string} gama 감마(7.6)
 * @property {string} ceta 세타(12.6)
 * @property {string} vega 베가(12.6)
 * @property {string} rhox 로우(12.6)
 * @property {string} impv 내재변동성(5.2)
 * @property {string} egearing E.기어링(8.2)
 * @property {string} shcode 단축코드(6)
 * @property {string} elwclose ELW현재가(8)
 * @property {string} sign ELW전일대비구분(1)
 * @property {string} change ELW전일대비(8)
 * @property {string} date 일자(8)
 * @property {string} tickvalue 틱환산(10.2)
 * @property {string} lp_impv LP내재변동성(5.2) 
*/
/** @typedef {(data:ESN)=>void} ESNFunc*/
/**
 * [주식] 실시간 시세 - 뉴ELW투자지표민감도
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {ESNFunc} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("ESN",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - 뉴ELW투자지표민감도 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("ESN",tr_key);
}
