const lib=require("k-lib-im");
/**
 * @typedef {Object} t1904 [주식] ETF - ETF구성종목조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1904_OutBlock} t1904OutBlock
 * @property {Array<t1904_OutBlock1>} t1904OutBlock1
 */
/**
 * @typedef {Object} t1904_OutBlock [주식] ETF - ETF구성종목조회 
 * @property {string} chk_tday 당일구분(1)
 * @property {string} date PDF적용일자(8)
 * @property {number} price ETF현재가(8)
 * @property {string} sign ETF전일대비구분(1)
 * @property {number} change ETF전일대비(8)
 * @property {number} diff ETF등락율(6.2)
 * @property {number} volume ETF누적거래량(12)
 * @property {number} nav NAV(8.2)
 * @property {string} navsign NAV전일대비구분(1)
 * @property {number} navchange NAV전일대비(8.2)
 * @property {number} navdiff NAV등락율(6.2)
 * @property {number} jnilnav 전일NAV(8.2)
 * @property {string} jnilnavsign 전일NAV전일대비구분(1)
 * @property {number} jnilnavchange 전일NAV전일대비(8.2)
 * @property {number} jnilnavdiff 전일NAV등락율(6.2)
 * @property {string} upname 업종명(20)
 * @property {string} upcode 업종코드(3)
 * @property {number} upprice 업종현재가(7.2)
 * @property {string} upsign 업종전일비구분(1)
 * @property {number} upchange 업종전일대비(6.2)
 * @property {number} updiff 업종등락율(6.2)
 * @property {string} futname 선물최근월물명(20)
 * @property {string} futcode 선물최근월물코드(8)
 * @property {number} futprice 선물현재가(6.2)
 * @property {string} futsign 선물전일비구분(1)
 * @property {number} futchange 선물전일대비(6.2)
 * @property {number} futdiff 선물등락율(6.2)
 * @property {string} upname2 참고지수명(20)
 * @property {string} upcode2 참고지수코드(3)
 * @property {number} upprice2 참고지수현재가(7.2)
 * @property {number} etftotcap 순자산총액(단위:억)(12)
 * @property {number} etfnum 구성종목수(4)
 * @property {number} etfcunum CU주식수(12)
 * @property {number} cash 현금(12)
 * @property {string} opcom_nmk 운용사명(20)
 * @property {number} tot_pval 전종목평가금액합(12)
 * @property {number} tot_sigatval 전종목구성시가총액합(12)
 */
/**
 * @typedef {Object} t1904_OutBlock1 [주식] ETF - ETF구성종목조회 
 * @property {string} shcode 단축코드(12)
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} value 거래대금(백만)(12)
 * @property {number} icux 단위증권수(계약수/원화현금/USD현금/창고증권)(12)
 * @property {number} parprice 액면금액/설정현금액(12)
 * @property {number} pvalue 평가금액(12)
 * @property {number} sigatvalue 구성시가총액(12)
 * @property {string} profitdate PDF적용일자(8)
 * @property {number} weight 비중(평가금액)(6.2)
 * @property {number} diff2 ETF종목과등락차(6.2)
 */
/**
 * [주식] ETF - ETF구성종목조회 (초당 1건 제한)
 * @param {string} shcode ETF단축코드(6) - 
 * @param {string} date PDF적용일자(8) - 
 * @param {string} sgb 정렬기준(1:평가금액2:증권수)(1) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1904|null>}  실패시 null 반환
 */
module.exports = async(shcode="",date="",sgb="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1904",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1904InBlock":{
        "shcode":shcode,
        "date":date,
        "sgb":sgb
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/etf",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}