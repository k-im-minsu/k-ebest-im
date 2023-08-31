const lib=require("k-lib-im");
/**
 * @typedef {Object} t8424 [업종] 시세 - 전체업종
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t8424_OutBlock>} t8424OutBlock
 */
/**
 * @typedef {Object} t8424_OutBlock [업종] 시세 - 전체업종 
 * @property {string} hname 업종명(20)
 * @property {string} upcode 업종코드(3)
 */
/**
 * [업종] 시세 - 전체업종 (초당 1건 제한)
 * @param {string} gubun1 구분1(1) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t8424|null>}  실패시 null 반환
 */
module.exports = async(gubun1="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t8424",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t8424InBlock":{
        "gubun1":gubun1
       }
    }
  const result= await lib.http.post(__ebestim.url+"/indtp/market-data",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}