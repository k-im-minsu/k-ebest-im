/**
 * @typedef {Object} SHC [주식] 실시간 시세 - 상_하한가근접진입
 * @property {string} sijanggubun 거래소/코스닥구분(1)
 * @property {string} hname 종목명(20)
 * @property {string} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {string} change 전일대비(8)
 * @property {string} drate 등락율(6.2)
 * @property {string} volume 누적거래량(12)
 * @property {string} volincrate 거래증가율(12.2)
 * @property {string} updnlmtprice 상/하한가(8)
 * @property {string} updnlmtdrate 상/하한가대비율(6.2)
 * @property {string} jnilvolume 전일거래량(12)
 * @property {string} shcode 단축코드(6)
 * @property {string} gwangubun 관리구분(1)
 * @property {string} undergubun 이상급등구분(1)
 * @property {string} tgubun 투자유의구분(1)
 * @property {string} wgubun 우선주구분(1)
 * @property {string} dishonest 불성실구분(1)
 * @property {string} jkrate 증거금률(1) 
*/
/** @typedef {(data:SHC)=>void} SHCFunc*/
/**
 * [주식] 실시간 시세 - 상_하한가근접진입
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {SHCFunc} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.상_하한가근접진입 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("SHC",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - 상_하한가근접진입 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.상_하한가근접진입_해제 = async(tr_key)=>{
    return await __ebestim.realdel("SHC",tr_key);
}
