/**
 * @typedef {Object} DHA [주식] 실시간 시세 - KOSDAQ시간외단일가호가잔량
 * @property {string} dan_hotime 시간외단일가호가시간(6)
 * @property {string} dan_hstatus 시간외단일가장구분(2)
 * @property {string} dan_offerho1 시간외단일가매도호가1(8)
 * @property {string} dan_bidho1 시간외단일가매수호가1(8)
 * @property {string} dan_offerrem1 시간외단일가매도호가잔량1(12)
 * @property {string} dan_bidrem1 시간외단일가매수호가잔량1(12)
 * @property {string} dan_preoffercha1 시간외단일가직전매도대비수량1(12)
 * @property {string} dan_prebidcha1 시간외단일가직전매수대비수량1(12)
 * @property {string} dan_offerho2 시간외단일가매도호가2(8)
 * @property {string} dan_bidho2 시간외단일가매수호가2(8)
 * @property {string} dan_offerrem2 시간외단일가매도호가잔량2(12)
 * @property {string} dan_bidrem2 시간외단일가매수호가잔량2(12)
 * @property {string} dan_preoffercha2 시간외단일가직전매도대비수량2(12)
 * @property {string} dan_prebidcha2 시간외단일가직전매수대비수량2(12)
 * @property {string} dan_offerho3 시간외단일가매도호가3(8)
 * @property {string} dan_bidho3 시간외단일가매수호가3(8)
 * @property {string} dan_offerrem3 시간외단일가매도호가잔량3(12)
 * @property {string} dan_bidrem3 시간외단일가매수호가잔량3(12)
 * @property {string} dan_preoffercha3 시간외단일가직전매도대비수량3(12)
 * @property {string} dan_prebidcha3 시간외단일가직전매수대비수량3(12)
 * @property {string} dan_offerho4 시간외단일가매도호가4(8)
 * @property {string} dan_bidho4 시간외단일가매수호가4(8)
 * @property {string} dan_offerrem4 시간외단일가매도호가잔량4(12)
 * @property {string} dan_bidrem4 시간외단일가매수호가잔량4(12)
 * @property {string} dan_preoffercha4 시간외단일가직전매도대비수량4(12)
 * @property {string} dan_prebidcha4 시간외단일가직전매수대비수량4(12)
 * @property {string} dan_offerho5 시간외단일가매도호가5(8)
 * @property {string} dan_bidho5 시간외단일가매수호가5(8)
 * @property {string} dan_offerrem5 시간외단일가매도호가잔량5(12)
 * @property {string} dan_bidrem5 시간외단일가매수호가잔량5(12)
 * @property {string} dan_preoffercha5 시간외단일가직전매도대비수량5(12)
 * @property {string} dan_prebidcha5 시간외단일가직전매수대비수량5(12)
 * @property {string} dan_totofferrem 시간외단일가총매도호가잔량(12)
 * @property {string} dan_totbidrem 시간외단일가총매수호가잔량(12)
 * @property {string} dan_preoffercha 시간외단일가직전매도호가총대비수량(12)
 * @property {string} dan_prebidcha 시간외단일가직전매수호가총대비수량(12)
 * @property {string} dan_yeprice 시간외단일가예상체결가격(8)
 * @property {string} dan_yevolume 시간외단일가예상체결수량(12)
 * @property {string} dan_preysign 시간외단일가예상가직전가대비구분(1)
 * @property {string} dan_preychange 시간외단일가예상가직전가대비(8)
 * @property {string} dan_jnilysign 시간외단일가예상가전일가대비구분(1)
 * @property {string} dan_jnilychange 시간외단일가예상가전일가대비(8)
 * @property {string} shcode 단축코드(6)
 * @property {string} volume 누적거래량(12) 
*/
/** @typedef {(data:DHA)=>void} DHAFunc*/
/**
 * [주식] 실시간 시세 - KOSDAQ시간외단일가호가잔량
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {DHAFunc} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.KOSDAQ시간외단일가호가잔량 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("DHA",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - KOSDAQ시간외단일가호가잔량 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.KOSDAQ시간외단일가호가잔량_해제 = async(tr_key)=>{
    return await __ebestim.realdel("DHA",tr_key);
}
