/**
 * @typedef {Object} NPH [주식] 실시간 시세 - (NXT)프로그램매매종목별
 * @property {string} time 수신시간(6)
 * @property {string} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {string} change 전일대비(8)
 * @property {string} volume 누적거래량(10)
 * @property {string} drate 등락율(6.2)
 * @property {string} cdhrem 차익매도호가 잔량(12)
 * @property {string} cshrem 차익매수호가 잔량(12)
 * @property {string} bdhrem 비차익매도호가 잔량(12)
 * @property {string} bshrem 비차익매수호가 잔량(12)
 * @property {string} cdhvolume 차익매도호가 수량(12)
 * @property {string} cshvolume 차익매수호가 수량(12)
 * @property {string} bdhvolume 비차익매도호가 수량(12)
 * @property {string} bshvolume 비차익매수호가 수량(12)
 * @property {string} dwcvolume 전체매도위탁체결수량(12)
 * @property {string} swcvolume 전체매수위탁체결수량(12)
 * @property {string} djcvolume 전체매도자기체결수량(12)
 * @property {string} sjcvolume 전체매수자기체결수량(12)
 * @property {string} tdvolume 전체매도체결수량(12)
 * @property {string} tsvolume 전체매수체결수량(12)
 * @property {string} tvol 전체순매수 수량(12)
 * @property {string} dwcvalue 전체매도위탁체결금액(15)
 * @property {string} swcvalue 전체매수위탁체결금액(15)
 * @property {string} djcvalue 전체매도자기체결금액(15)
 * @property {string} sjcvalue 전체매수자기체결금액(15)
 * @property {string} tdvalue 전체매도체결금액(15)
 * @property {string} tsvalue 전체매수체결금액(15)
 * @property {string} tval 전체순매수 금액(15)
 * @property {string} pdgvolume 매도 사전공시수량(12)
 * @property {string} psgvolume 매수 사전공시수량(12)
 * @property {string} shcode 종목코드(9) 
 * @property {string} ex_shcode 거래소별단축코드(10) 
*/
/** @typedef {(data:NPH)=>void} NPHFunc*/
/**
 * [주식] 실시간 시세 - (NXT)프로그램매매종목별
 * @param {string} tr_key 단축코드 7자리 + 공백 3자리(N+6자리코드), (계좌등록/해제 일 경우 빈 문자열)
 * @param {NPHFunc} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("NPH",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - (NXT)프로그램매매종목별 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("NPH",tr_key);
}
