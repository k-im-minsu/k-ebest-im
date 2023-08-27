const lib=require("k-lib-im");
/**
 * @typedef {Object} t1825 [주식] 종목검색 - 종목Q클릭검색_씽큐스마트
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1825_OutBlock} t1825OutBlock
 * @property {Array<t1825_OutBlock1>} t1825OutBlock1
 */
/**
 * @typedef {Object} t1825_OutBlock [주식] 종목검색 - 종목Q클릭검색_씽큐스마트 
 * @property {number} JongCnt 검색종목수(4)
 */
/**
 * @typedef {Object} t1825_OutBlock1 [주식] 종목검색 - 종목Q클릭검색_씽큐스마트 
 * @property {string} shcode 종목코드(6)
 * @property {string} hname 종목명(20)
 * @property {string} sign 전일대비구분(1)
 * @property {number} signcnt 연속봉수(3)
 * @property {number} close 현재가(9)
 * @property {number} change 전일대비(9)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(10)
 * @property {number} volumerate 거래량전일대비율(6.2)
 */
/**
 * [주식] 종목검색 - 종목Q클릭검색_씽큐스마트 (초당 1건 제한)
 * @param {string} search_cd 검색코드(4) - t1826OutBlock의 search_cd 참조
 * @param {string} gubun 구분(0:전체1:코스피2:코스닥)(1) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1825|null>}  실패시 null 반환
 */
 exports.종목Q클릭검색_씽큐스마트 = async(search_cd="",gubun="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1825",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1825InBlock":{
        "search_cd":search_cd,
        "gubun":gubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/item-search",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}