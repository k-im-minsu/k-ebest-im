const lib=require("k-lib-im");
/**
 * @typedef {Object} t0424 [주식] 계좌 - 주식잔고2
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t0424_OutBlock} t0424OutBlock
 * @property {Array<t0424_OutBlock1>} t0424OutBlock1
 */
/**
 * @typedef {Object} t0424_OutBlock [주식] 계좌 - 주식잔고2 
 * @property {number} sunamt 추정순자산(18)
 * @property {number} dtsunik 실현손익(18)
 * @property {number} mamt 매입금액(18)
 * @property {number} sunamt1 추정D2예수금(18)
 * @property {string} cts_expcode CTS_종목번호(22)
 * @property {number} tappamt 평가금액(18)
 * @property {number} tdtsunik 평가손익(18)
 */
/**
 * @typedef {Object} t0424_OutBlock1 [주식] 계좌 - 주식잔고2 
 * @property {string} expcode 종목번호(12)
 * @property {string} jangb 잔고구분(10)
 * @property {number} janqty 잔고수량(18)
 * @property {number} mdposqt 매도가능수량(18)
 * @property {number} pamt 평균단가(18)
 * @property {number} mamt 매입금액(18)
 * @property {number} sinamt 대출금액(18)
 * @property {string} lastdt 만기일자(8)
 * @property {number} msat 당일매수금액(18)
 * @property {number} mpms 당일매수단가(18)
 * @property {number} mdat 당일매도금액(18)
 * @property {number} mpmd 당일매도단가(18)
 * @property {number} jsat 전일매수금액(18)
 * @property {number} jpms 전일매수단가(18)
 * @property {number} jdat 전일매도금액(18)
 * @property {number} jpmd 전일매도단가(18)
 * @property {number} sysprocseq 처리순번(10)
 * @property {string} loandt 대출일자(8)
 * @property {string} hname 종목명(20)
 * @property {string} marketgb 시장구분(1)
 * @property {string} jonggb 종목구분(1)
 * @property {number} janrt 보유비중(10.2)
 * @property {number} price 현재가(8)
 * @property {number} appamt 평가금액(18)
 * @property {number} dtsunik 평가손익(18)
 * @property {number} sunikrt 수익율(10.2)
 * @property {number} fee 수수료(10)
 * @property {number} tax 제세금(10)
 * @property {number} sininter 신용이자(10)
 */
/**
 * [주식] 계좌 - 주식잔고2 (초당 2건 제한)
 * @param {string} prcgb 단가구분(1) - 
 * @param {string} chegb 체결구분(1) - 
 * @param {string} dangb 단일가구분(1) - 
 * @param {string} charge 제비용포함여부(1) - 
 * @param {string} cts_expcode CTS_종목번호(22) - 연속조회시 OutBlock의 동일필드 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t0424|null>}  실패시 null 반환
 */
module.exports = async(prcgb="",chegb="",dangb="",charge="",cts_expcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t0424",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t0424InBlock":{
        "prcgb":prcgb,
        "chegb":chegb,
        "dangb":dangb,
        "charge":charge,
        "cts_expcode":cts_expcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/accno",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}