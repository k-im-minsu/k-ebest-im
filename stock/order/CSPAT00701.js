const lib=require("k-lib-im");
/**
 * @typedef {Object} CSPAT00701 [주식] 주문 - 현물정정주문
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {CSPAT00701_OutBlock1} CSPAT00701OutBlock1
 * @property {CSPAT00701_OutBlock2} CSPAT00701OutBlock2
 */
/**
 * @typedef {Object} CSPAT00701_OutBlock1 [주식] 주문 - 현물정정주문 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {number} OrgOrdNo 원주문번호(10)
 * @property {string} AcntNo 계좌번호(20)
 * @property {string} InptPwd 입력비밀번호(8)
 * @property {string} IsuNo 종목번호(12)
 * @property {number} OrdQty 주문수량(16)
 * @property {string} OrdprcPtnCode 호가유형코드(2)
 * @property {string} OrdCndiTpCode 주문조건구분(1)
 * @property {number} OrdPrc 주문가(13.2)
 * @property {string} CommdaCode 통신매체코드(2)
 * @property {string} StrtgCode 전략코드(6)
 * @property {string} GrpId 그룹ID(20)
 * @property {number} OrdSeqNo 주문회차(10)
 * @property {number} PtflNo 포트폴리오번호(10)
 * @property {number} BskNo 바스켓번호(10)
 * @property {number} TrchNo 트렌치번호(10)
 * @property {number} ItemNo 아이템번호(10)
 */
/**
 * @typedef {Object} CSPAT00701_OutBlock2 [주식] 주문 - 현물정정주문 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {number} OrdNo 주문번호(10)
 * @property {number} PrntOrdNo 모주문번호(10)
 * @property {string} OrdTime 주문시각(9)
 * @property {string} OrdMktCode 주문시장코드(2)
 * @property {string} OrdPtnCode 주문유형코드(2)
 * @property {string} ShtnIsuNo 단축종목번호(9)
 * @property {string} PrgmOrdprcPtnCode 프로그램호가유형코드(2)
 * @property {string} StslOrdprcTpCode 공매도호가구분(1)
 * @property {string} StslAbleYn 공매도가능여부(1)
 * @property {string} MgntrnCode 신용거래코드(3)
 * @property {string} LoanDt 대출일(8)
 * @property {string} CvrgOrdTp 반대매매주문구분(1)
 * @property {string} LpYn 유동성공급자여부(1)
 * @property {string} MgempNo 관리사원번호(9)
 * @property {number} OrdAmt 주문금액(16)
 * @property {string} BnsTpCode 매매구분(1)
 * @property {number} SpareOrdNo 예비주문번호(10)
 * @property {number} CvrgSeqno 반대매매일련번호(10)
 * @property {number} RsvOrdNo 예약주문번호(10)
 * @property {number} MnyOrdAmt 현금주문금액(16)
 * @property {number} SubstOrdAmt 대용주문금액(16)
 * @property {number} RuseOrdAmt 재사용주문금액(16)
 * @property {string} AcntNm 계좌명(40)
 * @property {string} IsuNm 종목명(40)
 */
/**
 * [주식] 주문 - 현물정정주문 (초당 3건 제한)
 * @param {number} OrgOrdNo 원주문번호(10) - 
 * @param {string} IsuNo 종목번호(12) - 주식 : 종목코드 or A+종목코드(모의투자는 A+종목코드) ELW : J+종목코드 ETN : Q+종목코드
 * @param {number} OrdQty 주문수량(16) - 
 * @param {string} OrdprcPtnCode 호가유형코드(2) - 00#지정가 03#시장가 05#조건부지정가 06#최유리지정가 07#최우선지정가 61#장개시전시간외종가 81#시간외종가 82#시간외단일가
 * @param {string} OrdCndiTpCode 주문조건구분(1) - 0:없음, 1:IOC, 2:FOK
 * @param {number} OrdPrc 주문가(13.2) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<CSPAT00701|null>}  실패시 null 반환
 */
module.exports= async(OrgOrdNo=0,IsuNo="",OrdQty=0,OrdprcPtnCode="",OrdCndiTpCode="",OrdPrc=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"CSPAT00701",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "CSPAT00701InBlock1":{
        "OrgOrdNo":OrgOrdNo,
        "IsuNo":IsuNo,
        "OrdQty":OrdQty,
        "OrdprcPtnCode":OrdprcPtnCode,
        "OrdCndiTpCode":OrdCndiTpCode,
        "OrdPrc":OrdPrc
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/order",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}