const lib=require("k-lib-im");
/**
 * @typedef {Object} t3521 [주식] 투자정보 - 해외지수조회_API용
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 */
 
/**
 * [주식] 투자정보 - 해외지수조회_API용 (초당 1건 제한)
 * @param {string} kind 종목종류(1) - S : 해외지수 R : 해외환율 F : 해외선물
 * @param {string} symbol SYMBOL(16) - 해외지수/환율/선물 SYMBOL ----- 주요해외지수 SYMBOL ----- DJI#DJI : 다우산업 NAS#IXIC : 나스닥 종합 SPI#SPX : S&P 500 USI#SOXX : 필라델피아 반도체 NII#NI225 : 니케이 225 TWS#TI01 : 대만 가권 SHS#000002 : 상해 A SHS#000003 : 상해 B SGI#STI : 싱가폴 STI HSI#HSI : 항셍 PAS#CAC40 : 프랑스 CAC 40 LNS#FTSE100 : 영국 FTSE 100 XTR#DAX30 : 독일 DAX 30
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t3521|null>}  실패시 null 반환
 */
module.exports = async(kind="",symbol="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t3521",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t3521InBlock":{
        "kind":kind,
        "symbol":symbol
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investinfo",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}