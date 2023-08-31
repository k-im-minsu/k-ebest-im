const lib=require("k-lib-im");
/**
 * @typedef {Object} t1717 [주식] 외인/기관 - 외인기관종목별동향3
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1717_OutBlock>} t1717OutBlock
 */
/**
 * @typedef {Object} t1717_OutBlock [주식] 외인/기관 - 외인기관종목별동향3 
 * @property {string} date 일자(8)
 * @property {number} close 종가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} tjj0000_vol 사모펀드(순매수량)(12)
 * @property {number} tjj0001_vol 증권(순매수량)(12)
 * @property {number} tjj0002_vol 보험(순매수량)(12)
 * @property {number} tjj0003_vol 투신(순매수량)(12)
 * @property {number} tjj0004_vol 은행(순매수량)(12)
 * @property {number} tjj0005_vol 종금(순매수량)(12)
 * @property {number} tjj0006_vol 기금(순매수량)(12)
 * @property {number} tjj0007_vol 기타법인(순매수량)(12)
 * @property {number} tjj0008_vol 개인(순매수량)(12)
 * @property {number} tjj0009_vol 등록외국인(순매수량)(12)
 * @property {number} tjj0010_vol 미등록외국인(순매수량)(12)
 * @property {number} tjj0011_vol 국가외(순매수량)(12)
 * @property {number} tjj0018_vol 기관(순매수량)(12)
 * @property {number} tjj0016_vol 외인계(순매수량)(등록+미등록)(12)
 * @property {number} tjj0017_vol 기타계(순매수량)(기타+국가)(12)
 * @property {number} tjj0000_dan 사모펀드(단가)(12)
 * @property {number} tjj0001_dan 증권(단가)(12)
 * @property {number} tjj0002_dan 보험(단가)(12)
 * @property {number} tjj0003_dan 투신(단가)(12)
 * @property {number} tjj0004_dan 은행(단가)(12)
 * @property {number} tjj0005_dan 종금(단가)(12)
 * @property {number} tjj0006_dan 기금(단가)(12)
 * @property {number} tjj0007_dan 기타법인(단가)(12)
 * @property {number} tjj0008_dan 개인(단가)(12)
 * @property {number} tjj0009_dan 등록외국인(단가)(12)
 * @property {number} tjj0010_dan 미등록외국인(단가)(12)
 * @property {number} tjj0011_dan 국가외(단가)(12)
 * @property {number} tjj0018_dan 기관(단가)(12)
 * @property {number} tjj0016_dan 외인계(단가)(등록+미등록)(12)
 * @property {number} tjj0017_dan 기타계(단가)(기타+국가)(12)
 */
/**
 * [주식] 외인/기관 - 외인기관종목별동향3 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} gubun 구분(0:일간순매수1:기간누적순매수)(1) - 
 * @param {string} fromdt 시작일자(일간조회일경우는space)(8) - OutBlock.date >= fromdt
 * @param {string} todt 종료일자(8) - OutBlock.date <= todt
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1717|null>}  실패시 null 반환
 */
module.exports = async(shcode="",gubun="",fromdt="",todt="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1717",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1717InBlock":{
        "shcode":shcode,
        "gubun":gubun,
        "fromdt":fromdt,
        "todt":todt
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/frgr-itt",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}