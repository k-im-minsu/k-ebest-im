const lib=require("k-lib-im");
/**
 * @typedef {Object} t0425 [주식] 계좌 - 주식체결_미체결
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t0425_OutBlock} t0425OutBlock
 * @property {Array<t0425_OutBlock1>} t0425OutBlock1
 */
/**
 * @typedef {Object} t0425_OutBlock [주식] 계좌 - 주식체결_미체결 
 * @property {number} tqty 총주문수량(18)
 * @property {number} tcheqty 총체결수량(18)
 * @property {number} tordrem 총미체결수량(18)
 * @property {number} cmss 추정수수료(18)
 * @property {number} tamt 총주문금액(18)
 * @property {number} tmdamt 총매도체결금액(18)
 * @property {number} tmsamt 총매수체결금액(18)
 * @property {number} tax 추정제세금(18)
 * @property {string} cts_ordno 주문번호(10)
 */
/**
 * @typedef {Object} t0425_OutBlock1 [주식] 계좌 - 주식체결_미체결 
 * @property {number} ordno 주문번호(10)
 * @property {string} expcode 종목번호(12)
 * @property {string} medosu 구분(10)
 * @property {number} qty 주문수량(9)
 * @property {number} price 주문가격(9)
 * @property {number} cheqty 체결수량(9)
 * @property {number} cheprice 체결가격(9)
 * @property {number} ordrem 미체결잔량(9)
 * @property {number} cfmqty 확인수량(9)
 * @property {string} status 상태(10)
 * @property {number} orgordno 원주문번호(10)
 * @property {string} ordgb 유형(20)
 * @property {string} ordtime 주문시간(8)
 * @property {string} ordermtd 주문매체(10)
 * @property {number} sysprocseq 처리순번(10)
 * @property {string} hogagb 호가유형(2)
 * @property {number} price1 현재가(8)
 * @property {string} orggb 주문구분(2)
 * @property {string} singb 신용구분(2)
 * @property {string} loandt 대출일자(8)
 */
/**
 * [주식] 계좌 - 주식체결_미체결 (초당 2건 제한)
 * @param {string} expcode 종목번호(12) - 
 * @param {string} chegb 체결구분(1) - 0;전체 1:체결 2:미체결
 * @param {string} medosu 매매구분(1) - 0:전체 1:매도 2:매수
 * @param {string} sortgb 정렬순서(1) - 1:주문번호 역순 2:주문번호 순
 * @param {string} cts_ordno 주문번호(10) - 연속조회시 OutBlock의 동일필드 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t0425|null>}  실패시 null 반환
 */
 exports.주식체결_미체결 = async(expcode="",chegb="",medosu="",sortgb="",cts_ordno="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t0425",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t0425InBlock":{
        "expcode":expcode,
        "chegb":chegb,
        "medosu":medosu,
        "sortgb":sortgb,
        "cts_ordno":cts_ordno
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/accno",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}