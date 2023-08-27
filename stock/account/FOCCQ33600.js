const lib=require("k-lib-im");
/**
 * @typedef {Object} FOCCQ33600 [주식] 계좌 - 주식계좌_기간별수익률_상세
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {FOCCQ33600_OutBlock1} FOCCQ33600OutBlock1
 * @property {FOCCQ33600_OutBlock2} FOCCQ33600OutBlock2
 * @property {Array<FOCCQ33600_OutBlock3>} FOCCQ33600OutBlock3
 */
/**
 * @typedef {Object} FOCCQ33600_OutBlock1 [주식] 계좌 - 주식계좌_기간별수익률_상세 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} AcntNo 계좌번호(20)
 * @property {string} Pwd 비밀번호(8)
 * @property {string} QrySrtDt 조회시작일(8)
 * @property {string} QryEndDt 조회종료일(8)
 * @property {string} TermTp 기간구분(1)
 */
/**
 * @typedef {Object} FOCCQ33600_OutBlock2 [주식] 계좌 - 주식계좌_기간별수익률_상세 
 * @property {number} RecCnt 레코드갯수(5)
 * @property {string} AcntNm 계좌명(40)
 * @property {number} BnsctrAmt 매매약정금액(16)
 * @property {number} MnyinAmt 입금금액(16)
 * @property {number} MnyoutAmt 출금금액(16)
 * @property {number} InvstAvrbalPramt 투자원금평잔금액(16)
 * @property {number} InvstPlAmt 투자손익금액(16)
 * @property {number} InvstErnrat 투자수익률(9.2)
 */
/**
 * @typedef {Object} FOCCQ33600_OutBlock3 [주식] 계좌 - 주식계좌_기간별수익률_상세 
 * @property {string} BaseDt 기준일(8)
 * @property {number} FdEvalAmt 기초평가금액(19)
 * @property {number} EotEvalAmt 기말평가금액(19)
 * @property {number} InvstAvrbalPramt 투자원금평잔금액(16)
 * @property {number} BnsctrAmt 매매약정금액(16)
 * @property {number} MnyinSecinAmt 입금고액(16)
 * @property {number} MnyoutSecoutAmt 출금고액(16)
 * @property {number} EvalPnlAmt 평가손익금액(16)
 * @property {number} TermErnrat 기간수익률(11.3)
 * @property {number} Idx 지수(13.2)
 */
/**
 * [주식] 계좌 - 주식계좌_기간별수익률_상세 (초당 1건 제한)
 * @param {string} QrySrtDt 조회시작일(8) - 
 * @param {string} QryEndDt 조회종료일(8) - 
 * @param {string} TermTp 기간구분(1) - 1:일별, 2:주별, 3:월별
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<FOCCQ33600|null>}  실패시 null 반환
 */
 exports.주식계좌_기간별수익률_상세 = async(QrySrtDt="",QryEndDt="",TermTp="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"FOCCQ33600",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "FOCCQ33600InBlock1":{
        "QrySrtDt":QrySrtDt,
        "QryEndDt":QryEndDt,
        "TermTp":TermTp
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