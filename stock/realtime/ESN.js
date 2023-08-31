/**
 * @typedef {Object} ESN [주식] 실시간 시세 - 뉴ELW투자지표민감도
 * @property {string} hotime 호가시간(6)
 * @property {string} tmofferrem 시간외매도잔량(12)
 * @property {string} tmbidrem 시간외매수잔량(12)
 * @property {string} pretmoffercha 시간외매도수량직전대비(12)
 * @property {string} pretmbidcha 시간외매수수량직전대비(12)
 * @property {string} shcode 단축코드(6) 
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
