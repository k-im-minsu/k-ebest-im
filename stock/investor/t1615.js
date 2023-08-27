const lib=require("k-lib-im");
/**
 * @typedef {Object} t1615 [주식] 투자자 - 투자자매매종합1
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1615_OutBlock} t1615OutBlock
 * @property {Array<t1615_OutBlock1>} t1615OutBlock1
 */
/**
 * @typedef {Object} t1615_OutBlock [주식] 투자자 - 투자자매매종합1 
 * @property {number} dwvolume 위탁매도수량(12)
 * @property {number} dwvalue 위탁매도금액(12)
 * @property {number} djvolume 자기매도수량(12)
 * @property {number} djvalue 자기매도금액(12)
 * @property {number} sum_volume 합계수량(12)
 * @property {number} sum_value 합계금액(12)
 */
/**
 * @typedef {Object} t1615_OutBlock1 [주식] 투자자 - 투자자매매종합1 
 * @property {string} hname 시장명(20)
 * @property {number} sv_08 개인(12)
 * @property {number} sv_17 외국인(12)
 * @property {number} sv_18 기관계(12)
 * @property {number} sv_07 증권(12)
 */
/**
 * [주식] 투자자 - 투자자매매종합1 (초당 1건 제한)
 * @param {string} gubun1 주식구분(1) - 1:수량 2:금액
 * @param {string} gubun2 옵션구분(1) - 1:수량 2:금액
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1615|null>}  실패시 null 반환
 */
 exports.투자자매매종합1 = async(gubun1="",gubun2="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1615",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1615InBlock":{
        "gubun1":gubun1,
        "gubun2":gubun2
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/investor",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}