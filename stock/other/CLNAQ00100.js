const lib=require("k-lib-im");
/**
 * @typedef {Object} CLNAQ00100 [주식] 기타 - 예탁담보융자가능종목현황조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {CLNAQ00100_OutBlock1} CLNAQ00100OutBlock1
 * @property {Array<CLNAQ00100_OutBlock2>} CLNAQ00100OutBlock2
 * @property {CLNAQ00100_OutBlock3} CLNAQ00100OutBlock3
 */
/**
 * @typedef {Object} CLNAQ00100_OutBlock1 [주식] 기타 - 예탁담보융자가능종목현황조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} QryTp 조회구분(1)
 * @property {string} IsuNo 종목번호(12)
 * @property {string} SecTpCode 유가증권구분(1)
 * @property {string} LoanIntrstGrdCode 대출이자등급코드(2)
 * @property {string} LoanTp 대출구분(1)
 */
/**
 * @typedef {Object} CLNAQ00100_OutBlock2 [주식] 기타 - 예탁담보융자가능종목현황조회 
 * @property {string} IsuNo 종목번호(12)
 * @property {string} IsuNm 종목명(40)
 * @property {number} Parprc 액면가(13.2)
 * @property {number} PrdayCprc 전일종가(13.2)
 * @property {number} RatVal 비율값(19.8)
 * @property {number} SubstPrc 대용가(13.2)
 * @property {string} RegTpNm 등록구분(20)
 * @property {string} SpotMgnLevyClssNm 현물증거금징수분류명(40)
 * @property {string} FnoTrdStopRsnCnts 거래정지사유(40)
 * @property {string} DgrsPtnNm 요주의유형명(40)
 * @property {string} AcdPtnNm 사고유형(40)
 * @property {string} MktTpNm 시장구분(20)
 * @property {number} LmtVal 한도값(18)
 * @property {number} AcntLmtVal 계좌한도값(18)
 * @property {string} LoanGrdCode 대출등급코드(2)
 * @property {number} LoanAmt 대출금액(16)
 * @property {number} LoanAbleRat 대출가능율(26.9)
 * @property {number} LoanIntrat1 대출이율1(14.4)
 * @property {string} RegPsnId 등록자ID(16)
 * @property {number} Rat01 비율값(19.8)
 * @property {number} Rat02 비율값(19.8)
 */
/**
 * @typedef {Object} CLNAQ00100_OutBlock3 [주식] 기타 - 예탁담보융자가능종목현황조회 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {number} LrgMnyoutSumAmt 대출금합계금액(16)
 */
/**
 * [주식] 기타 - 예탁담보융자가능종목현황조회 (초당 1건 제한)
 * @param {string} QryTp 조회구분(1) - 0#전체, 1#가능, 2#불가능
 * @param {string} IsuNo 종목번호(12) - 
 * @param {string} SecTpCode 유가증권구분(1) - 0#전체, 3#거래소, 4#코스닥, 1#주식(거래소+코스닥)
 * @param {string} LoanIntrstGrdCode 대출이자등급코드(2) - 00
 * @param {string} LoanTp 대출구분(1) - 1#예탁증권담보융자, 3#융자, 4#유통대주, 5#자기대주
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<CLNAQ00100|null>}  실패시 null 반환
 */
module.exports = async(QryTp="",IsuNo="",SecTpCode="",LoanIntrstGrdCode="",LoanTp="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"CLNAQ00100",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "CLNAQ00100InBlock1":{
        "QryTp":QryTp,
        "IsuNo":IsuNo,
        "SecTpCode":SecTpCode,
        "LoanIntrstGrdCode":LoanIntrstGrdCode,
        "LoanTp":LoanTp
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/etc",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}