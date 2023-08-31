const lib=require("k-lib-im");
/**
 * @typedef {Object} CSPAQ12300 [주식] 계좌 - BEP단가조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {CSPAQ12300_OutBlock1} CSPAQ12300OutBlock1
 * @property {CSPAQ12300_OutBlock2} CSPAQ12300OutBlock2
 * @property {Array<CSPAQ12300_OutBlock3>} CSPAQ12300OutBlock3
 */
/**
 * @typedef {Object} CSPAQ12300_OutBlock1 [주식] 계좌 - BEP단가조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} AcntNo 계좌번호(20)
 * @property {string} Pwd 비밀번호(8)
 * @property {string} BalCreTp 잔고생성구분(1)
 * @property {string} CmsnAppTpCode 수수료적용구분(1)
 * @property {string} D2balBaseQryTp D2잔고기준조회구분(1)
 * @property {string} UprcTpCode 단가구분(1)
 */
/**
 * @typedef {Object} CSPAQ12300_OutBlock2 [주식] 계좌 - BEP단가조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} BrnNm 지점명(40)
 * @property {string} AcntNm 계좌명(40)
 * @property {number} MnyOrdAbleAmt 현금주문가능금액(16)
 * @property {number} MnyoutAbleAmt 출금가능금액(16)
 * @property {number} SeOrdAbleAmt 거래소금액(16)
 * @property {number} KdqOrdAbleAmt 코스닥금액(16)
 * @property {number} HtsOrdAbleAmt HTS주문가능금액(16)
 * @property {number} MgnRat100pctOrdAbleAmt 증거금률100퍼센트주문가능금액(16)
 * @property {number} BalEvalAmt 잔고평가금액(16)
 * @property {number} PchsAmt 매입금액(16)
 * @property {number} RcvblAmt 미수금액(16)
 * @property {number} PnlRat 손익율(18.6)
 * @property {number} InvstOrgAmt 투자원금(20)
 * @property {number} InvstPlAmt 투자손익금액(16)
 * @property {number} CrdtPldgOrdAmt 신용담보주문금액(16)
 * @property {number} Dps 예수금(16)
 * @property {number} D1Dps D1예수금(16)
 * @property {number} D2Dps D2예수금(16)
 * @property {string} OrdDt 주문일(8)
 * @property {number} MnyMgn 현금증거금액(16)
 * @property {number} SubstMgn 대용증거금액(16)
 * @property {number} SubstAmt 대용금액(16)
 * @property {number} PrdayBuyExecAmt 전일매수체결금액(16)
 * @property {number} PrdaySellExecAmt 전일매도체결금액(16)
 * @property {number} CrdayBuyExecAmt 금일매수체결금액(16)
 * @property {number} CrdaySellExecAmt 금일매도체결금액(16)
 * @property {number} EvalPnlSum 평가손익합계(15)
 * @property {number} DpsastTotamt 예탁자산총액(16)
 * @property {number} Evrprc 제비용(19)
 * @property {number} RuseAmt 재사용금액(16)
 * @property {number} EtclndAmt 기타대여금액(16)
 * @property {number} PrcAdjstAmt 가정산금액(16)
 * @property {number} D1CmsnAmt D1수수료(16)
 * @property {number} D2CmsnAmt D2수수료(16)
 * @property {number} D1EvrTax D1제세금(16)
 * @property {number} D2EvrTax D2제세금(16)
 * @property {number} D1SettPrergAmt D1결제예정금액(16)
 * @property {number} D2SettPrergAmt D2결제예정금액(16)
 * @property {number} PrdayKseMnyMgn 전일KSE현금증거금(16)
 * @property {number} PrdayKseSubstMgn 전일KSE대용증거금(16)
 * @property {number} PrdayKseCrdtMnyMgn 전일KSE신용현금증거금(16)
 * @property {number} PrdayKseCrdtSubstMgn 전일KSE신용대용증거금(16)
 * @property {number} CrdayKseMnyMgn 금일KSE현금증거금(16)
 * @property {number} CrdayKseSubstMgn 금일KSE대용증거금(16)
 * @property {number} CrdayKseCrdtMnyMgn 금일KSE신용현금증거금(16)
 * @property {number} CrdayKseCrdtSubstMgn 금일KSE신용대용증거금(16)
 * @property {number} PrdayKdqMnyMgn 전일코스닥현금증거금(16)
 * @property {number} PrdayKdqSubstMgn 전일코스닥대용증거금(16)
 * @property {number} PrdayKdqCrdtMnyMgn 전일코스닥신용현금증거금(16)
 * @property {number} PrdayKdqCrdtSubstMgn 전일코스닥신용대용증거금(16)
 * @property {number} CrdayKdqMnyMgn 금일코스닥현금증거금(16)
 * @property {number} CrdayKdqSubstMgn 금일코스닥대용증거금(16)
 * @property {number} CrdayKdqCrdtMnyMgn 금일코스닥신용현금증거금(16)
 * @property {number} CrdayKdqCrdtSubstMgn 금일코스닥신용대용증거금(16)
 * @property {number} PrdayFrbrdMnyMgn 전일프리보드현금증거금(16)
 * @property {number} PrdayFrbrdSubstMgn 전일프리보드대용증거금(16)
 * @property {number} CrdayFrbrdMnyMgn 금일프리보드현금증거금(16)
 * @property {number} CrdayFrbrdSubstMgn 금일프리보드대용증거금(16)
 * @property {number} PrdayCrbmkMnyMgn 전일장외현금증거금(16)
 * @property {number} PrdayCrbmkSubstMgn 전일장외대용증거금(16)
 * @property {number} CrdayCrbmkMnyMgn 금일장외현금증거금(16)
 * @property {number} CrdayCrbmkSubstMgn 금일장외대용증거금(16)
 * @property {number} DpspdgQty 예탁담보수량(16)
 * @property {number} BuyAdjstAmtD2 매수정산금(D+2)(16)
 * @property {number} SellAdjstAmtD2 매도정산금(D+2)(16)
 * @property {number} RepayRqrdAmtD1 변제소요금(D+1)(16)
 * @property {number} RepayRqrdAmtD2 변제소요금(D+2)(16)
 * @property {number} LoanAmt 대출금액(16)
 */
/**
 * @typedef {Object} CSPAQ12300_OutBlock3 [주식] 계좌 - BEP단가조회 
 * @property {string} IsuNo 종목번호(12)
 * @property {string} IsuNm 종목명(40)
 * @property {string} SecBalPtnCode 유가증권잔고유형코드(2)
 * @property {string} SecBalPtnNm 유가증권잔고유형명(40)
 * @property {number} BalQty 잔고수량(16)
 * @property {number} BnsBaseBalQty 매매기준잔고수량(16)
 * @property {number} CrdayBuyExecQty 금일매수체결수량(16)
 * @property {number} CrdaySellExecQty 금일매도체결수량(16)
 * @property {number} SellPrc 매도가(21.4)
 * @property {number} BuyPrc 매수가(21.4)
 * @property {number} SellPnlAmt 매도손익금액(16)
 * @property {number} PnlRat 손익율(18.6)
 * @property {number} NowPrc 현재가(15.2)
 * @property {number} CrdtAmt 신용금액(16)
 * @property {string} DueDt 만기일(8)
 * @property {number} PrdaySellExecPrc 전일매도체결가(13.2)
 * @property {number} PrdaySellQty 전일매도수량(16)
 * @property {number} PrdayBuyExecPrc 전일매수체결가(13.2)
 * @property {number} PrdayBuyQty 전일매수수량(16)
 * @property {string} LoanDt 대출일(8)
 * @property {number} AvrUprc 평균단가(13.2)
 * @property {number} SellAbleQty 매도가능수량(16)
 * @property {number} SellOrdQty 매도주문수량(16)
 * @property {number} CrdayBuyExecAmt 금일매수체결금액(16)
 * @property {number} CrdaySellExecAmt 금일매도체결금액(16)
 * @property {number} PrdayBuyExecAmt 전일매수체결금액(16)
 * @property {number} PrdaySellExecAmt 전일매도체결금액(16)
 * @property {number} BalEvalAmt 잔고평가금액(16)
 * @property {number} EvalPnl 평가손익(16)
 * @property {number} MnyOrdAbleAmt 현금주문가능금액(16)
 * @property {number} OrdAbleAmt 주문가능금액(16)
 * @property {number} SellUnercQty 매도미체결수량(16)
 * @property {number} SellUnsttQty 매도미결제수량(16)
 * @property {number} BuyUnercQty 매수미체결수량(16)
 * @property {number} BuyUnsttQty 매수미결제수량(16)
 * @property {number} UnsttQty 미결제수량(16)
 * @property {number} UnercQty 미체결수량(16)
 * @property {number} PrdayCprc 전일종가(15.2)
 * @property {number} PchsAmt 매입금액(16)
 * @property {string} RegMktCode 등록시장코드(2)
 * @property {string} LoanDtlClssCode 대출상세분류코드(2)
 * @property {number} DpspdgLoanQty 예탁담보대출수량(16)
 */
/**
 * [주식] 계좌 - BEP단가조회 (초당 1건 제한)
 * @param {string} BalCreTp 잔고생성구분(1) - 0:전체 1:현물 9:선물대용
 * @param {string} CmsnAppTpCode 수수료적용구분(1) - 0:평가시 수수료 미적용 1:평가시 수수료 적용
 * @param {string} D2balBaseQryTp D2잔고기준조회구분(1) - 0:전부조회 1:D2잔고 0이상만 조회
 * @param {string} UprcTpCode 단가구분(1) - 0:평균단가 1:BEP단가
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<CSPAQ12300|null>}  실패시 null 반환
 */
module.exports= async(BalCreTp="",CmsnAppTpCode="",D2balBaseQryTp="",UprcTpCode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"CSPAQ12300",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "CSPAQ12300InBlock1":{
        "BalCreTp":BalCreTp,
        "CmsnAppTpCode":CmsnAppTpCode,
        "D2balBaseQryTp":D2balBaseQryTp,
        "UprcTpCode":UprcTpCode
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