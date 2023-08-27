/**
 * @typedef {Object} IJ_ [주식] 실시간 시세 - 지수
 * @property {string} time 시간(6)
 * @property {string} jisu 지수(8.2)
 * @property {string} sign 전일대비구분(1)
 * @property {string} change 전일비(8.2)
 * @property {string} drate 등락율(6.2)
 * @property {string} cvolume 체결량(8)
 * @property {string} volume 거래량(8)
 * @property {string} value 거래대금(8)
 * @property {string} upjo 상한종목수(4)
 * @property {string} highjo 상승종목수(4)
 * @property {string} unchgjo 보합종목수(4)
 * @property {string} lowjo 하락종목수(4)
 * @property {string} downjo 하한종목수(4)
 * @property {string} upjrate 상승종목비율(6.2)
 * @property {string} openjisu 시가지수(8.2)
 * @property {string} opentime 시가시간(6)
 * @property {string} highjisu 고가지수(8.2)
 * @property {string} hightime 고가시간(6)
 * @property {string} lowjisu 저가지수(8.2)
 * @property {string} lowtime 저가시간(6)
 * @property {string} frgsvolume 외인순매수수량(8)
 * @property {string} orgsvolume 기관순매수수량(8)
 * @property {string} frgsvalue 외인순매수금액(10)
 * @property {string} orgsvalue 기관순매수금액(10)
 * @property {string} upcode 업종코드(3) 
*/
/** @typedef {(data:IJ_)=>void} IJ_Func*/
/**
 * [주식] 실시간 시세 - 지수
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {IJ_Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.지수 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("IJ_",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - 지수 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.지수_해제 = async(tr_key)=>{
    return await __ebestim.realdel("IJ_",tr_key);
}
