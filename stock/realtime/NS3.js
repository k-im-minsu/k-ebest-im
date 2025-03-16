/**
 * @typedef {Object} NS3 [주식] 실시간 시세 - NXT체결
 * @property {string} chetime 체결시간(6)
 * @property {string} sign 전일대비구분(1)
 * @property {string} change 전일대비(8)
 * @property {string} drate 등락율(6.2)
 * @property {string} price 현재가(8)
 * @property {string} opentime 시가시간(6)
 * @property {string} open 시가(8)
 * @property {string} hightime 고가시간(6)
 * @property {string} high 고가(8)
 * @property {string} lowtime 저가시간(6)
 * @property {string} low 저가(8)
 * @property {string} cgubun 체결구분(1)
 * @property {string} cvolume 체결량(8)
 * @property {string} volume 누적거래량(12)
 * @property {string} value 누적거래대금(12)
 * @property {string} mdvolume 매도누적체결량(12)
 * @property {string} mdchecnt 매도누적체결건수(8)
 * @property {string} msvolume 매수누적체결량(12)
 * @property {string} mschecnt 매수누적체결건수(8)
 * @property {string} cpower 체결강도(9.2)
 * @property {string} w_avrg 가중평균가(8)
 * @property {string} offerho 매도호가(8)
 * @property {string} bidho 매수호가(8)
 * @property {string} status 장정보(2)
 * @property {string} jnilvolume 전일동시간대거래량(12)
 * @property {string} shcode 단축코드(6) 
 * @property {string} exchname 거래소명(3)
 * @property {string} ex_shcode 거래소별단축코드(10)
*/
/** @typedef {(data:NS3)=>void} NS3Func*/
/**
 * [주식] 실시간 시세 - NXT체결
 * @param {string} tr_key 단축코드 7자리 + 공백 3자리(N+6자리코드), (계좌등록/해제 일 경우 빈 문자열)
 * @param {NS3Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("NS3",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - NXT체결 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("NS3",tr_key);
}
