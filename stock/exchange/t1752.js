const lib=require("k-lib-im");
/**
 * @typedef {Object} t1752 [주식] 거래원 - 종목별상위회원사
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1752_OutBlock} t1752OutBlock
 * @property {Array<t1752_OutBlock1>} t1752OutBlock1
 */
/**
 * @typedef {Object} t1752_OutBlock [주식] 거래원 - 종목별상위회원사 
 * @property {number} fwdvl 외국계매도(12)
 * @property {number} fwsvl 외국계매수(12)
 * @property {number} cts_idx CTSIDX(4)
 */
/**
 * @typedef {Object} t1752_OutBlock1 [주식] 거래원 - 종목별상위회원사 
 * @property {string} tradname 회원사(20)
 * @property {number} tradmdvol 매도수량(12)
 * @property {number} tradmsvol 매수수량(12)
 * @property {number} tradmssvol 순매수(12)
 * @property {number} wintrd 창구거래(12)
 * @property {number} winrat 비중(6.1)
 * @property {string} tradno 회원사코드(3)
 * @property {string} wgubun 외국계여부(1)
 * @property {number} swinrat 순비중(6.1)
 */
/**
 * [주식] 거래원 - 종목별상위회원사 (초당 1건 제한)
 * @param {string} shcode 종목코드(6) - 
 * @param {string} traddate1 조회날짜1(8) - 기간 조회시 시작일(YYYYMMDD)
 * @param {string} traddate2 조회날짜2(8) - 기간 조회시 종료일(YYYYMMDD)
 * @param {string} fwgubun1 외국계구분(1) - 0 : 전체 1 : 외국계 회원사만 조회
 * @param {number} cts_idx CTSIDX(4) - OutBlock 동일필드 연속조회시 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1752|null>}  실패시 null 반환
 */
 module.exports = async(shcode="",traddate1="",traddate2="",fwgubun1="",cts_idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1752",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1752InBlock":{
        "shcode":shcode,
        "traddate1":traddate1,
        "traddate2":traddate2,
        "fwgubun1":fwgubun1,
        "cts_idx":cts_idx
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/exchange",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}