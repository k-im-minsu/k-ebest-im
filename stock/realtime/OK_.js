/**
 * @typedef {Object} OK_ [주식] 실시간 시세 - KOSDAQ거래원
 * @property {string} offerno1 매도증권사코드1(3)
 * @property {string} bidno1 매수증권사코드1(3)
 * @property {string} offertrad1 매도회원사명1(6)
 * @property {string} bidtrad1 매수회원사명1(6)
 * @property {string} tradmdvol1 매도거래량1(10)
 * @property {string} tradmsvol1 매수거래량1(10)
 * @property {string} tradmdrate1 매도거래량비중1(6.2)
 * @property {string} tradmsrate1 매도거래량비중1(6.2)
 * @property {string} tradmdcha1 매도거래량직전대비1(10)
 * @property {string} tradmscha1 매수거래량직전대비1(10)
 * @property {string} offerno2 매도증권사코드2(3)
 * @property {string} bidno2 매수증권사코드2(3)
 * @property {string} offertrad2 매도회원사명2(6)
 * @property {string} bidtrad2 매수회원사명2(6)
 * @property {string} tradmdvol2 매도거래량2(10)
 * @property {string} tradmsvol2 매수거래량2(10)
 * @property {string} tradmdrate2 매도거래량비중2(6.2)
 * @property {string} tradmsrate2 매수거래량비중2(6.2)
 * @property {string} tradmdcha2 매도거래량직전대비2(10)
 * @property {string} tradmscha2 매수거래량직전대비2(10)
 * @property {string} offerno3 매도증권사코드3(3)
 * @property {string} bidno3 매수증권사코드3(3)
 * @property {string} offertrad3 매도회원사명3(6)
 * @property {string} bidtrad3 매수회원사명3(6)
 * @property {string} tradmdvol3 매도거래량3(10)
 * @property {string} tradmsvol3 매수거래량3(10)
 * @property {string} tradmdrate3 매도거래량비중3(6.2)
 * @property {string} tradmsrate3 매수거래량비중3(6.2)
 * @property {string} tradmdcha3 매도거래량직전대비3(10)
 * @property {string} tradmscha3 매수거래량직전대비3(10)
 * @property {string} offerno4 매도증권사코드4(3)
 * @property {string} bidno4 매수증권사코드4(3)
 * @property {string} offertrad4 매도회원사명4(6)
 * @property {string} bidtrad4 매수회원사명4(6)
 * @property {string} tradmdvol4 매도거래량4(10)
 * @property {string} tradmsvol4 매수거래량4(10)
 * @property {string} tradmdrate4 매도거래량비중4(6.2)
 * @property {string} tradmsrate4 매수거래량비중4(6.2)
 * @property {string} tradmdcha4 매도거래량직전대비4(10)
 * @property {string} tradmscha4 매수거래량직전대비4(10)
 * @property {string} offerno5 매도증권사코드5(3)
 * @property {string} bidno5 매수증권사코드5(3)
 * @property {string} offertrad5 매도회원사명5(6)
 * @property {string} bidtrad5 매수회원사명5(6)
 * @property {string} tradmdvol5 매도거래량5(10)
 * @property {string} tradmsvol5 매수거래량5(10)
 * @property {string} tradmdrate5 매도거래량비중5(6.2)
 * @property {string} tradmsrate5 매수거래량비중5(6.2)
 * @property {string} tradmdcha5 매도거래량직전대비5(10)
 * @property {string} tradmscha5 매수거래량직전대비5(10)
 * @property {string} ftradmdvol 외국계증권사매도합계(10)
 * @property {string} ftradmsvol 외국계증권사매수합계(10)
 * @property {string} ftradmdrate 외국계증권사매도거래량비중(6.2)
 * @property {string} ftradmsrate 외국계증권사매수거래량비중(6.2)
 * @property {string} ftradmdcha 외국계증권사매도거래량직전대비(10)
 * @property {string} ftradmscha 외국계증권사매수거래량직전대비(10)
 * @property {string} shcode 단축코드(6)
 * @property {string} tradmdval1 매도거래대금1(15)
 * @property {string} tradmsval1 매수거래대금1(15)
 * @property {string} tradmdavg1 매도평균단가1(7)
 * @property {string} tradmsavg1 매수평균단가1(7)
 * @property {string} tradmdval2 매도거래대금2(15)
 * @property {string} tradmsval2 매수거래대금2(15)
 * @property {string} tradmdavg2 매도평균단가2(7)
 * @property {string} tradmsavg2 매수평균단가2(7)
 * @property {string} tradmdval3 매도거래대금3(15)
 * @property {string} tradmsval3 매수거래대금3(15)
 * @property {string} tradmdavg3 매도평균단가3(7)
 * @property {string} tradmsavg3 매수평균단가3(7)
 * @property {string} tradmdval4 매도거래대금4(15)
 * @property {string} tradmsval4 매수거래대금4(15)
 * @property {string} tradmdavg4 매도평균단가4(7)
 * @property {string} tradmsavg4 매수평균단가4(7)
 * @property {string} tradmdval5 매도거래대금5(15)
 * @property {string} tradmsval5 매수거래대금5(15)
 * @property {string} tradmdavg5 매도평균단가5(7)
 * @property {string} tradmsavg5 매수평균단가5(7)
 * @property {string} ftradmdval 외국계증권사매도거래대금(15)
 * @property {string} ftradmsval 외국계증권사매수거래대금(15)
 * @property {string} ftradmdavg 외국계증권사매도평균단가(7)
 * @property {string} ftradmsavg 외국계증권사매수평균단가(7) 
*/
/** @typedef {(data:OK_)=>void} OK_Func*/
/**
 * [주식] 실시간 시세 - KOSDAQ거래원
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {OK_Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("OK_",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - KOSDAQ거래원 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("OK_",tr_key);
}
