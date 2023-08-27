const lib=require("k-lib-im");
/**
 * @typedef {Object} t3202 [주식] 투자정보 - 종목별증시일정
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t3202_OutBlock>} t3202OutBlock
 */
/**
 * @typedef {Object} t3202_OutBlock [주식] 투자정보 - 종목별증시일정 
 * @property {string} recdt 기준일(8)
 * @property {string} tableid 테이블아이디(6)
 * @property {string} upgu 업무구분(2) - 01:유상증자 02:무상증가 03:배당 04:감자 05:합병/분할 06:매수청구 07:실권주 08:액면교체 09:주주총회 10:상호변경 11:국내CB전환 12:해외CB전환 13:해외BW행사 14:스톡옵션행사
 * @property {string} custno 발행체번호(5)
 * @property {string} custnm 발행회사명(80)
 * @property {string} shcode 종목코드(6)
 * @property {string} upunm 업무명(20)
 */
/**
 * [주식] 투자정보 - 종목별증시일정 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} date 조회일자(8) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t3202|null>}  실패시 null 반환
 */
 exports.종목별증시일정 = async(shcode="",date="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t3202",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t3202InBlock":{
        "shcode":shcode,
        "date":date
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investinfo",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}