const lib=require("k-lib-im");
/**
 * @typedef {Object} t1702 [주식] 외인/기관 - 외인기관종목별동향1
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1702_OutBlock} t1702OutBlock
 * @property {Array<t1702_OutBlock1>} t1702OutBlock1
 */
/**
 * @typedef {Object} t1702_OutBlock [주식] 외인/기관 - 외인기관종목별동향1 
 * @property {number} cts_idx CTSIDX(4)
 * @property {string} cts_date CTSDATE(8)
 */
/**
 * @typedef {Object} t1702_OutBlock1 [주식] 외인/기관 - 외인기관종목별동향1 
 * @property {string} date 일자(8)
 * @property {number} close 종가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} amt0000 사모펀드(12)
 * @property {number} amt0001 증권(12)
 * @property {number} amt0002 보험(12)
 * @property {number} amt0003 투신(12)
 * @property {number} amt0004 은행(12)
 * @property {number} amt0005 종금(12)
 * @property {number} amt0006 기금(12)
 * @property {number} amt0007 기타법인(12)
 * @property {number} amt0008 개인(12)
 * @property {number} amt0009 등록외국인(12)
 * @property {number} amt0010 미등록외국인(12)
 * @property {number} amt0011 국가외(12)
 * @property {number} amt0018 기관(12)
 * @property {number} amt0088 외인계(등록+미등록)(12)
 * @property {number} amt0099 기타계(기타+국가)(12)
 */
/**
 * [주식] 외인/기관 - 외인기관종목별동향1 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} todt 종료일자(8) - t1702OutBlock1.date <= t1702InBlock.todt
 * @param {string} volvalgb 금액수량구분(0:금액1:수량2:단가)(1) - 
 * @param {string} msmdgb 매수매도구분(0:순매수1:매수2:매도)(1) - 
 * @param {string} cumulgb 누적구분(0:일간1:누적)(1) - 
 * @param {string} cts_date CTSDATE(8) - 최초 조회시 Space 연속조회시 t1702OutBlock.cts_date 입력
 * @param {number} cts_idx CTSIDX(4) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1702|null>}  실패시 null 반환
 */
 exports.외인기관종목별동향1 = async(shcode="",todt="",volvalgb="",msmdgb="",cumulgb="",cts_date="",cts_idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1702",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1702InBlock":{
        "shcode":shcode,
        "todt":todt,
        "volvalgb":volvalgb,
        "msmdgb":msmdgb,
        "cumulgb":cumulgb,
        "cts_date":cts_date,
        "cts_idx":cts_idx
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