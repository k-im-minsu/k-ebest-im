const lib=require("k-lib-im");
/**
 * @typedef {Object} t1764 [주식] 거래원 - 회원사리스트
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1764_OutBlock>} t1764OutBlock
 */
/**
 * @typedef {Object} t1764_OutBlock [주식] 거래원 - 회원사리스트 
 * @property {number} rank 순위(4)
 * @property {string} tradno 거래원번호(3)
 * @property {string} tradname 거래원이름(20)
 */
/**
 * [주식] 거래원 - 회원사리스트 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} gubun1 구분1(1) - 0 or 1 : 전회원사조회 0,1 이외의 값 입력시 InBlock.shcode 종목으로 거래가 있는 회원사만 조회됨
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1764|null>}  실패시 null 반환
 */
module.exports = async(shcode="",gubun1="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1764",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1764InBlock":{
        "shcode":shcode,
        "gubun1":gubun1
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/exchange",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}