const lib=require("k-lib-im");
/**
 * @typedef {Object} t1621 [주식] 투자자 - 업종별분별투자자매매동향_챠트용
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1621_OutBlock} t1621OutBlock
 * @property {Array<t1621_OutBlock1>} t1621OutBlock1
 */
/**
 * @typedef {Object} t1621_OutBlock [주식] 투자자 - 업종별분별투자자매매동향_챠트용 
 * @property {string} indcode 개인투자자코드(4)
 * @property {string} forcode 외국인투자자코드(4)
 * @property {string} syscode 기관계투자자코드(4)
 * @property {string} stocode 증권투자자코드(4)
 * @property {string} invcode 투신투자자코드(4)
 * @property {string} bancode 은행투자자코드(4)
 * @property {string} inscode 보험투자자코드(4)
 * @property {string} fincode 종금투자자코드(4)
 * @property {string} moncode 기금투자자코드(4)
 * @property {string} etccode 기타투자자코드(4)
 * @property {string} natcode 국가투자자코드(4)
 * @property {string} pefcode 사모펀드투자자코드(4)
 * @property {string} jisucd 기준지수코드(8)
 * @property {string} jisunm 기준지수명(20)
 */
/**
 * @typedef {Object} t1621_OutBlock1 [주식] 투자자 - 업종별분별투자자매매동향_챠트용 
 * @property {string} date 일자(8)
 * @property {string} time 시간(6)
 * @property {string} datetime 일자시간(14)
 * @property {number} indmsvol 개인순매수거래량(8)
 * @property {number} indmsamt 개인순매수거래대금(12)
 * @property {number} formsvol 외국인순매수거래량(8)
 * @property {number} formsamt 외국인순매수거래대금(12)
 * @property {number} sysmsvol 기관계순매수거래량(8)
 * @property {number} sysmsamt 기관계순매수거래대금(12)
 * @property {number} stomsvol 증권순매수거래량(8)
 * @property {number} stomsamt 증권순매수거래대금(12)
 * @property {number} invmsvol 투신순매수거래량(8)
 * @property {number} invmsamt 투신순매수거래대금(12)
 * @property {number} banmsvol 은행순매수거래량(8)
 * @property {number} banmsamt 은행순매수거래대금(12)
 * @property {number} insmsvol 보험순매수거래량(8)
 * @property {number} insmsamt 보험순매수거래대금(12)
 * @property {number} finmsvol 종금순매수거래량(8)
 * @property {number} finmsamt 종금순매수거래대금(12)
 * @property {number} monmsvol 기금순매수거래량(8)
 * @property {number} monmsamt 기금순매수거래대금(12)
 * @property {number} etcmsvol 기타순매수거래량(8)
 * @property {number} etcmsamt 기타순매수거래대금(12)
 * @property {number} natmsvol 국가순매수거래량(8)
 * @property {number} natmsamt 국가순매수거래대금(12)
 * @property {number} pefmsvol 사모펀드순매수거래량(8)
 * @property {number} pefmsamt 사모펀드순매수거래대금(12)
 * @property {number} upclose 기준지수(6.2)
 * @property {number} upcvolume 기준체결거래량(8)
 * @property {number} upvolume 기준누적거래량(12)
 * @property {number} upvalue 기준거래대금(12)
 */
/**
 * [주식] 투자자 - 업종별분별투자자매매동향_챠트용 (초당 1건 제한)
 * @param {string} upcode 업종코드(3) - 
 * @param {number} nmin N분(2) - 
 * @param {number} cnt 조회건수(3) - 
 * @param {string} bgubun 전일분(1) - 0:당일 1:전일
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1621|null>}  실패시 null 반환
 */
module.exports = async(upcode="",nmin=0,cnt=0,bgubun="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1621",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1621InBlock":{
        "upcode":upcode,
        "nmin":nmin,
        "cnt":cnt,
        "bgubun":bgubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investor",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}