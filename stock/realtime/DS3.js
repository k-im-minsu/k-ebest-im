/**
 * @typedef {Object} DS3 [주식] 실시간 시세 - KOSPI시간외단일가체결
 * @property {string} dan_chetime 시간외단일가체결시간(6)
 * @property {string} dan_sign 시간외단일가전일대비구분(1)
 * @property {string} dan_change 시간외단일가전일대비(8)
 * @property {string} dan_drate 시간외단일가등락율(6.2)
 * @property {string} dan_price 시간외단일가현재가(8)
 * @property {string} dan_opentime 시간외단일가시가시간(6)
 * @property {string} dan_open 시간외단일가시가(8)
 * @property {string} dan_hightime 시간외단일가고가시간(6)
 * @property {string} dan_high 시간외단일가고가(8)
 * @property {string} dan_lowtime 시간외단일가저가시간(6)
 * @property {string} dan_low 시간외단일가저가(8)
 * @property {string} dan_cgubun 시간외단일가체결구분(1)
 * @property {string} dan_cvolume 시간외단일가체결량(8)
 * @property {string} dan_volume 시간외단일가누적거래량(12)
 * @property {string} dan_value 시간외단일가누적거래대금(12)
 * @property {string} dan_mdvolume 시간외단일가매도누적체결량(12)
 * @property {string} dan_mdchecnt 시간외단일가매도누적체결건수(8)
 * @property {string} dan_msvolume 시간외단일가매수누적체결량(12)
 * @property {string} dan_mschecnt 시간외단일가매수누적체결건수(8)
 * @property {string} dan_prevolume 시간외단일가직전거래량(8)
 * @property {string} dan_precvolume 시간외단일가직전체결수량(8)
 * @property {string} dan_cpower 시간외단일가체결강도(9.2)
 * @property {string} dan_status 시간외단일가장정보(2)
 * @property {string} shcode 단축코드(6) 
*/
/** @typedef {(data:DS3)=>void} DS3Func*/
/**
 * [주식] 실시간 시세 - KOSPI시간외단일가체결
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {DS3Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("DS3",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - KOSPI시간외단일가체결 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("DS3",tr_key);
}
