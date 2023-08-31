const lib=require("k-lib-im");
/**
 * @typedef {Object} t1636 [주식] 프로그램 - 종목별프로그램매매동향
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1636_OutBlock} t1636OutBlock
 * @property {Array<t1636_OutBlock1>} t1636OutBlock1
 */
/**
 * @typedef {Object} t1636_OutBlock [주식] 프로그램 - 종목별프로그램매매동향 
 * @property {number} cts_idx IDXCTS(4)
 */
/**
 * @typedef {Object} t1636_OutBlock1 [주식] 프로그램 - 종목별프로그램매매동향 
 * @property {number} rank 순위(8)
 * @property {string} hname 종목명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 대비구분(1)
 * @property {number} change 대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} svalue 순매수금액(12)
 * @property {number} offervalue 매도금액(12)
 * @property {number} stksvalue 매수금액(12)
 * @property {number} svolume 순매수수량(12)
 * @property {number} offervolume 매도수량(12)
 * @property {number} stksvolume 매수수량(12)
 * @property {number} sgta 시가총액(15)
 * @property {number} rate 비중(6.2)
 * @property {string} shcode 종목코드(6)
 */
/**
 * [주식] 프로그램 - 종목별프로그램매매동향 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 0:코스피 1:코스닥
 * @param {string} gubun1 금액수량구분(1) - 0:수량 1:금액
 * @param {string} gubun2 정렬기준(1) - 0:시가총액비중 1:순매수상위 2:순매도상위 3:매도상위 4:매수상위
 * @param {string} shcode 종목코드(6) - 
 * @param {number} cts_idx IDXCTS(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 cts_idx 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1636|null>}  실패시 null 반환
 */
module.exports= async(gubun="",gubun1="",gubun2="",shcode="",cts_idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1636",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1636InBlock":{
        "gubun":gubun,
        "gubun1":gubun1,
        "gubun2":gubun2,
        "shcode":shcode,
        "cts_idx":cts_idx
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/program",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}