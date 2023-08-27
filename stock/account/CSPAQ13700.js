const lib=require("k-lib-im");
/**
 * @typedef {Object} CSPAQ13700 [주식] 계좌 - 현물계좌_주문체결내역_조회_API
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {CSPAQ13700_OutBlock1} CSPAQ13700OutBlock1
 * @property {CSPAQ13700_OutBlock2} CSPAQ13700OutBlock2
 * @property {CSPAQ13700_OutBlock3} CSPAQ13700OutBlock3
 */
/**
 * @typedef {Object} CSPAQ13700_OutBlock1 [주식] 계좌 - 현물계좌_주문체결내역_조회_API 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} AcntNo 계좌번호(20)
 * @property {string} InptPwd 입력비밀번호(8)
 * @property {string} OrdMktCode 주문시장코드(2)
 * @property {string} BnsTpCode 매매구분(1)
 * @property {string} IsuNo 종목번호(12)
 * @property {string} ExecYn 체결여부(1)
 * @property {string} OrdDt 주문일(8)
 * @property {number} SrtOrdNo2 시작주문번호2(10)
 * @property {string} BkseqTpCode 역순구분(1)
 * @property {string} OrdPtnCode 주문유형코드(2)
 */
/**
 * @typedef {Object} CSPAQ13700_OutBlock2 [주식] 계좌 - 현물계좌_주문체결내역_조회_API 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {number} SellExecAmt 매도체결금액(16)
 * @property {number} BuyExecAmt 매수체결금액(16)
 * @property {number} SellExecQty 매도체결수량(16)
 * @property {number} BuyExecQty 매수체결수량(16)
 * @property {number} SellOrdQty 매도주문수량(16)
 * @property {number} BuyOrdQty 매수주문수량(16)
 */
/**
 * @typedef {Object} CSPAQ13700_OutBlock3 [주식] 계좌 - 현물계좌_주문체결내역_조회_API 
 * @property {string} OrdDt 주문일(8)
 * @property {string} MgmtBrnNo 관리지점번호(3)
 * @property {string} OrdMktCode 주문시장코드(2)
 * @property {number} OrdNo 주문번호(10)
 * @property {number} OrgOrdNo 원주문번호(10)
 * @property {string} IsuNo 종목번호(12)
 * @property {string} IsuNm 종목명(40)
 * @property {string} BnsTpCode 매매구분(1)
 * @property {string} BnsTpNm 매매구분(10)
 * @property {string} OrdPtnCode 주문유형코드(2)
 * @property {string} OrdPtnNm 주문유형명(40)
 * @property {number} OrdTrxPtnCode 주문처리유형코드(9)
 * @property {string} OrdTrxPtnNm 주문처리유형명(50)
 * @property {string} MrcTpCode 정정취소구분(1)
 * @property {string} MrcTpNm 정정취소구분명(10)
 * @property {number} MrcQty 정정취소수량(16)
 * @property {number} MrcAbleQty 정정취소가능수량(16)
 * @property {number} OrdQty 주문수량(16)
 * @property {number} OrdPrc 주문가격(15.2)
 * @property {number} ExecQty 체결수량(16)
 * @property {number} ExecPrc 체결가(15.2)
 * @property {string} ExecTrxTime 체결처리시각(9)
 * @property {string} LastExecTime 최종체결시각(9)
 * @property {string} OrdprcPtnCode 호가유형코드(2)
 * @property {string} OrdprcPtnNm 호가유형명(40)
 * @property {string} OrdCndiTpCode 주문조건구분(1)
 * @property {number} AllExecQty 전체체결수량(16)
 * @property {string} RegCommdaCode 통신매체코드(2)
 * @property {string} CommdaNm 통신매체명(40)
 * @property {string} MbrNo 회원번호(3)
 * @property {string} RsvOrdYn 예약주문여부(1)
 * @property {string} LoanDt 대출일(8)
 * @property {string} OrdTime 주문시각(9)
 * @property {string} OpDrtnNo 운용지시번호(12)
 * @property {string} OdrrId 주문자ID(16)
 */
/**
 * [주식] 계좌 - 현물계좌_주문체결내역_조회_API (초당 1건 제한)
 * @param {string} OrdMktCode 주문시장코드(2) - 00.전체, 10.거래소, 20.코스닥, 30.프리보드
 * @param {string} BnsTpCode 매매구분(1) - 0#전체, 1#매도, 2#매수
 * @param {string} IsuNo 종목번호(12) - 주식 : A+종목코드, ELW : J+종목코드
 * @param {string} ExecYn 체결여부(1) - 0.전체, 1.체결, 3.미체결
 * @param {string} OrdDt 주문일(8) - 
 * @param {number} SrtOrdNo2 시작주문번호2(10) - 역순구분이 순 : 000000000, 역순구분이 역순 : 999999999
 * @param {string} BkseqTpCode 역순구분(1) - 0.역순, 1.정순
 * @param {string} OrdPtnCode 주문유형코드(2) - 00.전체, 98.매도전체, 99.매수전체, 01.현금매도, 02.현금매수, 05.저축매도, 06.저축매수, 09.상품매도, 10.상품매수, 03.융자매도, 04.융자매수, 07.대주매도, 08.대주매수, 11.선물대용매도, 13.현금매도(프), 14.현금매수(프), 17.대출, 18.대출상환
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<CSPAQ13700|null>}  실패시 null 반환
 */
 exports.현물계좌_주문체결내역_조회_API = async(OrdMktCode="",BnsTpCode="",IsuNo="",ExecYn="",OrdDt="",SrtOrdNo2=0,BkseqTpCode="",OrdPtnCode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"CSPAQ13700",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "CSPAQ13700InBlock1":{
        "OrdMktCode":OrdMktCode,
        "BnsTpCode":BnsTpCode,
        "IsuNo":IsuNo,
        "ExecYn":ExecYn,
        "OrdDt":OrdDt,
        "SrtOrdNo2":SrtOrdNo2,
        "BkseqTpCode":BkseqTpCode,
        "OrdPtnCode":OrdPtnCode
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