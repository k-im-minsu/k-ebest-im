/**
 * @typedef {Object} PM_ [주식] 실시간 시세 - KOSPI프로그램매매전체집계
 * @property {string} time 수신시간(6)
 * @property {string} cdhrem 차익매도호가잔량(6)
 * @property {string} cshrem 차익매수호가잔량(6)
 * @property {string} bdhrem 비차익매도호가잔량(6)
 * @property {string} bshrem 비차익매수호가잔량(6)
 * @property {string} cdhvolume 차익매도호가수량(6)
 * @property {string} cshvolume 차익매수호가수량(6)
 * @property {string} bdhvolume 비차익매도호가수량(6)
 * @property {string} bshvolume 비차익매수호가수량(6)
 * @property {string} cdwvolume 차익매도위탁체결수량(6)
 * @property {string} cdjvolume 차익매도자기체결수량(6)
 * @property {string} cswvolume 차익매수위탁체결수량(6)
 * @property {string} csjvolume 차익매수자기체결수량(6)
 * @property {string} cwvol 차익위탁순매수수량(6)
 * @property {string} cjvol 차익자기순매수수량(6)
 * @property {string} bdwvolume 비차익매도위탁체결수량(6)
 * @property {string} bdjvolume 비차익매도자기체결수량(6)
 * @property {string} bswvolume 비차익매수위탁체결수량(6)
 * @property {string} bsjvolume 비차익매수자기체결수량(6)
 * @property {string} bwvol 비차익위탁순매수수량(6)
 * @property {string} bjvol 비차익자기순매수수량(6)
 * @property {string} dwvolume 전체매도위탁체결수량(6)
 * @property {string} swvolume 전체매수위탁체결수량(6)
 * @property {string} wvol 전체위탁순매수수량(6)
 * @property {string} djvolume 전체매도자기체결수량(6)
 * @property {string} sjvolume 전체매수자기체결수량(6)
 * @property {string} jvol 전체자기순매수수량(6)
 * @property {string} cdwvalue 차익매도위탁체결금액(8)
 * @property {string} cdjvalue 차익매도자기체결금액(8)
 * @property {string} cswvalue 차익매수위탁체결금액(8)
 * @property {string} csjvalue 차익매수자기체결금액(8)
 * @property {string} cwval 차익위탁순매수금액(8)
 * @property {string} cjval 차익자기순매수금액(8)
 * @property {string} bdwvalue 비차익매도위탁체결금액(8)
 * @property {string} bdjvalue 비차익매도자기체결금액(8)
 * @property {string} bswvalue 비차익매수위탁체결금액(8)
 * @property {string} bsjvalue 비차익매수자기체결금액(8)
 * @property {string} bwval 비차익위탁순매수금액(8)
 * @property {string} bjval 비차익자기순매수금액(8)
 * @property {string} dwvalue 전체매도위탁체결금액(8)
 * @property {string} swvalue 전체매수위탁체결금액(8)
 * @property {string} wval 전체위탁순매수금액(8)
 * @property {string} djvalue 전체매도자기체결금액(8)
 * @property {string} sjvalue 전체매수자기체결금액(8)
 * @property {string} jval 전체자기순매수금액(8)
 * @property {string} k200jisu KOSPI200지수(6.2)
 * @property {string} k200sign KOSPI200전일대비구분(1)
 * @property {string} change KOSPI200전일대비(6.2)
 * @property {string} k200basis KOSPI200베이시스(4.2)
 * @property {string} cdvolume 차익매도체결수량합계(6)
 * @property {string} csvolume 차익매수체결수량합계(6)
 * @property {string} cvol 차익순매수수량합계(6)
 * @property {string} bdvolume 비차익매도체결수량합계(6)
 * @property {string} bsvolume 비차익매수체결수량합계(6)
 * @property {string} bvol 비차익순매수수량합계(6)
 * @property {string} tdvolume 전체매도체결수량합계(6)
 * @property {string} tsvolume 전체매수체결수량합계(6)
 * @property {string} tvol 전체순매수수량합계(6)
 * @property {string} cdvalue 차익매도체결금액합계(8)
 * @property {string} csvalue 차익매수체결금액합계(8)
 * @property {string} cval 차익순매수금액합계(8)
 * @property {string} bdvalue 비차익매도체결금액합계(8)
 * @property {string} bsvalue 비차익매수체결금액합계(8)
 * @property {string} bval 비차익순매수금액합계(8)
 * @property {string} tdvalue 전체매도체결금액합계(8)
 * @property {string} tsvalue 전체매수체결금액합계(8)
 * @property {string} tval 전체순매수금액합계(8)
 * @property {string} p_cdvolcha 차익매도체결수량직전대비(6)
 * @property {string} p_csvolcha 차익매수체결수량직전대비(6)
 * @property {string} p_cvolcha 차익순매수수량직전대비(6)
 * @property {string} p_bdvolcha 비차익매도체결수량직전대비(6)
 * @property {string} p_bsvolcha 비차익매수체결수량직전대비(6)
 * @property {string} p_bvolcha 비차익순매수수량직전대비(6)
 * @property {string} p_tdvolcha 전체매도체결수량직전대비(6)
 * @property {string} p_tsvolcha 전체매수체결수량직전대비(6)
 * @property {string} p_tvolcha 전체순매수수량직전대비(6)
 * @property {string} p_cdvalcha 차익매도체결금액직전대비(8)
 * @property {string} p_csvalcha 차익매수체결금액직전대비(8)
 * @property {string} p_cvalcha 차익순매수금액직전대비(8)
 * @property {string} p_bdvalcha 비차익매도체결금액직전대비(8)
 * @property {string} p_bsvalcha 비차익매수체결금액직전대비(8)
 * @property {string} p_bvalcha 비차익순매수금액직전대비(8)
 * @property {string} p_tdvalcha 전체매도체결금액직전대비(8)
 * @property {string} p_tsvalcha 전체매수체결금액직전대비(8)
 * @property {string} p_tvalcha 전체순매수금액직전대비(8)
 * @property {string} gubun 구분값(1) 
*/
/** @typedef {(data:PM_)=>void} PM_Func*/
/**
 * [주식] 실시간 시세 - KOSPI프로그램매매전체집계
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {PM_Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("PM_",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - KOSPI프로그램매매전체집계 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("PM_",tr_key);
}
