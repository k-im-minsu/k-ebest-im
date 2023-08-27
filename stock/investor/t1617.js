const lib=require("k-lib-im");
/**
 * @typedef {Object} t1617 [주식] 투자자 - 투자자매매종합2
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1617_OutBlock} t1617OutBlock
 * @property {Array<t1617_OutBlock1>} t1617OutBlock1
 */
/**
 * @typedef {Object} t1617_OutBlock [주식] 투자자 - 투자자매매종합2 
 * @property {string} cts_date CTSDATE(8)
 * @property {string} cts_time CTSTIME(8)
 * @property {number} ms_08 개인매수(12)
 * @property {number} md_08 개인매도(12)
 * @property {number} sv_08 개인순매수(12)
 * @property {number} ms_17 외국인매수(12)
 * @property {number} md_17 외국인매도(12)
 * @property {number} sv_17 외국인순매수(12)
 * @property {number} ms_18 기관계매수(12)
 * @property {number} md_18 기관계매도(12)
 * @property {number} sv_18 기관계순매수(12)
 * @property {number} ms_01 증권매수(12)
 * @property {number} md_01 증권매도(12)
 * @property {number} sv_01 증권순매수(12)
 */
/**
 * @typedef {Object} t1617_OutBlock1 [주식] 투자자 - 투자자매매종합2 
 * @property {string} date 날짜(8)
 * @property {string} time 시간(8)
 * @property {number} sv_08 개인(12)
 * @property {number} sv_17 외국인(12)
 * @property {number} sv_18 기관계(12)
 * @property {number} sv_01 증권(12)
 */
/**
 * [주식] 투자자 - 투자자매매종합2 (초당 1건 제한)
 * @param {string} gubun1 시장구분(1) - 1:코스피 2:코스닥 3:선물 4:콜옵션 5:풋옵션 6:주식선물 7:변동성 8:M선물 9:M콜옵션 0:M풋옵션
 * @param {string} gubun2 수량금액구분(1:수량2:금액)(1) - 
 * @param {string} gubun3 일자구분(1:시간대별2:일별)(1) - 
 * @param {string} cts_date CTSDATE(연속키값-일자)(8) - 
 * @param {string} cts_time CTSTIME(연속키값-시간)(8) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1617|null>}  실패시 null 반환
 */
 exports.투자자매매종합2 = async(gubun1="",gubun2="",gubun3="",cts_date="",cts_time="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1617",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1617InBlock":{
        "gubun1":gubun1,
        "gubun2":gubun2,
        "gubun3":gubun3,
        "cts_date":cts_date,
        "cts_time":cts_time
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investor",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}