const lib=require("k-lib-im");
/**
 * @typedef {Object} t1972 [주식] ELW - ELW현재가_거래원조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1972_OutBlock} t1972OutBlock
 */
/**
 * @typedef {Object} t1972_OutBlock [주식] ELW - ELW현재가_거래원조회 
 * @property {string} hname 한글명(40)
 * @property {string} expcode 표준코드(12)
 * @property {string} shcode 단축코드(9)
 * @property {string} offerno1 매도증권사코드1(6)
 * @property {string} bidno1 매수증권사코드1(6)
 * @property {number} dvol1 총매도수량1(12)
 * @property {number} svol1 총매수수량1(12)
 * @property {number} dcha1 매도증감1(12)
 * @property {number} scha1 매수증감1(12)
 * @property {number} ddiff1 매도비율1(6.2)
 * @property {number} sdiff1 매수비율1(6.2)
 * @property {string} offerno2 매도증권사코드2(6)
 * @property {string} bidno2 매수증권사코드2(6)
 * @property {number} dvol2 총매도수량2(12)
 * @property {number} svol2 총매수수량2(12)
 * @property {number} dcha2 매도증감2(12)
 * @property {number} scha2 매수증감2(12)
 * @property {number} ddiff2 매도비율2(6.2)
 * @property {number} sdiff2 매수비율2(6.2)
 * @property {string} offerno3 매도증권사코드3(6)
 * @property {string} bidno3 매수증권사코드3(6)
 * @property {number} dvol3 총매도수량3(12)
 * @property {number} svol3 총매수수량3(12)
 * @property {number} dcha3 매도증감3(12)
 * @property {number} scha3 매수증감3(12)
 * @property {number} ddiff3 매도비율3(6.2)
 * @property {number} sdiff3 매수비율3(6.2)
 * @property {string} offerno4 매도증권사코드4(6)
 * @property {string} bidno4 매수증권사코드4(6)
 * @property {number} dvol4 총매도수량4(12)
 * @property {number} svol4 총매수수량4(12)
 * @property {number} dcha4 매도증감4(12)
 * @property {number} scha4 매수증감4(12)
 * @property {number} ddiff4 매도비율4(6.2)
 * @property {number} sdiff4 매수비율4(6.2)
 * @property {string} offerno5 매도증권사코드5(6)
 * @property {string} bidno5 매수증권사코드5(6)
 * @property {number} dvol5 총매도수량5(12)
 * @property {number} svol5 총매수수량5(12)
 * @property {number} dcha5 매도증감5(12)
 * @property {number} scha5 매수증감5(12)
 * @property {number} ddiff5 매도비율5(6.2)
 * @property {number} sdiff5 매수비율5(6.2)
 * @property {number} fwdvl 외국계매도합계수량(12)
 * @property {number} fwsvl 외국계매수합계수량(12)
 * @property {number} ftradmdcha 외국계매도직전대비(12)
 * @property {number} ftradmscha 외국계매수직전대비(12)
 * @property {number} fwddiff 외국계매도합계비율(6.2)
 * @property {number} fwsdiff 외국계매수합계비율(6.2)
 */
/**
 * [주식] ELW - ELW현재가_거래원조회 (초당 2건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1972|null>}  실패시 null 반환
 */
module.exports= async(shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1972",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1972InBlock":{
        "shcode":shcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}