const lib=require("k-lib-im");
/**
 * @typedef {Object} t0167 [기타] 시간조회 - 서버시간조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t0167_OutBlock} t0167OutBlock
 */
/**
 * @typedef {Object} t0167_OutBlock [기타] 시간조회 - 서버시간조회 
 * @property {string} dt 일자(YYYYMMDD)(8)
 * @property {string} time 시간(HHMMSSssssss)(12)
 */
/**
 * [기타] 시간조회 - 서버시간조회 (초당 10건 제한)
 * @param {string} id id(8) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t0167|null>}  실패시 null 반환
 */
 module.exports = async(id="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t0167",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t0167InBlock":{
        "id":id
       }
    }
  const result= await lib.http.post(__ebestim.url+"/etc/time-search",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}