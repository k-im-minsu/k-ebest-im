const lib=require("k-lib-im");
/**
 * @typedef {Object} t1449 [주식] 시세 - 가격대별매매비중조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1449_OutBlock} t1449OutBlock
 * @property {Array<t1449_OutBlock1>} t1449OutBlock1
 */
/**
 * @typedef {Object} t1449_OutBlock [주식] 시세 - 가격대별매매비중조회 
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} msvolume 매수체결량(12)
 * @property {number} mdvolume 매도체결량(12)
 */
/**
 * @typedef {Object} t1449_OutBlock1 [주식] 시세 - 가격대별매매비중조회 
 * @property {number} price 체결가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} tickdiff 등락율(6.2)
 * @property {number} cvolume 체결수량(12)
 * @property {number} diff 비중(6.2)
 * @property {number} mdvolume 매도체결량(12)
 * @property {number} msvolume 매수체결량(12)
 * @property {number} msdiff 매수비율(6.2)
 */
/**
 * [주식] 시세 - 가격대별매매비중조회 (초당 1건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} dategb 일자구분(1) - 1#당일 2#전일 3#당일+전일
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1449|null>}  실패시 null 반환
 */
module.exports= async(shcode="",dategb="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1449",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1449InBlock":{
        "shcode":shcode,
        "dategb":dategb
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/market-data",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}