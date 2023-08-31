const lib=require("k-lib-im");
/**
 * @typedef {Object} t1954 [주식] ELW - ELW일별주가
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1954_OutBlock} t1954OutBlock
 * @property {Array<t1954_OutBlock1>} t1954OutBlock1
 */
/**
 * @typedef {Object} t1954_OutBlock [주식] ELW - ELW일별주가 
 * @property {string} date 날짜(8)
 * @property {string} bsjgubun 기초자산구분(1)
 * @property {string} bscode 기초자산코드(현물)(6)
 * @property {string} bjcode 기초자산코드(지수)(3)
 */
/**
 * @typedef {Object} t1954_OutBlock1 [주식] ELW - ELW일별주가 
 * @property {string} date 날짜(8)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {number} close 종가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} bsprice 기초자산(현물)(8)
 * @property {number} bjprice 기초자산(지수)(8.2)
 * @property {string} bsign 전일대비구분(1)
 * @property {number} bschange 전일대비(현물)(8)
 * @property {number} bjchange 전일대비(지수)(8.2)
 * @property {number} bdiff 등락율(6.2)
 * @property {number} bvolume 기초자산거래량(12)
 * @property {number} parity 패리티(6.2)
 * @property {number} egearing e.기어링(6.2)
 * @property {number} premium 프리미엄(6.2)
 * @property {number} berate 손익분기(6.2)
 * @property {number} capt 자본지지(6.2)
 * @property {number} gearing 기어링(6.2)
 * @property {string} mness Moneyness(1)
 */
/**
 * [주식] ELW - ELW일별주가 (초당 1건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} date 날짜(8) - 사용안함
 * @param {number} cnt 건수(3) - 조회개수
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1954|null>}  실패시 null 반환
 */
module.exports = async(shcode="",date="",cnt=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1954",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1954InBlock":{
        "shcode":shcode,
        "date":date,
        "cnt":cnt
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}