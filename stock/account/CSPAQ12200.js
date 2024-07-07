const lib=require("k-lib-im");
/**
 * @typedef {Object} CSPAQ12200 [주식] 계좌 - 현물계좌예수금_주문가능금액_총평가_조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {CSPAQ12200_OutBlock1} CSPAQ12200OutBlock1
 * @property {CSPAQ12200_OutBlock2} CSPAQ12200OutBlock2
 */
/**
 * @typedef {Object} CSPAQ12200_OutBlock1 [주식] 계좌 - 현물계좌예수금_주문가능금액_총평가_조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} MgmtBrnNo 관리지점번호(3)
 * @property {string} AcntNo 계좌번호(20)
 * @property {string} Pwd 비밀번호(8)
 * @property {string} BalCreTp 잔고생성구분(1)
 */
/**
 * @typedef {Object} CSPAQ12200_OutBlock2 [주식] 계좌 - 현물계좌예수금_주문가능금액_총평가_조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} BrnNm 지점명(40)
 * @property {string} AcntNm 계좌명(40)
 * @property {number} MnyOrdAbleAmt 현금주문가능금액(16)
 * @property {number} MnyoutAbleAmt 출금가능금액(16)
 * @property {number} SeOrdAbleAmt 거래소금액(16)
 * @property {number} KdqOrdAbleAmt 코스닥금액(16)
 * @property {number} BalEvalAmt 잔고평가금액(16)
 * @property {number} RcvblAmt 미수금액(16)
 * @property {number} DpsastTotamt 예탁자산총액(16)
 * @property {number} PnlRat 손익율(18.6)
 * @property {number} InvstOrgAmt 투자원금(20)
 * @property {number} InvstPlAmt 투자손익금액(16)
 * @property {number} CrdtPldgOrdAmt 신용담보주문금액(16)
 * @property {number} Dps 예수금(16)
 * @property {number} SubstAmt 대용금액(16)
 * @property {number} D1Dps D1예수금(16)
 * @property {number} D2Dps D2예수금(16)
 * @property {number} MnyrclAmt 현금미수금액(16)
 * @property {number} MgnMny 증거금현금(16)
 * @property {number} MgnSubst 증거금대용(16)
 * @property {number} ChckAmt 수표금액(16)
 * @property {number} SubstOrdAbleAmt 대용주문가능금액(16)
 * @property {number} MgnRat100pctOrdAbleAmt 증거금률100퍼센트주문가능금액(16)
 * @property {number} MgnRat35ordAbleAmt 증거금률35%주문가능금액(16)
 * @property {number} MgnRat50ordAbleAmt 증거금률50%주문가능금액(16)
 * @property {number} PrdaySellAdjstAmt 전일매도정산금액(16)
 * @property {number} PrdayBuyAdjstAmt 전일매수정산금액(16)
 * @property {number} CrdaySellAdjstAmt 금일매도정산금액(16)
 * @property {number} CrdayBuyAdjstAmt 금일매수정산금액(16)
 * @property {number} D1ovdRepayRqrdAmt D1연체변제소요금액(16)
 * @property {number} D2ovdRepayRqrdAmt D2연체변제소요금액(16)
 * @property {number} D1PrsmptWthdwAbleAmt D1추정인출가능금액(16)
 * @property {number} D2PrsmptWthdwAbleAmt D2추정인출가능금액(16)
 * @property {number} DpspdgLoanAmt 예탁담보대출금액(16)
 * @property {number} Imreq 신용설정보증금(16)
 * @property {number} MloanAmt 융자금액(16)
 * @property {number} ChgAfPldgRat 변경후담보비율(9.3)
 * @property {number} OrgPldgAmt 원담보금액(16)
 * @property {number} SubPldgAmt 부담보금액(16)
 * @property {number} RqrdPldgAmt 소요담보금액(16)
 * @property {number} OrgPdlckAmt 원담보부족금액(16)
 * @property {number} PdlckAmt 담보부족금액(16)
 * @property {number} AddPldgMny 추가담보현금(16)
 * @property {number} D1OrdAbleAmt D1주문가능금액(16)
 * @property {number} CrdtIntdltAmt 신용이자미납금액(16)
 * @property {number} EtclndAmt 기타대여금액(16)
 * @property {number} NtdayPrsmptCvrgAmt 익일추정반대매매금액(16)
 * @property {number} OrgPldgSumAmt 원담보합계금액(16)
 * @property {number} CrdtOrdAbleAmt 신용주문가능금액(16)
 * @property {number} SubPldgSumAmt 부담보합계금액(16)
 * @property {number} CrdtPldgAmtMny 신용담보금현금(16)
 * @property {number} CrdtPldgSubstAmt 신용담보대용금액(16)
 * @property {number} AddCrdtPldgMny 추가신용담보현금(16)
 * @property {number} CrdtPldgRuseAmt 신용담보재사용금액(16)
 * @property {number} AddCrdtPldgSubst 추가신용담보대용(16)
 * @property {number} CslLoanAmtdt1 매도대금담보대출금액(16)
 * @property {number} DpslRestrcAmt 처분제한금액(16)
 */
/**
 * [주식] 계좌 - 현물계좌예수금_주문가능금액_총평가_조회 (초당 1건 제한)
 * @param {string} BalCreTp 잔고생성구분(1) - 0
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<CSPAQ12200|null>}  실패시 null 반환
 */
module.exports= async(BalCreTp="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"CSPAQ12200",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "CSPAQ12200InBlock1":{
        "BalCreTp":BalCreTp
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