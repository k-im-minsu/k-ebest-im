const lib=require("k-lib-im");
/**
 * @typedef {Object} CSPAQ00600 [주식] 계좌 - 계좌별신용한도조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {CSPAQ00600_OutBlock1} CSPAQ00600OutBlock1
 * @property {CSPAQ00600_OutBlock2} CSPAQ00600OutBlock2
 */
/**
 * @typedef {Object} CSPAQ00600_OutBlock1 [주식] 계좌 - 계좌별신용한도조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} AcntNo 계좌번호(20)
 * @property {string} InptPwd 입력비밀번호(8)
 * @property {string} LoanDtlClssCode 대출상세분류코드(2)
 * @property {string} IsuNo 종목번호(12)
 * @property {number} OrdPrc 주문가(13.2)
 * @property {string} CommdaCode 통신매체코드(2)
 */
/**
 * @typedef {Object} CSPAQ00600_OutBlock2 [주식] 계좌 - 계좌별신용한도조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} AcntNm 계좌명(40)
 * @property {number} OrdPrc 주문가(13.2)
 * @property {number} SloanLmtAmt 대주한도(16)
 * @property {number} SloanAmtSum 대주금액합계(16)
 * @property {number} SloanNewAmt 대주신규금액(16)
 * @property {number} SloanRfundAmt 대주상환금액(16)
 * @property {number} MktcplMloanLmtAmt 유통융자한도금액(16)
 * @property {number} MktcplMloanAmtSum 유통융자금액합계(16)
 * @property {number} MktcplMloanNewAmt 유통융자신규금액(16)
 * @property {number} MktcplMloanRfundAmt 유통융자상환금액(16)
 * @property {number} SfaccMloanLmtAmt 자기융자한도금액(16)
 * @property {number} SfaccMloanAmtSum 자기융자금액합계(16)
 * @property {number} SfaccMloanNewAmt 자기융자신규금액(16)
 * @property {number} SfaccMloanRfundAmt 자기융자상환금액(16)
 * @property {number} BrnMktcplMloanLmtAmt 지점유통융자한도금액(16)
 * @property {number} BrnMktcplMloanNewAmt 지점유통융자신규금액(16)
 * @property {number} BrnMktcplMloanRfundAmt 지점유통융자상환금액(16)
 * @property {number} BrnMktcplMloanUseAmt 지점유통융자사용금액(16)
 * @property {number} BrnSfaccMloanLmtAmt 지점자기융자한도금액(16)
 * @property {number} BrnSfaccMloanNewAmt 지점자기융자신규금액(16)
 * @property {number} BrnSfaccMloanRfundAmt 지점자기융자상환금액(16)
 * @property {number} BrnSfaccMloanUseAmt 지점자기융자사용금액(16)
 * @property {string} FirmMloanLmtMgmtYn 이용사융자한도관리여부(1)
 * @property {string} FirmCrdtIsuRestrcTp 이용사신용종목제한구분(1)
 * @property {number} PldgMaintRat 담보유지비율(7.4)
 * @property {string} FirmNm 이용사명(50)
 * @property {number} PldgRat 담보비율(7.4)
 * @property {number} DpsastSum 예탁자산합계(17)
 * @property {number} LmtChgAbleAmt 한도변경가능금액(16)
 * @property {number} OrdAbleAmt 주문가능금액(16)
 * @property {number} OrdAbleQty 주문가능수량(16)
 * @property {number} RcvblUablOrdAbleQty 미수불가주문가능수량(16)
 */
/**
 * [주식] 계좌 - 계좌별신용한도조회 (초당 1건 제한)
 * @param {string} LoanDtlClssCode 대출상세분류코드(2) - 01#유통융자, 03#자기융자, 05#유통대주, 07#자기대주
 * @param {string} IsuNo 종목번호(12) - 
 * @param {number} OrdPrc 주문가(13.2) - 
 * @param {string} CommdaCode 통신매체코드(2) - 41#xingAPI
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<CSPAQ00600|null>}  실패시 null 반환
 */
module.exports = async(LoanDtlClssCode="",IsuNo="",OrdPrc=0,CommdaCode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"CSPAQ00600",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "CSPAQ00600InBlock1":{
        "LoanDtlClssCode":LoanDtlClssCode,
        "IsuNo":IsuNo,
        "OrdPrc":OrdPrc,
        "CommdaCode":CommdaCode
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