const lib=require("k-lib-im");
/**
 * @typedef {Object} CSPBQ00200 [주식] 계좌 - 현물계좌증거금률별주문가능수량조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {CSPBQ00200_OutBlock1} CSPBQ00200OutBlock1
 * @property {CSPBQ00200_OutBlock2} CSPBQ00200OutBlock2
 */
/**
 * @typedef {Object} CSPBQ00200_OutBlock1 [주식] 계좌 - 현물계좌증거금률별주문가능수량조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} BnsTpCode 매매구분(1)
 * @property {string} AcntNo 계좌번호(20)
 * @property {string} InptPwd 입력비밀번호(8)
 * @property {string} IsuNo 종목번호(12)
 * @property {number} OrdPrc 주문가격(15.2)
 * @property {string} RegCommdaCode 통신매체코드(2)
 */
/**
 * @typedef {Object} CSPBQ00200_OutBlock2 [주식] 계좌 - 현물계좌증거금률별주문가능수량조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} AcntNm 계좌명(40)
 * @property {string} IsuNm 종목명(40)
 * @property {number} Dps 예수금(16)
 * @property {number} SubstAmt 대용금액(16)
 * @property {number} CrdtPldgRuseAmt 신용담보재사용금액(16)
 * @property {number} MnyOrdAbleAmt 현금주문가능금액(16)
 * @property {number} SubstOrdAbleAmt 대용주문가능금액(16)
 * @property {number} MnyMgn 현금증거금액(16)
 * @property {number} SubstMgn 대용증거금액(16)
 * @property {number} SeOrdAbleAmt 거래소금액(16)
 * @property {number} KdqOrdAbleAmt 코스닥금액(16)
 * @property {number} PrsmptDpsD1 추정예수금(D+1)(16)
 * @property {number} PrsmptDpsD2 추정예수금(D+2)(16)
 * @property {number} MnyoutAbleAmt 출금가능금액(16)
 * @property {number} RcvblAmt 미수금액(16)
 * @property {number} CmsnRat 수수료율(15.5)
 * @property {number} AddLevyAmt 추가징수금액(16)
 * @property {number} RuseObjAmt 재사용대상금액(16)
 * @property {number} MnyRuseObjAmt 현금재사용대상금액(16)
 * @property {number} FirmMgnRat 이용사증거금률(7.4)
 * @property {number} SubstRuseObjAmt 대용재사용대상금액(16)
 * @property {number} IsuMgnRat 종목증거금률(7.4)
 * @property {number} AcntMgnRat 계좌증거금률(7.4)
 * @property {number} TrdMgnrt 거래증거금률(7.4)
 * @property {number} Cmsn 수수료(16)
 * @property {number} MgnRat20pctOrdAbleAmt 증거금률20퍼센트주문가능금액(16)
 * @property {number} MgnRat20OrdAbleQty 증거금률100퍼센트현금주문가능수량(16)
 * @property {number} MgnRat30pctOrdAbleAmt 증거금률30퍼센트주문가능금액(16)
 * @property {number} MgnRat30OrdAbleQty 증거금률30퍼센트주문가능수량(16)
 * @property {number} MgnRat40pctOrdAbleAmt 증거금률40퍼센트주문가능금액(16)
 * @property {number} MgnRat40OrdAbleQty 증거금률40퍼센트주문가능수량(16)
 * @property {number} MgnRat100pctOrdAbleAmt 증거금률100퍼센트주문가능금액(16)
 * @property {number} MgnRat100OrdAbleQty 증거금률100퍼센트주문가능수량(16)
 * @property {number} MgnRat100MnyOrdAbleAmt 증거금률100퍼센트현금주문가능금액(16)
 * @property {number} MgnRat100MnyOrdAbleQty 증거금률100퍼센트현금주문가능수량(16)
 * @property {number} MgnRat20pctRuseAbleAmt 증거금률20퍼센트재사용가능금액(16)
 * @property {number} MgnRat30pctRuseAbleAmt 증거금률30퍼센트재사용가능금액(16)
 * @property {number} MgnRat40pctRuseAbleAmt 증거금률40퍼센트재사용가능금액(16)
 * @property {number} MgnRat100pctRuseAbleAmt 증거금률100퍼센트재사용가능금액(16)
 * @property {number} OrdAbleQty 주문가능수량(16)
 * @property {number} OrdAbleAmt 주문가능금액(16)
 */
/**
 * [주식] 계좌 - 현물계좌증거금률별주문가능수량조회 (초당 1건 제한)
 * @param {string} BnsTpCode 매매구분(1) - 1#매도, 2#매수
 * @param {string} IsuNo 종목번호(12) - 
 * @param {number} OrdPrc 주문가격(15.2) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<CSPBQ00200|null>}  실패시 null 반환
 */
module.exports = async(BnsTpCode="",IsuNo="",OrdPrc=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"CSPBQ00200",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "CSPBQ00200InBlock1":{
        "BnsTpCode":BnsTpCode,
        "IsuNo":IsuNo,
        "OrdPrc":OrdPrc
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