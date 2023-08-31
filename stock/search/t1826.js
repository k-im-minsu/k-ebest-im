const lib=require("k-lib-im");
/**
 * @typedef {Object} t1826 [주식] 종목검색 - 종목Q클릭검색리스트조회_씽큐스마트
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1826_OutBlock>} t1826OutBlock
 */
/**
 * @typedef {Object} t1826_OutBlock [주식] 종목검색 - 종목Q클릭검색리스트조회_씽큐스마트 
 * @property {string} search_cd 검색코드(4)
 * @property {string} search_nm 검색명(40)
 */
/**
 * [주식] 종목검색 - 종목Q클릭검색리스트조회_씽큐스마트 (초당 1건 제한)
 * @param {string} search_gb 검색구분(0:핵심검색1:지표검색2:시세동향3:투자자동향)(1) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1826|null>}  실패시 null 반환
 */
module.exports = async(search_gb="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1826",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1826InBlock":{
        "search_gb":search_gb
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