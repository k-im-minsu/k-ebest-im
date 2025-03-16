/**
 * @typedef {Object} NBM [업종] 실시간 시세 - (NXT)업종별투자자별매매현황
 * @property {string} tjjcode 투자자코드(4)
 * @property {string} tjjtime 수신시간(8)
 * @property {string} msvolume 매수거래량(8)
 * @property {string} mdvolume 매도거래량(8)
 * @property {string} msvol 거래량순매수(8)
 * @property {string} p_msvol 거래량순매수직전대비(8)
 * @property {string} msvalue 매수거래대금(6)
 * @property {string} mdvalue 매도거래대금(6)
 * @property {string} msval 거래대금순매수(6)
 * @property {string} p_msval 거래대금순매수직전대비(6)
 * @property {string} upcode 업종코드(3) 
 * @property {string} ex_upcode 거래소별업종코드(4) 
*/
/** @typedef {(data:NBM)=>void} NBMFunc*/
/**
 * [업종] 실시간 시세 - (NXT)업종별투자자별매매현황
 * @param {string} tr_key 거래소별업종코드(4) N+업종코드(3), (계좌등록/해제 일 경우 빈 문자열)
 * @param {NBMFunc} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("NBM",tr_key,recv);
}
/**
 * [업종] 실시간 시세 - (NXT)업종별투자자별매매현황 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("NBM",tr_key);
}
