/**
 * @typedef {Object} UVI [주식] 실시간 시세 - (통합)VI 발동 해제
 * @property {string} vi_gubun 구분(0:해제1:정적발동2:동적발동3:정적&동적)(1)
 * @property {string} svi_recprice 정적VI발동기준가격(8)
 * @property {string} dvi_recprice 동적VI발동기준가격(8)
 * @property {string} vi_trgprice VI발동가격(8)
 * @property {string} shcode 단축코드(KEY)(6)
 * @property {string} ref_shcode 참조코드(6)
 * @property {string} time 시간(6) 
 * @property {string} exchname 거래소명(3)
 * @property {string} ex_shcode 거래소별단축코드(10)
 * 
*/
/** @typedef {(data:UVI)=>void} UVIFunc*/
/**
 * [주식] 실시간 시세 - (통합)VI 발동 해제
 * @param {string} tr_key 단축코드 7자리 + 공백 3자리(U+6자리코드), (계좌등록/해제 일 경우 빈 문자열)
 * @param {UVIFunc} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("UVI",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - (통합)VI 발동 해제 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("UVI",tr_key);
}
