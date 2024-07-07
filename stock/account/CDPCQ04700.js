const lib=require("k-lib-im");
/**
 * @typedef {Object} CDPCQ04700 [주식] 계좌 - 계좌_거래내역
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {CDPCQ04700_OutBlock1} CDPCQ04700OutBlock1
 * @property {CDPCQ04700_OutBlock2} CDPCQ04700OutBlock2
 * @property {Array<CDPCQ04700_OutBlock3>} CDPCQ04700OutBlock3
 * @property {CDPCQ04700_OutBlock4} CDPCQ04700OutBlock4
 * @property {CDPCQ04700_OutBlock5} CDPCQ04700OutBlock5
 */
/**
 * @typedef {Object} CDPCQ04700_OutBlock1 [주식] 계좌 - 계좌_거래내역 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} QryTp 조회구분(1)
 * @property {string} AcntNo 계좌번호(20)
 * @property {string} Pwd 비밀번호(8)
 * @property {string} QrySrtDt 조회시작일(8)
 * @property {string} QryEndDt 조회종료일(8)
 * @property {number} SrtNo 시작번호(10)
 * @property {string} PdptnCode 상품유형코드(2)
 * @property {string} IsuLgclssCode 종목대분류코드(2)
 * @property {string} IsuNo 종목번호(12)
 */
/**
 * @typedef {Object} CDPCQ04700_OutBlock2 [주식] 계좌 - 계좌_거래내역 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} AcntNm 계좌명(40)
 */
/**
 * @typedef {Object} CDPCQ04700_OutBlock3 [주식] 계좌 - 계좌_거래내역 
 * @property {string} AcntNo 계좌번호(20)
 * @property {string} TrdDt 거래일자(8)
 * @property {number} TrdNo 거래번호(10)
 * @property {string} TpCodeNm 구분코드명(50)
 * @property {string} SmryNo 적요번호(4)
 * @property {string} SmryNm 적요명(40)
 * @property {string} CancTpNm 취소구분(20)
 * @property {number} TrdQty 거래수량(16)
 * @property {number} Trtax 거래세(16)
 * @property {number} FcurrAdjstAmt 외화정산금액(25.4)
 * @property {number} AdjstAmt 정산금액(16)
 * @property {number} OvdSum 연체합(16)
 * @property {number} DpsBfbalAmt 예수금전잔금액(16)
 * @property {number} SellPldgRfundAmt 매도담보상환금(16)
 * @property {number} DpspdgLoanBfbalAmt 예탁담보대출전잔금액(16)
 * @property {string} TrdmdaNm 거래매체명(40)
 * @property {number} OrgTrdNo 원거래번호(10)
 * @property {string} IsuNm 종목명(40)
 * @property {number} TrdUprc 거래단가(13.2)
 * @property {number} CmsnAmt 수수료(16)
 * @property {number} FcurrCmsnAmt 외화수수료금액(15.2)
 * @property {number} RfundDiffAmt 상환차이금액(16)
 * @property {number} RepayAmtSum 변제금합계(16)
 * @property {number} SecCrbalQty 유가증권금잔수량(16)
 * @property {number} CslLoanRfundIntrstAmt 매도대금담보대출상환이자금액(16)
 * @property {number} DpspdgLoanCrbalAmt 예탁담보대출금잔금액(16)
 * @property {string} TrxTime 처리시각(9)
 * @property {number} Inouno 출납번호(10)
 * @property {string} IsuNo 종목번호(12)
 * @property {number} TrdAmt 거래금액(16)
 * @property {number} ChckAmt 수표금액(16)
 * @property {number} TaxSumAmt 세금합계금액(16)
 * @property {number} FcurrTaxSumAmt 외화세금합계금액(26.6)
 * @property {number} IntrstUtlfee 이자이용료(16)
 * @property {number} MnyDvdAmt 배당금액(16)
 * @property {number} RcvblOcrAmt 미수발생금액(16)
 * @property {string} TrxBrnNo 처리지점번호(3)
 * @property {string} TrxBrnNm 처리지점명(40)
 * @property {number} DpspdgLoanAmt 예탁담보대출금액(16)
 * @property {number} DpspdgLoanRfundAmt 예탁담보대출상환금액(16)
 * @property {number} BasePrc 기준가(13.2)
 * @property {number} DpsCrbalAmt 예수금금잔금액(16)
 * @property {number} BoaAmt 과표(16)
 * @property {number} MnyoutAbleAmt 출금가능금액(16)
 * @property {number} BcrLoanOcrAmt 수익증권담보대출발생금(16)
 * @property {number} BcrLoanBfbalAmt 수익증권담보대출전잔금(16)
 * @property {number} BnsBasePrc 매매기준가(20.1)
 * @property {number} TaxchrBasePrc 과세기준가(20.1)
 * @property {number} TrdUnit 거래좌수(16)
 * @property {number} BalUnit 잔고좌수(16)
 * @property {number} EvrTax 제세금(16)
 * @property {number} EvalAmt 평가금액(16)
 * @property {number} BcrLoanRfundAmt 수익증권담보대출상환금(16)
 * @property {number} BcrLoanCrbalAmt 수익증권담보대출금잔금(16)
 * @property {number} AddMgnOcrTotamt 추가증거금발생총액(16)
 * @property {number} AddMnyMgnOcrAmt 추가현금증거금발생금액(16)
 * @property {number} AddMgnDfryTotamt 추가증거금납부총액(16)
 * @property {number} AddMnyMgnDfryAmt 추가현금증거금납부금액(16)
 * @property {number} BnsplAmt 매매손익금액(16)
 * @property {number} Ictax 소득세(16)
 * @property {number} Ihtax 주민세(16)
 * @property {string} LoanDt 대출일(8)
 * @property {string} CrcyCode 통화코드(3)
 * @property {number} FcurrAmt 외화금액(24.4)
 * @property {number} FcurrTrdAmt 외화거래금액(24.4)
 * @property {number} FcurrDps 외화예수금(21.4)
 * @property {number} FcurrDpsBfbalAmt 외화예수금전잔금액(21.4)
 * @property {string} OppAcntNm 상대계좌명(40)
 * @property {string} OppAcntNo 상대계좌번호(20)
 * @property {number} LoanRfundAmt 대출상환금액(16)
 * @property {number} LoanIntrstAmt 대출이자금액(16)
 * @property {string} AskpsnNm 의뢰인명(40)
 * @property {string} OrdDt 주문일자(8)
 * @property {number} TrdXchrat 거래환율(15.4)
 * @property {number} RdctCmsn 감면수수료(21.4)
 * @property {number} FcurrStmpTx 외화인지세(21.4)
 * @property {number} FcurrElecfnTrtax 외화전자금융거래세(21.4)
 * @property {number} FcstckTrtax 외화증권거래세(21.4)
 */
/**
 * @typedef {Object} CDPCQ04700_OutBlock4 [주식] 계좌 - 계좌_거래내역 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {number} PnlSumAmt 손익합계금액(16)
 * @property {number} CtrctAsm 약정누계(16)
 * @property {number} CmsnAmtSumAmt 수수료합계금액(16)
 */
/**
 * @typedef {Object} CDPCQ04700_OutBlock5 [주식] 계좌 - 계좌_거래내역 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {number} MnyinAmt 입금금액(16)
 * @property {number} SecinAmt 입고금액(16)
 * @property {number} MnyoutAmt 출금금액(16)
 * @property {number} SecoutAmt 출고금액(16)
 * @property {number} DiffAmt 차이금액(16)
 * @property {number} DiffAmt0 차이금액0(16)
 * @property {number} SellQty 매도수량(16)
 * @property {number} SellAmt 매도금액(16)
 * @property {number} SellCmsn 매도수수료(16)
 * @property {number} EvrTax 제세금(19)
 * @property {number} FcurrSellAdjstAmt 외화매도정산금액(25.4)
 * @property {number} BuyQty 매수수량(16)
 * @property {number} BuyAmt 매수금액(16)
 * @property {number} BuyCmsn 매수수수료(16)
 * @property {number} ExecTax 체결세금(16)
 * @property {number} FcurrBuyAdjstAmt 외화매수정산금액(25.4)
 */
/**
 * [주식] 계좌 - 계좌_거래내역 (초당 1건 제한)
 * @param {string} QryTp 조회구분(1) - 0#전체, 1#입출금, 2#입출고, 3#매매, 4#환전, 9#기타
 * @param {string} QrySrtDt 조회시작일(8) - 
 * @param {string} QryEndDt 조회종료일(8) - 
 * @param {number} SrtNo 시작번호(10) - 
 * @param {string} PdptnCode 상품유형코드(2) - 01
 * @param {string} IsuLgclssCode 종목대분류코드(2) - 00#전체, 01#주식, 02#채권, 04#펀드, 03#선물, 05#해외주식, 06#해외파생
 * @param {string} IsuNo 종목번호(12) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<CDPCQ04700|null>}  실패시 null 반환
 */
module.exports = async(QryTp="",QrySrtDt="",QryEndDt="",SrtNo=0,PdptnCode="",IsuLgclssCode="",IsuNo="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"CDPCQ04700",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "CDPCQ04700InBlock1":{
        "QryTp":QryTp,
        "QrySrtDt":QrySrtDt,
        "QryEndDt":QryEndDt,
        "SrtNo":SrtNo,
        "PdptnCode":PdptnCode,
        "IsuLgclssCode":IsuLgclssCode,
        "IsuNo":IsuNo
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